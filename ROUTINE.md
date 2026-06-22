# ROUTINE.md

Repeatable [Claude Routines](https://code.claude.com/docs/en/routines) for this repo. Each
routine produces a dated artifact under `YYYY/MM/DD/`. Ask Claude to "run the `<name>` routine",
or wire it up to run on a schedule (see [CLAUDE.md](CLAUDE.md) and `/schedule`).

---

## `hn` — Hacker News Top Stories Digest

**Source:** <https://hckrnews.com/> — Hacker News, top submissions of the last 24 hours sorted by
points. (The same ranking is available reliably from the HN Algolia API:
`https://hn.algolia.com/api/v1/search?tags=story&numericFilters=created_at_i>{epoch_24h_ago}&hitsPerPage=30`.)

**Output file:** `./YYYY/MM/DD/hn.md` for the run's date (one file per day).

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

1. Create a branch, add the new `YYYY/MM/DD/hn.md`, and commit.
2. Open a PR whose description contains **(a)** permalink(s) to the newly created file(s) on the
   `master` branch, and **(b)** the new file's content reproduced **inline**.
3. **Merge the PR immediately.** Repo watchers receive an email notification and can click the PR
   link to read the digest.
4. **Additionally, email the full digest to the user** (Gmail) so they are notified directly.
   *Requires a Gmail/email integration (MCP server or mail CLI) in the run environment. If none is
   configured, skip this step and note it in the run summary.*

**Schedule:** intended to run **daily at 18:00**. See [CLAUDE.md](CLAUDE.md) for how this is wired.
