// Sorting refers to the process of arranging the elements of a collection (such as an array, list, or dataset) in a specific order. The order can be ascending or descending, based on criteria such as numerical value, alphabetical order, or other custom-defined rules.



// Time complexity is O(n2)

let arr = [9,8,7,6,5,4,3,2,1,0];

console.log(...arr)

for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
        if(arr[i] > arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(...arr)