const Medication = require('../models/medication');
const Case = require('../models/case')
const mongoose = require('mongoose')

//get all medications
const medicationList = (req, res) => {
  Medication.find()
  .select("name usage dosage note price _id")

  .exec()
  .then(docs => {
    res.status(200).json({
      count: docs.length,
      medication: docs.map(doc => {
        return {
          _id: doc._id,
          name: doc.name,
          usage: doc.usage,
          dosage: doc.dosage,
          note: doc.note,
          price: doc.price,

          request: {
            type: "GET",
            url: "http://localhost:3000/medication" + doc._id
          }
        };
      })
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
}


//get detail medication
const DetailMedication = (req, res, next) => {
  const id = req.params.medicationId;
  Medication.findById(id)
    .select('name usage dosage warning note price _id')
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
            medication: doc,
            request: {
                type: 'GET',
                url: 'http://localhost:3000/medication'
            }
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
}

//create new medications
const medicationAdd = (req, res, next) => {
  const medication = new Medication({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    usage: req.body.usage,
    dosage: req.body.dosage,
    note:req.body.note,
    price: req.body.price
  });
  medication
  .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created new medication successfully",
        createdMedication: {
          name: result.name,
          usage: result.usage,
          dosage: result.dosage,
          note:result.note,
          price:result.price,
          _id: result._id,
            request: {
                type: 'GET',
                url: "http://localhost:3000/medication/" + result._id
            }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });

    // const RemoveMedication = (req, res, next) => {

    //   const id = req.params.medicationId;
    //   Medication.remove({ _id: id })
    //     .exec()
    //     .then(result => {
    //       res.status(200).json({
    //           message: 'Medication deleted',
    //           request: {
    //               type: 'POST',
    //               url: 'http://localhost:3000/medication',
    //               body: { name: 'String' }
    //           }
    //       });
    //     })
    //     .catch(err => {
    //       console.log(err);
    //       res.status(500).json({
    //         error: err
    //       });
    //     });
    // }
    

}
module.exports = {
  medicationList,
  medicationAdd,
  // RemoveMedication,
  DetailMedication,
};
