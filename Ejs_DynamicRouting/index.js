const express=require("express");
const app=express();
const path=require("path"); // we can use path property

// setting up persers for forms
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public'))); // css,js,images and tailwind css properties we can use
app.set('view engine', 'ejs'); // we can render ejs pages

app.get("/",(req,res)=>{ 
    res.render("index.ejs"); // baisc route page which render the index.ejs
});


//this ":username" here ':' is used to make this code dynamic routing

app.get("/kaniska/:username",(req,res)=>{
    res.send(`Welcome, ${req.params.username} `); // this re.paras is used to make this code dynamic routing
});

app.listen(4000,()=>{
    console.log("its running");});


// console.log(__dirname+'/public');
