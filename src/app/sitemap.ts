import type { MetadataRoute } from "next";
import { APP_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "",
    "/about",
    "/principal-message",
    "/vision-mission",
    "/departments",
    "/courses",
    "/faculty",
    "/admission",
    "/fee-structure",
    "/gallery",
    "/news",
    "/events",
    "/placements",
    "/alumni",
    "/research",
    "/downloads",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
  ];
  return paths.map((p) => ({
    url: `${APP_URL}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }));
}
