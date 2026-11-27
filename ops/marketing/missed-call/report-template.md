# $49 Missed-Call + AI Visibility Check: report template (HM-31)

**Drafts only. Nothing has been sent.** Jilsha fills this in and sends it only after a practice has paid. Hark sends nothing.

The contents match `ops/research/pain-check.md` §4. Every number comes from the practice's own row in `call-log-template.csv`, or from a page Jilsha checked that day. If a section has no data, write "not checked" and never guess.

```
Subject: Your missed-call + AI visibility check: [Practice]

Hi [first name],

Thanks for ordering. Here's what we found for [Practice], [City].

1. Test calls (we called as a new patient would; no recording)
   • [Tue 12/1, 12:xx PM]: [answered in N rings / voicemail / no answer]
   • [Wed 12/2, 4:xx PM]: [...]
   • [Thu 12/3, after close]: [...]
   Callback: [time, or "none by Fri noon"]
   Voicemail greeting: [gives hours and another way to reach you? yes / partly / no]

2. Website contact form
   [Jilsha tested it once on (date): reply after N hours / no reply / no form]

3. Google reviews
   [Latest review date; how many of the last 10 got an owner reply. Checked (date).]

4. What AI tools say
   We asked Gemini "[question]" on [date]. It named: [names]. [You were / weren't] in it.

5. The 3 cheapest fixes, in this order
   • [The fix for the worst result above. Pick it from the menu below.]
   • [...]
   • [...]

Reply with any questions. Happy to talk it through on a call.

Jilsha Jose, VilouraAI
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

## Fix menu (pick the 3 that match the findings; adjust the wording to fit)
- **Calls going to voicemail at lunch or late afternoon:** Stagger front-desk lunches so the line is covered from 12 to 1. Or forward overflow calls to a second line.
- **Voicemail with no hours or other way to reach you:** Re-record it to give your hours, your website or online booking, and when you call back. This is free and takes 5 minutes.
- **No callback within a business day:** Set a rule to return voicemails the same day, with one person checking them at 9, 1 and 4.
- **After-hours calls lost:** Use an answering service. Typical cost per pain-check.md is $79–$150 a month for AI answering, or from $250 a month for live answering. Only suggest this when after-hours calls actually failed.
- **Contact form slow or missing:** Send an auto-reply that gives your hours, plus a same-day human reply.
- **Few owner replies to reviews:** Reply to the last 10 reviews, one line each.
- **Not named in the AI answer:** Run the free check at prisqo.vilouraai.com/free-check for the full list. The $19 Prisqo report covers what to change on your site and listings.

## Saved AI answers for the 24 test practices
This is the input for section 4. The answers are Gemini's, from `data/ai-answers.json` (2026-11-13 snapshots). Before sending a report, re-ask the question that day and update the answer, because answers change.

| Test | Practice | City | Category | Saved AI question | Named? | Names in the answer |
|---|---|---|---|---|---|---|
| MC-01 | Creekview Family Dentistry | Lewisville | dentist | "best dentist in Lewisville, TX" (Gemini, 2026-11-13) | no | Sehnert Precision Dentistry; Capehart Dental of Lewisville; SolidSMILES Dental; Round Grove Family Dentistry |
| MC-02 | Round Grove Family Dentistry | Lewisville | dentist | "best dentist in Lewisville, TX" (Gemini, 2026-11-13) | yes | Sehnert Precision Dentistry; Capehart Dental of Lewisville; SolidSMILES Dental; Round Grove Family Dentistry |
| MC-03 | The Lewisville Dentist | Lewisville | dentist | "best dentist in Lewisville, TX" (Gemini, 2026-11-13) | no | Sehnert Precision Dentistry; Capehart Dental of Lewisville; SolidSMILES Dental; Round Grove Family Dentistry |
| MC-04 | Wakefield Family & Cosmetic Dentistry | Lewisville | dentist | "best dentist in Lewisville, TX" (Gemini, 2026-11-13) | no | Sehnert Precision Dentistry; Capehart Dental of Lewisville; SolidSMILES Dental; Round Grove Family Dentistry |
| MC-05 | Boutique Medspa | Lewisville | med-spa | "best med spa in Lewisville, TX" (Gemini, 2026-11-13) | unclear: confirm same business | Boutique MedSpa (MD Skin and Laser); Doctor Slim Med Spa; ROOT Med Spa; Stuart Lipton, MD (Medical Spa Services) |
| MC-06 | Abundant Living Health & Wellness | Flower Mound | chiropractor | "best chiropractor in Flower Mound, TX" (Gemini, 2026-11-13) | no | FreeForm Chiropractic; Best Life Chiropractic and Wellness Center; New Leaf Chiropractic; Bradley Chiropractic Clinic |
| MC-07 | Bradley Chiropractic | Flower Mound | chiropractor | "best chiropractor in Flower Mound, TX" (Gemini, 2026-11-13) | yes | FreeForm Chiropractic; Best Life Chiropractic and Wellness Center; New Leaf Chiropractic; Bradley Chiropractic Clinic |
| MC-08 | Butler Chiropractic | Flower Mound | chiropractor | "best chiropractor in Flower Mound, TX" (Gemini, 2026-11-13) | no | FreeForm Chiropractic; Best Life Chiropractic and Wellness Center; New Leaf Chiropractic; Bradley Chiropractic Clinic |
| MC-09 | Foster Chiropractic | Flower Mound | chiropractor | "best chiropractor in Flower Mound, TX" (Gemini, 2026-11-13) | no | FreeForm Chiropractic; Best Life Chiropractic and Wellness Center; New Leaf Chiropractic; Bradley Chiropractic Clinic |
| MC-10 | Lomonaco Family Chiropractic | Highland Village | chiropractor | "best chiropractor in Highland Village, TX" (Gemini, 2026-11-13) | no | Elite Body Chiropractic; Trinity Wellness Center, P.C.; Rooted Chiropractic and Wellness Center; Six One Clinic; Village Chiropractic Center (and Medical Massage Rx) |
| MC-11 | Village Chiropractic Center & Medical Massage Rx | Flower Mound | chiropractor | "best chiropractor in Flower Mound, TX" (Gemini, 2026-11-13) | no | FreeForm Chiropractic; Best Life Chiropractic and Wellness Center; New Leaf Chiropractic; Bradley Chiropractic Clinic |
| MC-12 | Vibrant Life Med Spa | The Colony | med-spa | no saved answer for this city + category | — | — |
| MC-13 | Triumph Physical Therapy & Wellness Center | Highland Village | physical-therapy | "best physical therapy in Highland Village, TX" (Gemini, 2026-11-13) | yes | PeakRx PT & Wellness; Fortitude Performance Physical Therapy; Triumph Physical Therapy & Wellness Center |
| MC-14 | Josey Lane Dentistry | Carrollton | dentist | "best dentist in Carrollton, TX" (Gemini, 2026-11-13) | no | Carrollton Smiles; Carrollton Dentistry (Carrollton Dental Group); Celebration Family Dental of Carrollton; Marc Dandois DDS |
| MC-15 | The Hamptons Family & Cosmetic Dentistry | Carrollton | dentist | "best dentist in Carrollton, TX" (Gemini, 2026-11-13) | no | Carrollton Smiles; Carrollton Dentistry (Carrollton Dental Group); Celebration Family Dental of Carrollton; Marc Dandois DDS |
| MC-16 | SuA K-Glow | Carrollton | med-spa | "best med spa in Carrollton, TX" (Gemini, 2026-11-13) | no | Original Skin; St. Mary’s Aesthetics & Wellness Center; Modern Line Med Spa; NWME Aesthetics; Charm Laser Skin Center |
| MC-17 | Derma Phi Med Spa | Carrollton | med-spa | "best med spa in Carrollton, TX" (Gemini, 2026-11-13) | no | Original Skin; St. Mary’s Aesthetics & Wellness Center; Modern Line Med Spa; NWME Aesthetics; Charm Laser Skin Center |
| MC-18 | Body Spring Fascia Fitness | Carrollton | physical-therapy | "best physical therapy in Carrollton, TX" (Gemini, 2026-11-13) | no | Green Oaks Physical Therapy (Carrollton Location); Baylor Scott & White Institute for Rehabilitation; Greater Therapy Centers; Elevation Spine & Sports Medicine; Results Physiotherapy |
| MC-19 | Nm Rehab & Wellness Center | Carrollton | physical-therapy | "best physical therapy in Carrollton, TX" (Gemini, 2026-11-13) | no | Green Oaks Physical Therapy (Carrollton Location); Baylor Scott & White Institute for Rehabilitation; Greater Therapy Centers; Elevation Spine & Sports Medicine; Results Physiotherapy |
| MC-20 | Physical Therapy Experts | Carrollton | physical-therapy | "best physical therapy in Carrollton, TX" (Gemini, 2026-11-13) | no | Green Oaks Physical Therapy (Carrollton Location); Baylor Scott & White Institute for Rehabilitation; Greater Therapy Centers; Elevation Spine & Sports Medicine; Results Physiotherapy |
| MC-21 | Totality Holistics | Dallas | chiropractor | "best chiropractor in Dallas, TX" (Gemini, 2026-11-13) | no | Apex Chiropractic; Trinity Mills Chiropractic; Uptown Chiropractic; Woodward Chiropractic & Massage; FreeForm Chiropractic (North Dallas) |
| MC-22 | Ark Dental PC | Dallas | dentist | "best dentist in Dallas, TX" (Gemini, 2026-11-13) | no | Dallas Dental Group; Highland Park Dental; Central Dentist; Lakewood Dental Group; Keith W. Brewster, DDS PLLC |
| MC-23 | Smith Family Dentistry | Dallas | dentist | "best dentist in Dallas, TX" (Gemini, 2026-11-13) | no | Dallas Dental Group; Highland Park Dental; Central Dentist; Lakewood Dental Group; Keith W. Brewster, DDS PLLC |
| MC-24 | Emily Cortez Studio & Med Spa | Dallas | med-spa | "best med spa in Dallas, TX" (Gemini, 2026-11-13) | no | Viva Day Spa + Med Spa (Preston Center); Total Med Solutions; Dallas Associated Dermatologists; UPKEEP Med Spa; Renew Beauty Med Spa |
