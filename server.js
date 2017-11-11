//Declaring dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
//Set up express App

var app = express();
var PORT = 3000;

//Set up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

//Starting server to begin listening 
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

var reservation = [

{

	name: "Jane Smith",
	phone number: "555-555-5555",
	email: "ghewje@gmail.com",
	unique id: "0807115"

}];

var waitlist = [

{

	name: "Jane Smith",
	phone number: "555-555-5555",
	email: "ghewje@gmail.com",
	unique id: "0807115"

}



}];


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "main.html"));
});

app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
   
});
app.get("/waitlist", function(req, res) {
res.json(waitlist);
    
});
// Get all characters
app.get("/table", function(req, res) {
	  res.sendFile(path.join(__dirname, "table.html"));
 
});
