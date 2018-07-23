const Patient = require('../models/patient');
const mongoose = require('mongoose')
const db = mongoose.connection
// const _ = require('lodash');
// const _ = require('lodash');
const errorHandler = require('./../../internals/config/errohandlerdb');
// const formidable = require('formidable');
// const fs = require('fs');
//var mongoose = require('mongoose');

//get all patients
const listPatients = (req, res) => {
  Patient.find((err, patients) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    res.json(patients);
    console.log(patients)
  }).select('name email updated created');
};


//create patient
const createPatient = (req, res, next) => {
  const patient = new Patient(req.body);

  console.log(patient)
  patient.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }

    console.log(patient);
    res.status(200).json({
      message: 'Successfully signed up!',
    });
    console.log(result);
  });
};

//get detail patient

const getDetailPatient = (req, res, next) => {
  Patient.findById(req.params.id, function (err, detail) {
    if (err) return next(err);
    res.json(detail);
  });

}

//remove patient

const removePatient = (req, res, next) => {

  Patient.findByIdAndRemove(req.params.id, req.body, function (err, patient) {
    if (err) return next(err);
    res.json(patient);
  });
}

//edit patient

const editPatient = (req,res,next) =>{
    Patient.findByIdAndUpdate(req.params.id, req.body, function (err, patient) {
      if (err) return next(err);
      res.json(patient);
    });
}

module.exports = {
  listPatients,
  createPatient,
  getDetailPatient,
  removePatient,
  editPatient
};
