// recursion  print number without usin loop .
function printNumber(num){
    
    if(num<=10){
        console.log(num);
        printNumber(num+1); // recursive call with decremented number
    }
    else{
        console.log("Finished!");
    }
}
printNumber(1)

