var express = require("express");
var mongoose = require("mongoose");

var logger = require("morgan");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");



var PORT = 3000;

require("./models/Article.js")

// Initialize Express
var app = express();

// Configure middleware
app.use(logger("dev"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

db = require("./models")

// Connect to the Mongo DB
mongoose.connect("mongodb://heroku_2qd6pnnl:bk47dscj8t88j7r9bndn6dlc5k@ds257507.mlab.com:57507/heroku_2qd6pnnl", { useNewUrlParser: true });

// Routes
require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  