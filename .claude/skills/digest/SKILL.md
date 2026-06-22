---
name: digest
description: Generate and publish a dated news digest for a source defined in ROUTINE.md (e.g. "hn" or "nixos"). Fetches the top submissions for the source's window, summarizes each item's content + discussion via that source's committed workflow, writes the digest in the source-first layout (hn/YYYY/MM/DD.md or nixos/YYYY/Www.md), then opens and merges a PR. Use when asked to run the <source> digest/routine, or to produce today's HN/Reddit digest.
---

# /digest — run and publish a source's digest

**Argument:** the source NAME (`hn`, `nixos`, …). If omitted, ask which source (or run every source
that is due per its cadence).

Read [ROUTINE.md](../../../ROUTINE.md) for the per-source spec and [CLAUDE.md](../../../CLAUDE.md)
for conventions (browser UA, fetch fallbacks, format, self-improvement). Then:

## 1. Resolve the source
From ROUTINE.md get: feed/subreddit, cadence, output NAME, item count, and which committed workflow
to use. Output path is **source-first** for the current date/week:
- daily → `./<name>/YYYY/MM/DD.md` (e.g. `hn/2026/06/22.md`)
- weekly → `./<name>/YYYY/Www.md` using the ISO week from `date +%G/W%V` (e.g. `nixos/2026/W26.md`)

## 2. Fetch the ranked listing
- **`hn`** — HN Algolia API (top of last 24h, by points):
  `https://hn.algolia.com/api/v1/search?tags=story&numericFilters=created_at_i>{epoch_24h_ago}&hitsPerPage=30`
- **Reddit (`nixos`, …)** — **primary:** `https://old.reddit.com/r/<sub>/top.json?t=week&limit=30`
  with a real **Chrome UA**. If it 403s (datacenter/sandbox IPs are blocked), **fall back** to the
  RSS feed `https://www.reddit.com/r/<sub>/top.rss?t=week` and parse titles, permalinks, selftext,
  and the external `[link]` href. (`WebFetch` cannot fetch Reddit — curl only.)

## 3. Summarize (fan-out workflow)
Run the source's committed workflow with the listing as `args`:
- `hn` → `Workflow({ scriptPath: "workflows/hn-digest-summaries.js", args: {stories:[…]} })` —
  one subagent per story fetches article + comments.
- Reddit → `Workflow({ scriptPath: "workflows/reddit-digest-summaries.js", args: {subreddit, cacheDir, posts:[…]} })`
  — **two-phase**: one fetcher agent caches all threads serially (avoids HTTP 429), then summarizer
  agents read the cache in parallel. Pass a writable `cacheDir`.

Backfill any items the workflow failed (structured-output retries exceeded) by summarizing them
directly.

## 4. Assemble the digest file (source-first path from step 1)
Established format: a title + source line, then a numbered list. Per item:
`## N. [title](url) | [N comments](commentsPermalink) | score`, then **Article:**/**Content:** and
**Discussion:** summaries. **Note fetch errors inline** (and roll them up in a footer). Preserve
titles verbatim. For Reddit RSS-fallback runs, say scores/counts are approximate.

## 5. Publish (branch → PR → merge)
1. `git checkout -b <name>-YYYY-MM-DD`, add the new file(s), commit.
2. Open a PR whose body has **(a)** master permalinks to the new file(s)
   (`https://github.com/srid/claude-dump/blob/master/<path>`) and **(b)** the file content **inline**.
3. **Merge immediately** (`gh pr merge --squash --delete-branch`). Repo watchers get the email.

## Self-improve
If you hit a fetch/parse bug or find a better approach, **fix the workflow `.js` (and this skill /
ROUTINE.md) and include it in the same PR.** See CLAUDE.md — you have standing permission.
