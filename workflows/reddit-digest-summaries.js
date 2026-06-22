export const meta = {
  name: 'reddit-digest-summaries',
  description: 'Two-phase Reddit digest: ONE throttled fetcher agent downloads every post thread (+ article) to a shared cache dir, then summarizer agents (one per post) read the cache in parallel and write content + discussion summaries. Serial fetching avoids the HTTP 429 that concurrent fetching triggers.',
  phases: [
    { title: 'Fetch', detail: 'one agent: serial throttled curl of every post (.json primary, .rss fallback), self-healing 2nd pass for rate-limited threads, timestamped + time-bounded' },
    { title: 'Summarize', detail: 'one agent per post reads the cached thread/article and writes summaries (no network)' },
  ],
}

// Reddit blocks the .json/HTML API from datacenter/sandbox IPs (HTTP 403) but allows .rss; and it
// rate-limits (HTTP 429) when many requests land at once. So: a SINGLE fetcher pulls everything
// serially (with a small sleep), .json first (exact counts) then .rss fallback, writing raw bodies
// to a shared cache dir. Summarizer agents then read those files — never hitting the network. See
// CLAUDE.md.

const FETCH_ITEM_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['id', 'comments_count', 'counts_exact', 'ok'],
  properties: {
    id: { type: 'string' },
    comments_count: { type: 'integer', description: 'num_comments from .json, or the number of comment <entry> elements from the .rss fallback' },
    counts_exact: { type: 'boolean', description: 'true if counts came from .json; false if approximated from .rss' },
    score: { type: ['integer', 'null'] },
    ok: { type: 'boolean', description: 'true if a comment thread (json or rss) was saved to the cache' },
    note: { type: 'string', description: 'short status, e.g. "json", "rss fallback", "403+429 both failed"' },
  },
}
const FETCH_SCHEMA = { type: 'object', additionalProperties: false, required: ['items'], properties: { items: { type: 'array', items: FETCH_ITEM_SCHEMA } } }

const POST_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['rank', 'id', 'content_summary', 'discussion_summary', 'comments_count', 'counts_exact'],
  properties: {
    rank: { type: 'integer' },
    id: { type: 'string' },
    content_summary: { type: 'string', description: '2-4 sentence neutral summary of the post content (selftext, linked article/video, or description of an image/gallery post). Italic error note if unavailable.' },
    discussion_summary: { type: 'string', description: '2-4 sentence neutral summary of the comment discussion. Italic error note if the cached thread is missing/empty.' },
    comments_count: { type: 'integer' },
    counts_exact: { type: 'boolean' },
    score: { type: ['integer', 'null'] },
  },
}

const input = typeof args === 'string' ? JSON.parse(args) : args
const sub = input.subreddit
const cache = input.cacheDir
const posts = input.posts

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'

