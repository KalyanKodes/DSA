// When there is an sorted array finding an element present in that by using BinarySearch is more efficent
// Because in binaray search we are going to split the array into two halfs and only searching for element in one half itself
// Time complexity is log base 2 of n


let arr = [0,1,2,3,4,5,6,7,8,9];

function binaraySearch(element , l = 0 , h = arr.length -1){
    let index = -1;
    if(arr.length === 0){
        return -1;
    }

    let mid = Math.floor((l + h) / 2);
    
    if(arr[mid] === element){
            return mid;
    }
    if(l < h)
    if(element > arr[mid]){
        index = binaraySearch (element , mid + 1 , h);
    }
    else{
        index = binaraySearch(element , l , mid - 1);
    }

    return index;
}

let result = binaraySearch(10);
console.log(result === -1 ? "Element not Found" : "Element found at index " + result)

