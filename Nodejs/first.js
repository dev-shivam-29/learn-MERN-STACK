// const path = require("path");
// alert("hello shivam");
// var arr = [1,2,3,4,5];
// arr.forEach(function(val){
//     console.log(val +" hello");
// });
// var newarr = arr.map(function(val){
//     return val*3;

// const { request } = require("express");

    
// })
// console.log(newarr);
// var ans=arr.filter(function(val){
//     if(val >3){return true;}
//     else return false;
// })
// console.log(ans);
// find
// var arr =[1,15,3,4,5,6,7,8,9];
// var ans =arr.find(function(val){
//     if (val ===2) return val;
// })
// console.log(ans);
// var obj ={
//     name: "shivam",
//     age:22,
//     kauchbhi: true,

// }
// function abcd (){
//     return "hello shivam";
// }
// var ans  = abcd();
//line by line code chale isey kahte hai synchronous
//jo bhi code async nature ka ho, usey side stack mein bhej do and agle code ko chalao jo bhi syns nature ka ho ,jab bhi saara syn code chal jaaye, tab check karo ki asyns code complete hua ya nahi and agar wo complete hua ho to usey main stack mein laao and chala0
// async function abcd(){
//    var blob= await fetch(`https://randomuser.me/api`)
// }
// abcd();
//working with node
// const fs = require("fs");
// fs.unlink("hello.shivam",function(err){
//    if(err) console.error(err);
//    else console.log("done");
// const http = require("http");

// const server = http.createServer(function (req, res) {
//     res.end("hello shivam welcome to my first server ");
// });

// server.listen(5500, () => {
//     console.log("Server running on port 5500");
// });
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// const express =require('express');
// const app = express();

// app.use(function(req, res, next){
//   console.log('middleware chala');
//   next();
  
// });
// app.use(function(req, res, next){
//   console.log('middleware chala phir se ek baar ');
//   next();
  
// });

// app. get("/",function(req,res){
//   res.send("hello shivam  tum mera bhai ho ");
// })

// app.get("/about",function(req,res,next){
//    return next(new Error("not implemented")) 
// });
// // error handling middle ware 
// app.use((err, req, res, next)=>{
//   console.error(err.stack)
//   res.status(500).send('something broke ye fronten hai ')
// })

// app.listen(3000, function() {
//   console.log("Server running on port 3000");
// });
// // session cookies

//setting up parsers for form 
// const express = require('express');
// const app =express();
// // nicha jo likha hai in do foam se hm apna foam ko use kar paayenge
// app.use(express.json());
// app.use (express.urlencoded({extended: true }));
// //public static files 
// app.use(express.static(Path.join(_dirname,'public')));

// //isma jo line hai backend aap kah rahe ho ki kya render karega to ye view page ko render karta hai 
// app.set('view engine', 'ejs');

// app.get("/",function(req, res) {
//   res.render("index");
// });
 
// app.listen(3000,function() {
//   console.log("listening on");
// })
