import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Authstore";
import axios from "axios";
function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const { storeTokenProps } = useAuth();
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", user, {
        withCredentials: true, // If your backend requires cookies for authentication
      });

      if (response.status === 200) {
        setUser({
          email: "",
          password: "",
        });

        storeTokenProps(response.data.token);
        toast.success("Logged in successfully!");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        toast.error(
          response.data.message ||
            "Failed to login. Please check your credentials."
        );
      }
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.message ||
          "Failed to login. Please try again later."
      );
    }
  };

  return (
    <section>
      <div className="section-register">
        <div className="container2 grid grid-two-cols">
          {/* Left Side - Image Section */}
          <div className="registerimage">
            <img
              src="https://img.freepik.com/free-vector/professional-programmer-engineer-writing-code_3446-693.jpg?ga=GA1.1.386693064.1710494351&semt=ais_hybrid"
              alt="Login Illustration"
              style={{
                width: "400px",
                height: "400px",
                borderRadius: "10px",
              }}
            />
          </div>

          {/* Right Side - Form Section */}
          <div className="form-register">
            <h2 className="heading-form" style={{ marginLeft: "100px" }}>
              Login Form
            </h2>
            <form onSubmit={handlesubmit}>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  id="email"
                  name="email"
                  required
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  id="password"
                  name="password"
                  required
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>

              <br />
              <button type="submit">Login Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
