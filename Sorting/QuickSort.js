// Overview:
// The basic idea of the Quick Sort (Partition Exchange Sort) algorithm is to select a pivot element.
// The pivot element can be the first element, last element, middle element, or a random element.
// This algorithm is based on the Divide and Conquer technique.
// The partitioning step is the backbone of this algorithm, ensuring:
// - All elements less than the pivot are on the left side of the pivot.
// - All elements greater than the pivot are on the right side of the pivot.
// Elements equal to the pivot can go either left or right.

// Key Points:
// - Quick Sort is highly efficient for large datasets.
// - The pivot selection strategy can significantly affect performance.

// Features:
// - In-place sorting algorithm, meaning it requires minimal extra space.
// - Can be implemented recursively or iteratively.

// Operations and their Time Complexity:
// - Best and Average Case: O(n log n)
// - Worst Case (when the smallest or largest element is always chosen as the pivot): O(n^2)

// Space Complexity:
// - O(log n) due to recursive stack space in the average case.

// Why We Use It:
// - Quick Sort is preferred when memory usage is a concern, as it works in place.
// - It is generally faster than other O(n log n) algorithms, like Merge Sort, due to better cache performance.

// Applications:
// - Used in various applications where a fast sort is needed.
// - Commonly used in programming libraries and frameworks.

// Real-World Examples:
// - Sorting lists, arrays, or other data structures in computer science applications.
// - Useful in scenarios where low memory overhead is required, such as embedded systems.

// Advantages:
// - Very efficient for large data sets.
// - In-place sorting reduces the need for additional memory allocation.
// - Average time complexity is very good, making it a popular choice.

// Disadvantages:
// - Worst-case time complexity is O(n^2), although this is rare with good pivot selection.
// - Not a stable sort; equal elements may not retain their original order.

console.clear();
let a = [7, 6, 10, 5, 9, 2, 1, 15, 7]; // Unsorted array
// let a = [5, 2, 0, 4, 1, 3]; // Alternative unsorted array
console.log("Input Array:", ...a);

// Function to swap elements in the array
function swap(toSwap, toWith, array) {
    let temp = array[toSwap];
    array[toSwap] = array[toWith];
    array[toWith] = temp;
}

// Partition function to arrange elements based on the pivot
function partition(lowerBound, upperBound, arr, p) {
    let start = lowerBound;
    let end = upperBound;
    let pivot = p;

    // Move start pointer to the right until an element greater than the pivot is found
    while (start <= upperBound && arr[start] <= arr[pivot]) {
        start++;
    }
    // Move end pointer to the left until an element less than or equal to the pivot is found
    while (end >= lowerBound && arr[end] > arr[pivot]) {
        end--;
    }

    // If start and end haven't crossed, swap elements
    if (start < end) {
        swap(start, end, arr);
        return partition(start + 1, end - 1, arr, p);
    } else {
        // Place the pivot element in its correct position
        swap(p, end, arr);
        return end; // Return the index of the pivot element
    }
}

// Quick Sort function to recursively sort the array
function quickSort(lb, ub) {
    if (lb < ub) {
        let end = partition(lb, ub, a, lb); // Partitioning
        quickSort(lb, end - 1); // Sort left partition
        quickSort(end + 1, ub); // Sort right partition
    }
}

// Perform Quick Sort on the array
quickSort(0, a.length - 1);
console.log("Sorted Array:", ...a); // Display the sorted array
