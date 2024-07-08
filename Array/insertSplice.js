let arr=[2,23,4,3,1,34]

function insertElement(arr,index,element){
 arr.splice(index,0,element)
return arr
}
 newArr=insertElement(arr, 3 ,18)
console.log(`${newArr}`)