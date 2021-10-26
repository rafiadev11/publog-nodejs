const mongoose = require("mongoose");
const credentials = require("./credentials.js");
const dbUrl =
  "mongodb+srv://" +
  credentials.username +
  ":" +
  credentials.password +
  "@" +
  credentials.host +
  "/" +
  credentials.database;
let connection = null;
module.exports = {
  connect: () => {
    if (connection == null) {
      console.log("Creating connection...");
      connection = mongoose.createConnection(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }
    return connection;
  },
};
