const Appointment = require('../models/appointment');
const Patient = require('../models/patient');
 const errorHandler = require('./../../internals/config/errohandlerdb');
 const mongoose = require('mongoose')

 //get all appointment
const appointmentList = (req, res,next) => {
  Appointment.find()
  .select("date _id")
.populate("patient", "name")
  .exec()
  .then(docs => {
    res.status(200).json({
      count: docs.length,
      appointments: docs.map(doc => {
        return {
          _id: doc._id,
          patient: doc.patient,
          date: doc.date,
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
      appointment: req.body.appointmentId
    });
    return appointment.save();
  })
  .then(result => {
    console.log(result);
    res.status(201).json({
      message: "appointment stored",
      createdAppointment: {
        _id: result._id,
        patient: result.patient,
        email: result.email,
        name: result.name,
      },
      request: {
        type: "GET",
        url: "http://localhost:3000/appoimtment/" + result._id
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
        url: "http://localhost:3000/appointment/" 
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
        url: "http://localhost:3000/orders",
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
