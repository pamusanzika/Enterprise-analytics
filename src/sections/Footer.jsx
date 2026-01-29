import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container" style={{ backgroundImage: "url('/ft-bg.svg')" }}>
      <div className="footer-wrapper">
        {/* Main Footer Content */}
        <div className="main-content">
          {/* Logo */}
          <div className="footer-column">
            <div className="logo-section">
              <div className="logo-icon">
                <img src="/FT-logo.svg" alt="Enterprise Analytics Logo" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Industries */}
          <div className="footer-column">
            <h3 className="column-title">Industries</h3>
            <ul className="link-list">
              <li className="link-item"><Link to="/industries/manufacturing">Manufacturing Industries</Link></li>
              <li className="link-item"><Link to="/industries/service">Service Industries</Link></li>
              <li className="link-item"><Link to="/industries/construction">Construction Industries</Link></li>
              <li className="link-item"><Link to="/industries/energy">Energy Utilities & Resources Industries</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="footer-column">
            <h3 className="column-title">Solutions</h3>
            <ul className="link-list">
              <li className="link-item"><Link to="/solutions/ifs-cloud">ERP - IFS Cloud</Link></li>
              <li className="link-item"><Link to="/solutions/acumatica">ERP - Acumatica</Link></li>
              <li className="link-item"><Link to="/solutions/crystalclear">CrystalClear for IFS</Link></li>
              <li className="link-item"><Link to="/solutions/documate">DocuMate for IFS</Link></li>
              <li className="link-item"><Link to="/solutions/finmate">FinMate for IFS</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3 className="column-title">Services</h3>
            <ul className="link-list">
              <li className="link-item"><Link to="/services/ifs-cloud-implementations">IFS cloud implementations</Link></li>
              <li className="link-item"><Link to="/services/upgrade-to-cloud">Upgrade to cloud</Link></li>
              <li className="link-item"><Link to="/services/consulting">Consulting</Link></li>
              <li className="link-item"><Link to="/services/documate">DocuMate for IFS</Link></li>
              <li className="link-item"><Link to="/services/ams">Application Management Services (AMS)</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h3 className="column-title">Company</h3>
            <ul className="link-list">
              <li className="link-item"><Link to="/about">About Us</Link></li>
              <li className="link-item"><Link to="/careers">Careers</Link></li>
              <li className="link-item"><Link to="/news-events">News & Events</Link></li>
              <li className="link-item"><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Icons and Badges */}
        <div className="middle-section">
          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/enterprise-analytics/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/enterpriseanalytics/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/enterpriseanalytics/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
          </div>

          {/* Badges */}
          <div className="badges-container">
            <div className="partner-logo">
              <img src="/partners.svg" alt="Partner Logo" loading="lazy" />
            </div>
            <div className="partner-logo">
              <img src="/image 22.svg" alt="Partner Logo" loading="lazy" />
            </div>
            <div className="partner-logo">
              <img src="/image 23.svg" alt="Partner Logo" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bottom-bar">
          <div className="copyright">© 2025 Enterprise Analytics. All rights reserved.</div>
          <div className="legal-links">
            <Link to="/terms">Terms and condition</Link>
            <Link to="/privacy">Privacy policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;