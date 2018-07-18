const Patient = require('../models/patient');
// const _ = require('lodash');
const errorHandler = require('./../../internals/config/errohandlerdb');
// const formidable = require('formidable');
// const fs = require('fs');

const listPatients = (req, res) => {
  Patient.find((err, patients) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    res.json(patients);
  }).select('name email updated created');
};

module.exports = {
  listPatients,
};
