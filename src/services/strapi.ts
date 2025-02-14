import axios from "axios";

const STRAPI_API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1338";

export const fetchPortfolioItems = async () => {
  try {
    const response = await axios.get(
      `${STRAPI_API_URL}/api/portfolios?populate=*&sort=id:desc`
    );
    return response.data.data.map((item: any) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      link: item.link,
      image: {
        url: `${STRAPI_API_URL}${item.image.formats.large.url}`,
        formats: item.image.formats,
      },
    }));
  } catch (error) {
    console.error("Error fetching portfolio items from Strapi:", error);
    return [];
  }
};
