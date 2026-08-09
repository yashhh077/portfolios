const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://yashmahulkar15_db_user:3V0QfZh8bkwfb1Dl@cluster0.mr2x8bw.mongodb.net/";

const CONNECTDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to Mongodb");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = CONNECTDB;
