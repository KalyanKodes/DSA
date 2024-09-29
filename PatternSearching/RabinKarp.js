/**
 * Rabin-Karp Algorithm Overview
 * 
 * The Rabin-Karp algorithm is a string-searching algorithm used to find a 
 * pattern within a text efficiently using hashing. It's particularly useful 
 * for searching multiple patterns at once due to its adaptability with hash functions.
 * 
 * Why Rabin-Karp is Used:
 * 1. Efficient Multi-pattern Search:
 *    The Rabin-Karp algorithm can be adapted to search for multiple patterns 
 *    in a single scan of the text, making it efficient for certain applications.
 * 
 * 2. Hashing for Speed:
 *    By converting the patterns and substrings of the text into hash values, 
 *    it allows for quick comparisons, reducing the need for character-by-character checks.
 * 
 * 3. Avoiding Brute Force:
 *    Instead of using a naive approach that checks every possible position, 
 *    the Rabin-Karp algorithm uses a rolling hash to update the hash value of 
 *    the current window in constant time, leading to improved performance.
 * 
 * Hashing Mechanism:
 * - The algorithm computes a hash value for the pattern and the initial window 
 *   of text.
 * - It compares the hash of the pattern with the hash of the current window.
 * - If the hashes match, a character-by-character comparison is made to confirm 
 *   the match (to handle hash collisions).
 * 
 * Normal Sum vs. Hashing:
 * 1. Normal Sum of Patterns:
 *    You could theoretically sum the ASCII values of the characters in the pattern 
 *    and compare it to the sum of the characters in the current window. However, 
 *    this approach is less efficient due to:
 *    - Collision Issues: Different character combinations can yield the same sum 
 *      (e.g., "abc" and "cab").
 *    - Window Movement: When moving to the next window, recalculating sums would 
 *      be inefficient compared to a rolling hash.
 * 
 * 2. Rabin-Karp's Rolling Hash:
 *    The rolling hash technique allows the algorithm to efficiently compute the 
 *    hash of the next substring without having to recalculate the hash from scratch. 
 *    This is done by:
 *    - Removing the contribution of the character that is sliding out of the window.
 *    - Adding the contribution of the new character coming into the window.
 *    - This results in a constant time update (O(1)) for each step.
 * 
 * Spurious Hits:
 * - Definition: A spurious hit occurs when the hash values of the pattern and a 
 *   window of text are equal, but the actual characters do not match due to 
 *   hash collisions.
 * - Handling Spurious Hits: 
 *   When a hash match occurs, a character-by-character comparison is performed to 
 *   confirm that it is indeed a valid match, thus filtering out false positives.
 * 
 * Time Complexity:
 * - Best Case: O(n + m), where n is the length of the text and m is the length 
 *   of the pattern. This occurs when there are few hash collisions, leading to 
 *   fewer character comparisons.
 * - Average Case: O(n + m), assuming the hash function distributes uniformly 
 *   and reduces collisions effectively.
 * - Worst Case: O(nm), where every window of text matches the hash but not the 
 *   actual characters. This is more likely if many spurious hits occur, 
 *   particularly if the hash function is poorly chosen.
 * 
 * Space Complexity:
 * - O(1): The space complexity is constant since it only requires a fixed amount 
 *   of additional space to store hash values and pointers for the text and pattern.
 * 
 * Conclusion:
 * The Rabin-Karp algorithm is particularly useful for searching for patterns 
 * in texts efficiently, especially when dealing with multiple patterns. 
 * Its rolling hash technique optimizes performance while reducing the likelihood 
 * of collision issues through subsequent character verification. This makes it 
 * a powerful tool in scenarios such as text processing, plagiarism detection, 
 * and DNA sequencing analysis.
 */

function findHashCode(pattern) {
    // Compute the hash code for the pattern
    let code = pattern.split("").reduce((acc, char, i) => {
        return acc + ((char.charCodeAt(0) - 97 + 1) * Math.pow(10, (pattern.length - 1) - i));
    }, 0);
    console.log("HashCode for", pattern, "is", code);
    return code;
}

function findPattern(string, pattern) {
    const checkMatch = (expected, got) => {
        return expected === got;
    };

    let hashCode = findHashCode(pattern);
    let currentSum = 0;

    // Initial hash code for the first window of the string
    for (let i = 0; i < pattern.length; i++) {
        currentSum += ((string.charCodeAt(i) - 97 + 1) * Math.pow(10, (pattern.length - 1) - i));
    }

    // Check the first window
    if (checkMatch(hashCode, currentSum)) {
        return 0; // Match found at index 0
    }

    let prevValue = 0;

    // Sliding window to check the rest of the string
    for (let i = pattern.length; i < string.length; i++) {
        // Remove the contribution of the previous character and add the new character
        currentSum = (currentSum - ((string.charCodeAt(prevValue) - 97 + 1) * Math.pow(10, (pattern.length - 1)))) * 10;
        currentSum += ((string.charCodeAt(i) - 97 + 1) * Math.pow(10, 0));

        // Check if the hash codes match
        if (checkMatch(hashCode, currentSum)) {
            return i - pattern.length + 1; // Return the starting index of the match
        }
        prevValue++; // Move the window forward
    }

    return -1; // No match found
}

// Example usage
console.log(findPattern("abcdabce", "cda")); // Should output the index of the pattern "cda" in the string "abcdabce"
