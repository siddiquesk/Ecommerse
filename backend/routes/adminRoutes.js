const express = require('express');
const router = express.Router(); 
const authMiddleware = require('../Middleware/authMiddleware');
const adminMiddleware = require("../Middleware/adminMiddlware");
const adminController = require("../controllers/adminController");
router.route('/user').get(authMiddleware ,adminMiddleware, adminController.getUser);
router.route('/user/delete/:id').delete(authMiddleware ,adminMiddleware, adminController.destroyUser);
router.route('/contact').get(authMiddleware, adminMiddleware, adminController.getContact);
module.exports = router;

