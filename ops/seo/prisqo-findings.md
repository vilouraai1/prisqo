# Prisqo SEO audit — prisqo.vilouraai.com

- **Date:** 2026-11-12 (Thu, ~16:00 CT)
- **Auditor:** sas (subagent, Prisqo-only scope)
- **Playbooks used:** `/tmp/seo-skills-illyism` (Illyism, 30 skills — `blitz-seo`, `seo-title-optimization`, `internal-linking`, `vs-and-alternatives`) and `/tmp/claude-seo-agric` (AgricIDaniel claude-seo, 26 skills — `seo-audit`, `seo-page`, `seo-technical`, `seo-schema`, `seo-sitemap`, `seo-geo`, `seo-competitor-pages`). No paid APIs, no installs, no deploys, no pushes.
- **Source audited:** local copy `~/workspace/prisqo-repo` — **NOT a git repo** (snapshot-sync copy, no `.git`, no remote, no branch/commit to cite). Files dated Nov 11–12, 2026. This snapshot **does not contain hark-lp-1 / PR #28** — no `ops/tasks/hark-lp-1.md`, no `hark-lp-1` reply, no new landing page file. It cannot be verified from this copy; re-audit after pulling main.
- **Live verified:** `curl` 2026-11-12 21:58 UTC — home `HTTP 200`, `CF-Cache-Status: HIT`, title/canonical/schema match the local source. `browser.open` on the home page the same evening confirmed the live copy: no demo banner, no noindex, sample labelled "Example data". Live `/pricing`, `/free-check`, `/compare`, `/faq`, `/sample/results` titles all match local source. **Live sitemap.xml and robots.txt also fetched and match local files.** No live crawl of all 207 pages was done (no paid tooling); all per-page numbers below are from the local source, cross-checked live on the 6 core URLs above.
- **Scope:** 207 HTML files. 152 `ai-visibility/*`, 27 `guides/*`, 12 `compare/*`, 2 `best/*`, 2 `sample/*`, plus home, pricing, FAQ, free-check, compare hub, press, for-agencies, contact, privacy, terms, success, 404.

## Scores (per claude-seo `seo-audit` weighting, adapted)

| Area | Score | One-line verdict |
|---|---|---|
| Technical (crawl/index) | 88/100 | Clean static site, valid sitemap, no broken page links; sitemap hygiene gaps only |
| On-page (titles/meta/headings) | 78/100 | 100% coverage, zero duplicates — but systematic over-length titles/descriptions |
| Content quality | 72/100 | Guides are genuinely useful; 152 ai-visibility pages are ~60–75% template |
| Schema & structured data | 82/100 | FAQPage everywhere, Org+WebSite on every page; guides/compare missing their best types |
| Internal linking | 70/100 | Hub + footer link everything; free-check is nav-orphaned, best pages nearly orphaned |
| GEO / AI-citation readiness | 74/100 | Honest, citable, AI-crawler-friendly — but no llms.txt, no images, no Article schema |
| **Overall** | **~78/100** | **Solid foundation, no P0 code breakage. The work is polish + template risk, not rescue.** |

## What is already good (do not break)

1. **100% on-page coverage, zero duplicates.** All 207 pages have a unique `<title>`, unique meta description, canonical, OG title/description/URL/image, Twitter card. No missing titles, no duplicate titles/descriptions/H1s, exactly one H1 per page, zero pages with zero H2s, zero images missing `alt` (only 2 `<img>` on the whole site — see P1-7).
2. **Zero broken internal page links.** Every `href="/…"` resolves to a real page (checked programmatically across all 207 files).
3. **Indexability state is correct on the money pages.** Live home has no `noindex`, no demo banner (verified live 2026-11-12). Only `404.html` and `sample/weekly-report.html` carry `robots: noindex, nofollow` — both correct. Worker comment (`prisqo-site-worker.js:8-10`) explicitly documents this. `robots.txt` is `Allow: /` + sitemap pointer; no AI-training crawler is blocked, which is the right call for a product whose whole pitch is AI citation.
4. **Sample numbers are honest and consistent.** Home, `sample/results.html`, `sample/weekly-report.html` all say the same thing — Smith Family Dental, **named 5 of 6, score 83/100** — and all three label it example/fictional data. The live home FAQ is explicit: "Prisqo doesn't query ChatGPT, Perplexity, Claude or Grok" — it uses one search-grounded model. That honesty is a GEO asset, not a liability.
5. **Every SEO landing page sells the check (hark-18 landed).** All 152 `ai-visibility/*`, all 27 `guides/*`, all 12 `compare/*` pages contain the $19 price and a report CTA. Verified by grep, not assumed.
6. **FAQPage schema is genuinely earned.** 182 pages carry FAQPage with 316 distinct questions; FAQ answers match the visible page copy on the samples checked (home, FAQ, guides, ai-visibility). FAQ page itself is the deepest content on the site (2,053 words).
7. **Fast, static, cacheable.** Next.js static export behind Cloudflare; live home served `CF-Cache-Status: HIT`, 28,904 bytes. OG image is a correct 1200×630 PNG (`opengraph-image.png`, 114,721 bytes).

