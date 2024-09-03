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
class Heap{
    constructor(){
        this.maxHeap = new Array();
        this.minHeap = new Array();
        this.maxHeapRemovedItems = new Array();
        this.minHeapRemovedItems = new Array();
    }

    insertIntoHeap(heap , element , type){
        heap.push(element);
        let i = heap.length - 1;
        while(i > 0){
            let parentIndex = Math.floor(i / 2) ;
            if(type === "max" ? heap[parentIndex] < heap[i] : heap[parentIndex] > heap[i]){
                let temp = heap[parentIndex];
                heap[parentIndex] = heap[i];
                heap[i] = temp;
            }
            i = Math.floor(i / 2);
        }
    }
    insertElement(element){
        this.insertIntoHeap(this.maxHeap , element , "max");
        this.insertIntoHeap(this.minHeap , element , "min");
    }

    removeElement(){
        // For max heap
        if(this.maxHeap.length > 0){
            this.maxHeapRemovedItems.push(this.maxHeap[0]);
            this.maxHeap[0] = this.maxHeap[this.maxHeap.length - 1];
            this.maxHeap.splice(this.maxHeap.length - 1 , 1);
        }
        if(this.minHeap.length > 0){
            this.minHeapRemovedItems.push(this.minHeap[0]);
            this.minHeap[0] = this.minHeap[this.minHeap.length - 1];
            this.minHeap.splice(this.minHeap.length - 1 , 1);
        }

    }
}

let h = new Heap();

h.insertElement(5);
h.insertElement(4);
h.insertElement(10);
h.insertElement(6);
h.insertElement(1);
// h.removeElement();
// h.removeElement();
// h.removeElement();
// h.removeElement();
// h.removeElement();
console.log(...h.maxHeap)
console.log(...h.minHeap)
console.log(...h.maxHeapRemovedItems)
console.log(...h.minHeapRemovedItems)


