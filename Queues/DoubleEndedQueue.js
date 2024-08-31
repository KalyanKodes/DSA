// A DoubleEnded Queue or Deque is a special type of Queue where we can insert and delete elements from both sides (Front or Rear)
// It can be used as a stack and a queue
// There are two types of Deques
// Input restricted Queue => Insert can be performed only on one End either front or rear and delete can be done on both sides
// Output restricted Queue => Delete can be performed only on one End either front or rear and insert can be done on both sides

// Operations can be performed on Deque are:
// InsertFromFront
// InsertFromRear
// DeleteFromFront
// DeleteFromRear
// PeekFrontAndRear





console.clear();

class DoubleEndedQueue{
    constructor(){
        this.maxSize = 5;
        this.queue = new Array(this.maxSize).fill(null);
        this.front = -1;
        this.rear = -1;
    }

    insertFront(element){
        if(this.isFull()){
            return;
        }

        if(this.front === -1){
            this.front = 0;
            this.rear = 0;
        }
        else{
            this.front = (this.front - 1 + this.maxSize) % this.maxSize
        }
        this.queue[this.front] = element;
    }

    insertRear(element){
        if(this.isFull()){
            return
        }

        if(this.rear === -1){
            this.rear = 0;
            this.front = 0;
        }
        else{
            this.rear = (this.rear + 1) % this.maxSize;
        }
        this.queue[this.rear] = element;
    }

    deleteFront(){
        if(this.isEmpty()){
            return;
        }

        this.queue[this.front] = null;
        if(this.front === this.rear){
            this.front = -1;
            this.rear = -1;
        }
        else{
            this.front = (this.front + 1) % this.maxSize;
        }
    }

    deleteRear(){
        if(this.isEmpty()){
            return;
        }
        
        this.queue[this.rear] = null;
        if(this.front === this.rear){
            this.front = -1;
            this.rear = -1;
        }
        else{
            this.rear = (this.rear - 1 + this.maxSize) % this.maxSize;
        }
    }

    peek(){
        if(!this.isEmpty()){
            return [this.queue[this.front] , this.queue[this.rear]]
        }
    }

    display(){
        if(this.isEmpty()){
            return;
        }

        let i = this.front;
        let result = "";
        do{
            result += this.queue[i];
            i = (i + 1) % this.maxSize;
        }while(i != this.rear);
        result += this.queue[this.rear]
        console.log(result);

    }
    isFull(){
        return (this.rear + 1) % this.maxSize === this.front
    }
    isEmpty(){
        return this.front === -1 && this.rear === -1;
    }
}

