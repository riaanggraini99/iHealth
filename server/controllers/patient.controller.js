const Patient = require('../models/patient');
const mongoose =require('mongoose')
const db = mongoose.connection
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

const createPatient = (req, res, next) => {
  const patient = new Patient();

  name = req.body.name;
  email = req.body.email;
  hashed_password = req.body.hashed_password;
  ID = req.body.ID;
  address = req.body.address;
  KK_number = req.body.KK_number;
  occupation = req.body.occupation;
  photo = req.body.photo;

  

  db.collection('patient').insert( (err, result) => {
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




// const createPatient = (req, res ) => {
//   Patient.create(req.body, (err, patient) => {
//     if (err) res.json({error: err})
//     res.json({
//       message: 'This is create',
//       patient,
//     });
//   });
// }
// const createPatient = (req, res) => {
//   // Create a new instance of the Beer model
//   var patient = new Patient();

//   // Set the beer properties that came from the POST data
//   patient.name = req.body.name;
//   patient.email = req.body.email;
//   patient.hashed_password = req.body.hashed_password;
//   patient.ID = req.body.ID;
//   patient.address = req.body.address;
//   patient.KK_number = req.body.KK_number;
//   patient.occupation = req.body.occupation;
//   patient.photo = req.body.photo;

//   // Save the beer and check for errors
//   patient.save(function(err) {
//     if (err)
//       res.send(err);

//     res.json({ message: 'Beer added to the locker!', data: patient });
//   });
// }

// const createPatient = (req,res) => {
//   console.log(req.body);
//   const newPatient = new Patient(req.body);
//   newPatient.save((err,patient) => {
//     if(err){
//     return res.json({'success':false,'message':'Some Error'});
//     }

//     return res.json({'success':true,'message':'Todo added successfully',patient});
//   })
// }

module.exports = {
  listPatients,
  createPatient,
};
