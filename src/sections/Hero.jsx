import React from "react";
import { getStrapiMedia } from "../utils/media";
import Header from "../components/Header";

export default function Hero({
  title,
  subtitle,
  buttontext,
  slug,
  link,
  trustbadge,
}) {
  return (
    <section
      style={{
        padding: "30px 24px 90px 24px",
        background: "rgba(2, 53, 49, 1)",
        color: "#ffffff",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <Header />
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Title */}
        <h1 style={{ 
          fontSize: 48, 
          marginBottom: 14,
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif'
        }}>
          {title}
        </h1>

        {/* Subtitle */}
        <h2
          style={{
            fontSize: 22,
            fontWeight: 400,
            opacity: 0.9,
            maxWidth: 700,
          }}
        >
          {subtitle}
        </h2>

        {/* Description (slug used as body text) */}
        {slug && (
          <p
            style={{
              marginTop: 18,
              maxWidth: 620,
              fontSize: 16,
              lineHeight: 1.6,
              opacity: 0.85,
            }}
          >
            {slug}
          </p>
        )}

        {/* CTA */}
        {buttontext && (
          <div style={{ marginTop: 28 }}>
            <a
              href={link || "#"}
              style={{
                display: "inline-block",
                background: "#ffffff",
                color: "#0b3d2e",
                padding: "14px 22px",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              {buttontext}
            </a>
          </div>
        )}

        {/* Trust Badge */}
        {trustbadge && (
          <div style={{ marginTop: 36 }}>
            <img
              src={getStrapiMedia(trustbadge)}
              alt="Trust badge"
              style={{ height: 42 }}
            />
          </div>
        )}
      </div>
    </section>
  );
}

