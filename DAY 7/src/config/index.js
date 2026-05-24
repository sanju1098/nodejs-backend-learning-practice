require("dotenv").config();

const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV,
  appName: process.env.APP_NAME,
};

module.exports = config;
