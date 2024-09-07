// The basic idea of quick sort(Partition exchange sort) algorithm is to select a pivot element 
// That pivot element may be first element or last element or mid element or random element
// This algorithm based on Divide and conqure technique
// We call it as partition which is the back bone of this algorithm
// All the elements less than pivot should be on left side of pivot
// All the elements greater than pivot should be on right side of pivot 
// If the element is equal to pivot element then it can go either left or right

// Assume array [7 , 6 , 10 , 5 , 9 , 2 , 1 , 15 , 7]
// Lower bound is 0 index
// Upper bound is 8 index
// For partitioning take two pointers start and end 
// Start asign with starting index of that partition
// End asign with end index of that partition
// If the starting index element is smaller than pivot element then increase start and repeat untill a greater element than pivot is found
// Then for end, decrement if the end index element is greater than or equal to pivot until a smaller element is found
// If start and end are overlapped swap end with pivot element 
// Else swap start index element and end index element 
// [2 , 6 , 7 , 5 , 1 , 7 , 9 , 15 , 10]
// Apply the same logic for 
// ______Partition 1 __pivot__ ______Partition 2
// All the values of p1 are less than to pivot
// All the values of p1 are greater than to pivot
// Again we will apply same to the partition for both partitions untill we have one element in partition

// It is not matter the order of elements in partitions
// nlog(n) - Time complixity

console.clear()
let a = [7,6,10,5,9,2,1,15,7];
// let a = [5,2,0,4,1,3]
console.log(...a);
function swap(toSwap , toWith , array){
    let temp = array[toSwap];
    array[toSwap] = array[toWith];
    array[toWith] = temp;
}

function partition(lowerBound , upperBound , arr , p){
    let start = lowerBound;
    let end = upperBound;
    let pivot = p;
    while(start <= upperBound && arr[start] <= arr[pivot]){
        start++;
    }
    while(end >= lowerBound && arr[end] > arr[pivot]){
        end--;
    }
    if(start < end){
        swap(start , end  , arr);
        return partition(start + 1 , end - 1 , arr , p);
    }
    else{
        swap(p , end , arr);
        return end;
    }
}

function quickSort(lb , ub){
    if(lb < ub){
        let end = partition(lb , ub , a , lb);
        quickSort(lb , end - 1);
        quickSort(end + 1 , ub)
    }
}

quickSort(0 , a.length - 1 );
console.log(...a)
