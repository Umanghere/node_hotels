// const file = require("./note.js")
// var _ = require('lodash');

// // console.log("two");
// var a=5;
// var b=file.age
// // console.log(a+b);

// var fn = file.addNumber(b+5, 5)
// console.log(fn);
// console.log("hello");

// var data=["helo", "jelo", "helo", 1, 4,4,4,4, 2, 3, 2, 1, "jehlo"]
// var filteredData = _.uniq(data)
// console.log(filteredData);

// var json = '{"name":"Umang", "age": 20}'
// var objectJSON = JSON.parse(json)
// console.log(objectJSON.age);

// const express = require('express')
// const app = express()

// app.get("/", function(req, res){
//     res.send("Ram ram laddarr")
// })
// app.get("/idli", function(re, rq){
//     rq.send("Illee")
// })
// app.get("/hola", function(re, rq){
//     rq.send("hola amigo kaise ho theek ho")
// })
// app.get("/hola", function(re, rq){
//     rq.send("hola amigo kaise ho theek ho")
// })

// app.listen(3000,()=>console.log("Server is running at portnumber 3000"))
// console.log("hello");

const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./db");

const PORT = process.env.PORT || 3500;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("namaste");
});


//Import the router file - personRoutes
const personRoutes = require('./routes/personRoutes');
// Use the routes
app.use(express.json());
app.use('/person', personRoutes);


//Import the router file - menuItemRoutes
const menuItemRoutes = require('./routes/menuItemRoutes');
// Use the routes
app.use('/menuItem', menuItemRoutes);




// app.get("/a", function(req, res){
//     res.send("This is A");
// })
// app.get("/b", function(req, res){
//     res.send("This is B");
// })
// app.get("/c", function(req, res){
//     res.send("This is C");
// })

app.listen(PORT, () => {
  console.log("Listening on port 3500");
});
