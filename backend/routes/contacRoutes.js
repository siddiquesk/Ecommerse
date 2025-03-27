const express = require('express');
const router=express.Router();
const contactSchema=require("../ZodValidation/contactValidation");
const validation =require("../Middleware");
const {contactForm}=require("../controllers/contactController");
router.route("/contact").post(validation(contactSchema),contactForm);
module.exports = router;