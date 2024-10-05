// Overview:
// In this sorting technique, the given array is divided into two parts:
// The first part is considered as the sorted array and the other part is considered as the unsorted array.
// We pick the first element in the unsorted array and put that element in its appropriate place in the sorted array.

// Key Points:
// - It builds the sorted array one element at a time.
// - It is more efficient for small data sets or nearly sorted arrays.
// - It can be implemented as a stable sort.

// Features:
// - In-place sorting algorithm; requires no additional storage.
 // - Each element is compared and shifted as necessary to maintain order.
// - Works well with small or partially sorted arrays.

// Operations and their Time Complexity:
// - Sorting operation: O(n^2) in the average and worst cases.
// - Best-case scenario: O(n) when the array is already sorted (only one comparison per element).
// - Worst-case scenario: O(n^2) when the array is sorted in reverse order.

// Space Complexity:
// - O(1) as this implementation sorts the array in place, requiring a constant amount of extra space.

// Why We Use It:
// - Useful for small datasets or lists that are already partially sorted.
// - Simple to implement and understand, making it a good choice for educational purposes.

// Applications:
// - Used in scenarios where memory space is limited.
// - Frequently used in online sorting algorithms.
// - Applied in applications where a stable sort is necessary.

// Real-World Examples:
// - Sorting playing cards as one might do in a card game.
// - Inserting new scores into a leaderboard.
// - Organizing test scores in ascending order as new results come in.

// Advantages:
// - Simple to implement and understand.
// - Efficient for small data sets or lists that are already partially sorted.
// - More efficient than other O(n^2) algorithms like selection sort and bubble sort for smaller data sets.

// Disadvantages:
// - Inefficient on large lists, with a time complexity of O(n^2).
// - Not suitable for performance-critical applications with large datasets.

let arr = [5, 4, 3, 2, 1, 0]; // Unsorted array

// Insertion Sort Implementation
for (let i = 0; i < arr.length - 1; i++) {
    let temp = arr[i + 1]; // The next element to be inserted
    let j = i; // Start comparing from the last element of the sorted part
    // Shift elements of the sorted part to the right until the correct position is found
    while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j]; // Shift the element
        j--; // Move to the previous element
    }
    arr[j + 1] = temp; // Insert the element in its correct position
}

console.log("Sorted Array:", ...arr); // Display the sorted array
