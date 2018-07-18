// console.log('hello im here');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/itHealth');

// const db = mongoose.connection;
const { Schema } = mongoose.Schema;

mongoose.models = {};
mongoose.modelSchemas = {};

// car Schema
const PatientSchema = new Schema({
  name: {
    type: String,
    index: true,
  },
  phone: {
    type: String,
    required: true,
  },
  specialist: {
    type: String,
  },
  adress: String,
  email: String,
  // weekend_rate	: 	 Number,
  // weekly_rate		: 	 Number,
  // monthly_rate	:	 Number,
  imagePath: String,
});

module.exports = mongoose.model('Patient', PatientSchema);
