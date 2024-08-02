/* form handing and working with forms */

const express = require('express');
const app =express();

// this is blob, it is specially use for create a unreadable stream in hexadecimal forms, like when you login your id and passwoed in a page it will change into a unreadly stream so that no one can read, after that it will go to the backend server and change into a normal password.
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("Pixel");
})
app.listen(3000);