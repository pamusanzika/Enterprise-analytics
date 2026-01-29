import React from 'react';
import './FeatureStrip.css';

export default function IFSCloudLanding({ title, description, buttontext, features }) {
  // Default features if none provided
  const defaultFeatures = [
    { featurename: 'IFS.AI Intelligence', icon: '/feature-icon-1.svg' },
    { featurename: 'Anomaly Detection', icon: '/feature-icon-2.svg' },
    { featurename: 'Predictive Analytics', icon: '/feature-icon-3.svg' },
    { featurename: 'Process Automation', icon: '/feature-icon-4.svg' },
    { featurename: 'Actionable Insights', icon: '/feature-icon-5.svg' },
  ];

  const featuresList = features || defaultFeatures;

  return (
    <div className="feature-strip-container" style={{ backgroundImage: "url('/right side.svg')" }}>
      <div className="feature-strip-grid">
        {/* Left Section - Empty */}
        <div className="feature-strip-left" />

        {/* Right Section - Content */}
        <div className="feature-strip-right">
          <div>
            <h1 className="feature-strip-title">
              {title}
            </h1>
            <p className="feature-strip-subtitle">
              {description}
            </p>
            {/* Mobile image - shown only on mobile */}
            <div className="feature-strip-mobile-image">
              <img src="/mobile.svg" alt="Feature illustration" loading="lazy" />
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="feature-strip-benefits-grid">
            <div className="feature-strip-benefits-row">
              {featuresList.map((feature, index) => {
                const iconUrl = feature.icon?.url
                  ? `${process.env.REACT_APP_STRAPI_URL}${feature.icon.url}`
                  : null;

                return (
                  <div key={feature.id || index}>
                    <div className="feature-strip-benefit-icon-wrapper">
                      {iconUrl ? (
                        <img
                          src={iconUrl}
                          alt={feature.featurename}
                        />
                      ) : (
                        <svg
                          className="feature-strip-benefit-icon"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <circle cx="12" cy="12" r="6" />
                          <circle cx="12" cy="12" r="2" />
                        </svg>
                      )}
                    </div>

                    <h3 className="feature-strip-benefit-title">
                      {feature.featurename}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Learn More Button */}
          <div>
            <button className="feature-strip-cta-button">
              {buttontext || 'Learn More'}
              <img src="/Frame (3).svg" alt="arrow" loading="lazy" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}