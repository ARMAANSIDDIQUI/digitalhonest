const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const Enquiry = require('../models/Enquiry');
const auth = require('../middleware/auth');


// @route   POST api/admin/login
// @desc    Authenticate admin & get token
// @access  Public
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please provide both email and password' });
  }

  try {
    let admin = await Admin.findOne({ email });

    // Auto-create default admin if none exists (for easy local setup)
    if (!admin && email === 'digitalhonest@gmail.com' && password === 'admin123') {
      admin = new Admin({ email, password });
      await admin.save();
    } else if (!admin) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const payload = { admin: { id: admin.id } };

    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET || 'secret123',
      { expiresIn: '12h' }
    );
    res.json({ token });
  } catch (err) {
    res.status(500).json({ 
      msg: 'Server Error', 
      error: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack 
    });
  }
});

// @route   GET api/admin/enquiries
// @desc    Get all enquiries
// @access  Private (Admin)
router.get('/enquiries', auth, async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// @route   PATCH api/admin/enquiries/:id
// @desc    Update enquiry status
// @access  Private (Admin)
router.patch('/enquiries/:id', auth, async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { $set: { status: req.body.status } },
      { new: true }
    );
    res.json(enquiry);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// @route   DELETE api/admin/enquiries/:id
// @desc    Delete an enquiry
// @access  Private (Admin)
router.delete('/enquiries/:id', auth, async (req, res) => {
  try {
    await Enquiry.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Enquiry deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
