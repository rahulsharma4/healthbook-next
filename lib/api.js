import axios from "axios";

import { redirectSessionExpiredToLogin } from "@/lib/session-expired";

const rawBase = process.env.NEXT_PUBLIC_API_BASE_URL;

/** API origin including `/api/v1` (same convention as Vite apps). */
export const api = axios.create({
  baseURL: typeof rawBase === "string" ? rawBase.replace(/\/+$/, "") : "",
  timeout: 15_000,
  withCredentials: true,
});

let refreshPromise = null;

export function dedupedAuthRefresh() {
  refreshPromise ??= api.post("/auth/refresh", {}).finally(() => {
    refreshPromise = null;
  });
  return refreshPromise;
}

function joinUrl(base, path) {
  const b = String(base || "").replace(/\/$/, "");
  const p = String(path || "");
  if (!p) return b;
  if (/^https?:\/\//i.test(p)) return p;
  return `${b}${p.startsWith("/") ? "" : "/"}${p}`;
}

function isAuthEndpoint(config) {
  const full = joinUrl(config?.baseURL, config?.url);
  const hay = `${full} ${String(config?.url ?? "")}`;
  return (
    hay.includes("/auth/login") ||
    hay.includes("/auth/signup") ||
    hay.includes("/auth/refresh") ||
    hay.includes("/auth/logout") ||
    hay.includes("/auth/mfa/verify") ||
    hay.includes("/auth/forgot-password") ||
    hay.includes("/auth/reset-password")
  );
}

let sessionExpiryRedirectScheduled = false;

function scheduleSessionExpiryRedirect() {
  if (sessionExpiryRedirectScheduled) return;
  sessionExpiryRedirectScheduled = true;
  redirectSessionExpiredToLogin();
}

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;
    const status = error?.response?.status;

    if (status === 401 && original && !isAuthEndpoint(original)) {
      if (!original._retry) {
        original._retry = true;
        try {
          await dedupedAuthRefresh();
          return api(original);
        } catch {
          scheduleSessionExpiryRedirect();
          return new Promise(() => {});
        }
      }
      scheduleSessionExpiryRedirect();
      return new Promise(() => {});
    }

    return Promise.reject(error);
  },
);
