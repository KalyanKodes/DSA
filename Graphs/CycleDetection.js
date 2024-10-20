/*
 * Cycle Detection in Directed Graphs (DFS)
 * ---------------------------------------
 * Overview:
 * This algorithm detects cycles in a directed graph using a modified Depth-First Search (DFS) approach. 
 * In an undirected graph, DFS alone might fail to detect cycles properly, but in a directed graph, 
 * the use of a recursion stack in DFS helps detect cycles effectively by checking for back edges.
 *
 * Key Points:
 * - The graph is represented as an adjacency list where each vertex points to other vertices.
 * - DFS is used with an additional recursion stack (`recStack`) to keep track of the current path being explored.
 * - If a back edge (an edge pointing to a node already in the recursion stack) is found, a cycle exists.
 * - The algorithm ensures that all nodes are visited, and all paths are explored to detect cycles.
 *
 * Advantages:
 * - Simple and efficient approach to detect cycles in directed graphs.
 * - DFS uses recursion to explore deep paths, making it easy to backtrack once a cycle is detected.
 *
 * Disadvantages:
 * - High memory usage due to recursion stack in case of deep graphs.
 * - Only works for detecting cycles in directed graphs. For undirected graphs, a different approach is needed (e.g., using DSU or BFS).
 *
 * Time Complexity: O(V + E)
 * Where:
 *  - V is the number of vertices in the graph.
 *  - E is the number of edges in the graph.
 *
 * Space Complexity: O(V)
 * Where:
 *  - V is the number of vertices (due to recursion stack and visited array).
 *
 * Real-World Examples:
 * - Detecting circular dependencies in project management (e.g., in task scheduling systems).
 * - Identifying feedback loops in electrical circuits or signal processing networks.
 *
 * Applications:
 * - Used in operating systems to detect deadlocks in resource allocation graphs.
 * - Helps in dependency resolution in software package managers (e.g., npm, pip).
 */

const graph = {
    1: [0],   // Node 1 points to node 0
    2: [1],   // Node 2 points to node 1
    3: [2],   // Node 3 points to node 2
};

const numNodes = Math.max(...Object.keys(graph).map(Number)) + 1;

/*
 * Function to detect cycles in the directed graph using DFS
 * @param {number} currNode - Current node being explored in the graph
 * @param {boolean[]} visited - Array marking nodes that have been visited
 * @param {boolean[]} recStack - Array marking nodes that are in the current recursion stack
 * @returns {boolean} - Returns true if a cycle is detected, otherwise false
 */
function findCycle(currNode, visited, recStack) {
    if (!visited[currNode]) {  // If the node hasn't been visited yet
        visited[currNode] = true;  // Mark it as visited
        recStack[currNode] = true;  // Mark it as being in the current recursion stack

        // Explore all neighbors of the current node
        for (let neighbor of graph[currNode]) {
            // If the neighbor is in the recursion stack, we found a cycle
            if (recStack[neighbor]) {
                return true;
            }
            // Recursively visit the neighbor
            if (findCycle(neighbor, visited, recStack)) {
                return true;
            }
        }
    }
    recStack[currNode] = false;  // Remove the current node from the recursion stack
    return false;  // No cycle found from this path
}

// Arrays to track visited nodes and recursion stack
let visited = new Array(numNodes).fill(false);
let recStack = new Array(numNodes).fill(false);
let cycleDetected = false;

/*
 * Iterate over all nodes in the graph
 * Start a DFS from each unvisited node to check for cycles
 * If a cycle is found, break and return the result
 */
for (let key in graph) {
    if (!visited[key]) {
        // Check for cycle starting from node `key`
        cycleDetected = findCycle(Number(key), visited, recStack);
        if (cycleDetected) {
            break;  // Stop if a cycle is detected
        }
    }
}

console.log(cycleDetected);  // Outputs true if a cycle exists, false otherwise


/*
 * Cycle Detection in Undirected Graphs (DFS)
 * ------------------------------------------
 * For detecting cycles in undirected graphs, we modify the DFS approach slightly. 
 * We ensure that the recursion does not revisit the parent node during traversal. 
 * The idea is to check if a node points to an already visited node that is not its parent.
 */

const undirectedGraph = {
    0: [1, 4],    // Node 0 points to 1 and 4
    1: [0, 2],    // Node 1 points to 0 and 2
    2: [1, 3],    // Node 2 points to 1 and 3
    3: [2],       // Node 3 points to 2
    4: [5],       // Node 4 points to 5
    5: [4, 3],    // Node 5 points to 4 and 3
};

/*
 * Function to detect cycles in an undirected graph using DFS
 * @param {number} vertex - Current vertex being explored
 * @param {boolean[]} visited - Array marking visited vertices
 * @param {number} parent - The parent vertex of the current vertex
 * @returns {boolean} - Returns true if a cycle is detected, otherwise false
 */
function cycleDetectionUndirected(vertex, visited, parent) {
    visited[vertex] = true;  // Mark the current node as visited
    // Explore all neighbors of the current node
    for (let neighbor of undirectedGraph[vertex]) {
        // If the neighbor hasn't been visited, recursively visit it
        if (!visited[neighbor]) {
            if (cycleDetectionUndirected(neighbor, visited, vertex)) {
                return true;  // Cycle found
            }
        }
        // If the neighbor has been visited and is not the parent, a cycle exists
        else if (neighbor !== parent) {
            return true;  // Cycle found
        }
    }
    return false;  // No cycle found
}

// Start the cycle detection process in an undirected graph
console.log(cycleDetectionUndirected(0, new Array(Object.keys(undirectedGraph).length).fill(false), -1));
