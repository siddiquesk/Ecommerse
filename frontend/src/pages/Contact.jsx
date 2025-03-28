import React, { useState } from "react";
import "../pages/styles/Contact.css";
import { useAuth } from "../store/Authstore";
import toast, { Toaster } from "react-hot-toast";
function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();
  const handleInput = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
    console.log(contact);
  };

  if (userData && user) {
    //user mai pura token se verify hokar context api se state variable user aaya hai
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact), //contact ka data json mai convert karke backend mai bheja hai
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setContact({
          username: "",
          email: "",
          message: "",
        });
        toast.success("contact created Successfully!");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <>
      <div className="main">
        <div className="left">
          <h2>Contact Us</h2>
          <img
            src="https://img.freepik.com/free-photo/woman-holding-snapchat-logo-with-his-friends-showing-thumbup-sign_23-2147847476.jpg?ga=GA1.1.386693064.1710494351&semt=ais_hybrid'"
            alt="conatct"
          />
        </div>
        <div className="right">
          <form onSubmit={submitHandler}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Username"
                id="username"
                name="username"
                required
                autoComplete="off"
                value={contact.username}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="enter your email address"
                id="email"
                name="email"
                required
                autoComplete="off"
                value={contact.email}
                onChange={handleInput}
              />
            </div>

            <div>
              <label htmlFor="msg">Message</label>
              <textarea
                type="text"
                placeholder="enter your Message"
                id="msg"
                name="message"
                required
                autoComplete="off"
                value={contact.message}
                onChange={handleInput}
              />
            </div>
            <br />
            <button type="submit">Contact Now</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
