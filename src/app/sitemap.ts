import type { MetadataRoute } from "next";
import {
  generateSitemapsForBlogAndBasicAppPages,
  generateSitemapsForJobSearchConditions,
  sitemapLists,
} from "../utils/sitemap";
import { generateSitemapsForAllJobs } from "../utils/sitemap/jobs";

export const revalidate = 3600; // 1 hour

export async function generateSitemaps() {
  return sitemapLists;
}

export default async function sitemap({
  id,
}: {
  id: number | "jobs";
}): Promise<MetadataRoute.Sitemap> {
  switch (id) {
    case 0:
      return generateSitemapsForBlogAndBasicAppPages();
    case 1:
      return generateSitemapsForJobSearchConditions();
    case "jobs":
      return generateSitemapsForAllJobs();
    default:
      return [];
  }
}
