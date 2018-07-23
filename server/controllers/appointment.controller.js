const Appointment = require('../models/appointment');
 const errorHandler = require('./../../internals/config/errohandlerdb');

 //get all appointment
const appointmentList = (req, res,next) => {
  Appointment.find(function (err, appointment) {
    if (err) return next(err);
    res.json(appointment);
  });
}

//create new appoitments
const appoitmentAdd = (req, res) => {
  const appointments = new Appointment(req.body);
  console.log(req.body)
  appointments.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    console.log(result)
    res.status(200).json({
      message: 'appointment added',
    });
  });
};

//get case detail
const appointmentDetail = (req, res,next) =>{
  Appointment.findById(req.params.id, function (err, detail) {
    if (err) return next(err);
    res.json(detail);
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

  Appointment.findByIdAndRemove(req.params.id, req.body, function (err, appointment) {
    if (err) return next(err);
    res.json(appointment);
  });
}


module.exports = {
  appointmentList,
  appoitmentAdd,
  appointmentDetail,
  editAppointment,
  removeAppointment
};
