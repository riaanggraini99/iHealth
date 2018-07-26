const mongoose = require('mongoose');

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
    type: mongoose.Schema.ObjectId,
    ref: 'Medication',
    index: true,
  },
  havedBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'Patient',
    index: true,
    date: {
      type: Date,
      default: Date.now,
      index: true,
    },
  },
});

module.exports = mongoose.model('Case', CaseSchema, 'cases');
