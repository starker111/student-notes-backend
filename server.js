const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// Serve static files (HTML/CSS/JS) from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const authRoutes = require('./routes/auth');
const notesRoutes = require('./routes/notes');
app.use('/api', authRoutes);
app.use('/api/notes', notesRoutes);

// Default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Error:", err));

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