## P0 — fix first (indexing / trust)

### P0-1. No Search Console, no analytics verification — indexing is unverified
- **Where:** everywhere (measurement, not code). Known standing gap: Google Search Console was never set up for this domain; Vercel analytics does not apply (Cloudflare Workers site; `privacy.html` says Cloudflare Web Analytics is used for anonymous visit counts — verify it is actually enabled).
- **Evidence:** cannot confirm from source whether any of the 205 sitemap URLs are indexed; the site "appearing in search" (Nov 5) is anecdotal.
- **Fix:** adi/Kiwi — add the property in Search Console, verify, submit `sitemap.xml`, request indexing for `/`, `/pricing`, `/faq`, `/free-check`, `/compare`, `/sample/results`. Then re-audit with real GSC data (impressions/clicks per page) instead of this source-only audit. Until then, do not judge the 152 ai-visibility pages by rankings.

### P0-2. `/success` is indexable AND in the sitemap — a post-payment page in the index
- **Where:** `success.html` (no `robots` meta at all → indexable; title "Your check is running | Prisqo", 577 words) and `sitemap.xml` (contains `https://prisqo.vilouraai.com/success`).
- **Fix:** add `<meta name="robots" content="noindex, nofollow">` to `success.html` `<head>` (same pattern as `404.html` / `sample/weekly-report.html`), and remove the `/success` `<url>` from `sitemap.xml`. Same treatment would also be prudent for any future per-report URLs (`/api/report/:id` pages) — confirm they are not crawlable as static paths.

### P0-3. The 14-day refund line is indexed but is not yet approved policy
- **Where:** live home (L19, L133, L158 in the live fetch): "14-day refund · One-time charge", "Email us within 14 days and we'll refund you in full." Also `index.html`, `pricing.html`, `faq.html` copy.
- **Evidence:** standing note that the 14-day refund line still needs Jilsha's yes before it is policy. SEO impact: the claim is now in Google's index and in FAQPage schema; if the policy is refused, every indexed copy must be scrubbed the same day.
- **Fix:** get the yes/no before spending more SEO effort driving traffic to these pages. If no, remove the line from home/pricing/FAQ + the FAQPage JSON-LD in `faq.html` and `pricing.html` in the same commit.

## P1 — fix this week (ranking + conversion)

### P1-1. `/free-check` is orphaned from the nav on 206 of 207 pages
- **Where:** `free-check.html` is linked from only 2 pages: `index.html` (nav) and itself. Every other page's nav (`compare/profound.html`, `guides/what-is-ai-visibility.html`, `ai-visibility/dentists-dallas.html` — all checked) is `<a href="/">Run a check</a><a href="/pricing">Pricing</a><a href="/faq">FAQ</a><a href="/compare">Compare</a>` — **no Free check link**.
- **Why it matters:** free-check is the top-of-funnel page (10-second, no paywall) and the only page that can earn links/shares from cold traffic landing on guides/compare pages. Right now a visitor on any of the 191 landing pages has no nav path to it.
- **Fix:** add `<a href="/free-check">Free check</a>` to the shared nav template (the same template that renders on all 207 pages — find it in the Next.js source, not by editing 207 HTML files). Then confirm with a re-grep that `href="/free-check"` appears in 207 files.

### P1-2. Meta descriptions over 155–160 chars on 36 pages — Google will truncate them
- **Where:** `index.html` (183 chars), `compare.html` (296 chars — the worst on the site), all 12 `compare/*` pages (150–210 chars), `free-check.html` (176), `best/*` (165–186), `privacy.html` (218), `sample/weekly-report.html` (162), plus 11 `ai-visibility/*` and 9 `guides/*` pages at 161–167 chars. Full list was computed from source; the pattern is systematic, not one-off.
- **Fix:** rewrite to ≤155 chars, front-load the keyword + $19/one-time. Worst first: `compare.html` (296 → ~150: "Compare 12 AI visibility tools side by side: price, engines, frequency. Prisqo is $19 once, no subscription."), `index.html` (183 → ~150, keep "6 buyer-style questions, no account, no subscription"), `privacy.html` (218 → ~150; it does not need to sell, just describe).
- **Note:** descriptions are unique and well-written — this is a trim, not a rewrite.

