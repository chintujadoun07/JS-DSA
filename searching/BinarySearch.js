// work only sorted array
// o(log n)
let a=[1,2,3,4,5,6,7,8]
let searchKey=7;


function BinarySearch(a,searchKey){
    let start=0;
    let end=a.length -1;
    while(start<=end){

        let mid = Math.floor((start + end) / 2); // Use Math.floor for integer division
        if(a[mid]===searchKey)
        {
            return mid;
        }else if(a[mid]>searchKey){
            end=mid-1;

        }else{
            start=mid+1;
        }

    }

    return -1;
}

let result=BinarySearch(a,searchKey);
console.log(result)