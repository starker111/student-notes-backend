const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 10000;

// ✅ CORS Setup (allow frontend origin or all for local testing)
app.use(cors({
  origin: ['http://localhost:5500', 'https://your-frontend-url.com'], // add frontend URL here
  credentials: true
}));

// ✅ Body parser
app.use(express.json());

// ✅ Serve static frontend files from /public
app.use(express.static(path.join(__dirname, 'public')));

// ✅ API Routes
const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

const notesRoutes = require('./routes/notes');
app.use('/api/notes', notesRoutes);

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1); // Stop app if DB fails
  });

// ✅ Fallback for frontend routes (important for SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
