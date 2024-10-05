/*
    Overview:
    - A Heap is a specialized tree-based data structure that satisfies the heap property. 
    - It can be implemented as a Max Heap or a Min Heap, where:
        - Max Heap: The key at a parent node is always greater than or equal to the keys of its children.
        - Min Heap: The key at a parent node is always less than or equal to the keys of its children.

    Key Points:
    - Heaps are often used to implement priority queues.
    - It is stored as an array but can be represented as a Complete Binary Tree.

    Features:
    - Complete Binary Tree structure ensures efficient storage and retrieval.
    - Supports dynamic resizing as elements are added or removed.

    Operations and their Time Complexity:
    1. Insertion: O(log n)
    2. Deletion (of the root): O(log n)
    3. Accessing the max/min element: O(1)

    Space Complexity: O(n), where n is the number of elements in the heap.

    Why We Use It:
    - Heaps provide an efficient way to manage and access data in scenarios where we need to frequently access the maximum or minimum element.

    Applications:
    - Implementing priority queues.
    - Heap Sort algorithm.
    - Graph algorithms like Dijkstra's and Prim's.

    Advantages:
    - Efficient in accessing max/min elements.
    - Relatively fast insertion and deletion.

    Disadvantages:
    - Not as efficient for searching elements.
    - Heaps are not a good choice for a data structure requiring frequent access to arbitrary elements.

*/

class Heap {
    constructor() {
        this.maxHeap = [];             // Array to store the Max Heap
        this.minHeap = [];             // Array to store the Min Heap
        this.maxHeapRemovedItems = []; // Array to keep track of removed items from Max Heap
        this.minHeapRemovedItems = []; // Array to keep track of removed items from Min Heap
    }

    // Heapify up to maintain heap property during insertion
    heapifyUp(heap, i, type) {
        let parentIndex = Math.floor((i - 1) / 2);
        while (i > 0) {
            if (type === "max" ? heap[parentIndex] < heap[i] : heap[parentIndex] > heap[i]) {
                [heap[parentIndex], heap[i]] = [heap[i], heap[parentIndex]]; // Swap
            } else {
                break; // Exit loop if the heap property is satisfied
            }
            i = parentIndex; // Move up the tree
            parentIndex = Math.floor((i - 1) / 2); // Update parent index
        }
    }

    // Insert element into the heap and heapify up
    insertIntoHeap(heap, element, type) {
        heap.push(element); // Add element to the heap
        this.heapifyUp(heap, heap.length - 1, type); // Maintain heap property
    }

    // Insert element into both max and min heaps
    insertElement(element) {
        this.insertIntoHeap(this.maxHeap, element, "max"); // Insert into Max Heap
        this.insertIntoHeap(this.minHeap, element, "min"); // Insert into Min Heap
    }

    // Heapify down after removing the root to maintain heap property
    heapifyDown(heap, i, type) {
        const length = heap.length;
        while (true) {
            let leftChild = 2 * i + 1; // Left child index
            let rightChild = 2 * i + 2; // Right child index
            let swapIndex = i; // Initialize swap index

            // Compare left child with current index
            if (leftChild < length && (type === "max" ? heap[leftChild] > heap[swapIndex] : heap[leftChild] < heap[swapIndex])) {
                swapIndex = leftChild; // Update swap index
            }

            // Compare right child with current index
            if (rightChild < length && (type === "max" ? heap[rightChild] > heap[swapIndex] : heap[rightChild] < heap[swapIndex])) {
                swapIndex = rightChild; // Update swap index
            }

            if (swapIndex === i) break; // Exit loop if the heap property is satisfied
            
            [heap[i], heap[swapIndex]] = [heap[swapIndex], heap[i]]; // Swap elements
            i = swapIndex; // Move down the tree
        }
    }

    // Remove root element and maintain heap property
    removeElement() {
        // For max heap
        if (this.maxHeap.length > 0) {
            this.maxHeapRemovedItems.push(this.maxHeap[0]); // Track removed item
            this.maxHeap[0] = this.maxHeap[this.maxHeap.length - 1]; // Move last element to root
            this.maxHeap.pop(); // Remove last element
            this.heapifyDown(this.maxHeap, 0, "max"); // Maintain heap property
        }

        // For min heap
        if (this.minHeap.length > 0) {
            this.minHeapRemovedItems.push(this.minHeap[0]); // Track removed item
            this.minHeap[0] = this.minHeap[this.minHeap.length - 1]; // Move last element to root
            this.minHeap.pop(); // Remove last element
            this.heapifyDown(this.minHeap, 0, "min"); // Maintain heap property
        }
    }
}
