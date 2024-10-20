/*
 * Minimum Spanning Tree (MST)
 * -----------------------------
 * A Minimum Spanning Tree (MST) or Minimum Weight Spanning Tree is a subset of the edges of a connected, edge-weighted undirected graph that connects all the vertices together without any cycles, and with the minimum possible total edge weight.
 *
 * Key Concepts:
 * - The sum of all weights of the edges in the graph is called the edge weight.
 * - An MST is a subgraph that includes all vertices, connects all vertices, and contains no cycles.
 * - After constructing a subgraph, the edge weight of that subgraph will be minimum.
 *
 * Prim's Algorithm:
 * -------------------
 * Prim's algorithm is a greedy algorithm that finds an MST for a weighted undirected graph. It works by building the MST one vertex at a time, always choosing the smallest edge that connects a vertex in the MST to a vertex outside of it.
 *
 * Steps:
 * 1. Initialize a min-heap to store edges, and a visited array to track vertices included in the MST.
 * 2. Start from an arbitrary vertex, mark it as visited, and add its edges to the min-heap.
 * 3. While the min-heap is not empty, extract the minimum edge. If the destination vertex is not visited, add it to the MST.
 * 4. Mark the newly added vertex as visited and add its edges to the min-heap.
 * 5. Repeat until all vertices are included in the MST.
 *
 * Example:
 * Consider the following graph:
 *
 *         (2)
 *     A -------- B
 *     |         /|
 *   (1)|     (3)|
 *     |       /  |
 *     C ------ D |
 *         (4)    |
 *                (5)
 *
 * The edges are: 
 * A-C (1), A-B (2), B-D (3), C-D (4), B-C (5)
 *
 * Using Prim's algorithm starting from vertex A:
 * - Start with A, add edges (A-C) and (A-B) to the min-heap.
 * - Add (A-C) to the MST since it has the smallest weight.
 * - Next, consider the edges from C: (C-D) and (A-B).
 * - Add (A-B) next, as it has the smallest weight.
 * - Finally, add (B-D) as it connects to the remaining vertex.
 *
 * The resulting MST edges are:
 * A-C (1), A-B (2), B-D (3) with a total weight of 6.
 */
