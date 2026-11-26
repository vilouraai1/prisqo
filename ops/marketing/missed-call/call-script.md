# Disclosed test-call script (HM-02)

Rules: disclose who you are and why on every call that a person answers. Don't record. Don't book an appointment. Don't give or ask for any patient information. Leave no voicemail. Hang up after about 6 rings or at the greeting. One question only. Log the call within a minute.

**If someone answers:**
> "Hi, this is Jilsha with VilouraAI here in Lewisville. I'm checking how local offices handle new-patient calls this week, so no appointment needed. Quick question: are you taking new patients, and roughly how soon is the first opening?"

Then: "That's all I needed, thank you!"

**If they ask why:**
> "I help local practices catch calls they'd otherwise miss. I'm not selling anything on this call."

**Log** (`call-log-template.csv`):
- result: `answered`, `voicemail`, `no-answer`, `ivr-menu`, `busy` or `disconnected`
- rings or seconds before an answer
- whether the voicemail greeting gives hours and another way to reach them (`yes`, `partial`, `no`)
- callback time if they call back
- the new-patient answer in a few words
