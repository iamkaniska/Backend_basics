//writeFile (to create a file and add some data)

const { log } = require('console');
const fs = require('fs');

/* fs.writeFile("hey.txt","Hey heloo kaise ho",function(err){ // first was the file name,2nd was the data inside the file 3rd one the callback function
    if(err) console.error(err);
    else console.log("done");
}) */ 
//appendFile (to update the massage in the file)
/* const fs = require('fs');
fs.appendFile("hey.txt"," or batao kya hal chal",function(err){ // first was the file name,2nd was the data inside the file 3rd one the callback function
    if(err) console.error("err");
    else console.log("done");
}) */


//to rename to file we use fs.rename    
/* fs.rename("Hey.txt","Heloo.txt",function(err){
    if(err){
        console.log("err");
    }
    else{
        console.log("done");
    }
}) */

//to copy the file data into another file
// fs.copyFile("Heloo.txt","./copy/chacha.txt",function(err){
//     if(err){
//         console.error("err");
//     }
//     else{
//         console.log("done");
//     }
// })

//to delete data in a file ---->

// we created another txt file to show
/* fs.writeFile("happy.txt","Hey heloo kaise ho",function(err){ 
    if(err) console.error(err);
    else console.log("done");
}) */


// to delete we use fs.unlink
// fs.unlink("Happy.txt",function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("done");
//     }
// })






