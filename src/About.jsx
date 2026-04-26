import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [open, setOpen] = useState(false);
  const [showCV, setShowCV] = useState(false);

  return (
    <div className="about-container">

      <div className="about-card">

        <h1 className="title">About Abhishek Life Style 🚀</h1>

        <p className="text">
          I am <b>Abhishek Shukla</b>, a React Developer passionate about building modern web applications.
        </p>

        <p className="text">
          My goal is to become a Full Stack Developer and work on real-world scalable projects.
        </p>

        <div className="btn-group">

          <button className="btn" onClick={() => setOpen(!open)}>
            {open ? "Close CV ❌" : "View My CV 📄"}
          </button>

          <button className="btn secondary" onClick={() => setShowCV(true)}>
            Open CV Full View 👁️
          </button>

        </div>

        {open && (
          <div className="cv-box">
            <h2>My CV</h2>
            <p><b>Name:</b> Abhishek Shukla</p>
            <p><b>Skills:</b> HTML, CSS, JavaScript, React</p>
            <p><b>Education:</b> BCA Student</p>
            <p><b>Goal:</b> Full Stack Developer</p>

            <a href="/cv.pdf" download className="download-btn">
              Download CV ⬇
            </a>
          </div>
        )}

      </div>

      {showCV && (
        <div className="modal-overlay" onClick={() => setShowCV(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>My CV Preview</h2>

            <iframe src="/cv.pdf" className="cv-frame" title="CV"></iframe>

            <button className="btn" onClick={() => setShowCV(false)}>
              Close ❌
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default About;