# SEO audit — vilouraai.com

- **Date:** 2026-11-12 (live checks ~15:58 CST / 21:58 UTC)
- **Scope:** vilouraai.com only (Prisqo is a separate findings file in this folder)
- **Playbooks used:** `/tmp/seo-skills-illyism` (Illyism, 30 skills — esp. `blitz-seo`, `seo-title-optimization`, `internal-linking`) and `/tmp/claude-seo-agric` (AgricIDaniel claude-seo v2.6.0, 26 skills — esp. `seo-audit`, `seo-page`, `seo-technical`, `seo-local`, `seo-schema`, `seo-sitemap`, `seo-geo`). No paid APIs, no installs, no deploys, no pushes. Deterministic checks were done by reading source and live HTML, not by the plugins' scripts (not installed here).
- **Local source audited:** `~/workspace/vilouraai-site/vilouraai-web/`, branch `master`, HEAD `14cda0a` ("Sync in-progress site work: checklist, compare, demo, locations pages, layout, sitemap, lead router"). Uncommitted services work present. No git remote configured locally.
- **Live site checked:** `https://vilouraai.com` via `browser.open` and `curl` (home, `/sitemap.xml`, `/robots.txt`, `/demo`, `/compare`, `/checklist`, `/locations`, `/locations/dallas`, `/locations/lewisville`, `/website`, `/pricing`, `/bundle`, `/ai-receptionist`, `/dentists`, `/ops`, `/llms.txt`, `/og.png`). All live fetches returned real responses — the VM proxy did **not** block the site.
- **Known blocker (not re-verified, per brief):** Google Search Console is NOT set up for vilouraai.com, so no indexing, ranking, or coverage claim in this report is verified against Google. Nothing here asserts a page is indexed.

## Scores

| Area | Local source | Live site | Note |
|---|---|---|---|
| Overall SEO health | **62 / 100** | **48 / 100** | Live is an older build; see §1 |
| Technical (crawl / index / sitemap / robots) | 70 | 55 | Sitemap + robots exist; live sitemap is stale, 9 new pages 404 |
| On-page (titles / descriptions / headings) | 55 | 45 | Doubled/tripled brand in every `<title>` — live-verified |
| Content (depth / thin / duplicate) | 60 | 55 | Niche pages ~500 words, no blog, no images |
| Schema (JSON-LD) | 65 | 60 | Good FAQPage + Service coverage; gaps + stale city schema |
| Local SEO (NAP / GBP / city pages) | 55 | 50 | Lewisville + GBP link present; no phone or hours anywhere |
| GEO / AI-citation readiness | 60 | 50 | FAQ schema + direct answers help; no `llms.txt`, no blog, no images |

