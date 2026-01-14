---
title: "Machine Learning for Causal Inference in Observational Studies"
description: "Investigating the use of machine learning algorithms to estimate causal effects from observational data with applications to healthcare."
date: 2023-11-20
authors: "Your Name, Research Team"
publication: "International Conference on Machine Learning (ICML), 2023"
paperURL: "https://example.com/paper2"
---

## Abstract

Causal inference from observational data remains a fundamental challenge in statistics and machine learning. This work proposes a novel framework combining doubly robust estimation with modern machine learning techniques.

## Background

Traditional causal inference methods rely on strong parametric assumptions. We aim to leverage the flexibility of machine learning while maintaining the theoretical guarantees of causal inference.

## Proposed Method

Our approach, **ML-Causal**, combines:

- Random forests for propensity score estimation
- Gradient boosting for outcome modeling
- Cross-fitting to reduce overfitting bias
- Doubly robust estimation for robustness

## Experiments

We evaluated our method on:

1. **Synthetic data**: Known ground truth for validation
2. **Healthcare data**: Estimating treatment effects in electronic health records
3. **Economic data**: Policy evaluation studies

### Key Findings

- Reduced bias compared to traditional methods
- Better coverage of confidence intervals
- Scalability to large datasets

## Discussion

The integration of machine learning with causal inference opens new possibilities for data-driven decision making in complex domains where randomized experiments are infeasible.

## Future Directions

- Extension to time-varying treatments
- Integration with deep learning
- Development of sensitivity analysis tools
