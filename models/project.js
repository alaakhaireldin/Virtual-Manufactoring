const mongoose = require("mongoose"),
  projectSchema = new mongoose.Schema({
    projectTitle: { type: String, required: true },
    imageURL: { type: String, required: true },
    logDataURL: { type: String, required: true },
    unit: { type: Number, required: true },
  });

module.exports = mongoose.model("Project", projectSchema);
