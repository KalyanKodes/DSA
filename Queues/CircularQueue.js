// In circular Queue we can over come the disadvantage of Linear Queue
// We use the space efficently in Circular Queue by modifying rear = (rear + 1) % sizeOfQueue when enQueue, and front = (front + 1) % sizeOfQueue when deQueue


console.clear();
class CircularQueue {
    constructor() {
        this.size = 5;
        this.queue = new Array(this.size).fill(null); // Initialize with null for clarity
        this.front = -1;
        this.rear = -1;
    }

    enQueue(element) {
        if (this.isFull()) {
            // console.log("Queue is Full");
            return;
        }

        if (this.isEmpty()) {
            this.front = 0; // Reset front to 0
            this.rear = 0;  // Reset rear to 0
        } else {
            this.rear = (this.rear + 1) % this.size;
        }

        this.queue[this.rear] = element;
    }

    deQueue() {
        if (this.isEmpty()) {
            // console.log("Queue is Empty");
            return;
        }
        this.queue[this.front] = null;
        if (this.front === this.rear) { 
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }
    }

    display() {
        if (this.isEmpty()) {
            // console.log("Queue is Empty");
            return;
        }
        console.log(this.queue);
    }

    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }

    isEmpty() {
        return this.front === -1;
    }
}



