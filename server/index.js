const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Handle CORS for Vercel Serverless Functions
const allowedOrigins = ['https://digitalhonest.in', 'http://localhost:5173', 'http://localhost:3000'];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  next();
});

app.use(express.json());

// DB Connection Management
let cachedDb = null;

const connectDB = async () => {
  if (cachedDb && mongoose.connection.readyState === 1) {
    return cachedDb;
  }
  
  try {
    const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/digitalhonest';
    if (uri.includes('localhost') && process.env.NODE_ENV === 'production') {
      console.warn('WARNING: Running in production but MONGO_URI is missing or pointing to localhost!');
    }
    
    await mongoose.connect(uri, {
      bufferCommands: false, // Disable Mongoose buffering to see errors faster
    });
    
    cachedDb = mongoose.connection;
    console.log('MongoDB Connected successfully.');
    return cachedDb;
  } catch (err) {
    console.error('MongoDB connection CRITICAL error:', err.message);
    if (process.env.NODE_ENV === 'production') {
      // On Vercel, we can't exit, but we can throw to let the function fail
      throw err;
    }
  }
};

// Initial connection for cold start
connectDB().catch(err => console.error('Initial DB connection failed:', err.message));

// Middleware to ensure DB is connected before any request
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    res.status(503).json({ 
      error: 'Service Unavailable: Database Connection Failed', 
      details: err.message 
    });
  }
});

// Routes
app.use('/api/admin', require('./routes/admin'));
app.use('/api/enquiries', require('./routes/enquiries'));

// Define Routes for API endpoints in one file for simplicity
app.get('/', (req, res) => res.json({ message: 'Digital Honest API is Running! Brand Sab Jagah!', status: 'active' }));
app.get('/api/health', (req, res) => res.json({ status: 'ok', message: 'Digital Honest API Running' }));

// Conditional listen for local dev
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

// Export for Vercel
module.exports = app;
