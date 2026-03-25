const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Main DB Connection
const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/digitalhonest';
    await mongoose.connect(uri);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    // Don't exit process in dev, let server run for UI testing
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
};

connectDB();

// Routes
app.use('/api/admin', require('./routes/admin'));
app.use('/api/enquiries', require('./routes/enquiries'));

// Define Routes for API endpoints in one file for simplicity
app.get('/api/health', (req, res) => res.json({ status: 'ok', message: 'Digital Honest API Running' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