### P1-3. Titles over 60 chars on ~150 pages — they will truncate in SERPs
- **Where:** 128 of 152 `ai-visibility/*` pages (61–86 chars; worst `ai-visibility/wedding-photographers.html` 86, `general-contractors.html` 85, `property-managers.html` 85), 15 of 27 `guides/*` pages (64–93 chars; worst `guides/ai-visibility-for-health-practices.html` 93, `guides/ai-visibility-for-financial-services.html` 92), `sample/weekly-report.html` (67), `best/cheap-ai-visibility-tools.html` (67), `for-agencies.html` (68).
- **Why it matters less than it looks:** titles are keyword-first ("Dentists in Dallas: does ChatGPT recommend…"), so truncation cuts the brand tail, not the keyword. Still, the template appends " | Prisqo" plus a long query phrase — the pattern is fixable in one template edit.
- **Fix:** in the ai-visibility/guides title template, cap at ~58 chars: drop the trailing " | Prisqo" on long titles (brand is in the domain/OG anyway) or shorten the query phrase. Keep the city + category + "ChatGPT/AI" at the front. Spot-check the 5 longest titles above after the change.
- **Also:** 5 titles are very short and uninformative — `press.html` (14 chars, "Press | Prisqo"), `contact.html` (16), `privacy.html` (23), `terms.html` (25), `404.html` (23). Give press/contact at least a descriptor: "Press kit | Prisqo — AI visibility report ($19)" / "Contact Prisqo — refunds & report help".

### P1-4. Footer headings pollute the heading outline on 168 of 207 pages
- **Where:** 168 pages have H2s literally "Product", "Compare", "Company" (and on `pricing.html`, H2s "AI Visibility Report", "FAQ", "Product", "Compare"). These are footer nav column labels marked up as `<h2>`.
- **Fix:** change the footer column labels from `<h2>` to `<p>`/`<div>` with a class (visual style unchanged). This also fixes the misleading H2 counts in this audit (e.g. `pricing.html` reports 7 H2s but only ~3 are real content headings). One template edit; verify H2 counts drop to content-only headings afterwards.

### P1-5. Sitemap has no `<lastmod>` on any of its 205 URLs
- **Where:** `sitemap.xml` — 205 `<url>` entries, 0 `<lastmod>`, 0 `<changefreq>`, 0 `<priority>`.
- **Fix:** add `<lastmod>` (at least for home, pricing, FAQ, free-check, compare hub, guides hub, and any page edited since Nov 11). Google uses lastmod to prioritise recrawls; without it, the 152 ai-visibility pages all look equally stale. Do not add fake lastmods — use the real file/deploy date.
- **Related, minor:** sitemap home URL is `https://prisqo.vilouraai.com/` (trailing slash) but the canonical on `index.html` is `https://prisqo.vilouraai.com` (no slash). Pick one and use it in both places. (The two `/ai-visibility/` and `/guides/` sitemap URLs with trailing slashes do match their canonicals — those are fine; the mismatch is home only.)

### P1-6. The two `best/*` roundup pages are nearly orphaned
- **Where:** `best/ai-visibility-tools-small-business.html` (669 words) and `best/cheap-ai-visibility-tools.html` (653 words) are linked from only 2 pages each (`compare.html` + `index.html`). No guide, no compare page, no ai-visibility page links to them.
- **Fix:** add contextual links from the 12 `compare/*` pages ("See the full roundup: best AI visibility tools for small business") and from `guides/index.html`. These are the pages most likely to rank for "best AI visibility tools" — they need internal authority, not just a hub link.

### P1-7. Zero images on 205 of 207 pages — thin for GEO/multi-modal
- **Where:** site-wide. Only 2 `<img>` tags exist in the entire repo, both in `press.html` (logo + OG image). Guides, compare pages, ai-visibility pages, sample report: no images, no charts, no screenshots.
- **Why it matters:** claude-seo `seo-geo` weights multi-modal content 15% of GEO score; AI Overviews and Perplexity cite pages with original visuals more often. The product literally produces a visual report (score bars, source charts) — the sample report page should show it.
- **Fix:** add 1 real visual per money page type first: a score-breakdown chart on `sample/results.html`, a comparison table screenshot on `compare.html`, one illustrative chart per guide hub. Every image needs descriptive `alt` + `width`/`height` (the 2 existing images already do this correctly — copy the pattern). Do not add stock photos; add the product's own visuals. Also add an image sitemap extension only if images are added.

