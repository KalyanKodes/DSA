/*
 * Topic Name: Topological Sorting in Directed Acyclic Graphs (DAG)
 *
 * Overview: 
 * Topological sorting is a linear ordering of vertices in a directed acyclic graph (DAG) such that 
 * for every directed edge u -> v, vertex u comes before vertex v in the ordering. 
 * It is used in scenarios where certain tasks depend on the completion of others, such as project scheduling.
 *
 * Key Points:
 * - Only applicable to Directed Acyclic Graphs (DAGs).
 * - There can be multiple valid topological orderings for a given DAG.
 * - A topological sort is not unique unless the graph has a specific structure.
 *
 * Advantages:
 * - Provides a way to order tasks in a dependency hierarchy.
 * - Can be used in scheduling problems to ensure that prerequisites are handled before dependent tasks.
 * - Efficiently organizes data in a directed graph for further processing.
 *
 * Disadvantages:
 * - Not applicable to graphs with cycles (non-DAGs).
 * - The algorithm does not give information about the path lengths or weights of edges.
 *
 * Time and Space Complexity:
 * - Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges in the graph.
 * - Space Complexity: O(V) for the visited status array and the stack used for storing the topological order.
 *
 * Real-World Examples:
 * - Course prerequisites in a university setting, where certain courses must be completed before others.
 * - Task scheduling in project management, ensuring that tasks are performed in the correct order.
 *
 * Applications:
 * - Used in compilers for dependency resolution.
 * - In build systems to determine the order of compilation.
 * - In artificial intelligence for planning and scheduling problems.
 */

let graph = {
    5: [2, 0], // Vertex 5 has edges to vertices 2 and 0.
    0: [],     // Vertex 0 has no outgoing edges.
    4: [0, 1], // Vertex 4 has edges to vertices 0 and 1.
    1: [],     // Vertex 1 has no outgoing edges.
    3: [1],    // Vertex 3 has an edge to vertex 1.
    2: [3]     // Vertex 2 has an edge to vertex 3.
}

// Function to perform a Depth-First Search (DFS) for topological sorting.
function dfsTopologicalSort(curVertex, vsa, stack) {
    /*
     * Check if the current vertex has not been visited.
     * If not visited, mark it as visited and recursively visit its neighbors.
     */
    if (vsa[curVertex] === false) {
        vsa[curVertex] = true; // Mark current vertex as visited.
        
        // Recursively visit all neighbors of the current vertex.
        for (let i = 0; i < graph[curVertex].length; i++) {
            dfsTopologicalSort(graph[curVertex][i], vsa, stack);
        }

        stack.push(curVertex); // Push the current vertex to the stack after visiting all its neighbors.
    }
}

// Initialize visited status array and stack for storing the topological order.
let vsa = new Array(Object.keys(graph).length).fill(false);
let stack = [];

// Perform DFS for each vertex in the graph.
for (let vertex in graph) {
    if (vsa[vertex] === false) {
        dfsTopologicalSort(vertex, vsa, stack);
    }
}

// Print the vertices in topologically sorted order.
while (stack.length > 0) {
    let element = stack.pop(); // Remove and print the top vertex from the stack.
    console.log(element);
}
