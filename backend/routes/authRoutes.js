const express = require('express');
const validation = require('../Middleware');
const signUpSchema =require("../ZodValidation/authValidation");
const router=express.Router();
const authController=require('../controllers/authController');
router.route("/register").post(validation(signUpSchema), authController.register)
router.route("/login").post(authController.login)

module.exports =router;




































module.exports = router;