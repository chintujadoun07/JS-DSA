let a=[1,3,4,5,17,101,23,2]
function arrayDelation(a,postion){
    let index=postion-1
    let n=a.length-1
    for(let i=index;i<n;i++){
        a[i]=a[i+1]
    }


    console.log(a)

}
arrayDelation(a,3)