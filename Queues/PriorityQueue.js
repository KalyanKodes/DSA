// A priority queue is a type of queue where elements are inserted and deleted based on their priority
// There are two types of Priorities Queues.
// Min-Priority Queue
// Max-Priority Queue
// In Min-Priority Queue, the element with lowest priority will be deleted first no matter when it is inserted.
// In Max-Priority QUeue, the element with highest priority will be deleted first no matter when it is inserted.

console.clear();
class PriorityQueue{
    constructor(){
        this.queue = [];
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    isFull(){
        return this.size === 5;
    }

    enqueue(element , priority){
        if(this.isFull()){
            // console.log("Queue is Full");
            return;
        }

        if(this.isEmpty()){
            this.queue.push({element: element , priority: priority});
            // console.log(`${element} with priority ${priority} inserted at first`);
        }
        else{
            let flag = false;
            let item = {element: element , priority: priority};
            for(let i = 0; i < this.queue.length; i++){
                if(priority > this.queue[i].priority){
                    // console.log(`${priority} is greater than ${this.queue[i].priority}`,priority > this.queue[i].priority)
                    this.queue.splice(i , 0 , item)
                    flag = true;
                    // console.log(`${element} with priority ${priority} inserted at index ${i}`);
                    break;
                }
            }
            if(!flag){
                // console.log(`${element} with priority ${priority} inserted at last`);
                this.queue.push(item);
            }
        }
        this.size++;
    }

    dequeue(){
        if(this.isEmpty()){
            // console.log("Queue is Empty");
            return;
        }

        this.queue.splice(0 , 1);
        this.size--;
    }

    peek(){
        if(this.isEmpty()){
            // console.log("Queue is Empty");
            return;
        }

        return this.queue[0];
    }

    displayQueue(){
        if(this.isEmpty()){
            // console.log("Queue is Empty");
            return;
        }
        let result = "";
        this.queue.forEach((item)=>{
            result += item.element+":"+item.priority + " | ";
        });
        console.log(result+ "\n");
    }
}


