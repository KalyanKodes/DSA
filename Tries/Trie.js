/**
 * Trie data structure, also known as a prefix tree or digital search tree,
 * is used for storing a dynamic set of strings, where each node represents a character.
 * It is particularly useful for tasks such as autocomplete and spell checking.
 * 
 * Key Properties:
 * - A Trie is a K-ary tree, meaning each node can have multiple children (not limited to two like in a binary tree).
 * - It allows efficient retrieval of words based on their prefixes.
 * - The time complexity for searching, inserting, or prefix-checking a word is O(m), 
 *   where m is the length of the word, regardless of the number of words stored in the Trie.
 */

class TrieNode {
    constructor() {
        // Array to hold references to child nodes (26 for each lowercase English letter).
        this.referenceArr = new Array(26).fill(null);
        // Boolean flag to indicate if the node represents the end of a valid word.
        this.isEnded = false;
    }
}

class Trie {
    constructor() {
        // The root of the Trie is an empty node.
        this.root = new TrieNode();
    }

    /**
     * Inserts a word into the Trie.
     * @param {string} word - The word to be inserted.
     */
    insert(word) {
        let triePointer = this.root; // Start at the root node.
        for (let i = 0; i < word.length; i++) {
            // Calculate the index for the character in the reference array.
            let index = word.charCodeAt(i) - 97; // 'a' is 97 in ASCII.
            // Create a new TrieNode if it doesn't exist for the character.
            if (triePointer.referenceArr[index] === null) {
                triePointer.referenceArr[index] = new TrieNode();
            }
            // Move to the child node corresponding to the character.
            triePointer = triePointer.referenceArr[index];
        }
        // Mark the last character node as the end of a word.
        triePointer.isEnded = true;
    }

    /**
     * Searches for a word in the Trie.
     * @param {string} word - The word to be searched.
     * @return {boolean} - Returns true if the word exists, false otherwise.
     */
    search(word) {
        let triePointer = this.root; // Start at the root node.
        for (let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 97; // Calculate index for the character.
            // If the character does not exist, return false.
            if (triePointer.referenceArr[index] === null) {
                return false;
            }
            // Move to the child node corresponding to the character.
            triePointer = triePointer.referenceArr[index];
        }
        // Return true only if the last character node is marked as an end of a word.
        return triePointer.isEnded;
    }

    /**
     * Checks if there is any word in the Trie that starts with the given prefix.
     * @param {string} prefix - The prefix to be checked.
     * @return {boolean} - Returns true if any word starts with the prefix, false otherwise.
     */
    startsWith(prefix) {
        let triePointer = this.root; // Start at the root node.
        for (let i = 0; i < prefix.length; i++) {
            let index = prefix.charCodeAt(i) - 97; // Calculate index for the character.
            // If the character does not exist, return false.
            if (triePointer.referenceArr[index] === null) {
                return false;
            }
            // Move to the child node corresponding to the character.
            triePointer = triePointer.referenceArr[index];
        }
        // If all characters in the prefix were found, return true.
        return true;
    }
}

// Example usage of the Trie class
let t = new Trie();
let words = ["apple", "apps", "apxl", "bac", "bat"];

// Insert words into the Trie
words.forEach((word) => {
    t.insert(word);
});

// Test the search and prefix functionality
console.log(t.search("apple")); // Expected output: true (word exists)
console.log(t.startsWith("app")); // Expected output: true (prefix exists)
console.log(t.search("bat")); // Expected output: true (word exists)
console.log(t.startsWith("ba")); // Expected output: true (prefix exists)
console.log(t.search("bats")); // Expected output: false (word does not exist)
