import { getAdminAppUrl, getUserAppUrl } from "@/lib/env";
import { mapNextDashboardUrlToVite } from "@/lib/vitePortalUrls";

function normOrigin(url) {
  return String(url || "").replace(/\/+$/, "");
}

/**
 * Validates `from` (query or stored) so we never redirect to an untrusted origin.
 * - Same-origin (Next): only /dashboard and /private trees.
 * - User app: only when role is patient or doctor.
 * - Admin app: only when role is admin.
 *
 * @param {string | null | undefined} fromParam decoded `from` value
 * @param {string} role normalized user role
 * @returns {string | null} absolute URL to use with `location.replace`, or null to use role default
 */
export function getTrustedReturnUrl(fromParam, role) {
  if (typeof window === "undefined") return null;

  const raw = String(fromParam ?? "").trim();
  if (!raw) return null;

  const r = String(role ?? "").trim().toLowerCase();

  let u;
  try {
    u =
      raw.startsWith("http://") || raw.startsWith("https://")
        ? new URL(raw)
        : new URL(raw, window.location.origin);
  } catch {
    return null;
  }

  if (u.username || u.password) return null;

  const nextO = normOrigin(window.location.origin);
  const userO = normOrigin(getUserAppUrl());
  const adminO = normOrigin(getAdminAppUrl());
  const o = normOrigin(u.origin);

  if (o === nextO) {
    const p = u.pathname;
    const marketingPaths = new Set([
      "/",
      "/features",
      "/for-doctors",
      "/for-patients",
      "/about",
      "/contact",
      "/privacy-policy",
      "/terms",
      "/blogs",
    ]);
    const isMarketing = marketingPaths.has(p) || p.startsWith("/blogs/");
    const isDashboard = p === "/dashboard" || p.startsWith("/dashboard/");
    const isPrivate = p === "/private" || p.startsWith("/private/");
    if (isMarketing) {
      return `${nextO}${u.pathname}${u.search}${u.hash}`;
    }
    if (isDashboard) {
      return mapNextDashboardUrlToVite(`${nextO}${u.pathname}${u.search}${u.hash}`, r);
    }
    if (isPrivate) {
      return mapNextDashboardUrlToVite(`${nextO}${u.pathname}${u.search}${u.hash}`, r);
    }
    return null;
  }

  if (r === "admin" && o === adminO) {
    return u.toString();
  }

  if ((r === "patient" || r === "doctor") && o === userO) {
    return u.toString();
  }

  return null;
}
