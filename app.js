var express = require("express");
require("./model/con_mongoose");

var userModel = require("./model/user");
var app = express();
app.set("view engine" , "ejs");
app.set("views","view");
app.use(express.static("public"));

app.get("/",function (req,res) {
    res.render("login.ejs")
})

app.get("/register",function (req,res) {
    res.render("register.ejs");
});
app.get("/login",function (req,res) {
    res.render("login.ejs")
})

app.get("/register",function (req,res) {
    var username = req.query.username;
    var password = req.query.password;
    var qpw = req.query.qpw;
    var sex = req.query.sex;
    var address = req.query.address;

    if(password==qpw){
        userModel.create({
            username:username,
            password:password,
            sex:sex,
            address:address
        },function (err) {
            if(err){
                res.render("register.ejs")
            }else{
                res.redirect("/login");
            }
        })
    }

});

app.get("/login",function (req,res) {
   var username = req.query.username;
   var password = req.query.password;
   // res.send("xxxxx")

});
app.listen(3000,function () {
    console.log("OK");
});