let a=['gorav', 'eesu','raja','kana']// find the largest element in givan array

function longString(a){//
let store="";
for(let i=0;i<a.length;i++){
    let current=a[i];
    if(store.length<current.length){
        store=current;
    }
    return store;

}
}
longString(a);
console.log(longString(a));