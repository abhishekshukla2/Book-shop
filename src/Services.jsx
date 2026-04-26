import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      desc: "I build responsive and modern websites using React, HTML, CSS, and JavaScript.",
      icon: "💻",
    },
    {
      title: "Frontend Design",
      desc: "Clean UI/UX design with smooth animations and mobile-friendly layout.",
      icon: "🎨",
    },
    {
      title: "React Applications",
      desc: "Single Page Applications (SPA) using React Hooks and modern libraries.",
      icon: "⚛️",
    },
    {
      title: "API Integration",
      desc: "Connect frontend with backend using REST APIs and fetch data dynamically.",
      icon: "🔗",
    },
  ];

  return (
    <div className="services-container">

      <h1 className="services-title">My Services 🚀</h1>
      <p className="services-subtitle">
        I provide high-quality development services for modern web solutions.
      </p>

      <div className="services-grid">

        {services.map((item, index) => (
          <div className="service-card" key={index}>

            <div className="icon">{item.icon}</div>

            <h2>{item.title}</h2>

            <p>{item.desc}</p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Services;