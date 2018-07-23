const Case = require('../models/case');
 const errorHandler = require('./../../internals/config/errohandlerdb');

 //get all cases
const caseList = (req, res,next) => {
  Case.find(function (err, cases) {
    if (err) return next(err);
    res.json(cases);
  });
}

//create new cases
const caseAdd = (req, res) => {
  const cases = new Case(req.body);
  console.log(req.body)
  cases.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    console.log(result)
    res.status(200).json({
      message: 'cases added',
    });
  });
};

//get case detail
const caseDetail = (req, res,next) =>{
  Case.findById(req.params.id, function (err, detail) {
    if (err) return next(err);
    res.json(detail);
  });

} 
//edit case

const editCase = (req,res,next) =>{
  Case.findByIdAndUpdate(req.params.id, req.body, function (err, cases) {
    if (err) return next(err);
    res.json(cases);
  });
}
//remove case

const removeCase = (req, res, next) => {

  Case.findByIdAndRemove(req.params.id, req.body, function (err, cases) {
    if (err) return next(err);
    res.json(cases);
  });
}


module.exports = {
  caseList,
  caseAdd,
  caseDetail,
  editCase,
  removeCase 
};
