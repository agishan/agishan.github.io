---
company: "Claim Health AI"
role: "Fullstack Engineering Intern · engineer #5"
when: "Jun–Aug 2026"
where: "Toronto, ON"
summary: "Designed the ClickHouse warehouse behind customer analytics (70% faster pages) and an evaluation pipeline for LLM document extraction."
tools: ["ClickHouse", "SQL", "Python", "TypeScript", "LLM evals"]
order: 1
todo: "Check the story sounds like you. Was the ClickHouse warehouse in production before you left?"
---

## The job

Claim Health AI is a Y Combinator (P25) startup working on healthcare insurance claims. I joined as engineer #5, which meant no product manager between me and the customers. I owned customer-facing features and the data architecture under them.

## What I did

- **Rebuilt where analytics lived.** The customer dashboards were slow because analytical queries were running on the transactional database. I led the design and build of a ClickHouse warehouse on a One Big Table model and moved the analytics onto it. Page loads dropped by **70%**.
- **Rebuilt the analytics product with the customers.** I reworked the customer-facing analytics suite around how clients actually run their operations, iterating directly with key accounts.
- **Built the evaluation loop for document extraction.** A pipeline flags PDFs the extractor got wrong, re-runs them through a recursive LLM pass, and saves the corrected output. Every failure becomes another test case for the next version of the extractor.

## What mattered

The speed-up was a symptom. The real problem was that the system was built for writing data, not reading it. Fixing the architecture once beat tuning queries forever. And at five engineers, the people asking for a feature were often the same people using it the next day.
