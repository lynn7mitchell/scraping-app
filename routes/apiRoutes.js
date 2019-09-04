var express = require("express");
var mongoose = require("mongoose");


// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");


db = require("../models")
// console.log(db)

module.exports = function (app) {

  // Scrape
  app.get("/api/scrape", function (req, res) {

    // Delete everythin in the article collection
    db.Article.deleteMany({}).catch(function (err) {
      console.log(err)
    });

    // Scrape the website polygon.com/news using cheerio.js package
    axios.get("https://www.polygon.com/news").then(function (response) {
      var $ = cheerio.load(response.data);

      // Grab all h2 elements with the class listed
      $(".c-entry-box--compact__body h2").each(function (i, element) {
        var result = {};

        // Take result above and create a document to go to the database
        result.headline = $(this)
          .children("a")
          .text();
        result.URL = $(this)
          .children("a")
          .attr("href");;

        // Create article using schema from the article.js file in the models folder
        db.Article.create(result)
          .then(function (dbArticle) {
            // Add article to database
            res.json(dbArticle)
          })
          .catch(function (err) {
            // If an error occurred, log it
            console.log(err);
          });
      });
    });

    // Route for getting all Articles from the db
    app.get("/api/articles", function (req, res) {
      // Grab every document in the Articles collection
      db.Article.find()
        .then(function (dbArticle) {
          console.log("khdfjkasf", dbArticle)
          // If we were able to successfully find Articles, send them back to the client
          res.json(dbArticle);
        })
        .catch(function (err) {
          // If an error occurred, send it to the client
          res.json(err);
        });
    });

    // use app.post to post article to database when saved is clicked
    app.post("/api/saved", function(req, res){
      
    })

  })
}