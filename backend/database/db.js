const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_ATLAS, {
    });
  } catch (error) {
    process.exit(1); // Stop the server if DB connection fails
  }
};

module.exports = connectDb;


