const User = require("../models/authModel");
const Contact = require("../models/contactModel");

// Get all users (excluding passwords)
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).select("-password");
    if (!users || users.length === 0) {
      return res.status(404).json({ msg: "No users found" });
    }
    res.status(200).json({ msg: "Users fetched successfully", users });
  } catch (err) {
    console.error("Get Users Error:", err);
    next(err);
  }
};

// Get all contact messages
const getAllContact = async (req, res, next) => {
  try {
    const contacts = await Contact.find({});
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ msg: "No contacts found" });
    }
    res.status(200).json({ msg: "Contacts fetched successfully", contacts });
  } catch (err) {
    console.error("Get Contacts Error:", err);
    next(err);
  }
};

// Delete user by ID
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json({ msg: "User deleted successfully" });
  } catch (err) {
    console.error("Delete User Error:", err);
    next(err);
  }
};

// Delete contact by ID
const deleteContactUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedContact = await Contact.findByIdAndDelete(id);
    if (!deletedContact) {
      return res.status(404).json({ msg: "Contact not found" });
    }
    res.status(200).json({ msg: "Contact deleted successfully" });
  } catch (err) {
    console.error("Delete Contact Error:", err);
    next(err);
  }
};

module.exports = {
  getAllUsers,
  getAllContact,
  deleteUser,
  deleteContactUser,
};
