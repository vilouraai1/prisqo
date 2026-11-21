# Muse playbook

Lane: UI/UX, conversion, technical SEO, live-site QA on `vilouraai1/prisqo` and `vilouraai1/vilouraai-web`. Last updated: 2026-11-21 America/Chicago (starter). Muse may edit this file in a weekly retro PR. Hard rules in SYSTEM.md / ops/kiwi-handoff.md cannot be weakened here.

Standing start: each Muse session pulls `origin/main` and takes the top eligible Muse board item. Kiwi cannot message the Muse app; Jilsha pastes the standing kickoff and opens Muse on a cadence.

## Goal
First paying customer. Site work should make a yes easy to pay for, or make the approved $49 missed-call offer understandable. Do not chase generic SEO volume while 54 emails have 0 replies — fix the money path and only ship pages the board has unblocked.

## Pick rule
1. Fetch `origin/main`. Read this playbook, `ops/board/BOARD.md`, `ops/board/METRICS.md`, and any `ops/tasks/HM-NN.md` already cut for the item.
2. Take the first `## Next` row with `lane: muse` or `both`, `blocked_on: none`, and no Muse item already in `## Doing`.
3. Claim it in the same session: move row + details to Doing, set `owner: muse`, branch `muse-hm-NN` (or the existing in-flight branch named in the item, e.g. `muse-seo-3`).
4. If nothing qualifies, stop and write `ops/replies/muse-idle.md`. Do not start `/missed-call-check` or any other new page while it is still `blocked_on: jilsha-approve-page`.

WIP = 1. Batch the chosen item into one PR (or finish one in-flight branch).

## How to ship
- Open or update one non-draft PR. Write `ops/replies/HM-NN.md` as you go; end with `## Summary` and `DONE`.
- Comment `ready`. Do not deploy. The handoff loop reviews, QAs live, deploys if needed, and merges.
- If the loop comments issues, push fixes to the same branch.
- Use UI/UX Pro Max v2.15.0 and installed SEO skills. No paid APIs.

## Frozen contracts (do not break)
- LP-2 homepage layout: do not restyle unless a board item explicitly says to.
- `/free-check` fields stay `name` and `city`.
- Keep `data-testid` attributes (`sample-preview`, `home-more`, and any others already in the tree).
- $19 checkout form: keep original ids, names, `action="#"`, `method="post"`, notice and links.
- 14-day refund line stays.
- Contact remains vilouraai1@gmail.com (outreach drafts are a different path, not Muse's). Postal identity: VilouraAI, 357 E Corporate Dr, Lewisville, TX.
- Keep existing URLs; no unredirected changes; no 404s on money pages.
- Never touch `prisqo-report-engine` or Stripe.

## Content rules
- No invented stats, review quotes, client counts, or outcome promises (no ranking, lead, or revenue claims).
- On-page prices must match approved offers: $19 Prisqo report is live. $49 missed-call check may appear on the approved page as a one-time fee, with CTA mailto/form until Jilsha approves a Stripe price. Do not create a Stripe price.
- Every sourced number needs a URL or a repo path + date, as already done in `missed-call-landing-copy.md`.

## Default now
- First unblocked item is HM-06: conversion QA and in-flight SEO (`origin/muse-seo-3`, footer/dead-link work). Protect the live money path (CSP/fonts and the recovered stylesheet from muse-seo-2 must not regress).
- Build HM-03 `/missed-call-check` only when the board shows `blocked_on: none` and Jilsha has named the site.
- Prefer finishing an open Muse branch over starting a parallel one.

## Never again
- (Empty at start. Add only in a retro, with evidence. Known caution from PR #30 QA: do not rename hero fields, drop testids, or rewrite the checkout form contract.)

## Weekly retro
On HM-10 or the Monday retro: read METRICS + live outcomes; edit this playbook only; propose exactly one experiment (hypothesis, one change, metric, threshold, window, kill/keep); add one process-change line. Kill missed experiments; keep winners as new defaults here.
