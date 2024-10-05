// Overview:
// Linear Search is the simplest searching algorithm that checks each element of the array sequentially
// until the desired element is found or all elements have been checked.

// Key Points:
// - Works on both sorted and unsorted arrays.
// - Compares each element with the target until a match is found.
// - No requirement for sorting the dataset.

// Features:
// - Simple and easy to implement.
// - Does not require additional data structures.
// - Suitable for small datasets or when performance is not a primary concern.

// Operations and their Time Complexity:
// - Search operation: O(n)
// - Best-case scenario: O(1) if the element is found at the first index.
// - Worst-case scenario: O(n) when the element is not present or is the last element.

// Space Complexity:
// - O(1), as it requires a constant amount of space regardless of the input size.

// Why We Use It:
// - When dealing with small datasets.
// - When the dataset is unsorted and does not require sorting beforehand.

// Applications:
// - Searching for an item in a list.
// - Checking for duplicates in a small dataset.
// - Finding a specific record in a small database.

// Real-World Examples:
// - Looking for a specific name in a list of attendees at an event.
// - Searching for a book by title on a shelf without organizing it alphabetically.
// - Finding a contact in a phone without using any filtering options.

// Advantages:
// - Straightforward implementation and easy to understand.
// - No requirement for sorted data.
// - Works well for small datasets or specific use cases.

// Disadvantages:
// - Inefficient for large datasets compared to other search algorithms like binary search.
// - Performance degrades linearly with the increase in the number of elements.

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Linear search function
function linearSearch(element, i = 0) {
    let index = -1; // Variable to store the index of the found element
    
    // Base case: if the array is empty or not defined
    if (arr.length === 0 || !arr) {
        return index; // Element not found
    }

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // If the current element matches the target element
        if (arr[i] === element) {
            index = i; // Store the index of the found element
            break; // Exit the loop as we've found the element
        }
    }

    return index; // Return the index or -1 if not found
}

// Measure the time taken for the search
let startTime = new Date().getTime();

let result = linearSearch(2345677); // Searching for the element 2345677
console.log(result === -1 ? "Element not Found" : "Element found at index " + result);
let endTime = new Date().getTime();

console.log("Time took: ", endTime - startTime, "ms");
