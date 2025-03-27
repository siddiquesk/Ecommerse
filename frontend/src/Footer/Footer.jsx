import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Sufiyan Ecommerce. All rights reserved.</p>
          <p>
            Follow us on:
            <a href="#" className="social-link">
              Facebook
            </a>{" "}
            |
            <a href="#" className="social-link">
              Twitter
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
