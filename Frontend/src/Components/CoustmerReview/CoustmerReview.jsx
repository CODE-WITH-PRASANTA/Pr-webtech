import React from 'react';
import './CoustmerReview.css';

import Coustmer1 from '../../assets/coustmer-1.webp';
import Coustmer2 from '../../assets/coustmer-2.webp';
import Coustmer3 from '../../assets/coustmer-3.webp';

const CoustmerReview = () => {
  return (
    <div className="customer-review-section">
      <h2 className="review-heading">Purple Peel Exploit (Mitolyn) Reviews</h2>
      <div className="review-container">
        {/* First Review */}
        <div className="review-card">
          <img src={Coustmer1} alt="Customer 1" className="review-img" />
          <div className="review-content">
            <h3 className="review-title">Peggy is 35 lbs lighter...</h3>
            <span className="review-verification"> Verified Purchase</span>
            <p className="review-text">
              I always felt self-conscious about my appearance, especially in social situations. Since trying Mitolyn, I've lost 35 pounds, and for the first time in years, I actually enjoy looking in the mirror. It's incredible how this change has boosted my confidence and made me feel like myself again!
            </p>
            <p className="review-author">Peggy B. - Rexton, MI</p>
          </div>
        </div>

        {/* Second Review */}
        <div className="review-card">
          <img src={Coustmer2} alt="Customer 2" className="review-img" />
          <div className="review-content">
            <h3 className="review-title">Russel has torched 29 lbs...</h3>
            <span className="review-verification"> Verified Purchase</span>
            <p className="review-text">
              No matter what I tried, my weight just wouldn’t budge, especially around my belly. Mitolyn kick-started my metabolism and finally helped me shed 29 stubborn pounds. I feel lighter and more energetic, and my clothes are fitting so much better now — it's a huge relief.
            </p>
            <p className="review-author">Russell L. - Macon, GA</p>
          </div>
        </div>

        {/* Third Review Placeholder */}
        <div className="review-card">
          <img src={Coustmer3} alt="Customer 3" className="review-img" />
          <div className="review-content">
            <h3 className="review-title">Connie's dropped 40 lbs...</h3>
            <span className="review-verification"> Verified Purchase</span>
            <p className="review-text">
            Being overweight made even basic activities exhausting. I could hardly play with my kids without feeling out of breath. After using Mitolyn, I've dropped 40 pounds, and I can keep up with my kids without feeling tired all the time. I have my energy and freedom back!
            </p>
            <p className="review-author">Connie A.- Montclair,  NJ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoustmerReview;
