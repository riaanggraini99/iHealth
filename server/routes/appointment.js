const express = require('express');
const appointmentController = require('../controllers/appointment.controller');
const router = express.Router();

router.route('/').get(appointmentController.appointmentList);

router.route('/').post(appointmentController.appoitmentAdd);

router.route('/:appointmentId').get(appointmentController.appointmentDetail);

router.route('/:appointmentId').put(appointmentController.editAppointment);

router.route('/:appointmentId').delete(appointmentController.removeAppointment)

module.exports = router;
