const Appointment = require('../models/appointment');
const Patient = require('../models/patient');
 const errorHandler = require('./../../internals/config/errohandlerdb');
 const mongoose = require('mongoose')

 //get all appointment
const appointmentList = (req, res,next) => {
  Appointment.find()
  .select("date place reason note _id")

  .exec()
  .then(docs => {
    res.status(200).json({
      count: docs.length,
      appointments: docs.map(doc => {
        return {
          _id: doc._id,
          date: doc.date,
          place: doc.place,
          reason: doc.reason,
          note: doc.note,
          createdBy: doc.createdBy,

          request: {
            type: "GET",
            url: "http://localhost:3000/appointment" + doc._id
          }
        };
      })
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
}

//create new appoitments
const appoitmentAdd = (req, res) => {
  Patient.findById(req.body.patientId)
  .then(patient => {
    if (!patient) {
      return res.status(404).json({
        message: "Patient not found"
      });
    }
    const appointment = new Appointment({
      _id: mongoose.Types.ObjectId(),
      createdBy : req.body.patientId,
      date: req.body.date,
      reason: req.body.reason,
      note  :req.body.note,
      patient: req.body.patientId
    });
    return appointment.save();
  })
  .then(result => {
    console.log(result);
    res.status(201).json({
      message: "appointment stored",
      createdAppointment: {
        _id: result._id,
      createdBy : result.patientId,
      date: result.date,
      reason: result.reason,
      note  :req.result.note,
      patient: req.body.patientId,
      },
      request: {
        type: "GET",
        url: "http://localhost:3000/appointment/" + result._id
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
const appointmentDetail = (req, res,next) =>{
  Appointment.findById(req.params.appointmentId)
  .exec()
  .then(appointment => {
    if (!appointment) {
      return res.status(404).json({
        message: "Appointment not found"
      });
    }
    res.status(200).json({
      appointment: appointment,
      request: {
        type: "GET",
        url: "http://localhost:3000/appointment" 
      }
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
}

//edit case

const editAppointment = (req,res,next) =>{
  Appointment.findByIdAndUpdate(req.params.id, req.body, function (err, appointment) {
    if (err) return next(err);
    res.json(appointment);
  });
}

//remove case

const removeAppointment = (req, res, next) => {

  Appointment.remove({ _id: req.params.appointmentId })
  .exec()
  .then(result => {
    res.status(200).json({
      message: "Appointment deleted",
      request: {
        type: "POST",
        url: "http://localhost:3000/appointment",
        body: { appointmentId: "ID", date: "date", reason:"String" }
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
  appointmentList,
  appoitmentAdd,
  appointmentDetail,
  editAppointment,
  removeAppointment
};
