import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Service from "./pages/Service";
import Navbar from "./Componenet/Navbar";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./Footer/Footer";
import Logout from "./pages/Logout";
import AdminUser from "./pages/AdminUser";
import AdminContact from "./pages/AdminContact";
import AdminLayout from "./Componenet/layouts/AdminLayout";
import AdminService from "./pages/AdminService";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="user" element={<AdminUser />} />
          <Route path="contact" element={<AdminContact />} />
          <Route path="service" element={<AdminService />} />
        </Route>
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
