require('dotenv').config();
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

//connect to MongoDB
async function connectToMongoDB() {
  await mongoose.connect(MONGODB_URI);
  console.log('connected to database successfully');
}

module.exports = { connectToMongoDB };
