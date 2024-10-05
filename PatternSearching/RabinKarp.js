/**
 * Rabin-Karp Algorithm Overview
 * 
 * The Rabin-Karp algorithm is a string-searching algorithm used to find a 
 * pattern within a text efficiently using hashing. It's particularly useful 
 * for searching multiple patterns at once due to its adaptability with hash functions.
 * 
 * Key Features:
 * 1. Efficient Multi-pattern Search:
 *    - The algorithm can adapt to search for multiple patterns in a single scan 
 *      of the text.
 * 
 * 2. Hashing for Speed:
 *    - Converts patterns and substrings of the text into hash values for quick 
 *      comparisons, reducing character-by-character checks.
 * 
 * 3. Avoids Brute Force:
 *    - Uses a rolling hash to update the hash value of the current window in 
 *      constant time.
 * 
 * Hashing Mechanism:
 * - Computes a hash value for the pattern and the initial window of text.
 * - Compares the hash of the pattern with the hash of the current window.
 * - If hashes match, a character-by-character comparison is performed to confirm 
 *   the match (to handle hash collisions).
 * 
 * Time Complexity:
 * - Best Case: O(n + m), where 'n' is the length of the text and 'm' is the length 
 *   of the pattern.
 * - Average Case: O(n + m), assuming effective hash distribution.
 * - Worst Case: O(nm), if every window of text matches the hash but not the 
 *   actual characters.
 * 
 * Space Complexity:
 * - O(1): Constant space required for storing hash values and pointers.
 * 
 * Advantages:
 * - Efficient for multiple pattern searches.
 * - Quick due to hashing, leading to fewer character comparisons.
 * 
 * Disadvantages:
 * - Worst-case performance can degrade with poor hash functions leading to many 
 *   spurious hits.
 * 
 * Real-World Examples:
 * - Text processing applications (like word search in documents).
 * - Plagiarism detection systems that compare documents.
 * - Searching in DNA sequences for patterns or motifs.
 * 
 * Applications:
 * - Used in search engines for keyword matching.
 * - Employed in database search operations.
 * - Useful in network intrusion detection systems for pattern matching.
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
    // Function to check if the expected hash matches the calculated hash
    const checkMatch = (expected, got) => {
        return expected === got;
    };

    let hashCode = findHashCode(pattern); // Hash code for the pattern
    let currentSum = 0; // Current hash sum for the sliding window

    // Initial hash code for the first window of the string
    for (let i = 0; i < pattern.length; i++) {
        currentSum += ((string.charCodeAt(i) - 97 + 1) * Math.pow(10, (pattern.length - 1) - i));
    }

    // Check the first window for a match
    if (checkMatch(hashCode, currentSum)) {
        return 0; // Match found at index 0
    }

    let prevValue = 0; // Previous character's index for sliding window

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
