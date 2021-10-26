const slugify = require("slugify");
const articleDB = require("./model/article");
const Article = articleDB.getModel();
module.exports = async (req, res, next) => {
  let article = new Article({
    title: req.body.title,
    slug: slugify(req.body.title),
    image: req.body.image,
    description: req.body.description,
    content: req.body.content,
    topics: req.body["topics[]"],
    authorName: req.body.authorName,
    approved: false,
  });
  await article.save();
  res.redirect("/");
};
