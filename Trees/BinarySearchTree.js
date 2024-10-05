// Overview:
// A Binary Tree is a hierarchical structure where each node can have up to two children.
// There are no specific ordering rules for the nodes.
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


// Operations and their Time Complexity:
// - Insertion: O(log n) on average for a balanced BST; O(n) in the worst case for an unbalanced tree.
// - Deletion: O(log n) on average for a balanced BST; O(n) in the worst case for an unbalanced tree.
// - Search: O(log n) on average for a balanced BST; O(n) in the worst case for an unbalanced tree.
// - Traversal: O(n) for in-order, pre-order, and post-order traversals.

// Space Complexity:
// - O(n) where n is the number of nodes in the BST, primarily for storing the nodes themselves.

// Why We Use It:
// - Efficient data management where retrieval order is important.
// - Useful for implementing dynamic sets and dictionaries.

// Applications:
// - Database indexing, where fast search operations are required.
// - Memory management in various programming languages.

// Real-World Examples:
// - File systems where directories and files are organized hierarchically.
// - Online gaming leaderboards where scores are managed in an ordered fashion.

// Advantages:
// - Efficient search, insertion, and deletion operations compared to other data structures.
// - Dynamic size; grows and shrinks as needed.
// - Ordered nature allows for easy range queries.

// Disadvantages:
// - Performance can degrade to O(n) in the worst case if the tree becomes unbalanced.
// - Requires more complex implementation and balancing techniques (like AVL trees or Red-Black trees) for optimal performance.

console.clear();

// Node class for individual elements in the BST
class Node {
    constructor(data) {
        this.left = null;  // Pointer to left child
        this.data = data;  // Value of the node
        this.right = null; // Pointer to right child
    }
}

// Binary Search Tree class
class BinarySearchTree {
    constructor() {
        this.root = null; // Root of the BST
    }

    // Private method to find the appropriate node to insert or delete
    #findNode(node, data) {
        if (node) {
            if (data === node.data) return null; // Node already exists
            else if (data < node.data && node.left) return this.#findNode(node.left, data); // Search left
            else if (data > node.data && node.right) return this.#findNode(node.right, data); // Search right
            return node; // Return the node where the new node will be attached
        }
    }

    // Public method to insert a new node with the given data
    insertNode(data) {
        let newNode = new Node(data); // Create a new node
        if (this.root === null) {
            this.root = newNode; // If tree is empty, set new node as root
        } else {
            let nodeToInsert = this.#findNode(this.root, data);
            if (nodeToInsert) {
                if (data < nodeToInsert.data) nodeToInsert.left = newNode; // Insert in left subtree
                else nodeToInsert.right = newNode; // Insert in right subtree
            } else {
                console.log("Element already in tree"); // Node already exists
            }
        }
    }

    // Public method to delete a node with the given data
    delete(data) {
        this.root = this.#deleteNode(data, this.root); // Call private delete function
    }

    // Private method to delete a node
    #deleteNode(data, node) {
        if (!this.root) {
            console.log("Tree is Empty"); // Check if the tree is empty
            return;
        }
        if (!node) {
            console.log(`${data} not found in Tree`); // Node not found
            return;
        }

        if (data < node.data) {
            node.left = this.#deleteNode(data, node.left); // Search left
        } else if (data > node.data) {
            node.right = this.#deleteNode(data, node.right); // Search right
        } else {
            // Case 1: No child
            if (!node.left && !node.right) {
                return null; // Remove the node
            }
            // Case 2: One Child
            if (!node.left) {
                return node.right; // Replace with right child
            } else if (!node.right) {
                return node.left; // Replace with left child
            }
            // Case 3: Two children
            // Taking inorder successor (Minimum of right subtree)
            let minNode = this.#findMinNode(node.right);
            node.data = minNode.data; // Replace with the inorder successor
            node.right = this.#deleteNode(minNode.data, node.right); // Delete the inorder successor
        }
        return node; // Return the modified node
    }

    // Private method to find the minimum node in a subtree
    #findMinNode(node) {
        while (node.left) {
            node = node.left; // Go to the leftmost node
        }
        return node; // Return the minimum node
    }

    // Private in-order traversal (left, root, right)
    #inOrder(node = this.root) {
        if (node) {
            this.#inOrder(node.left); // Visit left subtree
            process.stdout.write(`${node.data} `); // Visit node
            this.#inOrder(node.right); // Visit right subtree
        }
    }
    
    // Private pre-order traversal (root, left, right)
    #preOrder(node = this.root) {
        if (node) {
            process.stdout.write(`${node.data} `); // Visit node
            this.#preOrder(node.left); // Visit left subtree
            this.#preOrder(node.right); // Visit right subtree
        }
    }
    
    // Private post-order traversal (left, right, root)
    #postOrder(node = this.root) {
        if (node) {
            this.#postOrder(node.left); // Visit left subtree
            this.#postOrder(node.right); // Visit right subtree
            process.stdout.write(`${node.data} `); // Visit node
        }
    }

    // Public method to perform all traversals and print results
    allTraversals() {
        process.stdout.write("Inorder: ");
        this.#inOrder(); // Inorder traversal
        process.stdout.write("\nPreorder: ");
        this.#preOrder(); // Preorder traversal
        process.stdout.write("\nPostorder: ");
        this.#postOrder(); // Postorder traversal
    }
}
