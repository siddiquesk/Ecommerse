import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

function Contact() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [contact, setContact] = useState({
    username: '',
    email: '',
    message: ''
  });

  // Populate contact info once on mount if user exists
  useEffect(() => {
    if (user) {
      setContact({
        username: user.username,
        email: user.email,
        message: ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/auth/contact', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contact),
      });

      const result = await response.json();

      if (response.ok) {
        setContact({
          username: '',
          email: '',
          message: ''
        });
        toast.success(result.msg);
        navigate("/");
      } else {
        toast.error(result.msg || "Failed to submit contact form");
      }
    } catch {
      toast.error("Something went wrong, please try again.");
    }
  };

  return (
    <section className="py-10 bg-gradient-to-b from-emerald-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-emerald-700 mb-10 uppercase">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src="./support.png"
              alt="we are always ready to help"
              className="w-full max-w-sm md:max-w-md"
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block text-gray-700 font-medium mb-1">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={contact.username}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={contact.email}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  value={contact.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-2 rounded-md font-semibold hover:bg-emerald-700 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-md border border-gray-300 shadow-md"
        />
      </section>
    </section>
  );
}

export default Contact;


