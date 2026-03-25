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
    res.status(500).send('Server Error');
  }
});

// @route   GET api/admin/enquiries
// @desc    Get all enquiries
// @access  Private (Admin)
router.get('/admin/enquiries', auth, async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route   PATCH api/admin/enquiries/:id
// @desc    Update enquiry status
// @access  Private (Admin)
router.patch('/admin/enquiries/:id', auth, async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { $set: { status: req.body.status } },
      { new: true }
    );
    res.json(enquiry);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/admin/enquiries/:id
// @desc    Delete an enquiry
// @access  Private (Admin)
router.delete('/admin/enquiries/:id', auth, async (req, res) => {
  try {
    await Enquiry.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Enquiry deleted' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
