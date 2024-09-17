// Binary Tree: No ordering rules. Just any structure where each node can have up to two children.Searching for an element in a general binary tree takes O(n) time in the worst case since you might have to check every node.

// Binary Search Tree (BST): Must follow the ordering rule — left subtree has smaller values, right subtree has larger values. Searching in a BST is much faster, typically O(log n) in a balanced tree, as you can eliminate half of the subtree at each step by comparing values.

// All Binary Search Trees are Binary Trees, but not all Binary Trees are Binary Search Trees.


// Insertion in BST:
// The initial value will be root
// When inserting an new node, check weather the node value is lessthan or greaterthan to the node we want to insert
// If the newNode is less then it will go to left or else goes to right

// Deletions in BST:
// There are 3 situations when we want to delete a node. They are: 
// Case 1: The node we want to delete have 0 child
// Case 2: The node we want to delete have 1 child
// Case 3: The node we want to delete have 2 child

// For Case 1: we just the remove the link
// For Case 2: we replace the to be deleted node with that child
// For Case 3: we need to find a node to replace the deleted node, where even after deleting that node and replacing with another node will still follows the rules of BST.
// for case 3, we can replace the node in two ways, either with the inOrder Predecessor or inOrder Sucessor.

// Replacing with inOrder Predecessor:
// The largest node in left subTree of the node we want to delete will take the position of node to deleted.

// Replacing with inOrder Sucessor:
// The smallest node in right subTree of the node we want to delete will take the position of node to deleted.


console.clear()

class Node{
    constructor(data){
        this.left = null;
        this.data = data;
        this.right = null;
    }
}

// No duplication
class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    #findNode(node , data){
        if(node){
            if(data === node.data) return null;
            else if(data < node.data && node.left) return this.#findNode(node.left , data);
            else if(data > node.data && node.right) return this.#findNode(node.right , data);
            return node;
        }
    }

    insertNode(data){
        let newNode = new Node(data);
        if(this.root === null) this.root = newNode;
        else{
            let nodeToInsert = this.#findNode(this.root , data);
            if(nodeToInsert){
                if(data < nodeToInsert.data) nodeToInsert.left = newNode;
                else nodeToInsert.right = newNode;
            }
            else{
                console.log("Element already in tree")
            }
        }
     }
     
    delete(data){
        this.root = this.#deleteNode(data , this.root);
    }


     #deleteNode(data, node){
        if(!this.root){
            console.log("Tree is Empty");
            return
        }
        if(!node){
            console.log(`${data} not found in Tree`)
            return;
        }

        if(data < node.data){
            node.left = this.#deleteNode(data, node.left);
        }
        else if(data > node.data){
            node.right = this.#deleteNode(data , node.right);
        }
        else{
            // Case 1: No child
            if(!node.left && !node.right) {
                return null
            }
            // Case 2: One Child
            if(!node.left) {
                return node.right
            }
            else if(!node.right) return node.left
            // Case 3: Two childs
            // Taking inorderSucessor (Minimum of right Sub-tree)
            let minNode = this.#findMinNode(node.right);
            node.data = minNode.data;
            node.right = this.#deleteNode(minNode.data , node.right);
        }
        return node;
     }

     #findMinNode(node){
        while(node.left){
            node = node.left
        }
        return node;
     }


     #inOrder(node = this.root){
        if(node){
            this.#inOrder(node.left)
            process.stdout.write(`${node.data} `);
            this.#inOrder(node.right)
        }
     }
     #preOrder(node = this.root){
        if(node){
            process.stdout.write(`${node.data} `);
            this.#preOrder(node.left)
            this.#preOrder(node.right)
        }
     }
     #postOrder(node = this.root){
        if(node){
            this.#postOrder(node.left)
            this.#postOrder(node.right)
            process.stdout.write(`${node.data} `);
        }
     }


     allTraversals(){
        process.stdout.write("Inorder: ")
        this.#inOrder()
        process.stdout.write("\nPreorder: ")
        this.#preOrder();
        process.stdout.write("\nPostorder: ")
        this.#postOrder()  
     }
}


