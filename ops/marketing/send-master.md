# Master send calendar, 2026-11-30 to 2027-01-08 (HM-35)

**Plan only. Nothing has been sent. Jilsha sends every email, form and callback herself.** Built 2026-11-28 (America/Chicago) by script from the four files that each schedule sends: `send-calendar-hm-26.md`, `followups-11.md`, `replies-leads-8.md` and `followups-13.md`. If one of those changes, rebuild this (`/workspace/work/hm35/build.py`).

## Why this exists
The 5-a-day cap is across everything Jilsha sends, but the sends live in four files. Together they fill every weekday from Mon 2026-11-30 to Wed 2026-12-23 at or near the cap. That leaves **no room for the $49 missed-call result contacts** (`missed-call/README.md`: Hark drafts them Fri 2026-12-04 from the call log, callbacks are logged through Fri noon, and they count toward the same cap). Those results go to practices that just got 3 logged test calls. They're the warmest contacts on the board and the only ones tied to a paid offer, so they shouldn't wait behind cold first emails until January.

## Which plan applies
- **Plan A (default):** Jilsha has *not* given the $49 go (PR #47) and set up payment by Thu 2026-12-03. The four calendars stand as written. 97 sends, Mon 2026-11-30 to Wed 2026-12-30. No day is over 5.
- **Plan B:** the $49 go and payment are in place by Thu 2026-12-03. Result contacts take every slot on Mon 2026-12-07, Tue 2026-12-08, Wed 2026-12-09, Thu 2026-12-10, Fri 2026-12-11 (12 emails, then 6 forms, then 6 callbacks: 24 contacts, at most 5 a day). Fri 2026-12-04 keeps its 5 planned sends, since the call log isn't closed until Fri noon. Everything planned from Mon 2026-12-07 on moves **5 business days later, same order, same daily counts**. Holidays skipped: 12-24, 12-25, 12-31, 2027-01-01. Follow-ups keep at least 4 business days after their first emails because everything moves together. Last send: Fri 2027-01-08. No day is over 5.
- A result contact goes only when its practice has all 3 calls logged. Any slot a practice can't use goes to the next one in the list, or stays empty. Cold sends aren't pulled forward into it.
- The success read (pain-check: ≥4 replies and ≥1 paid within 7 days of result emails) is due **Fri 2026-12-18** under Plan B.

## Checks the script ran
- Per-day totals across all four files: max 5 (Plan A), max 5 (Plan B).
- Weekends and holidays: none scheduled.
- Gates are unchanged: bounce check before 12-01, daily inbox/spam check, a sent-log line per send, `do-not-email.md`, skip on reply or "no".

## Plan A: as the four files have it

### Mon 2026-11-30 (5)

| Type | Business | Draft |
|---|---|---|
| Follow-up | Meridian Dental (Dr. Simi Paul | `followups-9.md (HM-23)` #1 |
| Follow-up | Valley Ranch Family Dentistry | `followups-9.md (HM-23)` #2 |
| Follow-up | Hill Chiropractic Center | `followups-9.md (HM-23)` #3 |
| Follow-up | Irving Injury Center | `followups-9.md (HM-23)` #4 |
| Follow-up | Kairos Aesthetic Medicine | `followups-9.md (HM-23)` #5 |

### Tue 2026-12-01 (5)

| Type | Business | Draft |
|---|---|---|
| Follow-up | Jordan Carl DMD | `followups-9.md (HM-23)` #6 |
| Follow-up | Adjusted Life Family Chiropractic | `followups-9.md (HM-23)` #7 |
| First email | Koala-T Heating & Air | `HM-20-personalized-drafts.md` #7 |
| First email | Prime AC & Heat | `HM-20-personalized-drafts.md` #8 |
| First email | FlowMo Plumbing | `HM-20-personalized-drafts.md` #10 |

### Wed 2026-12-02 (5)

| Type | Business | Draft |
|---|---|---|
| First email | Core Chiropractic | `HM-20-personalized-drafts.md` #12 |
| First email | Lighthouse Chiropractic | `HM-20-personalized-drafts.md` #13 |
| First email | GT Family Dentistry | `HM-20-personalized-drafts.md` #14 |
| First email | Forward Health & Wellness | `HM-20-personalized-drafts.md` #20 |
| First email | White Lotus Dental | `HM-20-personalized-drafts.md` #23 |

### Thu 2026-12-03 (5)

| Type | Business | Draft |
|---|---|---|
| First email | Elisum Medspa | `HM-20-personalized-drafts.md` #24 |
| First email | novera Med SPA | `HM-20-personalized-drafts.md` #27 |
| First email | Flow State Chiropractic | `HM-20-personalized-drafts.md` #29 |
| First email | Firm Foundation Wellness Center | `HM-20-personalized-drafts.md` #30 |
| First email | Top Flow Plumbing | `HM-20-personalized-drafts.md` #35 |

### Fri 2026-12-04 (5)

| Type | Business | Draft |
|---|---|---|
| First email | Red Ladder Roofing | `HM-20-personalized-drafts.md` #38 |
| First email | 423 Roofing and Construction | `HM-20-personalized-drafts.md` #39 |
| Follow-up | Kingdom Chiropractic | `followups-10.md (HM-24)` #1 |
| Follow-up | Prestonbrook Dental | `followups-10.md (HM-24)` #2 |
| Follow-up | Hush MedSpa | `followups-10.md (HM-24)` #3 |

### Mon 2026-12-07 (5)

| Type | Business | Draft |
|---|---|---|
| Follow-up | Best Neighbor Home Services | `followups-10.md (HM-24)` #4 |
| Follow-up | Burnside Air Conditioning | `followups-10.md (HM-24)` #5 |
| Follow-up | Pounce Plumbing | `followups-10.md (HM-24)` #6 |
| Follow-up | White Tree Chiro | `followups-10.md (HM-24)` #7 |
| Follow-up | The Barber Law Firm | `followups-10.md (HM-24)` #8 |

### Tue 2026-12-08 (5)

| Type | Business | Draft |
|---|---|---|
| Follow-up | ArmorTex | `followups-10.md (HM-24)` #9 |
| Follow-up | Denton Smiles Dentistry | `followups-10.md (HM-24)` #10 |
| Follow-up | Koala-T Heating & Air | `followups-11.md` |
| Follow-up | Prime AC & Heat | `followups-11.md` |
| Follow-up | FlowMo Plumbing | `followups-11.md` |

### Wed 2026-12-09 (5)

| Type | Business | Draft |
|---|---|---|
| First email | INSPINE Wellness | `HM-20-personalized-drafts.md` #6 |
| First email | Flink Family Dentistry | `HM-20-personalized-drafts.md` #16 |
| First email | Pillar Chiropractic | `HM-20-personalized-drafts.md` #17 |
| First email | Renew Family Dentistry | `HM-20-personalized-drafts.md` #22 |
| First email | LV Skin Aesthetics | `HM-20-personalized-drafts.md` #25 |

### Thu 2026-12-10 (5)

| Type | Business | Draft |
|---|---|---|
| First email | AestheticFx | `HM-20-personalized-drafts.md` #26 |
| First email | Grace Chiropractic & Wellness | `HM-20-personalized-drafts.md` #31 |
| First email | The Cooling King LLC | `HM-20-personalized-drafts.md` #36 |
| First email | All Source Plumbing | `HM-20-personalized-drafts.md` #37 |
| Follow-up | Core Chiropractic | `followups-11.md` |

### Fri 2026-12-11 (5)

| Type | Business | Draft |
|---|---|---|
| Follow-up | Lighthouse Chiropractic | `followups-11.md` |
| Follow-up | GT Family Dentistry | `followups-11.md` |
| Follow-up | Forward Health & Wellness | `followups-11.md` |
| Follow-up | White Lotus Dental | `followups-11.md` |
| Follow-up | Elisum Medspa | `followups-11.md` |

### Mon 2026-12-14 (5)

| Type | Business | Draft |
|---|---|---|
| Follow-up | novera Med SPA | `followups-11.md` |
| Follow-up | Flow State Chiropractic | `followups-11.md` |
| Follow-up | Firm Foundation Wellness Center | `followups-11.md` |
| Follow-up | Top Flow Plumbing | `followups-11.md` |
| Follow-up | Red Ladder Roofing | `followups-11.md` |

### Tue 2026-12-15 (5)

| Type | Business | Draft |
|---|---|---|
| Follow-up | 423 Roofing and Construction | `followups-11.md` |
| Follow-up | INSPINE Wellness | `followups-11.md` |
| Follow-up | Flink Family Dentistry | `followups-11.md` |
| Follow-up | Pillar Chiropractic | `followups-11.md` |
| Follow-up | Renew Family Dentistry | `followups-11.md` |

### Wed 2026-12-16 (5)

| Type | Business | Draft |
|---|---|---|
| Follow-up | LV Skin Aesthetics | `followups-11.md` |
| Follow-up | AestheticFx | `followups-11.md` |
| Follow-up | Grace Chiropractic & Wellness | `followups-11.md` |
| Follow-up | The Cooling King LLC | `followups-11.md` |
| Follow-up | All Source Plumbing | `followups-11.md` |

### Thu 2026-12-17 (5)

| Type | Business | Draft |
|---|---|---|
| First email | Berger Dental | `drafts-8.md` #1 |
| First email | Favero Family Dental | `drafts-8.md` #5 |
| First email | NTX Aesthetics Medical Spa | `drafts-8.md` #7 |
| First email | Composure Aesthetics | `drafts-8.md` #8 |
| First email | Embodiment Spa Fusion | `drafts-8.md` #13 |

### Fri 2026-12-18 (5)

| Type | Business | Draft |
|---|---|---|
| First email | Little Smiles Dentistry | `drafts-8.md` #14 |
| First email | Leatherwood Family & Cosmetic Dentistry | `drafts-8.md` #3 |
| First email | Denton Chiropractic Center | `drafts-8.md` #12 |
| First email | Denton Dental Care | `drafts-8.md` #4 |
| First email | Medford Chiropractic | `drafts-8.md` #9 |

### Mon 2026-12-21 (5)

| Type | Business | Draft |
|---|---|---|
| First email | Six One Clinic | `drafts-8.md` #15 |
| First email | Vanilla Family Dentistry | `drafts-8.md` #2 |
| First email | Ma'Belle Med Spa | `drafts-8.md` #6 |
| First email | Sunshine Family Chiropractic | `drafts-8.md` #10 |
| First email | Burgess Chiropractic | `drafts-8.md` #11 |

### Tue 2026-12-22 (1)

| Type | Business | Draft |
|---|---|---|
| First email | Rooted Chiropractic & Wellness Center | `drafts-8.md` #16 |

### Wed 2026-12-23 (5)

| Type | Business | Draft |
|---|---|---|
| Follow-up | Berger Dental | `followups-13.md` |
| Follow-up | Favero Family Dental | `followups-13.md` |
| Follow-up | NTX Aesthetics Medical Spa | `followups-13.md` |
| Follow-up | Composure Aesthetics | `followups-13.md` |
| Follow-up | Embodiment Spa Fusion | `followups-13.md` |

### Mon 2026-12-28 (5)

| Type | Business | Draft |
|---|---|---|
| Follow-up | Little Smiles Dentistry | `followups-13.md` |
| Follow-up | Leatherwood Family & Cosmetic Dentistry | `followups-13.md` |
| Follow-up | Denton Chiropractic Center | `followups-13.md` |
| Follow-up | Denton Dental Care | `followups-13.md` |
| Follow-up | Medford Chiropractic | `followups-13.md` |

### Tue 2026-12-29 (5)

| Type | Business | Draft |
|---|---|---|
| Follow-up | Six One Clinic | `followups-13.md` |
| Follow-up | Vanilla Family Dentistry | `followups-13.md` |
| Follow-up | Ma'Belle Med Spa | `followups-13.md` |
| Follow-up | Sunshine Family Chiropractic | `followups-13.md` |
| Follow-up | Burgess Chiropractic | `followups-13.md` |

### Wed 2026-12-30 (1)

| Type | Business | Draft |
|---|---|---|
| Follow-up | Rooted Chiropractic & Wellness Center | `followups-13.md` |

## Plan B: $49 go by Thu 2026-12-03

### Mon 2026-11-30 (5)

| Type | Business | Draft |
|---|---|---|
| Follow-up | Meridian Dental (Dr. Simi Paul | `followups-9.md (HM-23)` #1 |
| Follow-up | Valley Ranch Family Dentistry | `followups-9.md (HM-23)` #2 |
| Follow-up | Hill Chiropractic Center | `followups-9.md (HM-23)` #3 |
| Follow-up | Irving Injury Center | `followups-9.md (HM-23)` #4 |
| Follow-up | Kairos Aesthetic Medicine | `followups-9.md (HM-23)` #5 |

### Tue 2026-12-01 (5)

| Type | Business | Draft |
|---|---|---|
| Follow-up | Jordan Carl DMD | `followups-9.md (HM-23)` #6 |
| Follow-up | Adjusted Life Family Chiropractic | `followups-9.md (HM-23)` #7 |
| First email | Koala-T Heating & Air | `HM-20-personalized-drafts.md` #7 |
| First email | Prime AC & Heat | `HM-20-personalized-drafts.md` #8 |
| First email | FlowMo Plumbing | `HM-20-personalized-drafts.md` #10 |

### Wed 2026-12-02 (5)

| Type | Business | Draft |
|---|---|---|
| First email | Core Chiropractic | `HM-20-personalized-drafts.md` #12 |
| First email | Lighthouse Chiropractic | `HM-20-personalized-drafts.md` #13 |
| First email | GT Family Dentistry | `HM-20-personalized-drafts.md` #14 |
| First email | Forward Health & Wellness | `HM-20-personalized-drafts.md` #20 |
| First email | White Lotus Dental | `HM-20-personalized-drafts.md` #23 |

### Thu 2026-12-03 (5)

| Type | Business | Draft |
|---|---|---|
| First email | Elisum Medspa | `HM-20-personalized-drafts.md` #24 |
| First email | novera Med SPA | `HM-20-personalized-drafts.md` #27 |
| First email | Flow State Chiropractic | `HM-20-personalized-drafts.md` #29 |
| First email | Firm Foundation Wellness Center | `HM-20-personalized-drafts.md` #30 |
| First email | Top Flow Plumbing | `HM-20-personalized-drafts.md` #35 |

### Fri 2026-12-04 (5)

| Type | Business | Draft |
|---|---|---|
| First email | Red Ladder Roofing | `HM-20-personalized-drafts.md` #38 |
| First email | 423 Roofing and Construction | `HM-20-personalized-drafts.md` #39 |
| Follow-up | Kingdom Chiropractic | `followups-10.md (HM-24)` #1 |
| Follow-up | Prestonbrook Dental | `followups-10.md (HM-24)` #2 |
| Follow-up | Hush MedSpa | `followups-10.md (HM-24)` #3 |

### Mon 2026-12-07 (5)

| Type | Business | Draft |
|---|---|---|
| Result (email) | MC-01 Creekview Family Dentistry | `missed-call/followup-template.md` |
| Result (email) | MC-04 Wakefield Family & Cosmetic Dentistry | `missed-call/followup-template.md` |
| Result (email) | MC-05 Boutique Medspa | `missed-call/followup-template.md` |
| Result (email) | MC-06 Abundant Living Health & Wellness | `missed-call/followup-template.md` |
| Result (email) | MC-10 Lomonaco Family Chiropractic | `missed-call/followup-template.md` |

### Tue 2026-12-08 (5)

| Type | Business | Draft |
|---|---|---|
| Result (email) | MC-11 Village Chiropractic Center & Medical Massage Rx | `missed-call/followup-template.md` |
| Result (email) | MC-13 Triumph Physical Therapy & Wellness Center | `missed-call/followup-template.md` |
| Result (email) | MC-14 Josey Lane Dentistry | `missed-call/followup-template.md` |
| Result (email) | MC-20 Physical Therapy Experts | `missed-call/followup-template.md` |
| Result (email) | MC-21 Totality Holistics | `missed-call/followup-template.md` |

### Wed 2026-12-09 (5)

| Type | Business | Draft |
|---|---|---|
| Result (email) | MC-23 Smith Family Dentistry | `missed-call/followup-template.md` |
| Result (email) | MC-24 Emily Cortez Studio & Med Spa | `missed-call/followup-template.md` |
| Result (form) | MC-02 Round Grove Family Dentistry | `missed-call/result-by-form-or-phone.md` |
| Result (form) | MC-03 The Lewisville Dentist | `missed-call/result-by-form-or-phone.md` |
| Result (form) | MC-08 Butler Chiropractic | `missed-call/result-by-form-or-phone.md` |

### Thu 2026-12-10 (5)

| Type | Business | Draft |
|---|---|---|
| Result (form) | MC-09 Foster Chiropractic | `missed-call/result-by-form-or-phone.md` |
| Result (form) | MC-12 Vibrant Life Med Spa | `missed-call/result-by-form-or-phone.md` |
| Result (form) | MC-15 The Hamptons Family & Cosmetic Dentistry | `missed-call/result-by-form-or-phone.md` |
| Result (callback) | MC-07 Bradley Chiropractic | `missed-call/result-by-form-or-phone.md` |
| Result (callback) | MC-16 SuA K-Glow | `missed-call/result-by-form-or-phone.md` |

### Fri 2026-12-11 (4)

| Type | Business | Draft |
|---|---|---|
| Result (callback) | MC-17 Derma Phi Med Spa | `missed-call/result-by-form-or-phone.md` |
| Result (callback) | MC-18 Body Spring Fascia Fitness | `missed-call/result-by-form-or-phone.md` |
| Result (callback) | MC-19 Nm Rehab & Wellness Center | `missed-call/result-by-form-or-phone.md` |
| Result (callback) | MC-22 Ark Dental PC | `missed-call/result-by-form-or-phone.md` |

### Mon 2026-12-14 (5)

| Type | Business | Draft |
|---|---|---|
| Follow-up | Best Neighbor Home Services | `followups-10.md (HM-24)` #4 |
| Follow-up | Burnside Air Conditioning | `followups-10.md (HM-24)` #5 |
| Follow-up | Pounce Plumbing | `followups-10.md (HM-24)` #6 |
| Follow-up | White Tree Chiro | `followups-10.md (HM-24)` #7 |
| Follow-up | The Barber Law Firm | `followups-10.md (HM-24)` #8 |

### Tue 2026-12-15 (5)

| Type | Business | Draft |
|---|---|---|
| Follow-up | ArmorTex | `followups-10.md (HM-24)` #9 |
| Follow-up | Denton Smiles Dentistry | `followups-10.md (HM-24)` #10 |
| Follow-up | Koala-T Heating & Air | `followups-11.md` |
| Follow-up | Prime AC & Heat | `followups-11.md` |
| Follow-up | FlowMo Plumbing | `followups-11.md` |

### Wed 2026-12-16 (5)

| Type | Business | Draft |
|---|---|---|
| First email | INSPINE Wellness | `HM-20-personalized-drafts.md` #6 |
| First email | Flink Family Dentistry | `HM-20-personalized-drafts.md` #16 |
| First email | Pillar Chiropractic | `HM-20-personalized-drafts.md` #17 |
| First email | Renew Family Dentistry | `HM-20-personalized-drafts.md` #22 |
| First email | LV Skin Aesthetics | `HM-20-personalized-drafts.md` #25 |

### Thu 2026-12-17 (5)

| Type | Business | Draft |
|---|---|---|
| First email | AestheticFx | `HM-20-personalized-drafts.md` #26 |
| First email | Grace Chiropractic & Wellness | `HM-20-personalized-drafts.md` #31 |
| First email | The Cooling King LLC | `HM-20-personalized-drafts.md` #36 |
| First email | All Source Plumbing | `HM-20-personalized-drafts.md` #37 |
| Follow-up | Core Chiropractic | `followups-11.md` |

### Fri 2026-12-18 (5)

| Type | Business | Draft |
|---|---|---|
| Follow-up | Lighthouse Chiropractic | `followups-11.md` |
| Follow-up | GT Family Dentistry | `followups-11.md` |
| Follow-up | Forward Health & Wellness | `followups-11.md` |
| Follow-up | White Lotus Dental | `followups-11.md` |
| Follow-up | Elisum Medspa | `followups-11.md` |

### Mon 2026-12-21 (5)

| Type | Business | Draft |
|---|---|---|
| Follow-up | novera Med SPA | `followups-11.md` |
| Follow-up | Flow State Chiropractic | `followups-11.md` |
| Follow-up | Firm Foundation Wellness Center | `followups-11.md` |
| Follow-up | Top Flow Plumbing | `followups-11.md` |
| Follow-up | Red Ladder Roofing | `followups-11.md` |

### Tue 2026-12-22 (5)

| Type | Business | Draft |
|---|---|---|
| Follow-up | 423 Roofing and Construction | `followups-11.md` |
| Follow-up | INSPINE Wellness | `followups-11.md` |
| Follow-up | Flink Family Dentistry | `followups-11.md` |
| Follow-up | Pillar Chiropractic | `followups-11.md` |
| Follow-up | Renew Family Dentistry | `followups-11.md` |

### Wed 2026-12-23 (5)

| Type | Business | Draft |
|---|---|---|
| Follow-up | LV Skin Aesthetics | `followups-11.md` |
| Follow-up | AestheticFx | `followups-11.md` |
| Follow-up | Grace Chiropractic & Wellness | `followups-11.md` |
| Follow-up | The Cooling King LLC | `followups-11.md` |
| Follow-up | All Source Plumbing | `followups-11.md` |

### Mon 2026-12-28 (5)

| Type | Business | Draft |
|---|---|---|
| First email | Berger Dental | `drafts-8.md` #1 |
| First email | Favero Family Dental | `drafts-8.md` #5 |
| First email | NTX Aesthetics Medical Spa | `drafts-8.md` #7 |
| First email | Composure Aesthetics | `drafts-8.md` #8 |
| First email | Embodiment Spa Fusion | `drafts-8.md` #13 |

### Tue 2026-12-29 (5)

| Type | Business | Draft |
|---|---|---|
| First email | Little Smiles Dentistry | `drafts-8.md` #14 |
| First email | Leatherwood Family & Cosmetic Dentistry | `drafts-8.md` #3 |
| First email | Denton Chiropractic Center | `drafts-8.md` #12 |
| First email | Denton Dental Care | `drafts-8.md` #4 |
| First email | Medford Chiropractic | `drafts-8.md` #9 |

### Wed 2026-12-30 (5)

| Type | Business | Draft |
|---|---|---|
| First email | Six One Clinic | `drafts-8.md` #15 |
| First email | Vanilla Family Dentistry | `drafts-8.md` #2 |
| First email | Ma'Belle Med Spa | `drafts-8.md` #6 |
| First email | Sunshine Family Chiropractic | `drafts-8.md` #10 |
| First email | Burgess Chiropractic | `drafts-8.md` #11 |

### Mon 2027-01-04 (1)

| Type | Business | Draft |
|---|---|---|
| First email | Rooted Chiropractic & Wellness Center | `drafts-8.md` #16 |

### Tue 2027-01-05 (5)

| Type | Business | Draft |
|---|---|---|
| Follow-up | Berger Dental | `followups-13.md` |
| Follow-up | Favero Family Dental | `followups-13.md` |
| Follow-up | NTX Aesthetics Medical Spa | `followups-13.md` |
| Follow-up | Composure Aesthetics | `followups-13.md` |
| Follow-up | Embodiment Spa Fusion | `followups-13.md` |

### Wed 2027-01-06 (5)

| Type | Business | Draft |
|---|---|---|
| Follow-up | Little Smiles Dentistry | `followups-13.md` |
| Follow-up | Leatherwood Family & Cosmetic Dentistry | `followups-13.md` |
| Follow-up | Denton Chiropractic Center | `followups-13.md` |
| Follow-up | Denton Dental Care | `followups-13.md` |
| Follow-up | Medford Chiropractic | `followups-13.md` |

### Thu 2027-01-07 (5)

| Type | Business | Draft |
|---|---|---|
| Follow-up | Six One Clinic | `followups-13.md` |
| Follow-up | Vanilla Family Dentistry | `followups-13.md` |
| Follow-up | Ma'Belle Med Spa | `followups-13.md` |
| Follow-up | Sunshine Family Chiropractic | `followups-13.md` |
| Follow-up | Burgess Chiropractic | `followups-13.md` |

### Fri 2027-01-08 (1)

| Type | Business | Draft |
|---|---|---|
| Follow-up | Rooted Chiropractic & Wellness Center | `followups-13.md` |

## Summary

- One view of every planned send. Plan A: 97 sends to Wed 2026-12-30. Plan B adds 24 result contacts on 12-07 to 12-11 and moves the rest 5 business days, to Fri 2027-01-08.
- No day over 5 in either plan, no weekend or holiday sends.
- Jilsha decides which plan by Thu 2026-12-03 (the $49 go plus a payment link or invoice).

DONE
