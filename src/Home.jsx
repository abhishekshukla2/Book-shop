import React from "react";

// 👉 Apni image
import heroImg from "./abhishek.jpeg";

const Home = () => {
  return (
    <div style={styles.container}>

      {/* HERO SECTION */}
      <div style={styles.hero}>

        <div style={styles.textBox}>
          <h1 style={styles.title}>
            Welcome to Abhishek Life Style 🚀
          </h1>

          <p style={styles.subtitle}>
            I am <b>Abhishek Shukla</b>, a React Developer 💻
          </p>

          <p style={styles.desc}>
            I build modern, responsive and professional websites using React,
            JavaScript and UI design skills. My goal is to become a Full Stack Developer.
          </p>

          <button style={styles.btn}>Explore My Work</button>
        </div>

        <div style={styles.imageBox}>
          <img src={heroImg} alt="Abhishek" style={styles.image} />
        </div>

      </div>

    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial",
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "60px",
    flexWrap: "wrap",
    background: "linear-gradient(90deg,#ff4b2b,#ff416c,#1e90ff)",
    color: "white",
    minHeight: "80vh",
  },

  textBox: {
    flex: "1",
    minWidth: "300px",
  },

  title: {
    fontSize: "36px",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "20px",
    marginBottom: "10px",
  },

  desc: {
    fontSize: "16px",
    maxWidth: "500px",
  },

  btn: {
    marginTop: "20px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "bold",
    background: "white",
    color: "black",
  },

  imageBox: {
    flex: "1",
    textAlign: "center",
    minWidth: "300px",
  },

  image: {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
  }
};

export default Home;