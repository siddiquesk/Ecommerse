import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { MdOutlineMedicalServices } from "react-icons/md";
import { FaHome } from "react-icons/fa";
function AdminLayout() {
  return (
    <>
      <header>
        <div id="panel-admin">
          <nav id="navbar">
            <ul>
              <li>
                <NavLink to="/admin/user">
                  <FaUserShield /> User
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contact">
                  <MdPermContactCalendar /> Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/service">
                  <MdOutlineMedicalServices /> Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaHome /> Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default AdminLayout;
