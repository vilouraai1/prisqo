# Leads 8: first-email drafts (DFW, drafted 2026-11-28)

**Drafts only. Nothing has been sent.** Jilsha reviews and sends every email herself. No form was filled and nothing was posted.

- Leads: `ops/marketing/leads-8.csv` (16 rows, same order as below).
- Cities: Denton, Lewisville, Highland Village. Niches: dentist, pediatric dentist, med spa, chiropractor.
- Every email address was read on the business's own website on 2026-11-28 (`email_source_url`). None is guessed. Google Maps, LinkedIn and Reddit were not used, since Hark can't read them.
- Each business, domain and email was checked against everything under `ops/` and `data/` and is new. Black Iris MedSpa, Doctor Slim, Dental Defenders, Dawson Family Dentistry, Elite Body, Triumph PT, Garden Oaks, Aguilar, Mangum and DePalma were dropped as already listed.
- Hooks: `ai_visibility` uses the dated Gemini answers in `data/ai-answers.json` (checked 2026-11-13), only where the business wasn't named and the answer named 4 or more (Variant A, reply-autopsy §5). `weak_site`, `missed_calls` and `seo_gap` quote something seen on the business's own site on 2026-11-28.
- Rules met (script-checked): 25 to 45 words from greeting to question, one question, no link, no price, one business-specific detail, opt-out line, footer "VilouraAI, 357 E Corporate Dr, Lewisville, TX".
- Every domain has an MX record (Cloudflare DNS, 2026-11-28).

## Check before sending

- Free-mail addresses printed on the business's own site: Vanilla Family Dentistry (vanillafamilydentistry@gmail.com); Favero Family Dental (faverofamilydental@gmail.com).
- Email on a different domain from the website: Vanilla Family Dentistry (vanillafamilydentistry@gmail.com, site www.vanillafamilydentistry.com); Favero Family Dental (faverofamilydental@gmail.com, site www.faverofamilydental.com); Sunshine Family Chiropractic (info@sunshinefamilychiro.com, site sunshinefamilychiropractic.com). All appear on the business's own site.
- Denton Dental Care's address is marketing@, the only one on its site.
- Ma'Belle is named in the Gemini answer, so its email leads with that and uses the site footer as the hook (Variant B style).
- AI answers change run to run. The emails quote one dated check, not a live ranking.
- Send under the existing limits: at most 5 a day, weekdays 8 to 10 AM Central, after the queued send calendar.

---

### 1. Berger Dental, dentist, Denton, TX (bergerdental@bergerdental.com)

