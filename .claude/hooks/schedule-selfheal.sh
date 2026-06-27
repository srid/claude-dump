#!/usr/bin/env bash
# SessionStart hook — schedule self-heal.
#
# `claude --resume` (and any restart) restores the conversation but NOT in-memory
# cron jobs, so the daily-digest schedule can silently vanish across resumes. This
# hook injects a directive telling Claude to reconcile live crons against the
# committed canonical schedule (.claude/scheduled_tasks.json) and re-arm anything
# missing. The schedule file is the single source of truth; this hook only nudges.
#
# Emits SessionStart additionalContext as JSON on stdout. Stays quiet (no context)
# if the schedule file is absent or unreadable, so a fresh clone never errors.
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
sched="$repo_root/.claude/scheduled_tasks.json"

[ -r "$sched" ] || exit 0

# Build the directive from the committed schedule so it always names the real
# task ids/crons (no duplication of the schedule in this script).
jq -n --slurpfile s "$sched" '
  ($s[0].tasks // []) as $tasks
  | ($tasks | map(.id + " (" + .cron + ")") | join("; ")) as $summary
  | {
      hookSpecificOutput: {
        hookEventName: "SessionStart",
        additionalContext: (
          "SCHEDULE SELF-HEAL (SessionStart): `claude --resume` and restarts do NOT restore in-memory cron jobs, "
          + "so the digest schedule may be missing after a resume. Reconcile now: call CronList, then for each task "
          + "in .claude/scheduled_tasks.json [" + $summary + "] that has no matching live recurring job, re-register it "
          + "with CronCreate(recurring:true, durable:true) using that task'"'"'s exact `cron` and `prompt` from the file. "
          + "If every task already has a live job, do nothing and stay silent — do not announce the check."
        )
      }
    }
' 2>/dev/null || exit 0
