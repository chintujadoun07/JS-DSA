let a=[35,100,90,35,68]
let b=[10,20,50,35,21]
let c=[a,b]

function resulStudent(student){
    totalmarks=student.reduce((intial,sum)=>{
        return intial+sum
    },0)  
    percent=((totalmarks)/(student.length*100)*100)
    result=percent>=33?"pass":'fail';
    return {result,percent,totalmarks}
}
c.forEach((val)=>{
    final=resulStudent(val)
    console.log(final.result)
    
})

const test=[1,2,3,4,5]
const res=test.reduce((acc,curr)=>{
    if(curr %2===0){
        return   acc+curr
    }
return acc
    

},0)
console.log(res)