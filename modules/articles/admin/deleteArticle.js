const articleDB = require("../model/article");
const Article = articleDB.getModel();
module.exports = async (req, res, next) => {
  let article = await Article.findById(req.params.id);
  if (!article) {
    res.render("404");
  } else {
    await article.remove();
    res.redirect("/dashboard");
  }
};
