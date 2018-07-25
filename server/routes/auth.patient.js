const express = require('express');
const auth_patient = require('../controllers/auth.patient');
const checkAuth = require('../middlewares/auth');

const router = express.Router();

router.post("/signup", auth_patient.signup);

router.post("/signin", auth_patient.signin);

module.exports = router;
