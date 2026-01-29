import React from "react";
import { getStrapiMedia } from "../utils/media";
import Header from "../components/Header";
import "./Hero.css";

export default function Hero({
  title,
  subtitle,
  buttontext,
  slug,
  link,
  trustbadge,
}) {
  return (
    <section className="hero-section" style={{ backgroundImage: 'url(/Hero-bg.png)' }}>
      {/* Hologram GIF Overlay */}
      <img
        className="hologram-image"
        src="/Hologram.gif"
        alt="Hologram"
      />
      
      <div className="header-wrapper">
        <Header />
      </div>
      
      <div className="content-wrapper">
        <div className="content-container">
          
          {/* Mobile GIF - uses CSS background-image for better blend mode support */}
          <div 
            className="mobile-media-wrapper" 
            aria-label="Hero visual" 
            role="img" 
            style={{ backgroundImage: 'url(/Hologram.gif)' }}
          />
          
          {/* Title */}
          <h1 className="hero-title">
            {title}
          </h1>

          {/* Subtitle */}
          <h2 className="hero-subtitle">
            {subtitle}
          </h2>

          {/* CTA */}
          {buttontext && (
            <div className="cta-wrapper">
              <a className="cta-button" href={link || "#"}>
                {buttontext}
                <img className="arrow-icon" src="/arrow-icon.svg" alt="arrow" loading="lazy" />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Trust Badge and Description - Positioned at bottom */}
      {(trustbadge || slug) && (
        <div className="trust-badge-container" style={{ backgroundImage: 'url(/Rectanglebg.png)' }}>
          {/* Trust Badges */}
          {trustbadge && (
            <div className="badge-wrapper">
              {Array.isArray(trustbadge) ? (
                trustbadge.map((badge, index) => (
                  <img
                    className="badge-image"
                    key={index}
                    src={getStrapiMedia(badge)}
                    alt={`Trust badge ${index + 1}`}
                  />
                ))
              ) : (
                <img
                  className="badge-image"
                  src={getStrapiMedia(trustbadge)}
                  alt="Trust badge"
                />
              )}
            </div>
          )}
          
          {/* Description */}
          {slug && (
            <p className="description">
              {slug}
            </p>
          )}
        </div>
      )}
    </section>
  );
}