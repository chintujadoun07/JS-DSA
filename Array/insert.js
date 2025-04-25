let a=[1,2,3,45,6]
function insert(a,index,value){

    for (let i = a.length; i > index; i--) {
        a[i] = a[i - 1];
    }
 a[index] = value;
}
insert(a,2,35)
console.log(a)