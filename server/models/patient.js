const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/itHealth');

mongoose.models = {};
mongoose.modelSchemas = {};

const PatientSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    index: true,
  
  },
  email: {
    type: String, 
    required: true, 
    unique: true, 
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    index: true
  },
 password: {
    type: String,
    index: true,
    required: true, 
 
  },
  salt: String,
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
    index: true
  },
  ID: {
    type: String,
    index: true
  },
  address: {
    type: String,
    index: true
  },
  KK_number: {
    type: String,
    index: true
  },
  Blood_type: {
    type: String,
    index: true
  },
  occupation: {
    type: String,
    index: true
  },
  disease:{
    type :String,
    index:true
},
med:{type: mongoose.Schema.ObjectId, ref: 'Medication',
index:true},
  photo: {
    // /index: true,
    data: Buffer,
    contentType: String,
    
  },
});

const Patient = mongoose.model('Patient', PatientSchema,'patients' );
const login = new Patient({ email: 'admin@admin.com', password: 'admin123' });


module.exports = mongoose.model('Patient', PatientSchema,'patients' );
