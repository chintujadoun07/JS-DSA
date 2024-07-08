// work on both sorted and unsorted array
// time complixity O(n)

let a=[23,56,2,35,65,323,67,4]
let searchKey=35;
let flag=0;
for(let i=0;i<a.length;i++){
    if(a[i]===searchKey){
        flag=1;

    }
}

if(flag==1){
    console.log(`element is found`)
}else{
    console.log('element is not found')
}