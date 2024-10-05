/*
 * Job Sequencing Problem
 * ----------------------
 * The Job Sequencing Problem is a scheduling problem where we are given a set of jobs,
 * each with a profit and a deadline, and the objective is to schedule the jobs to maximize
 * the total profit while ensuring that no jobs overlap their deadlines.
 * 
 * Time Complexity: O(n^2)
 * Where:
 *  - n is the number of jobs.
 * 
 * Space Complexity: O(n)
 * Where:
 *  - n is the number of time slots.
 * 
 * Steps of the Algorithm:
 * 1. **Max Slot Calculation**:
 *    - Determine the maximum slot (deadline) for the jobs.
 * 
 * 2. **Job Allocation**:
 *    - Allocate each job to the latest possible slot before its deadline.
 *    - If a slot is already occupied, attempt to allocate it to an earlier available slot.
 * 
 * 3. **Profit Calculation**:
 *    - Sum the profits of the jobs successfully allocated in the time slots.
 * 
 * Usage of the Job Sequencing Algorithm:
 * - Job scheduling in manufacturing.
 * - Project scheduling to maximize profit.
 * - Efficient task prioritization with deadlines.
 * 
 * Key Concepts:
 * - **Greedy Approach**: The algorithm uses a greedy strategy to always allocate jobs to the latest available slot.
 * 
 * Example Use Case:
 * Suppose we have jobs with profits [35, 30, 25, 20, 5] and deadlines [3, 4, 4, 2, 3]. 
 * The algorithm will determine the best sequence to maximize the profit without exceeding the deadlines.
 */

class JobSequence {
    constructor(profits, slots) {
        this.profits = profits; // Store job profits
        this.timeSlots = new Array(this.findMaxSlot(slots)).fill(null); // Create array for time slots
        this.maxProfit = this.findProfit(this.profits, slots, this.timeSlots); // Calculate the maximum profit
    }

    findMaxSlot(slots) {
        // Find the maximum slot value (deadline) among the jobs
        let maxSlot = slots[0];
        for (let i = 0; i < slots.length; i++) {
            maxSlot = Math.max(maxSlot, slots[i]); // Update max slot if a larger deadline is found
        }
        return maxSlot; // Return the maximum slot
    }

    findProfit(profits, slots, timeSlots) {
        // Allocate each job to a time slot
        for (let i = 0; i < profits.length; i++) {
            this.allocateJob(slots[i], i); // Try to allocate job i to the latest available slot
        }
        return this.calculateProfit(this.timeSlots); // Return the total profit after allocation
    }

    allocateJob(waitingTime, job) {
        // Allocate a job to the latest available time slot
        if (waitingTime > 0) {
            let toAllocateSlot = waitingTime - 1; // Determine the time slot to allocate the job
            if (this.timeSlots[toAllocateSlot] === null) { // If the time slot is empty
                this.timeSlots[toAllocateSlot] = job; // Allocate the job to this time slot
            } else { 
                this.allocateJob(toAllocateSlot, job); // Try to allocate the job to an earlier time slot
            }
        }
    }

    calculateProfit(timeSlots) {
        // Calculate the total profit from the jobs allocated to the time slots
        let profit = 0;
        for (let i = 0; i < timeSlots.length; i++) {
            if (timeSlots[i] !== null) { // If a job was allocated to this time slot
                profit += this.profits[timeSlots[i]]; // Add the job's profit to the total profit
            }
        }
        return profit; // Return the total profit
    }
}

// Example usage
let profits = [35, 30, 25, 20, 5];
let slots = [3, 4, 4, 2, 3];

let jsq = new JobSequence(profits, slots);
console.log(jsq.maxProfit); // Output the maximum profit
