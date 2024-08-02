// We use map using function to check how map works
let num=[1,2,3,4,5];
let newArr=num.map(function(val){
    return val*5;
})
console.log(newArr);


// We use Map using Arrow Function to check how map works
let num1=[1,2,3,4,5];
let newArr1=num1.map((val1)=>{
    return val1+10;
})
console.log(newArr1);