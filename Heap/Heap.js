// Heap is a dataStructure where used to get a item when there is a condition over a set of collection of items with constant time complexity
// It is stored as an array but in reality it is represented as Complete Binary Tree
// A complete binary tree is a type of binary tree in which all levels, except possibly the last, are completely filled, and all nodes are as far left as possible.
// There are two types of Heaps:
// 1.Max Heap: Every node i , is less than or equal to it's parent node execpt root node cause it don't have any parent node. The root node value will be always maximum
// 2.Min Heap: Every node i , is greater than or equal to it's parent node execpt root node cause it don't have any parent node. The root node value will be always min
// Insertion of an new Element will take O(logn) because the comparisions need to be done to maintain the characterstic of a heap tree we need to traverse all the levels of tree
// till we reach the root node. The height of a tree is (logn)
// When deleting an element it is not possible that we can delete any element in tree, we are only allowed to delted the root node and adjust the tree
// After deleting the root node we insert the last element as root node of the tree and compare it's child nodes and swap
// When inserting the tree is modified from bottom to top , but in deleting the tree is modified from top to bottom
// If we keep storing the deleting elements, and we delete all the elements in the tree then the deleted elements array will be in sorted order
console.clear();
class Heap {
    constructor() {
        this.maxHeap = [];
        this.minHeap = [];
        this.maxHeapRemovedItems = [];
        this.minHeapRemovedItems = [];
    }

    // Heapify up to maintain heap property during insert
    heapifyUp(heap, i, type) {
        let parentIndex = Math.floor((i - 1) / 2);
        while (i > 0) {
            if (type === "max" ? heap[parentIndex] < heap[i] : heap[parentIndex] > heap[i]) {
                [heap[parentIndex], heap[i]] = [heap[i], heap[parentIndex]]; // Swap
            } else {
                break;
            }
            i = parentIndex;
            parentIndex = Math.floor((i - 1) / 2);
        }
    }

    // Insert element into the heap and heapify up
    insertIntoHeap(heap, element, type) {
        heap.push(element);
        this.heapifyUp(heap, heap.length - 1, type);
    }

    insertElement(element) {
        this.insertIntoHeap(this.maxHeap, element, "max");
        this.insertIntoHeap(this.minHeap, element, "min");
    }

    // Heapify down after removing the root
    heapifyDown(heap, i, type) {
        const length = heap.length;
        while (true) {
            let leftChild = 2 * i + 1;
            let rightChild = 2 * i + 2;
            let swapIndex = i;

            if (leftChild < length && (type === "max" ? heap[leftChild] > heap[swapIndex] : heap[leftChild] < heap[swapIndex])) {
                swapIndex = leftChild;
            }

            if (rightChild < length && (type === "max" ? heap[rightChild] > heap[swapIndex] : heap[rightChild] < heap[swapIndex])) {
                swapIndex = rightChild;
            }

            if (swapIndex === i) break;
            
            [heap[i], heap[swapIndex]] = [heap[swapIndex], heap[i]]; // Swap
            i = swapIndex;
        }
    }

    // Remove root element and heapify down
    removeElement() {
        // For max heap
        if (this.maxHeap.length > 0) {
            this.maxHeapRemovedItems.push(this.maxHeap[0]);
            this.maxHeap[0] = this.maxHeap[this.maxHeap.length - 1];
            this.maxHeap.pop();
            this.heapifyDown(this.maxHeap, 0, "max");
        }

        // For min heap
        if (this.minHeap.length > 0) {
            this.minHeapRemovedItems.push(this.minHeap[0]);
            this.minHeap[0] = this.minHeap[this.minHeap.length - 1];
            this.minHeap.pop();
            this.heapifyDown(this.minHeap, 0, "min");
        }
    }
}