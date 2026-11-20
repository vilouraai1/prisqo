# Single-Go Task Brief for Muse: SEO Visibility Sprint (muse-seo-3)

**Target Repo:** `vilouraai1/prisqo` (Cloudflare Worker static site, live at `https://prisqo.vilouraai.com`)
**Task Brief Path:** `ops/tasks/muse-seo-3.md`
**Reply File Path:** `ops/replies/muse-seo-3.md`
**Deliverable Branch:** `muse-seo-3` (open a non-draft PR on `vilouraai1/prisqo` and comment `ready`)

---

## Objective
Move `prisqo.vilouraai.com` from 0 indexed pages / 0 impressions (Google Search Console baseline Nov 19, 2026; Search Console is now verified and both sitemaps are submitted) to measurable rankings for:
1. Brand queries (`prisqo`, `prisqo ai visibility`, `prisqo by vilouraai`) — beating `priqo.app`.
2. Commercial queries (`does chatgpt recommend my business`, `ai visibility check`, `ai visibility report for local business`).
3. High-intent DFW local-business pages (`ai-visibility/*` for dentists, chiropractors, plumbers, HVAC, med spas in Dallas, Plano, Frisco, Lewisville).

## Hard rules (do not break)
- Pull `main` first (includes PR #44 `e1503eb`).
- Do NOT break or restyle the LP-2 homepage layout, the `/free-check` form (`name` and `city` fields), `/free-seo-audit`, the $19 Stripe checkout form, `data-testid` attributes, or the 14-day refund line.
- Do NOT touch `prisqo-report-engine`, Stripe, or any Worker routing.
- $0 rule: no paid APIs, no invented numbers, no fake testimonials. Every real local-business example must come verbatim from data already in `ops/` in this repo (cite the file + date).
- Keep all existing URLs intact (zero 404s, zero unredirected URL changes).
- Do not deploy yourself; Kiwi 2's PR handoff loop reviews, deploys, verifies live, and merges after you comment `ready`.

---

## Work items (complete in one PR)

### 1. Own the "Prisqo" brand SERP (disambiguate from Priqo)
- Update `index.html` and core pages (`/pricing`, `/free-check`, `/faq`, `/for-agencies`, `/compare`) so the brand entity is unmistakable: `"Prisqo by VilouraAI"` in Organization / SoftwareApplication / WebSite JSON-LD with `alternateName`, `url: "https://prisqo.vilouraai.com"`, `sameAs: ["https://vilouraai.com"]`, `applicationCategory: "BusinessApplication"`, and real `$19` `Offer` schema (`priceCurrency: "USD"`).
- Add a concise, natural "About Prisqo" / brand-clarification Q&A entry in `faq.html` (and matching FAQPage JSON-LD) clearly stating what Prisqo is (AI-recommendation visibility report by VilouraAI in Lewisville, TX — not a shopping app).

### 2. Fix internal linking & navigation orphans
- Add `/free-check` prominently to the primary nav / header CTA across core pages if missing, and link `/best/*` and `/free-seo-audit` from the relevant hubs (`/guides/`, `/compare/`, `/ai-visibility/`) so no money page is >2 clicks from the homepage.
- Add `BreadcrumbList` JSON-LD across `/guides/*`, `/compare/*`, and `/ai-visibility/*` pages.
- Add `Article` JSON-LD (with real author `VilouraAI`, `datePublished`, `dateModified`) to all 27 `/guides/*` pages.

### 3. De-template the top 15 DFW `ai-visibility/*` pages with real repo data
- Google suppresses scaled template pages ("Crawled — currently not indexed"). Muse's own audit noted 60–75% template overlap on the 152 `ai-visibility/*` pages.
- Pick the top 15 DFW pages matching our active outreach cities/categories (Dallas, Plano, Frisco, Lewisville, Irving, Arlington × dentist, chiropractor, plumber, HVAC, med spa, roofing, auto).
- Enrich each with real, dated observations from `ops/` (e.g., actual AI-check patterns, city-specific search behavior, unique local FAQ questions, and internal links to the matching `/guides/ai-visibility-for-*` guide and `/free-check`). Never invent a business's score or claim.

### 4. Publish 1 original link-magnet page: DFW Local Business AI Visibility Study (Nov 2026)
- Create `/guides/dfw-local-business-ai-visibility-study.html` (and add to `sitemap.xml`, `llms.txt`, and `/guides/` hub).
- Summarize ONLY real, verifiable findings from the actual DFW checks already recorded in `ops/` (how often local businesses are omitted when users ask AI for the best provider in Plano, Frisco, Lewisville, Dallas; what the recommended competitors have in common; methodology clearly dated Nov 2026).
- Include `Article` + `FAQPage` + `BreadcrumbList` JSON-LD, a clean summary table, and a clear CTA to `/free-check`.

### 5. Sitemap & title/meta hygiene
- Check all `<title>` (>60 chars) and `<meta name="description">` (>158 chars) across the top 40 pages (core + guides + compare) and tighten any that truncate in Google SERPs while keeping primary keywords front-loaded.
- Update `sitemap.xml` `lastmod` ONLY for files actually modified or added in this PR. Validate XML and JSON-LD programmatically before opening the PR.

---

## Deliverable & Verification
- Write `ops/replies/muse-seo-3.md` with:
  - Files changed / added
  - Verification outputs (JSON-LD parse check, XML sitemap check, broken-link check, title/description length check)
  - `## Summary` and a final line `DONE`.
- Open a non-draft PR from branch `muse-seo-3` to `main` and comment `ready`.
