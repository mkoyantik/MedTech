import img1 from '../../Assets/imgs/photo-1559757148-5c350d0d3c56.avif'
import '@fortawesome/fontawesome-free/css/all.min.css';


import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Our Company</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              MedTech Instruments has been providing healthcare professionals with 
              high-quality, reliable medical instruments for over 20 years. Our products 
              are designed with precision, durability, and patient comfort in mind.
            </p>
            <p>
              We work closely with medical professionals to understand their needs and develop 
              instruments that meet the highest standards of quality and performance.
            </p>
            <div className="features">
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>Quality Assurance</span>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>Expert Support</span>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>Global Delivery</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img 
              src={img1}
              alt="Medical professionals" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


