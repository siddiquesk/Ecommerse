const Contact = require("../models/contactModel");

// 📨 Create Contact Controller
const createContact = async (req, res, next) => {
  try {
    const contactData = req.body;

    const newContact = await Contact.create(contactData);

    if (!newContact) {
      return res.status(400).json({ msg: "Failed to create contact" });
    }

    res.status(201).json({
      msg: "Contact created successfully",
      newContact,
    });
    
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createContact,
};
