const articleDB = require("./model/article");
const Article = articleDB.getModel();
module.exports = async (req, res, next) => {
  let article = await Article.findOne({ slug: req.params.slug }).lean();
  if (!article) {
    res.render("404");
  } else {
    res.render("articles/show", {
      article,
    });
  }
};
