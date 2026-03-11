import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/maintenance", "/api/"],
    },
    sitemap: "https://videngo.app/sitemap.xml",
  };
}