- Email source: https://bergerdental.com/contact (seen 2026-11-28)
- Hook: ai_visibility
- Detail: Privately owned and independent at 1010 N Elm St since 1998 (Dr. Shane Berger) (https://bergerdental.com/, seen 2026-11-28)
- AI source: Gemini, "best dentist in Denton, TX", checked 2026-11-13, named 5: Garden Oaks Family & Cosmetic Dentistry; Denton Family Dentistry; MINT dentistry; Ideal Dental of Denton; Denton Modern Dentistry and Orthodontics
- Body words (greeting to question): 43

```
To: bergerdental@bergerdental.com
Subject: best dentist in Denton

Hi Dr. Berger,

I saw Berger Dental has stayed independent in Denton since 1998. On Nov 13, 2026 I asked Google's Gemini for the best dentist in Denton. It named five others, not Berger Dental.

Want me to reply with the five names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 2. Vanilla Family Dentistry, dentist, Denton, TX (vanillafamilydentistry@gmail.com)

- Email source: https://www.vanillafamilydentistry.com/ (seen 2026-11-28)
- Hook: weak_site
- Detail: Homepage office-hours section shows the template error "No Locations settings found. Please configure it" (https://www.vanillafamilydentistry.com/, seen 2026-11-28)
- Body words (greeting to question): 38

```
To: vanillafamilydentistry@gmail.com
Subject: quick note on Vanilla Family Dentistry's site

Hi Dr. Lan,

Under the office hours on your homepage, the site shows "No Locations settings found. Please configure it." Anyone checking your hours sees that line too.

Want me to send a screenshot of where it shows?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 3. Leatherwood Family & Cosmetic Dentistry, dentist, Denton, TX (smile@leatherwooddental.com)

- Email source: https://leatherwooddental.com/ (seen 2026-11-28)
- Hook: missed_calls
- Detail: Site lists the office closed Fridays and Thursdays ending at 3:00 PM; banner says the website is getting work done (https://leatherwooddental.com/, seen 2026-11-28)
- Body words (greeting to question): 44

```
To: smile@leatherwooddental.com
Subject: calls to Leatherwood Family & Cosmetic Dentistry

Hi Leatherwood team,

I saw your site lists the office as closed on Fridays, with Thursdays ending at 3 PM. That leaves a long stretch when new patients can't reach the front desk.

When someone calls on a Friday, does anyone call them back?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 4. Denton Dental Care, dentist, Denton, TX (marketing@mydentondental.com)

- Email source: https://mydentondental.com/ (seen 2026-11-28)
- Hook: seo_gap
- Detail: Homepage names the practice two ways in one block: "Welcome to Denton Family Dental Clinic" then "Denton Dental Care has faithfully served" (https://mydentondental.com/, seen 2026-11-28)
- Body words (greeting to question): 45

```
To: marketing@mydentondental.com
Subject: quick note on Denton Dental Care's site

Hi Dr. Rekhi,

Your homepage welcomes visitors to "Denton Family Dental Clinic," then the next line calls the practice "Denton Dental Care." Google and AI assistants can treat mixed names like that as two different businesses.

Want me to show you where else it varies?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 5. Favero Family Dental, dentist, Denton, TX (faverofamilydental@gmail.com)

- Email source: https://www.faverofamilydental.com/ (seen 2026-11-28)
- Hook: ai_visibility
- Detail: Led by Drs. Khourschid Favero and Stephen Blake Favero, 3201 Teasley Lane (https://www.faverofamilydental.com/, seen 2026-11-28)
- AI source: Gemini, "best dentist in Denton, TX", checked 2026-11-13, named 5: Garden Oaks Family & Cosmetic Dentistry; Denton Family Dentistry; MINT dentistry; Ideal Dental of Denton; Denton Modern Dentistry and Orthodontics
- Body words (greeting to question): 44

```
To: faverofamilydental@gmail.com
Subject: best dentist in Denton

Hi Dr. Favero,

I saw you and Dr. Blake Favero lead the practice together. On Nov 13, 2026 I asked Google's Gemini for the best dentist in Denton. It named five others, not Favero Family Dental.

Want me to reply with the five names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 6. Ma'Belle Med Spa, med-spa, Denton, TX (denton@mabellemedspa.com)

- Email source: https://www.mabellemedspa.com/ (seen 2026-11-28)
- Hook: weak_site
- Detail: Named in the Gemini answer; site footer still reads "©2023 All Right Reserved" (https://www.mabellemedspa.com/, seen 2026-11-28)
- Body words (greeting to question): 43

```
To: denton@mabellemedspa.com
Subject: quick note on Ma'Belle Med Spa's site

Hi Ma'Belle team,

Good news first: Google's Gemini named Ma'Belle when I asked for the best med spa in Denton on Nov 13, 2026. Your site footer still reads ©2023, though, which can make the site look unattended.

Want a screenshot of it?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 7. NTX Aesthetics Medical Spa, med-spa, Denton, TX (info@ntxmedspa.com)

- Email source: https://ntxmedspa.com/ (seen 2026-11-28)
- Hook: ai_visibility
- Detail: Site says the office follows Denton ISD weather closures (https://www.ntxmedspa.com/, seen 2026-11-28)
- AI source: Gemini, "best med spa in Denton, TX", checked 2026-11-13, named 5: Serenity Med Spa (at North Texas Breast & Plastic Surgery Center); The Filling Station Med Spa; Beleza MedSpa; Ma’Belle Med Spa; Lisa Rux Medical Aesthetician
- Body words (greeting to question): 43

```
To: info@ntxmedspa.com
Subject: best med spa in Denton

Hi NTX team,

I saw NTX closes whenever Denton ISD does for weather. On Nov 13, 2026 I asked Google's Gemini for the best med spa in Denton. It named five others, not NTX Aesthetics.

Want me to reply with the five names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 8. Composure Aesthetics, med-spa, Denton, TX (info@composuredfw.com)

- Email source: https://www.composuredfw.com/ (seen 2026-11-28)
- Hook: ai_visibility
- Detail: 220 E Sycamore St; hours list Wednesday and Saturday as monthly (https://www.composuredfw.com/, seen 2026-11-28)
- AI source: Gemini, "best med spa in Denton, TX", checked 2026-11-13, named 5: Serenity Med Spa (at North Texas Breast & Plastic Surgery Center); The Filling Station Med Spa; Beleza MedSpa; Ma’Belle Med Spa; Lisa Rux Medical Aesthetician
- Body words (greeting to question): 41

```
To: info@composuredfw.com
Subject: best med spa in Denton

Hi Composure team,

I saw Composure opens some Saturdays monthly on Sycamore. On Nov 13, 2026 I asked Google's Gemini for the best med spa in Denton. It named five others, not Composure.

Want me to reply with the five names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 9. Medford Chiropractic, chiropractor, Denton, TX (info@medfordchirotx.com)

- Email source: https://medfordchirotx.com/ (seen 2026-11-28)
- Hook: seo_gap
- Detail: Homepage title tag is "Life is Happier When You're Aligned - Medford Chiropractic" (no city or service); site says "2019 & 2024 Best Denton Chiropractor" (https://medfordchirotx.com/, seen 2026-11-28)
- Body words (greeting to question): 43

```
To: info@medfordchirotx.com
Subject: quick note on Medford Chiropractic's site

Hi Dr. Medford,

Your homepage title reads "Life is Happier When You're Aligned," with no "Denton" or "chiropractor" in it, even though you were voted Best Denton Chiropractor in 2019 and 2024. Search engines lean on that title.

Want me to suggest one?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 10. Sunshine Family Chiropractic, chiropractor, Denton, TX (info@sunshinefamilychiro.com)

- Email source: https://sunshinefamilychiropractic.com/ (seen 2026-11-28)
- Hook: weak_site
- Detail: Prenatal, pediatric and family care for Krum and Denton; footer reads "Copyright © 2025" (https://sunshinefamilychiropractic.com/, seen 2026-11-28)
- Body words (greeting to question): 38

```
To: info@sunshinefamilychiro.com
Subject: quick note on Sunshine Family Chiropractic's site

Hi Dr. Katelyn,

I like that Sunshine cares for families in Krum and Denton from pregnancy on. Your site footer still reads Copyright © 2025, though, which can make the site look unattended.

Want a screenshot of it?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 11. Burgess Chiropractic, chiropractor, Denton, TX (frontdesk@burgesschiro.com)

- Email source: https://www.burgesschiro.com/ (seen 2026-11-28)
- Hook: weak_site
- Detail: Dr. Charlotte Burgess and Dr. Jennifer Davis; footer reads "© 2025 by Burgess Chiropractic" (https://www.burgesschiro.com/, seen 2026-11-28)
- Body words (greeting to question): 37

```
To: frontdesk@burgesschiro.com
Subject: quick note on Burgess Chiropractic's site

Hi Dr. Burgess,

I saw you and Dr. Jennifer Davis on the Burgess Chiropractic site. The footer still reads © 2025, though, which can make a site look unattended to new patients.

Want a screenshot of it?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 12. Denton Chiropractic Center, chiropractor, Denton, TX (info@dentonchiro.com)

- Email source: https://www.dentonchiro.com/ (seen 2026-11-28)
- Hook: missed_calls
- Detail: Hours Mon-Fri 7:00 am-1:00 pm and 3:00 pm-9:00 pm (closed 1-3 pm); serving Denton since 1978 (https://www.dentonchiro.com/, seen 2026-11-28)
- Body words (greeting to question): 38

```
To: info@dentonchiro.com
Subject: calls to Denton Chiropractic Center

Hi Dr. Noell,

I saw Denton Chiropractic Center stays open until 9 PM but closes from 1 to 3 every weekday. New patients often call at lunch.

When someone calls during that gap, does anyone call them back?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 13. Embodiment Spa Fusion, med-spa, Lewisville, TX (info@embodimentspafusion.com)

- Email source: https://www.embodimentspafusion.com/ (seen 2026-11-28)
- Hook: ai_visibility
- Detail: Founder Kristen; site says lymphatic principles are woven into every service (https://www.embodimentspafusion.com/, seen 2026-11-28)
- AI source: Gemini, "best med spa in Lewisville, TX", checked 2026-11-13, named 4: Boutique MedSpa (MD Skin and Laser); Doctor Slim Med Spa; ROOT Med Spa; Stuart Lipton, MD (Medical Spa Services)
- Body words (greeting to question): 40

```
To: info@embodimentspafusion.com
Subject: best med spa in Lewisville

Hi Kristen,

I saw Embodiment builds lymphatic work into every service. On Nov 13, 2026 I asked Google's Gemini for the best med spa in Lewisville. It named four others, not Embodiment.

Want me to reply with the four names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 14. Little Smiles Dentistry, pediatric-dentist, Lewisville, TX (info@littlesmileslewisville.com)

- Email source: https://www.littlesmileslewisville.com/ (seen 2026-11-28)
- Hook: ai_visibility
- Detail: 967 N Garden Ridge Blvd; "Dental care for the whole family" (https://www.littlesmileslewisville.com/, seen 2026-11-28)
- AI source: Gemini, "best pediatric dentist in Lewisville, TX", checked 2026-11-13, named 4: Smile Magic Family Dental; Burst Dental + Kids (Nearby in Carrollton); Hillside Dental; KidSmiles Dental & Orthodontics (Nearby in Flower Mound)
- Body words (greeting to question): 44

```
To: info@littlesmileslewisville.com
Subject: best pediatric dentist in Lewisville

Hi Little Smiles team,

I saw Little Smiles treats whole families on Garden Ridge. On Nov 13, 2026 I asked Google's Gemini for the best pediatric dentist in Lewisville. It named four others, not Little Smiles.

Want me to reply with the four names?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 15. Six One Clinic, chiropractor, Highland Village, TX (frontdesk@sixoneclinic.com)

- Email source: https://sixoneclinic.com/ (seen 2026-11-28)
- Hook: seo_gap
- Detail: "New Name, New Location" (2300 Highland Village Rd, Suite 120); footer still reads "© 2024—The Burnley Clinic, LLC" (https://sixoneclinic.com/, seen 2026-11-28)
- Body words (greeting to question): 44

```
To: frontdesk@sixoneclinic.com
Subject: quick note on Six One Clinic's site

Hi Dr. Burnley,

I saw the clinic's new name and the move to Suite 120. Your site footer still reads © 2024 The Burnley Clinic, and old names can split how Google lists you.

Want me to check where the old name still shows?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```

### 16. Rooted Chiropractic & Wellness Center, chiropractor, Highland Village, TX (contactus@therootedchirotx.com)

- Email source: https://www.therootedchirotx.com/ (seen 2026-11-28)
- Hook: weak_site
- Detail: Homepage footer address links to info@mysite.com (template placeholder); about page URL is /copy-of-about-us-1 (https://www.therootedchirotx.com/, seen 2026-11-28)
- Body words (greeting to question): 33

```
To: contactus@therootedchirotx.com
Subject: quick note on Rooted Chiropractic & Wellness Center's site

Hi Rooted team,

On your homepage, the address in the footer links to info@mysite.com, a leftover template address, so anyone who taps it won't reach you.

Want a screenshot of where it is?

Reply "no" and I won't email again.
Jilsha
VilouraAI, 357 E Corporate Dr, Lewisville, TX
```
