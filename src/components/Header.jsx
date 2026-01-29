import React, { useEffect, useState } from "react";
import "./header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open (mobile)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className="ea-header">
      <div className="ea-inner">
        {/* Logo */}
        <a className="ea-logo" href="/">
          <img 
            src="/logo.svg" 
            alt="Enterprise Analytics" 
            className="ea-logo-img"
            loading="lazy"
            width="140"
            height="40"
          />
        </a>

        {/* Desktop nav */}
        <nav className="ea-nav" aria-label="Primary">
          <a className="ea-link" href="/industries">
            Industries 
          </a>
          <a className="ea-link" href="/solutions">
            Solutions
          </a>
          <a className="ea-link" href="/services">
            Services 
          </a>
          <a className="ea-link" href="/about">
            About Us
          </a>
          <a className="ea-link" href="/careers">
            Careers
          </a>
          <a className="ea-link" href="/blog">
            Blogs
          </a>
        </nav>

        {/* Actions */}
        <div className="ea-actions">
          <a className="ea-cta ea-cta-desktop" href="#contact">
            Contact Us
          </a>

          {/* Mobile hamburger */}
          <button
            className="ea-burger"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile overlay + drawer */}
      <div className={`ea-overlay ${open ? "is-open" : ""}`}>
        <div
          className="ea-overlay-bg"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <aside className="ea-drawer" role="dialog" aria-modal="true">
          <div className="ea-drawer-head">
            <span className="ea-drawer-title">Menu</span>
            <button
              className="ea-close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              type="button"
            >
              ✕
            </button>
          </div>

          <div className="ea-drawer-body">
            <a className="ea-drawer-link" href="/industries">
              Industries
            </a>
            <a className="ea-drawer-link" href="/solutions">
              Solutions
            </a>
            <a className="ea-drawer-link" href="/services">
              Services
            </a>
            <a className="ea-drawer-link" href="/about">
              About Us
            </a>
            <a className="ea-drawer-link" href="/careers">
              Careers
            </a>
            <a className="ea-drawer-link" href="/blog">
              Blogs
            </a>

            <a className="ea-cta ea-cta-mobile" href="#contact">
              Contact Us
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
