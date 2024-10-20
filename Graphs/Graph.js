/*
 * Graph Representation and Traversal
 * ----------------------------------
 * Overview:
 * This code demonstrates how to represent a graph using different methods:
 * 1. Adjacency List
 * 2. Adjacency Matrix
 * 3. Edge List
 * Additionally, it implements the Breadth-First Search (BFS) algorithm 
 * to traverse the graph and explore its nodes.
 *
 * Key Points:
 * - A graph is made up of vertices (nodes) and edges (connections).
 * - Graphs can be directed or undirected and can be weighted or unweighted.
 * - BFS is a traversal technique that explores all neighbors at the present depth 
 *   before moving on to nodes at the next depth level.
 *
 *
 * Key Terminologies
 * -----------------
 * - Vertex: A point in the graph.
 * - Edge: A connection between two vertices.
 * - Uni-directional Edge: An edge that has a direction (from one vertex to another).
 * - Bi-directional Edge / Undirected Edge: An edge that can be traversed in both directions.
 * - Directed Graph: A graph where edges have a direction.
 * - Undirected Graph: A graph where edges do not have a direction.
 * - Edges Based on Weight:
 *   - Weighted: Edges have associated weights.
 *   - Unweighted: Edges do not have weights.
 * 
 * Advantages:
 * - BFS guarantees the shortest path in unweighted graphs.
 * - It explores all nodes at the present level before moving deeper.
 * - Suitable for finding connected components in graphs.
 *
 * Disadvantages:
 * - Can consume a lot of memory due to the queue used for traversal.
 * - May be slower than Depth-First Search (DFS) for deep graphs.
 *
 * Time Complexity:
 * - O(V + E), where V is the number of vertices and E is the number of edges.
 *
 * Space Complexity:
 * - O(V), for storing the visited array and queue.
 *
 * Real-World Examples:
 * - Finding the shortest path in navigation systems (like Google Maps).
 * - Networking applications where routing paths are required.
 * - Social networking platforms to explore connections.
 *
 * Applications:
 * - Used in various algorithms for pathfinding and shortest path problems.
 * - Useful in networking for determining communication paths.
 * - In AI, BFS can be used for searching and traversing state spaces.
 */

// Clear the console for cleaner output
console.clear();

// Edge constructor function to define an edge with source, destination, and weight
function Edge(src, dest, weight) {
    this.src = src;     // Source vertex of the edge
    this.dest = dest;   // Destination vertex of the edge
    this.weight = weight; // Weight of the edge
}

/*
 * Function to create a graph using adjacency list representation.
 * Each vertex will have an array of edges connected to it.
 */
function createGraph(graph) {
    // Adding edges to the graph (src, dest, weight)
    graph[0].push(new Edge(0, 1, 2)); // Edge from vertex 0 to vertex 1 with weight 2
    graph[1].push(new Edge(1, 2, 10)); // Edge from vertex 1 to vertex 2 with weight 10
    graph[1].push(new Edge(1, 3, 0));  // Edge from vertex 1 to vertex 3 with weight 0
    graph[2].push(new Edge(2, 0, 2));  // Edge from vertex 2 to vertex 0 with weight 2
    graph[2].push(new Edge(2, 1, 10)); // Edge from vertex 2 to vertex 1 with weight 10
    graph[2].push(new Edge(2, 3, -1)); // Edge from vertex 2 to vertex 3 with weight -1
    graph[3].push(new Edge(3, 1, 0));  // Edge from vertex 3 to vertex 1 with weight 0
}

/*
 * Function to get all neighbors of each vertex in the graph.
 * It prints each vertex and its corresponding edges with weights.
 */
function getAllNeighbors(graph) {
    for (let i = 0; i < graph.length; i++) {
        console.log("Vertex:", i);
        for (let j = 0; j < graph[i].length; j++) {
            // Print the edge from src to dest with its weight
            process.stdout.write(`${graph[i][j].src} -> ${graph[i][j].dest} = ${graph[i][j].weight} | `);
        }
        console.log(); // New line for better readability
    }
}

/*
 * Function to print all edges in the graph.
 * It iterates through each vertex and prints its edges.
 */
function printEdges(graph) {
    for (let i = 0; i < graph.length; i++) {
        console.log("Vertex:", i);
        for (let j = 0; j < graph[i].length; j++) {
            console.log(graph[i][j]); // Print edge object
        }
    }
}

// Initialize the number of vertices and create the adjacency list
let V = 4; // Number of vertices
let graph = Array.from({ length: V }, () => []); // Initialize the adjacency list
createGraph(graph); // Build the graph
printEdges(graph); // Print all edges
getAllNeighbors(graph); // Get all neighbors for each vertex

// Adjacency Matrix Representation
/*
 * Adjacency Matrix:
 * - A 2D matrix (V x V) where graph[i][j] = 1 means an edge exists from i to j, otherwise 0.
 * - This representation can consume unnecessary space for vertices without edges.
 * - Space complexity is O(V^2).
 * - Time complexity for finding neighbors is O(V).
 */
let adjacencyMatrix = [
    [0, 0, 1, 0], // Vertex 0 has an edge to Vertex 2
    [0, 0, 1, 1], // Vertex 1 has edges to Vertices 2 and 3
    [1, 1, 0, 1], // Vertex 2 has edges to Vertices 0, 1, and 3
    [0, 1, 1, 0]  // Vertex 3 has edges to Vertices 1 and 2
];

// Edge List Representation
/*
 * Edge List:
 * - A simple array of edges, useful for sorting edges by weight (e.g., in Minimum Spanning Tree algorithms).
 * - The size of this list equals the number of edges in the graph.
 */
let edgesList = [[0, 2], [1, 2], [1, 3], [2, 3]];

// Implicit Graphs
/*
 * Implicit Graphs:
 * - Used in algorithms like Flood-Fill.
 */

// Graph Traversals
/*
 * Graph Traversals:
 * 1. Breadth-First Search (BFS)
 * 2. Depth-First Search (DFS)
 */

// BFS (Breadth-First Search)
/*
 * Overview:
 * - BFS is an indirect level order traversal; unlike trees, graphs can start from any vertex.
 * - BFS explores immediate neighbors first using a queue and a visited array.
 *
 * Key Points:
 * - The visited array tracks which nodes have been visited (size = total number of vertices).
 * - All entries in the visited array are initially false.
 *
 * Steps to Visit a Node:
 * 1. Print the current node.
 * 2. Mark the current node as visited (set to true).
 * 3. Add the neighbors of the current node to the queue.
 *
 * Time Complexity:
 * - O(V + E), where V is the number of vertices and E is the number of edges.
 *
 * Space Complexity:
 * - O(V), for storing the visited array and queue.
 *
 * Real-World Examples:
 * - Finding the shortest path in navigation systems (like Google Maps).
 * - Networking applications where routing paths are required.
 * - Social networking platforms to explore connections.
 *
 * Applications:
 * - Used in various algorithms for pathfinding and shortest path problems.
 * - Useful in networking for determining communication paths.
 * - In AI, BFS can be used for searching and traversing state spaces.
 */
