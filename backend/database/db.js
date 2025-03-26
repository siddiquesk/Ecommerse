const mongoose = require('mongoose');
const MONGO_DB=process.env.MONGO_URL;
const connectDB=async ()=>{
  try {
    await mongoose.connect(MONGO_DB);
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
}
module.exports ={connectDB}
