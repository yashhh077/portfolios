// database/admin.js
const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // hash store karenge
});

module.exports = mongoose.model("Admin", AdminSchema);
