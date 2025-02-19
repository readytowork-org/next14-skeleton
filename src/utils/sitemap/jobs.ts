import type { MetadataRoute } from "next";
import { publicJobManagementApi } from "@/src/services";
import { generateSlug } from "../slugify";

export async function generateSitemapsForAllJobs(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.CONSUMER_HOST;

  // Fetch dynamic slugs for the blog
  const { data } = await publicJobManagementApi.getAllJobSlugs({
    all: true,
    page: 1,
  });
  const jobSlugUrls: MetadataRoute.Sitemap = data
    .filter((job) => job.updated_at)
    .map((job) => {
      const slug = generateSlug(job.title, job.id);
      return {
        url: `${baseUrl}/jobs/${slug}`,
        lastModified: new Date(job.updated_at).toISOString(),
        priority: 1,
        changeFrequency: "daily",
      };
    });

  return jobSlugUrls;
}
