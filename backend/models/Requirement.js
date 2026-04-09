const mongoose = require("mongoose");

const reqSchema = new mongoose.Schema({
  title: String,
  skills: [String],
  experience: String,
  status: { type: String, default: "Open" }
});

module.exports = mongoose.model("Requirement", reqSchema);