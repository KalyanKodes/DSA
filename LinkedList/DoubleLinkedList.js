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
            // console.log("List is Empty")
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
            // console.log("List is Empty");
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
            // console.log("List is Empty");
            return;
        }

        if(index < 0 || index > this.size){
            console.log("Index Out Of Range");
            return;
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
            this.size--;
        }
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


