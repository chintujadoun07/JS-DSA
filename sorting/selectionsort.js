let arr=[4,3,5,6,2,5,1]
function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[min]>arr[j]){
                min=j;
            }

        }
        if(min!=i){
           let temp=arr[i];
           arr[i]=arr[min];
           arr[min]=temp;

        }
    }
}


function swap(a,b){
    let a=null;
    let b=null;
    let temp;
    

}


selectionSort(arr)
console.log(arr)