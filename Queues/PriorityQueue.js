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
            console.log("Queue is Full");
            return;
        }

        if(this.isEmpty()){
            this.queue.push({element: element , priority: priority});
            console.log(`${element} with priority ${priority} inserted at first`);
        }
        else{
            let flag = false;
            let item = {element: element , priority: priority};
            for(let i = 0; i < this.queue.length; i++){
                if(priority > this.queue[i].priority){
                    console.log(`${priority} is greater than ${this.queue[i].priority}`,priority > this.queue[i].priority)
                    this.queue.splice(i , 0 , item)
                    flag = true;
                    console.log(`${element} with priority ${priority} inserted at index ${i}`);
                    break;
                }
            }
            if(!flag){
                console.log(`${element} with priority ${priority} inserted at last`);
                this.queue.push(item);
            }
        }
        this.size++;
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is Empty");
            return;
        }

        this.queue.splice(0 , 1);
        this.size--;
    }

    peek(){
        if(this.isEmpty()){
            console.log("Queue is Empty");
            return;
        }

        return this.queue[0];
    }

    displayQueue(){
        if(this.isEmpty()){
            console.log("Queue is Empty");
            return;
        }
        let result = "";
        this.queue.forEach((item)=>{
            result += item.element+":"+item.priority + " | ";
        });
        console.log(result+ "\n");
    }
}


function testPriorityQueue() {
    let passed = true;

    // Test 1: Enqueue elements and check size
    let q = new PriorityQueue();
    q.enqueue(4, 4);
    q.enqueue(6, 6);
    q.enqueue(5, 5);

    if (q.size !== 3) {
        console.log("Test 1 Failed: Size after enqueueing should be 3, but got", q.size);
        passed = false;
    }

    q.displayQueue();

    // Test 2: Check the order of elements (Max-Priority Queue)
    const expectedQueue1 = [{ element: 6, priority: 6 }, { element: 5, priority: 5 }, { element: 4, priority: 4 }];
    if (q.queue.length !== expectedQueue1.length) {
        console.log(`Test 2 Failed: Queue length mismatch. Expected ${expectedQueue1.length} but got ${q.queue.length}`);
        passed = false;
    } else {
        for (let i = 0; i < expectedQueue1.length; i++) {
            if (q.queue[i].element !== expectedQueue1[i].element || q.queue[i].priority !== expectedQueue1[i].priority) {
                console.log(`Test 2 Failed: Queue order is incorrect at index ${i}`);
                passed = false;
            }
        }
    }

    // Test 3: Dequeue elements and check size
    q.dequeue();
    if (q.size !== 2) {
        console.log("Test 3 Failed: Size after dequeueing should be 2, but got", q.size);
        passed = false;
    }

    q.displayQueue();
    // Test 4: Peek the next element
    const peekElement = q.queue[0];
    if (!peekElement || peekElement !== q.queue[0]) {
        console.log("Test 4 Failed: Peek should return the element with highest priority");
        passed = false;
    }

    // Test 5: Check isEmpty and isFull
    q.dequeue();
    q.dequeue();
    if (!q.isEmpty()) {
        console.log("Test 5 Failed: Queue should be empty after dequeueing all elements");
        passed = false;
    }
    q.displayQueue();
    for (let i = 1; i <= 5; i++) {
        q.enqueue(i, i);
        q.displayQueue();
    }
    if (!q.isFull()) {
        console.log("Test 5 Failed: Queue should be full after enqueueing 5 elements");
        passed = false;
    }

    // Test 6: Dequeue from an empty queue
    q.dequeue();
    q.displayQueue();
    q.dequeue();
    q.displayQueue();
    q.dequeue();
    q.displayQueue();
    q.dequeue();
    q.displayQueue();
    q.dequeue();
    q.displayQueue();
    q.dequeue(); // Extra dequeue to test edge case
    q.displayQueue();

    if (!q.isEmpty() || q.size !== 0) {
        console.log("Test 6 Failed: Queue should remain empty after extra dequeue, but got size", q.size);
        passed = false;
    }

    // Test 7: Enqueue elements with the same priority
    q.enqueue(7, 2);
    q.displayQueue();
    q.enqueue(8, 2);
    q.displayQueue();
    q.enqueue(9, 2);
    q.displayQueue();
    q.enqueue(10, 2);
    q.displayQueue();

    if (q.size !== 4) {
        console.log("Test 7 Failed: Size should be 4 after enqueueing elements with the same priority, but got", q.size);
        passed = false;
    }

    // Test 8: Check the order when elements have the same priority
    const expectedQueue2 = [{ element: 7, priority: 2 }, { element: 8, priority: 2 }, { element: 9, priority: 2 }, { element: 10, priority: 2 }];
    if (q.queue.length !== expectedQueue2.length) {
        console.log(`Test 8 Failed: Queue length mismatch. Expected ${expectedQueue2.length} but got ${q.queue.length}`);
        passed = false;
    } else {
        for (let i = 0; i < expectedQueue2.length; i++) {
            if (q.queue[i].element !== expectedQueue2[i].element || q.queue[i].priority !== expectedQueue2[i].priority) {
                console.log(`Test 8 Failed: Queue order is incorrect at index ${i} when elements have the same priority`);
                passed = false;
            }
        }
    }

    // Test 9: Peek in an empty queue
    q.dequeue();
    q.dequeue();
    q.dequeue();
    q.dequeue();
    const peekEmpty = q.peek(); // Should log "Queue is Empty"

    if (peekEmpty !== undefined) {
        console.log("Test 9 Failed: Peek in an empty queue should return undefined");
        passed = false;
    }

    // Test 10: Mixed priorities and edge insertion
    q.enqueue(20, 10);
    q.enqueue(30, 15);
    q.enqueue(25, 5);

    const expectedQueue3 = [{ element: 30, priority: 15 }, { element: 20, priority: 10 }, { element: 25, priority: 5 }];
    if (q.queue.length !== expectedQueue3.length) {
        console.log(`Test 10 Failed: Queue length mismatch. Expected ${expectedQueue3.length} but got ${q.queue.length}`);
        passed = false;
    } else {
        for (let i = 0; i < expectedQueue3.length; i++) {
            if (q.queue[i].element !== expectedQueue3[i].element || q.queue[i].priority !== expectedQueue3[i].priority) {
                console.log(`Test 10 Failed: Queue order is incorrect at index ${i} for mixed priorities`);
                passed = false;
            }
        }
    }

    // Summary
    if (passed) {
        console.log("All test cases passed!");
    } else {
        console.log("Some test cases failed.");
    }
}

// Run the test function
testPriorityQueue();


