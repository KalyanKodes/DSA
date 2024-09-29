/**
 * Pattern Searching is a technique to find all occurrences of a given pattern (substring) 
 * within a larger text (string). It's an important task in string processing and has many applications 
 * like searching in texts, DNA sequence analysis, text editing tools, etc.
 *
 * The Naive Pattern Searching algorithm is the simplest approach to pattern searching.
 * It works by checking every possible position in the text to see if the pattern matches
 * the substring starting from that position.
 *
 * How Naive Pattern Searching Works:
 * - For each starting index of the text, compare the pattern with the substring starting at that index.
 * - If the pattern matches at the current index, return the result.
 * - Otherwise, shift the pattern by one position to the right and repeat the process.
 * - Continue until the end of the text is reached.
 *
 * Time Complexity:
 * - In the worst case, the time complexity is O(m * n), where 'm' is the length of the pattern 
 *   and 'n' is the length of the text.
 * - This happens when the algorithm checks every possible starting position.
 * 
 * Space Complexity:
 * - O(1), as no additional space is used except for pointers.
 */

class Solution {
    /**
     * This function searches for a pattern in a given text using the Naive Pattern Searching algorithm.
     * 
     * @param {string} str - The text in which we are searching for the pattern.
     * @param {string} pat - The pattern to search for in the text.
     * @returns {boolean} - Returns true if the pattern is found in the text, otherwise false.
     */
    searchPattern(str, pat) {
        // Initialize the starting point of the current window of text
        let low = 0;

        // Initialize the ending point of the current window (end of the pattern in the text)
        let high = pat.length - 1;

        // Loop through the text until the window reaches the end of the text
        while (high < str.length) {
            let stPointer = low;            // Pointer to traverse the current window of the text
            let patPointer = 0;             // Pointer to traverse the pattern

            let flag = true;                // Flag to check if pattern matches

            // Compare each character of the current window of text with the pattern
            while (stPointer <= high) {
                if (str[stPointer] !== pat[patPointer]) {
                    // If any character does not match, set flag to false and break
                    flag = false;
                    break;
                }
                // Move to the next character in both text window and pattern
                stPointer++;
                patPointer++;
            }

            // If all characters matched, return true (pattern found)
            if (flag) {
                return true;
            }

            // Slide the window by one position (move both low and high pointers)
            low++;
            high++;
        }

        // If no match is found after checking all windows, return false
        return false;
    }
}

/**
 * Example usage:
 * 
 * Text: "AABAACAADAABAABA"
 * Pattern: "AABA"
 * 
 * In this example, the Naive Pattern Searching algorithm will slide the pattern over the text 
 * and check each possible position. It will return true if a match is found.
 */

// Creating an instance of the Solution class
const solution = new Solution();

// Test case
const text = "AABAACAADAABAABA";  // Text in which we are searching
const pattern = "AABA";           // Pattern to search for

// Call the function and log the result
console.log(solution.searchPattern(text, pattern) ? "Pattern Found" : "No Pattern Found");  // Output: true (pattern found at index 0, 9, 12)
