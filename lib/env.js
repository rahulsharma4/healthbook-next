function trimSlash(s) {
  return s.replace(/\/+$/, "");
}

export function getApiBaseUrl() {
  const raw = process.env.NEXT_PUBLIC_API_BASE_URL?.trim();
  // Prefer relative base so Next.js can proxy to backend (fixes refresh cookie issues in dev).
  // If caller set an absolute URL, keep it.
  if (!raw) return "/api/v1";
  return /^https?:\/\//i.test(raw) ? trimSlash(raw) : raw.replace(/\/+$/, "");
}

export function getUserAppUrl() {
  return trimSlash(process.env.NEXT_PUBLIC_USER_APP_URL?.trim() || "http://localhost:5173");
}

export function getAdminAppUrl() {
  return trimSlash(process.env.NEXT_PUBLIC_ADMIN_APP_URL?.trim() || "http://localhost:5174");
}
