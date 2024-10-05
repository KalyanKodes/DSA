/*
    Overview:
    - A Hash Table (also known as a Hash Map) is a data structure used to store data in key-value pairs.
    - JavaScript objects can also serve a similar purpose.
    - A hash function is employed to convert a string key into a numeric value, allowing the data to be stored in an array (hash table).
    - The same hash function is utilized to retrieve the value associated with a given key.

    Key Points:
    - A hash function takes a key string and computes a hash code that is within the bounds of the array.
    - Collisions can occur in a hash table when two keys produce the same hash code; this can lead to overwriting the previous data.

    Features:
    - Allows for efficient data retrieval using keys.
    - Provides average-case constant time complexity for lookups, insertions, and deletions.

    Operations and their Time Complexity:
    1. Set a key-value pair: O(1) on average (worst-case O(n) due to collisions)
    2. Get a value with a given key: O(1) on average (worst-case O(n) due to collisions)
    3. Remove a key-value pair: O(1) on average (worst-case O(n) due to collisions)

    Space Complexity: O(n), where n is the number of elements in the hash table.

    Why We Use It:
    - Hash tables are used for efficient data retrieval and storage, especially when dealing with a large number of entries.

    Applications:
    - Caching data for quick access.
    - Implementing associative arrays or dictionaries.
    - Tracking data in scenarios like frequency counts or index mapping.

    Advantages:
    - Fast data retrieval and insertion on average.
    - Flexible data storage, allowing for dynamic resizing.

    Disadvantages:
    - Poor performance in worst-case scenarios due to collisions.
    - Requires additional memory for storage and management of keys and values.

*/

console.clear();
class HashTable {
    constructor(size) {
        // Initialize the hash table with a specified size.
        this.table = new Array(size);
        this.size = size;
    }

    /*
        Generate a hash code for a given key.
        Time Complexity: O(k), where k is the length of the key.
    */
    hashFunction(key) {
        // Calculate hash code by summing ASCII values of the characters.
        return key.split("").reduce((acc, item) => {
            return acc + item.charCodeAt(0);
        }, 0) % this.size; // Modulus to fit within table size.
    }

    /*
        Set a key-value pair in the hash table.
        If the key already exists, update its value.
        Time Complexity: O(1) on average.
    */
    setItem(key, value) {
        let index = this.hashFunction(key); // Compute hash code.
        if (this.table[index]) {
            // Check if there is an existing array at the index.
            let sameKey = this.table[index].find((item) => item.key === key);
            if (sameKey) {
                // Update value if key already exists.
                sameKey.value = value;
            } else {
                // Add new key-value pair.
                this.table[index].push({ key, value });
            }
        } else {
            // Initialize a new array if it doesn't exist.
            this.table[index] = [{ key, value }];
        }
    }

    /*
        Retrieve a value associated with a given key.
        Returns the value or undefined if the key doesn't exist.
        Time Complexity: O(1) on average.
    */
    getItem(key) {
        let index = this.hashFunction(key); // Compute hash code.
        if (this.table[index]) {
            // Check if there is an existing array at the index.
            let keyItem = this.table[index].find((item) => item.key === key);
            if (keyItem) {
                console.log(keyItem.value); // Log value to console.
                return keyItem.value; // Return value.
            }
        }
        console.log("Key doesn't exist"); // Key not found.
        return undefined; // Return undefined if key is not found.
    }

    /*
        Remove a key-value pair from the hash table.
        Time Complexity: O(1) on average.
    */
    removeItem(key) {
        let index = this.hashFunction(key); // Compute hash code.
        if (this.table[index]) {
            // Check if there is an existing array at the index.
            let itemIndex = this.table[index].findIndex((item) => item.key === key);
            if (itemIndex !== -1) {
                // Remove the item if found.
                this.table[index].splice(itemIndex, 1);
                // Clear the array if it becomes empty.
                if (this.table[index].length === 0) {
                    this.table[index] = undefined;
                }
                return; // Successfully removed.
            }
        }
        console.log("Key doesn't exist"); // Key not found.
    }

    /*
        Display all key-value pairs in the hash table.
    */
    display() {
        let count = 0; // Count of items for display.
        for (let i = 0; i < this.size; i++) {
            if (this.table[i]) {
                console.log(i , ":", this.table[i]); // Log index and items.
                count++;
            }
        }
        // console.log("Number of Items: ", count); // Optionally log total count of items.
    }
}

// Example usage of the HashTable class
let ht = new HashTable(10); // Create a new hash table of size 10.

// Set key-value pairs
ht.setItem("name", "Alice");
ht.setItem("age", 25);
ht.setItem("job", "Engineer");
ht.setItem("city", "Bengaluru");
ht.setItem("name", "Bob"); // Updating existing key

// Get values for keys
ht.getItem("name"); // Expected output: "Bob" (updated value)
ht.getItem("age"); // Expected output: 25
ht.getItem("country"); // Expected output: "Key doesn't exist"

// Display all items in the hash table
ht.display(); // Displays the content of the hash table

// Remove a key-value pair
ht.removeItem("job"); // Remove 'job' key
ht.getItem("job"); // Expected output: "Key doesn't exist" (after removal)
ht.display(); // Displays the content of the hash table after removal
