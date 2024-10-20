/*
 * Dijkstra's Shortest Path Algorithm (Using Min Heap)
 * ---------------------------------------------------
 * Overview:
 * This algorithm is used to find the shortest path from a given source vertex to all other vertices in a graph. 
 * It works for both directed and undirected graphs. Dijkstra's algorithm is a greedy approach that uses 
 * a priority queue (min-heap) to keep track of the minimum distances from the source to other vertices.
 * 
 * Key Points:
 * - The graph is represented as an adjacency list where each vertex has a list of neighbors and the associated edge weights.
 * - A min-heap (priority queue) is used to extract the vertex with the smallest distance at each step.
 * - The algorithm performs relaxation on edges, updating the shortest path to each neighbor when a shorter path is found.
 * 
 * Advantages:
 * - Efficient in finding the shortest paths in graphs with non-negative weights.
 * - Can handle large graphs effectively using the min-heap.
 * 
 * Disadvantages:
 * - Only works with graphs that have non-negative edge weights.
 * - May not be the most efficient for dense graphs compared to other algorithms like Bellman-Ford.
 * 
 * Time Complexity: O(E + E log V)
 * Where:
 *  - V is the number of vertices in the graph.
 *  - E is the number of edges.
 * 
 * Space Complexity: O(V)
 * Where:
 *  - V is the number of vertices (due to the distances array and heap).
 * 
 * Real-World Examples:
 * - Finding the shortest route in GPS navigation systems.
 * - Optimizing communication networks for minimum latency.
 * 
 * Applications:
 * - Used in routing algorithms for network communication (e.g., OSPF protocol).
 * - Pathfinding algorithms in AI, robotics, and game development.
 */

// Class representing a minimum heap for storing pairs of (vertex, distance)
class MinHeap {
    constructor() {
        this.minHeap = [];  // Array to store heap elements
    }
    
    /*
     * Function to insert a new pair (vertex, weight) into the min-heap.
     * The heap is then heapified upwards to maintain the min-heap property.
     * @param {Pair} pair - The pair object (vertex, weight) to be inserted.
     */
    insert(pair) {
        this.minHeap.push(pair);
        this.heapifyUp();  // Ensure heap property
    }
    
    /*
     * Heapify up: Adjusts the heap to maintain the min-heap property after insertion.
     * Compares the inserted element with its parent and swaps if necessary.
     */
    heapifyUp() {
        let i = this.minHeap.length - 1;
        while (i > 0) {
            let parentIndex = Math.floor((i - 1) / 2);  // Find the parent index
            if (this.minHeap[parentIndex].weight > this.minHeap[i].weight) {
                [this.minHeap[parentIndex], this.minHeap[i]] = [this.minHeap[i], this.minHeap[parentIndex]];  // Swap
            }
            i = parentIndex;  // Move up the heap
        }
    }
    
    /*
     * Removes and returns the pair (vertex, weight) with the smallest weight (min-heap root).
     * After removal, the heap is heapified downwards to maintain the min-heap property.
     * @returns {Pair} - The pair object with the smallest weight.
     */
    remove() {
        let toReturn = this.minHeap[0];  // Store the root (smallest element)
        this.minHeap[0] = this.minHeap[this.minHeap.length - 1];  // Replace root with the last element
        this.minHeap.pop();  // Remove the last element
        this.heapifyDown();  // Restore heap property
        return toReturn;
    }
    
    /*
     * Heapify down: Adjusts the heap to maintain the min-heap property after removal.
     * Compares the current element with its children and swaps if necessary.
     */
    heapifyDown() {
        let i = 0;
        while (true) {
            let leftChild = (2 * i) + 1;
            let rightChild = (2 * i) + 2;
            let swappedIndex = i;

            // Compare with the left child
            if (leftChild < this.minHeap.length && this.minHeap[swappedIndex].weight > this.minHeap[leftChild].weight) {
                swappedIndex = leftChild;
            }
            
            // Compare with the right child
            if (rightChild < this.minHeap.length && this.minHeap[swappedIndex].weight > this.minHeap[rightChild].weight) {
                swappedIndex = rightChild;
            }
            
            // If no swap is needed, break
            if (swappedIndex === i) break;

            // Swap and continue heapifying down
            [this.minHeap[i], this.minHeap[swappedIndex]] = [this.minHeap[swappedIndex], this.minHeap[i]];
            i = swappedIndex;
        }
    }
    
    /*
     * Function to check if the heap is empty.
     * @returns {boolean} - Returns true if the heap is empty, otherwise false.
     */
    isEmpty() {
        return this.minHeap.length === 0;
    }
}

// Class representing a pair of (vertex, weight) for the min-heap
class Pair {
    constructor(src, weight) {
        this.src = src;
        this.weight = weight;
    }
}

// Solution class implementing Dijkstra's algorithm
class Solution {
    /*
     * Function to find the shortest distance from the source vertex to all other vertices in the graph.
     * @param {number} V - The number of vertices in the graph.
     * @param {Array} Adj - The adjacency list representing the graph.
     * @param {number} S - The source vertex from which distances are calculated.
     * @returns {Array} - An array of shortest distances from the source vertex to all other vertices.
     */
    dijkstra(V, Adj, S) {
        let distances = new Array(V).fill(Infinity);  // Initialize distances with Infinity
        let heap = new MinHeap();  // Create a new min-heap
        distances[S] = 0;  // Distance to the source vertex is 0
        heap.insert(new Pair(S, 0));  // Insert the source vertex with distance 0
        
        // While the heap is not empty
        while (!heap.isEmpty()) {
            let u = heap.remove();  // Remove the vertex with the smallest distance
            for (let v = 0; v < Adj[u.src].length; v++) {
                // Relaxation step: if a shorter path is found, update the distance
                if (distances[u.src] + Adj[u.src][v][1] < distances[Adj[u.src][v][0]]) {
                    distances[Adj[u.src][v][0]] = distances[u.src] + Adj[u.src][v][1];
                    heap.insert(new Pair(Adj[u.src][v][0], distances[Adj[u.src][v][0]]));  // Insert the updated distance into the heap
                }
            }
        }
        
        return distances;  // Return the array of shortest distances
    }
}

// Example usage of Dijkstra's algorithm
const V = 5;
const Adj = [
    [[1, 9], [2, 6], [3, 5]],  // Vertex 0 is connected to vertices 1, 2, and 3 with respective weights
    [[4, 1]],  // Vertex 1 is connected to vertex 4
    [[4, 2]],  // Vertex 2 is connected to vertex 4
    [[1, 4]],  // Vertex 3 is connected to vertex 1
    []  // Vertex 4 has no connections
];

const S = 0;  // Source vertex
const solution = new Solution();
console.log(solution.dijkstra(V, Adj, S));  // Output the shortest distances from the source vertex
