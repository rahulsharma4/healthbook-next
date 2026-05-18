import { getAdminAppUrl, getUserAppUrl } from "@/lib/env";

/**
 * Map signed-in users from Next.js `/dashboard/*` to the Vite admin / user apps.
 * User app routes: `/patient/*`, `/doctor/*` (see UserFrontend App.jsx).
 * Admin app routes: `/admin/*` (see AdminFrontend App.jsx).
 */

function trim(s) {
  return String(s || "").replace(/\/+$/, "");
}

/** Default “home” after login for each role on the Vite apps. */
export function viteHomeForRole(role) {
  const r = String(role || "").toLowerCase();
  const userApp = trim(getUserAppUrl());
  const adminApp = trim(getAdminAppUrl());
  if (r === "admin") return `${adminApp}/admin`;
  if (r === "doctor") return `${userApp}/doctor/home`;
  if (r === "patient") return `${userApp}/patient/home`;
  return `${userApp}/dashboard`;
}

/**
 * @param {string} pathname e.g. `/dashboard/patient/records`
 * @param {string} role normalized role
 * @returns {string} absolute URL on Vite
 */
export function nextDashboardToViteUrl(pathname, role) {
  const p = pathname || "/dashboard";
  const r = String(role || "").toLowerCase();
  const userApp = trim(getUserAppUrl());
  const adminApp = trim(getAdminAppUrl());

  if (p === "/dashboard" || p === "/dashboard/") {
    return viteHomeForRole(r);
  }

  if (p.startsWith("/dashboard/admin")) {
    if (r !== "admin") return viteHomeForRole(r);
    const rest = p.slice("/dashboard/admin".length);
    return `${adminApp}/admin${rest}`;
  }

  if (p.startsWith("/dashboard/patient")) {
    if (r !== "patient") return viteHomeForRole(r);
    const rest = p.slice("/dashboard/patient".length);
    return `${userApp}/patient${rest}`;
  }

  if (p.startsWith("/dashboard/doctor")) {
    if (r !== "doctor") return viteHomeForRole(r);
    const rest = p.slice("/dashboard/doctor".length);
    return `${userApp}/doctor${rest}`;
  }

  return viteHomeForRole(r);
}

/**
 * Convert a same-origin Next URL that uses `/dashboard/*` into the matching Vite portal URL (client-side).
 * @param {string} fullUrl
 * @param {string} role
 */
export function mapNextDashboardUrlToVite(fullUrl, role) {
  try {
    const u = new URL(fullUrl);
    const path = u.pathname;
    if (path !== "/dashboard" && !path.startsWith("/dashboard/")) return fullUrl;
    const base = nextDashboardToViteUrl(path, role);
    const q = u.search || "";
    const hash = u.hash || "";
    return `${base}${q}${hash}`;
  } catch {
    return fullUrl;
  }
}
