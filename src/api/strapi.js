import axios from "axios";

export const strapi = axios.create({
  baseURL: process.env.REACT_APP_STRAPI_URL,
});

export async function fetchHomePage() {
  const res = await strapi.get("/api/home-page", {
    params: {
      populate: {
        Hero: { populate: "*" }, // your schema key is "Hero"
      },
    },
  });

  const data = res.data?.data;

  // Strapi v5: fields live directly under `data`
  if (data && !data.attributes) return data;

  // Strapi v4: fields live under `data.attributes`
  return data?.attributes;
}
