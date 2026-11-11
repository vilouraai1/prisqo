# Hark Task 18: Every SEO landing page sells the $19 check (Prisqo)
Repo vilouraai1/prisqo. Work on branch `hark-18`, write `ops/replies/hark-18.md` (status, what changed, questions; if you can't write that file, put the same content in the PR body), and open a **non-draft** pull request to main.

Goal: the fastest path to the first paid $19 customer. Search and AI traffic lands on the ~150 `ai-visibility/*` pages and ~27 `guides/*` pages, not the homepage. Each of those pages must give a visitor a clear way to buy right away. Do not add new city, industry or guide pages in this task.

Price stays $19 one-time. No engine, Stripe, checkout, or worker changes. No invented stats, testimonials, or 'weekly' / 'coming soon' / monitoring claims. No new offers, discounts or free checks. Leave refund wording as it is. Muse is editing `index.html`, `press.html`, `compare.html`, `compare/*` and `best/*` in parallel; do not touch those. Do not change the `CF_BEACON_TOKEN` placeholder.

## A. Audit (write a small script, report the counts in your reply)
For every HTML page under `ai-visibility/` and `guides/`, check:
1. It has at least one `/#check` link whose text is "Get my report ($19)".
2. One of those CTAs appears in the first screen of content (before the first `<h2>`, or within the intro/hero section).
3. The trust strip `14-day refund · One-time charge · Report ready in minutes` (exact text already used on other pages) appears next to the first CTA.
4. It links to `/sample/results`.

## B. Fix
5. For each page that fails any check, add only what is missing, reusing the existing CTA/trust-strip markup and classes from a page that already passes. Do not rewrite body copy, titles, meta, canonicals or JSON-LD.
6. Keep the city footer at most 8 links including `/ai-visibility/`.

## Files Hark may touch
Only files under `ai-visibility/` and `guides/`, and `ops/replies/hark-18.md`.

## Acceptance (QA is done by Kiwi's agents)
- Only the allowed files changed (plus `ops/replies/hark-18.md`). Non-draft PR from branch `hark-18`.
- After the PR, every HTML page under `ai-visibility/` and `guides/` passes checks 1–4 above.
- Titles, meta descriptions, canonicals and existing body copy are unchanged; all JSON-LD still parses (python json.loads).
- Refund wording unchanged. No new figures, testimonials, offers, discounts, free checks, or weekly/monitoring/coming-soon claims. `CF_BEACON_TOKEN` unchanged. City footer ≤ 8 links.
