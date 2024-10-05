/**
 * Naive Pattern Searching Algorithm
 * 
 * Overview:
 * - The Naive Pattern Searching algorithm finds all occurrences of a pattern (substring)
 *   within a larger text (string) by checking every possible position.
 * 
 * Key Features:
 * - Simple implementation that compares the pattern with each substring in the text.
 * - Checks each character one by one to verify a match.
 * 
 * Operations Performed:
 * - Loop through each character in the text while comparing with the pattern.
 * - If a mismatch occurs, shift the pattern one position to the right.
 * 
 * Time Complexity:
 * - Worst case: O(m * n), where 'm' is the length of the pattern and 'n' is the length of the text.
 * - Best case: O(n), when the pattern is found at the beginning of the text.
 * 
 * Space Complexity:
 * - O(1), as it only uses a few pointers and a flag.
 * 
 * Advantages:
 * - Easy to implement and understand.
 * 
 * Disadvantages:
 * - Inefficient for large texts and patterns as it checks each position exhaustively.
 * 
 * Real-World Examples:
 * - Text editing tools that allow find and replace functionality.
 * - Simple search functionality in small databases.
 * 
 * Applications:
 * - DNA sequence analysis for locating specific sequences.
 * - String searching in text documents and web pages.
 */

// Class for implementing the Naive Pattern Searching algorithm
class Solution {
    /**
     * Function to search for the pattern in the given text.
     * 
     * Overview:
     * - This function searches for occurrences of a specified pattern in a given text.
     *
     * Parameters:
     * - str: The text in which the pattern needs to be searched.
     * - pat: The pattern to search for in the text.
     * - Returns: true if the pattern is found, otherwise returns false.
     */
    searchPattern(str, pat) {
        // Step 1: Initialize pointers for the current window in the text
        let low = 0;  // Start index of the current window in the text
        let high = pat.length - 1;  // End index of the current window (length of the pattern)

        // Step 2: Loop through the text until the window reaches the end of the text
        while (high < str.length) {
            let stPointer = low;  // Pointer to traverse the current window in the text
            let patPointer = 0;   // Pointer to traverse the pattern

            let flag = true;  // Flag to check if the pattern matches the current window

            // Step 3: Compare characters of the pattern with the current window in the text
            while (stPointer <= high) {
                if (str[stPointer] !== pat[patPointer]) {
                    // Step 4: If any character doesn't match, set flag to false and break
                    flag = false;
                    break;
                }
                // Step 5: Move both pointers forward if characters match
                stPointer++;
                patPointer++;
            }

            // Step 6: If the pattern matches completely, return true (pattern found)
            if (flag) {
                return true;
            }

            // Step 7: Slide the window by one position in the text
            low++;
            high++;
        }

        // Step 8: If no match is found, return false
        return false;
    }
}

/**
 * Example:
 * Text: "AABAACAADAABAABA"
 * Pattern: "AABA"
 * 
 * The Naive Pattern Searching algorithm will check each possible window in the text to find the pattern.
 * In this example, the pattern "AABA" is found at index 0, 9, and 12 in the text.
 */

// Creating an instance of the Solution class
const solution = new Solution();

// Test case
const text = "AABAACAADAABAABA";  // The text in which we search for the pattern
const pattern = "AABA";           // The pattern to search for

// Calling the function and printing the result
console.log(solution.searchPattern(text, pattern) ? "Pattern Found" : "No Pattern Found");  // Output: Pattern Found
