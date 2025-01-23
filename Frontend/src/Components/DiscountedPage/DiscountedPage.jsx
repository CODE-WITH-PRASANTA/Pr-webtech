import React, { useState, useEffect } from 'react';
import './DiscountedPage.css';
import Productimg from '../../assets/product-3.webp';
import { FaShoppingCart } from 'react-icons/fa'; // Import shopping cart icon

const DiscountedPage = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 20, seconds: 51 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { hours, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer); // Clear the timer when countdown ends
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer
  }, []);

  const formatTime = (time) => String(time).padStart(2, '0');

  return (
    <div className="discount-page">
      <div className="discount-header">Don't Wait Any Longer! Order Your Discounted Bottle Now!</div>
      <div className="discount-content">
        <img src={Productimg} alt="Mitolyn Product" className="discount-product-image" />
        <div className="discount-details">
          {/* Countdown Timer */}
          <div className="countdown">
            <div className="countdown-item">
              <span>{formatTime(timeLeft.hours)}</span> hours
            </div>
            <div className="countdown-item">
              <span>{formatTime(timeLeft.minutes)}</span> minutes
            </div>
            <div className="countdown-item">
              <span>{formatTime(timeLeft.seconds)}</span> seconds
            </div>
          </div>

          {/* Pricing Details */}
          <div className="price-details">
            <p>
              Regular Price: <span className="original-price">$197/per bottle</span>
            </p>
            <p className="discounted-price">
              Only for: <span>$39/per bottle</span>
            </p>
          </div>

          {/* Order Button */}
          <button className="order-button">
            Order Purple Peel Exploit (Mitolyn) <FaShoppingCart className="cart-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountedPage;
