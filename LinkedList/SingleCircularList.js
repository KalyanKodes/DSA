class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class SingleCircularLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertFront(data){
        let newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
            newNode.next = newNode;
        }   
        else{   
            let temp = this.head;
            while(temp.next !== this.head){
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
        // this.displayList();
    }

    insertLast(data){
        let newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
            newNode.next = newNode;
        }
        else{
            let temp = this.head;
            while(temp.next !== this.head){
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.next = this.head;
        }
        this.size++;
        // this.displayList();
    }


    deleteFront(){
        if(this.isEmpty()){
            // console.log("List is Empty");
            return;
        }
        if(this.head.next === this.head){
            this.head = null;
        }
        else{
            let temp = this.head;
            while(temp.next !== this.head){
                temp = temp.next;
            }
            temp.next = this.head.next;
            this.head = this.head.next;
        }
        this.size--;
        // this.displayList();
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
            let prevNode = this.head;
            let curNode = this.head;
            while(curNode.next !== this.head){
                prevNode = curNode;
                curNode = curNode.next;
            }
            prevNode.next = this.head;
        }
        this.size--;
        // this.displayList();
    }

    displayList(){
        if(this.isEmpty()){
            // console.log("List is Empty");
            return;
        }
        let temp = this.head;
        let result = "";
        do{
            result += temp.data + " -> ";
            temp = temp.next;
        }while(temp != this.head)
        console.log(result)
    }
    isEmpty(){
        return this.head === null;
    }
}

