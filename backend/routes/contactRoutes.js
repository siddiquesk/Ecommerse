const express = require('express');
const router = express.Router();
const contactController=require("../controllers/contactController");
router.route("/contact").post(contactController.createContact);
module.exports =router;
