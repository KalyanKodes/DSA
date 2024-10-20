/*
 * Minimum Spanning Tree (MST) Implementation Using Prim's Algorithm
 * ---------------------------------------------------------------
 * This implementation calculates the weight of the Minimum Spanning Tree 
 * (MST) for a connected, weighted, undirected graph using Prim's algorithm.
 * 
 * Key Concepts:
 * - A Minimum Spanning Tree (MST) connects all vertices in the graph 
 *   without forming any cycles, and it has the minimum possible total edge weight.
 * - The algorithm starts from an arbitrary vertex and grows the MST by 
 *   adding the smallest edge that connects a vertex in the MST to a vertex outside of it.
 *
 * MinHeap Class:
 * ---------------
 * The `MinHeap` class is used to efficiently manage edges during the 
 * construction of the MST. It allows insertion of edges and retrieval 
 * of the minimum edge in logarithmic time complexity.
 *
 * Methods:
 * - `insert(details)`: Inserts a new edge into the heap and maintains the heap property.
 * - `heapifyUp(i)`: Adjusts the heap upwards to ensure the minimum heap property is maintained.
 * - `delete()`: Removes and returns the minimum edge (root) from the heap and 
 *   maintains the heap property by adjusting downwards.
 * - `heapifyDown(i)`: Adjusts the heap downwards to maintain the minimum heap property.
 * - `isEmpty()`: Checks if the heap is empty.
 *
 * Solution Class:
 * ----------------
 * The `Solution` class contains the `spanningTree` method, which implements 
 * Prim's algorithm to calculate the MST weight.
 *
 * Methods:
 * - `spanningTree(v, adj)`: 
 *   - `v`: The number of vertices in the graph.
 *   - `adj`: The adjacency list representation of the graph, where each 
 *     element contains an array of edges represented as [destination, weight].
 *   - Returns the total weight of the MST.
 *
 * Steps:
 * 1. Initialize a visited array `vsa` to track which vertices have been added to the MST.
 * 2. Initialize the total edge weight variable `edgeWeight`.
 * 3. Insert the starting vertex (0) into the heap with an initial weight of 0.
 * 4. While the heap is not empty, do the following:
 *    - Extract the minimum edge from the heap.
 *    - If the node has not been visited, mark it as visited and 
 *      add its weight to `edgeWeight`.
 *    - For each neighbor of the current node, if it hasn't been visited,
 *      insert it into the heap with its weight.
 * 5. Return the total weight of the MST.
 *
 * Example Usage:
 * Given a graph represented as an adjacency list:
 * 
 *   0 --(2)--> 1
 *   |          /
 * (1)       (3)
 *   |       /
 *   2 --(4)--> 3
 * 
 * The adjacency list for this graph would look like:
 * adj = [
 *   [[1, 2], [2, 1]], // edges from vertex 0
 *   [[0, 2], [3, 3]], // edges from vertex 1
 *   [[0, 1], [3, 4]], // edges from vertex 2
 *   [[1, 3], [2, 4]]  // edges from vertex 3
 * ];
 *
 * The method `spanningTree(4, adj)` would return the total weight of 
 * the MST for this graph.
 */



class MinHeap {
    constructor() {
        this.heap = []; // Initialize the heap as an empty array.
    }

    // Inserts a new edge into the heap.
    insert(details) {
        this.heap.push(details); // Add the edge details to the heap.
        this.heapifyUp(this.heap.length - 1); // Maintain the heap property.
    }

    // Maintains the min-heap property by moving the inserted element up.
    heapifyUp(i) {
        if (i > 0) { // Continue until the root is reached.
            let parent = Math.floor((i - 1) / 2); // Calculate the parent's index.
            // If the current node's weight is less than its parent's weight, swap them.
            if (this.heap[parent][2] > this.heap[i][2]) {
                [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
                this.heapifyUp(parent); // Recur for the parent.
            }
        }
    }

    // Removes and returns the minimum edge (root) from the heap.
    delete() {
        if (this.heap.length === 1) return this.heap.pop(); // If only one element, pop and return it.
        let toReturn = this.heap[0]; // Store the root (minimum edge).
        this.heap[0] = this.heap.pop(); // Replace root with the last element.
        this.heapifyDown(0); // Restore the heap property.
        return toReturn; // Return the removed minimum edge.
    }

    // Maintains the min-heap property by moving the root down.
    heapifyDown(i) {
        let smallest = i; // Start with the current index as the smallest.
        let left = (2 * i) + 1; // Left child's index.
        let right = (2 * i) + 2; // Right child's index.

        // Compare with left child and update smallest if needed.
        if (left < this.heap.length && this.heap[left][2] < this.heap[smallest][2]) smallest = left;
        // Compare with right child and update smallest if needed.
        if (right < this.heap.length && this.heap[right][2] < this.heap[smallest][2]) smallest = right;

        // If smallest is not the current index, swap and continue down.
        if (smallest !== i) {
            [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
            this.heapifyDown(smallest); // Recur for the smallest index.
        }
    }

    // Checks if the heap is empty.
    isEmpty() {
        return this.heap.length === 0; // Returns true if the heap is empty.
    }
}

class Solution {
    // Function to calculate the weight of the Minimum Spanning Tree (MST)
    spanningTree(v, adj) {
        let vsa = new Array(v).fill(false); // Array to track visited vertices.
        let edgeWeight = 0; // Variable to store the total weight of the MST.
        let heap = new MinHeap(); // Create a new instance of MinHeap.

        heap.insert([0, -1, 0]); // Start with the first vertex (0) and an initial weight of 0.

        // While there are edges in the heap, process them.
        while (!heap.isEmpty()) {
            let [node, src, weight] = heap.delete(); // Extract the minimum edge from the heap.
            if (vsa[node] === false) { // If the vertex has not been visited:
                vsa[node] = true; // Mark it as visited.
                edgeWeight += weight; // Add its weight to the total MST weight.
                
                // Traverse all neighbors of the current node.
                for (let i = 0; i < adj[node].length; i++) {
                    let neighbor = adj[node][i][0]; // Get the neighboring vertex.
                    let edgeWeight = adj[node][i][1]; // Get the weight of the edge.

                    // If the neighbor has not been visited, add it to the heap.
                    if (!vsa[neighbor]) {
                        heap.insert([neighbor, node, edgeWeight]); // Insert neighbor into the heap.
                    }
                }
            }
        }
        return edgeWeight; // Return the total weight of the MST.
    }
}
