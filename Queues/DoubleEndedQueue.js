/**
 * Double-Ended Queue Implementation
 * 
 * Overview:
 * A Double-Ended Queue (Deque) is a data structure that allows the insertion 
 * and deletion of elements from both ends, namely the front and the rear. 
 * This flexibility allows it to function as both a queue and a stack.
 * 
 * Key Points:
 * - Elements can be added or removed from both ends of the queue.
 * - Supports operations similar to both stacks and queues.
 * 
 * Types of Deques:
 * - **Input Restricted Deque**: Insertion can only be performed at one end 
 *   (either front or rear), while deletion can be done from both ends.
 * - **Output Restricted Deque**: Deletion can only be performed at one end 
 *   (either front or rear), while insertion can be done at both ends.
 * 
 * Operations:
 * - insertFront: Adds an element to the front of the deque.
 * - insertRear: Adds an element to the rear of the deque.
 * - deleteFront: Removes an element from the front of the deque.
 * - deleteRear: Removes an element from the rear of the deque.
 * - peek: Returns the front and rear elements without removing them.
 * - display: Displays the current elements in the deque.
 * 
 * Time and Space Complexity:
 * - Time Complexity for insertions and deletions: O(1)
 * - Space Complexity: O(n), where n is the size of the deque.
 * 
 * Advantages:
 * - Offers flexibility by allowing operations on both ends.
 * - Efficient for certain types of applications, such as managing playlists or browsing history.
 * 
 * Disadvantages:
 * - More complex implementation compared to a standard queue.
 * 
 * Real-World Examples:
 * - **Browser History**: Allowing users to navigate back and forth through web pages.
 * - **Playlist Management**: Adding or removing songs from both ends of a playlist.
 * - **Undo/Redo Operations**: In text editors where actions can be undone or redone.
 * 
 * Applications:
 * - Used in scenarios where data needs to be managed dynamically from both ends.
 * - Suitable for implementing buffers, such as in video streaming applications.
 * - Helpful in managing requests in real-time processing systems.
 */

class DoubleEndedQueue {
    constructor() {
        this.maxSize = 5; // Set the maximum size of the deque
        this.queue = new Array(this.maxSize).fill(null); // Initialize the deque with null values
        this.front = -1; // Initialize the front pointer
        this.rear = -1; // Initialize the rear pointer
    }

    // Inserts an element at the front of the deque
    insertFront(element) {
        if (this.isFull()) {
            console.log("Deque is Full"); // Check if the deque is full
            return;
        }

        if (this.front === -1) {
            // If deque is empty, set both pointers to 0
            this.front = 0;
            this.rear = 0;
        } else {
            // Move front pointer backward with wrap-around
            this.front = (this.front - 1 + this.maxSize) % this.maxSize;
        }
        this.queue[this.front] = element; // Add element to the front
    }

    // Inserts an element at the rear of the deque
    insertRear(element) {
        if (this.isFull()) {
            console.log("Deque is Full"); // Check if the deque is full
            return;
        }

        if (this.rear === -1) {
            // If deque is empty, set both pointers to 0
            this.rear = 0;
            this.front = 0;
        } else {
            // Move rear pointer forward with wrap-around
            this.rear = (this.rear + 1) % this.maxSize;
        }
        this.queue[this.rear] = element; // Add element to the rear
    }

    // Removes an element from the front of the deque
    deleteFront() {
        if (this.isEmpty()) {
            console.log("Deque is Empty"); // Check if the deque is empty
            return;
        }

        this.queue[this.front] = null; // Remove the element from the front
        if (this.front === this.rear) {
            // If there was only one element, reset both pointers
            this.front = -1;
            this.rear = -1;
        } else {
            // Move front pointer forward with wrap-around
            this.front = (this.front + 1) % this.maxSize;
        }
    }

    // Removes an element from the rear of the deque
    deleteRear() {
        if (this.isEmpty()) {
            console.log("Deque is Empty"); // Check if the deque is empty
            return;
        }

        this.queue[this.rear] = null; // Remove the element from the rear
        if (this.front === this.rear) {
            // If there was only one element, reset both pointers
            this.front = -1;
            this.rear = -1;
        } else {
            // Move rear pointer backward with wrap-around
            this.rear = (this.rear - 1 + this.maxSize) % this.maxSize;
        }
    }

    // Returns the front and rear elements without removing them
    peek() {
        if (!this.isEmpty()) {
            return [this.queue[this.front], this.queue[this.rear]]; // Return front and rear elements
        } else {
            console.log("Deque is Empty"); // Check if the deque is empty
        }
    }

    // Displays the current elements in the deque
    display() {
        if (this.isEmpty()) {
            console.log("Deque is Empty"); // Display message if the deque is empty
            return;
        }

        let i = this.front; // Start from the front pointer
        let result = "";
        do {
            result += this.queue[i] + " "; // Append current element to result
            i = (i + 1) % this.maxSize; // Move to the next index with wrap-around
        } while (i !== this.rear);
        result += this.queue[this.rear]; // Add the rear element to the result
        console.log(result); // Display the current deque elements
    }

    // Checks if the deque is full
    isFull() {
        return (this.rear + 1) % this.maxSize === this.front; // Check for full condition
    }

    // Checks if the deque is empty
    isEmpty() {
        return this.front === -1 && this.rear === -1; // Check for empty condition
    }
}

// Example usage
const deque = new DoubleEndedQueue();
deque.insertRear(1);
deque.insertRear(2);
deque.insertFront(3);
deque.insertFront(4);
deque.display(); // Displays current elements in the deque
console.log(deque.peek()); // Displays front and rear elements
deque.deleteFront(); // Removes the front element
deque.display(); // Displays updated elements in the deque
deque.deleteRear(); // Removes the rear element
deque.display(); // Displays updated elements in the deque
