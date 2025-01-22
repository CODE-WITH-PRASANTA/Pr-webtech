import React from 'react';
import MadeInUSAIcon from '../../assets/usa-logo.webp'; // Replace with the actual path
import NaturalProductIcon from '../../assets/natural-product.webp'; // Replace with the actual path
import GMPCertifiedIcon from '../../assets/manufacture-verify.webp';
import FDAApprovedIcon from '../../assets/fda-approval.webp'; // Replace with the actual path
import './WhyChoose.css';

const WhyChoose = () => {
  return (
    <section className="why-choose-section">
      <h2 className="why-choose-title">Why Choose Purple Peel Exploit (Mitolyn)?</h2>
      <div className="why-cards-container">
        <div className="why-card">
          <img src={MadeInUSAIcon} alt="Made in the USA" className="why-card-icon" />
          <h3 className="why-card-title">MADE IN THE USA</h3>
          <p className="why-card-description">
            <span>Purple Peel Exploit (Mitolyn)</span> is manufactured on US soil.
          </p>
        </div>
        <div className="why-card">
          <img src={NaturalProductIcon} alt="100% Natural" className="why-card-icon" />
          <h3 className="why-card-title">100% NATURAL</h3>
          <p className="why-card-description">
            All ingredients are pure, natural, and carefully sourced.
          </p>
        </div>
        <div className="why-card">
          <img src={GMPCertifiedIcon} alt="GMP Certified" className="why-card-icon" />
          <h3 className="why-card-title">GMP CERTIFIED</h3>
          <p className="why-card-description">
            Its Supplement is a Good Manufacturing Practice.
          </p>
        </div>
        <div className="why-card">
          <img src={FDAApprovedIcon} alt="FDA Approved" className="why-card-icon" />
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
