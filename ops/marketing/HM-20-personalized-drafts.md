# HM-20: verified, personalized first emails (UNSENT)

**UNSENT DRAFTS. Nothing here has been sent.** Built 2026-11-23 (America/Chicago) by Hark for Jilsha to review and send herself from vilouraai@gmail.com. No form filled, nothing posted, no one called.

Leads: the 30 in `ops/leads/variant-a-2.csv` (PR #60) plus HM-11 #6–15 (`ops/marketing/drafts-variant-a-1.md`). Verification and sources: `ops/leads/verified-leads-2026-11-24.csv`.

## Rules applied

- **Email:** fetched the business's own site on 2026-11-23 and confirmed the exact address appears on the page given as `email_source_url`. No pattern guesses. Google Maps listings weren't used (they need a browser and every address was already on the site). Result: 39 VERIFIED, 1 UNVERIFIED (Dr. Joel Miller, DC; the site now redirects to another brand). The unverified lead isn't drafted.
- **Name:** only when the business's own site names the owner or doctor. The source page is in `name_source_url`. Two first names come only from the email address or an on-site review (Felix, George) and are marked "role unconfirmed". If you'd rather not guess the role, use "Hi there" for those two.
- **Detail:** one fact per business, copied from its own site (services, years, credentials, team, or an on-site Google review). The page is in `detail_source_url`. Nothing is inferred beyond what the page says.
- **Format:** opens with the detail, then the dated Gemini fact from `data/ai-answers.json` (2026-11-13). 25–45 words from greeting to question. No link, no price, one question, opt-out line, footer exactly `VilouraAI, 357 E Corporate Dr, Lewisville, TX`.
- **Exclusions:** no address is on `do-not-email.md`, and no business is in the Gemini list for its city and category.

## Before sending

- HM-11 #6–15 are the same 10 contacts as the unsent HM-11 drafts. **Send only one version per contact: this one replaces HM-11 #6–15.** HM-11 #1–5 are unchanged.
- EXP-H1 (HM-14) counts any Variant A first email. A personal opener is a small change, so log these as "Variant A + detail" in sent-log to keep the read clean.
- Max 5 a day, 8–10 AM CT, plain text. First check Spam/All Mail and send one test copy to an inbox you own.
- If they reply yes, send the saved names exactly as written (listed under each draft). Say it's one AI on one day, not a ranking.

## Drafts

### 1. HillCrest Dental, dentist, Lewisville, TX (smile@hillcrestdentaltx.com)

- Email source: https://hillcrestdentaltx.com/ (seen 2026-11-23)
- Owner/greeting: Dr. Namrata Shah, DDS (https://hillcrestdentaltx.com/)
- Detail: Castle Hills family practice with a periodontist (Dr. Fallah) on the team, from https://hillcrestdentaltx.com/about/
- AI source: Gemini, "best dentist in Lewisville, TX", checked 2026-11-13, named 4: Sehnert Precision Dentistry; Capehart Dental of Lewisville; SolidSMILES Dental; Round Grove Family Dentistry
- Body words (greeting to question): 43

```
To: smile@hillcrestdentaltx.com
Subject: best dentist in Lewisville

Hi Dr. Shah,

I saw Hillcrest has a periodontist on the team at Castle Hills. On Nov 13, 2026 I asked Google's Gemini for the best dentist in Lewisville. It named four others, not Hillcrest.

Want me to reply with the four names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 2. Castle Lake Dental, dentist, Lewisville, TX (info@castlelakedental.com)

- Email source: https://www.castlelakedental.com/contact (seen 2026-11-23)
- Owner/greeting: Dr. Stephenie Sharp, DDS (https://www.castlelakedental.com/)
- Detail: Lists special needs dentistry and sedation dentistry, from https://www.castlelakedental.com/
- AI source: Gemini, "best dentist in Lewisville, TX", checked 2026-11-13, named 4: Sehnert Precision Dentistry; Capehart Dental of Lewisville; SolidSMILES Dental; Round Grove Family Dentistry
- Body words (greeting to question): 40

```
To: info@castlelakedental.com
Subject: best dentist in Lewisville

Hi Dr. Sharp,

I noticed Castle Lake offers special needs dentistry. On Nov 13, 2026 I asked Google's Gemini for the best dentist in Lewisville. It named four others, not Castle Lake.

Want me to reply with the four names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 3. Hillside Dental, dentist, Lewisville, TX (info@hillsidedentaltx.com)

- Email source: https://hillsidedentaltx.com/ (seen 2026-11-23)
- Owner/greeting: Dr. Jeong Jeon, DDS (https://hillsidedentaltx.com/)
- Detail: Offers patient forms in Korean as well as English, from https://hillsidedentaltx.com/
- AI source: Gemini, "best dentist in Lewisville, TX", checked 2026-11-13, named 4: Sehnert Precision Dentistry; Capehart Dental of Lewisville; SolidSMILES Dental; Round Grove Family Dentistry
- Body words (greeting to question): 44

```
To: info@hillsidedentaltx.com
Subject: best dentist in Lewisville

Hi Dr. Jeon,

I noticed Hillside offers patient forms in Korean as well as English. On Nov 13, 2026 I asked Google's Gemini for the best dentist in Lewisville. It named four others, not Hillside Dental.

Want me to reply with the four names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 4. Jordan Carl DMD, dentist, Lewisville, TX (info@jordancarl.com)

- Email source: https://www.jordancarl.com/ (seen 2026-11-23)
- Owner/greeting: Dr. Jordan Carl, DMD (https://www.jordancarl.com/)
- Detail: Dr. Carl is a third-generation dentist running a locally owned private practice, from https://www.jordancarl.com/
- AI source: Gemini, "best dentist in Lewisville, TX", checked 2026-11-13, named 4: Sehnert Precision Dentistry; Capehart Dental of Lewisville; SolidSMILES Dental; Round Grove Family Dentistry
- Body words (greeting to question): 43

```
To: info@jordancarl.com
Subject: best dentist in Lewisville

Hi Dr. Carl,

I read you're a third-generation dentist running your own private practice. On Nov 13, 2026 I asked Google's Gemini for the best dentist in Lewisville. It named four others, not your practice.

Want me to reply with the four names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 5. Adjusted Life Family Chiropractic, chiropractor, Lewisville, TX (office@adjustedlifechiropractic.com)

- Email source: https://adjustedlifechiropractic.com/ (seen 2026-11-23)
- Owner/greeting: Dr. Christina Upchurch, DC (https://adjustedlifechiropractic.com/)
- Detail: Webster Technique certified; focuses on pregnancy and pediatric care, from https://adjustedlifechiropractic.com/about-us
- AI source: Gemini, "best chiropractor in Lewisville, TX", checked 2026-11-13, named 5: Atchley Chiropractic Centers (Castle Hills location); Shine Chiropractic; HealthSource Chiropractic of Lewisville; Byroad Chiropractic; Curis Functional Health
- Body words (greeting to question): 44

```
To: office@adjustedlifechiropractic.com
Subject: best chiropractor in Lewisville

Hi Dr. Upchurch,

I saw you're Webster certified and focus on pregnancy and pediatric care. On Nov 13, 2026 I asked Google's Gemini for the best chiropractor in Lewisville. It named five others, not Adjusted Life.

Want me to reply with the five names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 6. INSPINE Wellness, chiropractor, Lewisville, TX (info@inspinewellness.com)

- Email source: https://inspinewellness.com/ (seen 2026-11-23)
- Owner/greeting: Dr. Chin Suk Cho, DC (https://inspinewellness.com/about)
- Detail: Offers diagnostic musculoskeletal ultrasound; Dr. Cho teaches imaging at Parker University, from https://inspinewellness.com/about
- AI source: Gemini, "best chiropractor in Lewisville, TX", checked 2026-11-13, named 5: Atchley Chiropractic Centers (Castle Hills location); Shine Chiropractic; HealthSource Chiropractic of Lewisville; Byroad Chiropractic; Curis Functional Health
- Body words (greeting to question): 45

```
To: info@inspinewellness.com
Subject: best chiropractor in Lewisville

Hi Dr. Cho,

I saw INSPINE offers diagnostic MSK ultrasound, and that you teach imaging at Parker. On Nov 13, 2026 I asked Google's Gemini for the best chiropractor in Lewisville. It named five others, not INSPINE.

Want me to reply with the five names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 7. Koala-T Heating & Air, HVAC company, Lewisville, TX (nathan@callkhs.com)

- Email source: https://www.callkhs.com/ (seen 2026-11-23)
- Owner/greeting: Nathan Reeves (founder) (https://www.callkhs.com/)
- Detail: Founded in 2024 in Lewisville by Nathan Reeves after 15 years in HVAC, from https://www.callkhs.com/about
- AI source: Gemini, "best hvac in Lewisville, TX", checked 2026-11-13, named 6: Advent Air Conditioning; Colony Air Conditioning & Heating; Southern Comfort Mechanical; Aire Serv of Flower Mound / Lewisville; Lex Air Conditioning, Heating, Plumbing & Electrical; Northside Air Conditioning
- Body words (greeting to question): 44

```
To: nathan@callkhs.com
Subject: best HVAC company in Lewisville

Hi Nathan,

I read you started Koala-T in 2024 after 15 years in the trade. On Nov 13, 2026 I asked Google's Gemini for the best HVAC company in Lewisville. It named six others, not Koala-T.

Want me to reply with the six names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 8. Prime AC & Heat, HVAC company, Lewisville, TX (service@primeacandheat.com)

- Email source: https://www.primeacandheat.com/ (seen 2026-11-23)
- Owner/greeting: Edith and George Bacallao (owners) (https://www.primeacandheat.com/about-us)
- Detail: Family-owned since April 2014, based in Lewisville, from https://www.primeacandheat.com/
- AI source: Gemini, "best hvac in Lewisville, TX", checked 2026-11-13, named 6: Advent Air Conditioning; Colony Air Conditioning & Heating; Southern Comfort Mechanical; Aire Serv of Flower Mound / Lewisville; Lex Air Conditioning, Heating, Plumbing & Electrical; Northside Air Conditioning
- Body words (greeting to question): 44

```
To: service@primeacandheat.com
Subject: best HVAC company in Lewisville

Hi Edith and George,

I saw Prime has been family-owned in Lewisville since April 2014. On Nov 13, 2026 I asked Google's Gemini for the best HVAC company in Lewisville. It named six others, not Prime.

Want me to reply with the six names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 9. Advantage Air Solutions, HVAC company, Lewisville, TX (administration@advantageairsolutions.com)

- Email source: https://advantageairsolutions.com/contact/ (seen 2026-11-23)
- Owner/greeting: Glen McDonald (owner) (https://advantageairsolutions.com/)
- Detail: Over 20 years' experience; does residential and commercial HVAC, from https://advantageairsolutions.com/
- AI source: Gemini, "best hvac in Lewisville, TX", checked 2026-11-13, named 6: Advent Air Conditioning; Colony Air Conditioning & Heating; Southern Comfort Mechanical; Aire Serv of Flower Mound / Lewisville; Lex Air Conditioning, Heating, Plumbing & Electrical; Northside Air Conditioning
- Body words (greeting to question): 45

```
To: administration@advantageairsolutions.com
Subject: best HVAC company in Lewisville

Hi Glen,

I saw Advantage Air has 20+ years in and does commercial work too. On Nov 13, 2026 I asked Google's Gemini for the best HVAC company in Lewisville. It named six others, not Advantage Air.

Want me to reply with the six names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 10. FlowMo Plumbing, plumber, Lewisville, TX (contactus@flowmoplumbing.com)

- Email source: https://flowmoplumbing.com/ (seen 2026-11-23)
- Owner/greeting: not named on site → Hi there
- Detail: Serves Flower Mound, Lewisville, Highland Village and nearby; 'FlowMo approach' of clear answers and work done right the first time, from https://flowmoplumbing.com/
- AI source: Gemini, "best plumber in Lewisville, TX", checked 2026-11-13, named 6: Imperial Plumbing; Master Fix Plumbing; All Metroplex Plumbing; RHD Primary Plumbing; Legacy Plumbing; Berkeys Plumbing
- Body words (greeting to question): 44

```
To: contactus@flowmoplumbing.com
Subject: best plumber in Lewisville

Hi there,

I liked FlowMo's promise of clear answers and work done right the first time. On Nov 13, 2026 I asked Google's Gemini for the best plumber in Lewisville. It named six others, not FlowMo.

Want me to reply with the six names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 11. J Hering Plumbing, plumber, Lewisville, TX (info@jheringplumbing.com)

- Email source: https://jhering.com/ (seen 2026-11-23)
- Owner/greeting: not named on site → Hi there
- Detail: Residential and commercial plumbing since 1983, from https://jhering.com/
- AI source: Gemini, "best plumber in Lewisville, TX", checked 2026-11-13, named 6: Imperial Plumbing; Master Fix Plumbing; All Metroplex Plumbing; RHD Primary Plumbing; Legacy Plumbing; Berkeys Plumbing
- Body words (greeting to question): 44

```
To: info@jheringplumbing.com
Subject: best plumber in Lewisville

Hi there,

I saw J Hering has been plumbing for homes and businesses since 1983. On Nov 13, 2026 I asked Google's Gemini for the best plumber in Lewisville. It named six others, not J Hering.

Want me to reply with the six names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 12. Core Chiropractic, chiropractor, Flower Mound, TX (admin@corechiropractic.org)

- Email source: https://corechiropractic.org/flower-mound-chiropractor-contact-us (seen 2026-11-23)
- Owner/greeting: not named on site → Hi there
- Detail: Family owned, chiropractic plus physical therapy, serving Flower Mound since 2005, from https://corechiropractic.org/flower-mound-chiropractor-contact-us/
- AI source: Gemini, "best chiropractor in Flower Mound, TX", checked 2026-11-13, named 4: FreeForm Chiropractic; Best Life Chiropractic and Wellness Center; New Leaf Chiropractic; Bradley Chiropractic Clinic
- Body words (greeting to question): 45

```
To: admin@corechiropractic.org
Subject: best chiropractor in Flower Mound

Hi there,

I saw Core has offered chiropractic and physical therapy under one roof since 2005. On Nov 13, 2026 I asked Google's Gemini for the best chiropractor in Flower Mound. It named four others, not Core.

Want me to reply with the four names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 13. Lighthouse Chiropractic, chiropractor, Flower Mound, TX (info@lighthousechiropractictx.com)

- Email source: https://www.lighthousechiropractictx.com/contact (seen 2026-11-23)
- Owner/greeting: Dr. Austin Ray, DC (founder) (https://www.lighthousechiropractictx.com/aboutus)
- Detail: Pediatric, prenatal and family care using INSiGHT nervous system scans, from https://www.lighthousechiropractictx.com/
- AI source: Gemini, "best chiropractor in Flower Mound, TX", checked 2026-11-13, named 4: FreeForm Chiropractic; Best Life Chiropractic and Wellness Center; New Leaf Chiropractic; Bradley Chiropractic Clinic
- Body words (greeting to question): 43

```
To: info@lighthousechiropractictx.com
Subject: best chiropractor in Flower Mound

Hi Dr. Ray,

I saw Lighthouse uses INSiGHT scans for pediatric and prenatal care. On Nov 13, 2026 I asked Google's Gemini for the best chiropractor in Flower Mound. It named four others, not Lighthouse.

Want me to reply with the four names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 14. GT Family Dentistry, dentist, Carrollton, TX (info@gtfamilydental.com)

- Email source: https://gtfamilydental.com/appointment/ (seen 2026-11-23)
- Owner/greeting: Dr. Gaurav Tyagi, DDS (https://gtfamilydental.com/)
- Detail: Dr. Tyagi is a trained prosthodontist; family and full-mouth restoration under one roof, from https://gtfamilydental.com/
- AI source: Gemini, "best dentist in Carrollton, TX", checked 2026-11-13, named 4: Carrollton Smiles; Carrollton Dentistry (Carrollton Dental Group); Celebration Family Dental of Carrollton; Marc Dandois DDS
- Body words (greeting to question): 42

```
To: info@gtfamilydental.com
Subject: best dentist in Carrollton

Hi Dr. Tyagi,

I saw a prosthodontist leads GT Family, which is rare. On Nov 13, 2026 I asked Google's Gemini for the best dentist in Carrollton. It named four others, not GT Family.

Want me to reply with the four names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 15. Rosemeade Dental, dentist, Carrollton, TX (info@rosemeadedental.com)

- Email source: https://www.rosemeadedental.com/ (seen 2026-11-23)
- Owner/greeting: Dr. Tarangini Suggala, DMD (https://www.rosemeadedental.com/)
- Detail: Positions itself as a one-stop shop for dental needs near Trinity Mills, from https://www.rosemeadedental.com/
- AI source: Gemini, "best dentist in Carrollton, TX", checked 2026-11-13, named 4: Carrollton Smiles; Carrollton Dentistry (Carrollton Dental Group); Celebration Family Dental of Carrollton; Marc Dandois DDS
- Body words (greeting to question): 45

```
To: info@rosemeadedental.com
Subject: best dentist in Carrollton

Hi Dr. Suggala,

I saw Rosemeade aims to be a one-stop shop for patients near Trinity Mills. On Nov 13, 2026 I asked Google's Gemini for the best dentist in Carrollton. It named four others, not Rosemeade.

Want me to reply with the four names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 16. Flink Family Dentistry, dentist, Carrollton, TX (info@flinkfamilydentistry.com)

- Email source: https://www.flinkfamilydentistry.com/ (seen 2026-11-23)
- Owner/greeting: Dr. Zachary Flink, DDS (https://www.flinkfamilydentistry.com/meet-dr-flink/)
- Detail: Offers same-day crowns, from https://www.flinkfamilydentistry.com/
- AI source: Gemini, "best dentist in Carrollton, TX", checked 2026-11-13, named 4: Carrollton Smiles; Carrollton Dentistry (Carrollton Dental Group); Celebration Family Dental of Carrollton; Marc Dandois DDS
- Body words (greeting to question): 39

```
To: info@flinkfamilydentistry.com
Subject: best dentist in Carrollton

Hi Dr. Flink,

I saw Flink Family does same-day crowns. On Nov 13, 2026 I asked Google's Gemini for the best dentist in Carrollton. It named four others, not Flink Family.

Want me to reply with the four names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 17. Pillar Chiropractic, chiropractor, Carrollton, TX (drrankin@pillarchirotx.com)

- Email source: https://pillarchirotx.com/ (seen 2026-11-23)
- Owner/greeting: Dr. Chad Rankin, DC (https://pillarchirotx.com/about/)
- Detail: 15+ years of clinical experience treating families, athletes, veterans and first responders, from https://pillarchirotx.com/about/
- AI source: Gemini, "best chiropractor in Carrollton, TX", checked 2026-11-13, named 6: Elevation Spine & Sports Medicine; Texas Spine Center; Weir Family Chiropractic; Carrollton Family Chiropractic; Manfre Chiropractic; Carrollton Spine & Wellness
- Body words (greeting to question): 44

```
To: drrankin@pillarchirotx.com
Subject: best chiropractor in Carrollton

Hi Dr. Rankin,

I read you've treated families, athletes, veterans and first responders for 15+ years. On Nov 13, 2026 I asked Google's Gemini for the best chiropractor in Carrollton. It named six others, not Pillar.

Want me to reply with the six names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 18. Cha Clinic, chiropractor, Carrollton, TX (info@chachiro.com)

- Email source: https://chachiro.com/ (seen 2026-11-23)
- Owner/greeting: Dr. Gun Chung, DC (owner) (https://chachiro.com/)
- Detail: 25+ years of clinical experience; chiropractic and acupuncture with English and Korean phone lines, from https://chachiro.com/about/
- AI source: Gemini, "best chiropractor in Carrollton, TX", checked 2026-11-13, named 6: Elevation Spine & Sports Medicine; Texas Spine Center; Weir Family Chiropractic; Carrollton Family Chiropractic; Manfre Chiropractic; Carrollton Spine & Wellness
- Body words (greeting to question): 40

```
To: info@chachiro.com
Subject: best chiropractor in Carrollton

Hi Dr. Chung,

I saw CHA Clinic pairs chiropractic with acupuncture. On Nov 13, 2026 I asked Google's Gemini for the best chiropractor in Carrollton. It named six others, not CHA Clinic.

Want me to reply with the six names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 19. Premier Health Chiropractic, chiropractor, Carrollton, TX (frontdesk@premierhealthchiropractic.com)

- Email source: https://premierhealthchiropractic.com/ (seen 2026-11-23)
- Owner/greeting: Dr. Khayal (founder & clinical director) (https://www.premierhealthchiropractic.com/)
- Detail: Among the first in the Dallas area to use Ultralign G2 spinal adjusting, from https://www.premierhealthchiropractic.com/
- AI source: Gemini, "best chiropractor in Carrollton, TX", checked 2026-11-13, named 6: Elevation Spine & Sports Medicine; Texas Spine Center; Weir Family Chiropractic; Carrollton Family Chiropractic; Manfre Chiropractic; Carrollton Spine & Wellness
- Body words (greeting to question): 45

```
To: frontdesk@premierhealthchiropractic.com
Subject: best chiropractor in Carrollton

Hi Dr. Khayal,

I read Premier was among the first in Dallas to use Ultralign G2. On Nov 13, 2026 I asked Google's Gemini for the best chiropractor in Carrollton. It named six others, not Premier Health.

Want me to reply with the six names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 20. Forward Health & Wellness, chiropractor, Carrollton, TX (info@forwardhealthwellness.com)

- Email source: https://www.forwardhealthwellness.com/ (seen 2026-11-23)
- Owner/greeting: Dr. Trent Ward, DC (owner) (https://www.forwardhealthwellness.com/about)
- Detail: Sports-focused chiropractic with dry needling, shockwave and rehab, from https://www.forwardhealthwellness.com/
- AI source: Gemini, "best chiropractor in Carrollton, TX", checked 2026-11-13, named 6: Elevation Spine & Sports Medicine; Texas Spine Center; Weir Family Chiropractic; Carrollton Family Chiropractic; Manfre Chiropractic; Carrollton Spine & Wellness
- Body words (greeting to question): 44

```
To: info@forwardhealthwellness.com
Subject: best chiropractor in Carrollton

Hi Dr. Ward,

I saw Forward Health pairs sports chiropractic with dry needling and shockwave. On Nov 13, 2026 I asked Google's Gemini for the best chiropractor in Carrollton. It named six others, not Forward Health.

Want me to reply with the six names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 21. DermaPhi, med spa, Carrollton, TX (info@dermaphius.com)

- Email source: https://dermaphius.com/contact/ (seen 2026-11-23)
- Owner/greeting: not named on site → Hi there
- Detail: On-site Google review highlights Plasonic and Shurink treatments, from https://dermaphius.com/
- AI source: Gemini, "best med spa in Carrollton, TX", checked 2026-11-13, named 5: Original Skin; St. Mary’s Aesthetics & Wellness Center; Modern Line Med Spa; NWME Aesthetics; Charm Laser Skin Center
- Body words (greeting to question): 43

```
To: info@dermaphius.com
Subject: best med spa in Carrollton

Hi there,

I saw a DermaPhi review rave about your Plasonic and Shurink treatments. On Nov 13, 2026 I asked Google's Gemini for the best med spa in Carrollton. It named five others, not DermaPhi.

Want me to reply with the five names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 22. Renew Family Dentistry, dentist, Frisco, TX (smile@renewdentistry.com)

- Email source: https://www.renewdentistry.com/contact/ (seen 2026-11-23)
- Owner/greeting: Dr. Christopher Probst, DMD and Dr. Jiaying Ren, FAGD (https://www.renewdentistry.com/about-us/)
- Detail: Dr. Jiaying Ren earned her FAGD (Fellowship, Academy of General Dentistry), from https://www.renewdentistry.com/about-us/fagd-dentist/
- AI source: Gemini, "best dentist in Frisco, TX", checked 2026-11-13, named 5: Dental Care of Frisco; Smile Lounge; Tribute Family Dentistry; Spectacular Smiles Dental; Frisco Smiles Dentistry
- Body words (greeting to question): 38

```
To: smile@renewdentistry.com
Subject: best dentist in Frisco

Hi Dr. Ren,

I saw Dr. Ren earned her FAGD. On Nov 13, 2026 I asked Google's Gemini for the best dentist in Frisco. It named five others, not Renew.

Want me to reply with the five names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 23. White Lotus Dental, dentist, Frisco, TX (frontoffice@whitelotusdental.com)

- Email source: https://www.whitelotusdental.com/ (seen 2026-11-23)
- Owner/greeting: Dr. Karuna Peravali, DDS (co-founder) (https://www.whitelotusdental.com/)
- Detail: Board-certified periodontist in-house; open Saturdays on Custer Road, from https://www.whitelotusdental.com/
- AI source: Gemini, "best dentist in Frisco, TX", checked 2026-11-13, named 5: Dental Care of Frisco; Smile Lounge; Tribute Family Dentistry; Spectacular Smiles Dental; Frisco Smiles Dentistry
- Body words (greeting to question): 43

```
To: frontoffice@whitelotusdental.com
Subject: best dentist in Frisco

Hi Dr. Peravali,

I saw White Lotus has a periodontist in-house and opens Saturdays. On Nov 13, 2026 I asked Google's Gemini for the best dentist in Frisco. It named five others, not White Lotus.

Want me to reply with the five names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 24. Elisum Medspa, med spa, Frisco, TX (info@elisummedspa.com)

- Email source: https://www.elisummedspa.com/ (seen 2026-11-23)
- Owner/greeting: Elizabeth Elba, BSN, RN (https://www.elisummedspa.com/)
- Detail: Every injectable done personally by an RN with 24+ years of NICU experience, from https://www.elisummedspa.com/services
- AI source: Gemini, "best med spa in Frisco, TX", checked 2026-11-13, named 6: Starwood Med Spa; Hush MedSpa; Geneva Med Spa; Harmoni Health & Beauty; Avanti Skin Center of Willow Bend; Le Beau Visage Medical Spa
- Body words (greeting to question): 44

```
To: info@elisummedspa.com
Subject: best med spa in Frisco

Hi Elizabeth,

I saw you do every Elisum treatment yourself, after 24+ years in NICU. On Nov 13, 2026 I asked Google's Gemini for the best med spa in Frisco. It named six others, not Elisum.

Want me to reply with the six names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 25. LV Skin Aesthetics, med spa, Frisco, TX (lv@lvskinaesthetics.com)

- Email source: https://lvskinaesthetics.com/ (seen 2026-11-23)
- Owner/greeting: Linda Buj (co-founder) (https://lvskinaesthetics.com/)
- Detail: Featured by Voyage Dallas in an entrepreneur spotlight, from https://lvskinaesthetics.com/
- AI source: Gemini, "best med spa in Frisco, TX", checked 2026-11-13, named 6: Starwood Med Spa; Hush MedSpa; Geneva Med Spa; Harmoni Health & Beauty; Avanti Skin Center of Willow Bend; Le Beau Visage Medical Spa
- Body words (greeting to question): 41

```
To: lv@lvskinaesthetics.com
Subject: best med spa in Frisco

Hi Linda,

I saw Voyage Dallas featured you and LV Skin. On Nov 13, 2026 I asked Google's Gemini for the best med spa in Frisco. It named six others, not LV Skin.

Want me to reply with the six names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 26. AestheticFx, med spa, Frisco, TX (info@aestheticfx.com)

- Email source: https://aestheticfx.com/ (seen 2026-11-23)
- Owner/greeting: Beverly Farris (https://aestheticfx.com/)
- Detail: Beverly Farris has practiced medicine full-time since 2006, with a critical care background, from https://aestheticfx.com/about/beverly-farris/
- AI source: Gemini, "best med spa in Frisco, TX", checked 2026-11-13, named 6: Starwood Med Spa; Hush MedSpa; Geneva Med Spa; Harmoni Health & Beauty; Avanti Skin Center of Willow Bend; Le Beau Visage Medical Spa
- Body words (greeting to question): 42

```
To: info@aestheticfx.com
Subject: best med spa in Frisco

Hi Beverly,

I read you've practiced full-time since 2006, starting in critical care. On Nov 13, 2026 I asked Google's Gemini for the best med spa in Frisco. It named six others, not AestheticFx.

Want me to reply with the six names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 27. novera Med SPA, med spa, Frisco, TX (info@noveramedspa.com)

- Email source: https://www.noveramedspa.com/ (seen 2026-11-23)
- Owner/greeting: Dr. Yamuna Gurrapu (board certified, internal and obesity medicine) (https://www.noveramedspa.com/)
- Detail: Physician-led med spa and medical weight loss, board certified in internal and obesity medicine, from https://www.noveramedspa.com/
- AI source: Gemini, "best med spa in Frisco, TX", checked 2026-11-13, named 6: Starwood Med Spa; Hush MedSpa; Geneva Med Spa; Harmoni Health & Beauty; Avanti Skin Center of Willow Bend; Le Beau Visage Medical Spa
- Body words (greeting to question): 45

```
To: info@noveramedspa.com
Subject: best med spa in Frisco

Hi Dr. Gurrapu,

I saw novéra is physician-led, with board certification in obesity medicine. On Nov 13, 2026 I asked Google's Gemini for the best med spa in Frisco. It named six others, not novéra.

Want me to reply with the six names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 28. Lopez Chiropractic Sports & Wellness, chiropractor, Frisco, TX (info@lopezchiro.com)

- Email source: https://www.lopezchiro.com/contact (seen 2026-11-23)
- Owner/greeting: Dr. Michael Lopez, DC (https://www.lopezchiro.com/)
- Detail: Helping athletes and active families in Frisco since 2013, from https://www.lopezchiro.com/
- AI source: Gemini, "best chiropractor in Frisco, TX", checked 2026-11-13, named 5: Breakaway Chiropractic & Wellness; FreeForm Chiropractic (Frisco); Global Chiropractic Plano Frisco; Frisco Chiropractic Center; Viva Chiropractic Center
- Body words (greeting to question): 45

```
To: info@lopezchiro.com
Subject: best chiropractor in Frisco

Hi Dr. Lopez,

I saw you've been caring for Frisco athletes and active families since 2013. On Nov 13, 2026 I asked Google's Gemini for the best chiropractor in Frisco. It named five others, not Lopez Chiropractic.

Want me to reply with the five names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 29. Flow State Chiropractic, chiropractor, Frisco, TX (frisco@flowstatechirotx.com)

- Email source: https://flowstatechirotx.com/contact-us/ (seen 2026-11-23)
- Owner/greeting: not named on site → Hi there
- Detail: Frisco and Lewisville offices; doctors certified in whiplash and motor vehicle injuries, from https://flowstatechirotx.com/our-doctors/
- AI source: Gemini, "best chiropractor in Frisco, TX", checked 2026-11-13, named 5: Breakaway Chiropractic & Wellness; FreeForm Chiropractic (Frisco); Global Chiropractic Plano Frisco; Frisco Chiropractic Center; Viva Chiropractic Center
- Body words (greeting to question): 44

```
To: frisco@flowstatechirotx.com
Subject: best chiropractor in Frisco

Hi there,

I saw Flow State's doctors are certified in whiplash and car accident injuries. On Nov 13, 2026 I asked Google's Gemini for the best chiropractor in Frisco. It named five others, not Flow State.

Want me to reply with the five names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 30. Firm Foundation Wellness Center, chiropractor, Keller, TX (drcorey@firmfoundationtx.com)

- Email source: https://www.firmfoundationtx.com/contact (seen 2026-11-23)
- Owner/greeting: Dr. Corey Strunk, DC (https://www.firmfoundationtx.com/)
- Detail: One-on-one care in Old Town Keller, from https://www.firmfoundationtx.com/
- AI source: Gemini, "best chiropractor in Keller, TX", checked 2026-11-13, named 4: Keller Family Chiropractic; Performance Chiropractic Clinic; Thrive Chiropractic; Alpha & Omega Chiropractic
- Body words (greeting to question): 41

```
To: drcorey@firmfoundationtx.com
Subject: best chiropractor in Keller

Hi Dr. Corey,

I liked that every Firm Foundation visit is one-on-one. On Nov 13, 2026 I asked Google's Gemini for the best chiropractor in Keller. It named four others, not Firm Foundation.

Want me to reply with the four names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 31. Grace Chiropractic & Wellness, chiropractor, Grapevine, TX (admin@gracechirotx.com)

- Email source: https://gracechirotx.com/ (seen 2026-11-23)
- Owner/greeting: Dr. Caroline Kirkpatrick, DC (https://gracechirotx.com/)
- Detail: Combines gentle adjustments with functional nutrition, from https://gracechirotx.com/
- AI source: Gemini, "best chiropractor in Grapevine, TX", checked 2026-11-13, named 6: Hands On Health Chiropractic; The Vine Family Chiropractic; Innovate Health; Kreamer Family Chiropractic; The Chiro Co.; Spine Health & Wellness (Grapevine Clinic)
- Body words (greeting to question): 41

```
To: admin@gracechirotx.com
Subject: best chiropractor in Grapevine

Hi Dr. Kirkpatrick,

I saw Grace pairs gentle adjustments with functional nutrition. On Nov 13, 2026 I asked Google's Gemini for the best chiropractor in Grapevine. It named six others, not Grace Chiropractic.

Want me to reply with the six names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 32. Mangum Family Dentistry, dentist, Denton, TX (office@mangumfamilydentistry.com)

- Email source: https://mangumfamilydentistry.com/ (seen 2026-11-23)
- Owner/greeting: Dr. Caleb Mangum, DDS (https://mangumfamilydentistry.com/)
- Detail: Dr. Mangum started as a sterilization technician and worked up to dentist, from https://mangumfamilydentistry.com/about-us/
- AI source: Gemini, "best dentist in Denton, TX", checked 2026-11-13, named 5: Garden Oaks Family & Cosmetic Dentistry; Denton Family Dentistry; MINT dentistry; Ideal Dental of Denton; Denton Modern Dentistry and Orthodontics
- Body words (greeting to question): 44

```
To: office@mangumfamilydentistry.com
Subject: best dentist in Denton

Hi Dr. Mangum,

I read you started as a sterilization tech before becoming a dentist. On Nov 13, 2026 I asked Google's Gemini for the best dentist in Denton. It named five others, not Mangum Family.

Want me to reply with the five names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 33. Susanne Holmgreen D.D.S., dentist, Denton, TX (info@susanneholmgreendds.com)

- Email source: https://www.susanneholmgreendds.com/ (seen 2026-11-23)
- Owner/greeting: Dr. Susanne Holmgreen, DDS (https://www.susanneholmgreendds.com/about-us)
- Detail: 27 years of experience in Denton; Baylor College of Dentistry graduate, from https://www.susanneholmgreendds.com/
- AI source: Gemini, "best dentist in Denton, TX", checked 2026-11-13, named 5: Garden Oaks Family & Cosmetic Dentistry; Denton Family Dentistry; MINT dentistry; Ideal Dental of Denton; Denton Modern Dentistry and Orthodontics
- Body words (greeting to question): 43

```
To: info@susanneholmgreendds.com
Subject: best dentist in Denton

Hi Dr. Holmgreen,

I saw you've been caring for Denton patients for 27 years. On Nov 13, 2026 I asked Google's Gemini for the best dentist in Denton. It named five others, not your practice.

Want me to reply with the five names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 34. Tex Plumbing, plumber, McKinney, TX (felix@texplumbing.com)

- Email source: https://texplumbing.com/ (seen 2026-11-23)
- Owner/greeting: Felix (named in the site's email address only; role unconfirmed) (https://texplumbing.com/)
- Detail: Family owned, licensed and insured since 2019, open 24/7, from https://texplumbing.com/contact/
- AI source: Gemini, "best plumber in McKinney, TX", checked 2026-11-13, named 4: Genzel Plumbing Company; Hackler Plumbing; Baker Brothers Plumbing, Air Conditioning, & Electric; Murley Plumbing
- Body words (greeting to question): 43

```
To: felix@texplumbing.com
Subject: best plumber in McKinney

Hi Felix,

I saw Tex Plumbing is family owned and answers calls 24/7. On Nov 13, 2026 I asked Google's Gemini for the best plumber in McKinney. It named four others, not Tex Plumbing.

Want me to reply with the four names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 35. Top Flow Plumbing, plumber, McKinney, TX (info@topflowplumbing.com)

- Email source: https://topflowplumbing.com/contact-us/ (seen 2026-11-23)
- Owner/greeting: not named on site → Hi there
- Detail: Residential, commercial and multifamily plumbing in McKinney, from https://topflowplumbing.com/
- AI source: Gemini, "best plumber in McKinney, TX", checked 2026-11-13, named 4: Genzel Plumbing Company; Hackler Plumbing; Baker Brothers Plumbing, Air Conditioning, & Electric; Murley Plumbing
- Body words (greeting to question): 42

```
To: info@topflowplumbing.com
Subject: best plumber in McKinney

Hi there,

I saw Top Flow handles multifamily buildings as well as homes. On Nov 13, 2026 I asked Google's Gemini for the best plumber in McKinney. It named four others, not Top Flow.

Want me to reply with the four names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 36. The Cooling King LLC, HVAC company, McKinney, TX (contact@thecoolingking.com)

- Email source: https://thecoolingking.com/ (seen 2026-11-23)
- Owner/greeting: Michael Bradley (owner/operator); Brennen Bradley (owner/office) (https://thecoolingking.com/)
- Detail: Family owned; 30+ years in AC and heating around McKinney, from https://thecoolingking.com/about-us/
- AI source: Gemini, "best hvac in McKinney, TX", checked 2026-11-13, named 3: Bill Joplin's Air Conditioning & Heating; Airview AC; Harris Air Services
- Body words (greeting to question): 44

```
To: contact@thecoolingking.com
Subject: best HVAC company in McKinney

Hi Michael,

I saw The Cooling King is family run, 30+ years in. On Nov 13, 2026 I asked Google's Gemini for the best HVAC company in McKinney. It named three others, not The Cooling King.

Want me to reply with the three names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 37. All Source Plumbing, plumber, Keller, TX (info@allsourceplumbingtx.com)

- Email source: https://allsourcetxplumbing.com/contact-us/ (seen 2026-11-23)
- Owner/greeting: not named on site → Hi there
- Detail: Veteran and family owned, Keller-based, from https://allsourcetxplumbing.com/services/gas-line-installation/
- AI source: Gemini, "best plumber in Keller, TX", checked 2026-11-13, named 5: Big Blade Plumbing & Rooter; Hat Plumbing, Heating and Air; Longhorn Plumbing; Mother Modern Plumbing, Sewer & Drain; Baker Brothers Plumbing, Air & Electric
- Body words (greeting to question): 40

```
To: info@allsourceplumbingtx.com
Subject: best plumber in Keller

Hi there,

I saw All Source is veteran and family owned. On Nov 13, 2026 I asked Google's Gemini for the best plumber in Keller. It named five others, not All Source.

Want me to reply with the five names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 38. Red Ladder Roofing, roofer, Denton, TX (office@redladderroofing.com)

- Email source: https://www.redladderroofing.com/ (seen 2026-11-23)
- Owner/greeting: Ricky Bell (owner) (https://www.redladderroofing.com/)
- Detail: Family and firefighter owned, established 2016, from https://www.redladderroofing.com/
- AI source: Gemini, "best roofer in Denton, TX", checked 2026-11-13, named 5: Over The Top Roofing; Presidio Roofing Company of Denton; Elite Roofing LLC; Denton Trinity Roofing, Inc.; Gillean Brothers Roofing LLC
- Body words (greeting to question): 45

```
To: office@redladderroofing.com
Subject: best roofer in Denton

Hi Ricky,

I saw Red Ladder is family and firefighter owned, roofing North Texas since 2016. On Nov 13, 2026 I asked Google's Gemini for the best roofer in Denton. It named five others, not Red Ladder.

Want me to reply with the five names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 39. 423 Roofing and Construction, roofer, Denton, TX (George@423-roofing.com)

- Email source: https://423-roofing.com/ (seen 2026-11-23)
- Owner/greeting: George (named in email and in an on-site Google review; role unconfirmed) (https://423-roofing.com/)
- Detail: On-site Google review praises George's team for explaining every step and handling insurance, from https://423-roofing.com/
- AI source: Gemini, "best roofer in Denton, TX", checked 2026-11-13, named 5: Over The Top Roofing; Presidio Roofing Company of Denton; Elite Roofing LLC; Denton Trinity Roofing, Inc.; Gillean Brothers Roofing LLC
- Body words (greeting to question): 45

```
To: George@423-roofing.com
Subject: best roofer in Denton

Hi George,

I saw a review thank your team for walking them through the insurance process. On Nov 13, 2026 I asked Google's Gemini for the best roofer in Denton. It named five others, not 423 Roofing.

Want me to reply with the five names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

## Summary

39 personalized, unsent first emails. Each has a verified own-site email, an on-site detail with its URL, and a dated Gemini fact. 1 lead UNVERIFIED and left out. Nothing sent.
