class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class list{
    constructor(data){
        const newNode=new Node(data);
        this.head=newNode;
        this.tail=this.head;
        this.length=1;


    }
    push(data){
        const newNode=new Node(data);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;

        }
        else{
            this.tail.next=newNode;
            this.tail=newNode;

        }
        this.length++
        return this

    }

    pop(){
        let temp=this.head;

        if(!this.head) return undefined;
        else if(!this.head.next){
            this.head=null;
            this.tail=null;
            this.length--;
        }
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

        shift(){
            let temp=this.head;

            if(!this.head) return undefined;
            else if(!this.head.next){
                this.head=null;
                this.tail=null;
                this.length--;
            }else{
                this.head=temp.next;
                temp=null;
                this.length--;
                
            }
        }

        unshift(data){
            const newNode=new Node(data);
            if(!this.head){
                this.head=newNode
                this.tail=this.head;
            }else{
                newNode.next=this.head.next;
                this.head=newNode;
               
            }
            this.length++
            return this;

        }

        find(key){
            let  temp=this.head;
            let flag=0;
            // while(temp!=null) ya last val node ko check nahi kar ga ya ak kam check kraga
            while(temp.next!=null){
                if(key==temp.data){
                   flag=1;
                  break;
                }
                temp=temp.next;

            }
            if(flag==1){
                console.log("key is found")
            }
            else{
                console.log("key is not found")

            }

        }

    
}
const bank=new list(17)
bank.push(53)
bank.push(43)
bank.push(73)
bank.push(23)


console.log(bank)
bank.shift()
console.log(bank)
bank.unshift(43)
console.log(bank)
bank.find(573)




