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

- Big O analysis is how we measure the efficiency of our code 
-  We estimate efficiency against two key metrics: 
    - Time complexity: how does the runtime of our code scale as input size grows?
    - Space complexity: how does the amount of memory used by our code scale as the input size grows?

- Big O is an expression for how code scales as input size increases:
    - It is not affected by the execution environment
    - We can analyze our code just thinking about our solution approach, without having it written
    - It focuses on worst-case analysis so that it applies to any input (whether the input is the best case/worst case)
    - It focuses on how code behaves when input scales (which is wen efficiency matters)

#### The Rules of Big 0

- Big O is a way of classifying and grouping functions based on their approximate rate of growth 
- A Big O term like O(n) is called a "complexity class". It represents a class of functions that all have the same approximate grwoth rate
- Given a function $f(n)$, how do we know deduce its complexity class:
    - First wrap $f(n)$ inside big O: $f(n) = O(f(n))$
    - Appy the two rules of Big O to simplify and get the complexity class 
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
- Identify input variables properly and differentiate between time and space complexity

#### Logarithms in Big O Analysis
- $Log_2(n) = a \implies 2^a = n$
- This means $a$ is the number of times I have to multimply 2 by itself to reach $n$

- It also means that $a$ is the number of times I have to halve n (divide by 2) to reach 1:
    - $Log_2(1) = 0$
    - $Log_2(2) = 1$
    - $Log_2(4) = 2$
    - $Log_3(27) = 3$
    -  $Log_2(12) = x, \text{with}\ 3 \le x \le 4$
- $Log_2(n)$ comes up in algorithms and data structures that use halving:
    - Binary search
    - Balanced binary tree
    - Merge sort
- While the exponential funciton is very fast, loagarithm function is very slow
- The base of the logarithm doesn't matter because logs can be converted to a different base by scaling with a constant factor so that: $kLog_2(n) = Log_{10}(n)$

#### Space Analysis
- Primitive and composite types (like stucts) take $O(1)$
- Collection of primitive types take space proportional to the number of elements: $O(n)$
- We can combines different types, e.g., a struct with a collection or a collection of structs. For example, a struct with two integer array of lengths $n$ and $n^2$, takes $O(n + n^2)$ space
- Input Space vs Extra space:
    - Input memory/space is the memory taken by our algorithm's input, these inputs existed before our function was called
    - Extra memory is memory allocated by our function. Space complexity usually analyzes *extra space* used in the execution of the algorithm.

#### Space Complexity Pitfalls
- Space complexity of copies:
    - Space complexities of copies might vary because a copy might not be a deep copy (a copy might just be copying pointers to the same object)
    - Take into account when your language does a deep copy or creates a reference.
    Familiarize yourself with the copy/reference behaviour of your language.
- Space complexity of built in methods
    - Know the space complexities of the popular built-in methods in your language, e.g., `sort` in Python is $O(n)$ complexity.
- Space complexity of integers:
    - In Python, integers are not limited to 64 bits. More bits are added as needed. Taking this into account:
        - The total number of ints required to represent a value k is $Log_2(k)$. This is because each time we add a bit, we can represent twice as many values:
            - with 1 bit, we can represent $2 = 2^1$ values
            - with 2 bit, we can represent $4 = 2^2$ values
            - with q bits, we can represent $2^q$ values 
            - so we need the smalled $q$ such that $2^q \ge k$ to properly represent $k$. 
            - so $2^q \ge k \implies q \ge Log_2(q)k$
            - so we need $ceil(Log_2\ k)$ to represent $k$ and that's in $O(Log\ k)$
    - Similarly, the total number of digits required to represent a value k is $Log_{10} k$, because by definition this total number of digits of an integer can be found by repeatedly dividing the integer by 10. 
    - If we limit the size the integers to 64 bit, then the space complexity of strong integers is $O(1)$

#### Space vs Time Complexity
- We optimize for time complexity and use space complexity as a "tie breaker" between equally time efficient algorithms
- Time complexity is always greater or equal to extra space complexity, this is because it takes $O(n^2)$ time to initialize $O(n^2)$ space
- If our algorithm uses a lot of space, it will also use as much time. So if our algorithm is time efficient, it really can't be all that space-inefficient

#### NP-Complete Problems:
- Informally, NP-complete problems are problems for which the output size is not exponential but nevertheless, no one knows any better than exponential algorithm for them. Basically, brute-force is about as good as we know to do. 

- They usually appear quite "innocent", meaning it feels an efficient algorithm should exist.

- If you identify an NP-problem, either you use an efficient algorithm that's not guaranteed to be optimal or you use an optimal brute force approach that's not efficient. 

- Common NP-problems are: 
    - Traveling salesman problem
    - Longest Path problem
    - Hamiltonian problem
    - Graph coloring problem
    - The knapsack problem
    - Subset sum problem
- Some problems are just reformulations of NP-complete problems so be on the look out for them!


## Favorite Quotes

<!-- Add quotes here -->

## Reflections

<!-- Add your reflections here -->
