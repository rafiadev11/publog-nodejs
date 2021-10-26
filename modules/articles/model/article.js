const mongoose = require("mongoose");
const connection = require("./../../../db/connection").connect();
const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    approved: {
      type: Boolean,
      default: false,
    },
    authorName: {
      type: String,
      required: true,
    },
    topics: {
      type: Array,
      required: true,
    },
  },
  {
    collection: "articles",
  }
);
module.exports = {
  getModel: () => {
    return connection.model("ArticleModel", articleSchema);
  },
};
