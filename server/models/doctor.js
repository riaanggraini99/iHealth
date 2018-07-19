const mongoose = require('mongoose');
const crypto = require('crypto');
mongoose.createConnection('mongodb://localhost/itHealth');

mongoose.models = {};
mongoose.modelSchemas = {};

const DoctorSchema = new mongoose.Schema({
  name: {
    type: String,
    index :true,
    trim: true,
    //required: 'Name is required',
  },
  email: {
    type: String,
    trim: true,
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
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  specialist: {
    type: String,
    trim: true,
  },
  photo: {
    data: Buffer,
    contentType: String,
  },

});

DoctorSchema.virtual('password')
  .set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

DoctorSchema.path('hashed_password').validate(function(v) {
  if (this._password && this._password.length < 6) {
    this.invalidate('password', 'Password must be at least 6 characters.');
  }
  if (this.isNew && !this._password) {
    this.invalidate('password', 'Password is required');
  }
}, null);

DoctorSchema.methods = {
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

module.exports = mongoose.model('Doctor', DoctorSchema);
