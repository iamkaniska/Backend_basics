const express=require("express");
const app=express();

// setting up persers for forms
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get("/",(req,res)=>{ 
    res.render("index.ejs");
})
app.listen(3000,()=>{
    console.log("its running");});


