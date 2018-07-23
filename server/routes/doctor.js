const express = require('express');
const doctorController = require('../controllers/doctor.controller');
const router = express.Router();

router.route('/').get(doctorController.doctorList);

router.route('/').post(doctorController.doctorAdd);

router.route('/:id').get(doctorController.doctorDetail);

router.route('/:id').put(doctorController.editDoctor);

router.route('/:id').delete(doctorController.removeDoctor);


module.exports = router;
