import { getSiteUrl } from "@/lib/site";

/** @returns {import("next").MetadataRoute.Robots} */
export default function robots() {
  const base = getSiteUrl().replace(/\/+$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/dashboard/", "/private", "/private/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
