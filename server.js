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