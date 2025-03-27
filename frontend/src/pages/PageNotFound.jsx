import React from "react";
import "../pages/styles/PageNotFound.css";
import { NavLink } from "react-router-dom";
function PageNotFound() {
  return (
    <>
      <div className="page-not-found">
        <h1>404 🚫</h1>
        <p>Oops! The page you're looking for doesn't exist. 😢</p>
        <p>Try going back to the homepage. 🏠</p>
        <div className="return">
          <NavLink to={"/"}>Return Home</NavLink>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
