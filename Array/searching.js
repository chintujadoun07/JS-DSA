let arr=[23,21,43,21,45,34]
let isFound=false ;
let searchKey=4;
for(let i=0;i<arr.length;i++){
    if(arr[i]==searchKey){
        isFound=true;
        console.log(`number ${searchKey} if found index ${i}`)
        break;
    }
}
/*if(isFound==false){
    console.log( ` nuber is = ${searchKey} not found`)
} */
if(!isFound==false){
    console.log( ` nuber is = ${searchKey} not found`)
} 