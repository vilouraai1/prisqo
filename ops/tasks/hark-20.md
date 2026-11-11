# hark-20: Free "Does AI name you?" mini-check (zero running cost)

Goal: a free, shareable hook that turns visitors into $19 buyers. NO paid API calls per visitor, no new keys, no spending.

Build `free-check.html` (+ a small static JSON data file, e.g. `data/ai-answers.json`):
- Visitor picks category + city (dropdowns) and types their business name.
- Page shows the businesses an AI search assistant named for "best <category> in <city>" from the pre-collected JSON (seed it from ops/marketing/leads-1.csv hooks and any results already in the repo; label each with the date checked). Only verified data; if a city/category has no data, say "Not checked yet — get your full report".
- If the typed name is not in that list: "AI didn't name you in our last check" + who it named instead + CTA to the $19 report. If it is: "You showed up — see the 6 questions where you might not" + CTA.
- Share buttons (plain links, no tracking scripts) for the result, and ?ref=freecheck on CTAs.
- Link it from index.html hero (secondary button "Free 10-second check") and the nav.
- Honest copy: say it's a snapshot from a past check, not live.
- Add to sitemap. Do not touch engine/, Stripe, Muse files, or CF_BEACON_TOKEN.

Acceptance: page works with JS on/off (noscript fallback to $19 CTA), no external requests except existing ones, CTAs reach checkout, mobile OK.
Branch hark-20, write ops/replies/hark-20.md, open a PR to main.
