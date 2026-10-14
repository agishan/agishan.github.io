---
title: "Picktacular"
pitch: "Helping a hospital see why two surgeons doing the same operation pull completely different supplies, and which items could be swapped."
summary: "Decision support for operating-room pick-lists at Cambridge Memorial Hospital. I built the recommendation engine: a per-category Bayesian learner that gets sharper with every clinician decision."
when: "2025–26"
with: "UW capstone · Cambridge Memorial Hospital"
stack: ["Python", "FastAPI", "React", "SQLite", "Thompson Sampling"]
award: "Sustainable Design Award"
stats:
  - { value: "7×", label: "more precise top-5 suggestions than our first ranking" }
  - { value: "0.92", label: "AUC of the feature set" }
  - { value: "82.8", label: "usability score (SUS, \"excellent\")" }
links:
  - { label: "UWaterloo Health AI Lab article", href: "https://uwaterloo.ca/health-ai-analytics-lab/news/picktacular-adaptive-decision-support-operating-room" }
  - { label: "Cambridge Memorial Hospital news", href: "https://cmh.org/node/408" }
cover: "/photos/picktacular-poster-board.jpg"
order: 1
---

## The problem

Every surgeon keeps a pick-list: the supplies pulled for a procedure, often 30+ items. Across surgeons doing the same operation, those lists drift apart, with different brands, sizes and items. Cambridge Memorial Hospital ends up stocking every variant, which means more SKUs, higher carrying costs and expired stock. Nobody could easily tell which differences were clinical preference and which were historical accident.

## What we built

A five-person capstone with Callum Gillies, Curtis Tse, Graydon Power and Liam Mitchell, advised by Prof. Houra Mahmoudzadeh and Prof. Stan Dimitrov. Picktacular is a web app that runs entirely on the hospital's own network (React, FastAPI, SQLite). Inventory staff upload pick-lists exported from the hospital's 30-year-old MEDITECH system and get:

- surgeon-by-category heatmaps showing exactly where pick-lists for the same surgery diverge
- ranked suggestions for interchangeable items, with price and popularity side by side
- a pick-list builder for drafting consolidated lists, and savings tracking over time
- an audit log where every approve or reject has a name, a reason and an undo

It's decision support, not decision making: the tool never changes a list on its own.

## The recommendation engine (my part)

I designed and built the algorithm that decides which swaps to show first. That's the hard part of the problem: only **2.2%** of candidate pairs are actually interchangeable, so a random review would take about 45 looks to find one.

- **Features.** For each candidate pair (two items in the same category on different surgeons' lists for the same surgery) I compute eight signals: text overlap, matching gauge and size numbers, price ratio, how many surgeons use each item, and how often they appear in the same contexts. I started from 23 candidates and cut them down with a redundancy filter, then greedy forward selection. The selected set reaches an **AUC of 0.92**.
- **Learning from every decision.** Ranking uses **Linear Thompson Sampling**, with a separate Bayesian model per supply category. What makes two sutures swappable (gauge) is different from what makes two instruments swappable (description), and the per-category models learn that on their own. Every approve or reject updates that category's posterior and immediately re-ranks the remaining pairs.
- **Strong from day one.** A warm-start prior makes the first ranking equal to a sensible equal-weighted score, so it never starts worse than a fixed heuristic, and only gets better with feedback.
- **Tested before trusting it.** In a simulation over 3,840 candidate pairs across 24 categories, its top five suggestions were right **37.7%** of the time, against **5.3%** for the simple overlap-based ranking we started with. That's roughly 7× more precise where reviewers look first.

[![Our Picktacular poster from the 2026 Management Engineering capstone symposium](/photos/picktacular-poster-board.jpg)](/photos/picktacular-poster-board.jpg)

## How it landed

We won the capstone's **Sustainable Design Award**, and the system was handed off to Cambridge Memorial Hospital on site. It's now awaiting the hospital's Research & Innovation Impact Committee approval. In a usability study, participants completed 94% of tasks and scored it 82.8 on the System Usability Scale, the "excellent" range.
