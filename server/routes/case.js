const express = require('express');
const caseController = require('../controllers/case.controller');
const router = express.Router();

router.route('/').get(caseController.caseList);
router.route('/:caseId').get(caseController.caseDetail);

router.route('/:caseId').delete(caseController.removeCase )

router.route('/').post(caseController.caseAdd);

module.exports = router;
