// src/sections/Industries.jsx
import React from "react";
import { ChevronRight } from "lucide-react";
import "./Industries.css";

const getMediaUrl = (file) => {
  if (!file) return null;
  const url = file.url || file?.data?.attributes?.url;
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return `${process.env.REACT_APP_STRAPI_URL}${url}`;
};

export default function Industries({ cards = [] }) {
  if (!cards?.length) return null;

  const formatTitle = (title, index) => {
    if (index < 3 && title) {
      const words = title.split(' ');
      if (words.length > 1) {
        return (
          <>
            {words[0]}<br />
            {words.slice(1).join(' ')}
          </>
        );
      }
    }
    return title;
  };

  return (
    <section className="industries-section">
      <div className="industries-outer">
        <div className="industries-grid">
          {cards.map((card, index) => {
            const imgSrc = getMediaUrl(card.image);

            const content = (
              <>
                <span>{card.linktext || "Discover More"}</span>
                <ChevronRight className="industries-chevron" />
              </>
            );

            return (
              <div 
                key={card.id || index} 
                className={`industries-card${index < 3 ? ' show-border' : ''}`}
              >
                <div className="industries-image-wrap">
                  {imgSrc ? (
                    <img 
                      src={imgSrc} 
                      alt={card.title || "Industry"} 
                      className="industries-img"
                    />
                  ) : (
                    <div className="industries-placeholder" />
                  )}
                </div>

                <div className="industries-body">
                  <h3 className="industries-title">{formatTitle(card.title, index)}</h3>

                  {card.link ? (
                    <a 
                      href={card.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="industries-link-row"
                    >
                      {content}
                    </a>
                  ) : (
                    <button 
                      type="button" 
                      onClick={() => {}}
                      className="industries-button-row"
                    >
                      {content}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
