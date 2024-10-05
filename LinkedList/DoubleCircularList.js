/*
 * Double Circular Linked List
 * ----------------------------
 * A Double Circular Linked List is a data structure that consists of nodes, where 
 * each node contains a reference to both the previous and next node. The last node 
 * points back to the head, forming a circular structure, and allows traversal in both 
 * directions (forward and backward). 
 * 
 * Time Complexity:
 * - Insertion and Deletion: O(1)
 * - Traversal: O(n)
 * Where:
 *  - n is the number of nodes in the list.
 * 
 * Space Complexity: O(n)
 * Where:
 *  - n is the number of nodes in the list.
 * 
 * Operations that can be performed:
 * 1. Insert an element at the front of the list.
 * 2. Insert an element at the end of the list.
 * 3. Delete the first element from the list.
 * 4. Delete the last element from the list.
 * 5. Display the contents of the list.
 * 
 * Advantages:
 * - Allows traversal in both directions (forward and backward).
 * - Efficient for insertions and deletions at both ends.
 * 
 * Disadvantages:
 * - Requires more memory due to storing two pointers per node.
 * - More complex than singly linked lists.
 * 
 * Real-world examples:
 * - Navigation systems where users can traverse back and forth.
 * - Implementation of undo and redo functionality in applications.
 * 
 * Applications:
 * - Implementing playlists in media players.
 * - Managing the browser history where users can go back and forth.
 * - Operating systems for managing processes in a circular manner.
 */

console.clear();

class Node {
    constructor(data) {
        this.prev = null; // Pointer to the previous node
        this.data = data; // Data contained in the node
        this.next = null; // Pointer to the next node
    }
}

class DoubleCircularLinkedList {
    constructor() {
        this.head = null; // Head of the list
        this.size = 0; // Size of the list
    }

    insertFront(data) {
        // Insert a new node at the front of the list
        let newNode = new Node(data); // Create a new node
        if (this.head === null) {
            // If the list is empty
            newNode.next = newNode; // Point to itself
            newNode.prev = newNode; // Point to itself
            this.head = newNode; // Set new node as head
        } else {
            let temp = this.head;
            while (temp.next !== this.head) {
                temp = temp.next; // Traverse to the last node
            }
            temp.next = newNode; // Link the last node to new node
            newNode.next = this.head; // Link new node to head
            this.head.prev = newNode; // Link head to new node
            newNode.prev = temp; // Link new node to last node
            this.head = newNode; // Update head to new node
        }
        this.size++; // Increase size of the list
    }

    insertLast(data) {
        // Insert a new node at the end of the list
        let newNode = new Node(data); // Create a new node
        if (this.isEmpty()) {
            // If the list is empty
            this.head = newNode; // Set new node as head
            newNode.next = newNode; // Point to itself
            newNode.prev = newNode; // Point to itself
        } else {
            let temp = this.head;
            while (temp.next !== this.head) {
                temp = temp.next; // Traverse to the last node
            }
            temp.next = newNode; // Link the last node to new node
            newNode.prev = temp; // Link new node to last node
            newNode.next = this.head; // Link new node to head
            this.head.prev = newNode; // Link head to new node
        }
        this.size++; // Increase size of the list
    }

    deleteFirst() {
        // Delete the first node from the list
        if (this.isEmpty()) {
            // Check if the list is empty
            // console.log("List is Empty");
            return;
        }
        if (this.head.next === this.head) {
            // If there's only one node
            this.head = null; // Set head to null
        } else {
            this.head.prev.next = this.head.next; // Bypass the head node
            this.head.next.prev = this.head.prev; // Link the next node to the previous node
            this.head = this.head.next; // Update head to the next node
        }
        this.size--; // Decrease size of the list
    }

    deleteLast() {
        // Delete the last node from the list
        if (this.isEmpty()) {
            // Check if the list is empty
            // console.log("List is Empty");
            return;
        }
        if (this.head.next === this.head) {
            // If there's only one node
            this.head = null; // Set head to null
        } else {
            this.head.prev.prev.next = this.head; // Bypass the last node
            this.head.prev = this.head.prev.prev; // Update the previous pointer of the head
        }
        this.size--; // Decrease size of the list
    }

    displayList() {
        // Display the contents of the list
        if (this.isEmpty()) {
            // Check if the list is empty
            // console.log("List is Empty");
            return;
        }
        let temp = this.head; // Start from head
        let result = ""; // Initialize result string
        do {
            result += "<-" + temp.data + "->"; // Append node data to result
            temp = temp.next; // Move to the next node
        } while (temp !== this.head); // Continue until we circle back to head
        console.log(result); // Display the result
    }

    isEmpty() {
        // Check if the list is empty
        return this.head === null; // Return true if head is null
    }
}
