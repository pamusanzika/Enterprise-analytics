import React from 'react';
import './CtaBanner.css';

export default function ERPBanner() {
  return (
    <div className="cta-container">
      <div className="cta-top-section">
        <div className="cta-overlay-image" style={{ backgroundImage: "url('/Cta-bg.svg')" }} />
        <h2 className="cta-title">
          Let's Power Your ERP<br />
          Transformation
        </h2>
        <button className="cta-button">
          Request a Meeting →
        </button>
      </div>

      <div className="cta-bottom-section">
        <div className="cta-card">
          <div className="cta-icon-box">
            <img src="/headset.svg" alt="Headset" />
          </div>
          <div className="cta-card-content">
            <h3 className="cta-card-title">
              Get Tailored Guidance<br />
              for Your Needs
            </h3>
            <p className="cta-card-link">
              Speak with an expert <img src="/green-arrow.svg" alt="arrow" />
            </p>
          </div>
        </div>

        <div className="cta-card">
          <div className="cta-icon-box">
            <img src="/people.svg" alt="People" />
          </div>
          <div className="cta-card-content">
            <h3 className="cta-card-title">
              Be part of the next generation<br />
              shaping ERP transformation
            </h3>
            <p className="cta-card-link">
              Join our team <img src="/green-arrow.svg" alt="arrow" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}