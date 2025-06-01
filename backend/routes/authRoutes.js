const express = require('express');
const router = express.Router();
const authController= require("../controllers/authController.js");
const signupSchema=require("../middleware/authValidation.js");
const validate=require("../middleware/validation.js");
const authMiddleware=require("../middleware/authMiddleware.js");
router.route("/register").post(validate(signupSchema),authController.register);
router.route("/login").post(authController.login);
router.route("/user").get(authMiddleware,authController.getUser);

module.exports =router;


