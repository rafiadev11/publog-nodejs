const articleDB = require("./model/article");
const Article = articleDB.getModel();
const topicDB = require("./../topics/model/topic");
const Topic = topicDB.getModel();
module.exports = async (req, res, next) => {
  let articles = await Article.find({ approved: true })
    .sort({ createdAt: -1 })
    .lean();
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
  let topics = await Topic.find({});
  let topicsResult = topics.map((topic) => {
    return {
      name: topic.name,
    };
  });
  res.render("index", {
    articles: results,
    topics: topicsResult,
  });
};
