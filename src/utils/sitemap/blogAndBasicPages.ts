import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { publicBlogManagementApi } from "@/src/services";
import { dynamicFilterKeywordsData } from "@/src/components";

export async function generateSitemapsForBlogAndBasicAppPages(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.CONSUMER_HOST;

  // Fetch dynamic slugs for the blog
  const { data } = await publicBlogManagementApi.getAllPublicSlugs();
  const slugUrls: MetadataRoute.Sitemap = data
    .filter((slug) => slug.updated_at) // Ensure updated_at is defined
    .map((slug) => ({
      url: `${baseUrl}/blog/${slug.url_slug}`,
      lastModified: new Date(slug.updated_at!).toISOString().split("T")[0], // Use the non-null assertion
    }));

  // Dynamically generate URLs based on the "app" directory
  const appDirectory = path.join(process.cwd(), "src/app");
  const dynamicUrls: MetadataRoute.Sitemap = [];

  const walkDirectory = (dir: string) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      const fileStat = fs.statSync(fullPath);

      if (fileStat.isDirectory()) {
        walkDirectory(fullPath);
      } else if (file.endsWith(".js") || file.endsWith(".tsx")) {
        const relativePath = path.relative(appDirectory, fullPath);
        const urlPath = relativePath
          .replace(/\\/g, "/")
          .replace(/\/page\.(js|tsx)$/, "/")
          .replace(/\.(js|tsx)$/, "");

        const excludes = [
          "page",
          "layout",
          "[slug]",
          "components",
          "bulk-apply",
          "success",
          "not-found",
        ];

        if (excludes.some((exclude) => urlPath.includes(exclude))) {
          return;
        }
        const specialCases = ["/(all)", "/(all)/(home)", "/(home)"];

        let url = `${baseUrl}/${urlPath}`;

        specialCases.forEach((specialCase) => {
          if (url.includes(specialCase)) {
            url = url.replace(specialCase, "");
          }
        });

        dynamicUrls.push({
          url: url,
          lastModified: new Date().toISOString().split("T")[0],
        });
      }
    });
  };

  walkDirectory(appDirectory);

  // urls to trigger the job search by keywords
  // for example /jobs?q-未経験

  Object.values(dynamicFilterKeywordsData).forEach((value) => {
    value.forEach((keyword) => {
      dynamicUrls.push({
        url: `${baseUrl}/jobs?q-${keyword}`,
        lastModified: new Date().toISOString().split("T")[0],
      });
    });
  });

  const allUniqueUrls = [
    ...slugUrls,
    ...dynamicUrls,
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString().split("T")[0],
    },
  ].reduce((acc, curr) => {
    if (!acc.some((url) => url.url === curr.url)) {
      acc.push(curr);
    }
    return acc;
  }, [] as MetadataRoute.Sitemap);

  return allUniqueUrls;
}
