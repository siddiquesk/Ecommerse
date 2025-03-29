const express = require('express');
const router=express.Router();
const validation = require('../Middleware/validation');
const signUpSchema =require("../ZodValidation/authValidation");
const authController=require('../controllers/authController');
const authMiddelware=require("../Middleware/authMiddleware");
router.route("/register").post(validation(signUpSchema), authController.register)
router.route("/login").post(authController.login)
router.route("/user").get(authMiddelware,authController.userAuthorisation);
module.exports =router;




































module.exports = router;