class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
}

class SinglyLinkedList{
    constructor(val){
        const newNode=new Node(val)
        this.head=newNode
        this.tail=this.head
        this.length=1
    }
    push(val){
        const newNode=new Node(val)
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }
        else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.length++
        return this
    }

    pop(){
        let temp=this.head;
        if(!this.head) return undefined;
        else{

            while(temp.next!=this.tail){
                temp=temp.next;
    
            }
            this.tail=temp;
            this.tail.next=null;
            this.length--;
            return this;
            
        }
        }

}
let first =new SinglyLinkedList(29)
first.push(25);
console.log(first)