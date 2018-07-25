const Patient = require('../models/patient');
const Medication = require('../models/medication');
const mongoose = require('mongoose')
const db = mongoose.connection
// const _ = require('lodash');
// const _ = require('lodash');
const errorHandler = require('./../../internals/config/errohandlerdb');
const formidable =require('formidable')
const fs = require('fs');

const uploadPicture = (req, res, next) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded"
      })
    }
    let patient = new Patient(fields)
    post.postedBy= req.profile
    if(files.photo){
      post.photo.data = fs.readFileSync(files.photo.path)
      post.photo.contentType = files.photo.type
    }
    patient.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(result)
    })
  })
}



//get all patients


const listPatients = (req, res, next) =>{
  Patient.find()
  .select("name email _id")
  .exec()
  .then(docs => {
    const response = {
      count: docs.length,
      patient: docs.map(doc => {
        return {
          name: doc.name,
          email: doc.email,
          _id: doc._id,
          request: {
            type: "GET",
            url: "http://localhost:3000/patient/" + doc._id
          }
        };
      })
    };
    res.status(200).json(response);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
}

//create patient
const createPatient = (req, res, next) => {
  const patient = new Patient({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  patient
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created new patient successfully",
        createdPatient: {
            name: result.name,
            email :result.email,
            password: result.password,
            _id: result._id,
            request: {
                type: 'GET',
                url: "http://localhost:3000/patient/" + result._id
            }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}
//get detail patient

const getDetailPatient = (req, res, next) => {
  const id = req.params.patientId;
  Patient.findById(id)
    .select('name email _id')
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
            patient: doc,
            request: {
                type: 'GET',
                url: 'http://localhost:3000/patient'
            }
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
}
//remove patient

const removePatient = (req, res, next) => {

  const id = req.params.patientId;
  Patient.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Patient deleted',
          request: {
              type: 'POST',
              url: 'http://localhost:3000/patient',
              body: { name: 'String', email: 'Email' }
          }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

//edit patient

const editPatient = (req,res,next) =>{
  const id = req.params.patientId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Patient.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Patient updated',
          request: {
              type: 'GET',
              url: 'http://localhost:3000/patient/' + id
          }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

//get patient record 

const patientRecord = (req,res,next) =>{
  Patient.findById(req.params.id, function (err, detail) {
    if (err) return next(err);
    res.json(detail);
  });
}
module.exports = {
  listPatients,
  createPatient,
  getDetailPatient,
  removePatient,
  editPatient,
  uploadPicture,
  patientRecord
};
