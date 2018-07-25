const Case = require('../models/case');
const Patient = require('../models/patient'); //const errorHandler = require('./../../internals/config/errohandlerdb');
 const mongoose = require('mongoose')
 //get all cases
const caseList = (req, res,next) => {
  Case.find()
  .select("name symtons handling medication date _id")
  .exec()
  .then(docs => {
    const response = {
      count: docs.length,
      case: docs.map(doc => {
        return {
          name: doc.name,
          symtons: doc.symtons,
          handling: doc.handling,
          medication : doc.medication,
          date: doc.date,
          _id: doc._id,
          request: {
            type: "GET",
            url: "http://localhost:3000/case/" + doc._id
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

//create new cases
const caseAdd = (req, res) => {
  Patient.findById(req.body.patientId)
  .then(patient => {
    if (!patient) {
      return res.status(404).json({
        message: "Patient not found"
      });
    }
    const cases = new Case({
      _id: mongoose.Types.ObjectId(),
      name: req.body.name,
      symtons: req.body.symtons,
      handling  :req.body.handling,
      medication : req.body.medication,
      patient: req.body.patientId
    });
    return cases.save();
  })
  .then(result => {
    console.log(result);
    res.status(201).json({
      message: "case stored",
      createdMedicRecord: {
        _id: result._id,
        name: result.name,
        symtons: result.symtons,
        handling  :result.handling,
        medication : result.medication,
        date : result.date,
        patient: result.patientId
      },
      request: {
        type: "GET",
        url: "http://localhost:3000/case/" + result._id
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


//get case detail
const caseDetail = (req, res,next) =>{
  Case.findById(req.params.caseId)
  .exec()
  .then(cases => {
    if (!cases) {
      return res.status(404).json({
        message: "Medic record not found"
      });
    }
    res.status(200).json({
      cases: cases,
      request: {
        type: "GET",
        url: "http://localhost:3000/case" 
      }
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
}
//remove case

const removeCase = (req, res, next) => {

  Case.remove({ _id: req.params.caseId })
  .exec()
  .then(result => {
    res.status(200).json({
      message: "Medic Record deleted",
      request: {
        type: "POST",
        url: "http://localhost:3000/case",
        body: { caseId: "ID", date: "date" }
      }
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
}


module.exports = {
  caseList,
  caseAdd,
  caseDetail,
  
  removeCase 
};
