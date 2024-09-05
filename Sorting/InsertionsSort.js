// In this sorting technique the given array is divided into two parts
// The first part is considered as sorted array and the other part is considered as unsorted array
// We pick the first element in unsorted array and put that element in it's appropriate place in sorted array


let arr = [5,4,3,2,1,0];



for(let i = 0; i < arr.length - 1; i++){
    let temp = arr[i + 1];
    let flag = 0;
    let j = i;
    for(;j >= 0; j--){
        if(arr[j] > temp){
            arr[j + 1] = arr[j];
            flag = 1;
        }
        else break;
    }
    if(flag === 1){
        arr[j + 1] = temp;
    }
}

console.log(...arr)