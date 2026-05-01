import { blogs } from "@/app/data/blogs";

export default function sitemap() {
  const baseUrl = "https://blog.creatorcloud.in";

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/refund-policy",
    "/disclaimer",
    "/careers",
    "/templates",
  ];

  const staticUrls = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  // Blog pages
  const blogUrls = blogs.map((b) => ({
    url: `${baseUrl}${b.slug}`,
    lastModified: new Date(),
  }));

  return [...staticUrls, ...blogUrls];
}