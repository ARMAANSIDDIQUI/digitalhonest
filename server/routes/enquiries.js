const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');
const auth = require('../middleware/auth');

// @route   POST api/enquiries
// @desc    Submit new enquiry via Public Contact Form
// @access  Public
router.post('/', async (req, res) => {
  try {
    const newEnquiry = new Enquiry(req.body);
    await newEnquiry.save();
    res.status(201).json({ msg: 'Enquiry submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to process lead.', details: err.message });
  }
});

module.exports = router;
