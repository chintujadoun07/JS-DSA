class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class List{
    constructor(data){
        let newNode=new Node(data)
        this.head=newNode;
        this.tail=newNode;
        this.length=1;
    }
    push(data){
        let newNode=new Node(data)
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
            
        }
        else{
            this.tail.next=newNode;
            this.tail=newNode;

        }
        this.length++;
        return this;
    }
}
let l1=new List(32)
l1.push(332)
l1.push(17)
l1.push(101)
console.log(l1)