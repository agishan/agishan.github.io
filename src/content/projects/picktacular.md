---
title: "Picktacular"
pitch: "Helping a hospital see why two surgeons doing the same operation pull completely different supplies."
summary: "Decision support for operating-room picklists. Compares surgeon supply lists and recommends cheaper substitutions. Deployed at Cambridge Memorial Hospital."
when: "2025–26"
with: "UW capstone · Cambridge Memorial"
stack: ["React", "Django", "Python"]
award: "Sustainable Design Award"
stats:
  - { value: "Deployed", label: "on the hospital network" }
  - { value: "Award", label: "Sustainable Design, MSE capstone" }
order: 1
todo: "Add a screenshot of the comparison view (public/photos/picktacular.png) under What we built. Check the wording matches what your part was."
---

## The problem

Every surgeon keeps a picklist: the supplies pulled for a given procedure. Across surgeons doing the same operation, those lists drift apart, with different brands, quantities and items. Nobody could tell which differences were clinical preference and which were historical accident.

## What we built

A dashboard where staff put surgeon picklists side by side, see exactly where they diverge, and get cost-reducing substitutions with a stated reason for each. The recommender adapts as clinicians accept or reject suggestions. It runs on the hospital's local network.
