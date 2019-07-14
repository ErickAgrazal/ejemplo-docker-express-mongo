const mongoose = require('mongoose');

const MONGO_URL = `mongodb://db:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`;

const connectDb = () =>
  mongoose.connect(MONGO_URL, {
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASSWORD,
    useCreateIndex: true,
    useNewUrlParser: true,
  });

module.exports = { connectDb };
