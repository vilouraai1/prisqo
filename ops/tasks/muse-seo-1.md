# Single-Go Task Brief for Muse: SEO & UI/UX Redesign for Viloura AI & Prisqo

**Target Repos:** `vilouraai1/prisqo` (Cloudflare Worker static site) & `vilouraai1/vilouraai-web` (Next.js)  
**Task Brief Path:** `ops/tasks/muse-seo-1.md`  
**Reply File Path:** `ops/replies/muse-seo-1.md`  
**Deliverable Branch Pattern:** `muse-seo-*` (Open non-draft PRs and comment "ready")  

---

## Objective
Drive the first paying customer by building high-converting SEO and AI-search (GEO) visibility across three target URLs:
1. `vilouraai.com` (Main agency & flagship landing page)
2. `https://prisqo.vilouraai.com` (Prisqo product site)
3. `https://prisqo.vilouraai.com/free-seo-audit` (Free complimentary SEO audit lead hook)

Position `vilouraai.com` as the primary landing page offering:
- **Prisqo AI Visibility Report**: $19 one-time report ("Does AI recommend your business?"), linking to `prisqo.vilouraai.com/free-check` for instant checks.
- **FREE Complimentary SEO Audit**: High-converting lead hook form.
- **Website Redesign**: $497 one-time.
- **AI Receptionist**: $149/mo with 14-day trial.
- **Bundle**: $597 (keep the existing bundle wording and contents from vilouraai-web; do not invent what it includes).

Prisqo (`prisqo.vilouraai.com`) remains the product site for instant checks, cross-linking seamlessly back to `vilouraai.com`. Design aesthetic: sleek, minimal, low information density, premium, and unique (inspired by Semrush AI Toolkit and Search Engine People AI/GEO landing pages). Prisqo must rank for "prisqo".

---

## 0. Read first: current state and order of work
- Pull main on both repos first. The Prisqo homepage was just redesigned in PR #30 (muse-lp-2, merged and live Nov 12, 2026). Build on that design; do not revert or restyle it. Keep the 179 existing SEO pages and their URLs (no broken links, no URL changes without 301s).
- Contact email everywhere: vilouraai1@gmail.com. Business address: VilouraAI, 357 E Corporate Dr, Lewisville, TX.
- vilouraai-web: the Vercel deploy isn't set up yet, so just make it build cleanly (`npm run build`) and document any env vars needed in the reply. The audit forms use FormSubmit; keep that working, since Jilsha activates it once via vilouraai1@gmail.com.
- Order: (1) audit all 3 targets and write the baseline to the reply file; (2) Prisqo PR (homepage SEO, /free-seo-audit, cross-links, schema, sitemap/robots/llms.txt); (3) vilouraai-web redesign PR. Push each PR as soon as it's done; don't wait for both.
- Prisqo deploys are done by Jilsha's review loop after free-model QA. Do not deploy anything yourself.
- If something in this brief conflicts with what is actually on the site (a price, a form, a claim), keep what is on the site and note it in the reply file.

---

## 1. Audit Phase (Baseline Assessment)
- Run installed SEO skills (Illyism SEO Skills + Claude SEO; no paid APIs) on all 3 targets.
- Record baseline audit scores and specific findings (source & live code) directly in `ops/replies/muse-seo-1.md`.
- Target scores to surpass: `vilouraai.com` (prior 62/100 source, 48/100 live -> target >90/100), `prisqo.vilouraai.com` (prior ~78/100 -> target >90/100), and `prisqo.vilouraai.com/free-seo-audit`.
- Audit indexability, meta tags, schema validation, link integrity across Prisqo's existing 179 SEO pages, mobile responsiveness, and DOM performance.

---

## 2. vilouraai.com Redesign (`vilouraai-web` repo, One PR)
- **IA & Sitemap**: Streamlined navigation with clean routing (`/`, `#services`, `#prisqo`, `#audit`, `#faq`, `#contact`).
- **UI/UX Design System**: Apply `~/workspace/custom-skills/ui-ux-pro-max/` (v2.15.0) principles—sleek dark/light minimal aesthetic, high contrast (WCAG AA compliant), generous whitespace, fast-loading CSS, zero bloated external frameworks.
- **Homepage Sections (In Order)**:
  1. **Hero**: Outcome-focused headline + clear subhead + primary CTA for the **FREE Complimentary SEO Audit** form + secondary CTA "Check AI Visibility ($19)".
  2. **Prisqo AI Visibility Section**: Explain "Does AI recommend your business?" in plain terms with a direct link to `https://prisqo.vilouraai.com/free-check?ref=viloura`.
  3. **Core Services Grid (Exact Pricing)**:
     - FREE Complimentary SEO Audit (Lead Hook)
     - Prisqo AI Visibility Report: $19 one-time
     - Custom Website Redesign: $497 one-time
     - AI Receptionist: $149/mo (14-day trial)
     - Bundle: $597 (existing wording/contents only)
  4. **How It Works**: 3-step clean workflow (Submit URL -> AI & SEO Analysis -> Actionable Report/Growth Plan).
  5. **FAQ**: Structured accordions addressing price, timelines, 14-day trial, and deliverables.
  6. **Contact / Lead Form**: Direct submission form for custom inquiries.
