# Hark + Muse board

Single queue for `vilouraai1/prisqo` and site work on `vilouraai1/vilouraai-web`. Format and pick rules: `ops/playbooks/*.md` and the SYSTEM.md this was drafted with.

WIP limit: 1 Doing item per lane. Agents never send, post, call, spend, or touch `prisqo-report-engine` / Stripe.

How to pick: from `## Next`, first table row whose `Lane` is yours (or `both`), whose details `blocked_on` is `none`, and who has nothing already in `## Doing`. Claim by moving the row + details block into `## Doing` in the same work PR. Items with `blocked_on` other than `none` belong in `## Blocked`, not here.

Updated: 2026-11-21 16:45 America/Chicago (Hark: HM-12 merged #55; HM-13 added and Done).

## Next

| ID | Pri | Lane | Title | Success metric | Inputs |
|----|-----|------|-------|----------------|--------|
| HM-10 | 1 | both | First weekly retro | Each lane updates its playbook, logs 1 experiment with a kill/keep rule, and adds one process-change line | `METRICS.md`, this board, playbooks, sent-log |

### HM-10 — First weekly retro
- id: HM-10
- status: next
- pri: 1
- lane: both
- blocked_on: none
- owner: none
- branch: hark-retro-YYYY-MM-DD or muse-retro-YYYY-MM-DD (one PR per lane)
- success: Each lane edits only its playbook, proposes exactly one experiment (hypothesis, one change, metric, threshold, 7-day window, kill/keep), adds one process-change line, and appends a row to METRICS Experiments. Hard rules stay untouched.
- inputs: ops/board/METRICS.md; ops/board/BOARD.md; ops/playbooks/hark.md; ops/playbooks/muse.md; ops/marketing/sent-log.md
- output: playbook diffs + new experiment board items + METRICS experiment rows
- notes: Run Monday after weekly housekeeping, or the Monday after the missed-call test week. Include kill/keep on the old cold-email formula and on the $49 missed-call test if result emails have been sent. Do not skip Pri-0 work to start the retro early.

## Doing

| ID | Pri | Lane | Title | Success metric | Inputs |
|----|-----|------|-------|----------------|--------|
| HM-06 | 0 | muse | Conversion + in-flight SEO QA | Live `/free-check` and $19 checkout still work; muse-seo-3 and footer/dead-link work merged or given a precise leftover list; no engine/Stripe changes | `origin/muse-seo-3`, `origin/muse-footer-fix`, live prisqo.vilouraai.com |

### HM-06 — Conversion + in-flight SEO QA
- id: HM-06
- status: doing
- pri: 0
- lane: muse
- blocked_on: none
- owner: muse
- branch: muse-hm-06 (rebased from muse-seo-3; PR #45 superseded, unmergeable add/add on BOARD.md)
- success: Money path works live (free-check name/city, $19 checkout form contract, no dead money-page links). In-flight muse-seo-3 is ready or the leftover is written. CSP/stylesheet regressions from muse-seo-2 do not return.
- inputs: origin/muse-seo-3; origin/muse-footer-fix; ops/tasks/muse-seo-3.md; ops/replies/muse-seo-2.md; live site
- output: PR(s) + ops/replies/HM-06.md
- notes: Unblocked now so Muse is not idle while the missed-call page waits on approval. Do not restyle LP-2. Do not deploy yourself. If muse-seo-3 is already merged when this starts, do live QA and only fix real breakage.


## Blocked

| ID | Pri | Lane | Title | Success metric | Inputs |
|----|-----|------|-------|----------------|--------|
| HM-02 | 0 | jilsha | 30-practice disclosed test calls + log | 30 practices logged (answered / voicemail / no answer / callback); no recordings | `/workspace/missed-call/` (copy into ops/marketing/missed-call/ when installing) |
| HM-03 | 0 | muse | `/missed-call-check` page from existing copy | Page live on the approved site; sourced stats only; checkout/free-check contracts untouched; CTA works without a new Stripe price | `missed-call-landing-copy.md` |
| HM-04 | 0 | hark | Personalized free-result + $49 offer drafts | One draft per practice with a usable email and a completed call log; real outcomes only | call log; `followup-template.md`; sent-log |
| HM-05 | 0 | hark | 10–20 first emails in the winning HM-01 variant | Threshold set in HM-01 (default: at least 2 replies from the next 20 sent emails, measured 7 days after the last send) | HM-01 reply file; playbook; sent-log |
| HM-07 | 1 | muse | SEO for the missed-call page | Page in sitemap; Offer schema only if $49 is an approved on-page price; internal links from relevant guides; zero new 404s | HM-03 pages |

### HM-02 — 30-practice disclosed test calls + log
- id: HM-02
- status: blocked
- pri: 0
- lane: jilsha
- blocked_on: jilsha-calls
- owner: jilsha
- branch: (none)
- success: Call log filled for the 30 practices in missed-call-test-30.csv. Disclosed, no recordings, no appointment requests, no patient data.
- inputs: /workspace/missed-call/call-script.md; call-log-template.csv; missed-call-test-30.csv (install path: ops/marketing/missed-call/)
- output: completed call-log-template.csv (or the same columns in ops/marketing/missed-call/)
- notes: Prep already exists (Codex, 2026-11-20). Jilsha places the three short calls (about 12:15 PM, about 4:45 PM, after close). Agents do not call or submit web forms. When the log has results, Kiwi sets HM-04 blocked_on to none and moves it to Next.

### HM-03 — `/missed-call-check` page from existing copy
- id: HM-03
- status: blocked
- pri: 0
- lane: muse
- blocked_on: jilsha-approve-page
- owner: none
- branch: muse-hm-03
- success: Page shipped on the site Jilsha names (prisqo.vilouraai.com or vilouraai.com), using missed-call-landing-copy.md only. No invented stats, no ranking/lead promises. Existing /free-check and $19 checkout contracts unchanged. CTA is mailto:vilouraai@gmail.com or an existing form unless she separately approves a $49 Stripe price (do not create that price).
- inputs: missed-call-landing-copy.md; ops/playbooks/muse.md; live LP-2 homepage contracts
- output: the new page, sitemap/llms/nav as needed, ops/replies/HM-03.md
- notes: Do not build until blocked_on is none. Do not touch prisqo-report-engine or Stripe.

### HM-04 — Personalized free-result + $49 offer drafts
- id: HM-04
- status: blocked
- pri: 0
- lane: hark
- blocked_on: depends:HM-02
- owner: none
- branch: hark-hm-04
- success: Drafts only, one per practice that has both a completed log and a usable public email. Outcomes are copied from the log, never invented. Uses the follow-up template (free result + $49 full check, opt-out, postal footer).
- output: ops/marketing/missed-call-result-drafts.md (and JSON if useful). Kiwi turns these into DraftExternalMessage cards only after Jilsha has logged the calls and asked to send.
- inputs: completed call log; /workspace/missed-call/followup-template.md; known-emails / sent-log
- notes: Skip blank to-addresses. Do not email anyone already on the do-not-email list.

### HM-05 — 10–20 first emails in the winning HM-01 variant
- id: HM-05
- status: blocked
- pri: 0
- lane: hark
- blocked_on: depends:HM-01
- owner: none
- branch: hark-hm-05
- success: Drafts only, 10–20 leads not already sent, playbook-compliant. After Jilsha sends, default success is at least 2 replies from 20 sent within 7 days, or the threshold HM-01 set. Kill the variant if 0 replies at the window.
- inputs: ops/replies/HM-01.md; ops/research/reply-autopsy.md; ops/marketing/sent-log.md; winning variant in ops/playbooks/hark.md
- output: ops/marketing/drafts-hm-05.md plus sent-log entries marked drafted, not sent
- notes: Do not start until HM-01 is Done and this item is moved to Next with blocked_on: none. Skip anyone already sent or bounced. Kiwi shows cards only if Jilsha wants this batch sent.

### HM-07 — SEO for the missed-call page
- id: HM-07
- status: blocked
- pri: 1
- lane: muse
- blocked_on: depends:HM-03
- owner: none
- branch: muse-hm-07
- success: New page discoverable: sitemap, title/description, JSON-LD, internal links from relevant dental/chiro/med-spa guides. No LP-2 restyle, no URL churn, no invented numbers.
- inputs: the merged HM-03 page; ops/playbooks/muse.md
- output: site PR + ops/replies/HM-07.md
- notes: Start only after HM-03 is merged. Offer schema may state $49 only as an on-page one-time fee, not as a live Stripe product, unless Jilsha has approved Stripe.

## Done

| ID | Pri | Lane | Title | Success metric | Inputs |
|----|-----|------|-------|----------------|--------|
| HM-13 | 0 | hark | Leads-7 single follow-up in Variant A form | 9 unsent follow-ups (delivered 11-19 cohort, minus bounce), dated AI source, send plan Mon 2026-11-23, read 2026-11-30 | `sent-log.md` Leads-7, `leads-7.csv`, `data/ai-answers.json`, `reply-autopsy.md`, `do-not-email.md` |
| HM-12 | 0 | hark | Variant A reply kit (turn "yes" replies into free checks and $19 reports) | Paste-ready Reply 1 for all 15 HM-11 leads + shared replies (who are you / price / call / no); unsent | `drafts-variant-a-1.md`, `data/ai-answers.json`, `pricing.html`, `free-check.js` |
| HM-08 | 1 | hark | Package 3 community posts from PR #48 for Jilsha | 3 ready-to-post items with community, rules check dated, and a paste body; agents do not post | `ops/marketing/community-posts-2.md` |
| HM-11 | 0 | hark | 15 Variant A first-email drafts (DFW dental/chiro/med spa/home service) | 15 unsent drafts, own-site email source URL + date, dated AI source; playbook edit proposed | `ops/research/reply-autopsy.md`, `data/ai-answers.json`, lead CSVs, sent-log, do-not-email |
| HM-09 | 1 | hark | Bounce and list hygiene | Bounced addresses tagged do-not-email; any replacement is from the business's own site with a source URL | `ops/marketing/sent-log.md`, lead CSVs |
| HM-01 | 0 | hark | Reply-rate autopsy + 2 first-email variants | A written kill/keep on the current cold formula, plus 2 testable variants (one recommended) | `ops/marketing/sent-log.md`, drafts, followups, `ops/playbooks/hark.md` |

### HM-01 — Reply-rate autopsy + 2 first-email variants
- id: HM-01
- status: done
- pri: 0
- lane: hark
- blocked_on: none
- owner: hark
- branch: hark-hm-01
- success: A written kill/keep on the current cold-email formula, and 2 new variants with one recommended default. No new generic batch.
- inputs: ops/marketing/sent-log.md; ops/marketing/drafts-*.md; ops/marketing/followups-*.md; ops/playbooks/hark.md
- output: ops/research/reply-autopsy.md and a short edit proposal for ops/playbooks/hark.md (apply only what review accepts). Optional: 10 sample drafts of the recommended variant, clearly marked unsent.
- notes: 54 sent, 0 replies is the bottleneck (America/Chicago, as of 2026-11-21). Count bounces separately. Look at hook, subject, offer, length, link/price violations, agency vs local, timing, and whether the email asked a real easy question. Do not recommend "send more of the same." Cold drafts still must be 25–45 words, no link, no price, one question, opt-out + postal footer.

- done: PR #50 merged 2026-11-21 (ops/research/reply-autopsy.md). Verdict: kill the old formula; Variant A recommended.

### HM-09 — Bounce and list hygiene
- id: HM-09
- status: done
- pri: 1
- lane: hark
- blocked_on: none
- owner: hark
- branch: hark-hm-09
- success: Every known bounce is marked do-not-email in sent-log (and lead files if present). No drafts to those addresses. Any new address has a source URL on the business's own site.
- inputs: ops/marketing/sent-log.md; ops/marketing/leads-*.csv; crm CSVs
- output: updated sent-log and a short ops/marketing/do-not-email.md list
- notes: Known bounces as of the 2026-11-21 sent-log include contact@digitalzeon.com, office@drkareed.com, and info@fusionchiropracticspa.com. Do not invent replacements.

- done: PR (hark-hm-09), 2026-11-21: ops/marketing/do-not-email.md; bounces tagged in sent-log, seg-dental.csv, out-dental.md, drafts-7.md.

### HM-11 — 15 Variant A first-email drafts
- id: HM-11
- status: done
- pri: 0
- lane: hark
- blocked_on: none
- owner: hark
- branch: hark-hm-11
- success: 15 unsent Variant A drafts for DFW dental/chiro/med spa/home-service leads not in sent-log, each with an own-site email source URL + date and a dated AI-answer source; playbook edit proposed.
- inputs: ops/research/reply-autopsy.md; data/ai-answers.json; ops/marketing/leads-3.csv, leads-7.csv; sent-log; do-not-email.md
- output: ops/marketing/drafts-variant-a-1.md; ops/playbooks/hark.md edit; ops/replies/HM-11.md
- notes: Added by Hark at Jilsha's request 2026-11-21. Overlaps HM-05 (HM-05 = sending a Variant A batch and measuring it); HM-05 can use this file when Jilsha decides to send.
- done: PR (hark-hm-11), 2026-11-21.

### HM-08 — Package 3 community posts from PR #48 for Jilsha
- id: HM-08
- status: done
- pri: 1
- lane: hark
- blocked_on: none
- owner: hark
- branch: hark-hm-08
- success: Exactly 3 posts, each with target community, why it is first, a rules re-check date, and a paste-ready body. No links or prices if the community or playbook forbids them. Agents never post.
- inputs: ops/marketing/community-posts-2.md (merged in PR #48)
- output: ops/marketing/community-posts-hm-08.md
- notes: Packaging only. Pick value-first posts aimed at DFW local-business audiences over generic startup spam.

- done: PR (hark-hm-08), 2026-11-21: ops/marketing/community-posts-hm-08.md (FB DFW BP Networking, FB Small Business DFW, Alignable Lewisville).

### HM-12 — Variant A reply kit
- id: HM-12
- status: done
- pri: 0
- lane: hark
- blocked_on: none
- owner: hark
- branch: hark-hm-12
- success: Every HM-11 lead has a paste-ready Reply 1 (the dated Gemini list + one free next step, no price). Shared replies for questions, price ("$19", facts from live pricing.html), call requests, "no" (→ do-not-email) and auto-replies. Nothing sent.
- inputs: ops/marketing/drafts-variant-a-1.md; data/ai-answers.json; pricing.html; free-check.js (category/city/name URL prefill)
- output: ops/marketing/replies-variant-a-1.md; ops/replies/HM-12.md
- notes: Added by Hark 2026-11-21 at Jilsha's request, as the highest-revenue Hark step left. Variant A only earns money if a "yes" is answered fast and leads to the free check, then the $19 report. Follows reply-autopsy §5 ("the follow-up to a yes is the list plus one line offering the free check"). Not a new cold batch.
- done: PR #55 merged 2026-11-21.

### HM-13 — Leads-7 single follow-up (Variant A form)
- id: HM-13
- status: done
- pri: 0
- lane: hark
- blocked_on: none
- owner: hark
- branch: hark-hm-13
- success: 9 unsent follow-ups, one per delivered 2026-11-19 leads-7 contact (Fusion excluded, bounced). 38–42 words, no link, no price, one question, opt-out, footer, dated Gemini source. Send plan and read date stated.
- inputs: ops/marketing/sent-log.md (Leads-7); ops/marketing/leads-7.csv; data/ai-answers.json; ops/research/reply-autopsy.md §2, §4; ops/marketing/do-not-email.md
- output: ops/marketing/followups-7.md; ops/replies/HM-13.md
- notes: Added by Hark 2026-11-21 at Jilsha's request. The highest-revenue Hark step left that isn't a new cold batch. Autopsy says judge leads-7 "together with its single follow-up". Read first-email replies 2026-11-26, follow-up replies through 2026-11-30.
- done: PR (hark-hm-13), 2026-11-21.
