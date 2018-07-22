const Case = require('../models/case');
 const errorHandler = require('./../../internals/config/errohandlerdb');

const caseList = (req, res) => {
  Case.find((err, cases) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    res.json(cases);
  }).select('name email updated created');
};

const caseAdd = (req, res) => {
  const cases = new Case(req.body);
  cases.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    res.status(200).json({
      message: 'cases added',
    });
  });
};
module.exports = {
  caseList,
  caseAdd,
};
