const mongoose = require("mongoose");
const config = require("./index");

async function connectDB() {
  try {
    await mongoose.connect(config.dbUrl);

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("Database Connection Failed");

    console.log(error.message);

    process.exit(1);
  }
}

module.exports = connectDB;
