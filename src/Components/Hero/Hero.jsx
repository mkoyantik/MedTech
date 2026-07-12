import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Professional Medical Instruments</h1>
          <p>High-quality equipment for healthcare professionals</p>
          <a href="#products" className="btn">View Catalog</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;