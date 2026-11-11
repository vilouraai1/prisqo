# Prisqo — changed files for Kiwi to review and deploy

Muse pushes here; Kiwi deploys. Nothing in this repo deploys itself, and
nobody deploys from here — Kiwi pulls, reviews, and deploys to the live
Workers (`prisqo` site, `prisqo-report-engine` engine).

## Latest batch (brief-3 launch kit, Nov 11 — branch `muse-brief-3`)

Press kit finish + compare-hub SEO hygiene. Price stays $19 one-time,
14-day refund. No engine or Stripe changes. No new pages; the sitemap
(50 URLs) already covers every page except the intentionally excluded
`/sample/weekly-report` (noindex preview).

- `/press`: new "Product screenshots" section with clearly labeled
  placeholders for the homepage, sample report, and pricing captures.
  Real screenshot files could not be committed: the GitHub connector
  pushes text files only, and the VM's headless Chromium cannot tunnel
  through the egress proxy (ERR_TUNNEL_CONNECTION_FAILED, tried twice
  with proxy auth split out). The live pages were re-checked in the
  cloud browser at 1280x900 and load cleanly. Kiwi's agents can capture
  the three PNGs and commit them; the placeholders name exactly what
  each capture shows, and no broken image path is linked.
- `/press`: the share image is downloadable as both
  `/opengraph-image.png` and `/twitter-image.png` (both live, both 200;
  the Twitter file is byte-identical to the original OG image). Neither
  live file was touched or replaced.
- `/compare`: title now "Prisqo Compared: 12 AI Visibility Tools Side
  by Side"; meta, OG, and Twitter descriptions now name all 12
  comparison pages instead of only Otterly, Peec AI, and HubSpot AEO.
  OG/Twitter titles now "How Prisqo compares to 12 AI visibility tools".
