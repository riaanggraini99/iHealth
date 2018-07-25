const mongoose = require('mongoose');
const crypto = require('crypto');
mongoose.connect('mongodb://localhost/itHealth');

mongoose.models = {};
mongoose.modelSchemas = {};

// User Schema
const MedicationSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    index: true,
  },
  for_case:{
    type: String,
    index: true
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
  },
  price:{
    type: Number,
     index: true,
  },

});

module.exports = mongoose.model('Medication', MedicationSchema);
