const express = require('express');
const patientController = require('../controllers/patient.controller');
const router = express.Router();

router.route('/').get(patientController.listPatients);

router.route('/').post(patientController.createPatient);

module.exports = router;
