const express = require('express');
const appointmentController = require('../controllers/appointment.controller');
const router = express.Router();

router.route('/').get(appointmentController.appointmentList);

router.route('/').post(appointmentController.appoitmentAdd);

router.route('/:id').get(appointmentController.appointmentDetail);

router.route('/:id').put(appointmentController.editAppointment)

module.exports = router;
