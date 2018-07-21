const mongoose = require('mongoose');
const crypto = require('crypto');
mongoose.createConnection('mongodb://localhost/itHealth');

mongoose.models = {};
mongoose.modelSchemas = {};

// User Schema
const MedicationSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
  },
  dosage: {
    type: String,
    index: true,
  },
  warning:{
    type: String,
    index: true,
  },
  pregnancy:{
    type: String,
     index: true,
  },
  note:{
    type: String,
    index: true,
  }
});

module.exports = mongoose.model('Medication', MedicationSchema);
