import React from "react";
import "../pages/styles/About.css";
function About() {
  return (
    <>
      <div className="about-container">
        {/* Left Section with Image */}
        <div className="about-image">
          <img
            src="https://img.freepik.com/premium-vector/serious-concentrated-developer-programming-sites_316839-2216.jpg?ga=GA1.1.386693064.1710494351&semt=ais_hybrid"
            alt="Developer"
          />
        </div>

        {/* Right Section with Content */}
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Hi, <span>I am Sufiyan,</span> a passionate MERN Stack Developer. I
            specialize in building robust and scalable web applications. I enjoy
            creating user-friendly experiences using the latest technologies.
          </p>
          <p>
            I have completed my Bachelor of Computer Applications (BCA) and have
            a strong foundation in full-stack development.
          </p>
          <div className="social-icons">
            <a href="https://github.com/siddiquesk?tab=repositories">Github</a>
            <a href="https://www.linkedin.com/in/sufiyan-siddique-3b48472a7/">
              Linkdin
            </a>
            <a href="https://www.facebook.com/profile.php?id=61555362342844">
              FaceBook
            </a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
