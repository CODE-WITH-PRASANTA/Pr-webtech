import React from 'react';
import { Helmet } from 'react-helmet';
import './BonousSec.css';

// Assets for the bonus section
import Bonous1 from '../../assets/Bonous-1.webp';
import Bonous2 from '../../assets/Bonous-2.webp';

const BonousSec = () => {
  return (
    <>
      <Helmet>
        {/* Preload bonus images */}
        <link rel="preload" as="image" href={Bonous1} type="image/webp" />
        <link rel="preload" as="image" href={Bonous2} type="image/webp" />
      </Helmet>

      <div className="bonus-section">
        <h2 className="bonus-title">
          Order 6 Bottles or 3 Bottles <span>And Get 2 Free Bonuses!</span>
        </h2>

        <div className="bonus-container">
          {/* Bonus #1 */}
          <div className="bonous-one">
            <div className="bonus-card">
            <img
              src={Bonous1}
              alt="1-Day Kickstart Detox"
              className="bonus-image"
              width="405"
              height="auto" /* Replace "auto" with the actual height if known */
            />

            </div>
            <h3 className="bonus-header">BONUS #1</h3>
            <h4 className="bonus-name">1-Day Kickstart Detox</h4>
            <p className="bonus-free">100% FREE</p>
            <p className="bonus-description">
              Detox, cleanse and flush your organs to aid absorption and kickstart your Mitolyn journey with 20 bizarre 15 second detox tea recipes, using everyday ingredients from your kitchen.
            </p>
          </div>

          {/* Bonus #2 */}
          <div className="bonous-two">
            <div className="bonus-card">
            <img
              src={Bonous2}
              alt="1-Day Kickstart Detox"
              className="bonus-image"
              width="405"
              height="auto" /* Replace "auto" with the actual height if known */
            />

            </div>
            <h3 className="bonus-header">BONUS #2</h3>
            <h4 className="bonus-name">Renew You</h4>
            <p className="bonus-free">100% FREE</p>
            <p className="bonus-description">
              With your brand-new fast-tracked body comes a new mindset. Discover simple methods you can do right now to instantly relieve stress and calm your mind, boost confidence, and reduce anxiety.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BonousSec;
