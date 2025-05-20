// models/Note.js
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  content: { type: String, required: true },
  subtopics: [String] // ✅ Enable subtopics support
});

module.exports = mongoose.model('Note', noteSchema);
