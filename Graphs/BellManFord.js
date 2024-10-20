/*
 * Bellman-Ford Algorithm
 * -----------------------
 * Overview:
 * The Bellman-Ford algorithm is used to find the shortest path from a single source to all 
 * other vertices in a directed graph. It can handle graphs with both positive and negative 
 * edge weights, unlike Dijkstra's algorithm, which fails with negative weights. Additionally, 
 * Bellman-Ford can detect negative weight cycles in a graph. The algorithm relaxes all edges 
 * V-1 times, where V is the number of vertices, to compute the shortest paths.
 *
 * Key Points:
 * - The algorithm works with both positive and negative edge weights.
 * - It uses Dynamic Programming (DP) to compute shortest paths.
 * - Can detect negative weight cycles by performing an additional check after relaxing edges.
 * - Works on directed graphs; for undirected graphs, convert them to directed before applying.
 *
 * Advantages:
 * - Handles negative weights, unlike Dijkstra's algorithm.
 * - Can detect negative weight cycles in a graph.
 * 
 * Disadvantages:
 * - Slower compared to Dijkstra's for graphs without negative weights.
 * - Time complexity can be high for dense graphs (many edges).
 *
 * Time Complexity: O(V * E)
 * Where:
 *  - V is the number of vertices in the graph.
 *  - E is the number of edges in the graph.
 *
 * Space Complexity: O(V)
 * Where:
 *  - V is the number of vertices (used for storing distances array).
 *
 * Real-World Examples:
 * - Routing algorithms in communication networks that need to handle negative edges.
 * - Currency arbitrage detection in financial systems.
 *
 * Applications:
 * - Network routing with dynamic changes in link weights.
 * - Solving linear programming problems in optimization.
 */

class Solution {
    bellman_ford(V, edges, S) {
        // Initialize distances from source S to all other vertices as infinite (large number)
        let distances = new Array(V).fill(100000000);
        distances[S] = 0;

        // Relax all edges (V - 1) times
        for (let i = 0; i < V - 1; i++) {
            for (let edge of edges) {
                let u = edge[0];  // Source vertex of the edge
                let v = edge[1];  // Destination vertex of the edge
                let weight = edge[2];  // Weight of the edge
                // If the distance to vertex u is known and a shorter path to v is found, update the distance to v
                if (distances[u] !== 100000000 && (distances[u] + weight) < distances[v]) {
                    distances[v] = distances[u] + weight;
                }
            }
        }

        // Check for negative weight cycles
        for (let edge of edges) {
            let u = edge[0];
            let v = edge[1];
            let weight = edge[2];
            // If a shorter path is still found after (V - 1) iterations, a negative cycle exists
            if (distances[u] !== 100000000 && (distances[u] + weight) < distances[v]) {
                return [-1];  // Negative weight cycle found
            }
        }

        // Return the shortest distances from source S to all other vertices
        return distances;
    }
}
