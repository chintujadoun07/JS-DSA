//delete the element in array
let arr=[323,44,32,44,433]
function deleteArray(arr,index){

arr.splice(index,1)

return arr

}
console.log(arr)

deleteArray(arr,2)
console.log(arr)