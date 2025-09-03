import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MedTech Instruments</h3>
            <p>Professional medical instruments for modern healthcare facilities</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p><i className="fas fa-phone"></i> +1 (747) 273-7350</p>
            <p><i className="fas fa-envelope"></i> info@medtech.com</p>
            <p><i className="fas fa-map-marker-alt"></i> 123 Medical Avenue, Healthcare City</p>
          </div>
          <div className="footer-section">
            <h4>Subscribe</h4>
            <p>Subscribe to our newsletter for updates and special offers</p>
            <div className="subscribe-form">
              <input type="email" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 MedTech Instruments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;