Scoring is the auditor's judgement against the two playbooks' checklists (claude-seo `seo-audit` aggregates the same categories; Illyism's output-first rule is applied: every finding below names the file to change). It is not a tool-measured score — Core Web Vitals / Lighthouse were **not** measured in this audit (no browser task, no paid tools).

## TL;DR — top 5 findings

1. **Every `<title>` on the live site repeats the brand.** Layout template (`layout.tsx:25`, `"%s · VilouraAI"`) appends the brand to page titles that already end in `| VilouraAI` — live-verified on 6 pages, e.g. `/locations/lewisville` renders `Demand forecasting in Lewisville | VilouraAI · VilouraAI`. The 5 new niche pages will render it **three** times (`… | VilouraAI | VilouraAI · VilouraAI`) because `nicheMetadata` adds a second copy first. Fix before anything else ships.
2. **Live site ≠ local source. The services relaunch is not live.** `/website`, `/pricing`, `/bundle`, `/ai-receptionist`, `/dentists` all return **404 live**; the live home still sells the old forecast-first offer (Forecast Sprint $495, Partner ~$1k/mo) while local source sells Website Launch $497 / AI Receptionist $149/mo / Bundle $597. The live sitemap has 11 URLs; the local one has 20. PR #1 (`vilouraai1/vilouraai-web`, `muse-viloura-services` → `main`) is the merge/deploy gate — this audit does not deploy it.
3. **Meta descriptions are too long on most money pages** — home 226 chars, `/bundle` 220, `/demo` 218, `/website` 198, `/ai-receptionist` 199, `/locations` 194. They will truncate in the SERP. City descriptions (143–165) are mostly fine.
4. **City pages sell the old product.** All 6 `/locations/[city]` pages and `/locations` are forecast-only in copy, CTAs, and schema — no mention of the website or receptionist, and the city `ProfessionalService` schema still says "$495 Forecast Sprint, and monthly forecasting partnerships" with `priceRange: "Free - $1000"` (`locations/[city]/page.tsx:81,94`), contradicting the new pricing. The city schema also references a `WebSite` node (`#website`) that does not exist anywhere on the site.
5. **No phone number or opening hours anywhere on the site.** `grep` for `tel:` / `469` / `496-5431` across `src/` returns nothing. The GBP profile is linked in the footer and in home schema `sameAs`, but on-site NAP is name + "Lewisville, Texas" only. (Phone `(469) 496-5431` and hours 7am–7pm daily are in memory/GBP records — verify against the GBP profile before adding, don't take this file's word for it.)

---

## 1. Live vs local — the divergence that colours everything

| | Live (deployed) | Local source (`master` @ `14cda0a` + uncommitted) |
|---|---|---|
| Home title | `VilouraAI: Know your next 12 weeks of bookings` (49 chars) | `VilouraAI: Stop losing customers to voicemail and a broken website` (66 chars, `layout.tsx:10-11`) |
| Home offer | Free forecast / Forecast Sprint $495 / Partner ~$1k/mo | Website $497, Receptionist $149/mo, Bundle $597, free forecast |
| `/website`, `/pricing`, `/bundle`, `/ai-receptionist`, `/dentists`, `/salons`, `/hvac-plumbing`, `/auto-repair`, `/new-business` | **404** (verified 2026-11-12) | Present, with metadata + schema |
| Sitemap | 11 URLs, `lastmod` 2026-10-12/15 | 20 URLs (`sitemap.ts`: home + 9 new + `/compare` + `/checklist` + `/demo` + `/locations` + 6 cities), new pages `lastmod` 2026-11-12 |
| `/locations/lewisville`, `/demo`, `/compare`, `/checklist`, `/locations` | 200, old copy | Updated copy in source (city pages unchanged in substance) |
| `/og.png` | 200, 42,979 bytes — same file as local `public/og.png` | Tracked in git (`public/og.png`) |
| `/ops` | 401 (Basic Auth gate live) | `middleware.ts` gate + `robots: index:false` (`ops/page.tsx:9-11`) — good |
| `/llms.txt` | 404 | No `llms.txt` in `public/` or `src/` |

Consequence: **every "local source" finding below is a pre-deploy finding.** Until PR #1 merges and deploys, Google can only see the old forecast-first site, and the 9 new URLs cannot rank at all. Do the P0 title fix (§2) in the same change set as the merge, not after it.

## 2. Titles — doubled brand everywhere (P0, live-verified)

Root cause: `src/app/layout.tsx:25` sets `title.template: "%s · VilouraAI"`. Next.js applies the template to every page that returns a **string** title. Nearly every page title already ends in `| VilouraAI`, so the rendered `<title>` repeats the brand. The home page is the exception — it has no page-level metadata, so the layout `default` title is used as-is (no template applied).

Live-verified rendered titles (curl, 2026-11-12):

| Page | Title field in source | Rendered `<title>` live |
|---|---|---|
| `/locations/lewisville` | `Demand forecasting in Lewisville \| VilouraAI` (44) | `Demand forecasting in Lewisville \| VilouraAI · VilouraAI` (56) |
| `/locations/dallas` | `Demand forecasting in Dallas \| VilouraAI` (40) | `Demand forecasting in Dallas \| VilouraAI · VilouraAI` (52) |
| `/demo` | `Try the forecast on your own numbers \| VilouraAI` (48) | `Try the forecast on your own numbers \| VilouraAI · VilouraAI` (60) |
| `/compare` | `VilouraAI vs spreadsheets vs gut feel \| VilouraAI` (49) | `VilouraAI vs spreadsheets vs gut feel \| VilouraAI · VilouraAI` (61) |
| `/checklist` | `12-Week Capacity Checklist (free PDF) \| VilouraAI` (49) | `12-Week Capacity Checklist (free PDF) \| VilouraAI · VilouraAI` (61) |
| `/locations` | `Demand forecasting across Dallas–Fort Worth \| VilouraAI` (55) | `Demand forecasting across Dallas–Fort Worth \| VilouraAI · VilouraAI` (67) |

Projected rendered titles for the not-yet-live pages (same mechanism, so high confidence):

| Page | Field | Rendered on deploy |
|---|---|---|
| `/website` | 60 chars | 72 — `… \| VilouraAI · VilouraAI` |
| `/ai-receptionist` | 63 | 75 |
| `/bundle` | 78 | **90 — will truncate hard in the SERP** |
| `/pricing` | 65 | 77 |
| `/dentists` | field 60 → `nicheMetadata` adds ` \| VilouraAI` → 72 → template → **84, brand ×3**: `AI receptionist & website for dentists — $149/mo \| VilouraAI \| VilouraAI · VilouraAI` |
| `/salons`, `/hvac-plumbing`, `/auto-repair` | fields 59–60 | **83–84, brand ×3** (same pattern) |
| `/new-business` | field 56 | **80, brand ×3** |
| City pages (all 6) | 39–44 | 51–56, brand ×2 (live-verified for Dallas/Lewisville) |

The niche triple comes from two stacked appends: the `title` field in each `src/app/<niche>/page.tsx` already ends in `| VilouraAI`, `nicheMetadata` (`src/app/_components/NichePage.tsx:26,30,47`) appends ` | VilouraAI` again, and the layout template appends ` · VilouraAI`. OG titles are set explicitly in each page's metadata, so they escape the template — niche OG titles are doubled, not tripled; service/city OG titles are correct (single brand).

**Fix (P0):** pick one place for the brand and remove it from the others. Recommended: strip `| VilouraAI` from every page-level title field and from `nicheMetadata`, and let the layout template (`layout.tsx:25`) be the single source of the brand suffix. That also shortens `/bundle` from 90 → 78 rendered and puts the money keyword first (Illyism `seo-title-optimization`: primary query first, 40–55 chars ideal, unique titles, no truncation of the important words). Files: `src/app/layout.tsx:25` (keep), `src/app/website/page.tsx:11,16,34`, `src/app/ai-receptionist/page.tsx:11,16,34`, `src/app/bundle/page.tsx:11,16,34`, `src/app/pricing/page.tsx:14` + OG/twitter titles, `src/app/demo/page.tsx`, `src/app/compare/page.tsx`, `src/app/checklist/page.tsx`, `src/app/locations/page.tsx`, `src/app/locations/cities.ts` (`metaTitle` ×6), `src/app/_components/NichePage.tsx:26,30,47`, and the `title` field in each of the 5 `src/app/<niche>/page.tsx` files.

## 3. Meta descriptions — most money pages too long (P0)

Target: ≤155–160 chars (Illyism + claude-seo `seo-page` thresholds; Google truncates around 155–160 on desktop).

| Page | Length | Verdict |
|---|---|---|
| `/` (layout default, `layout.tsx:12-13`) | **226** | Too long — front-loads price list; rewrite to ≤160 |
| `/bundle` (`bundle/page.tsx:12`) | **220** | Too long |
| `/demo` | **218** | Too long |
| `/dentists` | 209 | Too long |
| `/salons` | 207 | Too long |
| `/website` | 198 | Too long |
| `/ai-receptionist` | 199 | Too long |
| `/locations` | 194 | Too long |
| `/new-business` | 183 | Too long |
| `/hvac-plumbing` | 220 | Too long |
| `/auto-repair` | 186 | Too long |
| `/checklist` | 171 | Slightly long |
| `/pricing` | 170 | Slightly long |
| `/fort-worth` (city) | 165 | Slightly long |
| `/compare` | 158 | OK |
| `/dallas`, `/plano` | 156 | OK |
| `/frisco` | 152 | OK |
| `/lewisville` | 148 | OK |
| `/arlington` | 143 | OK |

All descriptions are unique and on-topic — the problem is length only, not duplication or stuffing. Note the layout description also feeds OG/Twitter on the home page, so one rewrite fixes three tags.

## 4. Per-page audit table (local source)

H1: exactly **one** `<h1>` on every public page — verified in source (home `page.tsx`, service pages, `NichePage.tsx` hero, city `heroTitle`). No missing/multiple H1s. Heading order below H1 is clean (H2s via `SectionHeading`, H3s for pains/features). Canonical: every public page has a self-canonical except `/`, which correctly inherits the layout canonical (`layout.tsx:28`). OG + Twitter `summary_large_image` present on every public page except `/locations`, which has OG but **no Twitter block** (`locations/page.tsx` metadata).

| Page | Title (field → rendered) | Desc | H1 | Schema | Inbound internal links (body + footer) |
|---|---|---|---|---|---|
| `/` | 66 → 66 (default, no template) | 226 ✗ | "Stop losing customers to voicemail and a broken website." | ProfessionalService + LocalBusiness (`@id …/#business`), OfferCatalog (5 offers), FAQPage (`page.tsx:894-985`; FAQ = SERVICE_FAQS + FORECAST_FAQS, `page.tsx:693`) | Nav: `#services`, `/pricing`, `#faq` only; body Sectors links 4 niche pages; footer 10 links |
| `/website` | 60 → 72 ✗ | 198 ✗ | "A new website, live in 7 days." | Service + Offer + FAQPage | Body: `/bundle` only; footer via LocationFooter |
| `/ai-receptionist` | 63 → 75 ✗ | 199 ✗ | "Every call answered. Every appointment booked." | Service + Offer + FAQPage | Body: `/demo#receptionist` only; footer |
| `/bundle` | 78 → 90 ✗✗ | 220 ✗ | "The site and the receptionist, together." | Service + Offer + FAQPage | Body: `/pricing` only; footer |
| `/pricing` | 65 → 77 ✗ | 170 ✗ | "Plain prices. No contract." | WebPage + FAQPage only — **no Offer schema** | Body: `/demo` only; footer |
| `/demo` | 48 → 60 ✗ | 218 ✗ | "Try the forecast on your own numbers." | WebPage + FAQPage | Body: `/ai-receptionist`; footer |
| `/compare` | 49 → 61 ✗ | 158 ✓ | "Three ways to plan your next 12 weeks. Only one looks ahead." | WebPage + FAQPage | Body: none; footer |
| `/checklist` | 49 → 61 ✗ | 171 ✗ | "The 12-week capacity checklist." | WebPage + FAQPage | Body: none; footer |
| `/locations` | 55 → 67 ✗ | 194 ✗ | "Forecasting for the whole Metroplex." | **None** — no JSON-LD at all; no Twitter card | Body: 6 city links + `/#contact`; footer |
| `/locations/[city]` ×6 | 39–44 → 51–56 ✗ | 143–165 ✓/≈ | Per-city `heroTitle` | WebPage + ProfessionalService + FAQPage — but **stale forecast-only copy** (§6) | "Also serving nearby" links to other 5 cities; CTA `/#contact` only |
| `/dentists`, `/salons`, `/hvac-plumbing`, `/auto-repair`, `/new-business` | 56–60 → 80–84 ✗✗✗ | 183–220 ✗ | Per-niche `heroHeading` (via `NichePage.tsx`) | Service + 3 Offers; **no FAQPage** | Closing: `/bundle`, `/demo`; hero: `/demo#receptionist`; footer (10 links). `/new-business`: **no inbound link from any page — sitemap only** (§5) |
| `/ops` | "Ops · VilouraAI" | — (inherits layout desc) | "Ops dashboard" | None | None — correctly `robots: index:false, follow:false` (`ops/page.tsx:9-11`) + Basic Auth (`src/middleware.ts`) + 401 live |

## 5. Internal linking

**Good:** `LocationFooter` (`src/app/_components/LocationChrome.tsx`) links 10 destinations (Services, Pricing, FAQ, Website Launch, AI Receptionist, Launch Bundle, Locations, Compare, Demo, Prisqo free check, Google profile) on every niche/city/service page, so no public page is more than 2 clicks from the home page in the footer graph. Home `Sectors` (`page.tsx:609-630`) links `/salons`, `/hvac-plumbing`, `/dentists`, `/auto-repair`. City pages link to all 5 sibling cities ("Also serving nearby", `locations/[city]/page.tsx:330`).

**Gaps:**
- **`/new-business` is an orphan.** The only reference in the whole `src/` tree is its own sitemap entry (`sitemap.ts:21`). No nav, footer, home, or niche link points to it. Fix: add it to home `SECTORS` (`page.tsx:609-630`) or to the footer.
- **Home nav is thin.** `NAV_LINKS` (`page.tsx:26-30`) is `#services`, `/pricing`, `#faq` plus a Calendly CTA. The two money pages (`/website`, `/ai-receptionist`) and `/bundle`, `/locations`, `/demo` are reachable only from body sections / footer. Add `/website` and `/ai-receptionist` to the primary nav.
- **Service pages barely cross-link.** `/website` links only `/bundle`; `/ai-receptionist` links nothing in its own file; `/bundle` only `/pricing`; `/pricing` only `/demo`; `/compare` and `/checklist` link nothing. Per Illyism `internal-linking` / `blitz-seo`, the money pages should link to each other contextually (e.g. `/website` → `/ai-receptionist` as the natural next step, `/pricing` → `/bundle`), not rely on the footer alone.
- **No niche ↔ city cross-links.** A dentist in Dallas has no path from `/dentists` to `/locations/dallas` or vice versa. The local + niche clusters are disconnected from each other.
- **Anchor text is fine** — no generic "click here" links found in body copy; footer labels are descriptive.

## 6. Schema (JSON-LD) — good bones, three defects

**Good:** JSON-LD on 15 of 16 public routes (all but `/locations`); FAQPage on home + 7 service/utility pages; Service + Offer on the three money pages and all 5 niche pages; prices in schema match the on-page prices ($497 / $149 / $597 / $495 Sprint / free forecast); no fake `AggregateRating` anywhere — the site honestly says "No testimonials on this page yet, because there are no past [clients]" (`page.tsx:754`), which is the right call with zero clients.

**Defects:**
1. **City schema is stale and contradictory** (`src/app/locations/[city]/page.tsx:76-94`): `ProfessionalService.description` still reads "AI booking forecasts for local businesses. Free 12-week forecast, $495 Forecast Sprint, and monthly forecasting partnerships." and `priceRange: "Free - $1000"`. The new pricing has no $1k/mo tier. The home schema (`page.tsx:924`) correctly says `priceRange: "Free - $597"`. Rewrite the city node to the services offer set.
2. **Dangling `WebSite` reference:** city `WebPage.isPartOf` points to `https://vilouraai.com/#website` (`locations/[city]/page.tsx:75`), but no `WebSite` node with that `@id` exists anywhere — home defines only the business node (`/#business`) and FAQPage. Add a `WebSite` node (`@id …/#website`) to home `StructuredData` (`page.tsx:891-985`), or change `isPartOf` to the business `@id`.
3. **Missing schema:** `/locations` has none (add `ItemList` of the 6 cities + `ProfessionalService`); `/pricing` has no `Offer`/`Product` schema despite being the price page; niche pages have no FAQPage (they have no FAQ section in copy either — add both together); **no `BreadcrumbList` anywhere** (city and niche pages would benefit most).
- Home `geo` is coarse (`latitude: 33.0, longitude: -96.98`, `page.tsx:909-912`) — approximately Lewisville, fine for a SAB, but worth exact Lewisville coordinates if the GBP pin is ever cited.
- Home `areaServed` lists 8 places (`page.tsx:914-923`: Dallas, Fort Worth, Plano, Frisco, Lewisville, Southlake, Arlington, Irving) but only 6 have city pages — Southlake and Irving have no pages. Either add pages or trim the list so schema and site agree.

## 7. Sitemap + robots

- `src/app/sitemap.ts`: 20 URLs, all `https://vilouraai.com`, priorities sensible (home 1.0, services 0.9, niches 0.8, cities 0.8). No duplicates, no non-canonical URLs, no parameters. `lastmod` for `/compare`, `/checklist` (2026-10-12) and `/locations` (2026-10-15) is stale relative to the Nov 12 content changes — update `lastmod` when a page actually changes, don't leave Oct dates on Nov content.
- **Live sitemap is the old 11-URL version** (home, compare, checklist, demo, locations, 6 cities; `lastmod` 2026-10-12/15) — it will only gain the 9 new URLs when PR #1 deploys.
- `src/app/robots.ts`: `User-Agent: * / Allow: /` + `Sitemap: https://vilouraai.com/sitemap.xml` — live `robots.txt` matches (200, verified). No `Disallow` for `/ops` or `/api/` — not required (`/ops` is noindex + auth-gated; `/api/ops/sync` is bearer-gated), but adding `Disallow: /api/` is cheap defence in depth.
- **AI crawlers are allowed by default** (no GPTBot / ClaudeBot / PerplexityBot rules) — correct for GEO citability; do not block them. What is missing is the positive GEO surface: no `llms.txt` (§9).
- Live 404 pages return HTTP 404 with `noindex` — correct. Minor anomaly observed on the live 404 (`/website`): the raw HTML contains **two** `<title>` tags and **two** robots meta tags (`noindex` + the layout's `index, follow`). Google takes the most restrictive robots directive, so this is cosmetic, but verify it disappears after the PR #1 deploy (likely a 404 + layout metadata interaction).

## 8. Local SEO

- **Business type:** Service Area Business — no street address on site (by design; memory records address hidden, service area Lewisville TX only). Home schema correctly uses `PostalAddress` with locality/region/country only, no fake street.
- **NAP consistency:** name "VilouraAI LLC" + "Lewisville, Texas" is consistent in footer, home schema, and city schema. **Phone and hours are missing everywhere** — no `telephone`, no `openingHours` in any schema, no phone/`tel:` link in any page, no hours text on site (verified by `grep` over `src/`). GBP listing (per memory: `(469) 496-5431`, daily 7:00 AM–7:00 PM, category Marketing agency) is linked from the footer ("Find us on Google", `https://share.google/56agIYRJv4O5Jcj5Q`) and as `sameAs` in home schema. Add phone + hours to the home schema and footer after verifying against the GBP profile — this is the single biggest local-pack gap that is fixable in one edit.
- **City pages:** genuinely differentiated copy per city (3 angles + 3 patterns + 3 FAQs each in `cities.ts`, 339 lines) — not spun duplicates. But all 6 are forecast-only: no website/receptionist mention, CTA is `/#contact` "Get my free forecast". A Dallas dentist landing on `/locations/dallas` never learns VilouraAI sells websites. Rewrite the CTA block to offer the services, and link each city page to the relevant niche pages.
- **`/locations` index:** thin (~249 words of source text), forecast-only title/description, no schema, no Twitter card. It is the hub for 6 city pages and deserves a proper hub treatment (schema + service links).
- **No reviews content:** correct not to invent any (zero clients), but the GBP profile has no reviews either per memory — a review-acquisition step belongs in the business plan, not in this audit's fix list.

## 9. Content, duplicate/thin, and GEO / AI-citation readiness

- **Thin pages:** `/pricing` (~463 words of source text) is mostly price cards; niche pages ~500 words each (4 pains + sample call + closing) — adequate for a landing page, thin for ranking a competitive term; `/locations` index is the thinnest hub. No page is empty or placeholder.
- **Template similarity:** the 5 niche pages share one template (`NichePage.tsx`) and the 6 city pages share one (`locations/[city]/page.tsx` + `cities.ts`). The copy inside is differentiated per niche/city, so this is a template risk, not a duplicate-content finding — but it caps how distinct the pages can look to Google. Add one niche-specific proof element per niche page (e.g. a real, labelled sample asset) rather than more template sections.
- **No blog / content hub:** there is no `/blog`, no articles, no guides — nothing for the city/niche pages to link to and nothing to earn links or citations. Per Illyism `content-coverage` and `blitz-seo`, don't start a blog to "do SEO"; instead pick **one money page as the blitz target** (recommendation: `/ai-receptionist` — $149/mo recurring, clearest keyword "AI receptionist for dentists/salons", already has Service + FAQ schema) and concentrate internal links + one supporting page on it.
- **No images:** zero `<Image>` / `<img>` tags sitewide (charts are SVG in `ForecastChart.tsx` / `DemoForecast.tsx`). No photos, no screenshots, no alt text, no image-search presence, and nothing visual for AI answers to cite. The `og.png` (1200×630, live 200) is the only raster asset. Add at least one real photo/screenshot per money page with descriptive `alt`.
- **GEO positives:** FAQPage schema on 8 routes, direct-answer FAQ copy, question-based H2s ("Fair questions"), self-contained answer blocks, prices stated plainly, sample calls explicitly labelled as samples ("This is a written sample — the names, number, and times are made up"), no invented statistics in the new services copy. Robots allows AI crawlers.
- **GEO gaps:** no `llms.txt` (404 live); no `/llms-full.txt` or Markdown versions of key pages (claude-seo `seo-geo` / `seo-agentic`); city/niche pages' OG image `alt` still uses the old forecast tagline on city pages ("Your competitors are guessing their next 12 weeks…", `locations/[city]/page.tsx` OG block, `locations/page.tsx`) vs the new tagline on service/niche pages — align them; the illustrative $16k / McKinsey figures on the live home are labelled illustrative with sources, but keep them labelled as such when the home is rewritten (they are, `page.tsx` live text: "General industry figures, not promises and not your numbers").
- **Keywords meta** (`layout.tsx:29-38`: "AI receptionist", "website for small business", "booking forecast", "demand forecasting", "demand forecasting Texas", "AI agency Dallas"…) is ignored by Google and partly stale — remove it rather than maintain it.
- **Not measured:** Core Web Vitals, Lighthouse, mobile rendering, and server response times were not measured in this audit. Next.js 15 + `next/font` (`layout.tsx`, Fraunces/Archivo, `display: swap`) is a good starting point; measure after deploy.

## 10. Prioritised fix list

### P0 — fix before / with the PR #1 deploy
| # | Fix | Exact location |
|---|---|---|
| 1 | Remove the doubled/tripled brand from `<title>`: strip `\| VilouraAI` from every page title field + `nicheMetadata`, keep the layout template as the single brand suffix; shorten `/bundle` title | `src/app/layout.tsx:25` (keep template); `src/app/website/page.tsx:11,16,34`; `src/app/ai-receptionist/page.tsx:11,16,34`; `src/app/bundle/page.tsx:11,16,34`; `src/app/pricing/page.tsx:14` (+ OG/twitter); `src/app/demo/page.tsx`, `src/app/compare/page.tsx`, `src/app/checklist/page.tsx`, `src/app/locations/page.tsx` metadata blocks; `src/app/locations/cities.ts` `metaTitle` ×6; `src/app/_components/NichePage.tsx:26,30,47`; `title` field in all 5 `src/app/<niche>/page.tsx` |
| 2 | Merge + deploy PR #1 so the 9 new pages stop 404ing and the live home/pricing stop contradicting local source ($495/~$1k vs $497/$149/$597) | `vilouraai1/vilouraai-web` PR #1 `muse-viloura-services` → `main` (deploy decision is adi/Kiwi's, not this audit's) |
| 3 | Rewrite meta descriptions >160 chars: home, `/bundle`, `/demo`, `/website`, `/ai-receptionist`, `/locations`, `/checklist`, `/pricing`, all 5 niche pages, Fort Worth city page | `src/app/layout.tsx:12-13`; `src/app/bundle/page.tsx:12`; `src/app/demo/page.tsx`; `src/app/website/page.tsx:12`; `src/app/ai-receptionist/page.tsx:12`; `src/app/locations/page.tsx`; `src/app/checklist/page.tsx`; `src/app/pricing/page.tsx`; `src/app/<niche>/page.tsx` `description` fields; `src/app/locations/cities.ts` Fort Worth `metaDescription` |
| 4 | Set up Google Search Console (adi step): add property `https://vilouraai.com`, verify, submit `https://vilouraai.com/sitemap.xml`, request indexing for home + 9 new pages after deploy | Search Console — no code change; record as blocker until done |

### P1 — next, in the same sprint
| # | Fix | Exact location |
|---|---|---|
| 5 | Rewrite city pages services-first: update copy + CTAs to offer website/receptionist, link to `/website`, `/ai-receptionist`, `/pricing`, `/bundle`; fix stale `ProfessionalService` description + `priceRange: "Free - $1000"` | `src/app/locations/[city]/page.tsx:76-94` (schema), `:135,308` (CTAs); `src/app/locations/cities.ts` (angles/patterns/intros) |
| 6 | Add the missing `WebSite` node (`@id …/#website`) to home schema, fixing the dangling `isPartOf` from city pages | `src/app/page.tsx:891-985` (`StructuredData`, add to `@graph`) |
| 7 | Add phone + opening hours to home schema and footer (verify `(469) 496-5431` + daily 7am–7pm against GBP first) | `src/app/page.tsx:894-924` (add `telephone`, `openingHoursSpecification`); footer in `src/app/page.tsx` (~`Footer`, line ~883) and `src/app/_components/LocationChrome.tsx:87` |
| 8 | Fix the `/new-business` orphan: link it from home Sectors or the footer | `src/app/page.tsx:609-630` (`SECTORS`) or `src/app/_components/LocationChrome.tsx` (`LocationFooter`) |
| 9 | Give `/locations` schema (`ItemList` of 6 cities) + a Twitter card; rewrite its forecast-only title/description toward services | `src/app/locations/page.tsx` (metadata block + add JSON-LD) |
| 10 | Add `Offer` schema to `/pricing` | `src/app/pricing/page.tsx` (JSON-LD block; has WebPage + FAQPage only) |
| 11 | Add an FAQ section + FAQPage schema to niche pages, and cross-link niches to each other | `src/app/_components/NichePage.tsx` (add FAQ section + schema; add "Also for…" links) |
| 12 | Strengthen internal linking: add `/website` + `/ai-receptionist` to home nav; contextual cross-links between service pages; niche ↔ city links | `src/app/page.tsx:26-30` (`NAV_LINKS`); `src/app/website/page.tsx`, `src/app/ai-receptionist/page.tsx`, `src/app/bundle/page.tsx`, `src/app/pricing/page.tsx` body links; `src/app/locations/[city]/page.tsx` |

### P2 — after P0/P1, or with the next content pass
| # | Fix | Exact location |
|---|---|---|
| 13 | Add `public/llms.txt` (and optionally Markdown versions of the money pages) for AI crawlers | New file `public/llms.txt` |
| 14 | Add `BreadcrumbList` schema to city, niche, and service pages | `src/app/locations/[city]/page.tsx`, `src/app/_components/NichePage.tsx`, service pages |
| 15 | Align OG image `alt` on city pages to the new tagline; review whether `public/og.png` creative still matches services positioning | `src/app/locations/[city]/page.tsx` OG block; `src/app/locations/page.tsx` OG block; `public/og.png` |
| 16 | Remove the `keywords` meta array | `src/app/layout.tsx:29-38` |
| 17 | Add `Disallow: /api/` to robots | `src/app/robots.ts` |
| 18 | Update stale `lastmod` dates in the sitemap when pages change (`/compare`, `/checklist`, `/locations` still say Oct 12/15) | `src/app/sitemap.ts` |
| 19 | Reconcile `areaServed`: home schema lists Southlake + Irving, which have no city pages | `src/app/page.tsx:914-923` |
| 20 | Add at least one real image (photo/screenshot, with `alt`) per money page; pick `/ai-receptionist` as the single blitz target (Illyism `blitz-seo`) and concentrate internal links on it | Service + niche pages; no `<img>` exists sitewide today |
| 21 | Verify the live-404 double `<title>` / double robots-meta anomaly disappears after deploy | Re-check `curl https://vilouraai.com/<nonexistent>` post-deploy |
| 22 | Measure Core Web Vitals / Lighthouse after deploy; confirm Vercel Analytics is enabled in the dashboard (code is present, `layout.tsx`, but dashboard enablement was not verified here) | Post-deploy check, not a code change |

## 11. What is already good (don't break it)

- One `<h1>` per page; clean H2/H3 hierarchy; no heading skips found.
- Self-canonicals on every public page; home canonical correct.
- FAQPage JSON-LD on home + 7 other routes; Service + Offer schema on money + niche pages; schema prices match on-page prices.
- Sitemap (20 URLs) + robots.txt both present and valid; `/ops` is `noindex` + Basic-Auth gated (401 live); 404s return 404 + `noindex`.
- OG + Twitter `summary_large_image` on nearly every page; `og.png` live and the right dimensions (1200×630).
- No invented ratings, reviews, or statistics in the new services copy; sample calls labelled as samples; "no testimonials yet" stated honestly.
- City copy is genuinely differentiated per city, not spun; city pages cross-link siblings.
- Footer internal linking (10 destinations) keeps every page within reach; home Sectors link 4 of 5 niche pages.
- AI crawlers are not blocked in `robots.txt` — good for GEO citability.
- `lang="en"`, viewport, `metadataBase`, and the Next.js Metadata API are used correctly throughout; no `http://` internal links or mixed-content issues found.
- `og.png`, `favicon.ico`, and the checklist PDF are tracked in git (`git ls-files public/`) — the earlier "binary files not pushed" gap is not present in this local checkout.

## Method & limits

- Playbook checklists applied: claude-seo `seo-audit` (crawl ≤500 pages — site has 20 URLs in sitemap, 16 public routes + `/ops`), `seo-page` (47 on-page checks, applied by hand to source + live HTML), `seo-technical` (robots/sitemap/canonicals/rendering), `seo-local` (SAB detection: no street address, `areaServed` in schema → SAB checks applied), `seo-schema` (JSON-LD validation by inspection), `seo-sitemap` (format/limits/`lastmod`/duplicates), `seo-geo` (AI-crawler access, citability); Illyism `seo-title-optimization` (title formula + 40–55 char ideal), `blitz-seo` (single money-page focus), `internal-linking` (link equity / orphans).
- Not done: no paid tools (Ahrefs / DataForSEO / Moz), no Google Search Console or GA4 access (not set up), no Lighthouse / CrUX / Core Web Vitals measurement, no backlink profile, no SERP/competitor check, no build run. Word counts are approximate (source-text counts, not rendered text). Rendered niche titles are projected from the live-verified template mechanism, not observed live (those pages 404 live).
- No numbers in this report are invented: every price, phone number, and count is either read from the cited file / live fetch or explicitly flagged as "verify against GBP/memory" where the source is not the site itself.
