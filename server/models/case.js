const mongoose = require('mongoose');
const crypto = require('crypto');
mongoose.createConnection('mongodb://localhost/itHealth');

mongoose.models = {};
mongoose.modelSchemas = {};

const CaseSchema = new mongoose.Schema({
  name: {
    type: String,
    index :true,
    //required: 'Name is required',
  },
  symtons: {
    type: String,

  },
  handling: {
    type: String,

  },
  prohibition: {
    type: String,
  },

});



module.exports = mongoose.model('Case', CaseSchema);
