# Prisqo — changed files for Kiwi to review and deploy

Delivery vehicle only. Nothing here is deployed by this repo; Kiwi pulls,
reviews, and deploys to the live Workers.

## What's in here

- `faq.html` — FAQ page. New q15 "What if I pay and the check fails?" in the
  visible FAQ and in the FAQPage JSON-LD.
- `sample/results.html` — sample report, rebuilt around the 6 kept prompts ×
  3 sample engines = 18 answers. Smith Family Dental 7/18 mentioned, 7/18
  top-3, score 39 (computed from the answer grid).
- `sample/weekly-report.html` — sample weekly report, same 18 answers.
  Score 39, down 6 vs last week 45; mentions 7/18, down 4 vs 11.
- `prisqo-check.js` — homepage check script. New `showPaidError`: post-payment
  errors no longer claim "Nothing was charged." Pre-payment errors keep
  `showError`.
- `engine/worker.js` — report engine. Two fixes: `/report/:id` not-done
  fallback `|| 12` → `|| 6`, and the Stripe webhook signature verify is now
  constant-time (`timingSafeEqualHex`) instead of a character-by-character
  compare. Confirm the deployed engine matches before the first paid test.

## Not in here (by design)

- No `wrangler.toml` — Kiwi keeps the live values at deploy time. Never commit
  a live KV namespace id or a live Stripe Price id.
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
