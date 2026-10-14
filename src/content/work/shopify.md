---
company: "Shopify"
role: "Infrastructure Engineer"
when: "Sep–Dec 2025"
where: "Toronto, ON"
summary: "Real-time p95/p99 latency metrics on Flink and Kafka, 1.3 TB/hour of GCP logging cut, and bot auth in Go for webhooks."
tools: ["Flink", "Kafka", "GCP", "Go", "Ruby"]
order: 2
todo: "Check the story sounds like you."
---

## The job

I was on the team that owns webhook delivery, the system that sends events out to millions of merchant and partner integrations. My term ran into Black Friday and Cyber Monday, Shopify's biggest traffic weekend of the year.

## What I did

- **A real-time SLA engine.** Webhook latency metrics used to be legacy batch jobs. I replaced them with stateful sliding-window aggregations in Apache Flink reading from Kafka, which compute p95 and p99 delivery latency continuously across millions of webhooks without adding any load to the production database.
- **Bot authentication for agentic commerce.** I rebuilt the `web-bot-auth` library in Go, porting it from Rust. Webhook interfaces now share one way to verify automated agents.
- **Deleting what nobody read.** I decommissioned a deprecated logging pipeline across the Go and Ruby services: dead code, unused dependencies and their tests. That cut data usage by **1.3 TB per hour**.
- **Black Friday tooling.** During Black Friday, black-holing webhook traffic ran as an ad-hoc Slack job. I turned it into a proper maintenance task with CSV upload, logging and tests, so every use is auditable.
- **Stricter payload formats.** I led an XML format restriction for new webhook topics, with a backward-compatible path so no existing integration broke.

## What mattered

At this scale the most valuable change can be a deletion. The logging cleanup saved more than anything I added. The Flink work taught me to measure from the stream instead of querying the database you're trying to protect.
