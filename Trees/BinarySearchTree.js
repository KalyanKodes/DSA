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





console.clear();

class Node{
    constructor(data){
        this.left = null;
        this.data = data;
        this.right = null;
    }
}


class BinarySearchTree{
    constructor(){
        this.root = null;
    }


    #findNode(node , value){
        if(node){
            if(value <= node.data && node.left){
                return this.#findNode(node.left , value)
            }
            else if(value > node.data && node.right){
                return this.#findNode(node.right , value)
            }
            return node;
        }
    }

    insertNode(value){
        let newNode = new Node(value);
        if(this.root == null){
            this.root = newNode;
            return;
        }

        let nodeToInsert = this.#findNode(this.root , value);
        if(value <= nodeToInsert.data){
            nodeToInsert.left = newNode;
        }
        else{
            nodeToInsert.right = newNode;
        }
    }

    inOrder(node = this.root){
        if(node){
            this.inOrder(node.left);
            process.stdout.write(`${node.data} `);
            this.inOrder(node.right)
        }
    }


    preOrder(node = this.root){
        if(node){
            process.stdout.write(`${node.data} `);
            this.preOrder(node.left);
            this.preOrder(node.right)
        }
    }
    
    postOrder(node = this.root){
        if(node){
            this.postOrder(node.left);
            this.postOrder(node.right)
            process.stdout.write(`${node.data} `);
        }
    }

}


let bst = new BinarySearchTree();

let arr = [11, 6, 8, 19, 4, 10, 5, 17, 43, 49, 31];

arr.forEach((item)=>{
    bst.insertNode(item);
})

process.stdout.write("Inorder: ")
bst.inOrder();
process.stdout.write("\nPreOrder: ")
bst.preOrder();
process.stdout.write("\nPostOrder: ")
bst.postOrder();

