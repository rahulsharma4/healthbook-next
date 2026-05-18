import { getSiteUrl } from "@/lib/site";

/** @returns {import("next").MetadataRoute.Sitemap} */
export default function sitemap() {
  const base = getSiteUrl().replace(/\/+$/, "");

  /** @type {import("next").MetadataRoute.Sitemap} */
  const routes = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/features", changeFrequency: "weekly", priority: 0.9 },
    { path: "/for-doctors", changeFrequency: "weekly", priority: 0.88 },
    { path: "/for-patients", changeFrequency: "weekly", priority: 0.88 },
    { path: "/about", changeFrequency: "monthly", priority: 0.85 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.85 },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.5 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.5 },
    { path: "/login", changeFrequency: "monthly", priority: 0.6 },
    { path: "/register", changeFrequency: "monthly", priority: 0.65 },
  ];

  const now = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? `${base}/` : `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
