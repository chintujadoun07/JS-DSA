let str='gorav ,thakur'
let name=str.split('')
console.log(name)
function  reverseString(name){
    let start=0;
    let end=name.length-1;
    while(start<end){
        let temp=name[start];
        name[start]=name[end];
        name[end]=temp;
        start++;
        end--;
    }
    console.log(name)

}

reverseString(name)