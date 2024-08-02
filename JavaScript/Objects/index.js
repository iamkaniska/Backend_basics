  
{} // this is an empty object.. 

// this is an Object..
let obj={
    name:"Kaniska",
    rollNo:2210991741,
    Class:"G-19"

}
//to access this object we use object name
// console.log(obj);




// to access any specific object we use object name and then use '.' and then the specific details
// console.log(obj.Class);
// we can modificed object details
obj.Class="G-20";
console.log(obj.Class);

// we can frezz the object value so that we can't modified
Object.freeze(obj);
console.log(obj)
obj.Class="G-21"; // so now this updated value of Class G21 doesnot change in the updated value bez we frezz the data
console.log(obj.Class);

