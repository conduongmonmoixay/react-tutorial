var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var parser = bodyParser.urlencoded({extended : false});
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);

app.get("/", function(req, res){
  res.render("Home");
});

var arr = ["Hi", "Hello", "Android"]

app.post('/getNotes', function(req, res){
  res.send(arr);
});

app.post('/add', parser, function(req, res){
  var note = req.body.note;
  arr.push(note);
});
