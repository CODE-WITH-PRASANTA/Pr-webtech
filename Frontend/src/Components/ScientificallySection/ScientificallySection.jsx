import React from 'react';
import './ScientificallySection.css';

import BrandLogo from '../../assets/Brand-1.webp';
import PercentOffLogo from '../../assets/nintyoff.webp';

const ScientificallySection = () => {
  return (
    <div className="scientifically-container">
      <div className="scientifically-header">
        <img src={BrandLogo} alt="Brand Logos" className="brand-logo" />
      </div>
      <div className="full-scientifically-section">
      <h2 className="scientifically-title">Scientifically Formulated</h2>
      <div className="scientifically-cards">
        <div className="scientifically-card">
          <div className="card-icon">●</div>
          <h3 className="card-title">FDA Approved Facility</h3>
          <p className="card-description">
            Processed under strict sterile standards with regularly disinfected equipment.
          </p>
        </div>
        <div className="scientifically-card">
          <div className="card-icon">●</div>
          <h3 className="card-title">100% All Natural</h3>
          <p className="card-description">
            With ingredients sourced from local growers that let plants naturally reach their full maturity and use no chemical treatments.
          </p>
        </div>
        <div className="scientifically-card">
          <div className="card-icon">●</div>
          <h3 className="card-title">Money Back Guarantee</h3>
          <p className="card-description">
            Our investment is covered by a 90-Day, 100% Money-Back GUARANTEE.
          </p>
        </div>
      </div>
      <div className="guarantee-section">
        <img src={PercentOffLogo} alt="90% Money Back Guarantee" className="percent-logo" />
        <div className="guarantee-content">
          <h3 className="guarantee-title">100% Satisfaction</h3>
          <h4 className="guarantee-subtitle">90-Day Money Back Guarantee</h4>
          <p className="guarantee-description">
            Your order today is protected by my iron-clad 90-day 100% money-back guarantee. If you are not astonished how fast your deep stubborn fat stores melt away into pure energy, or shocked as you admire your new toned, slim body in the mirror, then at any time in the next 90 days let us know and we’ll refund every single penny of your investment. No questions asked.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ScientificallySection;
