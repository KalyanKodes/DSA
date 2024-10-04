// This is one of the strategies, like Divide and Conquer and other strategies.
// This method is used to solve optimization problems.
// An optimization problem requires either a minimum result or a maximum result.
// For example, when traveling from point A to point B, the goal may be to find the shortest route (minimum distance) or the quickest time (minimum time).
// 
// In optimization problems, we often look for:
// 1. Feasible solutions: Solutions that satisfy all the problem's constraints.
// 2. Optimal solutions: The best feasible solution according to a specified criterion (e.g., minimum cost, maximum profit).
// 
// There are two types of optimization problems:
// 1. Minimization problems: Problems that require finding the minimum value (e.g., minimizing costs).
// 2. Maximization problems: Problems that require finding the maximum value (e.g., maximizing profits).
// 
// When a problem requires both maximum and minimum results, it is classified as an optimization problem.
// 
// Techniques to solve optimization problems include:
// - Greedy Method
// - Dynamic Programming
// - Branch and Bound
//
// Greedy Method
// Algorithm: Greedy(a, n) 
// where n = size of the array a
// a = [a1, a2, a3, a4, a5]

// Iterate from 1 to n
// for (let i = 1; i <= n; i++) {
//     // Select the next element based on the greedy choice
//     let x = Select(a);
//     
//     // Check if the selected element is feasible
//     if (Feasible(x)) {
//         // Add the feasible element to the solution
//         Solution = Solution + x;
//     }
// }

// The Greedy method states that a problem can be solved in stages,
// making a series of choices that are locally optimal at each stage,
// with the hope that these choices will lead to a globally optimal solution.
