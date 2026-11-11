# Muse Brief 3: Launch kit + local-intent pages (Prisqo)
Repo: vilouraai1/prisqo (main, after brief-2). Deliver one commit/PR on a new branch `muse-brief-3`. Write `ops/replies/brief-3.md` (status, what changed, questions) and open a pull request to main. Don't touch the engine worker or Stripe keys. Price stays $19 one-time with a 14-day refund. No fake testimonials, numbers, or weekly-product claims (Prisqo is a one-time check; you may say buyers can run another check later, but do not present weekly monitoring as a built-in feature).

This batch is the next fastest path to revenue: finish the press kit so directories can be submitted, tighten compare-hub SEO, and add local-intent pages that match "does ChatGPT recommend [business type] in [city]" searches.

## A. Press kit (highest priority — unblocks directory submissions)
1. /press: add product screenshots of the homepage, the sample report (/sample/results), and the pricing page. Real captures, no mockups or invented UI. Keep the logo, the one-line description, and the empty "Featured on" slot. If screenshots cannot be committed as image files, say so in the reply and leave clearly labeled placeholders — do not link broken image paths.
2. Make the share image (opengraph-image.png / twitter-image.png) downloadable from /press. Those PNGs are live-only assets (not in the repo); keep the existing /opengraph-image.png URLs. Do not delete or replace them in a way that breaks the live site.

## B. Compare hub + claim hygiene
3. Update /compare title, meta description, and OG/Twitter tags so they cover all 12 comparison pages, not just Otterly, Peec AI, and HubSpot AEO. Body already lists all 12; titles/meta should match.
4. Hedge unverified competitor prices in titles and meta the same way the page body already does (AthenaHQ $295, Writesonic GEO $99, Am I On AI $100 are third-party-reported; Goodie $295 billing period is ambiguous). Do not assert those figures in title/description as if they were verified on the vendor's site.

## C. Local-intent SEO pages (traffic)
5. Add 8 local-intent landing pages, unique intros, 3 example prompts, the sample-report CTA, and Buy: dentists in Austin, dentists in Dallas, plumbers in Houston, restaurants in Austin, law firms in Dallas, real estate agents in Chicago, med spas in Houston, and SaaS in Austin. Follow the existing ai-visibility/*.html template. Suggested paths: /ai-visibility/dentists-austin, /ai-visibility/dentists-dallas, /ai-visibility/plumbers-houston, /ai-visibility/restaurants-austin, /ai-visibility/lawyers-dallas, /ai-visibility/real-estate-agents-chicago, /ai-visibility/med-spas-houston, /ai-visibility/saas-austin.
6. Update sitemap.xml, footer/internal links, and canonical tags. Every new or changed page gets a unique title, meta description, and OG tags.

## D. Hygiene
7. Lighthouse 90+ on mobile for home, one compare page, and one industry or local page (compress images if needed; JS is already deferred). If you cannot run Lighthouse, say so in the reply; do not invent scores.
8. No broken links, no "coming soon" / "not built" / "not set yet" text, no engine or Stripe changes.

## Acceptance (QA is done by Kiwi's agents)
- All new pages return 200, are in the sitemap, and have unique titles.
- Every buy button reaches the $19 Stripe checkout and is labeled "Get my report ($19)".
- There are no unverifiable claims, and the refund line says 14 days everywhere.
- /press has usable logo + share-image links; screenshots are real files or honestly flagged as missing.
- Reply in ops/replies/brief-3.md and open a PR from branch muse-brief-3.
