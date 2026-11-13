# hark-lp-1: high-converting landing page

Repo: `vilouraai1/prisqo`. Pull `main` first. Work on branch `hark-lp-1`. Open **one non-draft pull request** to `main` titled exactly:

`hark-lp-1: high-converting landing page`

Write as you go (so nothing is lost if a run stops):

- `ops/replies/hark-lp-1-competitors.md` — live competitor study (section A)
- `ops/replies/hark-lp-1.md` — what you changed, before/after notes or screenshots, questions, then `## Summary` and `DONE`

If you cannot write those files, put the same content in the PR body.

Goal: turn https://prisqo.vilouraai.com into a high-converting landing page for local small businesses, clearly better than enterprise AI-visibility tools, and make the fastest honest path to the first paid **$19 one-time** customer. You do the competitor research and the build, in this one PR.

---

## Current homepage (do not rediscover from scratch)

Live URL: https://prisqo.vilouraai.com  
Source: `index.html` (static HTML, currently ~21 KB, mostly minified onto a few lines).

Existing sections, in order:

1. **Nav** — logo, Run a check, Pricing, FAQ, Compare, Free check, button “Get my report ($19)” → `/#check`
2. **Hero** — eyebrow “AI visibility check”; H1 “Does AI recommend your business? See whether AI names you, who it names instead, and the exact sites to get listed on.”
3. **Paid checkout form** (`#check`, `data-static-check-form="check"`) — website, category, city, optional business name; submit “Get my report ($19)”; secondary links “See a real sample report” (`/sample/results`) and “Free 10-second check” (`/free-check`)
4. **Trust strip** (exact text, keep it): `14-day refund · One-time charge · Report ready in minutes`
5. Checkout note: “$19, pay once at checkout, then your check runs automatically. No subscription. One payment buys one report. Secure checkout asks for your email at payment.”
6. Thin “Who it’s for: local businesses · SaaS · agencies…”
7. **Sample preview** (`section.preview`, `data-testid="sample-preview"`) — fictional Smith Family Dental, dentist, Austin, TX; score **83 of 100**; named in **5 of 6** answers; competitors Sunrise / Riverbend / Oak Hill / Hilltop Dentist (sample); example sources `*.example`. Copy already says this is example data, not a guaranteed result.
8. Free checklist email capture (opens the visitor’s mail app; there is no contact API)
9. **How it works** — 3 steps (enter website → 6 buyer-style prompts on one AI model with live web search → report)
10. **What you get** — score, who AI recommends instead, sources cited
11. **CTA band** — “Find out what AI answers say about your business” + “Get my report ($19)” + the same trust strip
12. Footer (product / compare / company / industry / **8 city links**)

Also already on the site (do not break):

- Free check page: `/free-check` (`free-check.html` + `free-check.js`). Required fields: `category`, `city`, `name`. It already accepts those as query params and auto-runs. Category and city must be values from that page’s `<select>` options (DFW cities such as `Lewisville, TX`, `Dallas, TX`, etc.). Honest copy: it is a snapshot from a past check, not live.
- Sample report: `/sample/results` — same Smith Family Dental figures (83 / 5 of 6). Use these; invent nothing.
- Stylesheet (not in this repo; lives on the live deploy): `/_next/static/chunks/3yytf2z4lgznt.css`. Keep this `<link>`. Add any new styles in a **new first-party file** at the repo root, e.g. `prisqo-lp.css`, linked after the existing stylesheet. Do not invent a new `/_next/...` path. CSP in `_headers` already allows `style-src 'self' 'unsafe-inline'`.
- Checkout script: `/prisqo-check.js` (do not edit). Form field names must stay `website`, `category`, `city`, `businessName`; ids `domain`, `category`, `city`, `brand`; keep `data-static-check-form="check"` and the `#check` anchor so every existing `/#check` link still jumps to the paid form and checkout still runs.
- Analytics: Cloudflare beacon with the placeholder token `CF_BEACON_TOKEN` — do not change it.
- Meta: homepage is **indexable** (no robots-exclusion / noindex meta). Keep that. Keep the existing `<title>`, description, canonical `https://prisqo.vilouraai.com`, OG/Twitter tags, `opengraph-image.png`, favicon, and JSON-LD (`Product` offer price `"19"` USD, plus Organization/WebSite graph). You may tighten the title/description only if they still honestly describe a $19 one-time report and JSON-LD still parses and matches the page.
- Trust / refund line already exists. A 14-day refund is real. Do not invent a stronger guarantee.

