let a=[23,4,5,40,23,40,21,40,17,101,40]
let value=40
 function findElement(a,value){
    let count =0;
    for(let i=0;i<a.length;i++){
        if(a[i]===value){
            count++;
            
        }
    }
    if(count!==0){
        console.log(`value = ${value} is present ,repeatition=${count}`)
    }
    else{
        console.log(`value is not present`)
    }
 }
 findElement(a,value)