# Variant A lead list 2 (HM-21): 30 DFW leads, no drafts

Built 2026-11-23 (America/Chicago) by Hark. **Leads only. Nothing was drafted, sent, posted, called, or submitted.** Data: `ops/leads/variant-a-2.csv` (pure CSV, 30 rows).

## What qualifies a row
- The business is in Lewisville, Flower Mound, Carrollton, or Frisco and is a dentist, chiropractor, med spa, HVAC company, or plumber.
- `data/ai-answers.json` has a dated Gemini answer for that city + category naming 3 or more businesses, and this business is **not** one of them (checked by name). Columns `ai_question`, `ai_checked`, `ai_named_count`, `ai_named` copy that answer. This is the Variant A rule in `ops/playbooks/hark.md`.
- The email was read on the business's own website on 2026-11-23; `email_source_url` is the page it appeared on. No guessed or pattern-built addresses. Own-domain addresses only (Gmail/Outlook/Verizon-only practices were skipped).
- Not on `ops/marketing/do-not-email.md`, and the email, domain, and business name do not appear anywhere under `ops/` (so nobody in sent-log, earlier lead files, CRM segments, or drafts). Twelve otherwise-good candidates were dropped for this: Black Iris MedSpa, Ultimate Image MedSpa, Dawson Dentistry, Compassion Family Chiropractic, Live Oak Plumbing, D.R. Plumbing, MedSuite at Castle Hills, Glo On The Go, Hunt Family Dentistry, Aesthetic General Dentistry of Frisco, City Chiro Sports Center, Zahn Chiropractic.

## Mix
| City | Dentist | Chiro | Med spa | HVAC | Plumber | Total |
|---|---|---|---|---|---|---|
| Lewisville | 4 | 2 | 0 | 3 | 2 | 11 |
| Flower Mound | – | 3 | – | – | 0 | 3 |
| Carrollton | 3 | 4 | 1 | – | – | 8 |
| Frisco | 2 | 2 | 4 | – | – | 8 |
| **Total** | 9 | 11 | 5 | 3 | 2 | **30** |

"–" means the repo has no dated answer for that city + category, so no Variant A hook is possible there. Lewisville med spa and Flower Mound plumber have answers, but their fitting candidates were already in earlier lists or showed only a form.

## Limits (read before use)
- Only Gemini answers exist in `data/ai-answers.json` (checked 2026-11-13). No ChatGPT answer was run or recorded; none is claimed.
- These answers are 10 days old. Before any draft, re-run the same question or accept the dated wording ("On Nov 13 I asked Gemini...").
- Free-check form covers Lewisville, Carrollton, Frisco (not Flower Mound) as of HM-12. A Flower Mound "yes" reply needs the SEO-audit link instead.
- `contact_name` is filled only when the business's own site names the doctor or owner; otherwise blank. Variant A can open with "Hi there" for blanks.
- Category is from the site's own description. FlowMo Plumbing lists a Lewisville office but says it's based in Flower Mound; Flow State Chiropractic has Frisco and Lewisville offices. Each hook uses the city of the office named in the row.

## How this gets used
This is the input for the next Variant A batch (HM-05 / EXP-H1's "1 reply = send 10 more" path), drafted only when Jilsha asks. Per EXP-H1, don't draft from it until batch 1 has been sent and read.

## Summary
30 new own-site emails across 11 city/category pairs, each with a dated Gemini answer that doesn't name it. No drafts, nothing sent.
