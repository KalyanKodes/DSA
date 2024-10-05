/*
 * Singly Linked List
 * -------------------
 * Overview:
 * A Singly Linked List is a linear data structure consisting of nodes, where each node contains two parts:
 * 1. **Data**: Stores the value of the element.
 * 2. **Next**: Holds the reference (link) to the next node in the sequence.
 * 
 * Unlike arrays, linked lists don't have a fixed size, and they grow and shrink dynamically during runtime. 
 * Insertion and deletion operations are more efficient than arrays as they don’t require shifting of elements.
 * However, accessing elements is slower in linked lists since random access is not allowed.
 * 
 * Key Features:
 * - **Dynamic Size**: The list grows and shrinks dynamically as elements are inserted or deleted.
 * - **Efficient Insertion and Deletion**: Adding or removing elements at the start or end can be done in O(1) or O(n) time.
 * - **Linear Structure**: Traversal is done sequentially from the head node to the end.
 * - **No Fixed Size**: Unlike arrays, no need to specify the size in advance.
 * 
 * Advantages:
 * - No need for pre-allocated memory; the list dynamically grows.
 * - Insertion and deletion are efficient compared to arrays.
 * 
 * Disadvantages:
 * - Accessing an element takes O(n) time since random access is not possible.
 * - Uses extra memory for storing pointers.
 * 
 * Operations Supported:
 * 1. **Insert at Front**: Add a new node at the beginning of the list.
 * 2. **Insert at End**: Add a new node at the end of the list.
 * 3. **Insert at Index**: Add a new node at a specific index.
 * 4. **Delete from Front**: Remove the node at the beginning of the list.
 * 5. **Delete from End**: Remove the node at the end of the list.
 * 6. **Delete at Index**: Remove a node at a specific index.
 * 7. **Search Element**: Find the index of a node containing a specific value.
 * 8. **Display List**: Print all the elements in the list.
 * 9. **Check if Empty**: Determine if the list is empty.
 * 10. **Get Size**: Retrieve the number of elements in the list.
 * 
 * Time Complexity:
 * - Insertion at the front: O(1)
 * - Insertion at the end: O(n)
 * - Deletion from the front: O(1)
 * - Deletion from the end: O(n)
 * - Insertion/Deletion at any position: O(n)
 * - Searching an element: O(n)
 * - Traversal: O(n)
 * Where:
 *  - n is the number of nodes in the list.
 * 
 * Space Complexity:
 * - O(n), where n is the number of nodes in the list.
 * 
 * Real-World Examples:
 * - **Music Playlist**: Each song is a node in the list, and songs are played sequentially.
 * - **Undo Functionality**: In applications like text editors, actions are stored in a linked list to enable undo operations.
 * - **Image Viewer**: Images are linked so that the viewer can move to the next or previous image.
 * - **Social Media Feeds**: Posts or messages can be represented using linked lists for sequential access.
 * - **Train Carriages**: Each carriage is linked to the next, similar to nodes in a linked list.
 * 
 * Applications:
 * - **Implementation of Stacks and Queues**: Linked lists are used to implement stack and queue data structures.
 * - **Dynamic Memory Allocation**: Managing free memory spaces in operating systems.
 * - **Hash Tables**: Using linked lists to handle collisions via chaining.
 * - **Graph Implementation**: Adjacency lists in graphs are often implemented using linked lists.
 * - **Polynomial Manipulation**: Representing polynomials with linked lists where each node contains coefficient and exponent.
 */

console.clear();

class Node {
    constructor(data) {
        this.data = data; // Data stored in the node
        this.next = null; // Reference to the next node
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null; // Head (first node) of the list
        this.size = 0;    // Size of the list
    }

    insertFirst(value) {
        // Insert a new node at the beginning of the list
        let newNode = new Node(value);
        newNode.next = this.head; // New node points to the current head
        this.head = newNode;      // Update head to the new node
        this.size++;              // Increment size
    }

    insertLast(value) {
        // Insert a new node at the end of the list
        let newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode; // If list is empty, new node is the head
        } else {
            let lastNode = this.head;
            while (lastNode.next !== null) {
                lastNode = lastNode.next; // Traverse to the last node
            }
            lastNode.next = newNode; // Last node points to the new node
        }
        this.size++; // Increment size
    }

    insertAtIndex(value, index) {
        // Insert a new node at a specific index
        if (index < 0 || index > this.size) {
            // Index out of range
            console.log("Index out of Range");
            return;
        }
        if (index === 0) {
            this.insertFirst(value); // Insert at the front
        } else {
            let count = 0;
            let prevNode = this.head;
            let curNode = this.head;
            while (count !== index) {
                prevNode = curNode;
                curNode = curNode.next;
                count++;
            }
            let newNode = new Node(value);
            prevNode.next = newNode;
            newNode.next = curNode;
            this.size++; // Increment size
        }
    }

    deleteFront() {
        // Delete the node at the front of the list
        if (this.isEmpty()) {
            console.log("List is Empty");
            return;
        }
        this.head = this.head.next; // Update head to the next node
        this.size--; // Decrement size
    }

    deleteLast() {
        // Delete the node at the end of the list
        if (this.isEmpty()) {
            console.log("List is Empty");
            return;
        }
        if (this.head.next === null) {
            // Only one node in the list
            this.head = null;
        } else {
            let prevNode = this.head;
            let curNode = this.head;
            while (curNode.next !== null) {
                prevNode = curNode;
                curNode = curNode.next;
            }
            prevNode.next = null; // Remove reference to last node
        }
        this.size--; // Decrement size
    }

    deleteAtIndex(index) {
        // Delete a node at a specific index
        if (this.isEmpty()) {
            console.log("List is Empty");
            return;
        }
        if (index < 0 || index >= this.size) {
            console.log("Index out of Range");
            return;
        }
        if (index === 0) {
            this.deleteFront();
        } else {
            let count = 0;
            let prevNode = this.head;
            let curNode = this.head;
            while (count !== index) {
                prevNode = curNode;
                curNode = curNode.next;
                count++;
            }
            prevNode.next = curNode.next; // Remove the node at index
            this.size--; // Decrement size
        }
    }

    searchElement(element) {
        // Search for an element in the list
        if (this.isEmpty()) {
            console.log("List is Empty");
            return -1;
        }
        let temp = this.head;
        let count = 0;
        while (temp !== null) {
            if (temp.data === element) {
                // Element found
                console.log(`${element} found at index ${count}`);
                return count;
            }
            temp = temp.next;
            count++;
        }
        console.log(`${element} not found`);
        return -1; // Element not found
    }

    displayList() {
        // Display all elements in the list
        if (this.isEmpty()) {
            console.log("List is Empty");
            return;
        }
        let temp = this.head;
        let result = "";
        while (temp !== null) {
            result += temp.data + " -> ";
            temp = temp.next;
        }
        result += "null";
        console.log(result);
    }

    isEmpty() {
        // Check if the list is empty
        return this.head === null;
    }

    getSize() {
        // Get the size of the list
        return this.size;
    }
}

// Example usage:
let sll = new SinglyLinkedList();
sll.insertFirst(10);
sll.insertLast(20);
sll.insertAtIndex(15, 1);
sll.displayList(); // Output: 10 -> 15 -> 20 -> null
sll.searchElement(15); // Output: 15 found at index 1
sll.deleteAtIndex(1);
sll.displayList(); // Output: 10 -> 20 -> null
console.log("Size of list:", sll.getSize()); // Output: Size of list: 2
