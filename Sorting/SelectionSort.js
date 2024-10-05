// Overview:
// Selection Sort is a simple comparison-based sorting algorithm.
// In this technique, the array is divided into two parts: a sorted part and an unsorted part.
// The initially sorted array is empty, and the unsorted array starts from the 0 index.
// The algorithm repeatedly finds the minimum element from the unsorted array 
// and swaps it with the first element of the unsorted array.
// After each pass, the sorted array pointer increases.

// Key Points:
// - Easy to understand and implement.
// - Performs well on small datasets.
// - It is not a stable sort; equal elements may not retain their original order.

// Features:
// - In-place sorting algorithm; it requires minimal additional space.
// - Simple to implement with a nested loop.

// Operations and their Time Complexity:
// - Time Complexity: O(n^2) in all cases (best, average, and worst).
// - Number of comparisons grows quadratically with the number of elements.

// Space Complexity:
// - O(1) because it requires a constant amount of additional memory space.

// Why We Use It:
// - Useful for small datasets or when memory space is limited.
// - It is simple to understand and implement for educational purposes.

// Applications:
// - Generally used in applications where memory space is a constraint.
// - Suitable for sorting small lists or arrays.

// Real-World Examples:
// - Often used in situations where data is limited or where simplicity is preferred over efficiency.
// - Used in scenarios such as embedded systems or low-level programming.

// Advantages:
// - Simple to implement and understand.
// - No additional memory is required for sorting (in-place).
// - Performance is acceptable for small lists.

// Disadvantages:
// - Inefficient on large lists; O(n^2) time complexity makes it impractical for larger datasets.
// - Not adaptive; it always goes through the same number of comparisons regardless of the initial order of elements.

let arr = [64, 25, 12, 22, 11]; // Unsorted array
// let arr = [7 , 4 , 10 , 8 , 3 , 1]; // Alternative unsorted array
console.log("Input Array:", ...arr);

// Function to find the index of the minimum element in the array from start to end
function findMin(array, start, end) {
    let minIndex = start; // Assume the first element is the minimum
    for (let i = start + 1; i < end; i++) {
        if (array[i] < array[minIndex]) {
            minIndex = i; // Update minIndex if a smaller element is found
        }
    }
    return minIndex; // Return the index of the minimum element
}

// Selection Sort implementation
for (let i = 0; i < arr.length - 1; i++) {
    let min = findMin(arr, i, arr.length); // Find the minimum element in the unsorted array
    // Swap the found minimum element with the first element of the unsorted array
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
}

// Display the sorted array
console.log("Sorted Array:", ...arr);
