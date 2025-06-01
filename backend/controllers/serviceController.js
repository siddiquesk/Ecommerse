const Service = require("../models/serviceModel");

// 📦 Fetch All Services Controller
const serviceData = async (req, res, next) => {
  try {
    const services = await Service.find({});
    if (!services || services.length === 0) {
      return res.status(404).json({ msg: "No services found" });
    }
    res.status(200).json({
      msg: "Data fetched successfully",
      services,
    });
    
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  serviceData,
};

