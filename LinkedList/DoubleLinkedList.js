// Double Linked List

class Node{
    constructor(data){
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertFirst(data){
        let node = new Node(data);
        if(this.head === null){
            this.head = node;
        }
        else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    insertLast(data){
        let node = new Node(data);
        if(this.head === null){
            this.head = node;
        }
        else{
            let temp = this.head;
            while(temp.next !== null){
                temp = temp.next;
            }
            temp.next = node;
            node.prev = temp;
        }
        this.size++;
    }

   insertAtIndex(index, data) {
    if (index < 0 || index > this.size) {
        console.log("Index Out Of Range");
        return;
    }

    let node = new Node(data);

    if (index === 0) {
        this.insertFirst(data);
        return; 
    } 

    let count = 0;
    let curNode = this.head;


    while (count !== index) {
        curNode = curNode.next;
        count++;
    }


    if (curNode === null) {
        this.insertLast(data);
    } else {
        let prevNode = curNode.prev;
        
        prevNode.next = node;
        node.prev = prevNode;
        
        node.next = curNode;
        curNode.prev = node;
        
        this.size++;
    }
}

    deleteFront(){
        if(this.isEmpty()){
            console.log("List is Empty")
            return;
        }

        if(this.head.next === null){
            this.head = null;
        }   
        else{
            this.head = this.head.next 
        }
        this.size--;
    }

    isEmpty(){
        return this.head === null;
    }


    deleteLast(){
        if(this.isEmpty()){
            console.log("List is Empty");
            return;
        }

        if(this.head.next === null){
            this.head = null;
        }
        else{
            // let temp = this.head;
            // while(temp.next != null){
            //     temp = temp.next;
            // }
            // temp.prev.next = null;

            let prevNode = this.head;
            let curNode = this.head;
            while(curNode.next != null){
                prevNode = curNode;
                curNode = curNode.next; 
            }
            prevNode.next = null;
        }
        this.size--;
    }


    deleteAtIndex(index){
        if(this.isEmpty()){
            console.log("List is Empty");
            return;
        }

        if(index < 0 || index > this.size){
            console.log("Index Out Of Range");
            return;
        }

        if(this.head.next === null){
            this.head = null
        }

        if(index === 0){
            this.deleteFront();
        }
        else{
            let count = 0;
            let prevNode = this.head;
            let curNode = this.head;
            while(count != index){
                prevNode = curNode;
                curNode = curNode.next;
                count++;
            }
            prevNode.next = curNode.next;
        }
        this.size--;
    }





    displayList(){
        if(this.head === null){
            console.log("List Is Empty");
            return;
        }
        let temp = this.head;
        let result = ""
        while(temp != null){
            result += "<- "+temp.data + " ->";
            temp = temp.next;
        }
        console.log(null, result , null)
    }
}


// Test Cases for DoubleLinkedList
function runTestCases() {
    // Initialize a new Double Linked List
    let dll = new DoubleLinkedList();

    // Test case 1: Insert at the beginning
    dll.insertFirst(10);
    dll.insertFirst(11);
    dll.insertFirst(12);
    console.log("Test 1 (Insert at beginning):");
    dll.displayList();  // Expected: null <- 12 -> <- 11 -> <- 10 -> null

    // Test case 2: Insert at the end
    dll.insertLast(9);
    dll.insertLast(8);
    console.log("Test 2 (Insert at end):");
    dll.displayList();  // Expected: null <- 12 -> <- 11 -> <- 10 -> <- 9 -> <- 8 -> null

    // Test case 3: Insert at a specific index
    dll.insertAtIndex(5, 7);
    dll.insertAtIndex(0, 13);
    dll.insertAtIndex(3, 234);
    console.log("Test 3 (Insert at index):");
    dll.displayList();  // Expected: null <- 13 -> <- 12 -> <- 11 -> <- 234 -> <- 10 -> <- 9 -> <- 7 -> <- 8 -> null

    // Test case 4: Delete from the front
    dll.deleteFront();
    console.log("Test 4 (Delete from front):");
    dll.displayList();  // Expected: null <- 12 -> <- 11 -> <- 234 -> <- 10 -> <- 9 -> <- 7 -> <- 8 -> null

    // Test case 5: Delete from the end
    dll.deleteLast();
    console.log("Test 5 (Delete from end):");
    dll.displayList();  // Expected: null <- 12 -> <- 11 -> <- 234 -> <- 10 -> <- 9 -> <- 7 -> null

    // Test case 6: Delete at a specific index
    dll.deleteAtIndex(2);
    dll.deleteAtIndex(0);
    dll.deleteAtIndex(0);
    dll.deleteAtIndex(3);
    console.log("Test 6 (Delete at index):");
    dll.displayList();  // Expected: null <- 9 -> <- 7 -> null

    // Additional edge case testing
    console.log("Additional Edge Case Tests:");

    // Edge case: Deleting when the list is empty
    dll.deleteAtIndex(0);
    dll.deleteAtIndex(0);
    dll.deleteFront();
    dll.deleteLast();
    dll.deleteAtIndex(0);
    dll.deleteFront();  // Should not cause any errors
    console.log("Edge case (Delete when list is empty):");
    dll.displayList();  // Expected: List Is Empty

    // Edge case: Inserting into an empty list at an index other than 0
    dll.insertAtIndex(1, 20);  // Should show an index out of range error

    // Edge case: Deleting from an index out of range
    dll.insertFirst(1);
    dll.deleteAtIndex(5);  // Should show an index out of range error

    // Final state of the list
    console.log("Final state of the list:");
    dll.displayList();  // Expected: null <- 1 -> null
}

// Run the test cases
runTestCases();
