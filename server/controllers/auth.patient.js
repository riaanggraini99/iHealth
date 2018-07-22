const express = require('express');
const cookieParser = 'cookie-parser';
const Patient = require('../models/patient');
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const config = require('../../internals/config/config');



const signin = (req, res) => {
  Patient.findOne({
    "email": req.body.email
  }, (err, patient) => {

    if (err || !patient)
      return res.status('401').json({
        error: "User not found"
      })

    if (!patient.authenticate(req.body.password)) {
      return res.status('401').send({
        error: "Email and password don't match."
      })
    }

    const token = jwt.sign({
      _id: patient._id
    }, config.jwtSecret)

    res.cookie("t", token, {
      expire: new Date() + 9999
    })

    return res.json({
      token,
      patient: {_id: patient._id, name: patient.name, email: patient.email}
    })

  })
}

const signout = (req, res) => {
  res.clearCookie("t")
  return res.status('200').json({
    message: "signed out"
  })
}

const requireSignin = expressJwt({
  secret: config.jwtSecret,
  patientProperty: 'auth'
})

const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id
  if (!(authorized)) {
    return res.status('403').json({
      error: "User is not authorized"
    })
  }
  next()
}

module.exports = {
  signin,
  signout,
  requireSignin,
  hasAuthorization
}
