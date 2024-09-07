// This technique also uses divide and conqure
// Complete array divided into sublists until sublist having one element and merge those sublist to produce sorted sublist 
// The time complexity is O(n log n)
// The disadvantage of this sorting technique is it requires additional space because it is a non-in-place sorting algorithm that mean we can't change the actual array inplace


let inputArr = [3,1,2,4,1,5,2,6,4];
console.log(...inputArr);

function merge(arr , low , mid , high){
    let start = low;
    let end = mid + 1;
    let temp = [];
    while(start <= mid && end <= high){
        if(arr[start] < arr[end]){
            temp.push(arr[start]);
            start++;
        }
        else{
            temp.push(arr[end]);
            end++;
        }
    }

    while(start <= mid){
        temp.push(arr[start]);
        start++;
    }
    while(end <= high){
        temp.push(arr[end]);
        end++;
    }
    let index= 0;
    for(let i = low; i <= high; i++){
        arr[i] = temp[index++];
    }
}


function mergeSort(lb , hb , arr){
    if(lb < hb){
        let mid = Math.floor((lb + hb) /2);
        mergeSort(lb , mid , arr);
        mergeSort(mid + 1 , hb , arr);
        merge(arr , lb , mid , hb);
    }
}

mergeSort(0 , inputArr.length - 1 , inputArr)

console.log(...inputArr)



