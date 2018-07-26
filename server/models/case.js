const mongoose = require('mongoose');
const crypto = require('crypto');
mongoose.connect('mongodb://localhost/itHealth');


const CaseSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    index: true,
  },
  symtons: {
    type: String,
    index: true,
  },
  handling: {
    type: String,
    index: true,
  },
  medication: {
    type: mongoose.Schema.ObjectId, ref: 'Medication',
    type: String,
    index: true,
  },
  havedBy: {
    type: mongoose.Schema.ObjectId, ref: 'Patient',
    type: String,
    index: true,
  date: { 
    type: Date,
    default: Date.now, 
    index: true },
  }
});

module.exports = mongoose.model('Case', CaseSchema, 'cases');
