import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-hot-toast';
import { useAuth } from "../context/AuthContext";
import { BACKEND_URL } from "../utils/util"
function Register() {
  const { saveTokenToLocalStorage } = useAuth();
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BACKEND_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    if (response.ok) {
      setUser({
        username: '',
        email: '',
        password: '',
      });
      saveTokenToLocalStorage(data.token);
      toast.success(data.msg);
      navigate("/");
    } else {
      toast.error(data.msg || "Registration failed");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-emerald-100 py-12 px-4">
      <div className="bg-white rounded-lg flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
        {/* Image Section */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src="./register.png"
            alt="register"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 w-full p-8">
          <h1 className="text-3xl font-bold text-center text-emerald-700 mb-6">Register</h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-gray-700 font-medium mb-1">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={user.username}
                onChange={handleInput}
                placeholder="Enter username"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={user.email}
                onChange={handleInput}
                placeholder="Enter email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={user.password}
                onChange={handleInput}
                placeholder="Enter password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>

            <p className='text-center font-semibold text-xl text-red-500'>
              Already Have an Account? <Link to="/login" className='text-blue-500 text-xl hover:text-blue-800'>Login</Link>
            </p>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-2 rounded-md font-semibold hover:bg-emerald-700 transition"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;


