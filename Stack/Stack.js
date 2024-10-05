// Overview:
// Stack is a linear data structure that follows the LIFO (Last In First Out) principle, 
// where the last element added to the stack is the first one to be removed.
// It's often visualized as a stack of plates, where you can only add or remove the top plate.
// The key operations performed on a stack are push, pop, peek, isFull, and isEmpty.

// Key Points:
// - LIFO (Last In First Out) or FILO (First In Last Out).
// - Only the top element can be accessed directly.
// - Dynamic size can be implemented using linked lists or fixed size using arrays.

// Features:
// - Simple to understand and implement.
// - Provides a way to manage data in a last-in, first-out manner.
// - Supports several core operations.


// Operations and their Time Complexity:
// - Push: O(1) - Adds an element to the top of the stack.
// - Pop: O(1) - Removes the top element from the stack.
// - Peek: O(1) - Retrieves the top element without removing it.
// - isFull: O(1) - Checks if the stack is full.
// - isEmpty: O(1) - Checks if the stack is empty.

// Space Complexity:
// - O(n) where n is the maximum number of elements in the stack, 
//   if implemented with an array of fixed size.

// Why We Use It:
// - Useful for storing temporary data or for managing data where the order of processing matters.
// - Commonly used in algorithms for parsing expressions and backtracking problems.

// Applications:
// - Function call management in programming languages (call stack).
// - Undo mechanisms in text editors.
// - Syntax parsing and evaluating expressions (e.g., using a stack for infix to postfix conversion).

// Real-World Examples:
// - Stack of plates where only the top plate can be removed or added.
// - A stack of books on a shelf, where you can only access the top book.

// Advantages:
// - Easy to implement and use.
// - Efficient operations with O(1) time complexity for push and pop.
// - Uses less memory than some other data structures when implemented as a linked list.

// Disadvantages:
// - Limited access to elements; only the top element is accessible.
// - Fixed size (when using an array), leading to overflow errors if exceeded.

let top = -1; // Represents the index of the top element in the stack
let stackSize = 5; // Maximum size of the stack
let stack = []; // Array to hold stack elements

// Function to add an element to the stack
function push(element) {
    if (isFull()) {
        console.log("Stack is Full"); // Check if stack is full before pushing
        return;
    }
    top++; // Increment the top index
    stack[top] = element; // Add the element at the top
}

// Function to remove the top element from the stack
function pop() {
    if (isEmpty()) {
        console.log("Stack is Empty"); // Check if stack is empty before popping
        return;
    }
    top--; // Decrement the top index to remove the top element
}

// Function to view the top element without removing it
function peek() {
    if (isEmpty()) {
        console.log("Stack is Empty"); // Check if stack is empty before peeking
        return;
    }
    console.log(stack[top]); // Display the top element
}

// Function to display all elements in the stack
function display() {
    if (isEmpty()) {
        console.log("Stack is Empty"); // Check if stack is empty before displaying
        return;
    }
    
    let result = ""; // Initialize an empty string to hold the stack elements
    for (let i = 0; i <= top; i++) {
        result += stack[i] + " "; // Append each element to the result string
    }
    console.log(result.trim()); // Print the stack elements
}

// Function to check if the stack is full
function isFull() {
    return top === stackSize - 1; // Return true if the top index is at the maximum size
}

// Function to check if the stack is empty
function isEmpty() {
    return top === -1; // Return true if the top index is -1 (indicating an empty stack)
}
