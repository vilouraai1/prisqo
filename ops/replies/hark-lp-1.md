# hark-lp-1: high-converting landing page — reply

Branch: `muse-lp-1` (see note below — the brief file says `hark-lp-1`, my assignment said `muse-lp-1`;
I used `muse-lp-1` per the assignment).
Main HEAD at start: `3a75cb4` ("ops: add hark-lp-1 brief for high-converting landing page").
PR title (per brief): `hark-lp-1: high-converting landing page`.

## Status

DONE. Competitor study, homepage redesign, and this reply are all committed on `muse-lp-1`.
No screenshots were captured in this run (no live-browser session in this environment), so the
before/after below is written section by section, as the brief allows.

## Part A — Competitor study

Committed as `742bb9d`: `ops/replies/hark-lp-1-competitors.md` — 8 rows, visited live 12 Nov 2026:
Otterly.ai, Peec AI, Profound, Goodie AI, HubSpot AI Search Grader, Semrush AI Toolkit,
Am I On AI, Scrunch.

Two rows are honest about limits: Am I On AI's homepage returned a bot-verification wall, and
scrunch.com served unrelated "Tyrell Nexus" content on this visit, so those two rows rely on
third-party reads of their own pages dated Oct–Nov 2026 and say so. No headline, price or proof
was guessed for any competitor.

## Part B — Redesign (`index.html` + new `prisqo-lp.css`)

Committed as `5c44692`. Before/after, section by section:

