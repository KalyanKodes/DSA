/**
 * Overview:
 *  - A string is a sequence of characters used to represent text.
 *  - In JavaScript, strings are immutable, meaning once a string is created, its value cannot be changed. Any modifications result in the creation of a new string.
 *  - Strings are commonly used for text manipulation and are one of the most widely used data types in programming.
 *
 * Key Points:
 *  - A string is a sequence of characters indexed starting from 0.
 *  - Strings in JavaScript can be enclosed in single quotes (' '), double quotes (" "), or backticks (` `).
 *  - Strings can contain letters, numbers, symbols, or any Unicode character.
 *
 * Features:
 *  - Immutable: String content cannot be changed once created. Operations like concatenation or modification generate new strings.
 *  - Indexing: Each character in a string can be accessed by its index.
 *  - Length: Strings have a length property that shows the number of characters in the string.
 *
 * Operations and Time Complexity:
 *  1. **Access**: 
 *     - Accessing a character via its index: O(1)
 *  2. **Concatenation**: 
 *     - Combining two strings: O(n) where n is the length of the combined string.
 *  3. **Searching**:
 *     - Finding a character or substring: O(n)
 * 
 * Applications:
 *  - Strings are used in text processing, document manipulation, data parsing, and in forming commands (e.g., HTML, JSON, SQL).
 *  - Strings are used in almost every application involving user input, network protocols, and data serialization.
 * 
 * Real-World Examples:
 *  1. **Web Development**:
 *     - Storing user input like names, emails, and passwords.
 *     - Constructing URLs, APIs, and dynamic content.
 *  2. **Search Engines**:
 *     - Searching for keywords in documents or webpages.
 *  3. **Data Parsing**:
 *     - Processing data from external systems or databases (e.g., CSV, JSON, XML).
 * 
 * Advantages:
 *  - Convenient and easy to use for handling text-based data.
 *  - Rich set of built-in methods for string manipulation.
 * 
 * Disadvantages:
 *  - Being immutable, heavy string manipulation can result in inefficient memory usage, as new strings are created with every change.
 */



/**
 * JavaScript provides a number of built-in methods for string manipulation.
 */

// Sample string for demonstration
let str = "Hello, World!";

/**
 * Method: String.length
 *  - Returns the length of the string.
 *  - It counts the number of characters, including spaces and special characters.
 * 
 * Time Complexity: O(1)
 * Example Use Case:
 *  - Determining the length of a user's input (e.g., checking if a password meets length requirements).
 */
let length = str.length;  // 13

/**
 * Method: String.charAt()
 *  - Returns the character at the specified index.
 * 
 * Time Complexity: O(1)
 * Example Use Case:
 *  - Extracting a specific character from a string (e.g., validating the first character of an input).
 */
let char = str.charAt(0);  // 'H'

/**
 * Method: String.charCodeAt()
 *  - Returns the Unicode of the character at the specified index.
 * 
 * Time Complexity: O(1)
 * Example Use Case:
 *  - Getting the Unicode value of a character (useful in encryption or hashing algorithms).
 */
let unicode = str.charCodeAt(0);  // 72 ('H' in Unicode)

/**
 * Method: String.indexOf()
 *  - Returns the index of the first occurrence of the specified substring, or -1 if the substring is not found.
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Searching for a substring within a string (e.g., searching for a keyword in user input).
 */
let index = str.indexOf("World");  // 7

/**
 * Method: String.lastIndexOf()
 *  - Returns the index of the last occurrence of the specified substring, or -1 if the substring is not found.
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Searching for the last occurrence of a word in a document or sentence.
 */
let lastIndex = str.lastIndexOf("o");  // 8

/**
 * Method: String.includes()
 *  - Returns true if the string contains the specified substring, otherwise false.
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Checking whether a certain word is part of a string (e.g., verifying if an email contains "@" symbol).
 */
let hasWord = str.includes("World");  // true

/**
 * Method: String.startsWith()
 *  - Checks if the string starts with the specified substring. Returns true or false.
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Validating the start of a string (e.g., checking if a URL starts with "https").
 */
let startsWithHello = str.startsWith("Hello");  // true

/**
 * Method: String.endsWith()
 *  - Checks if the string ends with the specified substring. Returns true or false.
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Validating file extensions or the ending of a string (e.g., checking if a filename ends with ".txt").
 */
let endsWithExclamation = str.endsWith("!");  // true

/**
 * Method: String.toUpperCase()
 *  - Returns a new string with all characters converted to uppercase.
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Converting input to a standard format (e.g., converting a name to uppercase for comparison).
 */
let upperStr = str.toUpperCase();  // "HELLO, WORLD!"

/**
 * Method: String.toLowerCase()
 *  - Returns a new string with all characters converted to lowercase.
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Converting input to lowercase for uniformity (e.g., comparing case-insensitive strings like email addresses).
 */
let lowerStr = str.toLowerCase();  // "hello, world!"

/**
 * Method: String.slice()
 *  - Extracts a section of a string and returns it as a new string, without modifying the original string.
 * 
 * Parameters:
 *  - Start index (inclusive): Starting position of the extraction.
 *  - End index (exclusive, optional): End position of the extraction.
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Extracting substrings (e.g., getting the domain from an email address).
 */
let slicedStr = str.slice(7, 12);  // "World"

/**
 * Method: String.substring()
 *  - Similar to slice, but `substring` doesn’t accept negative indexes.
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Extracting parts of a string (e.g., extracting a user's first or last name from a full name).
 */
let substringStr = str.substring(7, 12);  // "World"

/**
 * Method: String.split()
 *  - Splits the string into an array of substrings based on the specified delimiter.
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Splitting a CSV string into individual values or splitting a sentence into words.
 */
let words = str.split(", ");  // ["Hello", "World!"]

/**
 * Method: String.replace()
 *  - Replaces a specified value with another value in a string. By default, only the first occurrence is replaced.
 *  - For replacing all occurrences, use a regular expression with the 'g' flag (global match).
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Modifying content dynamically (e.g., replacing all occurrences of a word in a document).
 */
let replacedStr = str.replace("World", "Everyone");  // "Hello, Everyone!"

/**
 * Method: String.trim()
 *  - Removes whitespace from both ends of a string (but not between the words).
 * 
 * Time Complexity: O(n)
 * Example Use Case:
 *  - Cleaning up user input (e.g., removing leading/trailing spaces in an input field).
 */
let trimmedStr = "   Hello, World!   ".trim();  // "Hello, World!"

/**
 * Method: String.repeat()
 *  - Returns a new string with the specified number of copies of the original string, concatenated together.
 * 
 * Time Complexity: O(n * count)
 * Example Use Case:
 *  - Repeating a string (e.g., creating a visual separator in the output like "----" or repeating patterns).
 */
let repeatedStr = "Hello".repeat(3);  // "HelloHelloHello"
