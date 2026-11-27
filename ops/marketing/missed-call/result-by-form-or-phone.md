# Giving results to practices with no usable email (HM-32)

**Drafts only. Nothing has been sent.** Jilsha submits every form and makes every call herself. Hark sends nothing, submits nothing and calls no one.

`missed-call-test.csv` now has `result_channel` and `form_url`, checked on each practice's own site on 2026-11-27:
- **email (12):** use `followup-template.md`.
- **form (6):** MC-02, MC-03, MC-08, MC-09, MC-12, MC-15. Use the form text below, at the `form_url`.
- **callback (6):** MC-07, MC-16, MC-17, MC-18, MC-19, MC-22. Use the phone script below.

Do this only after all 3 test calls are logged for that practice, and only after Jilsha's $49 go (PR #47). Results go out on the same day as the email results (Fri 2026-12-04 or later), and count toward the 5-a-day limit.

## Form text (paste into the message box)
Name: Jilsha Jose. Email: vilouraai@gmail.com. Leave phone blank unless the form requires it.
```
Hi, I'm Jilsha with VilouraAI in Lewisville. This week I called [Practice] three times as a new patient would: [day/time 1: result], [day/time 2: result], [day/time 3: result]. Happy to send the full write-up (calls, voicemail, reviews, what AI tools say, and 3 cheap fixes) for $49. Want it? If not, no reply needed, and I won't follow up.
```
- No link. If the form has a character limit, cut the parenthesis first.
- Log it in `sent-log.md` as "form" with the date and time.

## Phone script (call once, mid-morning, not at lunch)
> "Hi, this is Jilsha with VilouraAI in Lewisville. I called earlier this week to check how new-patient calls get handled, and I said so at the time. Is the office manager around for 30 seconds?"

If yes:
> "Of my three calls, [result summary, e.g. 'two went to voicemail, at lunch and after close']. I can send a full write-up for $49, with the 3 cheapest fixes. Want me to send it, and what's the best email?"

- If they say no: "No problem, thanks for your time." Then log it as do-not-contact.
- If you get voicemail: leave no message. Try once more on another day, then stop.
- Never pressure. No patient details, and no recording.
- Log the outcome in `sent-log.md` as "callback".
