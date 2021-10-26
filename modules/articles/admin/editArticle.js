const articleDB = require("../model/article");
const Article = articleDB.getModel();
const topicDB = require("../../topics/model/topic");
const Topic = topicDB.getModel();
module.exports = async (req, res, next) => {
  let article = await Article.findById(req.params.id).lean();
  let topics = await Topic.find({});
  let topicsResult = topics.map((topic) => {
    return {
      name: topic.name,
      selected: !!article.topics.includes(topic.name),
    };
  });
  res.render("admin/edit", {
    article,
    topics: topicsResult,
  });
};
