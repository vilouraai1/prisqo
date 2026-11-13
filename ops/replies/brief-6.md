# Reply: brief-6 — customer-finding pack

Branch: muse-brief-6, from main d372e85d376d3a870c7c3fae2d2cfc1a8876183a. All 5 parts done. Nothing was sent, posted, signed up for, or contacted. No secrets, live Stripe Price IDs, live KV IDs, or keys in any file or commit.

## Commits (local, per part)

- Part 1: 5c4a3be — ops/marketing/agency-emails.csv
- Part 4: 46dc40a — ops/marketing/communities.md
- Part 2: 9e52358 — ops/marketing/leads-3.csv
- Part 3: 3ab26c7 — ops/marketing/drafts-3.md
- Reply (this file): amended into the tip commit — see git log for its hash

## Part 1 — Agency emails (ops/marketing/agency-emails.csv)

- 30 rows, in agency-pitch.md order. 17 of the 25 researched agencies had a public email found on their own site (contact/about/footer). 8 have blank email — phone/form-only after checking contact + homepage + about/team pages: Red Spot Design, Sofia Marketing, Portside Marketing, Sojourn Solutions, BubbleUp, Method21, Neon Ambition, SEO Agency San Antonio.
- 5 skipped as instructed (already emailed Nov 11) — blank email by design, contact URL kept: Thinkit Media, DigitalZeon, Fast Hippo Media, GMP Internet Marketing, Aspiro Agency.
- Owner names recorded only where public: Scott Baradell (Idea Grove), Asher Karnes (Karnes Consulting), Rudy Macias (Creek Digital), Coleman Sisson (BubbleUp), Jim first-name-only (Sofia Marketing).
- Verified: 4 sampled emails re-checked on the live pages (newbiz@ideagrove.com, hello@visionarysearch.com, asher@karnesconsulting.com, rudy@creekdigital.co). All 25 contact pages returned HTTP 200.

## Part 2 — 40 local leads (ops/marketing/leads-3.csv)

- 40 rows: 10 each in Frisco, McKinney, Plano, Denton. Niches: Frisco dentists (5) + med spas (5); McKinney HVAC (5) + plumbers (5); Plano chiropractors (5) + law firms (5); Denton roofers (5) + dentists (5). None overlaps leads-1.csv (all Lewisville).
- 21 rows have a public email (taken from a page actually loaded); 19 blank with a verified contact page or homepage in source_url.
- All 40 websites verified loading: 35 returned HTTP 200 via curl; the other 5 (Frisco's Dentists, Wong Family Dental, Bill Joplin's, Johnson Reist, Brian Bagley) load fine in a browser fetch — curl 403/406 was bot protection.
- ai_hook for every row comes from asking Groq gpt-oss-20b with live web search on Nov 11, 2026 (one question per city, two niches each). 4 of the 40 were named by the AI: Hush MedSpa (#3 med spa, Frisco), Bill Joplin's (#1 HVAC, McKinney), Burnside (#3 HVAC, McKinney), Denton Smiles Dentistry (#1 dentist, Denton). The other 36 were not named.
- Caveats: the Frisco "best dentists" list the AI used is a "Dental me score" ranking whose #1 is an orthodontics practice and #3 an endodontics practice, not general dentists — treat that hook as weaker than the others. The AI returned Coats & Todd's site as coastlaw.com (spelled "coast") — verify before publishing. Aguilar Dentistry's email really is spelled smile@aguilarfamiydentistry.com on their own site (missing an "l") — recorded verbatim, double-check before any send.
- Groq cost note: the 4 AI calls used 592,114 tokens total (Frisco alone 268,889). The shared free-tier daily cap (200,000) was already exhausted when I started — the live product had used 199,875 — so the calls only landed after the 00:00 UTC reset, one city per ~15 min. Budget future AI-hook work accordingly.

## Part 3 — Cold email drafts (ops/marketing/drafts-3.md)

- 10 drafts for the top 10 leads from Part 2 (all 10 have a public email; spread 2 Frisco, 3 McKinney, 3 Plano, 2 Denton). Each has a subject and a body of exactly 70 words (verified by script), personalized with its ai_hook, the free-check link https://prisqo.vilouraai.com/free-check?ref=email, the sign-off "Jilsha / Prisqo, https://prisqo.vilouraai.com", and the last line: Not interested? Just reply "no" and I won't email again.

## Part 4 — 25 free communities (ops/marketing/communities.md)

- 25 communities: 8 Reddit, 4 forums/networks, 4 Slack, 3 Discord, 4 Facebook, 1 Meetup. DFW-local: Shop Small Fort Worth (Facebook, 15.3k+) and Dallas-Fort Worth Business Owners Group (Meetup, 591), plus Alignable's Lewisville/DFW community.
- 13 have a verified quoted self-promo rule (or verified "no rules posted"); 12 are marked "rules not verified" — those entries say so, nothing invented. Conflicting published sizes are flagged in-entry, not silently picked.
- 5 post drafts, value-first: 3 mention Prisqo where the rules allow it (r/SideProject, Indie Hackers, Show HN); 2 give value with no Prisqo mention (r/LocalSEO, Local Search Forum).
- Caution added in the file: Drafts 1 and 4 cite example numbers (e.g. a 14-review AI winner vs a 400-review practice) as illustration — replace them with results from a real check before posting.

## Open questions

- Coats & Todd URL: the AI gave coastlaw.com — please verify the real domain before the Plano law-firm hook is quoted anywhere.
- Frisco dentist hook: the underlying ranking mixes orthodontics/endodontics with general dentists; fine for a cold email, but don't cite it as "best dentists" in published copy.
- Groq budget: 4 AI-hook calls cost 592k tokens, ~3x the daily free cap — for the next leads batch, either ask fewer/smaller questions or use a different AI/model.

## Summary
- Part 1: 30 agency rows, 17 public emails found, 5 skipped (already emailed), 8 form-only.
- Part 2: 40 local leads (10/city), 21 with email, all sites verified, AI named 4 of 40.
- Part 3: 10 cold email drafts, exactly 70-word bodies, hooks + link + sign-off + opt-out.
- Part 4: 25 communities (13 rules quoted, 12 unverified), 5 value-first post drafts.
- Nothing sent, posted, or contacted; no secrets in the diff.
DONE
