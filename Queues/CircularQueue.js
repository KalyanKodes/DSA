/**
 * Circular Queue Implementation
 * 
 * Overview:
 * A Circular Queue is a linear data structure that follows the First In First Out (FIFO) principle. 
 * It connects the end of the queue back to the front, effectively utilizing available space 
 * by avoiding gaps created by dequeuing elements.
 * 
 * Key Points:
 * - Efficient use of space compared to linear queues.
 * - Wraps around when the end of the queue is reached, enabling reuse of vacant spots.
 * 
 * Features:
 * - Fixed size queue that can be dynamically utilized.
 * - Resets front and rear pointers as elements are enqueued and dequeued.
 * 
 * Operations:
 * - enQueue: Adds an element to the rear of the queue.
 * - deQueue: Removes an element from the front of the queue.
 * - display: Displays the current elements in the queue.
 * - isFull: Checks if the queue is full.
 * - isEmpty: Checks if the queue is empty.
 * 
 * Time and Space Complexity:
 * - Time Complexity for enQueue and deQueue: O(1)
 * - Space Complexity: O(n), where n is the size of the queue.
 * 
 * Advantages:
 * - More efficient than a linear queue, especially in scenarios where space utilization 
 *   is crucial.
 * 
 * Disadvantages:
 * - Fixed size can lead to overflow if not managed properly.
 * 
 * Real-World Examples:
 * - **Task Scheduling**: Used in operating systems to manage processes and CPU task scheduling.
 * - **Print Queue**: Manages print jobs in a printer, ensuring that they are processed in the order they are received.
 * - **Networking**: Helps manage packets in routers and switches, ensuring data is sent in the order it was received.
 * 
 * Applications:
 * - Suitable for scenarios that require buffering, such as IO Buffers.
 * - Used in applications where a continuous stream of data needs to be processed, like in multimedia applications.
 * - Useful in scenarios where you need to maintain a fixed number of elements, such as in ring buffers.
 */

class CircularQueue {
    constructor() {
        this.size = 5; // Set the fixed size of the queue
        this.queue = new Array(this.size).fill(null); // Initialize the queue with null values for clarity
        this.front = -1; // Initialize front pointer
        this.rear = -1; // Initialize rear pointer
    }

    // Adds an element to the rear of the queue
    enQueue(element) {
        if (this.isFull()) {
            console.log("Queue is Full"); // Queue is full, cannot add more elements
            return;
        }

        if (this.isEmpty()) {
            this.front = 0; // Reset front to 0 when the first element is added
            this.rear = 0;  // Reset rear to 0 when the first element is added
        } else {
            this.rear = (this.rear + 1) % this.size; // Wrap around using modulo operation
        }

        this.queue[this.rear] = element; // Add element to the queue
    }

    // Removes an element from the front of the queue
    deQueue() {
        if (this.isEmpty()) {
            console.log("Queue is Empty"); // Queue is empty, cannot remove elements
            return;
        }

        this.queue[this.front] = null; // Remove the element from the front
        if (this.front === this.rear) { 
            this.front = -1; // Reset front pointer
            this.rear = -1;  // Reset rear pointer
        } else {
            this.front = (this.front + 1) % this.size; // Move front pointer forward
        }
    }

    // Displays the current elements in the queue
    display() {
        if (this.isEmpty()) {
            console.log("Queue is Empty"); // Display message if the queue is empty
            return;
        }
        console.log(this.queue); // Show the current queue elements
    }

    // Checks if the queue is full
    isFull() {
        return (this.rear + 1) % this.size === this.front; // Check for full condition
    }

    // Checks if the queue is empty
    isEmpty() {
        return this.front === -1; // Check for empty condition
    }
}

// Example usage
const cq = new CircularQueue();
cq.enQueue(1);
cq.enQueue(2);
cq.enQueue(3);
cq.enQueue(4);
cq.enQueue(5);
cq.display(); // Should display the current queue
cq.deQueue(); // Remove the front element
cq.display(); // Should display the updated queue after dequeue
