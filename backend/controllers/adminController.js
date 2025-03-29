const Contact = require("../models/contactModel");
const User = require("../models/userModel");

const getUser = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    console.log(users);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json({ msg: users });
  } catch (err) {
    next(err);
  }
};

const getContact = async (req, res, next) => {
  try {
    const contact = await Contact.find();
    console.log(contact);
    if (!contact || contact.length === 0) {
      return res.status(404).json({ message: "No contacts found" });
    }
    return res.status(200).json(contact);
  } catch (err) {
    next(err);
  }
};

module.exports = { getUser, getContact };
