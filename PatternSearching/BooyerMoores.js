// Boyer-Moore Voting Algorithm to find the majority element in an array
// A majority element is defined as an element occurring more than n/2 times where n is the size of the array.

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

// Time Complexity:
// - The algorithm runs in O(n) time, where n is the number of elements in the array.
// - The first pass to find the candidate takes O(n).
// - The second pass to count occurrences also takes O(n).
// - Therefore, the total time complexity is O(n).

// Space Complexity:
// - The algorithm uses O(1) space since it only requires a few variables (majority and votes) regardless of the input size.
// - No additional data structures are used that depend on the input size, leading to constant space usage.
