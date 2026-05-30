const mongoose = require("mongoose");
const config = require("./index");

async function connectDB() {
  try {
    await mongoose.connect(config.dbUrl);

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
