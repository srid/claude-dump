# CLAUDE.md

Guidance for Claude when working in this repo.

## What this repo is

A dumping ground for automated news digests, generated from a **long-running Claude Code session**
(this repo simulates hosted Routines inside Claude Code — it does not use the cloud cron product).
Each routine is specified in [ROUTINE.md](ROUTINE.md), invokable via the [`/digest`](.claude/skills/digest/SKILL.md)
skill, and produces a dated artifact in the **source-first** layout (see *File layout* below).

## Dynamic workflows are committed and self-improving

The dynamic-workflow JavaScript that powers a routine — e.g.
[`workflows/hn-digest-summaries.js`](workflows/hn-digest-summaries.js) — is **committed to this
repo on purpose**. Treat these files as living source you are expected to improve:

- **Reuse, don't re-author.** When running a routine, load its workflow from the committed file
  (`Workflow({ scriptPath: "workflows/<name>.js", args: ... })`) instead of writing a new script
  from scratch each time.
- **Self-improve.** When you find a bug or a better approach — sturdier fetching, better prompts,
  richer error handling, new output fields — **edit the committed `.js` and include that
  improvement in the same PR** as the day's run. You have standing permission to do this.
- **Keep it self-contained.** Each script must start with `export const meta = { ... }` as a pure
  literal and use only the workflow hooks (`agent`, `parallel`, `pipeline`, `phase`, `log`,
  `args`). Note: `args` may arrive as a JSON string — parse defensively
  (`typeof args === 'string' ? JSON.parse(args) : args`).

## File layout (source-first)

Digests are laid out **source-first**, so each source is a self-contained series for the planned
**GitHub Pages static site** (each source → its own section/index/RSS; clean URLs like
`/hn/2026/06/22/` and `/nixos/2026/W26/`):

- **Daily** sources: `<source>/YYYY/MM/DD.md` — e.g. `hn/2026/06/22.md`.
- **Weekly** sources: `<source>/YYYY/Www.md` (ISO week, `date +%G/W%V`) — e.g. `nixos/2026/W26.md`.

Don't reintroduce the old date-first `YYYY/MM/DD/<name>.md` paths.

## Conventions

- Output path follows the source-first layout above, for the run's date/week.
- Preserve HN titles **verbatim** (including punctuation and profanity).
- **Fetching:** when `WebFetch` fails (HTTP 403/429, paywall, JS-only page, X/Twitter, etc.) you
  are allowed — and expected — to **fall back to `curl`** (e.g.
  `curl -sL --max-time 25 -A "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36" "<url>"`), and to
  read HN discussions via the Algolia item API (`https://hn.algolia.com/api/v1/items/<id>`) to dodge
  rate limits. Only after both `WebFetch` and `curl` fail do you record an inline error note.
- **Note fetch errors inline** rather than omitting a story.
- Match the established digest format (numbered list; `[title](url) | [N comments](hn) | P pts`;
  then **Article:**/**Content:** and **Discussion:** summaries).
- **Use a real browser User-Agent** for curl (Chrome or Firefox), e.g.
  `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36`.
  Many sites (incl. Reddit) 403 default `curl`/library agents.

### Reddit sources (r/NixOS, etc.)

- **Primary:** the JSON API via **old.reddit.com + Chrome UA** — `https://old.reddit.com/r/<sub>/top.json?t=week&limit=30`
  for the listing and `https://old.reddit.com/r/<sub>/comments/<id>/.json?raw_json=1&limit=50` per post.
  This gives exact `score` and `num_comments`.
- **Known limitation:** Reddit serves **HTTP 403 (a `theme-beta` HTML "blocked" page) to the `.json`
  and HTML endpoints from datacenter/sandbox IPs** — no User-Agent or cookie trick gets past it. It
  works from a residential machine (so the real long-running session is fine).
- **Fallback (always reachable, incl. from here):** the `.rss` feeds —
  `https://www.reddit.com/r/<sub>/top.rss?t=week` (listing: titles, permalinks, selftext, external
  `[link]` href) and `https://old.reddit.com/r/<sub>/comments/<id>/.rss?limit=50` (the comment
  thread). With RSS, **scores are unavailable and comment counts are approximate** (count the feed
  entries) — say so in the file. `WebFetch` cannot fetch Reddit at all; curl only.
- **Throttle, don't parallelize.** Reddit rate-limits (HTTP 429) bursts of requests. Fetch comment
  threads **serially with a small `sleep`**, not one-agent-per-post. The reddit workflow encodes
  this: a single fetcher agent caches every thread first, then summarizer agents read the cache.
- **The fetcher must be bounded and self-logging.** It once hit a 429 wall and ground for ~30 min
  (fixed 10s retries, no cap, detached so invisible). The committed fetcher now: writes
  **timestamped** progress to `<cacheDir>/fetch.log` (`[$(date -u +%T)] …`), enforces a **hard ~4
  min network budget**, retries a failed fetch **at most once**, and **skips already-cached** threads
  (so a crash-resume never re-hammers Reddit). A rate-limit storm must degrade to partial+noted,
  never a multi-minute hang.
- **`t=week`, not `t=weekly`.** Only `hour|day|week|month|year|all` are valid `t` values; an invalid
  value silently falls back to Reddit's default window.

## Skills

Routines are exposed as a project skill in [`.claude/skills/`](.claude/skills/):

- **[`/digest`](.claude/skills/digest/SKILL.md)** — run and publish a source's digest, e.g.
  `/digest hn` or `/digest nixos`. It resolves the source from ROUTINE.md, fetches the ranked
  listing, runs that source's committed workflow to summarize each item, writes the digest in the
  source-first layout, then opens and merges the PR.

When you add a new source, update **both** ROUTINE.md (the spec) and the `/digest` skill (so it
knows how to fetch that source's listing), and add its `workflows/<source>-digest-summaries.js`.

## Scheduling

These routines are driven from a **long-running Claude Code session** (this repo simulates hosted
Routines inside Claude Code — it does not rely on the cloud cron product). To run `hn` daily at
18:00, use the `/loop` skill with self-pacing and keep the session alive:

```
/loop run the hn routine from ROUTINE.md
```

Let the loop schedule its next wake for the next 18:00 (it computes the delay and sleeps until
then, runs the routine, and repeats). As long as the Claude Code session stays running, the digest
publishes itself each evening.
