const express = require('express');
const medicationController = require('../controllers/medication.controller');
const router = express.Router();

router.route('/').get(medicationController.medicationList);
router.route('/:medicationId').get(medicationController.DetailMedication);
router.route('/').post(medicationController.medicationAdd);
router.route('/:medicationId').post(medicationController.medicationAdd);
router.route('/:medicationId').delete(medicationController.deleteMedication);
router.route('/:id').put(medicationController.editMedication)
module.exports = router;
