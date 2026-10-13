---
company: "Dandy"
role: "Data Scientist, Supply Chain & Ops"
when: "Jan–Sep 2025"
where: "New York, NY"
summary: "Plant simulation, real-time order routing ($450K+ expected annual savings) and quality analytics."
tools: ["Python", "SimPy", "Postgres", "dbt", "Looker", "Dagster"]
order: 3
todo: "Check the story sounds like you. Has the $450K been realized yet? If so, upgrade the wording."
---

## The job

Dandy is a digital dental lab: crowns, aligners and restorations made to order across two production plants. I was on Supply Chain & Operations, which owned the questions of how work gets assigned on the floor, whether orders hit their ship date, and where defects come from.

## What I did

- **A simulation the budget was built on.** I built a discrete event simulation of the mixed-product manufacturing line in Python (SimPy), parameterized by machine count, batch size and product path. An A/B harness on top let the team compare assignment strategies without touching the real floor. The results fed 2025 machine purchasing and headcount decisions.
- **Work to Lists.** A real-time tracker built straight off the raw Postgres booking tables, showing where every order sits in production. It enabled rushing and rerouting orders to hit their ship time, plus consolidated shipping. Expected annual savings: **$450K+**.
- **The most-used report in the company.** The UTA Tracker gave real-time personal productivity to **500+** technicians across both plants.
- **Quality signals.** dbt models and Looker dashboards isolated the shifts and technicians with elevated defect rates, so managers could target training and then measure whether defects actually fell. Dagster kept it all refreshed.

## What mattered

The simulation was what made people trust the rest. Once leadership had seen "what happens if we buy two more machines" answered before spending the money, real-time tools for the floor were an easy yes. Adoption was the metric that counted: a tracker 500 people open every day beats a perfect model nobody uses.
