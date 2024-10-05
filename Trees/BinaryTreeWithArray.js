console.clear()

// Overview: 
// A Node represents an individual element in a binary tree. 
// It holds data and pointers to its left and right children.
// Each node can have up to two children in a binary tree structure.

// Key Points:
// - Each Node is an instance of the Node class.
// - The tree structure is defined by the relationships between nodes, 
// where each node can point to two child nodes (left and right).
// - It serves as a fundamental building block for the binary tree and binary search tree.

class Node {
    constructor(data) {
        this.left = null; // Pointer to the left child
        this.data = data; // Value of the node
        this.right = null; // Pointer to the right child
    }
}

// Overview: 
// A Binary Search Tree (BST) is a special type of binary tree that maintains ordering: 
// - Left subtree nodes are less than the parent node. 
// - Right subtree nodes are greater than the parent node. 
// Searching for an element in a general binary tree has a worst-case time complexity of O(n), 
// while searching in a balanced BST typically takes O(log n).

// Key Points:
// - BST allows for fast search, insertion, and deletion operations. 
// - All BSTs are binary trees, but not all binary trees are BSTs.

// Features:
// - Supports various operations like insertion, deletion, and traversal.
// - Provides a way to efficiently store and retrieve data based on ordering.

class BinaryTree {
    constructor() {
        this.root = null; // Initialize the root of the tree
    }

    // Operations and their Time Complexity:
    // - Insertion: O(log n) on average for a balanced BST; O(n) in the worst case for an unbalanced tree.
    // - Deletion: O(log n) on average for a balanced BST; O(n) in the worst case for an unbalanced tree.
    // - Search: O(log n) on average for a balanced BST; O(n) in the worst case for an unbalanced tree.
    // - Traversal: O(n) for in-order, pre-order, and post-order traversals.

    /**
     * Inserts a new node into the binary search tree.
     * 
     * 
     * Why We Use It:
     * - To add a new node while maintaining the binary search tree properties.
     */
    insertNode(data) {
        let newNode = new Node(data); // Create a new node
        if (this.root === null) {
            this.root = newNode; // If tree is empty, set root
        } else {
            let nodeToInsert = this.#findNode(this.root, data); // Find appropriate node for insertion
            if (nodeToInsert) {
                if (data < nodeToInsert.data) nodeToInsert.left = newNode; // Insert in left subtree
                else nodeToInsert.right = newNode; // Insert in right subtree
            } else {
                console.log("Element already in tree"); // Node already exists
            }
        }
    }

    /**
     * Private method to find the node for inserting a new value.
     * 
     * 
     * Why We Use It:
     * - To determine the correct position for inserting a new node.
     */
    #findNode(node, data) {
        if (node) {
            if (data === node.data) return null; // Node already exists
            else if (data < node.data && node.left) return this.#findNode(node.left, data); // Search in left subtree
            else if (data > node.data && node.right) return this.#findNode(node.right, data); // Search in right subtree
            return node; // Return current node if not found in either subtree
        }
    }

    /**
     * Deletes a node from the binary search tree.
     * 
     * 
     * Why We Use It:
     * - To remove a node from the tree while maintaining BST properties.
     */
    delete(data) {
        this.root = this.#deleteNode(data, this.root); // Set root to the result of deletion
    }

    /**
     * Private method to delete a node from the tree.
     * 
     * 
     * Why We Use It:
     * - To remove a node from the tree while maintaining BST properties.
     */
    #deleteNode(data, node) {
        if (!this.root) {
            console.log("Tree is Empty");
            return;
        }
        if (!node) {
            console.log(`${data} not found in Tree`);
            return;
        }

        if (data < node.data) {
            node.left = this.#deleteNode(data, node.left); // Search in left subtree
        } else if (data > node.data) {
            node.right = this.#deleteNode(data, node.right); // Search in right subtree
        } else {
            // Case 1: Node has no children
            if (!node.left && !node.right) {
                return null; // Remove the node
            }
            // Case 2: Node has one child
            if (!node.left) {
                return node.right; // Replace node with its right child
            } else if (!node.right) {
                return node.left; // Replace node with its left child
            }
            // Case 3: Node has two children
            let minNode = this.#findMinNode(node.right); // Find the minimum node in the right subtree
            node.data = minNode.data; // Replace node's data with the minimum node's data
            node.right = this.#deleteNode(minNode.data, node.right); // Delete the minimum node from right subtree
        }
        return node; // Return the updated node
    }

    /**
     * Private method to find the minimum node in a subtree.
     * 
     * 
     * Why We Use It:
     * - To facilitate the deletion of a node with two children.
     */
    #findMinNode(node) {
        if (!node) return null; // If no node, return null
        while (node.left) {
            node = node.left; // Traverse left until the minimum node is found
        }
        return node; // Return the minimum node
    }

    /**
     * Traverses the tree in-order (left-root-right).
     * 
     * 
     * Why We Use It:
     * - To display the elements of the tree in sorted order.
     */
    display(node = this.root) {
        if (node !== null) {
            this.display(node.left); // Traverse left subtree
            console.log(node.data); // Print current node's value
            this.display(node.right); // Traverse right subtree
        }
    }
}

// Example Usage:

let nodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Sample node values
let nodesArr = []; // Array to hold references to the nodes

// Tree to construct
//              1
//            /   \
//           2     3
//         /   \  /  \
//       4      5 6   7
//      / \    / 
//     8   9  10

let bt = new BinaryTree(); // Create a new instance of BinaryTree

let nodeRef = bt.insertNode(nodes[0]); // Insert the first node
nodesArr.push(nodeRef); // Store the reference

// Insert remaining nodes into the binary tree
for (let i = 1; i < nodes.length; i++) {
    let parentNode = Math.floor((i - 1) / 2); // Calculate parent index
    let nodeRef = bt.insertNode(nodes[i]); // Insert the node
    nodesArr.push(nodeRef); // Store the reference
}

// Display the elements of the binary tree
bt.display(); 
