// Overview:
// This technique also uses divide and conquer.
// The complete array is divided into sublists until sublists have one element, 
// and then merge those sublists to produce sorted sublists.

// Key Points:
// - It divides the array into two halves, recursively sorts them, and then merges the sorted halves.
// - Works efficiently on large datasets compared to simpler algorithms.

// Features:
// - It is a stable sort; equal elements maintain their relative order.
// - Merging process uses additional memory for temporary storage.

// Operations and their Time Complexity:
// - Merging operation: O(n)
// - Total Time Complexity: O(n log n) for the merge sort process,
//   where log n is for the number of levels and n is for merging at each level.

// Space Complexity:
// - O(n) because it requires additional space for the temporary array used in merging.

// Why We Use It:
// - Preferred for sorting large datasets due to its consistent O(n log n) time complexity.
// - Useful when the stability of the sort is important.

// Applications:
// - Used in sorting linked lists, large datasets, and external sorting where data cannot fit into memory.
// - Commonly used in applications where stability is a requirement.

// Real-World Examples:
// - Merging two sorted lists, such as when combining search results from multiple databases.
// - Used in various libraries and frameworks for sorting data.

// Advantages:
// - Efficient for large datasets, consistently O(n log n) time complexity.
// - It is stable, maintaining the relative order of equal elements.

// Disadvantages:
// - Requires additional space, making it less suitable for environments with limited memory.
// - Slower in practice on smaller datasets compared to simpler algorithms like insertion sort.

let inputArr = [3, 1, 2, 4, 1, 5, 2, 6, 4]; // Unsorted array
console.log("Input Array:", ...inputArr);

// Merge function to merge two halves
function merge(arr, low, mid, high) {
    let start = low;
    let end = mid + 1;
    let temp = []; // Temporary array for merging

    // Merge the two halves
    while (start <= mid && end <= high) {
        if (arr[start] < arr[end]) {
            temp.push(arr[start]); // Add smaller element to temp
            start++;
        } else {
            temp.push(arr[end]); // Add smaller element to temp
            end++;
        }
    }

    // Copy any remaining elements from the left half
    while (start <= mid) {
        temp.push(arr[start]);
        start++;
    }

    // Copy any remaining elements from the right half
    while (end <= high) {
        temp.push(arr[end]);
        end++;
    }

    // Copy the merged elements back to the original array
    let index = 0;
    for (let i = low; i <= high; i++) {
        arr[i] = temp[index++];
    }
}

// Merge sort function
function mergeSort(lb, hb, arr) {
    if (lb < hb) {
        let mid = Math.floor((lb + hb) / 2);
        mergeSort(lb, mid, arr); // Sort the left half
        mergeSort(mid + 1, hb, arr); // Sort the right half
        merge(arr, lb, mid, hb); // Merge the sorted halves
    }
}

// Sort the input array using merge sort
mergeSort(0, inputArr.length - 1, inputArr);

console.log("Sorted Array:", ...inputArr); // Display the sorted array
