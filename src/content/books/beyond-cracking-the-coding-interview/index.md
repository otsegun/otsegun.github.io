---
title: "Beyond Cracking the Coding Interview"
author: "Gayle Laakmann McDowell, Mike Mroczka, Aline Lerner, Nil Mamano"
year: 2026
pubYear: 2025
dateRead: 2026-04-30
rating: 9
status: "reading"
description: "A comprehensive guide that goes beyond technical preparation to cover the full software engineering interview process."
---

## Overview

<!-- Add your overview here -->

## Key Takeaways

<!-- Add your key takeaways here -->

## Notes by Chapter

### Chapter 21: Big O Analysis
#### What is Big O Analysis

- Big O analysis is how we measure the efficiency of our code. 
-  We estimate efficiency against two key metrics: 
    - Time complexity: how does the runtime of our code scale as input size grows?
    - Space complexity: how does the amount of memory used by our code scale as the input size grows?

- Big O is an expression for how code scales as input size increases:
    - It is not affected by the execution environment
    - We can analyze our code just thinking about our solution approach, without having it written
    - It focuses on worst-case analysis so that it applies to any input (whether the input is the best case/worst case).
    - It focuses on how code behaves when input scales (which is wen efficiency matters.)

#### The Rules of Big 0

- Big O is a way of classifying and grouping functions based on their approximate rate of growth. 
- A Big O term like O(n) is called a "complexity class". It represents a class of functions that all have the same approximate grwoth rate.
- Given a function $f(n)$, how do we know deduce its complexity class:
    - First wrap $f(n)$ inside big O: $f(n) = O(f(n))$
    - Appy the two rules of Big O to simplify and get the complexity class. 
- **Rule 1: Remove additive and multiplicative constants:** these are constant factors
- **Rule 2: Remove non-dominant additive terms:**
    - A dominant term is the biggest term for any value of $n$ after some point. E.g., $n$ dominates $\min(n^2, 10)\ \forall n \gt 10$
- To know the dominant term, use the hierarchy of complexities below showing complexity classes from slowest to fastest growth:
    - Constant: $O(1)$
    - Logarithmic: $O(log n)$
    - Linear: $O(n)$
    - Linearithmic: $O(nlogn)$
    - Polynomial-Quadratic: $O(n^2)$
    - Polynommial-Cubic: $O(n^3)$
    - Exponential-Base 2: $O(2^n)$
    - Exponential-Base 3: $O(3^n)$
    - Factorial: $O(n!)$
- Any exponential time complexity grows faster than every polynomial time complexity
- Any factorial complexity grows faster than any exponential time complexity 

#### Runtime Analysis with Big O
- Look out for loops to count the number of instructions
- Include time and space complexity of built-in functions
- Identify inpute variables properly and differentiate between time and space complexity

#### Logarithms in Big O Analysis
- $Log_2(n) = a \implies 2^a = n$
- This means $a$ is the number of times I have to multimply 2 by itself to reach $n$

- It also means that $a$ is the number of times I have halve n (divide by 2) to reach 1:
    - $Log_2(1) = 0$
    - $Log_2(2) = 1$
    - $Log_2(4) = 2$
    - $Log_3(27) = 3$
    -  $Log_2(12) = x, \text{with}\ 3 \le x \le 4$
- $Log_2(n)$ comes up in algorithms and data structures that use halving:
    - Binary search
    - Balanced binary tree
    - Merge sort
- While the exponential funciton is very fast, loagarithm function is very slow.
- The base of the logarithm doesn't matter because logs can be converted to a different base by scaling with a constant factor so that: $kLog_2(n) = Log_{10}(n)$ 

## Favorite Quotes

<!-- Add quotes here -->

## Reflections

<!-- Add your reflections here -->