- **Accessibility & Core Web Vitals**: 100% keyboard navigable, aria-labels on inputs/buttons, zero CLS, LCP < 1.5s, tap targets >= 44px.

---

## 3. Technical SEO Across All 3 Targets
- **Titles & Meta Descriptions**: Unique, keyword-rich titles under 60 chars; compelling descriptions under 155 chars.
- **Canonical Tags**: Self-referencing canonicals on all canonical pages (`https://vilouraai.com/`, `https://prisqo.vilouraai.com/`, `https://prisqo.vilouraai.com/free-seo-audit`).
- **OpenGraph & Twitter Cards**: Full OG tags (`og:title`, `og:description`, `og:url`, `og:image`, `og:type`) and Twitter card tags on all targets.
- **Structured Data (JSON-LD)**:
  - `Organization` & `LocalBusiness` for Viloura AI:
    - Address: `357 E Corporate Dr, Lewisville TX`
  - `Product` / `Offer` schema for Prisqo $19 report ($19 USD, one-time).
  - `Service` schema for Website Redesign ($497), AI Receptionist ($149/mo), and Bundle ($597).
  - `FAQPage` schema on homepage and FAQ sections.
- **Sitemap & Robots**: Clean `sitemap.xml`, updated `robots.txt`, and `llms.txt` for AI crawlers (Perplexity, ChatGPT, Claude).
- **Internal & Cross-Domain Link Architecture**:
  - `vilouraai.com` links prominently to `prisqo.vilouraai.com/free-check` and `prisqo.vilouraai.com/free-seo-audit`.
  - `prisqo.vilouraai.com` header/footer links back to `vilouraai.com` for web redesign and AI receptionist services.
- **Asset Optimization**: All images given explicit width/height attributes, WebP format, descriptive alt text, zero render-blocking scripts.

---

## 4. Keyword and Content Plan (SEO + GEO)
- **Target Keywords per Target**:
  - `vilouraai.com`: "Lewisville TX web redesign", "AI receptionist for local business", "small business website redesign $497", "DFW digital marketing", "free SEO audit Lewisville".
  - `prisqo.vilouraai.com`: "prisqo", "does chatgpt recommend my business", "AI visibility check", "AEO check for local business", "AI search optimization tool $19".
  - `/free-seo-audit`: "free SEO audit", "local SEO audit tool".
- **GEO (Generative Engine Optimization) Content**:
  - Direct Q&A blocks answering buyer queries in plain text ("Why does ChatGPT recommend my competitor?", "How to get listed in AI search results").
  - Clear entity declarations identifying Viloura AI and Prisqo.

---

## 5. /free-seo-audit Page Optimization
- Rebuild/optimize `https://prisqo.vilouraai.com/free-seo-audit` into a conversion powerhouse.
- Keep the existing form, its field names and its working submission; only improve copy, layout and SEO around it.
- Instant feedback/confirmation state with clear expectation setting (honest delivery timeframe, zero fake promises).
- Clear value proposition: describe only what the audit actually delivers today (check the current page copy); no new promises.
- Trust strip only with true facts already on the site (e.g. the existing 14-day refund line for the $19 report); zero fake quotes/reviews/logos.

---

## 6. Measurement Setup
- Step-by-step documentation in `ops/replies/muse-seo-1.md` for owner (Jilsha) manual configuration:
  1. **Google Search Console**: Domain verification steps for `vilouraai.com` and `prisqo.vilouraai.com`, sitemap submission.
  2. **Bing Webmaster Tools**: Import from GSC or meta tag verification.
  3. **Cloudflare / GA Analytics**: Non-intrusive tracking configuration guide.

---

## 7. Hard Constraints (Copy Exactly)
- no fake testimonials, logos, counts or invented numbers; Prisqo $19 checkout form keeps its ids, names, action="#" method="post", notice and links; /free-check fields stay `name` and `city`; keep data-testid="sample-preview" and "home-more"; never touch the engine Worker (prisqo-report-engine), prisqo-api, Stripe or keys; noindex only on success/thank-you pages; don't commit prisma/dev.db; never send emails or post anything.

---

## 8. Deliverables & Acceptance Checklist
- Two separate PRs:
  1. `vilouraai1/prisqo` PR: Prisqo homepage SEO updates + `/free-seo-audit` optimization + cross-links.
  2. `vilouraai1/vilouraai-web` PR: Complete sleek redesign of `vilouraai.com`.
- Each PR must contain `ops/replies/muse-seo-1.md` listing what changed against the checklist, then comment "ready".

---

