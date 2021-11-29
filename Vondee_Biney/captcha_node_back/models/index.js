const mongoose = require("mongoose");
const { DB } = require("../config");

mongoose.connect(DB, {
  useNewUrlParser: true
});

const connectToDatabase = () => {
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    console.log("database connected");
  });
};

module.exports = connectToDatabase();
