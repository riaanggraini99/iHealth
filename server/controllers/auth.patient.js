
const Patient = require('../models/patient');
const jwt = require('jsonwebtoken');
const mongoose =require('mongoose')
const bcrypt = require("bcrypt");



const signup = (req, res, next) => {
  Patient.find({ email: req.body.email })
    .exec()
    .then(patient => {
      if (patient.length >= 1) {
        return res.status(409).json({
          message: "Mail exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const patient = new Patient({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash
            });
            patient
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "Patient created"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
};

const signin = (req, res, next) => {
  Patient.find({ email: req.body.email })
    .exec()
    .then(patient => {
      if (patient.length < 1) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      bcrypt.compare(req.body.password, patient[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: patient[0].email,
              patientId: patient[0]._id
            },
            process.env.JWT_KEY || "YOUR_secret_key",
            {
              expiresIn: "1h"
            }
          );
          return res.status(200).json({
            message: "Auth successful",
            token: token
          });
        }
        res.status(401).json({
          message: "Auth failed"
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

module.exports = {
  signin,
  signup,
}
