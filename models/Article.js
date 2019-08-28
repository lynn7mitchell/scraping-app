const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Article = new Schema({
    headline: String,
    summary: String,
    URL: String
})

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
