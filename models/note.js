const mongoose = require("mongoose");

const roughSchema = {
  title: String,
  content: String,
};

const Note = mongoose.model("Note", roughSchema);

module.exports = Note;
