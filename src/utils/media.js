export function getStrapiMedia(media) {
  if (!media) return "";

  // If media is an array (your case), take the first file
  const file = Array.isArray(media) ? media[0] : media;

  // Strapi v5 file object: usually has `url` directly
  const url = file?.url;

  // Fallback: Strapi v4 style: { data: { attributes: { url } } }
  const v4Url = file?.data?.attributes?.url;

  const finalUrl = url || v4Url;
  if (!finalUrl) return "";

  if (finalUrl.startsWith("http")) return finalUrl;
  return `${process.env.REACT_APP_STRAPI_URL}${finalUrl}`;
}
