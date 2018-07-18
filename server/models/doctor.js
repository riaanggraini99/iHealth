// console.log('hello im here2');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/itHealth');

// const db = mongoose.connection;
const { Schema } = mongoose.Schema;

mongoose.models = {};
mongoose.modelSchemas = {};

// car Schema
const DoctorSchema = new Schema({
  name: {
    type: String,
    index: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
  },
  adress: String,
  // email: String,
  // weekend_rate	: 	 Number,
  // weekly_rate		: 	 Number,
  // monthly_rate	:	 Number,
  imagePath: String,
});
// console.log(doc.validateSync());

module.exports = mongoose.model('Doctor', DoctorSchema);
