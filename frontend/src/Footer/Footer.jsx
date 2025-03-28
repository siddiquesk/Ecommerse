import React from "react";
import "./Footer.css";
import { useAuth } from "../store/Authstore";
function Footer() {
  const { user } = useAuth();
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <p>
            &copy; 2025{" "}
            <span id="myname">{user ? user.username : "sufiyan"}</span>{" "}
            Ecommerce. All rights reserved.
          </p>
          <p>
            Follow us on:
            <a
              href="https://www.facebook.com/profile.php?id=61555362342844"
              className="social-link">
              Facebook
            </a>{" "}
            |
            <a
              href="https://github.com/siddiquesk?tab=repositories"
              className="social-link">
              GitHub
            </a>{" "}
            |
            <a href="#" className="social-link">
              Instagram
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
