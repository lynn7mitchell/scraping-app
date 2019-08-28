var express = require("express");
var mongoose = require("mongoose");


// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");


db = require("../models")
console.log(db)

module.exports = function (app) {
app.get("/scrape", function(req, res) {
    axios.get("https://www.polygon.com/news").then(function(response) {
      var $ = cheerio.load(response.data);
    $(".c-entry-box--compact__body h2").each(function(i, element) {
        var result = {};
      result.title = $(this)
        .children("a")
        .text();
      result.URL = $(this)
        .children("a")
        .attr("href");
    ;
    db.Article.create(result)
    .then(function(dbArticle) {
      // View the added result in the console
      console.log(dbArticle);
    })
    .catch(function(err) {
      // If an error occurred, log it
      console.log(err);
    });
    
  
      // Send a message to the client
    //   res.send("Scrape Complete");
    });
  });
  
  // Route for getting all Articles from the db
  app.get("/articles", function(req, res) {
    // Grab every document in the Articles collection
    db.Article.find({})
      .then(function(dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        res.json(dbArticle);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });
 
    })}
