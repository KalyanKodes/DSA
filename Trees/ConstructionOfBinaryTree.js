// First step is to findout the root of the tree
// We can't find the root of a tree just with inOrder cause the root will be in middle
// We can find the root in preOrder cause the root will be first node
// From the root findout the left nodes and right nodes in inOrder the left of that root will be leftSubtree elements and right will be rightSubTree elements


// preOrder -> [1,2,4,8,9,10,11,5,3,6,7] -> 1 is root
//              |
//             root  
// inOrder -> [8,4,10,9,11,2,5,1,6,3,7] -> all the elements left of 1 are left subtree and right are right subtree
//                             |
//            {      left      }{right}

// Out of those divided element find the element that appears first in preOrder, that will be the next root
// and again repeat same proces the left and right subTree based on the newRoot element taking inorder reference
// To verify find the preOrder if matches then tree constructed is perfect or else not




class Node{
    constructor(data, left = null, right = null){
        this.left = left;
        this.data = data;
        this.right = right;
    }
}


class ConstructBinaryTree{
    constructor(root = null){
        this.root = null;
    }

    buildTree(){
        
    }
}