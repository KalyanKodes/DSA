/**
 * Priority Queue Implementation
 * 
 * Overview:
 * A Priority Queue is a specialized data structure where each element 
 * is assigned a priority, and elements are dequeued based on their 
 * priority rather than the order in which they were added.
 * 
 * Key Points:
 * - Elements are inserted and removed based on priority.
 * - Two types of priority queues exist:
 *   1. **Min-Priority Queue**: The element with the lowest priority 
 *      is removed first.
 *   2. **Max-Priority Queue**: The element with the highest priority 
 *      is removed first.
 * 
 * Operations:
 * - enqueue(element, priority): Inserts an element with a specific priority into the queue.
 * - dequeue(): Removes the element with the highest priority from the queue.
 * - peek(): Returns the element with the highest priority without removing it.
 * - isEmpty(): Checks if the queue is empty.
 * - isFull(): Checks if the queue has reached its maximum capacity.
 * - displayQueue(): Displays all elements in the queue along with their priorities.
 * 
 * Time and Space Complexity:
 * - Time Complexity:
 *   - enqueue: O(n) in the worst case (if the element is inserted at the end).
 *   - dequeue: O(n) due to shifting elements (if implemented with an array).
 *   - peek: O(1).
 *   - displayQueue: O(n).
 * 
 * - Space Complexity: O(n), where n is the number of elements in the queue.
 * 
 * Real-World Examples:
 * - **Task Scheduling**: In operating systems, tasks are scheduled 
 *   based on their priority (e.g., critical system processes get 
 *   higher priority).
 * - **Hospital Emergency Rooms**: Patients are treated based on 
 *   the severity of their condition rather than their arrival time.
 * - **Network Traffic Management**: Data packets are sent based on 
 *   priority to ensure that important data is transmitted first.
 * 
 * Applications:
 * - Used in Dijkstra's algorithm for shortest path finding in graphs.
 * - Utilized in Huffman coding for data compression.
 * - Helpful in managing scheduled tasks in multi-threaded applications.
 */

class PriorityQueue {
    constructor() {
        this.queue = []; // Initialize the queue as an empty array
        this.size = 0;   // Initialize the size of the queue
    }

    // Checks if the queue is empty
    isEmpty() {
        return this.size === 0; // Returns true if size is 0
    }

    // Checks if the queue is full
    isFull() {
        return this.size === 5; // Assuming a fixed size of 5
    }

    // Inserts an element with a specific priority into the queue
    enqueue(element, priority) {
        if (this.isFull()) {
            // Queue is full, cannot insert new element
            return;
        }

        const item = { element: element, priority: priority }; // Create item object
        if (this.isEmpty()) {
            this.queue.push(item); // Add the first element
        } else {
            let flag = false; // Flag to indicate insertion position found
            for (let i = 0; i < this.queue.length; i++) {
                // Insert in priority order
                if (priority > this.queue[i].priority) {
                    this.queue.splice(i, 0, item); // Insert item at the correct index
                    flag = true; // Set flag to true as insertion is done
                    break;
                }
            }
            if (!flag) {
                this.queue.push(item); // If no higher priority found, add to the end
            }
        }
        this.size++; // Increment the size of the queue
    }

    // Removes the element with the highest priority (front of the queue)
    dequeue() {
        if (this.isEmpty()) {
            // Queue is empty, cannot dequeue
            return;
        }
        this.queue.splice(0, 1); // Remove the first element
        this.size--; // Decrement the size of the queue
    }

    // Returns the element at the front of the queue without removing it
    peek() {
        if (this.isEmpty()) {
            // Queue is empty
            return;
        }
        return this.queue[0]; // Return the front element
    }

    // Displays all elements in the queue
    displayQueue() {
        if (this.isEmpty()) {
            // Queue is empty
            return;
        }
        let result = ""; // Initialize result string
        this.queue.forEach((item) => {
            result += item.element + ":" + item.priority + " | "; // Append each item to result
        });
        console.log(result + "\n"); // Display the formatted queue
    }
}

// Example usage
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Task 1", 2); // Lower number indicates higher priority
priorityQueue.enqueue("Task 2", 1); // Task 2 has higher priority
priorityQueue.enqueue("Task 3", 3);
priorityQueue.displayQueue(); // Display all tasks in the queue
priorityQueue.peek(); // View the highest priority task
priorityQueue.dequeue(); // Remove the highest priority task
priorityQueue.displayQueue(); // Display updated tasks in the queue
