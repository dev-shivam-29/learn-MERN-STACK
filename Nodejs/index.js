// const express =require('express');
// const path = require('path');
// console.log(path.join(__dirname,'/public'));

// //setting up parsers for form
// const express =require('express');
// const app = express();
// //jo niche in do line se hm foam ko use kar sakte hai 
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// //niche jo line hai iska martlab sari static file means images viaur jo bhi sab hai wo public me dekha sab hai 

// app.use(express.static(path.join(_dirname,'public')));
// // setupview ejs as a view engine 
// app.set('view engine', 'ejs');
// //ab hm route set kar raha hai
// app.get("/",function(req,res){

//    res.render("indexE");
// });

// //ab hm server chalane ke liye 
// app.listen(3000,function() {
//     console.log("server chal raha hai");
// })
const express =require('express');
const path = require('path');
const app = express();
console.log(path.join(__dirname,'/public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');


app.get("/",function(req, res) {
    res.render("index");
});
app.get("/profile/:username",function(req, res) {
    res.send(req.params.username);
});

app.listen(3000,function() {
    console.log("its running ");
})
