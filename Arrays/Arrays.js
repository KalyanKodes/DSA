/**
 * Overview:
 *  - An array is a linear data structure that stores elements in a contiguous block of memory. 
 *  - It allows for the storage of multiple elements of the same type in an indexed structure, where each element can be accessed by its index (position).
 *  - In JavaScript, arrays can store elements of any type (e.g., numbers, strings, objects), and they can dynamically resize, unlike arrays in lower-level languages like C++ or Java.
 *
 * Key Points:
 *  - Elements in the array are indexed starting from 0.
 *  - It is a collection of homogeneous or heterogeneous data.
 *  - Arrays are widely used in algorithms and real-world applications because of their efficiency in accessing elements via indexing.
 * 
 * Features:
 *  - Indexing: Allows for O(1) access time for retrieving or modifying an element at a particular index.
 *  - Fixed Size in lower-level languages (e.g., C, Java): However, in JavaScript, arrays can dynamically grow and shrink.
 *  - Homogeneous in languages like C, but in JavaScript, arrays are heterogeneous.
 * 
 * Operations and Time Complexity:
 *  1. **Access**:
 *     - Accessing any element using its index: O(1) constant time.
 *  2. **Insertion**:
 *     - At the end of the array (push): O(1).
 *     - At the start of the array (unshift): O(n) due to the need to shift all other elements.
 *  3. **Deletion**:
 *     - Removing the last element (pop): O(1).
 *     - Removing the first element (shift): O(n) as it requires shifting all elements.
 *  4. **Search**:
 *     - Linear search through the array (indexOf, find): O(n).
 * 
 * Applications:
 *  - Arrays are used when you need fast access to elements, such as in database indexing, caching, and memory management systems.
 *  - Used in sorting algorithms like Quick Sort, Merge Sort, and searching algorithms like Binary Search.
 *  - Arrays are the foundation of other complex data structures like stacks, queues, matrices, and hash tables.
 * 
 * Real-World Examples:
 *  1. **Web Development**:
 *     - Arrays are used to store lists of data such as user details, posts, or products.
 *     - Manipulating data collections (e.g., rendering lists on a webpage).
 *  2. **Game Development**:
 *     - Used to store game states or a list of objects (e.g., players, enemies, scores).
 *  3. **Machine Learning**:
 *     - Arrays are used to represent vectors and matrices in mathematical operations.
 * 
 * Advantages:
 *  - Direct access to any element via its index, providing O(1) time complexity for accessing and modifying elements.
 *  - Simplifies iteration over elements using loops and array methods.
 * 
 * Disadvantages:
 *  - Fixed size in many languages (though JavaScript arrays can dynamically resize).
 *  - Inserting or deleting elements in the middle or beginning requires shifting elements, resulting in O(n) time complexity.
 */


/**
 * Array Methods in JavaScript:
 *  - JavaScript provides several built-in methods to manipulate and process arrays.
 *  - These methods help perform actions like adding/removing elements, searching, transforming, and reducing arrays.
 */

// Sample array for demonstrating methods
let array = [1, 2, 3, 4, 5];

/**
 * Method: Array.push()
 *  - Adds one or more elements to the end of the array and returns the new length of the array.
 * 
 * Time Complexity: O(1)
 * Example Use Case:
 *  - Adding a new item to a cart in an e-commerce application.
 */
array.push(6);  // [1, 2, 3, 4, 5, 6]

/**
 * Method: Array.pop()
 *  - Removes the last element from an array and returns it.
 * 
 * Time Complexity: O(1)
 * Example Use Case:
 *  - Removing the most recent item added to a list (like undoing the last action).
 */
array.pop();  // [1, 2, 3, 4, 5]

/**
 * Method: Array.shift()
 *  - Removes the first element from an array and returns it. This method changes the length of the array.
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Dequeuing an element in a queue-like data structure.
 */
array.shift();  // [2, 3, 4, 5]

/**
 * Method: Array.unshift()
 *  - Adds one or more elements to the beginning of an array and returns the new length.
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Prepending elements to a list, such as adding a priority item at the front of the array.
 */
