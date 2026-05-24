require("dotenv").config();

const config = {
  port: process.env.PORT || 5000,

  nodeEnv: process.env.NODE_ENV,

  appName: process.env.APP_NAME,

  dbUrl: process.env.DB_URL,
};

module.exports = config;
