/**
 * Linear Queue Implementation
 * 
 * Overview:
 * A Linear Queue is a sequential data structure that follows the 
 * FIFO (First In First Out) principle. The first element added to 
 * the queue will be the first one to be removed.
 * 
 * Key Points:
 * - Elements are added to the rear and removed from the front.
 * - It is similar to a queue of people waiting in line; the first person 
 *   to arrive is the first to be served.
 * 
 * Operations:
 * - enQueue(element): Adds an element to the rear of the queue.
 * - deQueue(): Removes an element from the front of the queue.
 * - peek(): Returns the front element without removing it.
 * - isEmpty(): Checks if the queue is empty.
 * - isFull(): Checks if the queue has reached its maximum capacity.
 * - display(): Displays all elements in the queue.
 * 
 * Time and Space Complexity:
 * - Time Complexity:
 *   - enQueue: O(1) (constant time as it adds an element at the end).
 *   - deQueue: O(1) (constant time as it removes an element from the front).
 *   - peek: O(1) (constant time as it accesses the front element).
 *   - display: O(n) (linear time to iterate through the elements).
 * 
 * - Space Complexity: O(n), where n is the maximum number of elements 
 *   that can be stored in the queue.
 * 
 * Real-World Examples:
 * - **CPU Scheduling**: Tasks are managed in the order they arrive 
 *   for execution.
 * - **Print Queue**: Print jobs are processed in the order they are 
 *   submitted.
 * - **Call Center**: Incoming calls are handled in the order they are received.
 * 
 * Applications:
 * - Used in breadth-first search algorithms for graph traversal.
 * - Useful in scenarios requiring ordered processing of tasks.
 * - Implemented in various simulation systems, such as modeling traffic.
 */

class LinearQueue {
    constructor(size) {
        this.size = size;             // Maximum size of the queue
        this.queue = new Array(size); // Array to hold queue elements
        this.front = -1;              // Index of the front element
        this.rear = -1;               // Index of the rear element
    }

    // Adds an element to the rear of the queue
    enQueue(element) {
        if (this.isFull()) {
            console.log("Queue is Full"); // Cannot add, queue is full
            return;
        }

        if (this.isEmpty()) {
            this.front = 0; // Initialize front index
        }
        this.queue[++this.rear] = element; // Increment rear and add element
    }

    // Removes an element from the front of the queue
    deQueue() {
        if (this.isEmpty()) {
            console.log("Queue is Empty"); // Cannot remove, queue is empty
            return;
        }

        if (this.rear === this.front) {
            this.front = -1; // Reset indices if last element is dequeued
            this.rear = -1;
            return;
        }
        this.front++; // Increment front index
    }

    // Returns the front element without removing it
    peek() {
        if (this.isEmpty()) {
            console.log("Queue is Empty"); // Queue is empty
            return;
        }

        console.log(this.queue[this.front]); // Return the front element
    }

    // Displays all elements in the queue
    display() {
        if (this.isEmpty()) {
            console.log("Queue is Empty"); // Queue is empty
            return;
        }
        let result = ""; // Initialize result string
        for (let i = this.front; i <= this.rear; i++) {
            result += this.queue[i] + " "; // Append each element to result
        }
        console.log(result); // Display the formatted queue
    }

    // Checks if the queue is full
    isFull() {
        return this.rear === this.size - 1; // Returns true if full
    }

    // Checks if the queue is empty
    isEmpty() {
        return this.front === -1; // Returns true if empty
    }
}

// Example usage
const linearQueue = new LinearQueue(5);
linearQueue.enQueue(1);
linearQueue.enQueue(2);
linearQueue.enQueue(3);
linearQueue.display(); // Display queue: 1 2 3
linearQueue.peek(); // View front element: 1
linearQueue.deQueue(); // Remove front element
linearQueue.display(); // Display updated queue: 2 3
