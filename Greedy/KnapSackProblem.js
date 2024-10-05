/*
 * KnapSack Problem
 * ----------------
 * Overview:
 * ---------
 * The KnapSack problem is a classic optimization problem where the objective is to 
 * maximize the total value of items placed in a knapsack (bag) without exceeding 
 * its weight capacity. Each item has a specific weight and profit, and you need 
 * to decide the fraction of the item to include in the knapsack (for fractional knapsack). 
 * This version of the algorithm uses a greedy approach, focusing on selecting 
 * the item with the highest profit-to-weight ratio at each step.
 * 
 * Advantages:
 * ----------
 * - The algorithm is simple and efficient for solving fractional KnapSack problems.
 * - It provides an optimal solution for fractional cases due to the greedy approach.
 * 
 * Disadvantages:
 * --------------
 * - The greedy method is not applicable for the 0/1 KnapSack problem (where items 
 *   cannot be divided); it may lead to suboptimal results in such cases.
 * - It requires sorting or recalculating profit-to-weight ratios repeatedly, which 
 *   can be inefficient for very large datasets.
 * 
 * Operations:
 * -----------
 * - **Profit Per Unit Calculation**: Compute the profit-to-weight ratio for each item.
 * - **Finding Maximum Profit**: Select the item with the highest ratio that fits in 
 *   the remaining capacity.
 * - **Bag Capacity Update**: Update the knapsack capacity as items (or fractions of items) 
 *   are included.
 * 
 * Time Complexity: O(n log n)
 * - Where n is the number of items.
 * 
 * Space Complexity: O(n)
 * - Where n is the number of items.
 * 
 * Real-World Examples:
 * --------------------
 * - Budgeting and resource allocation problems.
 * - Resource management in computing systems.
 * - Investment portfolio optimization.
 * 
 * Applications:
 * -------------
 * - Used in logistics for load optimization.
 * - Helps in financial decision-making to maximize return on investments.
 * - Employed in the field of computer science for memory management and resource 
 *   allocation.
 */

class KnapSack {
    constructor(profits, weights, bagSize) {
        this.bagSize = bagSize; // Initialize the bag size
        this.profits = profits; // Store item profits
        this.weights = weights; // Store item weights
        this.profitsPerUnit = new Array(this.profits.length).fill(-1); // Array for profit per unit
        this.x = new Array(this.profits.length).fill(0); // Array to store item inclusion
        this.computeKnapSack(); // Compute the optimal solution
    }

    findProfitPerUnit() {
        // Calculate profit per unit weight for each item
        for (let i = 0; i < this.profits.length; i++) {
            this.profitsPerUnit[i] = (this.profits[i] / this.weights[i]);
        }
    }

    findMaxProfit() {
        // Find the item with the maximum profit per unit weight
        let max = [this.profitsPerUnit[0], 0];
        for (let i = 1; i < this.profitsPerUnit.length; i++) {
            if (max[0] < this.profitsPerUnit[i]) {
                max = [this.profitsPerUnit[i], i];
            }
        }
        this.profitsPerUnit[max[1]] = -1; // Mark this item as processed
        return max; // Return the max profit and its index
    }

    computeKnapSack() {
        this.findProfitPerUnit(); // Calculate profit per unit
        let i = 0; // Counter for items
        while (i < this.profits.length) {
            if (this.bagSize == 0) { // Check if the bag is full
                break; // Exit if no capacity left
            }
            let [max, index] = this.findMaxProfit(); // Find the max profit item
            let weight = this.weights[index]; // Get the weight of the item
            if (this.bagSize > weight) { // Check if the entire item can fit
                this.x[index] = 1; // Include the full item
                this.bagSize -= weight; // Decrease the bag capacity
            } else { // Only a fraction can fit
                this.x[index] = (this.bagSize / weight); // Store the fraction
                this.bagSize = 0; // Bag is now full
            }
            i++; // Move to the next item
        }
    }

    getProfitEarned() {
        // Calculate the total profit earned from included items
        let profit = 0;
        for (let i = 0; i < this.x.length; i++) {
            profit += (this.profits[i] * this.x[i]); // Sum profits of included items
        }
        return profit; // Return total profit
    }

    getMaxCapacityFilled() {
        // Calculate the total weight of items included in the bag
        let weight = 0;
        for (let i = 0; i < this.x.length; i++) {
            weight += (this.weights[i] * this.x[i]); // Sum weights of included items
        }
        return weight; // Return total weight
    }
}

// Example usage
let profits = [10, 5, 15, 7, 6, 18, 3];
let weights = [2, 3, 5, 7, 1, 4, 1];
let bagSize = 15;

let knp = new KnapSack(profits, weights, bagSize);

console.log(knp.getProfitEarned()); // Output the total profit earned
console.log(knp.getMaxCapacityFilled()); // Output the total weight in the bag
