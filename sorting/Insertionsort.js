let a=[5,2,54,34,1,17,21]

for(let j=1;j<a.length;j++){
    let key=a[j];
    let i=j-1;
    while(i>=0 && key<a[i])
    {
        a[i+1]=a[i]
        i--;

    }
    a[i+1]=key;
    

}
console.log(a)