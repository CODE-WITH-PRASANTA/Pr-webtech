import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-full-content">
      <div className="navbar-left">
        <span className="navbar-brand">Mitolyn™</span>
      </div>
      <div className="navbar-center">
        <a href="#about" className="navbar-link">About </a>
        <a href="#ingredients" className="navbar-link">Ingredients</a>
        <a href="#faq" className="navbar-link">FAQ</a>
      </div>
      <div className="navbar-right">
        <button className="order-now-btn">
          Order Now <span className="cart-icon">🛒</span>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
