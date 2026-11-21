# Hark + Muse autonomous growth system

Planning only (2026-11-21, America/Chicago). Nothing in this folder has been committed, pushed, sent, posted, or deployed. Canonical copies live in this repo at `ops/board/` and `ops/playbooks/`.

Goal: first paying customer for VilouraAI / Prisqo. Every task is ranked by what can produce a paid yes soonest. The current bottleneck is outreach: **54 emails sent, 0 replies**. Permits/sales-tax is not the lead offer (Hark PR #47 and Codex `VALIDATION.md` both rate it weak). The offer to test first is the **$49 Missed-Call + AI Visibility Check**.

Hark project: https://hark.com/project/961127a6-2e1a-4511-8c30-1d25c7371f7e
Repos: `vilouraai1/prisqo` and `vilouraai1/vilouraai-web`.

---

## Hard rules (never break; not editable by a retro)

- Free workers only. No spending. No Upgrade clicks. No paid APIs.
- Never touch `prisqo-report-engine` or Stripe (keys, products, prices, webhooks). A $49 Stripe price is not created unless Jilsha explicitly approves it.
- Agents never send email, never post publicly, never call, never submit forms to real businesses. Jilsha sends and posts herself. Every email is a draft for her, from `vilouraai@gmail.com`, shown as a DraftExternalMessage card by Kiwi — not sent by Hark or Muse.
- Cold first emails follow the playbook: 25–45 words, no link, no price, one easy question, opt-out line, footer exactly `VilouraAI, 357 E Corporate Dr, Lewisville, TX`. Result emails *after* a completed free test may include the $49 offer (see `followup-template.md`); they still need opt-out + footer, and still are drafts only.
- No made-up stats, review quotes, client counts, outcome promises, or invented emails. If a fact is not in the repo or a cited public source, write "unknown".
- Do not invent a new product or price. Current live offer: Prisqo $19 one-time report (Stripe LIVE). Proposed test offer: $49 missed-call + AI visibility check (not a Stripe product yet).
- Never push empty commits to retrigger the PR loop.

---

## 1. Roles by strength (with evidence)

### Hark lane — research, demand checks, leads, drafts, structured ops files

Hark is the marketing-ops and research agent. Kiwi can post work into the Hark project, so this lane can keep moving without a paste into another app.

**What Hark has done well**

- Demand research with sources: pain-check PR #47 (`ops/research/pain-check.md`) — rated permits/sales tax weak as a 29–49 dollar lead product; recommended the $49 missed-call + AI visibility check and a 30-practice one-week test.
- Outreach manufacturing: leads and playbook drafts in PRs #26, #33–#37, #39–#43, #46 (segment offers, DFW lead lists, follow-ups, agency drafts, call list + 30-second script in #41).
- Community post drafts: PR #48 (`community-posts-2`, value-first, rules re-checked 2026-11-21) and earlier posts in #22.
- Product-adjacent pages when scoped tightly: free AI-naming check (#24) and 78 DFW free-check answers (#38); landing experiment `hark-lp-1` (#28).
- Earlier SEO volume: industry/city/guide pages in Hark PRs #3–#21 (useful for coverage; later technical SEO and conversion QA belong to Muse).

**Give Hark:** reply-rate diagnosis, new draft experiments, lead hygiene, call-list / result-email kits, community kits for Jilsha to post, sourced research, copies of reports and scripts. One PR, files under `ops/` unless the board item clearly says otherwise.

**Do not give Hark (first):** UI/UX restyles, CSP/schema/live-site debugging, or a new public page until Jilsha has approved that page. Hark's older briefs sometimes allowed 100-word emails with links and prices; the hard rules above override those briefs.

### Muse lane — UI/UX, conversion, technical SEO, live-site QA

Muse is the site and conversion agent. Skills already in use: UI/UX Pro Max v2.15.0, Illyism SEO Skills, Claude SEO. Work is batched into one single-go brief. Today Muse starts only when Jilsha pastes a brief into the Muse app (Kiwi cannot message Muse). Autonomy comes from a standing kickoff: each Muse session pulls `main`, reads the board, and takes the top Muse item.

**What Muse has done well**

- Conversion homepage: `muse-lp-2` PR #30 (minimal premium landing). QA later had to restore `name`/`city` fields, `data-testid`s, and the $19 checkout form contract — so Muse briefs must freeze those contracts.
- Technical SEO and live fixes: `muse-seo-1` PR #31 (homepage SEO, `/free-seo-audit`, cross-links); `muse-seo-2` PR #44 (font CSP fix, recovered live stylesheet into the repo, entity/llms.txt, and honest corrections of Muse's own early reads). `muse-seo-3` is in flight on `origin/muse-seo-3` (brand SERP, schema, de-templated DFW pages, DFW study) and is not yet on `main`.
- Copy and conversion packs: brief-4 PR #23 (homepage conversion + best-of), brief-5 PR #25 (agency pitch + leaderboard posts), brief-3 PR #7 (press kit, compare-hub SEO).
- Footer/dead-link stopgap work exists on `origin/muse-footer-fix` (likely the open PR #45 follow-up). Finish in-flight site work before starting net-new pages.

**Give Muse:** landing and offer pages (after approval), checkout/free-check UX, schema, sitemaps, CSP, internal links, Core Web Vitals, copy on the sites. Never restyle the LP-2 homepage or change form field names, checkout ids, or `data-testid`s unless the board item says so.

**Do not give Muse (first):** large new lead lists or cold-email batches (Hark's lane). Do not ask Muse to deploy; the handoff loop deploys and merges.

### Kiwi (chief of staff) — glue, not a third coding lane

Kiwi keeps the board honest, runs or watches the existing **Muse + Hark PR handoff loop** (review via `pr-check.sh` + site QA, merge), posts the next Hark task into the Hark project after a merge, writes the next Muse brief to `ops/tasks/`, shows email draft cards, and updates `METRICS.md` when Jilsha reports sends, replies, or a payment. Other free workers (box Codex, OpenBot Kiwi Marketing, Mac runq) may review or prep files; they do not replace these two lanes.

### Existing board (do not fork it)

`ops/README.md` already says: Kiwi posts `ops/tasks/<name>.md`; the agent branches `muse-<name>` or `hark-<name>`, writes `ops/replies/<name>.md`, and opens a PR. That path stays. The new `ops/board/BOARD.md` is the single priority queue those task files are cut from.

---

## 2. Shared board (file-based, in prisqo)

After approval, copy the starter files into `vilouraai1/prisqo`:

- `ops/board/BOARD.md` — the queue
- `ops/board/METRICS.md` — the scoreboard
- `ops/playbooks/hark.md` — Hark's working rules (agent may edit in a retro PR)
- `ops/playbooks/muse.md` — Muse's working rules (agent may edit in a retro PR)

### BOARD.md format

The file has four sections in this order: `## Next`, `## Doing`, `## Blocked`, `## Done`.

Under each section, one table, then one details block per item. The table is what agents scan; the details block is what they execute.

**Table columns (exact, pipe table):**

`| ID | Pri | Lane | Title | Success metric | Inputs |`

- `ID`: `HM-NN` (zero-padded), assigned once, never reused.
- `Pri`: `0` (this week, revenue-critical), `1` (supports a Pri-0 test), `2` (only if the lane is idle and Pri 0–1 are blocked).
- `Lane`: `hark` | `muse` | `jilsha` | `both`.
- `Title`: one line.
- `Success metric`: one measurable line.
- `Inputs`: repo or box paths.

**Details block (exact keys, in this order):**

```
### HM-NN — <same title as the table>
- id: HM-NN
- status: next | doing | blocked | done
- pri: 0 | 1 | 2
- lane: hark | muse | jilsha | both
- blocked_on: none | jilsha-calls | jilsha-send | jilsha-approve-page | jilsha-paste-muse | jilsha-stripe | depends:HM-NN
- owner: none | hark | muse | kiwi | jilsha
- branch: hark-hm-NN | muse-hm-NN | (none for jilsha-only)
- success: <metric and threshold>
- inputs: <paths>
- output: <files or PR>
- notes: <one short paragraph>
```

Status in the details block must match the section the item sits in. Move the whole details block with the table row.

### How an agent picks the top item

1. `git fetch` and work from latest `origin/main` (rebase if needed).
2. Read `ops/playbooks/<lane>.md`, `ops/board/BOARD.md`, `ops/board/METRICS.md`, and `ops/marketing/sent-log.md`.
3. From `## Next`, take the first item (table order) that matches all of:
   - `lane` is this agent, or `both`
   - `blocked_on` is `none`
   - no other item for this lane is already in `## Doing` (WIP limit = 1 per lane)
4. If none qualify, stop. Write that in the reply file. Do not invent a new product. A `both` retro item may be taken only if that agent's WIP is 0.
5. Claim in the same session: move the row + details block to `## Doing`, set `status: doing` and `owner: <lane>`, commit on branch `hark-hm-NN` or `muse-hm-NN`, and include that move in the work PR. If two PRs claim the same ID, the first opened keeps it; the later PR rebases, returns that item if still Doing under the other owner, and picks the next eligible item.
6. Stale claim: if an item sits in Doing for more than 24 hours with no PR, Kiwi moves it back to Next and clears `owner`.

Jilsha-only items (`lane: jilsha`) stay in Blocked or Next until she acts; agents do not claim them. When her action is done (calls logged, approval given), Kiwi moves the dependent item’s `blocked_on` to `none` and, if needed, into Next.

### METRICS.md format

Exact top keys (update in the same PR when a number changes; otherwise Kiwi updates after a send/reply/payment):

```
# METRICS
Updated: YYYY-MM-DD HH:MM America/Chicago
Source: ops/marketing/sent-log.md (sends/replies); Jilsha (yes/paid); Search Console (traffic)

## Totals
- sent: <int>
- bounced: <int>
- replies: <int>
- yes: <int>          # asked for the paid offer or said yes to a call/scope
- paid: <int>         # completed payment
- paid_amount_usd: <number or 0>
- traffic_impressions: <int or unknown>
- traffic_clicks: <int or unknown>
- traffic_note: <one line, dated>

## This week (week starting YYYY-MM-DD, America/Chicago)
- sent: <int>
- replies: <int>
- yes: <int>
- paid: <int>
- notes:

## Experiments
| ID | Week start | Agent | Hypothesis | Metric | Threshold | Result | Keep/Kill | Evidence |
```

Do not treat drafted-but-unsent emails as `sent`. Do not invent traffic; if Search Console is unverified or stale, use `unknown`.

---

## 3. Autonomous loop (pick → PR → merge → next task)

This uses glue that already exists. It does not require a new paid tool.

```
board item (Next, unblocked, matching lane)
    → agent claims (Doing) + does the work on hark-hm-NN / muse-hm-NN
    → writes ops/replies/HM-NN.md (ends with ## Summary and DONE)
    → opens a non-draft PR to main, comments ready
    → routine "Muse + Hark PR handoff loop" (PR open / comment "ready"
      on vilouraai1/prisqo and vilouraai1/vilouraai-web)
    → review + QA
         docs-only ops/ PRs: /workspace/bin/pr-check.sh
         site PRs: pr-check plus live/contract QA (forms, testids, checkout,
         no engine/Stripe, no broken money-page URLs)
    → issues: comment on the PR; agent pushes fixes to the same branch
    → pass: deploy if it is a site PR (existing deploy path), QA live, merge
    → after merge, Kiwi / the loop:
         1. move the item to Done in BOARD.md (if the PR did not already)
         2. update METRICS.md if counts changed
         3. post the next unblocked item for the idle lane (see below)
    → the other (or same) lane starts the next item — no stall
```

**Posting the next task so it never stalls**

- **Hark:** after merge, Kiwi posts into the Hark project a short message: pull `main`, your top eligible item is `HM-NN`, plus a link to `ops/board/BOARD.md` and the details block. That is enough to start the next session.
- **Muse:** Kiwi cannot message the Muse app. After merge, Kiwi writes `ops/tasks/HM-NN.md` as a single-go brief and leaves a ready-to-paste copy for Jilsha. Autonomy = Jilsha approves a **standing Muse kickoff** (section 6) and opens Muse on a cadence (daily is enough). Each session Muse pulls `main` and takes the top Muse item without a new custom brief. The noon **Keep free workers busy** routine only pings Jilsha if a Muse item is in Next, unblocked, and Muse has no Doing item.
- **Daily 6 AM kickoff:** stop auto-drafting another batch of the same cold emails. Read BOARD + METRICS + sent-log. Show draft cards only for items Jilsha has approved to send (for example, result emails after call logs exist).

**pr-check.sh note:** the script currently WARNs on any dollar amount other than `$19` and FAILs changes outside `ops/`. Site PRs must not be squash-merged from docs-only `pr-check --merge`. After approval, Kiwi should allow `$49` in missed-call offer docs (WARN should not fire on that price) and keep the "drafts only / nothing sent" disclaimer check.

**If a lane is empty:** Kiwi adds at most one new Pri-2 item from the playbook's "if idle" list (hygiene, QA, packaging already-approved drafts). No new offer, no spend, no page build.

---

## 4. Recursive self-improvement

Memory that compounds is the playbook files, not chat history.

**Cadence:** weekly retro, Monday after the existing 5 AM CT housekeeping (or the first Monday after a test week ends). Lane `both`. Each agent may open its own retro PR the same day (`hark-retro-YYYY-MM-DD`, `muse-retro-YYYY-MM-DD`).

**Each retro PR must contain exactly:**

1. A short read of `METRICS.md`, `sent-log.md`, and that lane's Done items for the week (facts only).
2. Edits to *that agent's* playbook only (`ops/playbooks/hark.md` or `ops/playbooks/muse.md`): add a "never again" or "default now" rule when evidence supports it.
3. Exactly **one** experiment proposed as a new board item (Pri 0 or 1), using this shape:

```
- hypothesis: ...
- change: one variable only
- metric: ...
- threshold: ...
- window: 7 days (America/Chicago) unless the board says otherwise
- kill if: threshold missed at the window
- keep if: threshold hit — promote the change into the playbook as default
```

4. One process-change line (this is the recursive part): a single improvement to the board, metrics, pick rule, or retro itself (for example, "add a bounced column we kept forgetting"). Hard rules in this SYSTEM file cannot be changed in a retro.

**Kill / keep rules**

- Kill: stop the tactic, log `Kill` in the Experiments table with evidence, do not scale it. A killed tactic may be retried only if one variable changes and the board says so.
- Keep: write the winning pattern into the playbook and use it as the default for the next batch.
- The current cold-email formula (54 sent / 0 replies) is on probation until HM-01 and HM-05 finish. Do not "keep" it by sending a larger batch of the same thing.
- The missed-call test (from pain-check): success is at least 5 replies and at least 1 paid $49 report from 30 practices within 7 days of the result emails. Kill or rework the offer if 0 replies. Track missed-call observations either way.
- Two missed experiment windows in a row: shrink scope (fewer sends, tighter offer, more direct tests) rather than adding channels.

Playbook edits cannot weaken the hard rules, cannot authorize sending/posting, and cannot authorize Stripe or engine changes.

---

## 5. First 10 board items (revenue first)

Full rows and details are in `files/ops/board/BOARD.md`. Priority logic:

| ID | Lane | Pri | Item | Why this order |
|----|------|-----|------|----------------|
| HM-01 | hark | 0 | Reply-rate autopsy + two new first-email variants | 54/0 is the bottleneck. No more identical cold batches until this lands. |
| HM-02 | jilsha | 0 | Run the 30-practice disclosed test calls and log them | Demand test already prepped in `/workspace/missed-call/`. Agents cannot call. Unblocks HM-04. |
| HM-03 | muse | 0 | `/missed-call-check` page from existing copy | Blocked until Jilsha approves the page and the site (prisqo vs vilouraai-web). CTA is mailto/form until she approves a $49 Stripe price. |
| HM-04 | hark | 0 | Personalized free-result + $49 offer drafts | Blocked on HM-02 logs. Drafts only; Kiwi shows cards after Jilsha logs calls. |
| HM-05 | hark | 0 | 10–20 first emails in the winning HM-01 variant | Blocked on HM-01. Playbook cold rules (25–45 words, no link, no price). Success: a reply-rate threshold, not "more sent". |
| HM-06 | muse | 0 | Conversion + in-flight SEO QA | Unblocked now. Finish/QA `muse-seo-3` and footer/dead-link work; protect checkout and `/free-check`. So Muse is not idle while HM-03 is blocked. |
| HM-07 | muse | 1 | SEO for the missed-call page | Blocked on HM-03 merge. Schema, sitemap, internal links. No LP-2 restyle. |
| HM-08 | hark | 1 | Package 3 community posts from PR #48 for Jilsha | Agents never post. Ready checklist only. |
| HM-09 | hark | 1 | Bounce and list hygiene | At least 3 known bounces. Stop re-emailing them. Replacement addresses only from the business's own site. |
| HM-10 | both | 1 | First weekly retro | Playbook edits + one experiment each + kill/keep on cold email and the missed-call test if data exists. |

Kiwi (not a board item for the agents): change the 6 AM kickoff as in section 3, and allow `$49` in `pr-check.sh` for this offer's docs.

---

## 6. Ready-to-paste kickoff briefs

Paste these after the starter files are on `main` (or after Jilsha approves and Kiwi opens one PR that adds them). Until then, do not paste or start the loop.

### Hark kickoff (paste into the Hark project)

```
You are Hark for VilouraAI / Prisqo. Goal: first paying customer.

Read origin/main: ops/playbooks/hark.md, ops/board/BOARD.md, ops/board/METRICS.md, ops/marketing/sent-log.md, and ops/kiwi-handoff.md hard rules.

Pick the top eligible Hark item in BOARD.md using the pick rule in the playbook (WIP = 1). Claim it (move to Doing) in your PR. Work on branch hark-hm-NN. Write ops/replies/HM-NN.md ending with ## Summary and DONE. Open one non-draft PR to main and comment ready.

Hard rules: free only, no spend, never touch prisqo-report-engine or Stripe, never send or post or call. Drafts only. Cold first emails: 25–45 words, no link, no price, one question, opt-out, footer "VilouraAI, 357 E Corporate Dr, Lewisville, TX". No invented stats, review quotes, or emails.

Your first item should be HM-01 (reply-rate autopsy) unless it is already Doing/Done. Do not draft another generic cold batch.

When a merge happens, pull main and take the next eligible Hark item. If none, stop and say so in a reply file.
```

### Muse kickoff (standing; paste into the Muse app)

```
You are Muse for VilouraAI / Prisqo. Goal: first paying customer. This is a standing brief: on every session, pull origin/main and take the next item. You do not need a new pasted brief each time.

Read: ops/playbooks/muse.md, ops/board/BOARD.md, ops/board/METRICS.md, ops/marketing/sent-log.md, and the hard rules in ops/kiwi-handoff.md.

Pick the top eligible Muse item using the pick rule (WIP = 1). Claim it in your PR (move to Doing). Branch muse-hm-NN (or keep muse-seo-3 / muse-footer-fix if the board item says to finish that branch). Write ops/replies/HM-NN.md ending with ## Summary and DONE. Open or update one non-draft PR and comment ready. Do not deploy; the handoff loop reviews, deploys, and merges.

Hard rules: free only, no spend, no paid APIs, never touch prisqo-report-engine or Stripe, never send or post. No invented stats or review quotes. Do not restyle the LP-2 homepage. Do not change /free-check fields (name, city), data-testid attributes, or the $19 checkout form contract (ids, names, action="#", method="post"). Keep existing URLs.

Your first unblocked item should be HM-06 (conversion + in-flight SEO QA, including muse-seo-3 if still unmerged). Do not build /missed-call-check (HM-03) until BOARD.md shows blocked_on: none for that item.

Use UI/UX Pro Max and your SEO skills. Batch the chosen item into one PR.
```

---

## 7. What Jilsha must approve

Nothing below has been started. Approve or reject each line; Kiwi will only then copy files into the repo, post kickoffs, or change routines.

1. **Install the board** in `vilouraai1/prisqo` (`ops/board/*` and `ops/playbooks/*`) and use it as the single queue for Hark and Muse.
2. **Standing Muse kickoff** (section 6): Jilsha pastes it once and opens Muse on a regular cadence so Muse can pull the board herself. Kiwi still cannot message Muse.
3. **After-merge Hark nudge:** Kiwi may post the next Hark board item into the existing Hark project. No public posts.
4. **Stop same-formula cold batches** in the daily 6 AM kickoff until HM-01 and HM-05 say otherwise. Unsent drafts already in `sent-log` stay unsent unless she chooses to send a specific batch.
5. **Jilsha will make the 30 disclosed test calls** (HM-02) and log them; no recordings. Agents will not call or submit forms.
6. **Whether to build `/missed-call-check` (HM-03)** and on which site (`prisqo.vilouraai.com` or `vilouraai.com`). Default CTA is email to `vilouraai@gmail.com` or an existing form — **no new Stripe $49 price** unless she separately approves it. Engine stays untouched.
7. **She still sends every email and posts every community post herself.** Result-email cards wait until call logs exist.
8. **Kiwi may update `pr-check.sh`** so `$49` in missed-call offer docs is allowed, and so site PRs are not merged with the docs-only path.

No spend is requested. No messages will go out as part of installing this.

---

## File map

| Path | Role |
|------|------|
| `ops/board/SYSTEM.md` | This design |
| `ops/board/BOARD.md` | Board (first 10 items) |
| `ops/board/METRICS.md` | Metrics (54 sent, 0 replies at install) |
| `ops/playbooks/hark.md` | Hark playbook |
| `ops/playbooks/muse.md` | Muse playbook |
