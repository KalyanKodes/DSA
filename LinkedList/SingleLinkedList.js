// LinkedList

// LinkedList is a Linear datastructure and it is a collection of nodes where each node consists of Data and address of next node. 
// It don't have a fixed size where it can grow and shrink in run time.
// Insertion and deletion on linkedList are more easy than in arrays. In arrays insertion and deletion takes O(n) cause we need to shift all elements by one place, but in linkedList we just need to change the address on node.
// There are few types of linked Lists. They are:
// Singly LinkedList
// Double LinkedList
// Circular LinkedList
// Double-Circular LinkedList

// Singly LinkedList
console.clear();
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertFirst(value){
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
        this.getSize();
        this.displayList();
    }
    
    insertLast(value){
        let newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode;
        }
        else{
            let lastNode = this.head;
            while(lastNode.next !== null){
                lastNode = lastNode.next;
            }
            lastNode.next = newNode;
        }
        this.size++;
        this.getSize();
        this.displayList();
    }

    insertAtIndex(value , index){
        if(index < 0 || index > this.size){
            console.log("Index out of Range");
            return;
        }
        if(index === 0){
                this.insertFirst(value)
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
            let newNode = new Node(value);
            prevNode.next = newNode;
            newNode.next = curNode;
        }
        this.size++;
        this.getSize();
        this.displayList();
    }

    deleteFront(){
        if(this.isEmpty()){
            console.log("List is Empty");
        }
        else{
            if(this.head.next === null){
                this.head = null;
            }
            else{
                this.head = this.head.next;
            }
            this.size--;
            this.getSize();
            this.displayList();
        }
    }

    deleteLast(){
        if(this.isEmpty()){
            console.log("List is Empty");
        }
        else{
            if(this.head.next === null){
                this.head = null;
            }
            else{
                let prevNode = this.head;
                let curNode = this.head;
                while(curNode.next != null){
                    prevNode = curNode;
                    curNode = curNode.next;
                }
                prevNode.next = null;
            }
            this.size--;
            this.getSize();
            this.displayList();
        }
    }

    deleteAtIndex(index){
        if(this.isEmpty()){
            console.log("List is Empty")
            return;
        }

        if(index < 0 || index > this.size){
            console.log("Index out of Range");
            return;
        }

        if(this.head.next === null){
            this.head = null;
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
        this.getSize();
        this.displayList();
    }

    isEmpty(){
        return this.head === null;
    }

    displayList(){
        if(this.isEmpty()){
            console.log("List is Empty");
            return;
        }
        let temp = this.head;
        let result = "";
        while(temp != null){
            result += temp.data + " -> "
            temp = temp.next;
        }
        console.log(result+ "null");
    }

    searchElement(element , head = this.head){
        if(head !== null){
            let temp = head;
            let count = 0;
            while(temp != null){
                if(temp.data === element){
                    console.log(`${element} found at index ${count}`)
                    return;
                }
                temp = temp.next;
                count++;
            }
            console.log(`${element} not found`)
            return;
        }
        else{
            console.log("List is Empyt")
        }
    }

    getSize(){
        console.log("Size of List: " , this.size)
    }
}

function runTestCases() {
    let list = new SinglyLinkedList();

    // Test Case 1: Insert elements at the beginning
    list.insertFirst(10); // 10
    list.insertFirst(20); // 20 -> 10
    list.insertFirst(30); // 30 -> 20 -> 10

    // Test Case 2: Insert elements at the end
    list.insertLast(40);  // 30 -> 20 -> 10 -> 40

    // Test Case 3: Insert at specific index
    list.insertAtIndex(50, 0); // 50 -> 30 -> 20 -> 10 -> 40
    list.insertAtIndex(60, 4); // 50 -> 30 -> 20 -> 10 -> 60 -> 40
    list.insertAtIndex(70, 6); // 50 -> 30 -> 20 -> 10 -> 60 -> 40 -> 70

    // Test Case 4: Delete elements from the front
    list.deleteFront(); // 30 -> 20 -> 10 -> 60 -> 40 -> 70
    list.deleteFront(); // 20 -> 10 -> 60 -> 40 -> 70

    // Test Case 5: Delete elements from the end
    list.deleteLast();  // 20 -> 10 -> 60 -> 40
    list.deleteLast();  // 20 -> 10 -> 60

    // Test Case 6: Search for existing and non-existing elements
    list.searchElement(60);   // 60 found at index 2
    list.searchElement(320);  // 320 not found
}

// Call the function to run the test cases
runTestCases();



