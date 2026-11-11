# Muse Brief 2: Revenue Batch (Prisqo)
Repo: vilouraai1/prisqo (main = e8a9015, matches live). Deliver one commit/PR on a new branch `muse-revenue-2`. Don't touch the engine worker or Stripe keys. Price stays $19 one-time with a 14-day refund. No fake testimonials, numbers, or "weekly" claims.

## A. Conversion (highest priority)
1. Homepage: add a "See a real sample report" CTA above the fold next to Buy; cut hero copy to one promise and one subline.
2. Checkout friction: a single "Get my report ($19)" button style site-wide; add a short trust strip under every buy button (14-day refund, one-time charge, delivered by email).
3. Post-purchase success page: clear next steps (what happens, when the report arrives, contact email vilouraai1@gmail.com), plus a "share with a friend" link.
4. Exit/scroll capture: a lightweight email field ("Get a free AI-visibility checklist") that posts to the existing engine contact or a mailto fallback; no third-party scripts.
5. Pricing section: one FAQ block answering "What do I get for $19?", "How long does it take?", "Refunds?" with FAQPage schema.

## B. SEO pages (traffic)
6. 10 new "alternative to" or "vs" pages following the compare/otterly.html template (e.g. Profound, Peec AI, Semrush AI toolkit, Ahrefs Brand Radar, Scrunch, AthenaHQ, Goodie, Rankscale, Writesonic GEO, Am I On AI). Only facts that can be checked on each vendor's public site; hedge anything else.
7. 8 industry landing pages: "Does ChatGPT recommend your [dentist / law firm / plumber / restaurant / SaaS / real estate agent / med spa / ecommerce store]?" Each has a unique intro, 3 example prompts, the sample-report CTA, and Buy.
8. 3 guide pages: "How to get recommended by ChatGPT", "How to show up in Perplexity answers", and "AI search visibility checklist" (the last one doubles as the lead magnet).
9. Update sitemap.xml, internal links (footer "Compare" and "Industries" sections), and canonical tags; every page gets a unique title, meta description, and OG tags.

## C. Distribution helpers
10. /for-agencies page: agencies can buy reports for clients ($19 each); contact by email for 5+.
11. A "Featured on" badge slot (empty by default) and a /press page with a logo, a one-line description, and screenshots for directory submissions.
12. UTM-friendly links: make sure ?ref= and utm_* survive through to the Stripe checkout metadata (site-side only, passed as client_reference_id or metadata if the engine already accepts it; otherwise just keep them in the URL).

## D. Hygiene
13. Lighthouse 90+ on mobile for home, one compare page, and one industry page (compress images, defer non-critical JS).
14. A 404 page with links to home, sample, and buy.
15. No broken links (run a link check) and no "coming soon" or "not built" text anywhere.

## Acceptance (QA is done by Kiwi's agents)
- All new pages return 200, are in the sitemap, and have unique titles.
- Every buy button reaches the $19 Stripe checkout.
- There are no unverifiable claims, and the refund line says 14 days everywhere.
- Reply with just the commit hash or PR link.
