let arr=[23,1,2,3,5,6,543,23]

function bubble(arr){
    for(var i=0;i<arr.length-1;i++){
        for(var j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                var temp;
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }

    }
}
console.log(arr)
bubble(arr)
console.log(arr)
