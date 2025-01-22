import React from 'react';
import Productimg from '../../assets/product-1.webp';
import Brandimg from '../../assets/Brand-1.webp';
import './Home.css';
import CoustmerReview from '../../Components/CoustmerReview/CoustmerReview';
import WhyChoose from '../../Components/WhyChoose/WhyChoose';
import Whatisourbusiness from '../../Components/Whatisourbusiness/Whatisourbusiness';
import HowDoesWork from '../../Components/HowDoesWork/HowDoesWork';
import LimitedPrice from '../../Components/LimitedSpecialPrice/LimitedPrice';
import BonousSec from '../../Components/BonousSec/BonousSec';
import WhatIngradient from '../../Components/WhatIngradient/WhatIngradient';
import ScientificallySection from '../../Components/ScientificallySection/ScientificallySection';
import BenifitOfPurple from '../../Components/BenifitOfPurple/BenifitOfPurple';
import Faq from '../../Components/Faq/Faq';
import DiscountedPage from '../../Components/DiscountedPage/DiscountedPage';

const Home = () => {
  return (
    <>
    <div className="home-section">
      <div className="content-container">
        <div className="product-section">
          <img src={Productimg} alt="Product" className="product-image" />
          <div className="brand-below-product">
            <img src={Brandimg} alt="Brand" className="brand-below-logo" />
          </div>
        </div>
        <div className="content-section">
          <h1 className="title">
            Purple Peel Exploit (Mitolyn): Safe and Effective Weight Loss
          </h1>
          <p className="description">
            Purple Peel Exploit (Mitolyn) is a natural dietary supplement that
            supports weight loss and enhances metabolic function. It is marketed
            as a weight loss aid, leveraging a blend of potent ingredients known
            for their properties in promoting energy production and improving
            metabolic rate.
          </p>
          <p className="description">
            This supplement targets the root causes of sluggish metabolism,
            addressing issues like low mitochondrial levels, often found in
            overweight individuals. The formulation is crafted to assist in weight
            management and help users feel more energized and healthier overall.
          </p>
          <button className="cta-button">
            GET YOUR DISCOUNT NOW <span className="cart-icon">🛒</span>
          </button>
        </div>
      </div>
    </div>
    <CoustmerReview />
    <WhyChoose />
    <Whatisourbusiness />
    <HowDoesWork />
    <LimitedPrice />
    <BonousSec />
    <WhatIngradient />
    <ScientificallySection />
    <BenifitOfPurple />
    <LimitedPrice />
    <Faq />
    <DiscountedPage />
   </>
  );
};

export default Home;
