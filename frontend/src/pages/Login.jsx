import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { saveTokenToLocalStorage } = useAuth();

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/api/auth/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const result = await response.json();

    if (response.ok) {
      setUser({ email: '', password: '' });
      toast.success(result.msg || "Login successful!");
      await saveTokenToLocalStorage(result.token);
      navigate("/");
    } else {
      toast.error(result.msg || "Invalid email or password");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-emerald-100 to-blue-100 py-12 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-6">Login Here</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleInput}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleInput}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <p className='text-center font-semibold text-xl text-red-500'>
            You have no account? Please <Link to="/signup" className='text-blue-500 text-xl hover:text-blue-800'>Signup</Link>
          </p>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 rounded-md font-semibold hover:bg-emerald-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;


