// A tree data structure is a non-linear and  hierarchical structure that is used to represent and organize data in a way that is easy to navigate and search.


//            A
//          /   \
//        B       C
//       / \     / \
//      D   E   F   G
//     / \   \       \
//    I   J   K       H



// It is a collection of nodes. The topmost node of the tree is called the root, and the nodes below it are called the child nodes.
// Each node can have multiple child nodes, and these child nodes can also have their own child nodes.
// Parent Node: The node which is a predecessor of a node is called the parent node of that node. {B} is the parent node of {D, E}.
// Child Node: The node which is the immediate successor of a node is called the child node of that node. Examples: {D, E} are the child nodes of {B}.
// Root Node: The topmost node of a tree or the node which does not have any parent node is called the root node. {A} is the root node of the tree.
// Leaf Node or External Node: The nodes which do not have any child nodes are called leaf nodes. {I, J, K, F, G, H} are the leaf nodes of the tree.
// Ancestor of a Node: Any predecessor nodes on the path of the root to that node are called Ancestors of that node. {A,B} are the ancestor nodes of the node {E}
// A descendant in a tree data structure refers to any node that is located below a given node in the hierarchy. 
// Node B's descendants are D, E, I, J, K.
// Node D's descendants are I and J.
// Node A's descendants are B, C, D, E, F, G, I, J, K, H.
// Sibling: Children of the same parent node are called siblings. {D,E} are called siblings.

//           A       <-- Root (Level 0)
//         /   \
//       B       C   <-- Internal Nodes (Level 1)
//      / \     / \
//     D   E   F   G <-- Internal Nodes (Level 2)
//    /         \
//   H           I   <-- Leaf Nodes (Level 3)

// Level of a Node: The number of edges from the root node to the node. The root node is at level 0.
// Internal Node: A node that has at least one child. These nodes are not leaf nodes (i.e., they have children).
// Neighbor of a Node: The parent or child nodes of a particular node are considered its neighbors.
// The neighbors of B are A (parent) and D, E (children).
// The neighbors of D are B (parent) and H (child).
// Subtree: Any node in the tree, along with all of its descendants, forms a subtree. Essentially, it's a smaller part of the entire tree, starting from any node.
// The subtree rooted at B contains nodes: B, D, E, and H.
// The subtree rooted at F contains nodes: F and I.
// Degree: A degree of a node is number of childnodes of that node.
// Maximum Degree of a Tree: Maximum degree of a node in that tree.
// Height of Node: Maximum number of Edges from that Node to a longest leaf node. (Depth=> Root to Node , Height=> Node to leaf , Level or tree == Depth of Tree)
// If tree having n nodes in that case there will be n-1 edges
// Level of node == Depth of a Node
// Level of Tree == Height of a Tree
// Level of Tree == Depth of a Tree

// A node having data part , left link , right link
// -------------------------------------------------------
// | Address of Left node | Data | Address of Right node |
// -------------------------------------------------------

// Applications: 
// File System
// Routing Protocols
// It organizes data for quick search

// Types of Trees:

// Binary Tree: A node can have atmost 2(either 0 or 1 or 2) childs.
// At each level i maximum number of nodes possible in binary tree is 2 power i
// Maximum number of nodes possible at height h is 2 ^ (h +1) - 1
// Minimum number of nodes possible at height h is h + 1
// Height of the tree with maximum nodes n is 
// n = 2^(h+1) - 1
// Add 1 on both sides and apply log2 and apply loga(a^x) = x
// log2(n+1) = h + 1
// h = (log2(n+1)) - 1
// Height of the tree with maximum nodes n is n - 1


// Types of Binary Tree:
// Full/Proper/Strict Tree -> Either 0 or 2 childs , Each node contains 2 childs execpt leaf nodes. The number of Leaf nodes are equal to number of internal nodes + 1
// Complete Binary Tree -> If all the level of the tree are completely filled execpt possible last level and at the last level the nodes should be as left as possible
// Perfect Binary Tree -> A tree can be a perfect binary tree when all internal nodes have 2 childs and all leaf nodes are at same level. Every perfect binary tree is a full and complete binary tree
// Degenerate Binary Tree -> All internal nodes have only 1 child
// Balance Binary Tree



// Array Representation of Binary Tree:
// A tree can be represented using array's or using LinkedList is called dynamic node representation
// Fill the array will all the nodes at level from left to right, and tree should be complete tree.
// case 1: 
// The formula to find the left child of a node at index i of array is [(2 * i) + 1] , right child would be at [(2 * i) + 2] parent would be at floor[(i - 1) / 2] =>(Array indexing starts from 0)
// case 2:
// The formula to find the left child of a node at index i of array is [(2 * i)] , right child would be at [(2 * i) + 1] parent would be at floor[(i / 2] =>(Array indexing starts from 1)
// In array representation there will wastage of space when the tree is not complete binary tree, cause we need to add dummy nodes to make that tree a complete binary tree.


// Traversals: (InOrder , PreOrder , Postorder)
// InOrder: Left -> Root -> Right (Word "In" means in between , root will be in between left and right) {InOrder of any BST will give sorted collection}
// PreOrder: Root -> Left -> Right (Word "Pre" means in before , root will be before left and right)
// PostOrder: Left -> Right -> Root (Word "in" means in after , root will be after left and right)