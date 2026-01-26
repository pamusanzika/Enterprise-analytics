import React from "react";
import styled from "styled-components";
import { getStrapiMedia } from "../utils/media";
import Header from "../components/Header";

const HeroSection = styled.section`
  padding: 30px 24px 90px 24px;
  background: rgba(2, 53, 49, 1);
  background-image: url(/Hero-bg.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  height: 812px;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px 16px 60px 16px;
  }
`;

const HologramImage = styled.img`
  position: absolute;
  width: 1001px;
  height: 751px;
  top: 144px;
  left: 591px;
  opacity: 1;
  mix-blend-mode: color-dodge;
  pointer-events: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderWrapper = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  position: relative;
  z-index: 100; /* Increased z-index to ensure header stays on top */
`;

const ContentWrapper = styled.div`
  max-width: 1160px;
  margin: 110px auto;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 768px) {
    margin: 40px auto;
    justify-content: center;
    align-items: center;
  }
`;

const ContentContainer = styled.div`
  max-width: 569px;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const MobileMedia = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 280px;
    height: auto;
    margin: 32px auto 32px auto;
    border-radius: 12px;
    /* Fixed blend mode for better mobile compatibility */
    mix-blend-mode: screen; /* Changed from color-dodge to screen for better mobile rendering */
    opacity: 0.85;
  }
`;

const HeroTitle = styled.h1`
  font-family: 'SF Pro', -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif;
  font-weight: 590;
  font-size: 56px;
  line-height: 68px;
  letter-spacing: 1%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 44px;
  }
`;

const HeroSubtitle = styled.h2`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  margin-bottom: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -1%;
  color: rgba(255, 255, 255, 0.72);
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const CTAWrapper = styled.div`
  margin-top: 36px;

  @media (max-width: 768px) {
    margin-top: 32px;
    justify-content: center;
  }
`;

const CTAButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 238px;
  background: radial-gradient(90.73% 151.92% at 48.32% -51.92%, rgba(255, 255, 255, 0.1885) 0%, rgba(255, 255, 255, 0.0667) 100%);
  color: #ffffff;
  padding: 12px 24px 14px 24px;
  border-radius: 64px;
  text-decoration: none;
  gap: 12px;
  box-shadow: 0px -5px 12.5px 3px rgba(255, 255, 255, 0.13) inset;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -1%;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const ArrowIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const TrustBadgeContainer = styled.div`
  position: absolute;
  width: 685px;
  height: 175px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
  background-image: url(/Rectanglebg.png);
  background-size: cover;
  background-position: center;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 20px 16px;
    position: relative;
    transform: none;
    left: 0;
  }
`;

const BadgeWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;

const BadgeImage = styled.img`
  height: 42px;
`;

const Description = styled.p`
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  letter-spacing: -1%;
  text-align: center;
  color: rgba(255, 255, 255, 0.75);
`;

export default function Hero({
  title,
  subtitle,
  buttontext,
  slug,
  link,
  trustbadge,
}) {
  return (
    <HeroSection>
      {/* Hologram GIF Overlay */}
      <HologramImage
        src="/Hologram.gif"
        alt="Hologram"
      />
      
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      
      <ContentWrapper>
        <ContentContainer>
          
          {/* Mobile GIF/Video - appears between header and H1 on mobile only */}
          <MobileMedia
            src="/Hologram.gif"
            alt="Hero visual"
          />
          
          {/* Title */}
          <HeroTitle>
            {title}
          </HeroTitle>

          {/* Subtitle */}
          <HeroSubtitle>
            {subtitle}
          </HeroSubtitle>

          {/* CTA */}
          {buttontext && (
            <CTAWrapper>
              <CTAButton href={link || "#"}>
                {buttontext}
                <ArrowIcon src="/arrow-icon.svg" alt="arrow" />
              </CTAButton>
            </CTAWrapper>
          )}
        </ContentContainer>
      </ContentWrapper>

      {/* Trust Badge and Description - Positioned at bottom */}
      {(trustbadge || slug) && (
        <TrustBadgeContainer>
          {/* Trust Badges */}
          {trustbadge && (
            <BadgeWrapper>
              {Array.isArray(trustbadge) ? (
                trustbadge.map((badge, index) => (
                  <BadgeImage
                    key={index}
                    src={getStrapiMedia(badge)}
                    alt={`Trust badge ${index + 1}`}
                  />
                ))
              ) : (
                <BadgeImage
                  src={getStrapiMedia(trustbadge)}
                  alt="Trust badge"
                />
              )}
            </BadgeWrapper>
          )}
          
          {/* Description */}
          {slug && (
            <Description>
              {slug}
            </Description>
          )}
        </TrustBadgeContainer>
      )}
    </HeroSection>
  );
}