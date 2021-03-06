/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')


const argv = require('./argv');
//const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const mongoose = require('mongoose').set('debug', true);
// const promiseLibrary = require('bluebird');

mongoose.Promise = require('bluebird');
mongoose
  .connect('mongodb://localhost/itHealth')
  .then(() => console.log('connection succesful'))
  .catch(err => console.error(err));

// declare variables routes
const patient = require('./routes/patient');
const doctor = require('./routes/doctor');
const medication = require('./routes/medication');
const cases = require('./routes/case');
const appointment = require('./routes/appointment');
const auth = require('./routes/auth.patient')

// ================= setting up ================

const app = express();

// Use the body-parser package in our application
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

app.use('/patient', patient);
app.use('/doctor', doctor);
app.use('/medication', medication);
app.use('/case', cases);
app.use('/appointment', appointment);
app.use('/patient', auth)

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
// app.listen(port, host, async err => {
//   if (err) {
//     return logger.error(err.message);
//   }

//   // Connect to ngrok in dev mode
//   if (ngrok) {
//     let url;
//     try {
//       url = await ngrok.connect(port);
//     } catch (e) {
//       return logger.error(e);
//     }
//     logger.appStarted(port, prettyHost, url);
//   } else {
//     logger.appStarted(port, prettyHost);
//   }
// });

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

// Catch unauthorised errors
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
  }
})


