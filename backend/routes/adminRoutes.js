const express = require('express');
const router = express.Router();
const adminController=require("../controllers/adminController");
const authMiddleware=require("../middleware/authMiddleware");
const adminMiddleware=require("../middleware/adminMiddleware");

router.route("/users").get(authMiddleware,adminMiddleware,adminController.getAllUsers)
router.route("/contact").get(authMiddleware ,adminController.getAllContact);
router.route("/delete/:id").delete(adminController.deleteUser);
router.route("/contact/:id").delete(adminController.deleteContactUser);
module.exports =router;