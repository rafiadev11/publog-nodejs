const slugify = require("slugify");
const articleDB = require("../model/article");
const Article = articleDB.getModel();
module.exports = async (req, res, next) => {
  let article = await Article.findById(req.body.id);
  article.title = req.body.title;
  article.slug = slugify(req.body.title);
  article.image = req.body.image;
  article.description = req.body.description;
  article.content = req.body.content;
  article.topics = req.body["topics[]"];
  article.authorName = req.body.authorName;
  article.approved = req.body.approved;
  await article.save();
  res.redirect("/dashboard");
};
