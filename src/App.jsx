import React from "react";
import Navbar from "./Navbar";
import ImageSlider from "./ImageSlider";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <Home />
      <About/>  
      <Services />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;