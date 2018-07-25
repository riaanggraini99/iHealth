const express = require('express');
const appointmentController = require('../controllers/appointment.controller');
const router = express.Router();
const checkAuth = require('../middlewares/auth');

router.route('/').get(appointmentController.appointmentList);

router.route('/').post(checkAuth, appointmentController.appoitmentAdd);

router.route('/:appointmentId').get(appointmentController.appointmentDetail);

router.route('/:appointmentId').put(appointmentController.editAppointment);

router.route('/:appointmentId').delete(appointmentController.removeAppointment)

module.exports = router;
