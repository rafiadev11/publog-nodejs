const articleDB = require("./model/article");
const Article = articleDB.getModel();
module.exports = async (req, res, next) => {
  let articles = await Article.find({ topics: req.params.slug }).lean();
  let results = articles.map((article) => {
    return {
      id: article._id,
      title: article.title,
      slug: article.slug,
      description: article.description,
      image: article.image,
      content: article.content,
      createdAt: article.createdAt,
    };
  });
  res.render("articles/byTopic", {
    articles: results,
  });
};
