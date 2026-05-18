/** Same-origin Next.js sign-in with flag for {@link LoginForm} banner. */
export function redirectSessionExpiredToLogin() {
  if (typeof window === "undefined") return;
  const url = new URL("/login", window.location.origin);
  url.searchParams.set("session", "expired");
  const path = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  if (path && path !== "/login" && !path.startsWith("/login?")) {
    url.searchParams.set("from", path);
  }
  window.location.replace(`${url.pathname}${url.search}${url.hash}`);
}
