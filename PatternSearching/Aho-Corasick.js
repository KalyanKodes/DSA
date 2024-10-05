/*
 * Aho-Corasick Algorithm
 * ----------------------
 * Overview:
 * The Aho-Corasick algorithm is used for finding multiple patterns in a text simultaneously. It builds a Trie from a set of patterns and uses failure links to efficiently handle mismatches. It is widely used in applications where we need to search for multiple strings at once.
 *
 * Time Complexity: O(n + m + z)
 *  - n: Length of the text.
 *  - m: Total length of all patterns.
 *  - z: Number of occurrences of patterns in the text.
 *
 * Space Complexity: O(m * k)
 *  - m: Number of states (nodes in the trie).
 *  - k: Size of the alphabet (26 for lowercase English letters).
 *
 * Key Points:
 * - **Trie Construction**: Builds a Trie structure for the set of patterns.
 * - **Failure Links**: Handles mismatches by linking to proper suffixes.
 * - **Output Links**: Identifies patterns at different points in the text.
 *
 * Features:
 * - Efficient for searching multiple patterns.
 * - Avoids unnecessary comparisons using failure links.
 * - Works for dictionary-based searches or pattern matching in large texts.
 *
 * Operations:
 * - Insert: Add patterns to the Trie.
 * - Set Failure Links: Establish failure links to handle mismatches.
 * - Search: Find all occurrences of patterns in the text using the Trie and failure links.
 *
 * Why We Use It:
 * It is ideal for scenarios where multiple patterns need to be searched in a single pass, making it much more efficient than using multiple individual search operations.
 *
 * Real-World Example:
 * Consider a network intrusion detection system (NIDS) that scans network traffic for multiple malicious patterns (like virus signatures or attack keywords). The Aho-Corasick algorithm helps quickly identify these patterns in real-time.
 *
 * Applications:
 * - **Network Intrusion Detection Systems (NIDS)**: Identifying multiple threat signatures in network traffic.
 * - **Text Editors**: Implementing search-and-replace functions with multiple search terms.
 * - **Spam Filtering**: Detecting spam words in emails.
 * - **DNA Sequence Analysis**: Finding multiple genes or DNA sequences in a genome.
 * - **Search Engines**: Efficiently searching multiple keywords in documents.
 *
 * Advantages:
 * - Fast for searching multiple patterns in large texts.
 * - Reduces unnecessary character comparisons using failure links.
 *
 * Disadvantages:
 * - High memory consumption due to the Trie and failure links.
 */

// Class to represent a state (node) in the Trie.
class State {
    constructor() {
        this.referenceArr = new Array(26).fill(null); // Reference array to store child nodes (26 letters)
        this.isEnded = false; // Marks the end of a pattern
        this.failureLink = null; // Failure link to handle mismatches
        this.words = []; // Stores matched patterns (words)
    }
}

// Class to represent the automaton (Trie + Failure Links)
class AutoMeta {
    constructor() {
        this.root = new State(); // Root node of the Trie
    }

    /*
     * Insert function
     * Inserts a word (pattern) into the Trie.
     * Real-World Example:
     * Suppose we have a dictionary of words like "abc", "bc", and "cabc", and we need to add these
     * patterns into our data structure (Trie) for efficient searching.
     */
    insert(word) {
        let temp = this.root; // Start from root
        [...word].forEach((item) => {
            let index = item.charCodeAt(0) - 97; // Calculate index based on the character ('a' = 0, 'z' = 25)
            if (temp.referenceArr[index] === null) { // If no child exists, create a new node
                let newState = new State();
                temp.referenceArr[index] = newState;
                temp.words.push(item);
            }
            temp = temp.referenceArr[index]; // Move to the next node
        });
        temp.isEnded = true; // Mark the end of the word
        temp.words.push(word); // Store the word at the final node
    }

    /*
     * Helper function to find proper suffixes for a string.
     * This is used to build failure links.
     * Example: For a string "abc", the suffixes would be "bc", "c", and an empty string.
     */
    #findProperSufix(string) {
        if (string === " " || string.length === 1) {
            return [" "]; // Return root if single character
        }
        let sufixs = [];
        for (let i = 1; i < string.length; i++) {
            sufixs.push(string.slice(i)); // Store suffixes of the string
        }
        sufixs.push(" ");
        return sufixs; // Return all suffixes
    }

    /*
     * Helper function to find the node for a given prefix in the Trie.
     * This helps in creating failure links.
     * Example: If the sequence is "abc", this function finds the node representing "abc" in the Trie.
     */
    #findPrefixNode(sequence) {
        if (sequence === " ") {
            return this.root; // Return root for an empty sequence
        }
        let node = this.root;
        for (let i = 0; i < sequence.length; i++) {
            let index = sequence.charCodeAt(i) - 97;
            if (node.referenceArr[index] === null) {
                return false; // Prefix not found in the Trie
            }
            node = node.referenceArr[index]; // Move to the next node
        }
        return node; // Return the node for the prefix
    }

    /*
     * Function to set failure links for all nodes in the Trie.
     * Failure links help skip unnecessary comparisons during the search phase.
     * Example: If a mismatch occurs while searching "ab", the failure link points to the longest
     * proper suffix (like "b") that could be a valid match.
     */
    setChildsLink(node, wordSequence) {
        if (node.isEnded) {
            return; // If this is an end node, return
        }
        node.words.forEach((item) => {
            let sequence = wordSequence + item; // Create sequence from parent word
            let index = item.charCodeAt(0) - 97;
            let $sufix = this.#findProperSufix(sequence); // Get suffixes
            for (let sfx = 0; sfx < $sufix.length; sfx++) {
                let prefixNode = this.#findPrefixNode($sufix[sfx]); // Find node for the suffix
                if (prefixNode) {
                    node.referenceArr[index].failureLink = prefixNode; // Set failure link
                    break;
                }
            }
            this.setChildsLink(node.referenceArr[index], sequence); // Recursively set for child nodes
        });
    }

    /*
     * Function to initialize failure links from the root node.
     * Example: The root node has a failure link pointing to itself.
     */
    setFailureLink() {
        this.root.failureLink = this.root; // Root points to itself
        this.root.words.forEach((word) => {
            let index = word.charCodeAt(0) - 97;
            this.root.referenceArr[index].failureLink = this.root; // Direct children of root point to root
            this.setChildsLink(this.root.referenceArr[index], word); // Set failure links for all child nodes
        });
    }

    /*
     * Search function
     * Searches the text for occurrences of the patterns in the Trie.
     * Real-World Example:
     * For a text "abcabcabc", the function finds all occurrences of patterns like "abc" or "bc".
     */
    search(text) {
        let node = this.root;
        for (let i = 0; i < text.length; i++) {
            let index = text.charCodeAt(i) - 97;
            
            // If there's a mismatch, follow the failure link
            while (node.referenceArr[index] === null && node !== this.root) {
                node = node.failureLink;
            }

            // Move to the matched node or the root
            if (node.referenceArr[index] !== null) {
                node = node.referenceArr[index];
            } else {
                node = this.root;
            }

            // Traverse failure links to find all patterns that match at this position
            let temp = node;
            while (temp !== this.root) {
                if (temp.isEnded) {
                    console.log(temp.words); // Print all matched words
                }
                temp = temp.failureLink;
            }
        }
    }
}

// Example Usage
let sentence = "abcabcabc";
let dictionary = ["abc", "bc", "cabc"];

let trieTree = new AutoMeta();
dictionary.forEach((root) => trieTree.insert(root));
trieTree.setFailureLink();
trieTree.search(sentence); // Outputs all found patterns
