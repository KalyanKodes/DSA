/*
 * Kosaraju's Algorithm for Strongly Connected Components (SCC)
 * 
 * Overview:
 * Kosaraju's algorithm is an efficient method to find all the Strongly Connected Components (SCCs) in a directed graph.
 * An SCC is a maximal subgraph where every vertex is reachable from every other vertex in the same subgraph.
 * The algorithm works by utilizing Depth-First Search (DFS) twice: once to record the finishing order of nodes and
 * the second time on the transposed graph to discover SCCs.
 * 
 * Key Points:
 * 1. Uses two passes of DFS - the first to fill the stack with the order of completion, and the second on the transposed graph.
 * 2. Efficient for finding SCCs in directed graphs.
 * 3. Based on the property that the transpose of the graph will maintain SCCs but reverse their reachability paths.
 * 4. Time complexity is linear (O(V + E)) where V is the number of vertices and E is the number of edges.
 * 
 * Advantages:
 * 1. Kosaraju's Algorithm is simple to implement and easy to understand.
 * 2. It has a linear time complexity, which makes it efficient for large graphs.
 * 3. The algorithm does not require any additional complex data structures.
 * 
 * Disadvantages:
 * 1. Requires two full passes of DFS, which may seem inefficient in comparison to algorithms like Tarjan's Algorithm
 *    that can find SCCs in a single DFS pass.
 * 2. In practice, performing two DFS runs might lead to higher constant factors than alternatives.
 * 
 * Time Complexity:
 * - Time complexity: O(V + E), where V is the number of vertices and E is the number of edges. The algorithm performs two full passes of DFS.
 * 
 * Space Complexity:
 * - Space complexity: O(V), where V is the number of vertices. This is due to the stack and the visited status array used in the algorithm.
 * 
 * Real-World Examples:
 * 1. Web crawlers - identifying clusters of websites that are strongly connected, where every website in a group can reach every other website.
 * 2. Social networks - detecting communities where people are all mutually connected.
 * 3. Compiler design - finding strongly connected procedures in a program's call graph.
 * 
 * Applications:
 * 1. Used in understanding connectivity in social media networks, identifying groups that can all communicate with each other.
 * 2. Identifying cycles in directed graphs and determining whether a set of nodes can all reach one another.
 * 3. In computational biology, SCCs can help in understanding gene regulation networks.
 * 4. Used in logic circuit design for analyzing feedback loops.
 */

class Stack {
    /*
     * Stack Class: This class provides a basic implementation of a stack data structure.
     * It includes methods to push, pop, and check if the stack is empty.
     */
    constructor() {
        this.stack = []; // Array to store stack elements.
        this.top = -1;   // Variable to track the top of the stack.
    }
    
    // push(v): Adds an element to the top of the stack and updates the top pointer.
    push(v) {
        this.top++;  // Increment the top pointer.
        this.stack[this.top] = v;  // Add the value 'v' to the stack at the top position.
    }
    
    // pop(): Removes and returns the top element of the stack. Decreases the top pointer.
    pop() {
        let toReturn = this.stack[this.top];  // Get the top element.
        this.top--;  // Decrease the top pointer.
        return toReturn;  // Return the popped element.
    }
    
    // isEmpty(): Returns true if the stack is empty, false otherwise.
    isEmpty() {
        return this.top === -1;  // Stack is empty when the top pointer is -1.
    }
}

class Solution {
    
    /*
     * dfs(): A Depth-First Search (DFS) method used for Kosaraju's algorithm.
     * If 'type' is true, it pushes nodes onto the stack in the order of their completion.
     * Otherwise, it performs a DFS for the transposed graph.
     * 
     * Parameters:
     * - graph: The adjacency list representing the graph.
     * - node: The current node being explored.
     * - stack: Stack used to store the order of node finishing times.
     * - vsa: Visited Status Array, used to keep track of visited nodes.
     * - type: Boolean flag to distinguish between the original and transposed graph.
     */
    dfs(graph, node, stack, vsa, type) {
        if(vsa[node] === false) {  // Only process the node if it has not been visited.
            vsa[node] = true;  // Mark the node as visited.
            for(let i = 0; i < graph[node].length; i++) {  // Explore all adjacent nodes.
                this.dfs(graph, graph[node][i], stack, vsa, type);  // Recursive DFS.
            }
            if(type) {  // If 'type' is true, push the node onto the stack.
                stack.push(node);
            }
        }
    }
    
    /*
     * constructGraph(): Constructs an adjacency list for the graph based on the input edges.
     * 
     * Parameters:
     * - arr: An array of directed edges where each element is of the form [src, dst].
     * - v: The number of vertices in the graph.
     * 
     * Returns: The constructed graph in adjacency list format.
     */
    constructGraph(arr, v) {
        let g = Array.from({length: v}, () => []);  // Initialize an empty adjacency list.
        for(let edge of arr) {
            let src = edge[0];  // Source node of the edge.
            let dst = edge[1];  // Destination node of the edge.
            g[src].push(parseInt(dst));  // Add the destination node to the adjacency list of the source.
        }
        return g;  // Return the constructed graph.
    }
    
    /*
     * kosaraju(): Implements Kosaraju's Algorithm to find the number of SCCs in the graph.
     * 
     * Parameters:
     * - arr: The input array representing directed edges.
     * - v: The number of vertices in the graph.
     * - e: The number of edges in the graph.
     * 
     * Returns: The number of strongly connected components (SCCs) in the graph.
     */
    kosaraju(arr, v, e) {
        let stack = new Stack();  // Create a stack to store the order of node completion times.
        let graph = this.constructGraph(arr, v);  // Construct the original graph.
        let vsa = Array.from({length: v}, () => false);  // Initialize the visited status array.
        
        // First pass of DFS: Push nodes to the stack based on their finishing time.
        for (let i = 0; i < v; i++) {
            if (!vsa[i]) {
                this.dfs(graph, i, stack, vsa, true);
            }
        }
        
        // Transpose the graph by reversing all the edges.
        for(let edge of arr) {
            [edge[0], edge[1]] = [edge[1], edge[0]];
        }
        
        // Rebuild the graph based on the transposed edges.
        graph = this.constructGraph(arr, v);
        vsa = vsa.map(() => false);  // Reset the visited status array.
        
        let scc = 0;  // Variable to count the number of strongly connected components.
        
        // Second pass of DFS on the transposed graph:
        while(!stack.isEmpty()) {
            let node = stack.pop();  // Get the next node from the stack.
            if(vsa[node] === false) {  // If the node has not been visited in the transposed graph:
                this.dfs(graph, node, stack, vsa, false);  // Perform DFS to find all nodes in this SCC.
                scc++;  // Increment the SCC count.
            }
        }
        
        return scc;  // Return the total number of SCCs.
    }
}
