const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/linkSharing");
        console.log(`Connected to MongoDB: ${conn.connection.host}`);
      } catch (err) {
        console.error(`Error connecting to MongoDB. Connection string: mongodb://localhost:27017/. Error code: ${err.code}. Error message: ${err.message}`);
        console.error(err.stack);
        process.exit(1);
      }
  };
  
  module.exports = connectDB;