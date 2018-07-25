const express = require('express');
const patientController = require('../controllers/patient.controller');
const router = express.Router();
const patientAuth = require('../controllers/auth.patient')

router.route('/').get(patientController.listPatients);


//router.route('/patient_record/:id').get(patientController.recordPatients);

router.route('/').post(patientController.createPatient);

router.route('/').post(patientController.uploadPicture);

router.route('/login').post(patientAuth.signin);

router.route('/:patientId').get(patientController.getDetailPatient);

router.route('/:patientId').delete(patientController.removePatient);

router.route('/:patientId').patch(patientController.editPatient)

module.exports = router;
