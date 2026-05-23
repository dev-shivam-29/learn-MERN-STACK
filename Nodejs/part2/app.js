const express =require ('express');
const app = express();

app.get("/", function(req,res) {
    res.cookie("username", "shivam");
    res.send("done");
}) 

app.listen(3000);