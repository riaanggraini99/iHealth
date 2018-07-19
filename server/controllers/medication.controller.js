const Medication = require('../models/medication');
//const errorHandler = require('./../../internals/config/errohandlerdb');


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

const medicationAdd = (req, res, next) => {
  const medication = new Medication(req.body)
  medication.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.status(200).json({
      message: "Successfully signed up!"
    })
  })
}
module.exports = {
  medicationList,
  medicationAdd,
};
