import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { nextDashboardToViteUrl, viteHomeForRole } from "@/lib/vitePortalUrls";

/** Must match backend `refreshCookieName` default (`hb_refresh`). */
const refreshCookieName = process.env.NEXT_PUBLIC_AUTH_REFRESH_COOKIE_NAME || "hb_refresh";
/** Must match backend `accessCookieName` (default `hb_access`). */
const accessCookieName = process.env.NEXT_PUBLIC_AUTH_ACCESS_COOKIE_NAME || "hb_access";
/** Backend base including `/api/v1` (same convention as Vite apps). May be absolute or same-origin relative. */
const apiBase = (process.env.NEXT_PUBLIC_API_BASE_URL || "").replace(/\/+$/, "");

const LOGIN = "/login";
const REGISTER = "/register";
const DASHBOARD = "/dashboard";

function hasLikelySessionCookie(request: NextRequest) {
  return Boolean(
    request.cookies.get(refreshCookieName)?.value || request.cookies.get(accessCookieName)?.value,
  );
}

function sessionUrl(request: NextRequest): string | null {
  if (!apiBase) return null;
  if (/^https?:\/\//i.test(apiBase)) {
    return `${apiBase}/session`;
  }
  const basePath = apiBase.startsWith("/") ? apiBase : `/${apiBase}`;
  return `${request.nextUrl.origin}${basePath}/session`;
}

async function fetchSession(request: NextRequest) {
  const url = sessionUrl(request);
  if (!url) return null;
  try {
    const cookie = request.headers.get("cookie") || "";
    const res = await fetch(url, {
      method: "GET",
      headers: { cookie },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.user ?? null;
  } catch {
    return null;
  }
}

/** Normalize common typo `/dashboard/patients` → `/dashboard/patient`. */
function normalizeDashboardPath(pathname: string) {
  if (pathname === "/dashboard/patients" || pathname.startsWith("/dashboard/patients/")) {
    return "/dashboard/patient" + pathname.slice("/dashboard/patients".length);
  }
  return pathname;
}

/**
 * `/dashboard/*` is not rendered in Next.js — signed-in users are sent to the Vite Admin/User apps.
 */
export async function middleware(request: NextRequest) {
  const pathname = normalizeDashboardPath(request.nextUrl.pathname);

  const hasSession = hasLikelySessionCookie(request);

  const isProtected =
    pathname === DASHBOARD || pathname.startsWith(`${DASHBOARD}/`) || pathname.startsWith("/private/");
  const isGuestOnly = pathname === LOGIN || pathname === REGISTER;

  if (isProtected && !hasSession) {
    const url = request.nextUrl.clone();
    url.pathname = LOGIN;
    const returnPath = `${pathname}${request.nextUrl.search}`;
    url.searchParams.set("from", returnPath);
    return NextResponse.redirect(url);
  }

  if (isProtected && hasSession && sessionUrl(request)) {
    const user = await fetchSession(request);
    if (!user) {
      const url = request.nextUrl.clone();
      url.pathname = LOGIN;
      const returnPath = `${pathname}${request.nextUrl.search}`;
      url.searchParams.set("from", returnPath);
      return NextResponse.redirect(url);
    }

    const role = String(user.role || "");

    if (pathname.startsWith("/dashboard/patient") && user.role !== "patient") {
      return NextResponse.redirect(viteHomeForRole(role));
    }
    if (pathname.startsWith("/dashboard/doctor") && user.role !== "doctor") {
      return NextResponse.redirect(viteHomeForRole(role));
    }
    if (pathname.startsWith("/dashboard/admin") && user.role !== "admin") {
      return NextResponse.redirect(viteHomeForRole(role));
    }

    if (pathname.startsWith("/private")) {
      return NextResponse.redirect(viteHomeForRole(role));
    }

    if (pathname === DASHBOARD || pathname.startsWith(`${DASHBOARD}/`)) {
      const base = nextDashboardToViteUrl(pathname, role);
      const q = request.nextUrl.search || "";
      return NextResponse.redirect(`${base}${q}`);
    }
  }

  if (isGuestOnly && hasSession) {
    const url = request.nextUrl.clone();
    url.pathname = DASHBOARD;
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/login",
    "/register",
    "/private",
    "/private/:path*",
  ],
};
