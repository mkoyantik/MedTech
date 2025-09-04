import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">
              <i className="fas fa-stethoscope"></i>
            </div>
            <span className="logo-text">SP Medical Supply</span>
          </div>
          <nav className="nav">
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;