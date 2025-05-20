const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// ✅ Only ONE import of auth route
const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

const notesRoutes = require('./routes/notes');
app.use('/api/notes', notesRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ MongoDB Error:", err));

app.get('/', (req, res) => {
  res.send("Study Notes API is working!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
