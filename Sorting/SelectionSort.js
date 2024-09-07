// In this sorting technique the array is divided into two halfs as in insertion sort
// But in insertion sort we considered the first element is sorted and the other as unsorted array
// In selection sorting the initially the sorted array is empty and the unsorted array starts from 0 index
// The minimum element in unsorted array is swaped with begining element of that unsorted array
// After one pass the sorted array pointer is increased


let arr = [64, 25, 12, 22, 11];
// let arr = [7 , 4 , 10 , 8 , 3 , 1];
console.log(...arr)

function findMin(array , start , end){
    let minIndex = start;
    for(let i = start + 1; i < end; i++){
        if(array[i] < array[minIndex]){
            minIndex = i;
        }
    }

    return minIndex;
}


for(let i = 0; i < arr.length - 1; i++){
    let min = findMin(arr , i , arr.length);
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
}

console.log(...arr)