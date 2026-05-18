import { getSiteUrl } from "@/lib/site";

/** Absolute API base including `/api/v1` (supports relative env like `/api/v1`). */
export function getPublicApiBaseUrl() {
  const raw = (process.env.NEXT_PUBLIC_API_BASE_URL || "").trim().replace(/\/+$/, "");
  if (!raw) return "";
  if (/^https?:\/\//i.test(raw)) return raw;
  const site = getSiteUrl().replace(/\/+$/, "");
  const path = raw.startsWith("/") ? raw : `/${raw}`;
  return `${site}${path}`;
}

/**
 * @param {{ page?: number, limit?: number, q?: string }} opts
 */
export async function fetchPublishedBlogList(opts = {}) {
  const base = getPublicApiBaseUrl();
  const page = Math.max(1, Number(opts.page) || 1);
  const limit = Math.min(50, Math.max(1, Number(opts.limit) || 12));
  if (!base) return { items: [], page, limit, total: 0 };

  const params = new URLSearchParams({ page: String(page), limit: String(limit) });
  const q = String(opts.q ?? "").trim();
  if (q) params.set("q", q);

  const res = await fetch(`${base}/blogs?${params}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Could not load articles right now.");
  }

  const data = await res.json();
  return {
    items: Array.isArray(data.items) ? data.items : [],
    page: Number(data.page) || page,
    limit: Number(data.limit) || limit,
    total: Number(data.total) || 0,
  };
}

export async function fetchPublishedBlogBySlug(slug) {
  const base = getPublicApiBaseUrl();
  const s = String(slug ?? "").trim();
  if (!base || !s) return null;

  const res = await fetch(`${base}/blogs/${encodeURIComponent(s)}`, {
    next: { revalidate: 60 },
  });

  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Could not load this article.");

  const data = await res.json();
  return data?.post ?? null;
}
