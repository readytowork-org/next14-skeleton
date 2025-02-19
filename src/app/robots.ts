import type { MetadataRoute } from "next";
import { sitemapLists } from "../utils/sitemap";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.CONSUMER_HOST;
  const isProduction =
    process.env.NEXT_PUBLIC_ENVIRONMENT === "production" ||
    process.env.NEXT_PUBLIC_ENVIRONMENT === "Production";

  return {
    rules: isProduction
      ? [
          {
            userAgent: "*",
            disallow: ["/blog/preview/*"],
          },
          {
            userAgent: "*",
            allow: ["/"],
          },
        ]
      : [
          {
            userAgent: "*",
            disallow: ["/"],
          },
        ],
    sitemap: isProduction
      ? sitemapLists.map(({ id }) => `${baseUrl}/sitemap/${id}.xml`)
      : [],
  };
}
