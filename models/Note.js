const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: String,
  subject: String,
  content: String
});

module.exports = mongoose.model('Note', NoteSchema);