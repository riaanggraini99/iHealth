const Doctor = require('../models/doctor');
// const _ = require('lodash');
const errorHandler = require('./../../internals/config/errohandlerdb');
// const formidable = require('formidable');
// const fs = require('fs');

 //get all cases
const doctorList = (req, res,next) => {
  Doctor.find(function (err, cases) {
    if (err) return next(err);
    res.json(cases);
  });
}

//create new docter
const doctorAdd = (req, res) => {
  const doctor = new Doctor(req.body);
  console.log(req.body)
  doctor.save((err, doctor) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    console.log(doctor)
    res.status(200).json({
      message: 'docter added',
    });
  });
};

//get doctor detail
const doctorDetail = (req, res,next) =>{
  Doctor.findById(req.params.id, function (err, doctor) {
    if (err) return next(err);
    res.json(doctor);
  });

} 
//edit case

const editDoctor = (req,res,next) =>{
  Doctor.findByIdAndUpdate(req.params.id, req.body, function (err, doctor) {
    if (err) return next(err);
    res.json(doctor);
  });
}
//remove case

const removeDoctor = (req, res, next) => {

  Doctor.findByIdAndRemove(req.params.id, req.body, function (err,doctor) {
    if (err) return next(err);
    res.json(doctor);
  });
}


module.exports = {
  doctorList,
  doctorAdd,
  doctorDetail,
  editDoctor,
  removeDoctor 
};
