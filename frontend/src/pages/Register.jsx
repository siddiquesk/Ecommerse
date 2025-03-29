import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../store/Authstore";
function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const navigate = useNavigate();
  const { storeTokenProps } = useAuth();
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error(data.message || "Registration failed");
        return;
      }
      setUser({ username: "", email: "", phone: "", password: "" });
      storeTokenProps(data.token);
      toast.success("Signup Successfully!");
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <section>
        <div className="section-register">
          <div className="container2 grid grid-two-cols">
            <div className="registerimage">
              <img
                src="https://img.freepik.com/free-vector/it-job-concept-illustration_114360-27000.jpg?ga=GA1.1.386693064.1710494351&semt=ais_hybrid"
                alt="image"
                style={{
                  width: "400px",
                  height: "400px",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="formregister">
              <br />
              <form onSubmit={handlesubmit}>
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    name="username"
                    required
                    autoComplete="off"
                    value={user.username}
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
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    placeholder="enter your phone number"
                    id="phone"
                    name="phone"
                    required
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="text"
                    placeholder="enter your password"
                    id="password"
                    name="password"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>
                <br />
                <button type="submit">Register Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
