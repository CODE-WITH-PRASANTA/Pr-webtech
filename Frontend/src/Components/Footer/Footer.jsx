import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">Copyright © 2024 -Mitolyn</div>
        <div className="footer-middle">
          <h3>FDA Compliance</h3>
          <p>
            All content and information found on this page are for informational purposes only and are not intended
            to diagnose, treat, cure or prevent any disease. The FDA hasn’t evaluated the statements provided on this
            page. Make sure you consult with a licensed doctor before taking any supplement or making any changes to
            your diet or exercise plan. Individual results may vary.
          </p>
          <p>
            The display of third-party trademarks and trade names on this site does not necessarily indicate any
            affiliation or endorsements of our website. If you click a merchant link and buy a product or service on
            their website, we may be paid a fee by the merchant.
          </p>
        </div>
        <div className="footer-right">
          <a href="#">Privacy Policy</a> | <a href="#">Disclaimer</a> | <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