The current page is complete but visually flat: weak hierarchy, no pain section, no comparison table, no on-page FAQ, no sticky mobile CTA, and the free check is only a secondary link rather than an above-the-fold input.

---

## A. Competitor research (do this first, write the file as you go)

Visit these sites live and record what you actually see, today, in `ops/replies/hark-lp-1-competitors.md` as a **markdown table** with one row per competitor:

| Competitor | URL | Hero headline | Primary CTA | Price (as shown) | Social proof (as shown) | Main sections | What they do better than our current LP | What they do worse / where we can beat them |

Required:

- Otterly.ai
- Peec AI
- Profound (tryprofound.com)
- Goodie AI
- HubSpot AI Search Grader
- Semrush AI Toolkit

Plus **any 2 others** you find for queries like “AI visibility / does ChatGPT recommend my business”. Prefer tools already linked from our footer (`/compare/*`, `/best/*`) if they fit, e.g. Am I On AI, Ahrefs Brand Radar, Rankscale, Scrunch, Writesonic GEO, AthenaHQ.

Rules for this file:

- Quote headlines, CTAs, and prices as they appear. If a price is not public, write “not listed” — do not guess.
- This research file may record live prices. **The landing page itself may not use a live price or claim unless that exact figure already appears in this repo** (see `compare/*.html`). Otherwise keep on-page comparison generic.
- Commit this file before or with the redesign.

Use the study to steal *structure and clarity* (hero hierarchy, proof near the CTA, sticky mobile CTA, FAQ, contrast), not their copyrighted copy, logos, or screenshots.

---

## B. Redesign spec (local small businesses are our edge)

Rebuild `index.html` so a local owner (dentist, plumber, salon, lawyer) understands the outcome in one screen and can act without scrolling. Enterprise dashboards (monthly seats, prompt tracking for marketing teams) are not our customer. We are: one $19 report, no account, results in minutes, built for a single local business.

Required sections, in roughly this order:

1. **Bold outcome headline** above the fold. Promise a concrete result (does AI recommend you, who it names instead, which sites to get listed on). No jargon-first headline. Subhead in plain language.
2. **Instant free-check input above the fold** — business name, city, and category (category is required by `/free-check`). `method="get"` `action="/free-check"`, field names `name`, `city`, `category`, and option values copied exactly from `free-check.html`. Button label can be “Free 10-second check” / “Check free”. This is the hook, not the paid checkout.
3. **Primary CTA is the $19 one-time report.** A “Get my report ($19)” button must be visible in the first screen (nav and/or hero), visually primary (the free check may look secondary). Keep the paid form at `#check` on the first screen or immediately under the hero, still above the fold on desktop. Repeat the exact trust strip next to these CTAs.
4. **Visual sample-report preview** using only real sample data already in the repo (Smith Family Dental figures listed above; same numbers as `/sample/results`). Make it look like a report card / screenshot-style preview, clearly labeled example / fictional data, with a link to the full sample. No invented scores, names, or sources.
5. **3-step “How it works”** — keep the facts: enter your website (we guess category and city); we ask 6 buyer-style questions (e.g. “best dentist in Austin”) of one AI model with live web search; you get a report (named or not, who was named instead, sources cited). You may restyle this; do not change the product.
6. **Pain section** — “your competitors are being recommended instead.” Spell out: when a buyer asks ChatGPT / an AI assistant for the best [trade] in [city], it may name someone else. Use the sample competitors as an illustration, labeled as example data. No fake customer stories.
7. **Comparison table vs generic enterprise AI-visibility tools.** Honest. Typical contrast we can claim because it is already true of us: $19 one-time vs monthly subscriptions; no account vs a platform login; one local-business report in minutes vs a marketing-team dashboard; 14-day refund. **Do not name a competitor with a price, plan, or feature unless that exact claim already exists in `compare/*.html` in this repo.** No false claims. Do not say we beat them on crawl volume, model coverage, or anything we do not do.
8. **On-page FAQ** (short, 4–6 questions). Reuse answers already on `faq.html` / `pricing.html` (price, what you get, no subscription, 14-day refund, how the check works, sample vs your report). Do not invent policy. Add matching FAQPage JSON-LD if you add visible FAQ, and keep it in sync.
9. **Refund / guarantee line** — only the existing 14-day refund and the existing trust strip. No new guarantee.
10. **Sticky mobile CTA** — fixed or sticky bar on small screens: “Get my report ($19)” → `/#check`, plus the trust strip or “$19 once”. Do not cover form fields or the cookie-less page content; include a way it doesn’t break accessibility (not a keyboard trap; leave space at the bottom so the last CTA isn’t hidden).
11. **Repeated CTA at the bottom** (keep / restyle the `cta-band`).

