const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    headline: String,
    URL: String
})

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
