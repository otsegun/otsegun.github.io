---
title: "Statistical Rethinking: A Bayesian Course"
author: "Richard McElreath"
year: 2024
pubYear: 2020
dateRead: 2024-02-10
rating: 10
status: "completed"
description: "A brilliant introduction to Bayesian statistics with a focus on practical modeling and causal thinking."
---

## Overview

Richard McElreath's "Statistical Rethinking" is hands-down the best statistics book I've read. It teaches Bayesian statistics from the ground up with a focus on understanding rather than rote application.

## Why This Book Stands Out

### 1. Causal Thinking First

Unlike traditional statistics books, McElreath emphasizes causal reasoning before jumping into models. This reframes statistics as a tool for understanding causation, not just correlation.

### 2. Bayesian from the Start

No frequentist detour - the book teaches Bayesian inference as the primary framework. This makes more sense pedagogically and practically.

### 3. Practical Implementation

Every concept is implemented in code (R with the `rethinking` package). I followed along in Python using PyMC3, which deepened my understanding.

## Key Concepts

### Small Worlds and Large Worlds

- **Small world**: The model we build
- **Large world**: The real world

Models are always wrong, but some are useful. Understanding this distinction is crucial.

### The Golem of Prague

Statistical models are like golems - powerful but mindless. They do exactly what you tell them, not what you mean. This metaphor runs throughout the book.

### Multilevel Models

The chapters on multilevel (hierarchical) models are exceptional. They show how to:
- Pool information across groups
- Model varying effects
- Handle imbalanced data

## Practical Applications

Applied these concepts to:

1. **A/B testing**: Bayesian approach gives more nuanced results than p-values
2. **Time series**: Hierarchical models for multiple related series
3. **Causal inference**: DAGs for thinking about confounding

## Favorite Sections

### Chapter 5: The Many Variables & The Spurious Waffles

A brilliant example using divorce rates and waffle houses to teach about confounding and DAGs. Funny and educational.

### Chapter 13: Models With Memory

Introduction to time series and spatial models. The examples with chimpanzees and oceanic societies are memorable.

## Code Examples

I recreated all examples in Python/PyMC3. The translation process was educational - it forced me to really understand what each model was doing.

```python
# Example: Simple linear regression in PyMC3
with pm.Model() as model:
    # Priors
    alpha = pm.Normal('alpha', mu=0, sigma=10)
    beta = pm.Normal('beta', mu=0, sigma=10)
    sigma = pm.HalfNormal('sigma', sigma=1)
    
    # Likelihood
    mu = alpha + beta * x
    y_obs = pm.Normal('y_obs', mu=mu, sigma=sigma, observed=y)
    
    # Inference
    trace = pm.sample(1000)
```

## Reflections

This book fundamentally changed how I approach statistical modeling:

- Think causally, not just correlationally
- Use priors to encode domain knowledge
- Embrace uncertainty quantification
- Validate models against reality, not just other models

## Companion Resources

- [Statistical Rethinking 2023 Lecture Videos](https://www.youtube.com/playlist?list=PLDcUM9US4XdPz-KxHM4XHt7uUVGWWVSus)
- [PyMC3 implementations](https://github.com/pymc-devs/resources)

The best statistics book I've read. Challenging but rewarding. I'll be returning to this book for years to come.
