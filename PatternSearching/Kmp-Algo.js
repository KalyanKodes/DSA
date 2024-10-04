/*
 * KMP (Knuth-Morris-Pratt) Algorithm
 *
 * Time Complexity:
 * - Preprocessing the pattern: O(m), where m is the length of the pattern.
 * - Searching the text: O(n), where n is the length of the text.
 * - Overall: O(n + m), making it efficient for large texts and patterns.
 *
 * Space Complexity:
 * - O(m) for the LPS array used to store the longest prefix suffix values.
 *
 * Advantages of KMP:
 * - Efficient pattern matching: KMP reduces the number of character comparisons,
 *   allowing for faster searching, especially when the text is large.
 * - Avoids re-examination of characters in the text by utilizing previously
 *   computed information, making it superior to the naive approach.
 * - Works well for repetitive patterns due to its preprocessing step.
 *
 * Real-Time Uses:
 * - Text Searching: Used in text editors and search engines for finding substrings within larger documents.
 * - DNA Sequencing: Employed in bioinformatics for pattern matching in genetic sequences.
 * - Data Compression: Utilized in algorithms that involve searching for repeated patterns in data.
 * - String Matching in Network Protocols: Used in packet inspection for detecting specific patterns in network traffic.
 * - Compiler Design: Helps in lexical analysis for recognizing tokens in programming languages.
 */

class KMP {
    // Constructs the LPS array for the given pattern.
    constructLpsArr(lps, pat) {
        let i = 1; // Current index in the pattern
        let j = 0; // Length of the previous longest prefix suffix
        lps[0] = 0; // The first value of LPS is always 0 since a single character has no prefix and suffix

        // Iterate through the pattern to fill the LPS array
        while (i < lps.length) {
            // If characters match, increment both i and j
            if (pat[i] === pat[j]) {
                j++;
                lps[i] = j; // Set LPS value for the current index
                i++;
            } else {
                // If there is a mismatch and j is not 0, update j to the last known prefix length
                if (j != 0) {
                    j = lps[j - 1];
                } else {
                    lps[i] = 0; // No prefix matches, set LPS value to 0
                    i++;
                }
            }
        }
    }

    // Searches for the given pattern in the text using the KMP algorithm.
    searchPattern(text, pattern) {
        let lps = new Array(pattern.length).fill(0); // Initialize the LPS array
        this.constructLpsArr(lps, pattern); // Build the LPS array for the pattern

        let i = 0; // Current index in the text
        let j = 0; // Current index in the pattern

        // Iterate through the text to search for the pattern
        while (i < text.length) {
            // If characters match, move both indices forward
            if (text[i] === pattern[j]) {
                i++;
                j++;
            } else {
                // If there is a mismatch
                if (j != 0) {
                    j = lps[j - 1]; // Move the pattern index to the last known prefix length
                } else {
                    i++; // Move the text index forward
                }
            }
            // If the entire pattern has been matched
            if (j === pattern.length) {
                return true; // Pattern found
            }
        }
        return false; // Pattern not found
    }
}

// Example usage of the KMP class to search for a pattern in a text
let kmp = new KMP();
console.log(kmp.searchPattern("onionionspl", "onions")); // Output: true
