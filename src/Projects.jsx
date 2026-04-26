import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website 1",
      desc: "Modern React portfolio with animation and UI design.",
      tech: "React, CSS",
      link: "https://glowing-marshmallow-6b9359.netlify.app/",
    },
    {
      title: "Portfolio Website 2",
      desc: "Another version of my professional portfolio website.",
      tech: "React, CSS",
      link: "https://resonant-sawine-c25f26.netlify.app/",
    },
    {
      title: "Portfolio Website 3",
      desc: "Latest deployed version with improved UI and layout.",
      tech: "React, CSS",
      link: "https://silver-piroshki-2eb17c.netlify.app/",
    },
  ];

  return (
    <div className="projects-container">

      <h1 className="projects-title">My Live Projects 🚀</h1>

      <p className="projects-subtitle">
        Click on any project to open live demo
      </p>

      <div className="projects-grid">

        {projects.map((item, index) => (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="project-card"
            key={index}
            style={{ animationDelay: `${index * 0.2}s` }}
          >

            <h2>{item.title}</h2>
            <p>{item.desc}</p>

            <span className="tech">{item.tech}</span>

            <div className="click-text">👉 Click to View Live</div>

          </a>
        ))}

      </div>

    </div>
  );
};

export default Projects;