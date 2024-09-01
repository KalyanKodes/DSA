// A Hash dataStructure also known as Hashmap is used to organize and store data in Key and Value pairs
// JavaScript had Objects for similar kind of purpose 
// A hashFunction is used to convert a String to a numeric value to store data in hashTable
// A hashFunciton accepts a key string and converts it to it's hashCode which is within the bounds of Array
// The same hashFunction is used to retrive the value
// Operation can perform are: 
// Set a key-value pair
// Get a value with given key
// Remove a key-value pair


// There is a concept called Collision in HashTable Datastructure
// When the key has same set of letters and has same ascii code then the previous data will be over written and lost

console.clear();
class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hashFunction(key) {
        return key.split("").reduce((acc, item) => {
            return acc + item.charCodeAt(0);
        }, 0) % this.size;
    }

    setItem(key, value) {
        let index = this.hashFunction(key);
        if (this.table[index]) {
            let sameKey = this.table[index].find((item) => item.key === key);
            if (sameKey) {
                sameKey.value = value;
            } else {
                this.table[index].push({ key, value });
            }
        } else {
            this.table[index] = [{ key, value }];
        }
    }

    getItem(key) {
        let index = this.hashFunction(key);
        if (this.table[index]) {
            let keyItem = this.table[index].find((item) => item.key === key);
            if (keyItem) {
                console.log(keyItem.value);
                return keyItem.value;
            }
        }
        console.log("Key doesn't exist");
        return undefined;
    }

    removeItem(key) {
        let index = this.hashFunction(key);
        if (this.table[index]) {
            let itemIndex = this.table[index].findIndex((item) => item.key === key);
            if (itemIndex !== -1) {
                this.table[index].splice(itemIndex, 1); 
                if (this.table[index].length === 0) {
                    this.table[index] = undefined;
                }
                return;
            }
        }
        console.log("Key doesn't exist");
    }

    display() {
        let count = 0;
        for (let i = 0; i < this.size; i++) {
            if (this.table[i]) {
                console.log(i , ":", this.table[i]);
                count++;
            }
        }
        // console.log("Number of Items: ", count);
    }
}

