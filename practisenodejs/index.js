const express = require('express');
const path = require('path');

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files: CSS, JS, Images
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.render("index");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
