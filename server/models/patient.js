const mongoose = require('mongoose');
const crypto = require('crypto');
mongoose.connect('mongodb://localhost/itHealth');

mongoose.models = {};
mongoose.modelSchemas = {};

const PatientSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
  
  },
  email: {
    type: String,
    index: true
  },
  hashed_password: {
    type: String,
    index: true
 
  },
  salt: String,
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
    index: true
  },
  ID: {
    type: String,
    index: true
  },
  address: {
    type: String,
    index: true
  },
  KK_number: {
    type: String,
    index: true
  },
  Blood_type: {
    type: String,
    index: true
  },
  occupation: {
    type: String,
    index: true
  },
  photo: {
    // /index: true,
    data: Buffer,
    contentType: String,
    
  },
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
