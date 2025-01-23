import React from 'react';
import './Whatisourbusiness.css';

// Importing the product image
import Productimg from '../../assets/Product-2.webp';

const Whatisourbusiness = () => {
  return (
    <section className="business-section">
      {/* Section Title */}
      <h2 className="business-title">What is Purple Peel Exploit (Mitolyn)?</h2>

      <div className="business-container">
        {/* Text Content */}
        <div className="business-content">
          <p className="business-paragraph">
            Purple Peel Exploit is a cutting-edge dietary supplement designed to support overall health, boost metabolism, and assist in weight management. Developed with a blend of powerful natural ingredients, Purple Peel Exploit is formulated to provide a range of health benefits, from improving energy levels to promoting fat burning and enhancing mental clarity.
          </p>
          <p className="business-paragraph">
            At its core, Purple Peel Exploit focuses on optimizing metabolic processes and reducing oxidative stress in the body. The supplement contains a unique combination of antioxidants, adaptogens, and metabolism-boosting ingredients like Maqui Berry, Astaxanthin, and Rhodiola. These components work together to protect the body from the damaging effects of free radicals, support the immune system, and encourage healthy digestion.
          </p>
          <p className="business-paragraph">
            Purple Peel Exploit is not just another weight loss supplement. Its holistic approach aims to improve overall vitality by increasing energy, reducing fatigue, and enhancing mental focus. Whether you're looking to maintain a healthy weight, improve your physical performance, or simply boost your well-being, Purple Peel Exploit offers a natural and effective solution to help you achieve your health goals.
          </p>
        </div>

        {/* Image Section */}
        <div className="business-image-container">
          <img src={Productimg} alt="Mitolyn Product" className="business-image" />
        </div>
      </div>
    </section>
  );
};

export default Whatisourbusiness;
