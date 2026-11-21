# SEO sprint — muse-seo-3

Date: Nov 19, 2026. Main at `e08a05f` (includes PR #44). Brief: `ops/tasks/muse-seo-3.md`. Work done locally in `~/workspace/prisqo-repo`; nothing pushed or deployed by Muse.

## 1. Brand SERP — “Prisqo by VilouraAI”

- `index.html`: Organization gained `alternateName: "Prisqo by VilouraAI"` (description + `sameAs: ["https://vilouraai.com"]` were already there from PR #44); added `WebSite` and `SoftwareApplication` nodes (`applicationCategory: "BusinessApplication"`, `$19` Offer, `priceCurrency: "USD"`). Homepage layout untouched — JSON-LD only.
- `pricing.html`, `free-check.html`, `faq.html`, `for-agencies.html`, `compare.html`: Organization nodes gained `alternateName`, the VilouraAI description, and `sameAs`; WebSite nodes gained `alternateName`; a `SoftwareApplication` block (`BusinessApplication`, `$19` Offer, USD) added to each.
- `faq.html`: new final question q19, visible + FAQPage JSON-LD (text identical): “What is Prisqo — and is it the same as Priqo?” — Prisqo is an AI-recommendation visibility report by VilouraAI in Lewisville, TX, $19 once; not a shopping app, not affiliated with Priqo (price-comparison extension). FAQ is now 19 questions. Existing q1–q18 ids/testids untouched.
- Also fixed two pre-existing visible-vs-JSON-LD typos found during verification: `faq.html` (double space after “charged.”) and `for-agencies.html` (en dash in “0–100”) — JSON-LD now matches the visible text.

## 2. Internal linking & schema

- Primary nav: `/free-check` was ALREADY in the header nav/CTA on all core pages (index, pricing, free-check, faq, for-agencies, compare) — verified, nothing to add.
- Hubs: `guides/index.html` and `ai-visibility/index.html` gained a “Compare tools” line linking `/best/ai-visibility-tools-small-business`, `/best/cheap-ai-visibility-tools`, `/compare`, and `/free-seo-audit`. (`compare.html` already linked `/best/*`.) The study page is linked first in the guides hub list.
- `BreadcrumbList` JSON-LD: added to 156 pages that lacked it (151 `ai-visibility/*` + 5 `guides/*`), built from each page’s own visible crumbs nav. Already present on 22 guides, all 12 compare pages, `ai-visibility/index.html`, and the core pages — left alone. 5 guides whose visible crumbs end at “Guides” got the page H1 as the final (link-less) crumb.
- `Article` JSON-LD: added to all 26 guides article pages (not the hub): author VilouraAI, `datePublished: 2026-11-12` (the guides’ sitemap lastmod — the recorded publish date), `dateModified: 2026-11-19` (this PR), headline/description/canonical from the page itself.

## 3. De-templated top 15 DFW `ai-visibility/*` pages

Each page gained a dated “What AI actually named” section (real names from `data/ai-answers.json` only), a matching unique FAQ question (visible + JSON-LD, text identical), and links to the matching `/guides/ai-visibility-for-*` guide and `/free-check`. No business score or claim was invented.

| Page | Checks used | Mentions | Data? |
|---|---|---|---|
| `ai-visibility/dentists-dallas.html` | Dallas dentist, Nov 13 | 5 | yes |
| `ai-visibility/med-spas-dallas.html` | Dallas med spa, Nov 13 | 5 | yes |
| `ai-visibility/plumbers-dallas.html` | Dallas plumber, Nov 13 | 4 | yes |
| `ai-visibility/roofers-dallas.html` | Dallas roofer, Nov 13 | 6 | yes |
| `ai-visibility/dentists.html` | Dentist, 6 DFW cities, Nov 13 | 29 | yes |
| `ai-visibility/chiropractors.html` | Chiropractor, 5 DFW cities, Nov 13 | 25 | yes |
| `ai-visibility/plumbers.html` | Plumber, Dallas + Lewisville, Nov 13 | 10 | yes |
| `ai-visibility/hvac.html` | HVAC, Lewisville + Irving + Arlington, Nov 13 | 15 | yes |
| `ai-visibility/med-spas.html` | Med spa, 5 DFW cities, Nov 13 | 24 | yes |
| `ai-visibility/roofers.html` | Roofer, Dallas + Irving, Nov 13 | 12 | yes |
| `ai-visibility/auto-repair.html` | Auto repair, Arlington + Irving, Nov 13 | 16 | yes |
| `ai-visibility/hair-salons.html` | Hair salon, Dallas + Lewisville, Nov 13 | 10 | yes |
| `ai-visibility/lawyers.html` | Personal injury (4 cities) + family law (Irving, Lewisville), Nov 13 except Lewisville Nov 11 | 25 | yes |
| `ai-visibility/hvac-dallas.html` | No Dallas HVAC check in the snapshot | 0 | structural only |
| `ai-visibility/auto-repair-dallas.html` | No Dallas auto-repair check in the snapshot | 0 | structural only |

Source for every name/date above: `data/ai-answers.json` (checked 2026-11-13, except the two Lewisville law checks dated 2026-11-11). The two `nodata` pages got a structural section only (unique FAQ + links to `/free-check`, the home-services guide, and the category hub) with an explicit “no Dallas check yet” note — no findings fabricated.

Note: no Plano / Frisco / Lewisville / Irving / Arlington city pages exist in `ai-visibility/` (only Dallas has city pages). The brief’s other DFW cities are covered through the category hubs above and the study page. Creating new city pages was out of scope for this brief.

## 4. DFW Local Business AI Visibility Study (new page)

New: `guides/dfw-local-business-ai-visibility-study.html` (title 58 chars, description 137 chars), with `Article` + `FAQPage` (4 Qs, visible = JSON-LD) + `BreadcrumbList` JSON-LD, a per-city summary table, and CTAs to `/free-check`. Added to `sitemap.xml` (lastmod 2026-11-19), `llms.txt`, and the `/guides/` hub (first list item).

Every number in the study traces to a repo file:

| Number in the study | Source (file + date) |
|---|---|
| 71 checks; 69 on Nov 13, 2026, 2 on Nov 11, 2026 | `data/ai-answers.json` — 71 entries; per-check `checked` field (69 × 2026-11-13, 2 × 2026-11-11, both Lewisville law) |
| 17 cities, 18 categories | `data/ai-answers.json` — distinct `city` / `category` values |
| 349 mentions, 337 different businesses (all checks) | `data/ai-answers.json` — sum of `named` lists; distinct names |
| Median 5 named per check, range 2–10 | `data/ai-answers.json` — median and min/max of `named` list lengths |
| DFW: 37 checks, 185 mentions, 182 different businesses | `data/ai-answers.json` — checks with city in Dallas / Plano / Frisco / Lewisville / Irving / Arlington |
| Per-city table: Dallas 7 checks / 35 named / median 5; Plano 3 / 15 / 5; Frisco 3 / 16 / 5; Lewisville 12 / 54 / 5; Irving 8 / 45 / 5; Arlington 4 / 20 / 5 | `data/ai-answers.json` — grouped by city, all checked 2026-11-13 |
| Only 3 businesses named in 2+ DFW checks: Christian Brothers Automotive (Arlington + Irving auto repair); Mullen & Mullen Law Firm (Dallas + Plano personal injury); Berkeys Air Conditioning, Plumbing & Electrical (Dallas plumbing, Irving HVAC) | `data/ai-answers.json` — name frequencies across the 37 DFW checks |
| Thinnest answers: Lewisville family law 2 (Nov 11); Lewisville personal injury 3 (Nov 11); Highland Village physical therapy 3; McKinney HVAC 3. Largest: Irving auto repair 10; Carrollton auto detailing 7 | `data/ai-answers.json` — smallest/largest `named` lists |
| Nov 13 checks used Gemini; Nov 11 checks used “an AI search assistant” | `free-check.js` line 75 (date-to-label logic) |
| Prisqo does not query ChatGPT, Perplexity, Claude or Grok directly | `llms.txt` key facts + `faq.html` (“What Prisqo measures” section) |
| What the named businesses have in common: not knowable from this data | Stated as a limit in the page itself — the snapshot records names only; no review/profile data exists in the repo, so no common trait was claimed |

## 5. Title / meta hygiene

Re-checked 46 pages (6 core + 27 guides + 12 compare + the new study page): 0 titles over 60 chars, 0 descriptions over 158 chars. Nothing to tighten — the Nov 18 audit’s single over-length description was already fixed in PR #44.

## Verification (all run locally, Nov 19, 2026)

- JSON-LD: all 582 `application/ld+json` blocks in the 188 changed files parse with Python `json.loads` — 0 errors. Types: Organization 186, WebSite 186, BreadcrumbList 183, FAQPage 182, Article 27, SoftwareApplication 6, Product 2, Service 3, ItemList 1.
- FAQ parity: every visible FAQ item matches its FAQPage JSON-LD entry (text-identical) on all changed pages, including the 15 de-templated pages, the study page, and faq.html (19/19).
- Sitemap: valid XML, 206 URLs (205 + study page); 186 entries have `lastmod` 2026-11-19 (exactly the files changed in this PR); all sitemap URLs resolve to real files.
- Links: every internal link added in this PR resolves to a real file/URL in the repo. (Two flagged refs on the new study page — the InterVariable woff2 preload and apple-icon.png — are inherited from the guides template, not added here; both return 200 live, same as on every other guides page.)
- HTML: tag-balance check clean on all changed pages (Python `html.parser`).
- Hard rules: `/free-check` name/city fields intact; 14-day refund line present on index / free-check / pricing; `prisqo-site-worker.js`, `prisqo-check.js`, `free-check.js` byte-identical to main; zero URL changes (no new 404s); homepage layout untouched (index.html diff is JSON-LD only).
- JSON-LD blocks were compacted to single-line form to match each file’s existing style (content unchanged, re-verified after).

## Files changed (188, including 1 new page; + this reply file = 189 total)

- `(root)/`: 8 files
- `ai-visibility/`: 152 files
- `guides/`: 28 files

Changed: `index.html`, `pricing.html`, `free-check.html`, `faq.html`, `for-agencies.html`, `compare.html`, `sitemap.xml`, `llms.txt`, 156 pages gaining `BreadcrumbList`, 26 guides gaining `Article`, 15 de-templated `ai-visibility/*` pages, `guides/index.html`, `ai-visibility/index.html`. Added: `guides/dfw-local-business-ai-visibility-study.html`.

Full list:

- `ai-visibility/accountants-houston.html`
- `ai-visibility/accountants-phoenix.html`
- `ai-visibility/accountants.html`
- `ai-visibility/auto-repair-chicago.html`
- `ai-visibility/auto-repair-dallas.html`
- `ai-visibility/auto-repair.html`
- `ai-visibility/car-dealerships-houston.html`
- `ai-visibility/car-dealerships-phoenix.html`
- `ai-visibility/car-dealerships.html`
- `ai-visibility/chiropractors-austin.html`
- `ai-visibility/chiropractors-chicago.html`
- `ai-visibility/chiropractors.html`
- `ai-visibility/daycares-austin.html`
- `ai-visibility/daycares-san-antonio.html`
- `ai-visibility/daycares.html`
- `ai-visibility/dentists-austin.html`
- `ai-visibility/dentists-chicago.html`
- `ai-visibility/dentists-dallas.html`
- `ai-visibility/dentists-denver.html`
- `ai-visibility/dentists-houston.html`
- `ai-visibility/dentists-phoenix.html`
- `ai-visibility/dentists-san-antonio.html`
- `ai-visibility/dentists.html`
- `ai-visibility/dermatologists-dallas.html`
- `ai-visibility/dermatologists-houston.html`
- `ai-visibility/dermatologists.html`
- `ai-visibility/ecommerce-austin.html`
- `ai-visibility/ecommerce-dallas.html`
- `ai-visibility/ecommerce-houston.html`
- `ai-visibility/ecommerce.html`
- `ai-visibility/electricians-dallas.html`
- `ai-visibility/electricians-houston.html`
- `ai-visibility/electricians.html`
- `ai-visibility/financial-advisors-austin.html`
- `ai-visibility/financial-advisors-chicago.html`
- `ai-visibility/financial-advisors.html`
- `ai-visibility/florists-chicago.html`
- `ai-visibility/florists-san-antonio.html`
- `ai-visibility/florists.html`
- `ai-visibility/general-contractors-denver.html`
- `ai-visibility/general-contractors-san-antonio.html`
- `ai-visibility/general-contractors.html`
- `ai-visibility/gyms-austin.html`
- `ai-visibility/gyms-denver.html`
- `ai-visibility/gyms.html`
- `ai-visibility/hair-salons-chicago.html`
- `ai-visibility/hair-salons-houston.html`
- `ai-visibility/hair-salons.html`
- `ai-visibility/house-cleaning-dallas.html`
- `ai-visibility/house-cleaning-phoenix.html`
- `ai-visibility/house-cleaning.html`
- `ai-visibility/hvac-austin.html`
- `ai-visibility/hvac-dallas.html`
- `ai-visibility/hvac.html`
- `ai-visibility/index.html`
- `ai-visibility/insurance-agents-dallas.html`
- `ai-visibility/insurance-agents-houston.html`
- `ai-visibility/insurance-agents.html`
- `ai-visibility/interior-designers-chicago.html`
- `ai-visibility/interior-designers-denver.html`
- `ai-visibility/interior-designers.html`
- `ai-visibility/landscapers-austin.html`
- `ai-visibility/landscapers-phoenix.html`
- `ai-visibility/landscapers.html`
- `ai-visibility/lawyers-austin.html`
- `ai-visibility/lawyers-chicago.html`
- `ai-visibility/lawyers-dallas.html`
- `ai-visibility/lawyers-denver.html`
- `ai-visibility/lawyers-houston.html`
- `ai-visibility/lawyers-phoenix.html`
- `ai-visibility/lawyers-san-antonio.html`
- `ai-visibility/lawyers.html`
- `ai-visibility/locksmiths-dallas.html`
- `ai-visibility/locksmiths-phoenix.html`
- `ai-visibility/locksmiths.html`
- `ai-visibility/massage-therapists-austin.html`
- `ai-visibility/massage-therapists-denver.html`
- `ai-visibility/massage-therapists.html`
- `ai-visibility/med-spas-austin.html`
- `ai-visibility/med-spas-chicago.html`
- `ai-visibility/med-spas-dallas.html`
- `ai-visibility/med-spas-denver.html`
- `ai-visibility/med-spas-houston.html`
- `ai-visibility/med-spas-phoenix.html`
- `ai-visibility/med-spas.html`
- `ai-visibility/mortgage-brokers-houston.html`
- `ai-visibility/mortgage-brokers-phoenix.html`
- `ai-visibility/mortgage-brokers.html`
- `ai-visibility/movers-austin.html`
- `ai-visibility/movers-san-antonio.html`
- `ai-visibility/movers.html`
- `ai-visibility/optometrists-chicago.html`
- `ai-visibility/optometrists-dallas.html`
- `ai-visibility/optometrists.html`
- `ai-visibility/orthodontists-houston.html`
- `ai-visibility/orthodontists-phoenix.html`
- `ai-visibility/orthodontists.html`
- `ai-visibility/painters-austin.html`
- `ai-visibility/painters-chicago.html`
- `ai-visibility/painters.html`
- `ai-visibility/pest-control-houston.html`
- `ai-visibility/pest-control-san-antonio.html`
- `ai-visibility/pest-control.html`
- `ai-visibility/pet-groomers-dallas.html`
- `ai-visibility/pet-groomers-denver.html`
- `ai-visibility/pet-groomers.html`
- `ai-visibility/physical-therapists-denver.html`
- `ai-visibility/physical-therapists-phoenix.html`
- `ai-visibility/physical-therapists.html`
- `ai-visibility/plastic-surgeons-austin.html`
- `ai-visibility/plastic-surgeons-phoenix.html`
- `ai-visibility/plastic-surgeons.html`
- `ai-visibility/plumbers-austin.html`
- `ai-visibility/plumbers-chicago.html`
- `ai-visibility/plumbers-dallas.html`
- `ai-visibility/plumbers-denver.html`
- `ai-visibility/plumbers-houston.html`
- `ai-visibility/plumbers-phoenix.html`
- `ai-visibility/plumbers-san-antonio.html`
- `ai-visibility/plumbers.html`
- `ai-visibility/property-managers-austin.html`
- `ai-visibility/property-managers-denver.html`
- `ai-visibility/property-managers.html`
- `ai-visibility/real-estate-agents-austin.html`
- `ai-visibility/real-estate-agents-chicago.html`
- `ai-visibility/real-estate-agents-dallas.html`
- `ai-visibility/real-estate-agents-houston.html`
- `ai-visibility/real-estate-agents-phoenix.html`
- `ai-visibility/real-estate-agents.html`
- `ai-visibility/restaurants-austin.html`
- `ai-visibility/restaurants-chicago.html`
- `ai-visibility/restaurants-dallas.html`
- `ai-visibility/restaurants-houston.html`
- `ai-visibility/restaurants-phoenix.html`
- `ai-visibility/restaurants.html`
- `ai-visibility/roofers-dallas.html`
- `ai-visibility/roofers-houston.html`
- `ai-visibility/roofers.html`
- `ai-visibility/saas-austin.html`
- `ai-visibility/saas-dallas.html`
- `ai-visibility/saas-denver.html`
- `ai-visibility/saas-houston.html`
- `ai-visibility/saas.html`
- `ai-visibility/tutors-chicago.html`
- `ai-visibility/tutors-houston.html`
- `ai-visibility/tutors.html`
- `ai-visibility/veterinarians-austin.html`
- `ai-visibility/veterinarians-dallas.html`
- `ai-visibility/veterinarians.html`
- `ai-visibility/wedding-photographers-austin.html`
- `ai-visibility/wedding-photographers-san-antonio.html`
- `ai-visibility/wedding-photographers.html`
- `compare.html`
- `faq.html`
- `for-agencies.html`
- `free-check.html`
- `guides/ai-search-visibility-checklist.html`
- `guides/ai-visibility-for-agencies.html`
- `guides/ai-visibility-for-dentists.html`
- `guides/ai-visibility-for-ecommerce.html`
- `guides/ai-visibility-for-financial-services.html`
- `guides/ai-visibility-for-health-practices.html`
- `guides/ai-visibility-for-home-services.html`
- `guides/ai-visibility-for-law-firms.html`
- `guides/ai-visibility-for-med-spas.html`
- `guides/ai-visibility-for-real-estate-agents.html`
- `guides/ai-visibility-for-restaurants.html`
- `guides/ai-visibility-for-saas.html`
- `guides/chatgpt-has-wrong-info-about-my-business.html`
- `guides/chatgpt-vs-google-search-for-local-businesses.html`
- `guides/dfw-local-business-ai-visibility-study.html`
- `guides/does-chatgpt-recommend-my-business.html`
- `guides/get-recommended-by-chatgpt.html`
- `guides/google-business-profile-and-ai-answers.html`
- `guides/how-chatgpt-picks-local-businesses.html`
- `guides/how-to-check-if-chatgpt-recommends-you.html`
- `guides/how-to-get-your-business-mentioned-by-ai.html`
- `guides/index.html`
- `guides/reviews-and-ai-recommendations.html`
- `guides/show-up-in-google-ai-overviews.html`
- `guides/show-up-in-perplexity-answers.html`
- `guides/website-content-ai-tools-can-cite.html`
- `guides/what-is-ai-visibility.html`
- `guides/why-chatgpt-doesnt-mention-my-business.html`
- `index.html`
- `llms.txt`
- `pricing.html`
- `sitemap.xml`

## Summary

- Brand SERP: “Prisqo by VilouraAI” is now explicit in Organization / WebSite / SoftwareApplication JSON-LD (with `alternateName`, `sameAs: vilouraai.com`, `$19` Offer) on the homepage + 5 core pages, plus a Priqo-disambiguation Q&A in faq.html (19 questions).
- Internal links & schema: `/free-check` was already in every header nav; `/best/*` + `/free-seo-audit` are now linked from both hubs; `BreadcrumbList` added to 156 pages; `Article` JSON-LD added to all 26 guides.
- De-templated the top 15 DFW `ai-visibility/*` pages with real, dated Nov 2026 check data (13 with data, 2 structural-only where no Dallas check exists) — every name and date traces to `data/ai-answers.json`.
- Published the DFW study page, grounded strictly in the same repo data (71 checks, median 5 named, 182 of 185 DFW mentions unique), with per-number sources listed above and an explicit “cannot tell from this data” on shared traits.
- Title/meta hygiene: 46 pages re-checked, 0 over-length. Sitemap valid (206 URLs, lastmod bumped only for changed files). All 582 JSON-LD blocks parse; FAQ parity holds everywhere; hard rules intact.

DONE
