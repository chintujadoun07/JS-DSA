 // best way to reverse arrray 
// time complixity O(N)- space complixity o(1)

 let a=[2,3,4,143,4]
 let start=0;
 let end=a.length-1;
while(start<end){
  let temp=a[start]
  a[start]=a[end]
  a[end]=temp;
  start++;
  end--;

 }
 console.log(a)
 