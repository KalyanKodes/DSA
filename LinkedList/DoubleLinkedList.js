/*
 * Double Linked List
 * ----------------------------
 * A Double Linked List is a data structure that consists of nodes, 
 * where each node contains references to both the previous and next nodes. 
 * This allows traversal in both directions (forward and backward).
 * 
 * Key Features:
 * 1. Bi-directional Traversal: Each node contains a reference to both its 
 *    previous and next node, allowing traversal in both directions.
 * 2. Dynamic Size: The list can dynamically grow or shrink as nodes are 
 *    inserted or deleted.
 * 3. Efficient Insertion/Deletion: Insertion or deletion at both ends 
 *    (head or tail) can be done efficiently in O(1) time.
 * 4. Flexible Data Manipulation: Nodes can be inserted or deleted from 
 *    any position in the list with relative ease.
 * 5. Requires More Space: Due to the additional pointer (prev), the 
 *    memory overhead is higher compared to singly linked lists.
 * 
 * Time Complexity:
 * - Insertion and Deletion: O(1) for operations at the head or tail,
 *   O(n) for operations at a specific index.
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
 * 3. Insert an element at a specific index.
 * 4. Delete the first element from the list.
 * 5. Delete the last element from the list.
 * 6. Delete an element at a specific index.
 * 7. Display the contents of the list.
 * 
 * Advantages:
 * - Allows traversal in both directions.
 * - Efficient for insertions and deletions at both ends.
 * 
 * Disadvantages:
 * - Requires more memory due to storing two pointers per node.
 * - More complex than singly linked lists.
 * 
 * Real-world examples:
 * - Implementing playlists in media players.
 * - Managing browser history allowing users to go back and forth.
 * 
 * Applications:
 * - Navigation systems where users can traverse back and forth.
 * - Undo and redo functionality in applications.
 */

class Node {
    constructor(data) {
        this.prev = null; // Pointer to the previous node
        this.data = data; // Data contained in the node
        this.next = null; // Pointer to the next node
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null; // Head of the list
        this.size = 0; // Size of the list
    }

    insertFirst(data) {
        // Insert a new node at the front of the list
        let node = new Node(data); // Create a new node
        if (this.head === null) {
            // If the list is empty
            this.head = node; // Set head to new node
        } else {
            node.next = this.head; // Link new node to current head
            this.head.prev = node; // Link current head to new node
            this.head = node; // Update head to new node
        }
        this.size++; // Increase size of the list
    }

    insertLast(data) {
        // Insert a new node at the end of the list
        let node = new Node(data); // Create a new node
        if (this.head === null) {
            // If the list is empty
            this.head = node; // Set head to new node
        } else {
            let temp = this.head; // Start from head
            while (temp.next !== null) {
                temp = temp.next; // Traverse to the last node
            }
            temp.next = node; // Link last node to new node
            node.prev = temp; // Link new node to last node
        }
        this.size++; // Increase size of the list
    }

    insertAtIndex(index, data) {
        // Insert a new node at a specific index
        if (index < 0 || index > this.size) {
            console.log("Index Out Of Range"); // Validate index
            return;
        }

        let node = new Node(data); // Create a new node

        if (index === 0) {
            this.insertFirst(data); // If index is 0, insert at front
            return; 
        } 

        let count = 0; // Initialize counter
        let curNode = this.head; // Start from head

        // Traverse to the specified index
        while (count !== index) {
            curNode = curNode.next;
            count++;
        }

        // Insert the new node
        if (curNode === null) {
            this.insertLast(data); // If curNode is null, insert at end
        } else {
            let prevNode = curNode.prev; // Get the previous node
            
            prevNode.next = node; // Link previous node to new node
            node.prev = prevNode; // Link new node to previous node
            
            node.next = curNode; // Link new node to current node
            curNode.prev = node; // Link current node to new node
            
            this.size++; // Increase size of the list
        }
    }

    deleteFront() {
        // Delete the first node from the list
        if (this.isEmpty()) {
            // Check if the list is empty
            // console.log("List is Empty")
            return;
        }

        if (this.head.next === null) {
            // If there's only one node
            this.head = null; // Set head to null
        } else {
            this.head = this.head.next; // Update head to the next node
            this.head.prev = null; // Set previous of new head to null
        }
        this.size--; // Decrease size of the list
    }

    isEmpty() {
        // Check if the list is empty
        return this.head === null; // Return true if head is null
    }

    deleteLast() {
        // Delete the last node from the list
        if (this.isEmpty()) {
            // Check if the list is empty
            // console.log("List is Empty");
            return;
        }

        if (this.head.next === null) {
            // If there's only one node
            this.head = null; // Set head to null
        } else {
            let prevNode = this.head; // Start from head
            let curNode = this.head; // Start from head
            // Traverse to the last node
            while (curNode.next !== null) {
                prevNode = curNode; // Keep track of previous node
                curNode = curNode.next; // Move to next node
            }
            prevNode.next = null; // Bypass the last node
        }
        this.size--; // Decrease size of the list
    }

    deleteAtIndex(index) {
        // Delete a node at a specific index
        if (this.isEmpty()) {
            // Check if the list is empty
            // console.log("List is Empty");
            return;
        }

        if (index < 0 || index >= this.size) {
            console.log("Index Out Of Range"); // Validate index
            return;
        }

        if (index === 0) {
            this.deleteFront(); // If index is 0, delete from front
        } else {
            let count = 0; // Initialize counter
            let prevNode = this.head; // Start from head
            let curNode = this.head; // Start from head

            // Traverse to the specified index
            while (count !== index) {
                prevNode = curNode; // Keep track of previous node
                curNode = curNode.next; // Move to next node
                count++;
            }

            prevNode.next = curNode.next; // Bypass the node to delete
            if (curNode.next !== null) {
                curNode.next.prev = prevNode; // Link next node back to previous node
            }
            this.size--; // Decrease size of the list
        }
    }

    displayList() {
        // Display the contents of the list
        if (this.head === null) {
            console.log("List Is Empty"); // Check if the list is empty
            return;
        }
        let temp = this.head; // Start from head
        let result = ""; // Initialize result string
        while (temp !== null) {
            result += "<- " + temp.data + " ->"; // Append node data to result
            temp = temp.next; // Move to the next node
        }
        console.log(null, result, null); // Display the result
    }
}
