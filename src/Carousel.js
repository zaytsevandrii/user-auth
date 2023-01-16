import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previous = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex);
  };

  const next = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex === images.length ? 0 : newIndex);
  };

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={previous}>
        {"<"}
      </button>
      <img
        className="carousel-image"
        src={images[currentIndex]}
        alt="slide"
      />
      <button className="carousel-button" onClick={next}>
        {">"}
      </button>
    </div>
  );
};

export default Carousel;