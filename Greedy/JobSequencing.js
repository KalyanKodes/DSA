/*
 * Job Sequencing Problem
 * ----------------------
 * Overview:
 * The Job Sequencing Problem is a scheduling problem that aims to schedule a set of jobs, 
 * each with a specified profit and deadline, in such a way that maximizes the total profit 
 * while ensuring that no jobs overlap their deadlines.
 *
 * Advantages:
 * - Maximizes profit by prioritizing jobs based on their profitability and deadlines.
 * - Efficiently utilizes available time slots.
 * 
 * Disadvantages:
 * - The solution may not be optimal if jobs cannot be rescheduled.
 * - The greedy approach may not always yield the best overall scheduling when jobs have 
 *   interdependencies or complex deadlines.
 *
 * Operations:
 * - Schedule jobs based on their deadlines and profits.
 * - Calculate total profit based on allocated jobs.
 *
 * Time Complexity: O(n^2)
 * Where:
 *  - n is the number of jobs.
 * 
 * Space Complexity: O(n)
 * Where:
 *  - n is the number of time slots created for scheduling jobs.
 *
 * Real-World Examples:
 * - Job scheduling in manufacturing processes to maximize productivity.
 * - Task prioritization in project management where tasks have specific deadlines and 
 *   profit implications.
 *
 * Applications:
 * - Used in job scheduling algorithms in operating systems.
 * - Applicable in resource allocation problems where profit maximization is critical.
 * - Relevant in finance for project bidding and selection based on profit margins and 
 *   timelines.
 */

class JobSequence {
    constructor(profits, slots) {
        this.profits = profits; // Store job profits
        this.timeSlots = new Array(this.findMaxSlot(slots)).fill(null); // Create array for time slots
        this.maxProfit = this.findProfit(this.profits, slots, this.timeSlots); // Calculate the maximum profit
    }

    findMaxSlot(slots) {
        // Find the maximum slot value (deadline) among the jobs
        let maxSlot = slots[0]; // Initialize maxSlot with the first slot value
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
        let profit = 0; // Initialize profit to zero
        for (let i = 0; i < timeSlots.length; i++) {
            if (timeSlots[i] !== null) { // If a job was allocated to this time slot
                profit += this.profits[timeSlots[i]]; // Add the job's profit to the total profit
            }
        }
        return profit; // Return the total profit
    }
}

// Example usage
let profits = [35, 30, 25, 20, 5]; // Define job profits
let slots = [3, 4, 4, 2, 3]; // Define job deadlines

let jsq = new JobSequence(profits, slots); // Create an instance of JobSequence
console.log(jsq.maxProfit); // Output the maximum profit
