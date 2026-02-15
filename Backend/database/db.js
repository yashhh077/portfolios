const mongoose = require("mongoose");

const MONGODB_URI = "mongodb://localhost:27017/yashPortfolio";

const CONNECTDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to Mongodb");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = CONNECTDB;
