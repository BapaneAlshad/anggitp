import type { MetadataRoute } from "next";

import { insights } from "@/data/insights";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/") },
    { url: absoluteUrl("/layanan") },
    { url: absoluteUrl("/portofolio") },
    { url: absoluteUrl("/portofolio/desain") },
    { url: absoluteUrl("/insight") },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteUrl(`/layanan/${service.slug}`),
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: absoluteUrl(`/portofolio/${project.slug}`),
  }));

  const publishedInsightRoutes: MetadataRoute.Sitemap = insights
    .filter(
      (insight) =>
        insight.status === "published" && insight.publishedAt !== null,
    )
    .map((insight) => ({
      url: absoluteUrl(`/insight/${insight.slug}`),
      lastModified: insight.publishedAt ?? undefined,
    }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...projectRoutes,
    ...publishedInsightRoutes,
  ];
}
