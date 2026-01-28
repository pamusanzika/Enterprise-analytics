import React from "react";
import "./ValueCards.css";

export default function IFSServices() {
  return (
    <div className="value-cards-container">
      <div className="value-cards-max-width">
        <div className="value-cards-header">
          <h1 className="value-cards-title">
            Value Delivered At Speed.
            <br />
            Optimized For Every Customer.
          </h1>
          <p className="value-cards-subtitle">
            We provide end to end expertise that helps organizations unlock the
            full value of their IFS solutions, delivering tailored, scalable,
            and impactful transformations.
          </p>
        </div>

        {/* Row 1 */}
        <div className="value-cards-top-grid">
          <div className="value-card value-card--cloud" style={{ backgroundImage: "url('/Ifs-cloud.png')" }}>
            <h2 className="value-card-title value-card-title--white">
              IFS Cloud
              <br />
              Implementations
            </h2>
            <img className="value-card-arrow" src="/card-arrow.svg" alt="arrow" />
          </div>

          <div className="value-card value-card--upgrade" style={{ backgroundImage: "url('/upgradecloud.svg')" }}>
            <h2 className="value-card-title value-card-title--dark">
              Upgrade to
              <br />
              IFS Cloud
            </h2>
            <img className="value-card-arrow" src="/card-arrow.svg" alt="arrow" />
          </div>

          <div className="value-card value-card--ams" style={{ backgroundImage: "url('/Ams.svg')" }}>
            <h2 className="value-card-title value-card-title--dark">
              Application Management
              <br />
              Services (AMS)
            </h2>
            <img className="value-card-arrow" src="/card-arrow.svg" alt="arrow" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="value-cards-second-row">
          <div className="value-card value-card--bau" style={{ backgroundImage: "url('/BAU.svg')" }}>
            <div className="value-card-content">
              <h2 className="value-card-title value-card-title--dark">
                Application Business-as-Usual
                <br />
                (BAU) Support
              </h2>
              <img className="value-card-arrow" src="/4arrow.svg" alt="arrow" />
            </div>
          </div>

          <div className="value-card value-card--value-added" style={{ backgroundImage: "url('/valueadded.svg')" }}>
            <div className="value-card-content value-card-content--center">
              <h2 className="value-card-title value-card-title--dark">Value added services</h2>
              <img className="value-card-arrow" src="/5arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}