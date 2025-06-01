const jwt = require("jsonwebtoken");
const User = require("../models/authModel");
const Contact = require("../models/contactModel");

const adminMiddleware = async (req, res, next) => {
  try {
    const admin = req.user.isAdmin;

    if (!admin) {
      return res.status(401).json({ msg: "Access denied. User is not an admin" });
    }

    next();
  } catch (err) {
    res.status(401).json({ msg: "Unauthorized: Invalid token" });
  }
};

module.exports = adminMiddleware;