// ---- Phase 1: ONE fetcher, serial + throttled ----
phase('Fetch')
const fetched = await agent(
  `You are the SINGLE FETCHER for an r/${sub} weekly digest. Download every post's comment thread (and, for link posts, the linked article) into a shared cache dir, ONE AT A TIME with a short pause between requests. Do NOT parallelize — concurrent requests trip Reddit's rate limiter (HTTP 429).

Cache dir: ${cache}   (start with: mkdir -p "${cache}")
Use this Chrome User-Agent for every curl:  UA="${UA}"

Posts, in order:
${posts.map(p => `- id=${p.id} kind=${p.kind} permalink=${p.permalink}${p.external_url ? ` article=${p.external_url}` : ''}`).join('\n')}

Write a SINGLE foreground bash script (one Bash call). It must be deterministic, time-bounded, self-logging, and SELF-HEALING under Reddit rate-limiting (HTTP 429 → empty bodies):

TIMESTAMPED LOGGING (so progress/timing are always visible):
    LOG="${cache}/fetch.log"
    log(){ printf '[%s] %s\\n' "$(date -u +%H:%M:%S)" "$*" | tee -a "$LOG"; }
  Call log() for every action. Keep it FOREGROUND (never detached) so output streams.

HARD TIME BUDGET (prevents any multi-minute hang):
    DEADLINE=$(( $(date +%s) + 480 ))   # <=8 min total: generous enough to outlast a brief 429 window, still bounded
  Anywhere, if [ "$(date +%s)" -ge "$DEADLINE" ], STOP hitting the network, log "deadline reached — skipping remaining", and mark every still-missing post ok=false note="skipped(deadline)". Partial always beats a hang.

A thread counts as CACHED if "${cache}/<id>.comments.rss" is >200 bytes OR "${cache}/<id>.comments.json" starts with "[".

PASS 1 — for each id in order:
  - If already CACHED → log "skip <id> (cached)", no network. (Resumable after a crash; never re-hammer Reddit.)
  - Else JSON first:  curl -sL --max-time 25 --compressed -A "$UA" "https://old.reddit.com/r/${sub}/comments/<id>/.json?raw_json=1&limit=200" -o "${cache}/<id>.comments.json"
  - If that file does NOT start with "[" (a 403 block page, expected from datacenter IPs), fall back to RSS:  curl -sL --max-time 25 --compressed -A "$UA" "https://old.reddit.com/r/${sub}/comments/<id>/.rss?limit=100" -o "${cache}/<id>.comments.rss"
  - On HTTP 429 / empty body, retry that one curl ONCE after \`sleep 8\`.
  - For link posts, also fetch the article (skip if "${cache}/<id>.article.html" >200 bytes).
  - \`sleep 3\` between posts that actually hit the network.

PASS 2 — SELF-HEAL (the key fix for rate-limiting): after pass 1, build the list of ids STILL not CACHED. If non-empty and budget remains, Reddit was throttling, so recover gently:
  - log "cooldown 20s before retrying N rate-limited threads"; \`sleep 20\`  (a brief pause lets Reddit's limiter recover)
  - For each remaining id: try the RSS feed up to 2 more times, \`sleep 15\` between attempts, \`sleep 10\` between posts; save when you get >400 bytes. Respect the DEADLINE.

After both passes: log "done: cached=N healed=H failed=K elapsed=Ss".

Then parse each saved file (small python) to produce, per id:
  - valid *.comments.json → comments_count = element[0].data.children[0].data.num_comments, score = post score, counts_exact=true, note="json", ok=true
  - else *.comments.rss with <entry> elements → comments_count = number of <entry> elements, score=null, counts_exact=false, note="rss", ok=true
  - else → ok=false, comments_count=0, note the failure (e.g. "403+429" or "skipped(deadline)")

Return {items:[{id,comments_count,counts_exact,score,ok,note}, ...]} covering all ${posts.length} posts.`,
  { label: 'fetch-all (serial)', phase: 'Fetch', schema: FETCH_SCHEMA }
)

const byId = {}
for (const it of (fetched?.items || [])) byId[it.id] = it
log(`fetched ${Object.values(byId).filter(x => x.ok).length}/${posts.length} threads (${Object.values(byId).filter(x => x.counts_exact).length} via json)`)

// ---- Phase 2: summarizers read the cache in parallel (no network) ----
phase('Summarize')
const results = await parallel(posts.map(p => () => {
  const m = byId[p.id] || {}
  return agent(
    `You are writing ONE entry for a weekly r/${sub} (Reddit) digest. Factual, neutral, concise — a professional digest. No first person.

Post #${p.rank}: "${p.title}"
id=${p.id}  kind=${p.kind}  comments page: ${p.permalink}${p.external_url ? `\nExternal link: ${p.external_url}` : ''}
${p.selftext ? `Self-text (excerpt): ${p.selftext}` : ''}

A fetcher has already cached this post's data on disk. READ it from the cache — do NOT fetch from Reddit yourself (that causes rate limits). First run: ls "${cache}/${p.id}".*  then read whichever exist:
- ${cache}/${p.id}.comments.json  — a 2-element array; element[1].data.children[*].data.body are the comments
- ${cache}/${p.id}.comments.rss   — Atom <entry> elements, each an HTML <content> comment
- ${cache}/${p.id}.article.html    — the linked article (link posts only)

CONTENT SUMMARY (2-4 sentences):
- self post → summarize the Self-text above.
- link post → read ${p.id}.article.html and summarize the article/video (YouTube: use the <title>/description).
- image/gallery/Reddit-video (media) → you cannot see the media; describe it from the title + selftext, prefixed "(image/video post)".
DISCUSSION SUMMARY (2-4 sentences): read the cached comments file and summarize the main themes, advice, and debates. If no comments file exists or it is empty, use an italic note like "*Comments unavailable (Reddit rate-limited the fetch).*"

Use these fetcher-provided counts (do not refetch): comments_count=${m.comments_count ?? 0}, counts_exact=${m.counts_exact ?? false}, score=${m.score ?? 'null'}.

Return the structured object with rank=${p.rank}, id="${p.id}", and those count fields.`,
    { label: `#${p.rank} ${p.title.slice(0, 32)}`, phase: 'Summarize', schema: POST_SCHEMA }
  )
}))

return results.filter(Boolean)
