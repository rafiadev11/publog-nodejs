const mongoose = require("mongoose");
const connection = require("./../../../db/connection").connect();
const topicSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    collection: "topics",
  }
);
module.exports = {
  getModel: () => {
    return connection.model("TopicModel", topicSchema);
  },
};
