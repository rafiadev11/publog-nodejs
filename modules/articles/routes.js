let express = require("express");
const isAuth = require("../users/auth/isAuth");
let router = express.Router();
let displayArticles = require("./displayArticles");
let displayArticlesByTopic = require("./displayArticlesByTopic");
let createArticle = require("./createArticle");
let saveArticle = require("./saveArticle");
let displayArticle = require("./displayArticle");
let getArticles = require("./admin/getArticles");
let editArticle = require("./admin/editArticle");
let updateArticle = require("./admin/updateArticle");
let deleteArticle = require("./admin/deleteArticle");

router.get("/dashboard", isAuth, getArticles);
router.get("/edit/:id", isAuth, editArticle);
router.post("/update", isAuth, updateArticle);
router.get("/delete/:id", deleteArticle);

router.get("/", displayArticles);
router.get("/create", createArticle);
router.post("/store", saveArticle);
router.get("/topic/:slug", displayArticlesByTopic);
router.get("/:slug", displayArticle);
module.exports = router;
