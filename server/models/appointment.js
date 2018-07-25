const mongoose = require('mongoose');
const crypto = require('crypto');
mongoose.connect('mongodb://localhost/itHealth');

mongoose.models = {};
mongoose.modelSchemas = {};

const AppoitmentSchema = new mongoose.Schema({

  
  _id: mongoose.Schema.Types.ObjectId,

    date: {
    type: Date,
    index: true
  },
  place : {
    type: String,
    index: true,
    
  },
  reason:{
    type: String,
    index: true,
  },
  note: {
    type: String,
    index: true,
  },
  status:{
    type :Boolean,
    index : true,
  },
  createdBy:  { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true,
index : true,
}
});

module.exports = mongoose.model('Appointment', AppoitmentSchema, 'appointments');
