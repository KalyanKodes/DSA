function testDoubleLinkedList() {
    let dll = new DoubleLinkedList();

    // Helper function to check if the list matches the expected array
    function checkList(expectedList, testCaseName) {
        let temp = dll.head;
        let actualList = [];
        while (temp !== null) {
            actualList.push(temp.data);
            temp = temp.next;
        }
        if (JSON.stringify(actualList) !== JSON.stringify(expectedList)) {
            console.log(`${testCaseName} Failed: Expected [${expectedList}] but got [${actualList}]`);
            return false;
        }
        console.log(`${testCaseName} Passed`);
        return true;
    }

    // Test 1: Insert elements at the front
    dll.insertFirst(10);       // List: [10]
    // Expected: [10]
    dll.insertFirst(20);       // List: [20, 10]
    // Expected: [20, 10]
    dll.insertFirst(30);       // List: [30, 20, 10]
    // Expected: [30, 20, 10]
    // dll.displayList();
    checkList([30, 20, 10], "Test 1");

    // Test 2: Insert elements at the end
    dll.insertLast(40);        // List: [30, 20, 10, 40]
    // Expected: [30, 20, 10, 40]
    dll.insertLast(50);        // List: [30, 20, 10, 40, 50]
    // Expected: [30, 20, 10, 40, 50]
    // dll.displayList();
    checkList([30, 20, 10, 40, 50], "Test 2");

    // Test 3: Insert at specific index
    dll.insertAtIndex(2, 25);  // List: [30, 20, 25, 10, 40, 50]
    // Expected: [30, 20, 25, 10, 40, 50]
    dll.insertAtIndex(0, 5);   // List: [5, 30, 20, 25, 10, 40, 50]
    // Expected: [5, 30, 20, 25, 10, 40, 50]
    dll.insertAtIndex(7, 60);  // List: [5, 30, 20, 25, 10, 40, 50, 60]
    // Expected: [5, 30, 20, 25, 10, 40, 50, 60]
    // dll.displayList();
    checkList([5, 30, 20, 25, 10, 40, 50, 60], "Test 3");

    // Test 4: Delete elements from the front
    dll.deleteFront();         // List: [30, 20, 25, 10, 40, 50, 60]
    // Expected: [30, 20, 25, 10, 40, 50, 60]
    dll.deleteFront();         // List: [20, 25, 10, 40, 50, 60]
    // Expected: [20, 25, 10, 40, 50, 60]
    // dll.displayList();
    checkList([20, 25, 10, 40, 50, 60], "Test 4");

    // Test 5: Delete elements from the end
    dll.deleteLast();          // List: [20, 25, 10, 40, 50]
    // Expected: [20, 25, 10, 40, 50]
    dll.deleteLast();          // List: [20, 25, 10, 40]
    // Expected: [20, 25, 10, 40]
    // dll.displayList();
    checkList([20, 25, 10, 40], "Test 5");

    // Test 6: Delete at specific index
    dll.deleteAtIndex(2);      // List: [20, 25, 40]
    // Expected: [20, 25, 40]
    dll.deleteAtIndex(0);      // List: [25, 40]
    // Expected: [25, 40]
    dll.deleteAtIndex(1);      // List: [25]
    // Expected: [25]
    // dll.displayList();
    checkList([25], "Test 6");

    // Test 7: Edge Case - Delete from an empty list
    dll.deleteFront();         // List: []
    // Expected: []
    dll.deleteLast();          // List: []
    // Expected: []
    // dll.displayList();
    checkList([], "Test 7");

    // Test 8: Insert after deleting all elements
    dll.insertLast(70);        // List: [70]
    // Expected: [70]
    dll.insertLast(80);        // List: [70, 80]
    // Expected: [70, 80]
    // dll.displayList();
    checkList([70, 80], "Test 8");

    // Test 9: Insert at specific index in a single-element list
    dll.insertAtIndex(1, 90);  // List: [70, 90, 80]
    // Expected: [70, 90, 80]
    dll.insertAtIndex(0, 100); // List: [100, 70, 90, 80]
    // Expected: [100, 70, 90, 80]
    // dll.displayList();
    checkList([100, 70, 90, 80], "Test 9");

    // Test 10: Circular Link Verification (in both directions)
    dll.insertAtIndex(4, 110); // List: [100, 70, 90, 80, 110]
    // Expected: [100, 70, 90, 80, 110]
    // dll.displayList();
    checkList([100, 70, 90, 80, 110], "Test 10");
}

// Run the test function
testDoubleLinkedList();
