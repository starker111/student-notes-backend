const express = require('express');
const router = express.Router();
const Note = require('../models/Note'); // adjust path if different

router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    console.error('Error fetching notes:', err.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
