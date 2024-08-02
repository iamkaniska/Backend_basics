/* filter is like Map, it make copy of an array, means in a array if we use map or filter it will return into an another array or store into an another array. this is the only similarity MAP and FILTER else both are different */

// This is an Example Why we use Filter
let arr=[1,2,3,4,5];
let Ans=arr.filter((val)=>{
    if(val>3) return true;
    else false;
})
console.log(Ans);