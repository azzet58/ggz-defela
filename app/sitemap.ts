import type { MetadataRoute } from "next";
import { mainNav, siteUrl } from "@/lib/site";

const extraPages = ["/privacyverklaring", "/cookiebeleid"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...mainNav.map((i) => i.href), ...extraPages].map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