Visual / quality bar:

- Look like a modern high-converting landing page: strong typography, clear hierarchy, generous spacing, a distinctive but restrained palette that still meets contrast (WCAG AA), and card/preview treatment for the sample. Mobile-first. Tap targets ≥ 44px. Labels on every input. Respect `prefers-reduced-motion`.
- Fast: no new external fonts, scripts, trackers, or images from other origins. No heavy hero video. If you add images, keep them small, local, and compressed; prefer CSS/SVG. Do not remove the existing Inter font preload or the existing CSS link if the page still uses those classes.
- Reuse existing classes (`nav`, `btn`, `btn secondary`, `hero`, `card`, `trust`, `cta-band`, `footer`, etc.) where they still help, and extend with `prisqo-lp.css`.
- Keep nav and footer (including the 8 city links and compare list). Do not add city footer links. Keep “Prisqo by Viloura AI” and `mailto:vilouraai1@gmail.com`.
- The page must work with JS off for the free-check GET and for reaching `/#check`, `/free-check`, `/sample/results`, and `/pricing`. Paid checkout may still need `prisqo-check.js`, as today.

---

## Hard rules

- No fake testimonials, logos, user counts, reviews, case studies, “as seen in”, or star ratings. If we do not have it in the repo, it does not go on the page.
- Every number on the page must come from real repo data (price $19, 6 questions, score 83, 5 of 6, 14-day refund, sample competitor counts, etc.). No new statistics.
- No weekly, subscription, monitoring, “coming soon”, or “we’ll email your report” language. Reports are not emailed; they live at a web address. One payment buys one report.
- Do not touch the engine or Worker: `engine/`, `prisqo-site-worker.js`, `prisqo-check.js`, `free-check.js`, Stripe, wrangler, env, keys. Do not change `_headers`, `robots.txt`, or `CF_BEACON_TOKEN`.
- Do not rewrite other marketing pages in this PR (`ai-visibility/`, `guides/`, `compare/`, `best/`, `pricing.html`, `faq.html`, `free-check.html`, `sample/*`) except if a typo-level fix is required for a broken link you introduced. This task is the homepage.
- Do not spend money, create accounts, or add paid fonts/libraries.
- Leave refund wording as it is (14-day refund). Do not change the $19 price.
- Keep `data-testid="sample-preview"` and `data-testid="home-more"` if those blocks remain, or move them with the redesigned blocks so existing checks can still find the sample preview.
- JSON-LD must still parse (`python3 -c "import json,sys,re,pathlib; t=pathlib.Path('index.html').read_text(); [json.loads(x) for x in re.findall(r'<script type=\"application/ld\\+json\">(.*?)</script>', t, re.S)]"`).

---

## Files Hark may touch

- `index.html`
- `prisqo-lp.css` (create this; new first-party styles only)
- `ops/replies/hark-lp-1.md`
- `ops/replies/hark-lp-1-competitors.md`
- Optional: small local SVG/PNG under the repo root or `sample/` if needed for the preview; no large binaries

Do **not** touch anything else.

---

## Acceptance

- One non-draft PR from branch `hark-lp-1` with the exact title above.
- Competitor table is complete in `ops/replies/hark-lp-1-competitors.md` (8+ rows: the 6 named plus 2 more).
- `ops/replies/hark-lp-1.md` has before/after screenshots **or**, if you cannot capture images, a written before/after of each section, then `## Summary` and `DONE`.
- `## Summary` lists, for each competitor studied, **exactly why the new page beats them** (honest reasons only: e.g. $19 one-time vs their monthly platform, instant free check for a local business, no account, a real sample report. Do not claim a feature or price we don’t have).
- Homepage includes every required section in B. Primary CTA copy is “Get my report ($19)”. Trust strip exact text preserved. `#check` checkout form still works with unchanged field names and `prisqo-check.js`. Free-check hero form lands on `/free-check` with query params and can run. Sample numbers unchanged and labeled as example data. Meta/OG/canonical/indexable behavior and the beacon placeholder preserved. Footer city links still ≤ 8 including `/ai-visibility/`.
- No fake proof. No weekly/subscription claims. No engine/Worker/checkout-script edits.
- Page is mobile-first and accessible (labels, contrast, 44px targets, no keyboard trap from the sticky bar). Existing checks still pass: buy buttons read “Get my report ($19)”, JSON-LD parses, no “coming soon” / “not built” text, no broken internal links you introduced.

Commit often. Do the research, then the redesign, then the reply, then open the PR.
