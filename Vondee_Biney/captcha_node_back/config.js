require("dotenv").config();

const config = {
  PORT: process.env.PORT || 8080,
  DB: process.env.DB || "mongodb://localhost/captcha"
};

module.exports = config;
