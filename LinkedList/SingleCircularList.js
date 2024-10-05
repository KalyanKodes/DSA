/*
 * Single Circular Linked List
 * ---------------------------
 * A Single Circular Linked List is a variation of the linked list 
 * in which the last node points back to the first node, forming a circular structure.
 * 
 * Key Features:
 * 1. Circular Structure: The last node points to the head, allowing traversal in a loop.
 * 2. Dynamic Size: The list can grow or shrink dynamically as nodes are inserted or deleted.
 * 3. Efficient Insertion/Deletion: Operations at the front and end of the list can be done in O(n) time.
 * 4. Single Link: Each node contains only a reference to the next node, conserving memory compared to doubly linked lists.
 * 
 * Time Complexity:
 * - Insertion at the front: O(n)
 * - Insertion at the end: O(n)
 * - Deletion from the front: O(n)
 * - Deletion from the end: O(n)
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
 * 6. Check if the list is empty.
 * 
 * Advantages:
 * - Can be useful in applications where circular iteration is needed.
 * - No null references for the next pointer, even at the last node.
 * 
 * Disadvantages:
 * - Traversal must be handled carefully to avoid infinite loops.
 * - Insertion and deletion require traversal, which can make them inefficient for large lists.
 * 
 * Real-World Applications:
 * 1. **Round-Robin Scheduling**: Used in operating systems to allocate CPU time to multiple processes in a circular manner.
 * 2. **Music Playlist Applications**: Circular lists are used in media players to implement continuous music playback, looping through songs in a playlist.
 * 3. **Circular Buffers**: Useful in situations where continuous data streams need to be processed (e.g., buffering data in network routers, where older data is overwritten in a circular manner).
 * 4. **Token Passing in Networking**: In networking protocols like Token Ring, a circular structure is used where a token is passed around nodes in a circular fashion.
 * 5. **Game Development**: In multiplayer games, circular lists can be used to cycle through players in a game where turns are taken in a round-robin manner.
 * 
 * Applications:
 * - Useful for tasks where circular iteration is required, such as a round-robin scheduling algorithm.
 */
class Node {
    constructor(data) {
        this.data = data; // Data stored in the node
        this.next = null; // Reference to the next node
    }
}

class SingleCircularLinkedList {
    constructor() {
        this.head = null; // Head (starting node) of the list
        this.size = 0;    // Size of the list
    }

    // Insert a new node at the front of the list
    insertFront(data) {
        let newNode = new Node(data); // Create a new node
        if (this.head === null) {
            // If list is empty, initialize the head
            this.head = newNode;
            newNode.next = newNode; // Point to itself, forming a circular structure
        } else {
            let temp = this.head;
            while (temp.next !== this.head) {
                temp = temp.next; // Traverse to the last node
            }
            temp.next = newNode; // Update last node's next to new node
            newNode.next = this.head; // New node points to the current head
            this.head = newNode; // Update head to new node
        }
        this.size++; // Increment the size of the list
    }

    // Insert a new node at the end of the list
    insertLast(data) {
        let newNode = new Node(data); // Create a new node
        if (this.head === null) {
            // If list is empty
            this.head = newNode;
            newNode.next = newNode; // Point to itself, forming a circular structure
        } else {
            let temp = this.head;
            while (temp.next !== this.head) {
                temp = temp.next; // Traverse to the last node
            }
            temp.next = newNode; // Update last node's next to new node
            newNode.next = this.head; // New node points to the head
        }
        this.size++; // Increment the size of the list
    }

    // Delete the first node from the list
    deleteFront() {
        if (this.isEmpty()) {
            // console.log("List is Empty");
            return;
        }
        if (this.head.next === this.head) {
            // If there's only one node
            this.head = null; // Set head to null
        } else {
            let temp = this.head;
            while (temp.next !== this.head) {
                temp = temp.next; // Traverse to the last node
            }
            temp.next = this.head.next; // Last node points to the second node
            this.head = this.head.next; // Update head to the second node
        }
        this.size--; // Decrement the size of the list
    }

    // Delete the last node from the list
    deleteLast() {
        if (this.isEmpty()) {
            // console.log("List is Empty");
            return;
        }
        if (this.head.next === this.head) {
            // If there's only one node
            this.head = null; // Set head to null
        } else {
            let prevNode = this.head;
            let curNode = this.head;
            while (curNode.next !== this.head) {
                prevNode = curNode; // Keep track of the second-last node
                curNode = curNode.next; // Move to the next node
            }
            prevNode.next = this.head; // Second-last node points to the head
        }
        this.size--; // Decrement the size of the list
    }

    // Display the contents of the list
    displayList() {
        if (this.isEmpty()) {
            // console.log("List is Empty");
            return;
        }
        let temp = this.head;
        let result = "";
        do {
            result += temp.data + " -> "; // Append node data to result
            temp = temp.next; // Move to the next node
        } while (temp !== this.head); // Stop when we loop back to the head
        console.log(result);
    }

    // Check if the list is empty
    isEmpty() {
        return this.head === null; // Return true if head is null
    }
}