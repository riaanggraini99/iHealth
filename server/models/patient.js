const mongoose = require('mongoose');
const crypto = require('crypto');
mongoose.createConnection('mongodb://localhost/itHealth');
// var db 	=	 mongoose.connection;
 var Schema = mongoose.Schema

mongoose.models = {};
mongoose.modelSchemas = {};


const PatientSchema = new Schema({
  name: {
    type: String,
    index :true,
    //required: 'Name is required',
  },
  email: {
    type: String,
    // unique: 'Email already exists',
    // match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    // required: 'Email is required',
  },
  hashed_password: {
    type: String,
    // required: 'Password is required',
  },
  salt: String,
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
  ID: {
    type: String,
  },
  address: {
    type: String,
  },
  KK_number: {
    type: String,
  },
  Blood_type: {
    type: String,
  },
  occupation: {
    type: String,
  },
  photo: {
    data: Buffer,
    contentType: String,
  },
  // following: [{ type: mongoose.Schema.ObjectId, ref: 'Patient' }],
  // followers: [{ type: mongoose.Schema.ObjectId, ref: 'Patient' }],
});

PatientSchema.virtual('password')
  .set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

PatientSchema.path('hashed_password').validate(function(v) {
  if (this._password && this._password.length < 6) {
    this.invalidate('password', 'Password must be at least 6 characters.');
  }
  if (this.isNew && !this._password) {
    this.invalidate('password', 'Password is required');
  }
}, null);

PatientSchema.methods = {
  authenticate(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword(password) {
    if (!password) return '';
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch (err) {
      return '';
    }
  },
  makeSalt() {
    return `${Math.round(new Date().valueOf() * Math.random())}`;
  },
};

module.exports = mongoose.model('Patient', PatientSchema);
