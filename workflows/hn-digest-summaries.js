export const meta = {
  name: 'hn-digest-summaries',
  description: 'For each top HN story, fetch the article + HN comments and write neutral summaries of both',
  phases: [
    { title: 'Summarize', detail: 'one agent per story: fetch article + comments, summarize both, note fetch errors' },
    { title: 'Heal', detail: 'retry any summarizers that hit the structured-output retry cap; placeholder if still failing' },
  ],
}

const STORY_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['rank', 'id', 'article_summary', 'discussion_summary'],
  properties: {
    rank: { type: 'integer' },
    id: { type: 'string' },
    article_summary: { type: 'string', description: '2-4 sentence neutral factual summary of the linked article, OR an italic markdown error note if it could not be fetched' },
    discussion_summary: { type: 'string', description: '2-4 sentence neutral summary of the main themes/debates in the HN comments, OR an italic markdown error note' },
  },
}

// The summarizer prompt for one story. `extra` appends a retry hint on the healing pass.
const promptFor = (s, extra) =>
  `You are writing ONE entry for a Hacker News daily digest. Be factual, neutral, and concise — like a professional news digest. No first person, no "the author writes", no meta commentary.

Story #${s.rank}: "${s.title}"
Article URL: ${s.url}
HN comments URL (shown to readers): https://news.ycombinator.com/item?id=${s.id}
Points: ${s.points} | Comments: ${s.num_comments}

TASK 1 — ARTICLE SUMMARY:
Fetch the article at the Article URL. Prefer the WebFetch tool if you have it; otherwise use:
  curl -sL --max-time 25 -A "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36" "${s.url}"
Write a 2-4 sentence neutral summary of the article's key claims/findings. If the page is JS-only, paywalled, blocked, or returns an HTTP error from BOTH WebFetch and curl, set article_summary to an italic markdown error note giving the reason, e.g. "*Could not fetch (HTTP 403 Forbidden).*" or "*Could not fetch (paywalled).*" Never fabricate article content. (For Twitter/X links, fetching usually fails — note it.)

TASK 2 — DISCUSSION SUMMARY:
To read the HN discussion reliably, fetch the JSON comment tree via:
  curl -sL --max-time 25 "https://hn.algolia.com/api/v1/items/${s.id}"
(If that JSON is very large, you may pipe through head -c 120000.) The JSON has nested "children" each with a "text" field (HTML). Read the top-level and most substantive comments and write a 2-4 sentence neutral summary of the main themes, debates, and notable points raised. If the API fails, fall back to WebFetch/curl on https://news.ycombinator.com/item?id=${s.id} . If the discussion truly cannot be read, set discussion_summary to an italic error note, e.g. "*Could not fetch comments (HTTP 429).*" (If the thread genuinely has 0 comments, say so: "*No comments yet.*")
${extra || ''}
Return the structured object with rank=${s.rank} and id="${s.id}".`

const summarize = (s, extra) =>
  agent(promptFor(s, extra), { label: `#${s.rank} ${s.title.slice(0, 38)}`, phase: 'Summarize', schema: STORY_SCHEMA })

const stories = typeof args === 'string' ? JSON.parse(args) : args

// Pass 1 — one summarizer per story, in parallel.
phase('Summarize')
const pass1 = await parallel(stories.map(s => () => summarize(s)))

// Index by rank; a null means that agent hit the structured-output retry cap (or died).
const byRank = new Map()
pass1.forEach((r, i) => { if (r) byRank.set(stories[i].rank, r) })

// Pass 2 — self-heal. The retry cap is often a transient formatting miss (the model
// wrote prose around the object, or over-long output), so a single bounded retry with a
// tighter instruction usually recovers it. This replaces the manual hand-backfill that
// kept recurring (2026-06-27 #30; 2026-07-04 #15,#29).
const missing = stories.filter(s => !byRank.has(s.rank))
if (missing.length) {
  phase('Heal')
  log(`Pass 2: retrying ${missing.length} straggler(s): ${missing.map(s => '#' + s.rank).join(', ')}`)
  const healHint = '\nIMPORTANT: A previous attempt failed to return valid output. Keep BOTH summaries tight (2-3 sentences each), avoid unusual characters, and return the structured object EXACTLY ONCE with no surrounding prose.'
  const pass2 = await parallel(missing.map(s => () => summarize(s, healHint)))
  pass2.forEach((r, i) => { if (r) byRank.set(missing[i].rank, r) })
}

// Anything STILL missing gets an inline placeholder — never silently drop a story, so the
// digest always lists all N with a visible, honest note the assembler can surface.
for (const s of stories.filter(s => !byRank.has(s.rank))) {
  log(`Placeholder for #${s.rank} — summarizer failed after retry`)
  byRank.set(s.rank, {
    rank: s.rank,
    id: s.id,
    article_summary: '*Could not summarize automatically (summarizer failed after retries); read the linked article directly.*',
    discussion_summary: `*Could not summarize automatically (summarizer failed after retries); read the [discussion](https://news.ycombinator.com/item?id=${s.id}) directly.*`,
  })
}

// Return exactly one record per input story, in rank order — length always === stories.length.
return stories.map(s => byRank.get(s.rank))
