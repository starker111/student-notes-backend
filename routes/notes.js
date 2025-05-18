const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// GET all notes
router.get('/', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// POST a new note
router.post('/', async (req, res) => {
  const { title, content, subject } = req.body;
  const newNote = new Note({ title, content, subject });
  await newNote.save();
  res.status(201).json(newNote);
});

module.exports = router;