- **Hero (before):** eyebrow "AI visibility check", H1 "Does AI recommend your business?",
  lead "See whether AI names you, who it names instead, and the exact sites to get listed on",
  then the paid form. **(After):** same H1, plain-language lead ("Find out in minutes. We ask
  AI the questions your customers ask — 'best dentist in Austin' — and show you whether it
  names you, who it names instead, and which sites to get listed on. One $19 report. No
  account. No subscription."), then a free-check form, then a primary "Get my report ($19)"
  button, then the exact trust strip. The paid `#check` form follows immediately under the
  hero, unchanged.
- **Free check (before):** only a secondary link ("Free 10-second check") inside the paid form.
  **(After):** an above-the-fold form in the hero — business name, city, category — with
  `method="get" action="/free-check"`, field names `name`, `city`, `category`, and option
  values copied exactly from `free-check.html` (15 categories, 10 DFW cities). Labelled
  "a free snapshot from a past check, not a live check."
- **Sample preview (before):** report card with Smith Family Dental, 83 of 100, named 5 of 6,
  sample competitors and `*.example` sources. **(After):** unchanged numbers, names and
  sources; same `data-testid="sample-preview"`, same "Example data" label and fictional-dentist
  footnote. Only the surrounding page changed.
- **Pain section (new):** "Your competitors are being recommended instead." Explains that AI
  names only a few businesses per question and the customer calls the one it names. Uses the
  sample's Sunrise Dentist (5 of 6 answers) as an illustration, explicitly labelled example data.
  No customer stories invented.
- **How it works (before/after):** same 3 steps and same facts (enter website; 6 buyer-style
  prompts, one AI model with live web search; report with named/who-instead/sources). Restyled
  only.
- **What you get (before/after):** same 3 cards and copy, unchanged.
- **Comparison table (new):** generic, vs "Typical enterprise AI-visibility platform" — price
  ($19 pay once vs monthly subscription), account (none vs platform login), what you get (one
  report in minutes vs a marketing-team dashboard), first answer (minutes vs after setup),
  refund (14-day vs varies). No competitor is named with a price on the homepage; named
  comparisons link to `/compare`, where each vendor's price already exists in `compare/*.html`.
- **On-page FAQ (new):** 5 questions, answers reused from `faq.html` / `pricing.html` only
  ($19 contents; how long; no subscription; 14-day refund; "Does Prisqo check ChatGPT?" —
  no, one search-grounded model as a stand-in). Matching FAQPage JSON-LD added, in sync.
- **Checklist capture, "Who it's for", `home-more` link, bottom CTA band:** unchanged in
  content; CTA band restyled only. Trust strip exact text preserved (3× on the page: hero,
  paid form, CTA band).
- **Sticky mobile CTA (new):** fixed bottom bar on screens ≤700px — "Get my report ($19)" →
  `/#check` plus "$19 once". It is a plain link (no keyboard trap); `body` gets 76px bottom
  padding on small screens so the last CTA is never hidden.
- **Styles:** new first-party `prisqo-lp.css`, linked after the existing stylesheet. No new
  external fonts, scripts, trackers or images. Tap targets ≥44px (48px on form controls and
  CTAs); labels on every input; `prefers-reduced-motion` respected.

## What was NOT changed

- No edits to `engine/`, `prisqo-site-worker.js`, `prisqo-check.js`, `free-check.js`,
  `_headers`, `robots.txt`, the Cloudflare beacon token, or any other marketing page.
- Paid form field names/ids (`website`, `category`, `city`, `businessName`; `domain`,
  `category`, `city`, `brand`), `data-static-check-form="check"` and the `#check` anchor are
  unchanged, so checkout still runs.
- Title, description, canonical, OG/Twitter tags, favicon, Product + Organization/WebSite
  JSON-LD unchanged. Page stays indexable (no noindex). Footer unchanged, including the
  8 city links and the full compare list. "Prisqo by Viloura AI" and
  `mailto:vilouraai1@gmail.com` kept.

## Verification performed

- JSON-LD parses (3 blocks: Product, FAQPage, Organization/WebSite graph) via the brief's
  python check.
- HTML tag balance check: no unclosed or stray tags.
- Required strings verified present: title, canonical, `CF_BEACON_TOKEN`, all `#check` field
  names/ids, trust strip ×3 exact, "Get my report ($19)" ×5, both `data-testid` blocks,
  score 83 / named 5 of 6, free-check GET form with exact option values, `/prisqo-lp.css`
  link, FAQPage JSON-LD.
- Forbidden text absent: "coming soon", "not built", "weekly". No subscription language
  anywhere except "No subscription" / "nothing renews".
- Internal links checked against the repo: the only missing-on-disk targets are
  `/_next/...` assets and `/apple-icon.png`, which live on the deploy, not in the repo —
  pre-existing, not introduced by this PR.
- No fake proof added: every number on the page is from repo data ($19, 6 questions, 83,
  5 of 6, 14-day refund). No testimonials, logos, user counts, reviews, case studies,
  "as seen in", or star ratings.

## Questions

1. **Branch name:** the brief says work on branch `hark-lp-1` and open the PR from `hark-lp-1`,
   but my assignment said branch `muse-lp-1`. I used `muse-lp-1` (board rule is `muse-<name>`).
   If Kiwi's tooling expects `hark-lp-1`, say so and I will re-push under that name.
2. **Screenshots:** none captured in this run — I had no live-browser session. Kiwi's QA
   should screenshot the hero on mobile and desktop; the written before/after above is the
   substitute the brief allows.

## Summary

Why the new page beats each competitor studied — honest reasons only:

- **Otterly.ai ($29/mo Lite, daily tracking, 7 engines):** beats it on price and friction for a
  local owner — $19 once vs $29 every month (plus paid add-ons for Gemini/Claude/AI Mode),
  no account, no prompt lists to build, and an answer in minutes instead of a dashboard to
  learn. It does not beat Otterly on tracking depth or engine coverage, and does not claim to.
- **Peec AI ($95/mo Starter, daily tracking):** beats it on price and simplicity — one $19
  report vs a $95/mo subscription, no workspace setup, and the answer is the competitors
  and sources for one business rather than a marketing-team analytics platform. It does not
  beat Peec on daily tracking, source-gap analysis or API/MCP, and does not claim to.
- **Profound (no published price, Enterprise by quote):** beats it on access — a $19
  self-serve report with a published price and no sales call, vs a trial in front of an
  enterprise sales process. It does not beat Profound on agents, demand data or engine
  breadth, and does not claim to.
- **Goodie AI ($295/mo Core):** beats it on price and self-serve access — $19 once vs
  $295/mo, no sales-led onboarding, and a free 10-second check above the fold. It does not
  beat Goodie on execution (content agents, revenue attribution) or engine count, and does
  not claim to.
- **HubSpot AI Search Grader (free one-time grader; AEO $50/mo):** beats it on the question
  asked — buyer-style "best [trade] in [city]" questions with the competitors named instead
  and the sources cited, vs a brand-perception score from training data. HubSpot's grader is
  free and needs no account, so the page does not claim to beat it on price; it beats it on
  giving a local owner the named competitors and the exact sites to get listed on.
- **Semrush AI Toolkit ($99/mo per domain):** beats it on price and scope — $19 once for one
  business vs $99/mo per domain inside a large suite, no account or onboarding. It does not
  beat Semrush on daily tracking, prompt volume or the wider SEO suite, and does not claim to.
- **Am I On AI ($100/mo Pro):** beats it on price and on the question asked — $19 once vs
  $100/mo, and a report built from buyer-style local questions, vs a weekly dashboard that
  covers only ChatGPT and Google AI Overview. It does not beat Am I On AI on weekly action
  plans, and does not claim to.
- **Scrunch ($250/mo Core):** beats it on price and simplicity — $19 once vs $250/mo, no
  account, no platform to learn. It does not beat Scrunch on AXP serving or bot-traffic
  reporting, and does not claim to.

DONE
