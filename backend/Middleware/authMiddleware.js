const jwt = require("jsonwebtoken"); // Importing JWT for token verification
const User = require("../models/userModel"); // Importing User model to fetch user data from the database

// Authentication Middleware to verify JWT tokens
const authMiddelware = async (req, res, next) => {
  // Extracting the token from the request header
  const token = req.header("Authorization");
  // Check if the token is missing
  if (!token) {
    return res.status(401).json({ message: "Unauthorized error: Token not provided" });
  }
  // Removing "Bearer" prefix from the token and trimming any extra spaces
  const jwtToken = token.replace("Bearer", "").trim();
  try {
    // Verifying the token using the secret key from environment variables
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    // Finding the user using the email from the decoded token (excluding the password)
    const userData = await User.findOne({ email: isVerified.email }).select({ password: 0 });
    // If user is not found, return unauthorized error
    if (!userData) {
      return res.status(401).json({ message: "Unauthorized error: User not found" });
    }
    // Attaching user data and token information to the request object
    req.user = userData;
    req.token = token;
    req.userId = userData._id;
    // Proceed to the next middleware or controller
    next();
  } catch (err) {
    // Handling any token verification errors
    return res.status(401).json({ message: "Invalid token" });
  }
};

// Exporting the middleware for use in routes
module.exports = authMiddelware;
