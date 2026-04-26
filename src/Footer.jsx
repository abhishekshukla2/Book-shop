// Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* About */}
        <div>
          <h3>Book Shop</h3>
          <p>Your one-stop destination for all kinds of books 📚</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4>Quick Links</h4>
          <ul style={styles.list}>
            <li>Home</li>
            <li>About</li>
            <li>Books</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4>Contact Us</h4>
          <p>Email: abhishekshukla2122@gmail.com</p>
          <p>Phone: +8081597811</p>
          <p>Location:Talagown, Vikramjot, Basti</p>
        </div>

        {/* Social Links */}
        <div>
          <h4>Follow Us</h4>
          <div>
            <span style={styles.icon}>🌐</span>
            <span style={styles.icon}>📘</span>
            <span style={styles.icon}>📸</span>
            <span style={styles.icon}>🐦</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div style={styles.bottom}>
        <p>© 2026 Book Shop | All Rights Reserved</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#0f172a",
    color: "#fff",
    padding: "40px 20px",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  icon: {
    marginRight: "10px",
    fontSize: "20px",
    cursor: "pointer",
  },
  bottom: {
    textAlign: "center",
    marginTop: "20px",
    borderTop: "1px solid #ccc",
    paddingTop: "10px",
  },
};

export default Footer;