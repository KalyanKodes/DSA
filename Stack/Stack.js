// Stack
// Stack is a linear data structure where it follows LIFO (Last In First Out) or FILO (First In Last Out)
// The element inserted at first is removed at last
// The element inserted at last in removed at first
// We can imagine it as a stack or plates
// Operations performed on stack are push , pop , peek , isFull , isEmpty 


let top = -1;
let stackSize = 5;
let stack = [];

function push(element){
    if(isFull()){
        console.log("Stack is Full");
        return;
    }

    top++;
    stack[top] = element;
}   

function pop(){
    if(isEmpty()){
        console.log("Stack is Empty");
        return;
    }
    top--;
}

function peek(){
    if(isEmpty()){
        console.log("Stack is Empty");
        return;
    }

    console.log(stack[top]);
}


function display(){
    if(isEmpty()){
        console.log("Stack is Empty");
        return;
    }
    
    let result = "";
    for(let i = 0; i <= top; i++){
        result += stack[top] + " "
    }
    console.log(result);
}

function isFull(){
    return top === stackSize - 1;
}

function isEmpty(){
    return top === -1;
}


