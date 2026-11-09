---
company: "Cambridge Memorial Hospital"
role: "Operations Research Intern · NSERC"
when: "Jan–Aug 2024"
where: "Cambridge & Waterloo, ON"
summary: "Surgical wait-time analysis, ML forecasts and Gurobi models, shipped as self-serve dashboards for 15+ schedulers."
tools: ["Python", "Gurobi", "XGBoost", "Streamlit"]
order: 4
todo: "Check the story sounds like you. Did the hospital act on any of the recommendations?"
---

## The job

An NSERC-funded research term, held jointly between Cambridge Memorial Hospital and the University of Waterloo's Department of Management Sciences. The question: what drives surgical wait times, and what would it take to reduce them?

## What I did

- **Demand analysis.** I analyzed historical surgical booking data to understand demand patterns and isolate what drives wait times.
- **Block constraints.** I built Gurobi optimization models to measure the opportunity cost of the hospital's surgical block constraints: how much throughput the current structure leaves on the table.
- **Forecasting.** I prototyped models for the three things that make OR scheduling difficult: cancellations (logistic regression, XGBoost), case durations, and emergency demand (ARIMA). The best reached up to **85%** accuracy.
- **Dashboards.** I built and deployed a suite of Streamlit dashboards for **15+** scheduling administrators and researchers, tracking throughput, room utilization and wait times. Then I presented the findings to hospital decision-makers.
