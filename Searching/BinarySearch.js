// Overview:
// Binary Search is an efficient algorithm for finding an element in a sorted array.
// It splits the array into two halves and determines which half the target element resides in, reducing the search space logarithmically.

// Key Points:
// - Applicable only to sorted arrays.
// - Reduces time complexity compared to linear search.
// - Requires a recursive or iterative implementation.

// Features:
// - Divides the search interval in half.
// - Quickly narrows down potential locations of the target element.
// - Can be implemented recursively or iteratively.

// Operations and their Time Complexity:
// - Search operation: O(log n)
// - Best-case scenario: O(1) if the element is found at the middle index.
// - Worst-case scenario: O(log n) when the element is not present.

// Space Complexity:
// - O(1) for the iterative implementation.
// - O(log n) for the recursive implementation due to function call stack.

// Why We Use It:
// - To efficiently find elements in sorted datasets.
// - To reduce the time complexity from linear search (O(n)) to logarithmic search (O(log n)).

// Applications:
// - Searching in databases.
// - Implementing search features in applications.
// - Finding elements in data structures like binary search trees.

// Real-World Examples:
// - Finding a specific page in a book by repeatedly dividing the pages.
// - Searching for a name in a phone book by jumping to the relevant section.
// - Looking up a word in a dictionary by starting in the middle and adjusting based on alphabetical order.

// Advantages:
// - Significant performance improvement over linear search for large datasets.
// - Easy to implement and understand for sorted arrays.

// Disadvantages:
// - Only works on sorted arrays; not applicable to unsorted data.
// - Requires more complex logic than linear search for implementation.

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Binary search function
function binarySearch(element, l = 0, h = arr.length - 1) {
    let index = -1; // Variable to store the index of the found element

    // Base case: if the array is empty
    if (arr.length === 0) {
        return -1; // Element not found
    }

    let mid = Math.floor((l + h) / 2); // Calculate the middle index
    
    // If the element at the middle index is the target element
    if (arr[mid] === element) {
        return mid; // Return the index of the found element
    }
    
    // Continue searching if the search interval is valid
    if (l < h) {
        // If the element is greater than the middle element, search the upper half
        if (element > arr[mid]) {
            index = binarySearch(element, mid + 1, h); // Recursive call for the upper half
        } else {
            index = binarySearch(element, l, mid - 1); // Recursive call for the lower half
        }
    }

    return index; // Return the index or -1 if not found
}

// Example usage
let result = binarySearch(7); // Searching for the element 10
console.log(result === -1 ? "Element not Found" : "Element found at index " + result);
