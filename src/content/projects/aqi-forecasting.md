---
title: "Air quality forecasting"
pitch: "Predicting tomorrow's air quality for 26 Indian cities from five years of daily pollutant readings."
summary: "Benchmarked seven models on next-day AQI for 26 Indian cities. My tuned XGBoost was the best, at R² 0.941."
when: "2026"
with: "MSE 546, team of 5"
stack: ["Python", "XGBoost", "Random Forest", "scikit-learn"]
stats:
  - { value: "0.941", label: "R² (XGBoost)" }
  - { value: "26", label: "cities" }
  - { value: "−51%", label: "error vs. persistence baseline" }
links:
  - { label: "GitHub", href: "https://github.com/nicholaschia1/MSE546" }
order: 4
todo: "Optional: add a plot as the cover (e.g. copy 546_Project/plots/10a_daily_timeseries.png to public/photos/ and set cover:)."
---

## The problem

India's daily Air Quality Index swings from "Good" to "Severe" with the season, and the bad days are the ones that matter. Using 29,531 city-days of pollutant readings from 2015 to 2020, our team predicted the next day's AQI and compared seven models, from "tomorrow equals today" up to an LSTM.

## What I did

- Did the exploratory analysis. PM10 was the strongest predictor (r = 0.80), and winter AQI runs about 2.1× the monsoon months.
- Built the persistence and Ridge baselines, then the Random Forest and XGBoost models, with tuning and time-ordered cross-validation so no future data leaked into training.
- Tuned XGBoost reached **R² 0.941** and roughly halved the baseline's error (RMSE 44.3 → 21.9).

## What we found

Tree ensembles beat the neural nets on this tabular data: the LSTM reached R² 0.831 and the feed-forward net 0.886. Severe-AQI days stayed the hardest to predict for every model, because there are so few of them.