## P2 — fix this month (schema, freshness, template risk)

### P2-1. Guides have no Article/BlogPosting schema; compare pages have no comparison schema
- **Where:** `guides/*.html` (27 pages) carry only Org+WebSite (+FAQPage +BreadcrumbList). No `Article` schema anywhere on the site (0 pages), no `WebPage` schema anywhere (0 pages). `compare/*` (12 pages) carry only BreadcrumbList + Org/WebSite — no `Product`/`SoftwareApplication` comparison markup, no `ItemList` on `compare.html` or the two `best/*` pages.
- **Fix:** add `Article` (with `datePublished`/`dateModified`, author = Prisqo/VilouraAI) to all 27 guides; add `ItemList` to `compare.html` and `best/*`; add `Product`+`offers` to `pricing.html` (it currently has only Org/WebSite + FAQPage — the $19 offer is schema-marked only on the home page). Keep FAQPage — it is valid and earned.
- **Also:** `Organization` schema has no `sameAs` (0 pages) and its `logo` is an SVG (`/icon.svg`). Add `sameAs` only for profiles that actually exist (do not invent social profiles); logo SVG is acceptable but a PNG logo URL is safer for Google's logo requirements — low priority.

### P2-2. FAQ duplication at scale — "How much does a check cost?" on 151 pages
- **Where:** the same FAQ question appears in FAQPage JSON-LD on 151 `ai-visibility/*` pages (plus city variants of "Why isn't my [city] business named?" on 7–13 pages each). 316 distinct questions total, so the duplication is concentrated in 1–2 boilerplate questions per template.
- **Risk:** Google ignores FAQ rich results when the same Q&A is repeated across many pages; it can also read as template spam. The per-page city/industry questions are genuinely distinct and fine.
- **Fix:** keep the boilerplate price question in the visible page copy, but drop it from the JSON-LD on ai-visibility pages (or keep it only on home/pricing/FAQ). Keep JSON-LD FAQ to the 2–3 questions that are actually unique to that industry/city.

### P2-3. ai-visibility template overlap is 57–75% — doorway-page risk at 152 pages
- **Where:** `ai-visibility/*.html`. Body-text Jaccard similarity (nav/footer stripped) between sampled pages: 0.74 (accountants-houston vs accountants-phoenix), 0.75 (vs accountants hub), 0.57–0.63 (auto-repair city pages). Median page is 824 words, but most of that is shared template: the unique content per city page is the intro, the named-business list, and the FAQ.
- **Risk:** this is the classic programmatic-SEO failure mode — 152 near-identical pages. The pages are saved by having real, distinct data (different named businesses per city/industry, from `data/ai-answers.json`) and distinct titles/H1s. If the named-business data ever goes stale or is removed, these pages become pure doorway pages.
- **Fix:** (a) add 1–2 genuinely unique paragraphs per city page (what the Nov 11 check actually found for that city — the data already exists in `data/ai-answers.json`, it just is not all surfaced on the page); (b) do not add more city pages until GSC shows the existing 152 are indexed and earning impressions; (c) if any city/industry combo has no real check data, noindex it rather than publishing a template shell.

### P2-4. No llms.txt, no AI-crawler guidance file
- **Where:** repo root has `robots.txt` only; no `llms.txt` (checked — file does not exist).
- **Fix:** add `llms.txt` at the root (site title, 1-paragraph description, key facts: $19 once, 6 questions, one search-grounded model, no ChatGPT direct query, sample link, pricing/FAQ/compare links). Cost is one small file; it is the cheapest GEO win available and the standard the `seo-geo` skill recommends. Keep `robots.txt` as-is (Allow all) — do not block GPTBot/OAI-Search/PerplexityBot/ClaudeBot, or the product's own pitch ("get named by AI") becomes self-defeating.

### P2-5. Competitor prices have no "checked on" date — they will silently go stale
- **Where:** `compare/*.html` (12 pages) and `best/*.html` (2 pages). Prices are quoted (e.g. Rankscale Essentials $20/mo in `best/ai-visibility-tools-small-business.html` FAQ) with no visible as-of date in the sampled pages (grep for "checked"/"as of" + 2026 in compare/best returned nothing).
- **Risk:** a wrong competitor price is the fastest way to lose a comparison page's trust — and a reader complaint. These pages are also the most likely to be cited by AI answers, which will then repeat a stale price.
- **Fix:** add a visible "Prices checked Nov 12, 2026" line to each compare/best page + a monthly re-check reminder (the price data is already a known maintenance burden). Add `dateModified` in the Article/ItemList schema from P2-1 at the same time.

