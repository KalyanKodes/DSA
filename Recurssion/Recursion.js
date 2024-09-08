// When a function calls itself it is recursion
// The base condition or the terminate condition that tell when to stop the recursion.
// If there is no base case the program will run infinate times.
// Types of Recrusion : Direct , indirect , tail and non-tail recrusions

console.clear();
// Factorial of n direct recursion
function findFact(n){
    if(n <= 1){
        return 1;
    }
    else{
        let p = findFact(n - 1);
        return p * n;
    }
}

// Sum of n natual numbers
function sum(n){
    if(n > 0){
        return sum(n - 1) + n;
    }
    else{
        return n;
    }
}


// If a function is calling itself directly is called direct recursion
/* func fun1(){ 
    fun1();
} */

// If a function call occurs in a circular fashion then it is a indirect recursion
// functionOne is calling functionTwo and functionTwo calling functionOne

/* func fun1(){
         fun2();
}
    func fun2(){
        fun1()
    }
 */


// Factorial of number using indirect recursion
function fun1(n){
    if(n <= 1){
        return 1;
    }
    else{
        return n * fun2(n - 1);
    }
}
function fun2(n){
    if(n <= 1){
        return 1;
    }
    else{
        return n * fun1(n - 1);
    }
}

// Recursion would be the last task in that function, there will be no task after the recursive call called tail recursion
// Tail recursion is similar to normal loops and also had a disadvantage of space complixity O(n) whereas the same task with loops the space complixity is O(1)
// Opposite of tail recursion is non-tail recursion, that means there are still some task left to execute after recursive function call
// Here the recursive function call function(n/2) is the last task

// Tail recursive
function tailRecursive(n){
    if(n >= 1){
        console.log(n);
        tailRecursive(Math.floor(n/2));
    }
}
// non tail recursive
function nonTailRecursive(n){
    if(n >= 1){
        tailRecursive(Math.floor(n/2));
        console.log(n);
    }
}



let d = 1;
const count = (n)=>{
    console.log(n);
    console.log(d);
    d++;
    if(n > 1)
        count(n - 1);
    console.log(d)
}


