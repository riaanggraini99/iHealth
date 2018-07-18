const mongoose = require('mongoose').set('debug', true);
// const promiseLibrary = require('bluebird');

mongoose.Promise = require('bluebird');
mongoose
  .connect(
    'mongodb://localhost/itHealth',
    { useMongoClient: true },
  )
  .then(() => console.log('connection succesful'))
  .catch(err => console.error(err));
