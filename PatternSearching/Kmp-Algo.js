/*
 * KMP (Knuth-Morris-Pratt) Algorithm
 * -----------------------------------
 * Overview:
 * The KMP algorithm is used to efficiently search for occurrences of a "pattern" in a "text". It optimizes the naive approach by avoiding unnecessary comparisons. The key idea is to use preprocessing of the pattern to create an LPS (Longest Prefix Suffix) array that helps in skipping redundant character comparisons.
 *
 * Time Complexity:
 * - Preprocessing the pattern: O(m), where m is the length of the pattern.
 * - Searching the text: O(n), where n is the length of the text.
 * - Overall: O(n + m), making it efficient for large texts and patterns.
 *
 * Space Complexity:
 * - O(m) for the LPS array used to store the longest prefix suffix values.
 *
 * Key Points:
 * - Efficient for searching patterns in large texts due to its linear complexity.
 * - Avoids re-examining characters in the text by using previously computed LPS values.
 *
 * Features:
 * - Pattern preprocessing to build the LPS array.
 * - Avoids backtracking in the text, unlike naive pattern searching algorithms.
 *
 * Why We Use It:
 * The KMP algorithm is preferred in situations where patterns need to be searched efficiently within large texts, or when multiple search operations are required. It is especially useful in repetitive patterns where rechecking already matched characters can be avoided.
 *
 * Real-World Example:
 * - Searching for keywords in a large document or database.
 * - Detecting specific DNA sequences in genetic research.
 *
 * Applications:
 * - **Text Searching**: Used in text editors and search engines for finding substrings within larger documents.
 * - **DNA Sequencing**: Employed in bioinformatics for pattern matching in genetic sequences.
 * - **Data Compression**: Utilized in algorithms that involve searching for repeated patterns in data.
 * - **String Matching in Network Protocols**: Used in packet inspection for detecting specific patterns in network traffic.
 * - **Compiler Design**: Helps in lexical analysis for recognizing tokens in programming languages.
 *
 * Advantages:
 * - Linear time complexity: O(n + m) ensures efficient pattern searching.
 * - No backtracking is required in the text, reducing redundant comparisons.
 *
 * Disadvantages:
 * - The preprocessing step adds some overhead, especially for short patterns or when pattern matching is done once.
 */

// Class implementing the KMP algorithm
class KMP {
    /*
     * Constructs the LPS (Longest Prefix Suffix) array for the given pattern.
     * - The LPS array helps to skip redundant comparisons by storing the length of the previous longest prefix
     *   that is also a suffix.
     * Time Complexity: O(m), where m is the length of the pattern.
     * 
     * Parameters:
     * lps - An array to store the LPS values.
     * pat - The pattern string for which the LPS array is built.
     */
    constructLpsArr(lps, pat) {
        let i = 1; // Current index in the pattern (starts from 1 since LPS[0] is always 0)
        let j = 0; // Length of the previous longest prefix suffix
        lps[0] = 0; // The first value of LPS is always 0 since a single character has no prefix and suffix

        // Iterate through the pattern to fill the LPS array
        while (i < lps.length) {
            // If characters match, increment both i and j
            if (pat[i] === pat[j]) {
                j++;          // Extend the current matching prefix
                lps[i] = j;   // Set LPS value for the current index
                i++;
            } else {
                // If there is a mismatch and j is not 0, use the previous LPS value to avoid rechecking
                if (j != 0) {
                    j = lps[j - 1]; // Move j to the last known prefix length
                } else {
                    lps[i] = 0; // No prefix matches, set LPS value to 0
                    i++;
                }
            }
        }
    }

    /*
     * Searches for the given pattern in the text using the KMP algorithm.
     * Time Complexity: O(n), where n is the length of the text.
     *
     * Parameters:
     * text - The text in which the pattern is searched.
     * pattern - The pattern to search for.
     * 
     * Returns:
     * - true if the pattern is found in the text.
     * - false if the pattern is not found.
     */
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

/*
 * Example Explanation:
 * - The KMP algorithm is used here to search for the pattern "onions" in the text "onionionspl".
 * - The algorithm successfully finds the pattern and returns true.
 * - If the pattern is not present in the text, it would return false.
 */
