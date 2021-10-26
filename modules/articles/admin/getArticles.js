const articleDB = require("../model/article");
const Article = articleDB.getModel();
module.exports = async (req, res, next) => {
  let articles = await Article.find({}).sort({ createdAt: -1 });
  let results = articles.map((article) => {
    return {
      id: article._id,
      title: article.title,
      slug: article.slug,
      approved: article.approved,
    };
  });
  res.render("admin/dashboard", {
    articles: results,
  });
};
