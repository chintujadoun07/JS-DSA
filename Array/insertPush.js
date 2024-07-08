// insert element using push function

let arr=[2,45,64,345,34,34,74]

function insertElement(arr,index,element){
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        if(i==index){
            newArr.push(element)
        }
        newArr.push(arr[i])
    }
    return newArr

}
let newArr=insertElement(arr,2,24)
console.log(newArr)
