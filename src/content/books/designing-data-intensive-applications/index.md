---
title: "Designing Data-Intensive Applications"
author: "Martin Kleppmann"
year: 2023
dateRead: 2023-09-20
rating: 5
status: "completed"
description: "The definitive guide to building reliable, scalable, and maintainable data systems."
---

## Overview

Martin Kleppmann's comprehensive guide to modern data systems is essential reading for anyone building software that handles data at scale. This book bridges theory and practice beautifully.

## Part I: Foundations of Data Systems

### Reliability, Scalability, Maintainability

The three pillars of good system design:
- **Reliability**: System works correctly even when things go wrong
- **Scalability**: Reasonable ways to handle growth
- **Maintainability**: Making life better for engineering and operations teams

### Data Models

Understanding different data models is crucial:
- Relational (SQL)
- Document (MongoDB, CouchDB)
- Graph (Neo4j)
- Column-family (Cassandra)

Each has trade-offs depending on your use case.

## Part II: Distributed Data

### Replication

Key replication strategies:
1. **Single-leader**: Simple but can be a bottleneck
2. **Multi-leader**: Complex but handles network partitions better
3. **Leaderless**: High availability, eventual consistency

### Partitioning

Strategies for distributing data:
- Key-range partitioning
- Hash partitioning
- Consistent hashing

## Part III: Derived Data

### Batch Processing

MapReduce and beyond - understanding how to process large datasets efficiently.

### Stream Processing

Real-time data processing with systems like Kafka, Flink, and Storm.

## Key Insights for ML Engineering

This book transformed how I think about ML systems:

1. **Feature stores**: Understanding distributed data helps design better feature storage
2. **Model serving**: Applying principles of scalability to ML inference
3. **Data pipelines**: Building reliable ETL for training data
4. **Monitoring**: Adapting database monitoring concepts to ML systems

## Technical Depth

What I appreciate most is the depth of technical detail while remaining accessible. Kleppmann doesn't shy away from complexity but explains it clearly with excellent diagrams.

## Practical Applications

Applied these concepts to:
- Designing a distributed feature store for ML models
- Improving data pipeline reliability
- Making better technology choices for new projects

## Rating: ★★★★★

A must-read for anyone serious about building data systems. Dense but incredibly valuable. I keep coming back to it as a reference.
