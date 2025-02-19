import { QUICK_SEARCH_ITEMS } from "@/src/components";
import {
  Locations,
  citiesMap,
} from "@/src/components/molecules/FindYourJob/types";
import { JobTypes } from "@/src/utils/constants";
import type { MetadataRoute } from "next";

export async function generateSitemapsForJobSearchConditions(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.CONSUMER_HOST;
  if (!baseUrl)
    throw new Error("Base URL not defined in environment variables.");

  const dynamicUrls: MetadataRoute.Sitemap = [];

  const escapeForXML = (url: string) => url.replace(/&/g, "&amp;");
  const mainKeywords = ["ドライバー求人", "みんなのドライバー"];

  Object.keys(Locations).forEach((prefectureKey) => {
    const prefecture = Locations[prefectureKey as keyof typeof Locations];

    dynamicUrls.push({
      url: escapeForXML(
        `${baseUrl}/jobs/?prefecture=${prefecture}&keyword=${mainKeywords[0]}`,
      ),
      lastModified: new Date().toISOString(),
      priority: 0.7,
    });

    const cities = citiesMap[prefecture];

    cities.forEach((city) => {
      dynamicUrls.push({
        url: escapeForXML(
          `${baseUrl}/jobs/?prefecture=${prefecture}&cities=${city}&keyword=${mainKeywords[0]}`,
        ),
        lastModified: new Date().toISOString(),
        priority: 0.7,
      });

      dynamicUrls.push({
        url: escapeForXML(
          `${baseUrl}/jobs/?cities=${city}&keyword=${mainKeywords[0]}`,
        ),
        lastModified: new Date().toISOString(),
        priority: 0.7,
      });

      JobTypes.forEach((jobType) => {
        dynamicUrls.push({
          url: escapeForXML(
            `${baseUrl}/jobs/?prefecture=${prefecture}&cities=${city}&job_types=${jobType.value}&keyword=${mainKeywords[1]}`,
          ),
          lastModified: new Date().toISOString(),
          priority: 0.7,
        });
      });

      QUICK_SEARCH_ITEMS.forEach((quickSearchItem) => {
        dynamicUrls.push({
          url: escapeForXML(
            `${baseUrl}/jobs/?prefecture=${prefecture}&cities=${city}&quick_search=${quickSearchItem.value}&keyword=${mainKeywords[1]}`,
          ),
          lastModified: new Date().toISOString(),
          priority: 0.7,
        });
      });
    });
  });

  // Generate URLs for all job types without any cities or prefectures
  JobTypes.forEach((jobType) => {
    dynamicUrls.push({
      url: escapeForXML(
        `${baseUrl}/jobs/?job_types=${jobType.value}&keyword=${mainKeywords[1]}`,
      ),
      lastModified: new Date().toISOString(),
      priority: 0.8,
    });

    // For each job type, generate URLs for quick search items independently
    QUICK_SEARCH_ITEMS.forEach((quickSearchItem) => {
      dynamicUrls.push({
        url: escapeForXML(
          `${baseUrl}/jobs/?job_types=${jobType.value}&quick_search=${quickSearchItem.value}&keyword=${mainKeywords[1]}`,
        ),
        lastModified: new Date().toISOString(),
        priority: 0.8,
      });
    });
  });

  // Generate URLs for all quick search items independently
  QUICK_SEARCH_ITEMS.forEach((quickSearchItem) => {
    dynamicUrls.push({
      url: escapeForXML(
        `${baseUrl}/jobs/?quick_search=${quickSearchItem.value}&keyword=${mainKeywords[1]}`,
      ),
      lastModified: new Date().toISOString(),
      priority: 0.8,
    });
  });

  return dynamicUrls;
}
