import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Is Purple Peel Exploit (Mitolyn) right for me?',
      answer:
        'Do you have deep stubborn fat stores that no diet or exercise seems to remove? Then the answer is yes Mitolyn is right for you. Mitolyn has changed the lives of thousands of women and men from 18 to 80 and is designed to rapidly liquify fat in even the worst cases..',
    },
    {
      question: 'Is Purple Peel Exploit (Mitolyn) safe?',
      answer:
        'Mitolyn is a natural proprietary formula manufactured in the USA at our FDA registered and GMP certified facility using state of the art, precision engineered machinery and under the strictest and most sterile standards. Each ingredient is 100% plant-based, soy-free, dairy-free, non-GMO, and put through additional third-party inspections and quality control to ensure high purity and potency. As always we advise you to show a bottle of this to your doctor before you take it, just to be safe.',
    },
    {
      question: 'How many bottles should I order?',
      answer:
        'If you are over 35 years old or carry excess weight, we recommend you take Mitolyn for at least 3 to 6 months so it has enough time to work throughout your entire body to support healthy mitochondria levels, reach your desired weight, and lock it in for years into the future. Every 3 bottle package of Mitolyn comes with the 2 bonus books absolutely free. Or make the smart decision and get the heavily discounted 6 bottle package, which comes with the 2 bonus books absolutely free along with free shipping as well.',
    },
    {
      question: "What's the best way to take Mitolyn?",
      answer:
        'Take one capsule of Mitolyn with a big glass of cold water every day. It is bespoke proprietary blend of natural ingredients will get to work dissolving fat for you even when sleeping.',
    },
    {
      question: 'Is this a one-time payment?',
      answer:
        'Yes, your order today is a one-time payment with no auto-ship, subscriptions or hidden charges.',
    },
    {
      question: "What if Purple Peel Exploit (Mitolyn) doesn't work for me?",
      answer:
        'Every single bottle of Mitolyn comes with our personal 90-day 100% money back guarantee. If for any reason you are unsatisfied with your results, just return all bottles (even if empty) for a full, no questions asked refund.',
    },
    {
      question: 'What do I do now?',
      answer:
        'This is the fun part. Click on one of the packages below. Enter your order details on our secure checkout page. After you have finished we will get your Mitolyn shipped out to you straight away. Order 3 bottles and get the 2 free bonus books, or order 6 bottles and get the 2 free bonus books plus free shipping as well.',
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Purple Peel Exploit (Mitolyn) Frequently Asked Questions</h1>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question}
              <span className="faq-icon">{activeIndex === index ? '▲' : '▼'}</span>
            </div>
            <div
              className={`faq-answer-container ${
                activeIndex === index ? 'open' : ''
              }`}
            >
              <div className="faq-answer">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
