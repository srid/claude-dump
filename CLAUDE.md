# CLAUDE.md

Guidance for Claude when working in this repo.

## What this repo is

A dumping ground for [Claude Routines](https://code.claude.com/docs/en/routines). Routines are
specified in [ROUTINE.md](ROUTINE.md) and produce dated artifacts under `YYYY/MM/DD/`.

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

## Conventions

- Output path is always `YYYY/MM/DD/<name>.md` for the run's date.
- Preserve HN titles **verbatim** (including punctuation and profanity).
- **Fetching:** when `WebFetch` fails (HTTP 403/429, paywall, JS-only page, X/Twitter, etc.) you
  are allowed — and expected — to **fall back to `curl`** (e.g.
  `curl -sL --max-time 25 -A "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36" "<url>"`), and to
  read HN discussions via the Algolia item API (`https://hn.algolia.com/api/v1/items/<id>`) to dodge
  rate limits. Only after both `WebFetch` and `curl` fail do you record an inline error note.
- **Note fetch errors inline** rather than omitting a story.
- Match the established digest format (numbered list; `[title](url) | [N comments](hn) | P pts`;
  then **Article:** and **Discussion:** summaries).

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
