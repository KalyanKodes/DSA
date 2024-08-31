// Queue is a Linear data structure that follow FIFO(First In First Out)
// It is similar to a situation where people are standing out at Supermarket 
// The first person in line can checkout first. Last person in the line checkout last
// It is used in CPU scheduling and in situations where process need to be done based on which comes first

// The main disadvantage of Linear queue is wastage of space.
// When we dequeue the front and even there is the space for new element to insert linear queue won't allow to insert new element until all elements are dequeued 
// To overcome this disadvantage Circular queue is introduced

class LinearQueue{
    constructor(size){
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    enQueue(element){
        if(this.isFull()){
            console.log("Queue is Full");
            return;
        }

        if(this.isEmpty()){
            this.front = 0;
        }
        this.queue[++this.rear] = element;
    }


    deQueue(){
        if(this.isEmpty()){
            console.log("Queue is Empty");
            return;
        }

        if(this.rear === this.front){
            this.front = -1;
            this.rear = -1;
            return;
        }
        this.front++;
    }

    peek(){
        if(this.isEmpty()){
            console.log("Queue is Empty");
            return;
        }

        console.log(this.queue[this.front]);
    }

    display(){
        if(this.isEmpty()){
            console.log("Queue is Empty");
            return;
        }
        let result = "";
        for(let i = this.front; i <= this.rear; i++){
            result += this.queue[i] + " ";
        }
        console.log(result);
    }
    isFull(){
        return this.rear === this.size - 1;
    }

    isEmpty(){
        return this.front === -1;
    }
}




