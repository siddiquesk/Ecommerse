
const express = require('express');
const router = express.Router();
const serviceController = require("../controllers/serviceController");
router.route("/service").get(serviceController.serviceData);
module.exports =router;
