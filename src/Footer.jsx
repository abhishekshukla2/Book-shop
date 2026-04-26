import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-left">
          <h2>Abhishek Portfolio 🚀</h2>
          <p>React Developer | BCA Student</p>
        </div>

        {/* CENTER LINKS */}
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* RIGHT SOCIAL */}
        <div className="footer-social">

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://resonant-sawine-c25f26.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Live Site
          </a>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © 2026 Abhishek Shukla | All Rights Reserved 🚀
      </div>

    </footer>
  );
};

export default Footer;