

const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.MONGODB_URI;


async function connect() {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
module.exports = connect;
