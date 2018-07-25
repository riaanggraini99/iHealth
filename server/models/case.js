const mongoose = require('mongoose');
const crypto = require('crypto');
mongoose.connect('mongodb://localhost/itHealth');

// mongoose.models = {};
// mongoose.modelSchemas = {};

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
  prohibition: {
    type: String,
    index: true,
  },
  havedBy: {type: mongoose.Schema.ObjectId, ref: 'Patient',
  type: String,
  index: true,
}
});

module.exports = mongoose.model('Case', CaseSchema, 'cases');
