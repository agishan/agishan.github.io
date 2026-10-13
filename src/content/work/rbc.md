---
company: "RBC"
role: "Data Scientist Intern, Internal Audit"
when: "Sep–Dec 2023"
where: "Toronto, ON"
summary: "OCR and NLP automation for internal audit: 97% less audit time, 120 hours/year of reporting removed."
tools: ["Python", "Tesseract OCR", "Oracle SQL", "NLP"]
order: 5
todo: "Check the story sounds like you. Which embedding model did RBC-03 use?"
---

## The job

Internal Audit checks the bank's own controls, under regulatory scrutiny where every finding has to be traceable. The audit work I joined ran on manual screenshot comparisons, free-text process names typed differently by everyone, and VBA-era reports. My job was to make it reproducible.

## What I did

- **Screenshots into data.** I built a Tesseract OCR pipeline that turns terminal screenshots into tables, validates them automatically against Oracle SQL, and writes discrepancy reports for auditors. Audit time dropped by **97%**.
- **One name per process.** I used embeddings and agglomerative clustering to standardize **7,000+** user-entered process names into one taxonomy, which made the rest of the automation possible.
- **Retired the VBA.** I rewrote the audit QA reporting from VBA as SQL scripts, removing **120 hours** of reporting a year.
- **Complaint routing.** During a period of heightened regulatory scrutiny, I built a clustering and neural-network classifier to sort and route incoming customer complaints.

## What mattered

In a regulated place, automation only counts if an auditor can trace it. Every step had to leave a record a human could check. The 97% came from the OCR, but the clustering work was what made it possible.
