# SEO audit — reply (seo-audit)

- **Date:** 2026-11-12
- **Status:** audit done, findings only — no code changed, nothing deployed, checkout/engine untouched.
- **What this is:** adi asked for both new SEO skills to be added and for both
  sites to be SEO-audited, with the findings shared on GitHub so Kiwi can see
  them. This reply is the summary. The full audits are in this PR:
  - `ops/seo/vilouraai-findings.md` — vilouraai.com (231 lines)
  - `ops/seo/prisqo-findings.md` — prisqo.vilouraai.com (144 lines)
- **Skills added (local, `~/workspace/custom-skills/`):**
  - `illyism-seo-skills` — Illyism/seo-skills, 30 workflows, output-first
    (titles, `/vs/` pages, proof KB, internal linking, redirects, directory
    submissions). README badge says MIT; no LICENSE file in that repo.
  - `claude-seo-agric` — AgricIDaniel/claude-seo, 26 sub-skills, MIT
    (site audit, single-page, technical, schema, sitemap, local, GEO/AI
    search, backlinks, drift, Google APIs). Its Claude Code `/seo` commands
    do not apply in Muse; the SKILL.md files + scripts are used as reference.
  - Both skills carry the same guardrails: paid APIs (Ahrefs, DataForSEO)
    need adi's approval first; no invented numbers — verified checks only.

## Scores

| Site | Overall | Note |
|---|---|---|
| vilouraai.com (local source) | 62/100 | Pre-deploy source incl. PR #1 services work |
| vilouraai.com (live) | 48/100 | Live is an older build; 9 new pages 404 |
| prisqo.vilouraai.com | ~78/100 | Solid foundation; polish + template risk, not rescue |

No Search Console exists for either domain, so no indexing/ranking claim in
either audit is verified against Google. No Core Web Vitals were measured.
No paid tools were used.

## vilouraai.com — top findings

1. **P0: every live `<title>` repeats the brand.** Layout template
   (`src/app/layout.tsx:25`, `"%s · VilouraAI"`) appends to titles already
   ending `| VilouraAI` — live-verified, e.g. `/locations/lewisville`
   renders `… | VilouraAI · VilouraAI`. The 5 niche pages will render it
   three times. Fix before/with the PR #1 deploy.
2. **P0: live ≠ local — the services relaunch is not live.** `/website`,
   `/pricing`, `/bundle`, `/ai-receptionist`, `/dentists` all 404 live;
   live home still sells Forecast Sprint $495 / Partner ~$1k/mo vs local
   $497 / $149/mo / $597. Merge/deploy of vilouraai-web PR #1 is the gate.
3. **P0: meta descriptions too long** on most money pages — home 226,
   `/bundle` 220, `/demo` 218, `/website` 198, `/ai-receptionist` 199 chars.
4. **P1: city pages sell the old product.** All 6 `/locations/[city]`
   pages are forecast-only in copy, CTAs, and schema; city schema still
   says "$495 Forecast Sprint" / `priceRange: "Free - $1000"`.
5. **P1: no phone or hours anywhere on site.** No `tel:` / `469` in `src/`.
   GBP is linked in the footer, but on-site NAP is name + "Lewisville,
   Texas" only. Verify `(469) 496-5431` + 7am–7pm daily against GBP before
   adding — do not take this file's word for it.
6. **P1: `/new-business` is an orphan** — its only reference in `src/` is
   its sitemap entry. No nav, footer, or home link points to it.
- Already good: one H1 per page, self-canonicals, FAQPage + Service/Offer
  schema with prices matching on-page prices, valid sitemap/robots, `/ops`
  noindex + auth-gated, no invented ratings, AI crawlers left unblocked.

## prisqo.vilouraai.com — top findings

1. **P0: `/success` is indexable and in the sitemap.** Post-payment page,
   no robots meta. Fix: add `noindex, nofollow` (same pattern as 404 /
   weekly-report) and remove it from `sitemap.xml`.
2. **P0: no Search Console / analytics verification** — indexing unverified
   (also: `privacy.html` says Cloudflare Web Analytics is used — verify it
   is actually enabled).
3. **P0: the 14-day refund line is indexed but not yet approved policy.**
   Needs Jilsha's yes/no before more traffic is driven to home/pricing/FAQ.
4. **P1: `/free-check` is nav-orphaned on 206 of 207 pages.** Only the home
   nav links it. One template edit fixes it.
5. **P1: systematic over-length titles/descriptions** — ~150 titles over 60
   chars, 36 descriptions over 160 (compare hub 296). Underneath: 100%
   coverage, zero duplicate titles/descriptions/H1s, zero broken internal
   links across all 207 pages.
6. **P2: 152 ai-visibility pages are 57–75% template** — saved by real
   distinct data per city, but doorway-page risk if that data goes stale.
   Also no `llms.txt`, no Article schema on the 27 guides, no ItemList /
   Product schema on compare/best/pricing.
- Already good: sample numbers honest and consistent everywhere (Smith
  Family Dental, named 5 of 6, score 83, labelled example data); live home
  has no demo banner and no noindex (verified live); every landing page
  sells the $19 check.

