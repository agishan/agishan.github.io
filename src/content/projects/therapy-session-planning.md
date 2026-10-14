---
title: "Reading clinical notes with an LLM"
pitch: "Turning a children's speech-language therapy centre's free-text session notes into progress scores, then using them to plan how many sessions each child needs."
summary: "Prompt-engineered Claude to score therapy progress from clinical notes, then clustered progress trajectories to free up ~29% of sessions for the waitlist."
when: "2026"
with: "MSE 555 · real centre, course case"
stack: ["Python", "Claude API", "Prompt engineering", "scikit-learn"]
stats:
  - { value: "0.861", label: "agreement with clinicians (QWK)" }
  - { value: "29%", label: "sessions freed for the waitlist" }
  - { value: "~10", label: "more children served" }
links:
  - { label: "GitHub", href: "https://github.com/agishan/MSE555-A3" }
cover: "/photos/555-savings-curves.png"
order: 5
---

## The problem

A children's therapy centre books every new client for a fixed block of sessions, but kids progress at very different rates. The progress signal is buried in free-text clinical notes no one has time to read back through. Our professor brought the centre's data in as a case.

## What I built

- **Scoring notes with an LLM.** Prompted Claude (via the Batch API) to score each session note for progress, and checked it against clinician labels. Over four prompt versions, agreement went from 0.751 to **0.861** quadratic weighted kappa. I used kappa rather than accuracy because over half the labels were zero, so a model that always answers "no progress" would still look 52% accurate.
- **Grouping kids by trajectory.** Clustered progress curves across 120 clients with k-means and picked the best reassessment point for each cluster.
- **Planning the waitlist.** Predicted each waitlisted child's cluster from their intake details and estimated sessions needed.

## What it found

For the 35-child waitlist, reassessing on each cluster's schedule instead of a flat 12 sessions needs about 299 sessions instead of 420. That frees **~121 sessions (29%)**, roughly 10 more children who could start treatment. These are projections from the case, not a change the centre has made.

[![Waitlist capacity: 420 sessions under the flat 12-session pathway vs 299 under the cluster-based policy](/photos/555-waitlist-capacity.png)](/photos/555-waitlist-capacity.png)
