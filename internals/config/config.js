// Copy this file as config.js in the same folder, with the proper database connection URI.
const config = {
  env: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri:
    process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    `mongodb://${process.env.IP || 'localhost'}:${process.env.MONGO_PORT ||
      '27017'}/itHealth`,
};

module.exports = config;
