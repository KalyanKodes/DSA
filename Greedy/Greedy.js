/*
    Overview:
    - The Greedy Method is a strategy used in algorithm design for solving optimization problems.
    - Optimization problems focus on finding the best solution, either minimizing or maximizing a particular objective.
    - Examples include finding the shortest route (minimum distance) or quickest time when traveling from one point to another.

    Key Points:
    - **Feasible Solutions:** These are solutions that satisfy all the constraints of the problem.
    - **Optimal Solutions:** The best feasible solution according to a specific criterion (e.g., minimum cost, maximum profit).

    Types of Optimization Problems:
    1. **Minimization Problems:** Require finding the minimum value (e.g., minimizing costs).
    2. **Maximization Problems:** Require finding the maximum value (e.g., maximizing profits).

    Classification:
    - Problems that require both maximum and minimum results fall under optimization problems.

    Techniques to Solve Optimization Problems:
    - **Greedy Method:** Makes a series of locally optimal choices in hopes of finding a globally optimal solution.
    - **Dynamic Programming:** Breaks down problems into simpler subproblems and stores the results to avoid redundant calculations.
    - **Branch and Bound:** Explores branches of a solution space while keeping track of the best solution found so far.

    Greedy Method Algorithm:
    - `Greedy(a, n)` where `n` is the size of the array `a` and `a = [a1, a2, a3, a4, a5]`.

    Pseudocode:
    // Iterate from 1 to n
    for (let i = 1; i <= n; i++) {
        // Select the next element based on the greedy choice
        let x = Select(a);
        
        // Check if the selected element is feasible
        if (Feasible(x)) {
            // Add the feasible element to the solution
            Solution = Solution + x;
        }
    }

    Explanation of the Greedy Method:
    - The Greedy Method asserts that a problem can be solved in stages, making a series of choices that are locally optimal at each stage.
    - The hope is that these local choices will lead to a globally optimal solution.

    Advantages:
    - Simplicity: The greedy method is easy to implement and understand.
    - Efficiency: Often faster than other approaches, such as dynamic programming, due to fewer calculations.

    Disadvantages:
    - Local Optima: The greedy method may lead to a locally optimal solution that is not globally optimal.
    - Applicability: Not all problems can be solved using the greedy approach; careful consideration is needed to ensure that a greedy choice will yield an optimal solution.

    Applications:
    - Activity Selection Problem
    - Huffman Coding
    - Kruskal’s and Prim’s algorithms for Minimum Spanning Trees
    - Dijkstra’s algorithm for Shortest Paths

*/