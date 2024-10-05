// Overview:
// Sorting refers to the process of arranging the elements of a collection (such as an array, list, or dataset)
// in a specific order. The order can be ascending or descending, based on criteria such as numerical value,
// alphabetical order, or other custom-defined rules.

// Key Points:
// - Sorting can be done in ascending or descending order.
// - Various sorting algorithms exist, each with different performance characteristics.
// - Sorting helps improve the efficiency of searching algorithms and data processing.

// Features:
// - Can sort numbers, strings, or complex objects based on defined criteria.
// - Can be implemented in various ways, such as in-place or with additional space.
// - Can use different strategies, including comparison-based or non-comparison-based methods.

// Operations and their Time Complexity:
// - Sorting operation: O(n^2) for this implementation (Bubble Sort).
// - Best-case scenario: O(n) when the array is already sorted (optimized versions).
// - Worst-case scenario: O(n^2) when the array is in reverse order.

// Space Complexity:
// - O(1) as this implementation sorts the array in place, requiring a constant amount of extra space.

// Why We Use It:
// - To organize data for easier access and analysis.
// - To prepare data for algorithms that require sorted input, like binary search.

// Applications:
// - Database management systems sort records for efficient retrieval.
// - Data analytics applications often sort datasets for reporting and visualization.
// - Sorting algorithms are used in various fields, including computer graphics, AI, and statistical analysis.

// Real-World Examples:
// - Arranging a list of names in alphabetical order.
// - Sorting student scores to find the top performers.
// - Organizing inventory items by price or quantity.

// Advantages:
// - Simple to implement and understand.
// - No additional memory is required for sorting (in-place).
// - Can work with various types of data.

// Disadvantages:
// - Inefficient for large datasets compared to more advanced sorting algorithms (e.g., Quick Sort, Merge Sort).
// - The time complexity of O(n^2) makes it less suitable for performance-critical applications.

let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; // Unsorted array

console.log("Original Array:", ...arr); // Display original array

// Bubble Sort Implementation
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        // Compare elements and swap if necessary
        if (arr[i] > arr[j]) {
            let temp = arr[i]; // Temporary variable to hold the value
            arr[i] = arr[j];   // Swap values
            arr[j] = temp;     // Swap values
        }
    }
}

console.log("Sorted Array:", ...arr); // Display sorted array
