const Doctor = require('../models/doctor');
// const _ = require('lodash');
const errorHandler = require('./../../internals/config/errohandlerdb');
// const formidable = require('formidable');
// const fs = require('fs');

const doctorID = (req, res) => {
  Doctor.find((err, doctor) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    res.json(doctor);
  }).select('name email updated created');
};

const doctorAdd = (req, res, next) => {
  const doctor = new Doctor(req.body)
  doctor.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }console.log(doctor)
    res.status(200).json({
      message: "Successfully signed up!"
    })
  })
}
module.exports = {
  doctorID,
  doctorAdd,
};
