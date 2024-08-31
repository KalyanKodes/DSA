 // Test 3: Dequeue elements from the queue
    queue.deQueue();          // Queue: [null, 20, 30, 40, 50]
    queue.deQueue();          // Queue: [null, null, 30, 40, 50]
    checkQueue([null, null, 30, 40, 50], "Test 3");

    // Test 4: Enqueue again after some dequeues
    queue.enQueue(60);        // Queue: [null, null, 30, 40, 60]
    queue.enQueue(70);        // Queue: [70, null, 30, 40, 60]
    checkQueue([70, null, 30, 40, 60], "Test 4");