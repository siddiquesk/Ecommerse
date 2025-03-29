const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

// Register Controller
const register = async (req, res, next) => {
  const { username, phone, email, password } = req.body;

  if (!username || !phone || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = await User.create({ username, phone, email, password });
    const token = await newUser.generateToken();
    res.status(201).json({ message: "User created successfully", user: newUser, token });
  } catch (err) {
    next({ status: 500, message: err.message });
  }
};


const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }

    // Password Check
    const isMatch = await bcrypt.compare(password, userExist.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Token Generate
    const token = await userExist.generateToken();
    const userId = userExist._id.toString();

    res.status(200).json({ message: "Logged in successfully", user: userExist, token, userId });
  } catch (err) {
    next({ status: 500, message: err.message });
  }
};


const userAuthorisation=async(req,res)=>{
try{
const userData=req.user;
res.status(200).json({userData});
}catch(err){
  res.status(500).json({message: err.message});
}
}


module.exports = { register, login, userAuthorisation };
