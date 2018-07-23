const express = require('express');
const caseController = require('../controllers/case.controller');
const router = express.Router();

router.route('/').get(caseController.caseList);
router.route('/:id').get(caseController.caseDetail);
router.route('/:id').put(caseController.editCase);
router.route('/:id').delete(caseController.removeCase )

router.route('/').post(caseController.caseAdd);

module.exports = router;
