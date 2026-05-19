import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { learnSource, scenariosSource, labsSource } from "@/lib/source";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/learn",
    "/scenarios",
    "/labs",
    "/roadmap",
    "/glossary",
    "/cheatsheet",
    "/resources",
    "/faq",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const docs = [
    ...learnSource.getPages(),
    ...scenariosSource.getPages(),
    ...labsSource.getPages(),
  ].map((page) => ({
    url: `${base}${page.url}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...docs];
}
