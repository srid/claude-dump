# ROUTINE.md

Repeatable digest routines for this repo. Files are laid out **source-first** —
`<source>/YYYY/MM/DD.md` for dailies and `<source>/YYYY/Www.md` (ISO week) for weeklies — so each
source is its own series for the planned static site (see [CLAUDE.md](CLAUDE.md)). Run one with the
`/digest` skill (e.g. `/digest hn`) or just ask Claude to "run the `<name>` routine". Scheduling is
done from a long-running Claude Code session via `/loop` (times below are local).

| Routine | Source | Schedule | Output | Workflow |
|---|---|---|---|---|
| [`hn`](#hn--hacker-news-top-stories-digest) | [Hacker News](https://hckrnews.com/) | **daily, 18:00** | `hn/YYYY/MM/DD.md` | `workflows/hn-digest-summaries.js` |
| [`nixos`](#reddit-weekly-digests--nixos-haskell) | [r/NixOS](https://www.reddit.com/r/nixos/) | **weekly, Mon 18:00** | `nixos/YYYY/Www.md` | `workflows/reddit-digest-summaries.js` |
| [`haskell`](#reddit-weekly-digests--nixos-haskell) | [r/Haskell](https://www.reddit.com/r/haskell/) | **weekly, Mon 18:00** | `haskell/YYYY/Www.md` | `workflows/reddit-digest-summaries.js` |

---

## `hn` — Hacker News Top Stories Digest

**Source:** <https://hckrnews.com/> — Hacker News, top submissions of the last 24 hours sorted by
points. (The same ranking is available reliably from the HN Algolia API:
`https://hn.algolia.com/api/v1/search?tags=story&numericFilters=created_at_i>{epoch_24h_ago}&hitsPerPage=30`.)

**Output file:** `./hn/YYYY/MM/DD.md` for the run's date (one file per day).

**Contents** — the top ~30 submissions from the last 24 hours, sorted by points. For each story:

- **Title**, linked to the article URL.
- **Number of comments**, linked to the HN comments page (`https://news.ycombinator.com/item?id=<id>`).
- The story's **points**.
- An **LLM summary of the article** (2–4 sentences, neutral/factual).
- An **LLM summary of the comments/discussion** (2–4 sentences), when available.
- If the article or the comments cannot be fetched (paywall, HTTP 403/429, JS-only page,
  Twitter/X, etc.), **note the error inline** in place of that summary, e.g.
  `*Could not fetch (HTTP 403 Forbidden).*` — never silently drop a story.

> Tip: when a fetch fails with `WebFetch`, retry with `curl -sL -A "Mozilla/5.0 ..."`. Read HN
> discussions via the Algolia item API (`https://hn.algolia.com/api/v1/items/<id>`) to avoid HN
> rate-limiting; the link shown to readers is still the `news.ycombinator.com/item?id=<id>` page.

**Implementation:** the per-story fetch-and-summarize work fans out through a dynamic workflow
committed at [`workflows/hn-digest-summaries.js`](workflows/hn-digest-summaries.js) — one subagent
per story, run in parallel, each returning a structured `{article_summary, discussion_summary}`.
This workflow file is versioned in the repo and improved over time (see [CLAUDE.md](CLAUDE.md)).

**Publish & notify:**

1. Create a branch, add the new `hn/YYYY/MM/DD.md`, and commit.
2. Open a PR whose description contains **(a)** permalink(s) to the newly created file(s) on the
   `master` branch, and **(b)** the new file's content reproduced **inline**.
3. **Merge the PR immediately.** Repo watchers receive an email notification and can click the PR
   link to read the digest — this is the routine's notification mechanism.

> Direct email (e.g. Gmail) is intentionally **not** part of this routine — the merged-PR
> notification to repo watchers is sufficient.

**Schedule:** **daily at 18:00** (6pm local). See [CLAUDE.md](CLAUDE.md) for how this is wired.

---

## Reddit weekly digests — `nixos`, `haskell`

A family of weekly subreddit digests that all share the same fetch strategy and the
[`workflows/reddit-digest-summaries.js`](workflows/reddit-digest-summaries.js) workflow. To add
another subreddit, add a row here and to the table at the top — no new workflow needed.

| Routine | Subreddit | Output |
|---|---|---|
| `nixos` | [r/NixOS](https://www.reddit.com/r/nixos/) | `nixos/YYYY/Www.md` |
| `haskell` | [r/Haskell](https://www.reddit.com/r/haskell/) | `haskell/YYYY/Www.md` |

**Source:** the subreddit's top posts of the **last 7 days** (Reddit "top, this week", `t=week`),
sorted by score.

**Output file:** `./<name>/YYYY/Www.md` for the run's ISO week (e.g. `haskell/2026/W26.md`; one file
per week).

**Cadence:** **weekly, Mondays at 18:00** (these subreddits don't move fast enough for a daily digest).

**Contents** — the **top 10 posts** of the week. For each post:

- **Title**, linked to the post's link (the external URL for link posts; otherwise the Reddit post).
- **Number of comments**, linked to the Reddit comments page (the post permalink).
- The post's **score**, when available.
- An **LLM summary of the content** (the self-text, the linked article/video, or — for image/gallery
  posts — a description from the title and context).
- An **LLM summary of the comment discussion** (2–4 sentences), when available.
- Note any fetch error inline; never silently drop a post.

> **Reddit fetching (important):** prefer the JSON API via **old.reddit.com with a real Chrome/Firefox
> User-Agent** — `https://old.reddit.com/r/<sub>/top.json?t=week&limit=30` for the listing and
> `https://old.reddit.com/r/<sub>/comments/<id>/.json?raw_json=1&limit=50` per post — which gives exact
> score and comment counts. Reddit returns **HTTP 403 to the `.json`/HTML API from datacenter/sandbox
> IPs** (it works from a residential machine); when blocked, **fall back to the `.rss` feeds**
> (`/r/<sub>/top.rss?t=week` and `/r/<sub>/comments/<id>/.rss`), which stay reachable. With the RSS
> fallback, scores are unavailable and comment counts are approximated from the feed — note that in
> the file. See [CLAUDE.md](CLAUDE.md).

**Implementation:** [`workflows/reddit-digest-summaries.js`](workflows/reddit-digest-summaries.js) is
**two-phase** to respect Reddit's rate limiter: **(1) a single fetcher agent** downloads every post
thread (and article) *serially, throttled, time-bounded, with timestamped logs* (`.json` primary,
`.rss` fallback) into a shared cache dir, skipping already-cached threads (resumable); **(2)
summarizer agents** — one per post — read that cache in parallel. Fetching concurrently (one agent
per post) trips HTTP 429, which is why the fetch is centralized.

**Publish & notify:** same as `hn` — branch → commit → PR (master permalinks + file inline) → merge
immediately.

**Schedule:** **weekly on Mondays at 18:00** (6pm local), via `/loop` self-paced to the next Monday 18:00.
