let express = require("express");
let router = express.Router();

let getArticles = require("./getArticles");
let getArticle = require("./getArticle");

router.get("/api/articles", getArticles);
router.get("/api/article/:slug", getArticle);

module.exports = router;
