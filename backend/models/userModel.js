const mongoose = require('mongoose');
const bcrypt =require("bcryptjs");
const jwt=require("jsonwebtoken");
const userSchema=new mongoose.Schema({
  username:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  phone:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true,
  },
  isAdmin:{
    type:Boolean,
    default:false,
  }
})



// Define a method on the schema using Mongoose's instance methods
userSchema.methods.generateToken = async function() {
  try {
    // Generate a JWT token using the user's details
    // `this` refers to the current user document (instance)
    return jwt.sign(
      {
        userId: this._id.toString(), // Convert ObjectId to string
        email: this.email, // Access email directly (no _email)
        isAdmin: this.isAdmin // Access isAdmin directly (no _isAdmin)
      },
      process.env.JWT_SECRET_KEY, // Secret key from environment variable
      {
        expiresIn: "10d" // Token expires in 10 days
      }
    );
  } catch (err) {
    // Log and rethrow the error for better debugging
    console.error("Error generating token:", err);
    throw err;
  }
};





// This is a pre-save middleware in Mongoose
// It will run before the user data is saved to the database
userSchema.pre('save', async function (next) {
  // 'this' refers to the current user document (instance)
  const user = this;
  // Check if the password field is modified
  // If not modified (e.g., during profile update without changing password), skip hashing
  if (!user.isModified('password')) {
    return next(); // Move to the next middleware or save function
  }
  try {
    // Generate a salt using bcrypt with a salt round of 10
    const saltRound = await bcrypt.genSalt(10);
    // Hash the user's password using bcrypt and the generated salt
    const hashPassword = await bcrypt.hash(user.password, saltRound);
    // Replace the plain text password with the hashed password
    user.password = hashPassword;
    // Continue to save the user to the database
    next();
  } catch (err) {
    // If an error occurs during hashing, pass the error to the next middleware
    next(err);
  }
});


const User=mongoose.model('User',userSchema);
module.exports = User;