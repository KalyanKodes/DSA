/*
 * KnapSack Problem
 * ----------------
 * The KnapSack problem is a classic optimization problem that aims to determine 
 * the maximum value of items that can be placed in a bag without exceeding its capacity. 
 * Given the weights and profits of items, the goal is to maximize profit while 
 * keeping the total weight within the bag's size limit.
 * 
 * Time Complexity: O(n^2)
 * Where:
 *  - n is the number of items.
 * 
 * Space Complexity: O(n)
 * Where:
 *  - n is the number of items.
 * 
 * Steps of the Algorithm:
 * 1. **Profit per Unit Calculation**:
 *    - For each item, calculate the profit per unit weight and store it in an array.
 * 
 * 2. **Finding Maximum Profit**:
 *    - In each iteration, find the item with the highest profit per unit that can still fit 
 *      in the remaining capacity of the bag.
 * 
 * 3. **Update Bag Capacity**:
 *    - If the entire item can be added, set its corresponding entry in the solution array 
 *      to 1 (indicating full inclusion). If only a fraction can fit, update the entry 
 *      with the fraction and set the remaining bag capacity to zero.
 * 
 * Usage of the KnapSack Algorithm:
 * - Budgeting and resource allocation problems.
 * - Resource management in computing systems.
 * - Investment portfolio optimization.
 * 
 * Key Concepts:
 * - **Greedy Approach**: This algorithm employs a greedy strategy by always choosing 
 *   the next item with the highest profit-to-weight ratio, leading to a suboptimal solution 
 *   for the 0/1 knapsack problem.
 * 
 * Example Use Case:
 * Suppose we have items with profits [10, 5, 15, 7, 6, 18, 3] and weights [2, 3, 5, 7, 1, 4, 1]. 
 * With a bag capacity of 15, the algorithm will determine the best combination of items 
 * to maximize profit.
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
