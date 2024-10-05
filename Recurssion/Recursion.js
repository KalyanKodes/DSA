/**
 * Recursion Overview
 *
 * Recursion is a programming technique where a function calls itself to solve a problem.
 * It typically consists of two main parts: the base case (which stops the recursion) 
 * and the recursive case (which continues the recursion).
 * 
 * Key Points:
 * - Base Condition: Defines when the recursion should stop.
 * - If no base case exists, the function can run indefinitely, leading to stack overflow.
 * 
 * Types of Recursion:
 * 1. Direct Recursion: A function calls itself directly.
 * 2. Indirect Recursion: A function calls another function, which in turn calls the first function.
 * 3. Tail Recursion: The recursive call is the last operation in the function.
 * 4. Non-Tail Recursion: There are operations remaining after the recursive call.
 * 
 * Operations:
 * - Factorial calculation using direct and indirect recursion.
 * - Summation of natural numbers using recursion.
 * - Demonstrations of tail and non-tail recursion.
 * 
 * Time and Space Complexity:
 * - Factorial: 
 *   - Time Complexity: O(n)
 *   - Space Complexity: O(n) for direct recursion (due to the call stack).
 * 
 * - Sum of Natural Numbers:
 *   - Time Complexity: O(n)
 *   - Space Complexity: O(n)
 * 
 * - Tail Recursion:
 *   - Time Complexity: O(n)
 *   - Space Complexity: O(1) (optimized by the compiler).
 * 
 * - Non-Tail Recursion:
 *   - Time Complexity: O(n)
 *   - Space Complexity: O(n)
 */

/**
 * Real-World Examples:
 * 
 * 1. Factorial Calculation:
 *    - Used in combinatorics to calculate permutations and combinations.
 *    - Example: Calculating the number of ways to arrange items (e.g., event planning).
 * 
 * 2. Sum of Natural Numbers:
 *    - Often used in algorithms that require the accumulation of values.
 *    - Example: Calculating total costs in a shopping cart.
 * 
 * 3. Indirect Recursion:
 *    - Common in algorithms that require switching between different functions.
 *    - Example: Graph traversal algorithms like Depth-First Search (DFS).
 * 
 * 4. Tail Recursion:
 *    - Useful in functional programming for optimizing recursive functions.
 *    - Example: Calculating Fibonacci numbers efficiently.
 * 
 * 5. Non-Tail Recursion:
 *    - Commonly used in tree traversals (like in-order, pre-order, post-order).
 *    - Example: Parsing expressions in compilers or evaluating tree structures.
 */

/**
 * Applications:
 * 
 * 1. Factorial Calculation:
 *    - Used in statistical computations and simulations.
 *    - Applications in algorithms related to probabilities.
 * 
 * 2. Sum of Natural Numbers:
 *    - Utilized in financial applications for calculating accumulated totals.
 *    - Applications in data analysis and reporting.
 * 
 * 3. Tail Recursion:
 *    - Used in algorithms that need to run without consuming additional stack space.
 *    - Applications in implementing algorithms in languages that optimize tail recursion.
 * 
 * 4. Non-Tail Recursion:
 *    - Widely used in solving problems related to data structures like trees and graphs.
 *    - Applications in AI for searching and optimization algorithms.
 * 
 * 5. Indirect Recursion:
 *    - Applications in state machines and event-driven programming where transitions occur between states.
 *    - Useful in algorithms that require multiple functional layers.
 */

console.clear();

// Factorial of n using direct recursion
function findFact(n) {
    if (n <= 1) {
        return 1; // Base case
    } else {
        return n * findFact(n - 1); // Recursive case
    }
}

// Sum of n natural numbers using recursion
function sum(n) {
    if (n > 0) {
        return sum(n - 1) + n; // Recursive case
    } else {
        return n; // Base case
    }
}

// Indirect recursion: functionOne calls functionTwo, which calls functionOne
function fun1(n) {
    if (n <= 1) {
        return 1; // Base case
    } else {
        return n * fun2(n - 1); // Recursive case
    }
}

function fun2(n) {
    if (n <= 1) {
        return 1; // Base case
    } else {
        return n * fun1(n - 1); // Recursive case
    }
}

// Tail Recursive Function
function tailRecursive(n) {
    if (n >= 1) {
        console.log(n); // Print current number
        tailRecursive(Math.floor(n / 2)); // Recursive call is the last action
    }
}

// Non-Tail Recursive Function
function nonTailRecursive(n) {
    if (n >= 1) {
        tailRecursive(Math.floor(n / 2)); // Recursive call is not the last action
        console.log(n); // This line executes after the recursive call
    }
}

// Example of a simple recursive counting function
let d = 1;
const count = (n) => {
    console.log(n); // Print current number
    console.log(d); // Print current value of d
    d++; // Increment d
    if (n > 1) {
        count(n - 1); // Recursive call
    }
    console.log(d); // Print current value of d after returning from recursion
}

// Example usage
console.log("Factorial of 5:", findFact(5)); // Outputs: 120
console.log("Sum of first 5 natural numbers:", sum(5)); // Outputs: 15
console.log("Tail Recursive:");
tailRecursive(10); // Outputs: 10, 5, 2, 1
console.log("Non-Tail Recursive:");
nonTailRecursive(10); // Outputs: 5, 2, 1 and then 10
count(5); // Outputs the count from 5 down to 1, and the values of d
