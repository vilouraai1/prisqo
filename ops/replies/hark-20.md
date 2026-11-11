# hark-20 reply — Free "Does AI name you?" mini-check

Status: done. PR: (link added in the next commit on this branch).

## What changed
- `free-check.html` (new): pick a category + city, type your business name. Shows what an AI search assistant named for "best <category> in <city>" from a saved snapshot. Three outcomes: named ("You showed up — see the 6 questions where you might not"), not named ("AI didn't name you in our last check" + who it named instead), or no data ("Not checked yet — get your full report"). Share buttons are plain links (X, Facebook, LinkedIn, email) — no tracking scripts. All CTAs go to `/?ref=freecheck#check`. Honest copy throughout: "A snapshot from a past check, not live. AI answers change from run to run."
- `data/ai-answers.json` (new): the snapshot. 7 checks, all Lewisville, TX, checked Nov 11, 2026, seeded from `ops/marketing/leads-1.csv` hooks (the same 5 categories from `ops/marketing/outreach.md`, plus personal injury lawyer and plumber from the CSV). 20 businesses named in total.
- `free-check.js` (new): the lookup. Separate file, not inline — the site CSP (`script-src 'self'`, no `unsafe-inline`) blocks inline scripts. Fetches the JSON same-origin, matches the typed name (exact or substring, case-insensitive), and deep-links results via `?category=&city=&name=` so a shared result re-runs the check on load.
- `index.html`: nav gains a "Free check" link; hero gains a secondary button "Free 10-second check" next to "See a real sample report".
- `sitemap.xml`: +1 URL (`/free-check`, 205 total).

## What was NOT touched
`engine/`, Stripe, `prisqo-site-worker.js`, `CF_BEACON_TOKEN`. No paid API call runs when a visitor checks — the answers are static JSON.

## Verification (all passed)
- Lookup logic tested in Node for all three paths (found / not-named / not-checked) across dentist, HVAC, family-law, personal-injury and plumber.
- Real-browser check (headless Chrome, local server): `?category=dentist&city=Lewisville%2C%20TX&name=Capehart%20Dental` renders "AI did not name you in our last check" with the named list, share links and CTA. No console errors.
- Lighthouse 13.6.0, local mobile: **100 / 100 / 96 / 100** (Performance / Accessibility / Best Practices / SEO). Best Practices 96 is only the Cloudflare beacon failing inside the sandbox (it loads live). Accessibility 100 after underlining the in-text link and the three footer-legal links on this page.
- 375px screenshot: hero, honest note and the form card all stack cleanly; full-width selects, full-width "Check — free" button.
- JSON-LD parses on every repo page; titles unique site-wide (205 pages); 0 broken internal links in the changed files (the two `/_next/...` CSS/font paths are live build artifacts, not repo files); no "coming soon" / "demo" / "weekly" / "monitoring" copy; no new external requests on load (only the existing Cloudflare beacon).

## Flags for Kiwi
- Main moved while I worked: PR #22 (marketing posts) and PR #23 (brief-4) both merged. This branch was created from the new main (`d108c626`) and the `index.html` / `sitemap.xml` edits were re-applied on the merged brief-4 base, so there should be no conflict with either.
- The header nav now has 5 links. At 375px it wraps to two lines — usable, slightly taller than before.
- The footer-legal underline fix is applied on `free-check.html` only. The same Lighthouse deduction still exists on other pages on main that brief-4 did not touch.
- No screenshots committed (the GitHub connector is text-only). The 375px screenshot was verified locally only.
- Only Lewisville, TX has data (7 categories). Every other city/category in the dropdowns shows "Not checked yet". Adding more cities means adding more verified checks to `data/ai-answers.json` — never invent them.
- Please re-run PageSpeed on the live page after deploy; the local Lighthouse run cannot score the deployed page.
