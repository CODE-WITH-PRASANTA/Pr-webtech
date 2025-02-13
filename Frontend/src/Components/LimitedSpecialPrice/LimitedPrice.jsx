import React from 'react';
import './LimitedPrice.css';
import { Helmet } from 'react-helmet'; // For SEO integration

// Importing assets
import BasicPlanImg from '../../assets/Basic-img.webp';
import PopularPlanImg from '../../assets/Popular-price.webp';
import BundlePlanImg from '../../assets/Brand-price.webp';

const LimitedPrice = () => {
  return (
    <div className="limited-price-section">
      {/* Helmet for SEO and structured data */}
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

      {/* Section Title */}
      <h2 className="limited-price-title">
        Limited Time Special Pricing - Act Now!
        <p className="limited-price-subtitle">Secure Your Reserved Mitolyn While Stocks Last</p>
      </h2>

      {/* Pricing Cards */}
      <div className="full-pricing-card">
      <div className="pricing-cards-container">
        {/* Basic Plan */}
        <div className="pricing-card basic-plan">
        <img
            src={BasicPlanImg}
            alt="Basic Plan"
            className="pricing-image"
            width="236"
            height="440"
        />

        </div>

        {/* Most Popular Plan */}
        <div className="pricing-card popular-plan">
        <img
            src={PopularPlanImg}
            alt="Basic Plan"
            className="pricing-image"
            width="236"
            height="440"
        />

        </div>

        {/* Bundle Plan */}
        <div className="pricing-card bundle-plan">
        <img
            src={BundlePlanImg}
            alt="Basic Plan"
            className="pricing-image"
            width="236"
            height="440"
        />

        </div>
      </div>
      </div>

      {/* Customer Reviews */}
      <div className="customer-reviews">
        <p className="review-text">Our customers say</p>
        <p className="rating">&#9733;&#9733;&#9733;&#9733;&#9734; 4.97 / 5</p>
        <p className="review-count">based on 9975+ reviews!</p>
      </div>
    </div>
  );
};

export default LimitedPrice;
