---
title: "Clinic room scheduling"
pitch: "Scheduling every provider, patient and exam room in an outpatient clinic, one 5-minute slot at a time."
summary: "Column generation and branch-and-price for a 16-room outpatient clinic. Compared six room-assignment policies on two weeks of appointments."
when: "2026"
with: "MSE 435, with Callum Gillies and Graydon Power"
stack: ["Python", "Gurobi", "Column generation", "Branch-and-price"]
stats:
  - { value: "98.7%", label: "appointments covered (best policy)" }
  - { value: "16", label: "exam rooms" }
  - { value: "6", label: "policies compared" }
cover: "/photos/435-pareto.png"
order: 3
todo: "Check the write-up matches what the final report says. A Gantt chart (report Fig. gantt_d.png) would be a nicer cover than the Pareto plot if you can find it."
---

## The problem

Every provider in the clinic has their own session hours, permitted rooms and appointment lengths, but they all share the same 16 exam rooms, and every patient has to be seen exactly once. Written as one big MIP over 5-minute slots, it gets too large to solve.

## What we built

A Dantzig-Wolfe decomposition. Each column is one provider's complete schedule for a day. A master LP picks the set of schedules that covers every appointment, and a pricing MIP generates new schedules using the master's dual prices. Branch-and-price closes the gap to an integer solution, and a greedy second pass moves leftover flexible appointments into spare capacity.

## What we found

We ran six policies over two weeks of appointment data: keep each provider in one room, let them use rooms within 3 m or 6 m, open admin windows, overbook by 13.5%, and pad durations by 10%.

[![Cost vs coverage for the six policies: opening admin windows (policy d) gives the cheapest schedules at top coverage; single-room (a) covers the fewest appointments](/photos/435-pareto.png)](/photos/435-pareto.png)

- Restricting providers to one room covered the fewest appointments (97.4%) and left about 3 rooms empty each day.
- Letting providers use nearby rooms raised coverage to 98.7% and room use to over 90%, at the cost of some walking between rooms.
- Opening admin windows gave the cheapest schedules with the same coverage.
