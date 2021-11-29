const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { PORT } = require("./config");

const connectToDatabase = require("./models/index");
const { Load, Validate } = require("./controller/index");

// function for populatinf db use it only once
const pop = require("./utilities/prepopulate");

app.use(bodyParser.json());
app.use(cors());

app.get("/load", Load);

app.post("/validate", Validate);

app.get("/loaddb", (req, res) => {
  pop();
  res.send("done");
});
app.listen(PORT, () => {
  console.log("listening to port " + PORT);
});
