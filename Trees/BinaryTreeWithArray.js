// As same in linked list node implementation we going to have a head that points to the root node of the tree


console.clear()

class Node{
    constructor(data){
        this.left = null;
        this.data = data;
        this.right = null;
    }
}



class BinaryTree{
    constructor(){
        this.root = null;
    }

    insertNode(parentNode , value){
        let newNode = new Node(value);
        if(parentNode === null){
            this.root = newNode;
        }
        else{
            if(this.#canInsertLeft(parentNode)){
                parentNode.left = newNode;
            }
            else{
                parentNode.right = newNode;
            }
        }
        // console.log(newNode.data)
        return newNode;
    }

    #canInsertLeft(node){
        if(node.left === null){
            return true;
        }
        return false;
    }

    display(node = this.root) {
        if (node !== null) {
            this.display(node.left); // Traverse left subtree
            console.log(node.data); // Print current node's value
            this.display(node.right); // Traverse right subtree
        }
    }
}




let nodes = [1,2,3,4,5,6,7,8,9,10]
let nodesArr = []

// Tree to construct
//              1
//            /   \
//           2     3
//         /   \  /  \
//       4      5 6   7
//      / \    / 
//     8   9  10


let bt = new BinaryTree();

let nodeRef = bt.insertNode(null , nodes[0]);
nodesArr.push(nodeRef)

for(let i = 1; i < nodes.length; i++){
    let parentNode = Math.floor((i - 1) / 2);
    let nodeRef = bt.insertNode(nodesArr[parentNode] , nodes[i])
    nodesArr.push(nodeRef)
}

bt.display()