## Suggested order of work (for Kiwi)

**Prisqo (this repo):** P0-2 `/success` noindex + sitemap, plus P1-5 sitemap
`<lastmod>` and P1-1 free-check in nav — one small commit. Then P1-2/P1-3
title/description trims in the same template pass. Then P1-4 footer H2s →
p/div, P1-6 link the `best/*` pages from compare pages. Then P2-1 schema
(Article/ItemList/Product) + P2-2 drop boilerplate FAQ from ai-visibility
JSON-LD. P2-4 `llms.txt` is a 15-minute win, do it with step 1 if convenient.

**Vilouraai-web (separate repo, vilouraai1/vilouraai-web):** P0 title fix +
description trims in the same change set as the PR #1 merge, not after it.
City-page rewrite, phone/hours, and the `/new-business` orphan link are P1
in that repo. This PR does not change vilouraai-web.

## Questions / blockers (need adi or Jilsha, not code)

- Search Console for **both** domains — adi step (add property, verify,
  submit sitemap, request indexing after the vilouraai-web deploy).
- 14-day refund: Jilsha's yes/no before driving more traffic.
- Vilouraai-web PR #1 merge/deploy decision — the audit does not deploy it.

## Progress — SEO fixes + Free SEO audit offer (2026-11-12, ~16:30 CST)

**Status:** fixes applied locally in `~/workspace/prisqo-repo` (synced from main
969624b, hark-lp-1 homepage present). **Not pushed, not deployed** — parent
to push to PR #29. No checkout/engine/Stripe/Groq touched. No paid APIs, no
invented numbers; every price/date/claim below comes from a file read during
this work.

### What changed

- **P0-2 `/success`:** added `<meta name="robots" content="noindex, nofollow">`
  (same pattern as 404.html) and removed `/success` from `sitemap.xml`.
- **P1-1 nav:** "Free check" link added to the main nav on 206 pages; 2 pages
  already had it — now all 208 HTML files link `/free-check` from the nav.
- **P1-4 footer headings:** footer column labels `<h2>Product / Compare /
  Company</h2>` → `<p>` on all 208 files (624 labels). Styling note: there is
  no footer-h2 rule in the repo — pages link a generated Next.js CSS chunk
  (`/_next/static/chunks/3yytf2z4lgznt.css`) that is not in the repo, and that
  chunk 404s when fetched live, so the labels currently render at the
  browser-default h2 size. The replacement `<p>` carries an inline style
  matching exactly that (`font-size:1.5em;font-weight:700;margin:.83em 0`), so
  the look is preserved as-rendered today. Kiwi: please eyeball the footer
  after deploy; if the rebuilt chunk ever styles footer h2s, the inline style
  may need adjusting.
- **P1-5 sitemap:** 205 URLs, all with `<lastmod>2026-11-12</lastmod>` (every
  sitemap page was edited today by the nav/footer pass, so the date is real);
  `/success` removed; home loc fixed to the canonical's form
  (`https://prisqo.vilouraai.com`, no trailing slash); `/free-seo-audit`
  added. XML parses clean.
- **P1-2/P1-3 worst only:** descriptions trimmed to ≤155 chars (meta + OG +
  Twitter): compare.html 296→108, index.html 183→131, privacy.html 218→126,
  free-check.html 176→126. Titles trimmed to ≤60 (title + OG + Twitter):
  health-practices guide 93→43, financial-services guide 92→45,
  wedding-photographers 86→59, property-managers 85→55,
  general-contractors 85→57. All keyword-first.
- **P1-6 best pages:** one contextual paragraph linking both `best/*`
  roundups added to all 12 `compare/*` pages, before the CTA band.
- **P2-4 llms.txt:** new file at repo root (title, description, key facts:
  $19 once, 6 questions, one search-grounded model, sample/pricing/FAQ/
  compare links). `robots.txt` untouched — no AI crawler blocked.
