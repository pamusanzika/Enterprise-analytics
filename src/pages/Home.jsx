import React, { useEffect, useState } from "react";
import { fetchHomePage } from "../api/strapi";
import Hero from "../sections/Hero";
import FeatureStrip from "../sections/FeatureStrip";
import IndustryShowcase from "../sections/Industries";
import ValueCards from "../sections/ValueCards";
import NewsEvents from "../sections/NewsEvents";
import CtaBanner from "../sections/CtaBanner";
import Footer from "../sections/Footer";

export default function Home() {
  const [home, setHome] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHomePage()
      .then((data) => {
        console.log("Home data:", data);
        setHome(data);
      })
      .catch((err) => {
        console.error("Failed to fetch homepage:", err);
        setError(err);
      });
  }, []);

  if (error) return <div style={{ padding: 24 }}>Failed to load</div>;
  if (!home) return <div style={{ padding: 24 }}>Loading...</div>;

return (
  <main>
    {home.Hero && <Hero {...home.Hero} />}
    {home.featurestrip && <FeatureStrip {...home.featurestrip} />}
    
    {home.cards && <IndustryShowcase cards={home.cards} />}
    <ValueCards />
    <NewsEvents />
    <CtaBanner />
    <Footer />
  </main>
);


}
