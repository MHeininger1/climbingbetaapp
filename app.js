const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var firebase = require("firebase");
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
var config = {
    SECRET
  };
  firebase.initializeApp(config);

app.get("/login", function(req, res){
    res.render("login");
});
app.post("/login", function(req, res){
    let username = req.body.username;
    let password = req.body.password;
});

app.get("/climb", function(req, res){
    res.render("climb");
});

app.get("/userpage", function(req, res){
    res.render("userpage");
});



app.listen(3000, function(){
    console.log("server running");
});