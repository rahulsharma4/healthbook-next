/** Public site origin for canonical URLs, Open Graph, and sitemap (no trailing slash in env is OK). */
export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/+$/, "");
  return "http://localhost:3000";
}
