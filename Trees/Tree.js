/**
 * Overview:
 * A tree is a non-linear, hierarchical data structure used to represent and organize data in a way that is easy to navigate and search.
 *
 * Structure:
 *            A
 *          /   \
 *        B       C
 *       / \     / \
 *      D   E   F   G
 *     / \   \       \
 *    I   J   K       H
 *
 * Key Points:
 * - A tree consists of nodes connected by edges.
 * - The topmost node is called the root, while nodes below it are child nodes.
 * - A node may have multiple children, and those children can also have their own children.

 * Terminology:
 * - Parent Node: The node that precedes another node (e.g., B is the parent of D and E).
 * - Child Node: The node that immediately follows another node (e.g., D and E are children of B).
 * - Root Node: The topmost node with no parent (e.g., A).
 * - Leaf Node: Nodes without children (e.g., I, J, K, F, G, H).
 * - Ancestor Node: Any predecessor node on the path to the root (e.g., A and B are ancestors of E).
 * - Descendant Node: Any node below a given node in the hierarchy (e.g., B's descendants are D, E, I, J, K).
 * - Sibling: Nodes sharing the same parent (e.g., D and E are siblings).

 * Levels and Height:
 * - Level of a Node: Number of edges from the root to the node (Root is at level 0).
 * - Internal Node: A node with at least one child.
 * - Neighbor of a Node: Parent or child nodes (e.g., neighbors of B are A, D, and E).
 * - Subtree: A node and all its descendants form a subtree (e.g., subtree rooted at B includes B, D, E, and H).
 * - Degree: Number of child nodes of a node.
 * - Height of a Node: Maximum number of edges from that node to the longest leaf node.
 * - The height of a tree with n nodes is n - 1.

 * Node Structure:
 * -------------------------------------------------------
 * | Address of Left Node | Data | Address of Right Node |
 * -------------------------------------------------------

 * Applications:
 * - File Systems
 * - Routing Protocols
 * - Organizing data for quick searches

 * Types of Trees:
 * - Binary Tree: A node can have at most 2 children (0, 1, or 2).
 * - Full/Proper/Strict Tree: Each node has either 0 or 2 children. The number of leaf nodes equals the number of internal nodes + 1.
 * - Complete Binary Tree: All levels are filled except possibly the last level, and nodes at the last level are as left as possible.
 * - Perfect Binary Tree: All internal nodes have 2 children, and all leaf nodes are at the same level.
 * - Degenerate Binary Tree: All internal nodes have only 1 child.
 * - Balanced Binary Tree: Height of left and right subtrees of any node differ by at most one.

 * Array Representation of Binary Tree:
 * - A binary tree can be represented using an array (static) or linked list (dynamic).
 * - For a complete binary tree:
 *     - Left child at index i: (2 * i) + 1
 *     - Right child at index i: (2 * i) + 2
 *     - Parent at index i: floor((i - 1) / 2) (0-based index)
 *
 * - For an alternate representation (1-based index):
 *     - Left child at index i: (2 * i)
 *     - Right child at index i: (2 * i) + 1
 *     - Parent at index i: floor(i / 2)
 *
 * Note: Wastage of space may occur if the tree is not a complete binary tree.

 * Tree Traversals:
 * - InOrder: Left -> Root -> Right (InOrder traversal of any BST yields a sorted collection)
 * - PreOrder: Root -> Left -> Right (Root is visited before its children)
 * - PostOrder: Left -> Right -> Root (Root is visited after its children)
 * - **Breadth-First Search (BFS)**: 
 *   - Also known as Level Order Traversal. It explores nodes level by level, starting from the root and moving down to each level before moving to the next.
 *   - BFS uses a queue data structure to keep track of the nodes that need to be explored next.
 *   - Order of traversal for the above tree would be: A, B, C, D, E, F, G, I, J, K, H.
 *   - BFS is useful for finding the shortest path in unweighted graphs or trees.

 * Real-World Examples of BFS:
 * - Social Networks: Finding the shortest connection path between users (e.g., "Friend of a Friend").
 * - Web Crawlers: Exploring web pages in a breadth-first manner to index content.
 * - GPS Navigation: Finding the shortest route from one location to another in mapping applications.
 * - Network Broadcasting: Efficiently sending messages to all nodes in a network.

 * Applications:
 * - Pathfinding algorithms in games.
 * - Solving puzzles like the Rubik's Cube.
 * - Network routing protocols (e.g., OSPF).
 * - Analyzing communication networks.

 * Advantages:
 * - Guarantees the shortest path in unweighted graphs.
 * - Simple to implement with a queue data structure.
 * - Can be used to solve various problems in computer science and real-life applications.

 * Disadvantages:
 * - Requires more memory than Depth-First Search (DFS) due to storing all child pointers at the current level.
 * - May be slower than DFS for deep trees or graphs due to exploring level by level.
 * - Performance may degrade for large and wide trees due to increased space complexity.

 */
