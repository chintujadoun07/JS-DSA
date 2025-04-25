let arr=[22,55,12,87,2,5,12]
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



selectionSort(arr)
console.log(arr)