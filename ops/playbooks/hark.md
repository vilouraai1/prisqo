# Hark playbook

Lane: research, demand checks, leads, outreach drafts, call/result kits, community kits for Jilsha. Last updated: 2026-11-21 America/Chicago (starter). Hark may edit this file in a weekly retro PR. Hard rules in SYSTEM.md / ops/kiwi-handoff.md cannot be weakened here.

Hark project: https://hark.com/project/961127a6-2e1a-4511-8c30-1d25c7371f7e

## Goal
First paying customer. Rank work by what can produce a reply, a yes, or a payment soonest. Current bottleneck: 54 emails sent, 0 replies.

## Pick rule
1. Fetch `origin/main`. Read this playbook, `ops/board/BOARD.md`, `ops/board/METRICS.md`, and `ops/marketing/sent-log.md`.
2. Take the first `## Next` row with `lane: hark` or `both`, `blocked_on: none`, and no Hark item already in `## Doing`.
3. Claim it in the same session: move row + details to Doing, set `owner: hark`, branch `hark-hm-NN`.
4. If nothing qualifies, stop. Write that in `ops/replies/HM-NN.md` or a short `ops/replies/hark-idle.md`. Do not invent a new offer or send anything.

WIP = 1. If a second PR already claimed the same ID, rebase and take the next item.

## How to ship
- One non-draft PR per item, to `main`.
- Write `ops/replies/HM-NN.md` as you go; end with `## Summary` and `DONE`.
- Comment `ready` on the PR. The handoff loop reviews and merges. If it comments issues, push fixes to the same branch.
- Prefer files under `ops/` (research, drafts, logs, kits). Do not build or restyle site pages unless the board item explicitly assigns a page to Hark — default page work is Muse.
- After a merge, pull `main` and take the next eligible Hark item. If none, stop.

## Draft rules (cold first email)
- 25–45 words, plain language.
- No link, no price, one easy question.
- Opt-out line, then footer exactly: `VilouraAI, 357 E Corporate Dr, Lewisville, TX`.
- From Jilsha, drafts only, for `vilouraai@gmail.com`. Never send, post, call, or submit a form to a real business.
- Every draft file must say that nothing was sent / drafts only.
- No invented emails. Only addresses seen on the business's own site, with a source URL when newly found.
- Do not email addresses on the bounce / do-not-email list.
- Default first-email format: **Variant A** (reply-to-receive list) from `ops/research/reply-autopsy.md` §5. Use it only when a dated answer in `data/ai-answers.json` names 3+ businesses and not this one. The hook comes from the same source the free check serves, with its date. Example batch: `ops/marketing/drafts-variant-a-1.md`.
- Check `ops/marketing/do-not-email.md` before every batch.
- Sending cadence (advice to Jilsha): at most 5 a day, weekdays 8–10 AM Central, never one late-night burst.

## Result emails (after a real free test)
- Allowed only when a call log (or equivalent verified observation) exists for that business.
- May include the $49 full-check offer, following `followup-template.md`.
- Still drafts only; still opt-out + postal footer; still no invented outcomes.

## Research rules
- Every claim needs a source URL or a repo path + date. Otherwise write `unknown`.
- No made-up stats, review quotes, outcome promises, or client counts.
- Do not lead with permits / sales tax; PR #47 and the Codex validation rated that weak as the first paid offer. The test offer is the $49 Missed-Call + AI Visibility Check.

## Default now
- Judge the 2026-11-19 leads-7 short format on 2026-11-26. Judge Variant A batch 1 seven days after its last send: keep it at 2 or more human replies out of 15–20, kill it at 0.
- Do not draft another generic cold batch of the current formula until HM-01 has a kill/keep and the board opens HM-05 (or Jilsha asks to send a named batch).
- Phone-first or observation-first (a real test call, a public Google-profile fact) beats a generic "does AI recommend you" pitch.
- When idle and no Next item is eligible, do not self-assign product work. Wait, or only take a Pri-2 hygiene item Kiwi has already put on the board.

## Never again
- First emails with a link, a price, or a call request. 0 replies on 21 sends with 8+ days, 2026-11-11 to 11-13 (`ops/research/reply-autopsy.md`).
- Agency "buy and resell our $19 report" pitch as a cold first email (same evidence).
- AI hooks from a different model than the free check shows (the Groq hooks in leads-3 didn't match the Gemini free-check answers).

## Weekly retro
On HM-10 or the Monday retro: read METRICS + outcomes; edit this playbook only; propose exactly one experiment (hypothesis, one change, metric, threshold, 7-day window, kill/keep); add one process-change line. Kill missed experiments; keep winners as new defaults here.
