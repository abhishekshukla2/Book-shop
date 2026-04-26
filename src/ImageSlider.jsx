import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

import jay from "./jay.jpeg";
import shree from "./shree.jpeg";
import ram from "./ram.jpeg";
import abhishek from "./abhishek.jpeg";

const ImageSlider = () => {
  const slides = [jay, shree, ram, abhishek];

  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="slider">

      {/* IMAGE */}
      <img
        src={slides[index]}
        alt="slide"
        className="slide-image"
      />

      {/* TOP GRADIENT */}
      <div className="top-overlay"></div>

      {/* TEXT */}
      <div className="caption">
        <h1>Abhishek Life Style</h1>
        <p>Modern React Website • Professional UI Design</p>
      </div>

      {/* DOTS */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {/* CONTROLS */}
      <button
        className="prev"
        onClick={() =>
          setIndex(index === 0 ? slides.length - 1 : index - 1)
        }
      >
        ‹
      </button>

      <button
        className="next"
        onClick={() =>
          setIndex((index + 1) % slides.length)
        }
      >
        ›
      </button>

    </div>
  );
};

export default ImageSlider;