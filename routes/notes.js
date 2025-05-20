// routes/notes.js
const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// GET all notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a new note (with optional subtopics)
router.post('/', async (req, res) => {
  const { title, subject, content, subtopics } = req.body;

  try {
    const newNote = new Note({
      title,
      subject,
      content,
      subtopics: subtopics || [] // ✅ Optional subtopics array
    });

    await newNote.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(400).json({ error: 'Invalid note data' });
  }
});

module.exports = router;
