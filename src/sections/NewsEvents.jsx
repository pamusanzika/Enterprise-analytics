import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NewsEvents.css';

function NewsCard({ item, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  return (
    <div 
      className="news-card-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="news-image-container">
        <img 
          className={`news-image ${isHovered ? 'hovered' : ''}`}
          src={item.image}
          alt={item.title}
        />
      </div>

      <div className="news-card-content">
        <div className="news-meta-container">
          <span className="news-badge">NEWS</span>
          <span className="news-date-text">• {item.date}</span>
        </div>

        <div className="news-title-readmore-container">
          <h3 className="news-card-title">{item.title}</h3>
          <Link
            to="/news-events"
            className={`news-read-more-link ${isLinkHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsLinkHovered(true)}
            onMouseLeave={() => setIsLinkHovered(false)}
          >
            Read More
            <svg className="news-arrow-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function NewsEvents() {
  const newsItems = [
    {
      id: 1,
      image: "/News1.png",
      date: "March 16, 2023",
      title: "Singer Sri Lanka chooses Enterprise Analytics as their trusted IFS Partner",
    },
    {
      id: 2,
      image: "/news2.png",
      date: "March 16, 2023",
      title: "Enterprise Analytics and M Power Capital partner to equip Bangladesh, Maldives and Sri Lanka with...",
    },
    {
      id: 3,
      image: "/news3.png",
      date: "March 16, 2023",
      title: "Profoto AB, Sweden chooses Enterprise Analytics as their trusted IFS Partner",
    },
  ];

  return (
    <section className="news-events-section">
      <div className="news-events-container">
        <h1 className="news-events-title">News And Events</h1>

        <div className="news-grid">
          {newsItems.map((item, index) => (
            <NewsCard key={item.id} item={item} index={index} />
          ))}
        </div>

        <div className="news-button-container">
          <button className="news-explore-button">
            Explore More
            <img src="/exploreicon.svg" alt="arrow" className="news-explore-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}