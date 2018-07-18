const express = require('express');
const patientController = require('../controllers/patient.controller');
const router = express.Router();

router.route('/').get(patientController.listPatients);

module.exports = router;
