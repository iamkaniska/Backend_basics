// console.log("Hello World");


const express = require('express') // here 'express' is a package, which is now in the express variable
const app = express() // by default express is here as a variable but it works like a function, and now all the data of this express in into the app which is also a varibale

//MIDDLEWARE
app.use(function(req,res,next){ // this is we use for middleware, its like in between request and route, if you send a request it does not go to the server directly, its visit first in the middleware then go the the route
    console.log("Helo Dosto");
    next();
})

app.use(function(req,res,next){ 
    console.log("Helo Dosto this middleWare ");
    next();
})  


//its like ROUTE
app.get('/', function (req, res) {    // '/' --> is a route, function(req,res) is a requestHandler
  res.send('HelooooooO') // now we send a response so we use res.send( the data which you want to send)
})

app.get('/next', function (req, res) { 
    res.send('I am Kaniska, i am from west bengal') 
  })


//Error Handleing
app.get('/profile', function (req, res,next) { 
    return next(new Error("Sorry !! this is an Error")) // this error shown in the terminal
  })

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!') // and this error is shown in the app or website
  })

app.listen(3000)