- **P2-8 sample:** `sample/results.html` retitled to "Sample AI visibility
  report: Smith Family Dental, 5 of 6 named | Prisqo" (68 chars — over 60,
  but this is the exact wording specified; it says "sample" as required) and
  the H1 comment separators removed ("Does AI recommend Smith Family
  Dental?").
- **P2-1 partial:** Product + Offer schema ($19 USD, description = pricing
  page's own meta description) added to `pricing.html`; ItemList schema (12
  tools, URLs verified against the page's own links) added to `compare.html`.
  Both JSON-LD blocks parse as valid JSON. No `sameAs` added — no social
  profiles exist to list.
- **Free SEO audit offer:** new `free-seo-audit.html` (title 41 chars, desc
  136, canonical, OG/Twitter, FAQPage schema with 3 questions, form with
  business name / website / email, all required, posting to
  `https://formsubmit.co/vilouraai1@gmail.com` with `_subject` "Free SEO audit
  request — Prisqo", `_template` table, `_captcha` false, `_next`
  `https://prisqo.vilouraai.com/free-seo-audit?sent=1`, plus inline JS showing
  a thank-you when `?sent=1` is present). Homepage section added to
  `index.html` after the checklist section, before the final CTA, in the
  hark-lp-1 card style. `/free-seo-audit` in the sitemap (lastmod 2026-11-12)
  and a "Free SEO audit" link in the footer Product column on all 208 pages.
- **Template:** new `ops/marketing/seo-audit-template.md` — one-page sample
  audit format (scores table, top 3 findings with evidence, what we would
  fix, paid offer, next step). Example business is clearly labelled
  fictional; no invented client results.

### Verification (all re-checked after editing)

- Nav "Free check": 208/208 files. Footer `<h2>Product/Compare/Company</h2>`:
  0 remaining. Footer `<p>` labels: 624. Footer "Free SEO audit" links:
  208/208. Compare best links: 12/12 pages, both roundups.
- Sitemap: 205 URLs, 205 lastmod, no `/success`, home no-slash, `/free-seo-audit` present.
- New page: title 41, desc 136, canonical correct, form action + all 4 hidden
  fields + 3 required fields verified, `?sent=1` JS present, JSON-LD valid.
- Pricing/compare JSON-LD valid. Every HTML file still has exactly one
  `<title>`. `git diff --stat`: 208 tracked files changed (+ new
  `free-seo-audit.html`, `llms.txt`, `ops/marketing/seo-audit-template.md`).
- No other files touched; checkout/engine/Stripe/Groq untouched.

### Skipped (per instructions) and why

- **P0-1 Search Console** — needs adi. **P0-3 refund line** — needs Jilsha's
  yes/no. **P2-3 city-page expansion** — out of scope. **P2-5 competitor-price
  dates** — prices were never verified, so no "checked on" date was stamped.
- **P2-2 FAQ duplication, P1-7 images, P2-6 free-check re-run, P2-7 press
  screenshots** — not in this task's list; left for a later pass.

### Open questions / notes for Kiwi

- **FormSubmit activation:** the VilouraAI contact form does NOT use
  FormSubmit — it stores leads via tRPC + mailto fallback — so this
  FormSubmit form is new per adi's instruction. The first submission will
  need activation via an email sent to vilouraai1@gmail.com; nothing will be
  delivered until that activation is clicked.
- **$497 / $149 prices on the new page** come from the vilouraai.com audit
  (local source, PR #1 not yet live), not from any prisqo page — they are
  VilouraAI's Website Launch / AI Receptionist prices as audited Nov 12.
- **Footer industry/city `<h2>`s remain:** 399 occurrences of "AI visibility
  by industry / by city" as `<h2>` in footers were out of this task's scope
  (only Product/Compare/Company were specified). Same `<p>` treatment could
  follow.
- **Sample title is 68 chars** (over the usual 60) because the specified
  wording was used verbatim.
- **hark-lp-1 note:** the local copy now contains the hark-lp-1 homepage
  (PR #28 merged as main 969624b); the audit's "not in snapshot" caveat no
  longer applies to the homepage, but the landing page itself was not
  re-audited here.

## Caveats

- The Prisqo audit used a local snapshot copy that at audit time did not
  contain hark-lp-1 / PR #28. The copy has since been refreshed from main
  (969624b, hark-lp-1 homepage present); the landing page itself was not
  re-audited in this pass.
- Competitor prices on Prisqo compare/best pages were **not** verified
  against vendors' live sites; the finding is only that they carry no
  "checked on" date.
- Vilouraai live-vs-local figures are from live fetches on 2026-11-12
  (~15:58 CST); niche-page rendered titles are projected from the
  live-verified template mechanism, not observed live (those pages 404).

## Summary

- **Prisqo (this PR, #29):** top SEO fixes applied and pushed to branch
  `muse-seo-audit` — `/success` noindexed + removed from sitemap, Free check
  in the nav on all 208 pages, footer Product/Compare/Company headings
  changed to styled paragraphs, sitemap lastmod on all 205 URLs + home
  canonical fixed, worst titles/descriptions trimmed, `best/*` roundups
  linked from all 12 compare pages, `llms.txt` added, sample page retitled,
  Product/ItemList schema added. Free SEO audit offer live as a homepage
  section + `/free-seo-audit` page (FormSubmit to vilouraai1@gmail.com —
  first submission needs the FormSubmit activation email confirmed).
  One-page audit template at `ops/marketing/seo-audit-template.md`.
- **Vilouraai-web (separate PR, #1):** same class of fixes on branch
  `muse-viloura-services` — doubled/tripled brand removed from titles,
  descriptions trimmed to ≤160, city schema + WebSite node fixed,
  `/new-business` orphan linked, phone/hours added (from the GBP record in
  memory — verify against the live GBP profile before deploy), `llms.txt`
  added, and a complimentary `/free-seo-audit` page linked from the website,
  AI receptionist, and pricing pages.
- **Still needs adi/Jilsha, not code:** Search Console for both domains;
  14-day refund yes/no; vilouraai-web PR #1 merge/deploy. City-page body
  copy on vilouraai.com is still forecast-first — a services-first copy
  pass is still owed.

DONE
