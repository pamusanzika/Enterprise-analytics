import axios from "axios";

export const strapi = axios.create({
  baseURL: process.env.REACT_APP_STRAPI_URL, // http://localhost:1337
});

// api/strapi.js
export async function fetchHomePage() {
  const res = await strapi.get("/api/home-page", {
    params: {
      populate: {
        Hero: { populate: "*" },
        featurestrip: {
          populate: {
            features: { populate: "*" }, // ✅ works (includes icon object with url)
          },
        },
        cards: { populate: "*" },
      },
    },
  });

  return res.data?.data;
}

