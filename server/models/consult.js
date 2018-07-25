const mongoose = require('mongoose');
const crypto = require('crypto');
mongoose.connect('mongodb://localhost/itHealth');

// mongoose.models = {};
// mongoose.modelSchemas = {};

const CaseSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
    date: {
        type: Date,
        index: true
  },
  biaya_konsul: {
    type: Number,
    index: true,
    
  },
  biaya_tambahan: {
    type:Number ,
    index: true,
  },
  total: {
    type: Number,
    index: true,
  },
});

module.exports = mongoose.model('Case', CaseSchema, 'cases');
