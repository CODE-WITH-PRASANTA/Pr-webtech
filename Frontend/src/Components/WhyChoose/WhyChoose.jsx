import React from 'react';
import './WhyChoose.css';

// Importing icons
import MadeInUSAIcon from '../../assets/usa-logo.webp';
import NaturalProductIcon from '../../assets/natural-product.webp';
import GMPCertifiedIcon from '../../assets/manufacture-verify.webp';
import FDAApprovedIcon from '../../assets/fda-approval.webp';

const WhyChoose = () => {
  return (
    <section className="why-choose-section">
      {/* Section Title */}
      <h2 className="why-choose-title">Why Choose Purple Peel Exploit (Mitolyn)?</h2>
      
      {/* Cards Container */}
      <div className="why-cards-container">
        {/* Made in the USA */}
        <div className="why-card">
        <img
            src={MadeInUSAIcon}
            alt="Made in the USA"
            className="why-card-icon"
            width="220"
            height="auto" /* Replace "auto" with the actual height if known */
          />

          <h3 className="why-card-title">MADE IN THE USA</h3>
          <p className="why-card-description">
            <span>Purple Peel Exploit (Mitolyn)</span> is manufactured on US soil.
          </p>
        </div>

        {/* 100% Natural */}
        <div className="why-card">
        <img
            src={NaturalProductIcon}
            alt="Made in the USA"
            className="why-card-icon"
            width="220"
            height="auto" /* Replace "auto" with the actual height if known */
          />
          <h3 className="why-card-title">100% NATURAL</h3>
          <p className="why-card-description">
            All ingredients are pure, natural, and carefully sourced.
          </p>
        </div>

        {/* GMP Certified */}
        <div className="why-card">
        <img
            src={GMPCertifiedIcon}
            alt="Made in the USA"
            className="why-card-icon"
            width="220"
            height="auto" /* Replace "auto" with the actual height if known */
          />
          <h3 className="why-card-title">GMP CERTIFIED</h3>
          <p className="why-card-description">
            Its supplement is a Good Manufacturing Practice.
          </p>
        </div>

        {/* FDA Approved */}
        <div className="why-card">
        <img
            src={FDAApprovedIcon}
            alt="Made in the USA"
            className="why-card-icon"
            width="220"
            height="auto" /* Replace "auto" with the actual height if known */
          />
          <h3 className="why-card-title">FDA APPROVED</h3>
          <p className="why-card-description">
            Purple Peel Exploit (Mitolyn) is manufactured in a US-based FDA Certified facility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
