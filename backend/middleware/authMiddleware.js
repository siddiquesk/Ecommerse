const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/authModel");

dotenv.config();

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({ msg: "Unauthorized: No token provided" });
    }

    const jwtToken = token.replace("Bearer", "").trim();
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET);

    const userData = await User.findOne({ email: isVerified.email }).select("-password");
    if (!userData) {
      return res.status(404).json({ msg: "User not found" });
    }

    req.user = userData;
    req.token = jwtToken;
    req.userId = userData._id;

    next();
  } catch {
    res.status(401).json({ msg: "Unauthorized: Invalid token" });
  }
};

module.exports = authMiddleware;






