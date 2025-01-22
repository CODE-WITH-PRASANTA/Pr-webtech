import React from 'react';
import './LimitedPrice.css';

// Assets for the section
import Basicfullsectionimg from '../../assets/Basic-img.webp';
import Popularfullsectionimg from '../../assets/Popular-price.webp';
import Bundelfullsectionimg from '../../assets/Brand-price.webp';

// Importing Helmet for SEO
import { Helmet } from 'react-helmet';

const LimitedPrice = () => {
  return (
    <div className="limited-price-section">
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Product",
              "name": "Mitolyn Special Pricing",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.92",
                "reviewCount": "92100",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          `}
        </script>
      </Helmet>

      <h2 className="limited-price-title">Limited Time Special Pricing - Act Now!</h2>
      <p className="limited-price-subtitle">Secure Your Reserved Mitolyn While Stocks Last</p>

      <div className="pricing-cards-container">
        {/* Basic Plan */}
        <div className="pricing-card basic-plan">
          <img src={Basicfullsectionimg} alt="Basic Plan" className="pricing-image" />
        </div>

        {/* Most Popular Plan */}
        <div className="pricing-card popular-plan">
          <img src={Popularfullsectionimg} alt="Most Popular Plan" className="pricing-image" />
        </div>

        {/* Bundle Plan */}
        <div className="pricing-card bundle-plan">
          <img src={Bundelfullsectionimg} alt="Bundle Plan" className="pricing-image" />
        </div>
      </div>

      <div className="customer-reviews">
        <p className="review-text">Our customers say</p>
        <p className="rating">&#9733;&#9733;&#9733;&#9733;&#9734; 4.97 / 5</p>
        <p className="review-count">based on 9975+ reviews!</p>
      </div>
    </div>
  );
};

export default LimitedPrice;
