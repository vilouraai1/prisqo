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

## Caveats

- The Prisqo audit used the local snapshot copy, which **does not contain
  hark-lp-1 / PR #28** — the new landing page needs a re-audit after the
  local copy is refreshed from main.
- Competitor prices on Prisqo compare/best pages were **not** verified
  against vendors' live sites; the finding is only that they carry no
  "checked on" date.
- Vilouraai live-vs-local figures are from live fetches on 2026-11-12
  (~15:58 CST); niche-page rendered titles are projected from the
  live-verified template mechanism, not observed live (those pages 404).
