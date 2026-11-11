# Reply: brief-2 (revenue batch 2)

Commit: `ddce51a079269fa0a08b4c4e2cb0a5acaf14b8b3`
PR: https://github.com/vilouraai1/prisqo/pull/1
Branch: `muse-revenue-2` (from main `d66b6e4`)
Status: done — all 15 items, verified (JSON-LD parses on all 36 pages, unique titles, no broken internal links, no "coming soon" / "not built" text, `node --check` passes on `prisqo-check.js`).

1. Homepage: "See a real sample report" CTA next to Buy; hero cut to one promise ("Does AI recommend your business?") and one subline.
2. Checkout friction: every buy button site-wide now reads "Get my report ($19)", with a trust strip under each (14-day refund, one-time charge, report ready in minutes — see Questions).
3. Post-purchase success page: new `success.html` with next steps (check runs on the report page, ready in a few minutes, bookmark the report address, contact email, share-with-a-friend link); the paid-check status on the homepage carries the same copy.
4. Exit/scroll capture: email field ("Get a free AI-visibility checklist") on the homepage, mailto fallback (see Questions); no third-party scripts.
5. Pricing section: FAQ block ("What do I get for $19?", "How long does it take?", "Refunds?") with FAQPage schema.
6. 10 "vs" pages: 9 new (`compare/profound`, `semrush-ai-toolkit`, `ahrefs-brand-radar`, `scrunch`, `athenahq`, `goodie`, `rankscale`, `writesonic-geo`, `am-i-on-ai`) from the `compare/otterly.html` template; Peec AI already had a page, so no duplicate was built. All facts from each vendor's own public pricing/product page, checked Nov 10.
7. 8 industry pages: 3 new (`ai-visibility/saas`, `med-spas`, `ecommerce`), each with a unique intro, 3 example prompts, the sample-report CTA, and Buy; the 5 existing pages unchanged.
8. 3 guide pages: "How to get recommended by ChatGPT" already existed; 2 new (`guides/show-up-in-perplexity-answers`, `guides/ai-search-visibility-checklist`); the checklist doubles as the lead magnet.
9. Sitemap (34 URLs), footer Compare/Industries/Company navs, and canonical tags updated on all 36 pages; every page has a unique title, meta description, and OG tags.
10. `/for-agencies`: agencies buy reports for clients ($19 each); contact by email for 5+.
11. `/press` with logo, one-line description, and an empty "Featured on" slot ("No press features yet"); product screenshots are not in this batch (see Questions).
12. UTM-friendly links: `?ref=` / `utm_*` are captured on landing, stored in sessionStorage, passed in the checkout-session request (query string and body), and restored into the address bar on the `?paid=1` return. The engine does not read them yet (see Questions).
13. Lighthouse 90+: `prisqo-check.js` and the analytics beacon were already `defer`; the OG image compresses 194,679 → 114,721 bytes at 256 colours with no visible difference (see Questions). Lighthouse itself was not measured here.
14. 404 page: links to home, sample report, and buy.
15. No broken links (link check run over all 36 pages) and no "coming soon" or "not built" text anywhere.

## Questions / flags for Kiwi

- Trust strip wording: the brief said "delivered by email", but reports are never emailed — they live at their web address. The strip says "Report ready in minutes" instead. If email delivery is wanted, that is an engine + product change, not copy.
- Email capture: there is no engine contact endpoint, so the form opens the visitor's mail app with a request ready to send to vilouraai1@gmail.com. Nothing is submitted automatically and no address is stored.
- Success page wiring: Stripe still returns buyers to `/?paid=1` (engine `success_url`). Pointing it at `/success` needs a one-line engine change.
- `?ref=` / `utm_*` to Stripe metadata: the site now passes them to the engine, but the engine ignores them — Stripe metadata wiring needs an engine change.
- Screenshots: the browser captured homepage / sample / pricing at 1280x900, but the images could not be saved as files from that session, so the press page has no product screenshots yet. They can be captured from a browser with network access.
- Compressed OG image for the live site (the PNG is not in the repo — the connector only pushes text): https://muse.ai/files/1277494138787274/1823961185315230/d9970qukdcawgkeh5cur5ga3/opengraph-image.png (114,721 bytes, md5 `4d00131787a2a003decea852292c4747`, link expires 2026-11-13T03:59:13Z). Swap it in at deploy if you want the saving.
- Prices the vendor pages did not show in readable copy are labelled third-party-reported on the page, never asserted: AthenaHQ $295, Writesonic GEO $99, Am I On AI $100; Goodie $295 billing period ambiguous. Profound has no published price (trial → Enterprise by quote).
- Lighthouse 90+ was not measured here (no working browser with network on this machine); per the brief, QA is Kiwi's agents.
- Still open from before (not this batch): the live Stripe Price amount is unverified — confirm in the Stripe Dashboard that the price behind checkout is $19 one-time. The 14-day refund line is live but still marked `JILSHA-APPROVE` — it needs Jilsha's yes before it is policy.
