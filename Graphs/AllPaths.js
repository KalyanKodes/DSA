/*
 * All Paths from Source to Target in a Graph (DFS)
 * ------------------------------------------------
 * Overview:
 * This problem involves finding all possible paths from a source node to a target node in a 
 * directed graph. The graph is represented as an adjacency list, and the depth-first search 
 * (DFS) algorithm is used to explore all paths recursively. 
 *
 * Key Points:
 * - The graph is represented using an adjacency list where each vertex has a list of edges pointing to other vertices.
 * - DFS explores each possible path and backtracks to explore alternatives.
 *
 * Advantages:
 * - DFS ensures that all paths are explored.
 * - Simple and effective approach to explore deep paths in graphs.
 * 
 * Disadvantages:
 * - May use a lot of memory for deep recursion on large graphs (due to recursion stack).
 * - DFS may explore paths that are not optimal in some cases.
 *
 * Time Complexity: O(V + E)
 * Where:
 *  - V is the number of vertices in the graph.
 *  - E is the number of edges.
 * 
 * Space Complexity: O(V)
 * Where:
 *  - V is the number of vertices (due to recursion stack and visited array).
 *
 * Real-World Examples:
 * - Finding all paths in a road network between cities.
 * - Determining all communication paths in network routing.
 *
 * Applications:
 * - Graph traversal and analysis in networking.
 * - Pathfinding algorithms in AI, robotics, and game development.
 */

function Edge(src, dest) {
    this.src = src;      // Source vertex of the edge
    this.dest = dest;    // Destination vertex of the edge
}

class AllPathGraph {
    constructor(V) {
        this.graph = Array.from({ length: V }, () => []); // Initialize adjacency list for V vertices
        this.constructGraph(); // Build the directed graph
    }

    constructGraph() {
        this.graph[0].push(new Edge(0, 1)); // Edge from vertex 0 to 1
        this.graph[0].push(new Edge(0, 2)); // Edge from vertex 0 to 2
        
        this.graph[1].push(new Edge(1, 0)); // Edge from vertex 1 to 0
        this.graph[1].push(new Edge(1, 3)); // Edge from vertex 1 to 3

        this.graph[2].push(new Edge(2, 0)); // Edge from vertex 2 to 0
        this.graph[2].push(new Edge(2, 4)); // Edge from vertex 2 to 4
        
        this.graph[3].push(new Edge(3, 1)); // Edge from vertex 3 to 1
        this.graph[3].push(new Edge(3, 4)); // Edge from vertex 3 to 4
        this.graph[3].push(new Edge(3, 5)); // Edge from vertex 3 to 5
        
        this.graph[4].push(new Edge(4, 2)); // Edge from vertex 4 to 2
        this.graph[4].push(new Edge(4, 3)); // Edge from vertex 4 to 3
        this.graph[4].push(new Edge(4, 5)); // Edge from vertex 4 to 5

        this.graph[5].push(new Edge(5, 3)); // Edge from vertex 5 to 3
        this.graph[5].push(new Edge(5, 4)); // Edge from vertex 5 to 4
        this.graph[5].push(new Edge(5, 6)); // Edge from vertex 5 to 6
        
        this.graph[6].push(new Edge(6, 5)); // Edge from vertex 6 to 5
    }

    findPathsByDfs(target, currNode = 0, vsa = new Array(this.graph.length).fill(false), path = "") {
        if (vsa[currNode] === false) { // If the current node hasn't been visited
            path += currNode;          // Add the current node to the path
            vsa[currNode] = true;      // Mark the current node as visited

            if (currNode !== target) { // If we haven't reached the target node
                // Recursively explore all connected edges from the current node
                for (let i = 0; i < this.graph[currNode].length; i++) {
                    this.findPathsByDfs(target, this.graph[currNode][i].dest, vsa, path);
                }
            } else {
                // If we reached the target node, print the path
                console.log(path);
            }

            // Backtrack: Unmark the current node to explore new paths
            vsa[currNode] = false;
        }
    }
}

// Example usage:
// Create an instance of AllPathGraph with 7 vertices
let apg = new AllPathGraph(7);

// Find and print all paths from node 0 to node 6 using DFS
apg.findPathsByDfs(6); 
