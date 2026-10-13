---
company: "Cambridge Memorial Hospital"
role: "Operations Research Intern · NSERC"
when: "Jan–Aug 2024"
where: "Cambridge & Waterloo, ON"
summary: "Why surgical wait times are what they are: Gurobi models, ML forecasts, and a dashboard for the schedulers."
tools: ["Python", "Gurobi", "XGBoost", "Streamlit"]
order: 4
todo: "Check the story sounds like you. Did the hospital act on any of the recommendations?"
---

## The job

An NSERC-funded research term, held jointly between Cambridge Memorial Hospital and the University of Waterloo's Department of Management Sciences. The question was simple to ask and hard to answer: why are surgical wait times what they are, and what would it take to move them?

## What I did

- **Read the history.** I analyzed historical surgical booking data to understand demand patterns and ran experiments to isolate what actually drives wait times.
- **Tested the rules.** I built Gurobi optimization models to measure the opportunity cost of the hospital's surgical block constraints: how much throughput the current structure leaves on the table.
- **Predicted the hard parts.** I prototyped models for the three things that make OR scheduling difficult: cancellations (logistic regression, XGBoost), case durations, and emergency demand (ARIMA). The best reached up to **85%** accuracy.
- **Put it in front of the schedulers.** I built and deployed a suite of Streamlit dashboards for **15+** scheduling administrators and researchers, tracking throughput, room utilization and wait times. Then I presented the findings to hospital decision-makers.

## What mattered

Optimization models don't change a hospital; the people who run the schedule do. The dashboard turned the analysis into something they could question for themselves. The project also started the relationship that became my capstone, [Picktacular](/projects/picktacular).
