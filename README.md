# Prisqo — changed files for Kiwi to review and deploy

Muse pushes here; Kiwi deploys. Nothing in this repo deploys itself, and
nobody deploys from here — Kiwi pulls, reviews, and deploys to the live
Workers (`prisqo` site, `prisqo-report-engine` engine).

Latest batch (selling-ready, Nov 6): terms and privacy are published for
the paid one-time check; checkout-return and cancel copy in `prisqo-check.js`
say the payment went through, to stay on the page, and to bookmark the
report address; `pricing.html` no longer has a `plan-free` test id; every
page and `_headers` carry a `GO-LIVE` comment saying what to change when
Jilsha says go live — nothing was flipped. Email collection is Stripe
Checkout's default (it asks for the buyer's email at payment); no engine
change was made and no email is sent. Going live (live Stripe keys, showing
a price, removing noindex / the demo banner) is a separate Jilsha yes — not
this commit. Sample rebuilt to a stronger labeled example (12/18 named,
10/18 top-3, score 63); the live scoring formula is unchanged. Contact email
  vilouraai1@gmail.com is now published on the contact page (and in
  terms/privacy/FAQ); sample answer previews show the full Sources line;
  the check form validates website/category/city and blocks double-submit
  while checkout opens. Sample sources reconciled preview-led (previews now
  cite 3–4 sources each, counts match the bars 12/11/10/9/8/7/6; slugs no
  longer cut at 38 chars); Back from Stripe Checkout no longer leaves the
  pay button stuck (pageshow/bfcache reset).

## What's in here

- `index.html`, `pricing.html`, `faq.html`, `contact.html`, `privacy.html`,
  `terms.html`, `404.html`, `compare.html`, `compare/hubspot-aeo.html`,
  `compare/otterly.html`, `compare/peec-ai.html` — the 13 site pages, swept
  Nov 6: one report, pay once at checkout, no subscription; 6 prompts, not
  12; no Prisqo price printed anywhere; no "free check". Homepage hero now
  matches the shipped sample: score 63 of 100, named in 12 of 18 answers
  (was 39 / 7 of 18), with competitor and source bars from the same
  18-answer grid.
- `sample/results.html` — sample report, built around the 6 kept prompts ×
  3 sample engines = 18 answers. Smith Family Dental 12/18 mentioned, 10/18
  top-3, score 63 (computed from the answer grid).
- `sample/weekly-report.html` — sample weekly report, same 18 answers.
  Score 63, up 18 vs last week 45; mentions 12/18, up 3 vs 9.
- `prisqo-check.js` — homepage check script, synced from the live file:
  handles `already_used` and `not_paid`, targets
  `data-static-demo-form="check"` (not the first `<form>`), and post-payment
  errors say the payment went through and never say "nothing was charged".
- `_headers` — CSP, `X-Frame-Options: DENY`, `X-Robots-Tag: noindex,
  nofollow` (the repo copy had dropped the last two).
- `prisqo-site-worker.js` — site Worker: serves static assets (adds
  `X-Robots-Tag: noindex, nofollow`), proxies only `/api/check`,
  `/api/create-checkout-session`, `/api/step/*`, `/api/report/*`, `/api/spend`
  to the engine with `CHECK_TOKEN` added server-side. `/api/webhook/stripe`
  is NOT proxied (stays 404 on the site).
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

## Not in here (by design)

- No `wrangler.toml` — on purpose. The live KV namespace id and the live
  Stripe Price id stay only in the Cloudflare Worker config; never commit
  them, and never paste them into a wrangler.toml for Muse to deploy.
- No secrets of any kind. `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`,
  `GROQ_API_KEY`, and `CHECK_TOKEN` are set via `wrangler secret put` only.
- No live Stripe keys, no price printed anywhere on the site.

## Deploy notes (unchanged rules)

- Test-mode Stripe only. One report per payment; `/check` requires
  `paidSessionId` and returns 402 for missing/unpaid/used sessions.
- Keep noindex (`X-Robots-Tag: noindex, nofollow`) and the demo banner.
- Live check is 6 questions, one Groq model (`openai/gpt-oss-20b`).
- No full paid test until after 6:00 PM CT Fri Nov 6 (Groq free daily tokens,
  ~1 report/day).
