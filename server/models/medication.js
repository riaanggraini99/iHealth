const mongoose = require('mongoose');
const crypto = require('crypto');
mongoose.createConnection('mongodb://localhost/itHealth');

mongoose.models = {};
mongoose.modelSchemas = {}

//User Schema
var MedicationSchema 	=  new mongoose.Schema({
	name : {
		type 	: String,
		index	: true
	},
	dosage 	: String, 
	warning	: String,
    pregnancy: String,
    note : String,

});


module.exports =  mongoose.model('Medication', MedicationSchema);