- `compare/goodie.html`: the $295/mo figure is hedged in all three
  descriptions ("listed at $295/mo (billing period unclear on the
  vendor's page)") and in the body FAQ, matching the pricing table's
  existing hedge. AthenaHQ ($295), Writesonic GEO ($99), and Am I On AI
  ($100) were checked: their titles and descriptions carry no price
  (AthenaHQ) or already say "reported" (Am I On AI) / no price
  (Writesonic), and their bodies already label the figures
  third-party-reported — nothing to change there.
- Lighthouse 90+ measured via Google PageSpeed Insights (Lighthouse
  13.6.0, mobile, Moto G Power, Slow 4G), Nov 11 ~09:06–09:07 CT:
  home 100/92/100/100, compare/profound 100/96/100/100,
  ai-visibility/saas 100/95/96/100 (Performance / Accessibility /
  Best Practices / SEO) — all four categories 90+ on all three pages.
  Notes: accessibility deductions are links relying on color and
  identical links with the same purpose; the SaaS page's Best Practices
  96 is partly a "browser errors were logged to the console" flag —
  worth a look in a later batch, not a blocker. No field (real-user)
  data yet ("No Data").
- Verified: JSON-LD parses on all 52 pages, titles unique, no broken
  internal links, no "coming soon" / "not built" / "not set yet" text,
  every buy button still reads "Get my report ($19)".

## Latest batch (revenue batch 2, Nov 10 — branch `muse-brief-2`)

Conversion first, then SEO and distribution. Price stays $19 one-time,
14-day refund. No engine or Stripe changes. All new pages verified:
JSON-LD parses, unique titles, canonicals and OG tags on every page,
no broken internal links, no "coming soon" / "not built" text.

- Homepage: hero cut to one promise ("Does AI recommend your business?")
  and one subline; "See a real sample report" CTA next to Buy;
  every buy button site-wide now reads "Get my report ($19)" with a
  trust strip underneath (14-day refund, one-time charge, report ready
  in minutes); free AI-visibility checklist email capture (mailto
  fallback — there is no backend endpoint for it, nothing is submitted
  automatically and no address is stored).
- `success.html` (new): post-purchase next steps — check runs on the
  report page, ready in a few minutes, bookmark the report address,
  contact email, share-with-a-friend link. Stripe still returns buyers
  to `/?paid=1` (engine `success_url`); pointing it at `/success` needs
  a one-line engine change by Kiwi. The paid-check status on the
  homepage now carries the same next-steps copy.
- `pricing.html`: FAQ block ("What do I get for $19?", "How long does
  it take?", "Refunds?") with FAQPage schema.
- `prisqo-check.js`: `?ref=` / `utm_*` are captured on landing, stored
  in sessionStorage, passed in the checkout-session request (query
  string and body) and restored into the address bar on the `?paid=1`
  return. The engine does not read them yet — Stripe metadata wiring
  needs an engine change. Also fixes a bug: the script reset the buy
  button label to "Continue to checkout" on every load.
- 9 new compare pages (`compare/profound`, `semrush-ai-toolkit`,
  `ahrefs-brand-radar`, `scrunch`, `athenahq`, `goodie`, `rankscale`,
  `writesonic-geo`, `am-i-on-ai`): facts from each vendor's own public
  pricing/product page, checked Nov 10. Prices the vendor page did not
  show in readable copy are labelled third-party-reported, never
  asserted (AthenaHQ $295, Writesonic $99, Am I On AI $100; Goodie
  $295 billing period ambiguous). Peec AI already had a page, so no
  duplicate was built. `compare.html` now lists all 12.
- 3 new industry pages (`ai-visibility/saas`, `med-spas`,
  `ecommerce`): unique intro, 3 example prompts, what AI cites, 3
  fixes, CTA, FAQ with FAQPage JSON-LD. 8 industries total now.
- 2 new guides (`guides/show-up-in-perplexity-answers`,
  `guides/ai-search-visibility-checklist`): the checklist doubles as
  the lead magnet the homepage email capture points to.
- `for-agencies.html` (new): $19 per client report, contact by email
  for 5+. `press.html` (new): logo, share image, one-line description,
  press contact, empty "Featured on" slot ("No press features yet").
  Product screenshots are not in this batch — the screenshots the
  browser captured could not be saved as files; Kiwi's agents can
  capture homepage / sample / pricing at 1280x900.
- `404.html`: links to home, sample report, and buy.
- `sitemap.xml`: 34 URLs (17 new). Footer Compare / Industries /
  Company navs updated on all 36 pages.
- Hygiene: `prisqo-check.js` and the analytics beacon were already
  `defer`; the OG image compresses 194,679 → 114,721 bytes at 256
  colours with no visible difference (local copy replaced; live copy
  is outside the repo — Kiwi to swap it in at deploy). Lighthouse 90+
  could not be measured here (no working browser with network); Kiwi's
  agents QA per the brief.
- Two brief wordings were not followed literally, on purpose:
  the trust strip says "Report ready in minutes", not "delivered by
  email", because reports are never emailed — they live at their web
  address; and the email capture opens the visitor's mail app with a
  request ready to send, because there is no engine contact endpoint.
  Both are flagged in `ops/replies/brief-2.md`.

## Live now

The live site is live: the robots-exclusion meta and the preview banner are already gone from
the live site (verified Nov 10 — homepage and pricing carry no robots-exclusion meta,
robots.txt allows all, sitemap.xml serves). Kiwi deployed that go live
state from her own copy; the go live commit named in the brief (`07f920d`)
never reached this repo. This batch brings main in line with live.

Latest batch (revenue batch, Nov 10): the site now sells the $19 report.
Go live flip applied to main (robots-exclusion meta and preview banner removed from
all 13 pages and `404.html`; the robots-exclusion header removed from `_headers` and
from `prisqo-site-worker.js`; `robots.txt` allows all with a sitemap line;
`sitemap.xml` added). All preview wording removed. Pricing shows
one plan card only: AI Visibility Report, $19 one-time. The sample report
was re-cut to match a real paid report — 6 questions, 1 answer each, 6
answers total (was 6 questions x 3 sample engines = 18 answers): Smith
Family Dental named in 5 of 6 answers, top-3 in 5 of 6, score 83. The
weekly-report sample is a labelled preview of a planned weekly email,
kept out of search indexes and out of the sitemap. The report flow shows the report
URL in a box with a Copy link button and a mailto link. Refund placeholder
on FAQ, terms, contact and pricing is marked `<!-- JILSHA-APPROVE -->`
and needs Jilsha's yes before it is treated as policy. Cloudflare Web
Analytics beacon added (placeholder token `CF_BEACON_TOKEN` — Kiwi fills
it in at deploy); CSP allows `static.cloudflareinsights.com` and
`cloudflareinsights.com`. Six new SEO pages: `/ai-visibility/dentists`,
`/lawyers`, `/plumbers`, `/restaurants`, `/real-estate-agents`, and
`/guides/get-recommended-by-chatgpt`, all in the sitemap and linked from
a footer "AI visibility by industry" section. Home JSON-LD is now a
`Product` with an `Offer` of price 19 USD. Price is $19 for one report,
pay once at checkout (commit `8ed236de`); the live Stripe Price id amount
is still unverified — if it is not $19, a new $19 one-time price is
needed in Stripe at deploy.

## What's in here

- `index.html`, `pricing.html`, `faq.html`, `contact.html`, `privacy.html`,
  `terms.html`, `404.html`, `compare.html`, `compare/hubspot-aeo.html`,
  `compare/otterly.html`, `compare/peec-ai.html` — the 13 site pages.
  One report, pay once at checkout, $19, no subscription; 6 prompts, not
  12; no preview wording; every page has the analytics beacon and
  the "Prisqo by Viloura AI" footer.
- `sample/results.html` — sample report, rebuilt around one AI model
  with live web search: 6 questions, 6 answers. Smith Family Dental 5/6
  mentioned, 5/6 top-3, score 83 (computed from the kept answer grid).
  Competitor and source bars from the same 6 answers.
- `sample/weekly-report.html` — preview of a planned weekly email,
  same 6 answers. Score 83, up 38 vs last week 45; mentions 5/6, up 2
  vs 3. Out of search indexes, out of the nav and sitemap.
- `ai-visibility/dentists.html`, `lawyers.html`, `plumbers.html`,
  `restaurants.html`, `real-estate-agents.html` — industry landing
  pages: H1, 5 buyer questions, what AI cites for the trade, 3 fixes,
  CTA, 3-question FAQ with FAQPage JSON-LD.
- `guides/get-recommended-by-chatgpt.html` — ~900-word practical guide
  on how local businesses get named in AI answers, with CTA.
- `sitemap.xml` — every public page except the weekly-report preview
  and 404.
- `robots.txt` — allows all, points at the sitemap.
- `prisqo-check.js` — homepage check script: handles `already_used`
  and `not_paid`, targets `data-static-check-form="check"`, post-payment
  errors say the payment went through and never say "nothing was
  charged". Report link box with Copy link button and mailto link.
- `_headers` — CSP (now allows the Cloudflare analytics beacon),
  `X-Frame-Options: DENY`. No robots-exclusion header.
- `prisqo-site-worker.js` — site Worker: serves static assets (no
  robots-exclusion header any more), proxies only `/api/check`,
  `/api/create-checkout-session`, `/api/step/*`, `/api/report/*`,
  `/api/spend` to the engine with `CHECK_TOKEN` added server-side.
  `/api/webhook/stripe` is NOT proxied (stays 404 on the site).
- `engine/worker.js` — report engine. Unchanged in this batch: the live
  engine is newer than this copy (more robust Stripe header parse,
  `SESSION_ID_RE` on `/check`, `code: "payment_required"`), and its exact
  text still has to come from Kiwi. This copy is the last verified version
  (constant-time webhook verify, `/report` fallback `|| 6`, paid-retry
  rules). Do not deploy from the repo expecting the engine to match live.

## Still needed from Kiwi (live files this repo cannot fetch)

- Live `engine/worker.js` (Worker `prisqo-report-engine`).
- Live `prisqo-site-worker.js` exact text (routing in this copy is
  verified correct; only comments may differ).
- The live Stripe Price id amount: confirm it is $19, or create a new
  $19 one-time price and use that id at deploy.
- The Cloudflare Web Analytics token for the beacon
  (`CF_BEACON_TOKEN` placeholder in every page).
- The two PNGs (`opengraph-image.png`, `apple-icon.png`) are NOT in this
  repo — the GitHub connector only pushes UTF-8 text. Both are already
  correct live (verified byte-identical Nov 10: the OG image is the new
  "Pay once" one); keep the live copies.

## Not in here (by design)

- No `wrangler.toml` — on purpose. The live KV namespace id and the live
  Stripe Price id stay only in the Cloudflare Worker config; never commit
  them, and never paste them into a wrangler.toml for Muse to deploy.
- No secrets of any kind. `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`,
  `GROQ_API_KEY`, and `CHECK_TOKEN` are set via `wrangler secret put` only.

## Deploy notes (unchanged rules)

- Live Stripe keys. One report per payment; `/check` requires
  `paidSessionId` and returns 402 for missing/unpaid/used sessions.
- Live check is 6 questions, one Groq model (`openai/gpt-oss-20b`).
- The refund line marked `<!-- JILSHA-APPROVE -->` is a placeholder
  until Jilsha approves it.
