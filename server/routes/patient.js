const express = require('express');
const patientController = require('../controllers/patient.controller');
const router = express.Router();
const patientAuth = require('../controllers/auth.patient')

router.route('/').get(patientController.listPatients);

router.route('/').post(patientController.createPatient);

router.route('/login').post(patientAuth.signin);

router.route('/:id').get(patientController.getDetailPatient);

router.route('/:id').delete(patientController.removePatient);

router.route('/:id').put(patientController.editPatient)

module.exports = router;
