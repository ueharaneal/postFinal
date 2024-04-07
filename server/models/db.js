const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDb is now connnected");
  } catch (err) {
    console.error("MongoDB connection Error", err);

    process.exit(1);
  }
};

module.exports = connectDB;
