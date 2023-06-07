import './Carrousel.scss'
import { useState } from 'react';
import React from "react";
import ArrowLeft from '../../assets/chevron_carrousel_left.png'
import ArrowRight from '../../assets/chevron_carrousel_right.png'

function Carrousel({ slides }) {

  const [current, setCurrent] = useState(0);
  const length = slides.length;


  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slide">
      {length > 1 && (
        <img className="left-Arrow" src={ArrowLeft} alt="show previous slider" onClick={prevSlide} />
      )}
      {length > 1 && (
        <img className="right-Arrow" src={ArrowRight} alt="show next slider" onClick={nextSlide} />
      )}
      {slides.map((image, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slider active" : "slider"}
          >
            {index === current && (
              <img src={image} alt="img-appartement" className="slide__image" />
            )}
            {index === current && length > 1 && (
              <span className="slider__number">
                {current + 1}/{length}
              </span>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Carrousel;