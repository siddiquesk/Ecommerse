import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Error from "./pages/Error";
import { Toaster } from 'react-hot-toast';
import { Logout } from "./pages/Logout";
import { useAuth } from "./context/AuthContext";
import AdminLayout from './layout/AdminLayout';
import AdminUsers from "./pages/AdminUsers";
import AdminContact from "./pages/AdminContact";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/login" />} />
        <Route path="/service" element={isLoggedIn ? <Service /> : <Navigate to="/login" />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/*" element={<Error />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="user" element={<AdminUsers />} />
          <Route path="contact" element={<AdminContact />} />
        </Route>
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
