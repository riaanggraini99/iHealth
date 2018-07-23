const Medication = require('../models/medication');
const errorHandler = require('./../../internals/config/errohandlerdb');

//get all medications
const medicationList = (req, res) => {
  Medication.find((err, medication) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    res.json(medication);
  }).select('name email updated created');
};

//create new medications
const medicationAdd = (req, res) => {
  const medication = new Medication(req.body);
  medication.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    res.status(200).json({
      message: 'Successfully added',
    });
  });
};
module.exports = {
  medicationList,
  medicationAdd,
};
