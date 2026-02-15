const { mongoose } = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  messageText: { type: String },
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", contactSchema);
