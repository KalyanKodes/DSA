/*
 * Graph Traversal (BFS and DFS)
 * ------------------------------
 * Overview:
 * This code implements a graph data structure with methods for Breadth-First Search (BFS) 
 * and Depth-First Search (DFS) traversals. The graph is represented as an adjacency list 
 * where each vertex has a list of edges connecting it to other vertices.
 *
 * Key Points:
 * - Graph is represented using an adjacency list, created using an array of Edge objects.
 * - BFS explores the graph level by level using a queue, while DFS explores as far as 
 *   possible down each branch before backtracking.
 *
 * Advantages:
 * - BFS guarantees the shortest path in unweighted graphs.
 * - DFS uses less memory compared to BFS, especially for deep graphs.
 * 
 * Disadvantages:
 * - BFS can consume a lot of memory for wide graphs due to the queue size.
 * - DFS does not guarantee the shortest path in unweighted graphs and may require more 
 *   time in the worst-case scenario due to deep recursion.
 *
 * Time Complexity:
 * - BFS: O(V + E) 
 * - DFS: O(V + E) 
 * Where:
 *  - V is the number of vertices in the graph.
 *  - E is the number of edges.
 *
 * Space Complexity:
 * - BFS: O(V) (for the queue)
 * - DFS: O(V) (for the recursion stack)
 *
 * Real-World Examples:
 * - BFS is used in social networking applications for finding the shortest path 
 *   between users.
 * - DFS is used in pathfinding algorithms and topological sorting.
 *
 * Applications:
 * - Graph traversal in web crawling and social network analysis.
 * - Network broadcasting and routing algorithms.
 * - AI for searching game states and puzzle-solving.
 */

function Edge(src, dest) {
    this.src = src;      // Source vertex of the edge
    this.dest = dest;    // Destination vertex of the edge
}

class Graph {
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

    addNeighbors(element, queue) {
        for (let i = 0; i < this.graph[element].length; i++) {
            queue.push(this.graph[element][i].dest); // Add the destination of each edge to the queue
        }
    }

    bfs() {
        let queue = []; // Initialize queue for BFS
        let visitedArr = new Array(this.graph.length).fill(false); // Track visited nodes
        let i = 0; // Starting node
        queue.push(i); // Enqueue starting node
        process.stdout.write("BFS: ");
        while (queue.length !== 0) {
            let removedElement = queue.shift(); // Dequeue a vertex from the queue
            if (visitedArr[removedElement] === false) { // If the vertex has not been visited
                process.stdout.write(`${removedElement} `); // Print the visited vertex
                visitedArr[removedElement] = true; // Mark the vertex as visited
                this.addNeighbors(removedElement, queue); // Add its neighbors to the queue
            }
        }
    }

    dfs(node = 0, visitedArr = new Array(7).fill(false)) {
        if (visitedArr[node] === false) { // If the current node hasn't been visited
            process.stdout.write(`${node} `); // Print the visited node
            visitedArr[node] = true; // Mark the current node as visited
            // Recursively visit all adjacent nodes
            for (let i = 0; i < this.graph[node].length; i++) {
                this.dfs(this.graph[node][i].dest, visitedArr); // Visit each neighbor
            }
        }
    }
}

// Example usage
let g = new Graph(7); // Create an instance of Graph with 7 vertices
g.bfs(); // Perform BFS traversal
process.stdout.write("\nDFS: "); // Print newline before DFS output
g.dfs(); // Perform DFS traversal
