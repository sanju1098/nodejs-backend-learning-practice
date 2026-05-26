require("dotenv").config();

const config = {
  port: process.env.PORT || 5000,

  dbUrl: process.env.DB_URL,

  jwtSecret: process.env.JWT_SECRET,
};

module.exports = config;
