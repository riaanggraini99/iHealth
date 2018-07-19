const express = require('express');
const medicationController = require('../controllers/medication.controller');
const router = express.Router();

router.route('/').get(medicationController.medicationList);

router.route('/').post(medicationController.medicationAdd);

module.exports = router;
