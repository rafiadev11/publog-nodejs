const topicDB = require("./../topics/model/topic");
const Topic = topicDB.getModel();
module.exports = async (req, res, next) => {
  let topics = await Topic.find({});
  let topicsResult = topics.map((topic) => {
    return {
      name: topic.name,
    };
  });
  res.render("articles/create", {
    topics: topicsResult,
  });
};
