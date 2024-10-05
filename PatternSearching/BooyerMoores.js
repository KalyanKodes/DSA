/*
 * Boyer-Moore Voting Algorithm
 * ----------------------------
 * Overview:
 * The Boyer-Moore Voting Algorithm is an efficient algorithm to find the majority element in an array, where a majority element is defined as an element that occurs more than n/2 times (n being the size of the array). This algorithm is optimal with O(n) time complexity and O(1) space complexity.
 *
 * Time Complexity: O(n)
 * - The algorithm scans the array twice: once to find the candidate and once to verify it.
 *
 * Space Complexity: O(1)
 * - The algorithm uses only a few extra variables, which makes it a constant space algorithm.
 *
 * Key Points:
 * - **Candidate Selection**: The first pass selects a candidate for the majority element.
 * - **Vote Counting**: If an element matches the candidate, increment the vote count; otherwise, decrement it.
 * - **Verification**: The second pass verifies if the selected candidate occurs more than n/2 times.
 *
 * Features:
 * - Linear time complexity makes it efficient for large datasets.
 * - Constant space usage ensures minimal memory overhead.
 *
 * Operations:
 * - Find Candidate: Determine the potential majority element by iterating over the array.
 * - Verify Candidate: Confirm if the candidate is indeed the majority element by counting its occurrences.
 *
 * Why We Use It:
 * The Boyer-Moore Voting Algorithm is particularly useful in situations where we need to find the majority element in large datasets without using additional memory.
 *
 * Real-World Example:
 * In election results, if we need to determine if a candidate has received more than 50% of the total votes, the Boyer-Moore Voting Algorithm can efficiently identify that candidate without requiring extra space.
 *
 * Applications:
 * - **Election Results**: Finding the winning candidate who has received more than 50% of the votes.
 * - **Social Media Analysis**: Identifying dominant opinions or sentiments in large datasets of user comments.
 * - **Market Research**: Determining the most popular product or brand from customer reviews or feedback.
 *
 * Advantages:
 * - Linear time complexity, O(n), makes it efficient for large datasets.
 * - Constant space usage, O(1), ensures low memory consumption.
 *
 * Disadvantages:
 * - The algorithm only works if a majority element exists (i.e., an element that appears more than n/2 times).
 * - A second pass is required to verify if the candidate is a true majority.
 */

// Function to find the majority element
function findMajority(arr) {
    // Step 1: Initialize the candidate for the majority element
    let majority = arr[0]; // Assume the first element is the majority candidate
    let votes = 1;         // Initialize vote count to 1

    // Step 2: Iterate through the array to find a candidate
    for (let i = 1; i < arr.length; i++) {
        // If the current element is not equal to the majority candidate, decrement the votes
        if (arr[i] != majority) {
            votes--;
        } else {
            // If it is equal, increment the votes
            votes++;
        }

        // If votes drop to 0, update the majority candidate to the current element
        if (votes <= 0) {
            majority = arr[i]; // Update majority candidate
            votes = 1;         // Reset the votes to 1
        }
    }

    // Step 3: Verify the candidate
    // Count how many times the candidate appears in the array
    let majorityRepeated = (function() {
        let count = 0; // Initialize count for occurrences
        // Loop through the array to count occurrences of the candidate
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == majority) {
                count++; // Increment count if the element is equal to majority
            }
        }
        return count; // Return the count of occurrences
    })();

    // Step 4: Check if the candidate is a valid majority element
    // If count of majority candidate is greater than n/2, return it; otherwise return a message
    return majorityRepeated > Math.floor(arr.length / 2) ? majority : "No element found greater than n/2";
}

// Example usage of the function
console.log(findMajority([2, 3, 4, 3, 3])); // Output: No element found greater than n/2
console.log(findMajority([3, 3, 4, 2, 3, 3, 3])); // Output: 3

/*
 * Example Explanation:
 * - In the first example, no element appears more than n/2 times (n = 5, so n/2 = 2.5), so the output is "No element found".
 * - In the second example, the element "3" appears 5 times, which is more than n/2 (n = 7, so n/2 = 3.5), so the output is "3".
 */
