/*
 * KnapSack Problem (Fractional Knapsack)
 * ----------------------------------------
 * The KnapSack problem is a well-known optimization problem that involves selecting items with
 * given weights and profits to maximize the total profit within a specified weight capacity.
 * The Fractional Knapsack variant allows breaking items to fill the knapsack to maximize profit.
 * 
 * Time Complexity: O(n log n)
 * Where:
 *  - n is the number of items, due to the sorting of items based on profit per unit weight.
 * 
 * Space Complexity: O(n)
 * Where:
 *  - n is the space used for storing profit per unit and the selected items.
 * 
 * Steps of the Algorithm:
 * 1. **Calculate Profit per Unit**:
 *    - For each item, calculate the profit per unit weight and store it in an array.
 * 
 * 2. **Sort Items**:
 *    - Sort items based on the calculated profit per unit weight in descending order.
 * 
 * 3. **Select Items**:
 *    - Traverse through the sorted list of items and keep adding items to the knapsack until it is full.
 *    - If an entire item can be added, add it completely; if not, add a fraction of it.
 * 
 * Usage of the KnapSack Algorithm:
 * - Resource allocation where resources are limited.
 * - Budget management in project selection.
 * - Portfolio selection in finance.
 * 
 * Key Concepts:
 * - **Greedy Approach**: This algorithm employs a greedy strategy by always choosing the item with the highest
 *   profit-to-weight ratio available at each step.
 * - **Fractional Capacity**: Unlike the 0/1 knapsack, the fractional variant allows splitting items.
 * 
 * Example Use Case:
 * Given a list of items with profits [10, 5, 15, 7, 6, 18, 3] and weights [2, 3, 5, 7, 1, 4, 1],
 * with a knapsack capacity of 15, the algorithm will compute the maximum profit achievable
 * by selecting a combination of items that optimally fills the knapsack.
 */

class KnapSack {
    constructor(profits, weights, bagSize) {
        this.bagSize = bagSize;  // Total capacity of the knapsack
        this.profits = profits;  // Array of profits for each item
        this.weights = weights;  // Array of weights for each item
        this.profitsPerUnit = new Array(this.profits.length).fill(-1);  // Profit per unit for each item
        this.x = new Array(this.profits.length).fill(0);  // Fraction of each item included in the knapsack
        this.computeKnapSack();  // Start computation for maximizing profit
    }

    // Calculate profit per unit weight for each item
    findProfitPerUnit() {
        for (let i = 0; i < this.profits.length; i++) {
            this.profitsPerUnit[i] = (this.profits[i] / this.weights[i]);  // Compute profit per unit weight
        }
    }

    // Find the item with the maximum profit per unit weight
    findMaxProfit() {
        let max = [this.profitsPerUnit[0], 0];  // Initialize max with the first item's profit per unit
        for (let i = 1; i < this.profitsPerUnit.length; i++) {
            if (max[0] < this.profitsPerUnit[i]) {  // Update max if a higher profit per unit is found
                max = [this.profitsPerUnit[i], i];  // Update max and index
            }
        }
        this.profitsPerUnit[max[1]] = -1;  // Mark this item as used
        return max;  // Return max profit and index
    }

    // Main function to compute the maximum profit possible in the knapsack
    computeKnapSack() {
        this.findProfitPerUnit();  // Calculate profit per unit weights
        let i = 0;  // Index for traversing items
        while (i < this.profits.length) {
            if (this.bagSize == 0) {  // Check if the bag is full
                break;  // Exit if the bag is full
            }
            let [max, index] = this.findMaxProfit();  // Get the item with max profit per unit
            let weight = this.weights[index];  // Get the weight of that item
            if (this.bagSize > weight) {  // Check if the full item can be added
                this.x[index] = 1;  // Add full item to knapsack
                this.bagSize -= weight;  // Decrease remaining bag size
            } else {
                this.x[index] = (this.bagSize / weight);  // Add a fraction of the item
                this.bagSize = 0;  // Knapsack is now full
            }
            i++;  // Move to the next item
        }
    }

    // Calculate total profit earned from the items included in the knapsack
    getProfitEarned() {
        let profit = 0;  // Initialize profit
        for (let i = 0; i < this.x.length; i++) {
            profit += (this.profits[i] * this.x[i]);  // Compute total profit
        }
        return profit;  // Return total profit earned
    }

    // Calculate the total weight of items included in the knapsack
    getMaxCapacityFilled() {
        let weight = 0;  // Initialize weight
        for (let i = 0; i < this.x.length; i++) {
            weight += (this.weights[i] * this.x[i]);  // Compute total weight
        }
        return weight;  // Return total weight filled
    }
}

// Example Usage
let profits = [10, 5, 15, 7, 6, 18, 3];  // Profits of items
let weights = [2, 3, 5, 7, 1, 4, 1];  // Weights of items
let bagSize = 15;  // Total capacity of the knapsack

let knp = new KnapSack(profits, weights, bagSize);  // Create an instance of KnapSack

console.log(knp.getProfitEarned());  // Output the total profit earned
console.log(knp.getMaxCapacityFilled());  // Output the total weight filled
