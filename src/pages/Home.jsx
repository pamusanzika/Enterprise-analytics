import React, { useEffect, useState } from "react";
import { fetchHomePage } from "../api/strapi";
import Hero from "../sections/Hero";

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
    </main>
  );
}