### P2-6. Free-check snapshot is dated Nov 11, 2026 and will age in public
- **Where:** `free-check.html` (meta description already says "our Nov 11, 2026 check — a snapshot from a past check, not live") and `data/ai-answers.json` (`"checked":"2026-11-11"`, 7 Lewisville categories, 20 businesses named). The labelling is honest — this is good — but the page will look stale within weeks and the data covers only Lewisville.
- **Fix:** re-run the free check monthly (or at least quarterly) and update the date in `free-check.html`, `free-check.js` (hard-coded "Nov 11, 2026" strings, lines 72/74) and `data/ai-answers.json` together. If a re-run is not planned, change the copy to "from our latest check" with the date, so a single stale date does not sit in the SERP snippet.

### P2-7. Press page promises screenshots it does not show
- **Where:** `press.html` (294 words — thinnest real page on the site) has H2 "Product screenshots" but the only images on the page are the logo and the OG image. Title is 14 chars ("Press | Prisqo").
- **Fix:** add 2–3 real product screenshots (the sample report is the obvious one), fix the title per P1-3, and add a short boilerplate paragraph. Low traffic page — do it when the screenshots exist, not before.

### P2-8. `/sample/results` title undersells it; `/sample/weekly-report` is noindexed but linked everywhere
- **Where:** `sample/results.html` title is "Your AI visibility results | Prisqo" (35 chars) — it reads like a logged-in user's private report, not a public sample. It is indexable and in the sitemap, which is the right call for a sample, but the title/H1 ("Does AI recommend Smith Family Dental ?" — note the space before "?") should say it is a sample. `sample/weekly-report.html` is correctly noindexed and correctly absent from the sitemap, yet it is linked from the footer/nav on 99 pages — fine for users, but confirm no sitemap or external link ever points at it.
- **Fix:** retitle `sample/results.html` to "Sample AI visibility report: Smith Family Dental, 5 of 6 named | Prisqo" and fix the "Dental ?" spacing in the H1. Leave weekly-report as-is.

## Out of scope / not verified in this audit

- **No GSC/GA data** (see P0-1) — no keyword, impression, click, CTR, Core Web Vitals, or backlink data exists to check. No paid tool (Ahrefs/DataForSEO) was used, per instructions.
- **Checkout/engine untouched** — Stripe, Groq, Workers, `/api/*` not audited.
- **Competitor price accuracy not verified** — prices quoted on compare/best pages were not checked against the vendors' live sites (P2-5 is about the missing date, not a found error).
- **hark-lp-1 / PR #28 not in this snapshot** — re-audit the landing page when the local copy is refreshed from main.
- **vilouraai.com not audited here** — separate audit (parent agent's other subagent).

## Method note

- Page inventory: 207 HTML files parsed programmatically (title/desc/canonical/OG/Twitter/robots/H1/H2/H3/JSON-LD/word count/internal+external links/images) — full per-page table saved in the audit run at `/tmp/prisqo-pages.json` (VM scratch, not committed).
- Sitemap cross-check: 205 sitemap URLs vs 207 filesystem URLs (diff explained in P1-5/P0-2: sitemap uses trailing-slash home + hub URLs; 404 correctly excluded; weekly-report correctly excluded; success incorrectly included).
- Template similarity: body-text Jaccard on nav/footer-stripped text.
- Live spot-checks: home, pricing, free-check, compare, FAQ, sample/results via curl + one browser.open of the home page, all 2026-11-12 evening UTC.

## Suggested order of work (for Kiwi)

1. P0-2 (success noindex + sitemap) + P1-5 (lastmod) + P1-1 (free-check in nav) — one small commit, all template/sitemap edits.
2. P1-2 + P1-3 (trim descriptions/titles) — same template pass as P1-1.
3. P1-4 (footer H2 → p/div) + P1-6 (link best pages from compare pages).
4. P2-1 (Article/ItemList/Product schema) + P2-2 (drop boilerplate FAQ from ai-visibility JSON-LD).
5. P2-4 (llms.txt) — 15-minute win, do it with step 1 if convenient.
6. P0-1 + P0-3 need adi/Jilsha, not code — unblock those in parallel.
