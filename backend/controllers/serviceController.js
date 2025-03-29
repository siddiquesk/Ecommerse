const Service = require('../models/service-model');

const serviceController = async (req, res) => {
  try {
    const servicedata = await Service.find();
    if (!servicedata) {
      return res.status(404).json({ message: 'No services found' });
    }
    console.log(servicedata);
    res.status(200).json({msg:servicedata});

  } catch (err) {
    console.error("Error fetching services:", err);
    res.status(500).json({ message: err.message });
  }
}

module.exports = serviceController;
