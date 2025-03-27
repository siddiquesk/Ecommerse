const Contact = require("../models/contactModel");

const contactForm = async (req, res) => {
  try {
    console.log('Received Data:', req.body);

    const response = await Contact.create(req.body);
    console.log('Saved Data:', response);

    res.status(200).json({ message: "Contact created successfully", contact: response });
  } catch (err) {
    console.error('Error:', err);
    res.status(400).json({ message: err.message });
  }
};

module.exports = { contactForm };