array.unshift(0);  // [0, 2, 3, 4, 5]

/**
 * Method: Array.splice()
 *  - Adds/removes elements to/from an array and returns the removed elements.
 * 
 * Parameters:
 *  - Start index: The position at which to start changing the array.
 *  - Delete count: The number of elements to be removed.
 *  - Items to add: Elements to be added in place of the removed elements (optional).
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Removing a specific number of elements or inserting elements into an array.
 */
array.splice(2, 1);  // Removes 1 element at index 2 -> [0, 2, 4, 5]

/**
 * Method: Array.slice()
 *  - Returns a shallow copy of a portion of an array into a new array object.
 *  - The original array will not be modified.
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - When you need a portion of the array (e.g., pagination or splitting arrays).
 */
let slicedArray = array.slice(1, 3);  // [2, 4]

/**
 * Method: Array.concat()
 *  - Merges two or more arrays. This method does not change the existing arrays but returns a new array.
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Concatenating arrays, for example, merging multiple lists into one.
 */
let newArray = array.concat([6, 7]);  // [0, 2, 4, 5, 6, 7]

/**
 * Method: Array.indexOf()
 *  - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Searching for the position of a specific element in an array (e.g., finding the index of a user's name).
 */
let index = array.indexOf(4);  // 2

/**
 * Method: Array.find()
 *  - Returns the value of the first element in the array that satisfies the provided testing function.
 *  - If no values satisfy the testing function, it returns undefined.
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Finding an object in an array that meets a specific condition.
 */
let foundElement = array.find(element => element > 3);  // 4

/**
 * Method: Array.map()
 *  - Creates a new array populated with the results of calling a provided function on every element in the array.
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Transforming an array (e.g., multiplying each element by 2 or formatting a list of items).
 */
let mappedArray = array.map(element => element * 2);  // [0, 4, 8, 10]

/**
 * Method: Array.filter()
 *  - Creates a new array with all elements that pass the test implemented by the provided function.
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Filtering elements based on a condition (e.g., selecting even numbers from an array).
 */
let filteredArray = array.filter(element => element > 3);  // [4, 5]

/**
 * Method: Array.reduce()
 *  - Executes a reducer function on each element of the array, resulting in a single output value.
 * 
 * Parameters:
 *  - Accumulator: The accumulated value from the previous iteration.
 *  - Current Value: The current element being processed in the array.
 *  - Initial Value (optional): The initial value for the accumulator.
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Summing up all elements in an array (e.g., summing prices in a shopping cart).
 */
let sum = array.reduce((acc, curr) => acc + curr, 0);  // 11

/**
 * Method: Array.reverse()
 *  - Reverses the order of the elements in the array in place. The first array element becomes the last, and the last becomes the first.
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Reversing the order of an array for display (e.g., reversing a history log).
 */
array.reverse();  // [5, 4, 2, 0]

/**
 * Method: Array.sort()
 *  - Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, based on string Unicode code points.
 *  - Optionally, a compare function can be passed to sort numerically or in a custom order.
 * 
 * Time Complexity: O(n log n)
 * Example Use Case:
 *  - Sorting numbers, dates, or strings in ascending or descending order.
 */
array.sort((a, b) => a - b);  // [0, 2, 4, 5]

/**
 * Method: Array.every()
 *  - Tests whether all elements in the array pass the test implemented by the provided function.
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Checking if all elements in an array meet a specific condition (e.g., all numbers are positive).
 */
let allPositive = array.every(element => element >= 0);  // true

/**
 * Method: Array.some()
 *  - Tests whether at least one element in the array passes the test implemented by the provided function.
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Checking if at least one element meets a condition (e.g., checking for negative numbers).
 */
let hasNegative = array.some(element => element < 0);  // false

/**
 * Method: Array.includes()
 *  - Determines whether an array includes a certain value, returning true or false as appropriate.
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Checking if an array contains a specific element (e.g., checking for the presence of a username in a list).
 */
let includesFour = array.includes(4);  // true
