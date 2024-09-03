let arr = [0,1,2,3,4,5,6,7,8,9,10];

function linearSearch(element , i = 0){
    let index = -1;
    if(arr.length === 0 || !arr){
        return index;
    }

    // if(i < arr.length)
    // if(arr[i] === element){
    //     return i
    // }
    // else{
    //     index = linearSearch(element , i + 1)
    // }

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === element){
            index = i;
            break;
        }
    }

    return index;
}

let startTime = new Date().getTime();

let result = linearSearch(2345677);
console.log(result === -1 ? "Element not Found" : "Element found at index " + result)
let endTime = new Date().getTime();

console.log("Time took: " , endTime - startTime , "ms")