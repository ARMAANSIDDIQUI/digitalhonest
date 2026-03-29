const mongoose = require('mongoose');

const EnquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  businessType: { type: String },
  serviceInterested: { type: String, required: true },
  budget: { type: String },
  message: { type: String },
  status: { type: String, enum: ['pending', 'completed', 'active', 'fake'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.models.Enquiry || mongoose.model('Enquiry', EnquirySchema);
