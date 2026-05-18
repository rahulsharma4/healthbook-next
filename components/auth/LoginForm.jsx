"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { AuthFullScreenLoader } from "@/components/auth/AuthFullScreenLoader";
import { AuthRedirectOverlay } from "@/components/auth/AuthRedirectOverlay";
import { AuthPanel } from "@/components/auth/AuthPanel";
import { AuthRequestError, loginRequest } from "@/lib/auth-client";
import { usePostAuthRedirect } from "@/hooks/usePostAuthRedirect";
import { btnGradient, input } from "@/lib/ui";

const SESSION_EXPIRED_MESSAGE = "Session expired, please login again";

export function LoginForm() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fallback, setFallback] = useState(null);
  const [sessionExpiredBanner, setSessionExpiredBanner] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { redirecting, redirectMessage, redirectWithUser } = usePostAuthRedirect();

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get("session") !== "expired") return;
      setSessionExpiredBanner(true);
      params.delete("session");
      const qs = params.toString();
      const next = `${window.location.pathname}${qs ? `?${qs}` : ""}${window.location.hash}`;
      window.history.replaceState(null, "", next);
    } catch {
      /* ignore */
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setFallback(null);
    if (!identifier.trim() || !password) {
      setError("Enter your email or mobile and password.");
      return;
    }
    setLoading(true);
    let clearLoading = true;
    try {
      const res = await loginRequest(identifier, password);
      if (res.mfaRequired) {
        const params = new URLSearchParams(window.location.search);
        const from = params.get("from");
        const url = `/mfa?token=${encodeURIComponent(String(res.mfaToken || ""))}${from ? `&from=${encodeURIComponent(from)}` : ""}`;
        window.location.assign(url);
        return;
      }
      const redirectResult = redirectWithUser(res.user);
      if (redirectResult?.ok === false) {
        setError(redirectResult.error);
        setFallback({ url: redirectResult.fallbackUrl, label: redirectResult.fallbackLabel });
        return;
      }
      clearLoading = false;
    } catch (err) {
      const msg = err instanceof AuthRequestError ? err.message : "Something went wrong. Please try again.";
      setError(msg);
    } finally {
      if (clearLoading) setLoading(false);
    }
  };

  const busy = loading || redirecting;

  return (
    <>
      <AuthFullScreenLoader
        open={loading && !redirecting}
        title="Signing in…"
        subtitle="Verifying your credentials securely."
        tone="dark"
        zClass="z-[180]"
      />
      <AuthRedirectOverlay open={redirecting} message={redirectMessage} />
      <AuthPanel
        title="Welcome back"
        subtitle="Sign in with the same account you use in HealthBook apps."
        footer={
          <p className="text-sm text-slate-600 dark:text-slate-400">
            New here?{" "}
            <Link
              href="/register"
              className="font-semibold text-indigo-600 underline-offset-2 transition hover:text-indigo-500 hover:underline dark:text-indigo-400"
            >
              Create an account
            </Link>
          </p>
        }
      >
        <form className="space-y-5" onSubmit={onSubmit}>
          {sessionExpiredBanner ? (
            <div
              role="status"
              className="rounded-2xl border border-amber-200/90 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-950 shadow-sm dark:border-amber-900/45 dark:bg-amber-950/40 dark:text-amber-100"
            >
              {SESSION_EXPIRED_MESSAGE}
            </div>
          ) : null}

          {error ? (
            <div
              role="alert"
              className="rounded-2xl border border-rose-200/90 bg-rose-50 px-4 py-3 text-sm text-rose-800 shadow-sm dark:border-rose-900/40 dark:bg-rose-950/50 dark:text-rose-200"
            >
              <p>{error}</p>
              {fallback?.url ? (
                <p className="mt-2">
                  <a
                    href={fallback.url}
                    className="font-semibold text-indigo-700 underline-offset-2 hover:underline dark:text-indigo-300"
                  >
                    {fallback.label}
                  </a>
                </p>
              ) : null}
            </div>
          ) : null}

          <div>
            <label htmlFor="identifier" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
              Email or Indian mobile
            </label>
            <input
              id="identifier"
              name="identifier"
              type="text"
              autoComplete="username"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              disabled={busy}
              placeholder="you@example.com or 9876543210"
              className={input}
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={busy}
                className={input + " pr-12"}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-indigo-600 transition-colors"
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                )}
              </button>
            </div>
          </div>

          <button type="submit" disabled={busy} className={btnGradient + " w-full min-h-12"}>
            {busy ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </AuthPanel>
    </>
  );
}
