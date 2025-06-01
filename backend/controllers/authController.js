const User = require("../models/authModel");
const bcrypt = require("bcryptjs");

// 📝 Register Controller
const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Validate required fields
    if (!username || !email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Check if user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(409).json({ msg: "User already registered" });
    }

    // Create new user (password hashing handled in model)
    const newUser = await User.create({ username, email, password });

    // Respond with token and user data
    res.status(201).json({
      msg: "User registered successfully",
      user: newUser,
      token: await newUser.generateToken(),
      userId: newUser._id.toString(),
    });

  } catch (err) {
    console.error("Register Error:", err);
    next(err);
  }
};

// 🔐 Login Controller
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Find user
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(404).json({ msg: "User does not exist" });
    }

    // Compare password
    const isPasswordMatch = await userExist.comparePassword(password);
    if (!isPasswordMatch) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    // Successful login
    res.status(200).json({
      msg: "You’ve logged in successfully!",
      token: await userExist.generateToken(),
      userId: userExist._id.toString(),
    });

  } catch (err) {
    console.error("Login Error:", err);
    next(err);
  }
};

// 👤 Get Authenticated User Data
const getUser = async (req, res, next) => {
  try {
    const userData = req.user;
    res.status(200).json({
      msg: "User data sent successfully",
      userData,
    });
  } catch (err) {
    console.error("Get User Error:", err);
    next(err);
  }
};

// 📤 Exporting Auth Controllers
module.exports = {
  register,
  login,
  getUser,
};
















