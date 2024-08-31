console.clear();
class Node{
    constructor(data){
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

class DoubleCircularLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertFront(data){
        let newNode = new Node(data);
        if(this.head === null){
            newNode.next = newNode;
            newNode.prev = newNode;
            this.head = newNode;
        }
        else{
            let temp = this.head;
            while(temp.next !== this.head){
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.next = this.head;
            this.head.prev = newNode;
            newNode.prev = temp;
            this.head = newNode;
        }
        this.size++;
    }

    insertLast(data){
        let newNode = new Node(data);
        if(this.isEmpty()){
            this.head = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        }
        else{
            let temp = this.head;
            while(temp.next !== this.head){
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.prev = temp;
            newNode.next = this.head;
            this.head.prev = newNode;
        }
        this.size++;
    }

    deleteFirst(){
        if(this.isEmpty()){
            // console.log("List is Empty");
            return;
        }
        if(this.head.next === this.head){
            this.head = null;
        }
        else{
            this.head.prev.next = this.head.next;
            this.head.next.prev = this.head.prev;
            this.head = this.head.next;
        }
        this.size--;
    }

    deleteLast(){
        if(this.isEmpty()){
            // console.log("List is Empty");
            return;
        }
        if(this.head.next === this.head){
            this.head = null;
        }
        else{
            this.head.prev.prev.next = this.head;
            this.head.prev = this.head.prev.prev;
        }
        this.size--;
    }
    displayList(){
        if(this.isEmpty()){
            // console.log("List is Empty");
            return;
        }
        let temp = this.head;
        let result = "";
        do{
            result += "<-" +  temp.data + "->";
            temp = temp.next;
        }
        while(temp !== this.head);
        console.log(result);
    }

    isEmpty(){
        return this.head === null;
    }
}


