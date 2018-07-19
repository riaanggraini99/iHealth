const express = require('express');
const doctorController = require('../controllers/doctor.controller');
const router = express.Router();

router.route('/').get(doctorController.doctorID);

router.route('/').post(doctorController.doctorAdd);

module.exports = router;
