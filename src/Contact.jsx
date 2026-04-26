import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">

      {/* TITLE */}
      <h1 className="contact-title">Contact Me 📩</h1>

      <p className="contact-subtitle">
        Let’s build something amazing together
      </p>

      {/* FORM CARD */}
      <div className="contact-card">

        <form onSubmit={handleSubmit} className="contact-form">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message 🚀</button>

        </form>

      </div>

    </div>
  );
};

export default Contact;