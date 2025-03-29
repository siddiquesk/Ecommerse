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



const destroyUser = async (req, res) => {
  const { id } = req.params; // ✅ Correct id extraction
  try {
    const delUser = await User.findByIdAndDelete(id); // ✅ Correct deleteOne call

    if (!delUser) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User deleted", delUser);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



module.exports = { getUser, getContact,destroyUser};
