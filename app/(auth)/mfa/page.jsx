"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import { AuthPanel } from "@/components/auth/AuthPanel";
import { AuthFullScreenLoader } from "@/components/auth/AuthFullScreenLoader";
import { AuthRedirectOverlay } from "@/components/auth/AuthRedirectOverlay";
import { AuthRequestError, postAuthJson } from "@/lib/auth-client";
import { usePostAuthRedirect } from "@/hooks/usePostAuthRedirect";
import { btnGradient, input } from "@/lib/ui";

function validateOtp(v) {
  const s = String(v ?? "").trim();
  if (!s) return "OTP is required";
  if (!/^\d{6}$/.test(s)) return "OTP must be 6 digits";
  return "";
}

export default function MfaPage() {
  const [otp, setOtp] = useState("");
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mfaToken, setMfaToken] = useState("");

  const { redirecting, redirectMessage, redirectWithUser } = usePostAuthRedirect();

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      setMfaToken(params.get("token") || "");
    } catch {
      setMfaToken("");
    }
  }, []);

  const otpError = useMemo(() => validateOtp(otp), [otp]);
  const canSubmit = Boolean(mfaToken) && !otpError;

  const onSubmit = async (e) => {
    e.preventDefault();
    setTouched(true);
    setError("");
    if (!canSubmit) return;
    setLoading(true);
    let clear = true;
    try {
      const res = await postAuthJson("/auth/mfa/verify", { mfaToken, otp });
      const redirectResult = redirectWithUser(res.user);
      if (redirectResult?.ok === false) {
        setError(redirectResult.error);
        return;
      }
      clear = false;
    } catch (err) {
      const msg = err instanceof AuthRequestError ? err.message : "OTP verification failed";
      setError(msg);
    } finally {
      if (clear) setLoading(false);
    }
  };

  const busy = loading || redirecting;

  return (
    <>
      <AuthFullScreenLoader open={loading && !redirecting} title="Verifying…" subtitle="Checking your OTP securely." tone="dark" zClass="z-[180]" />
      <AuthRedirectOverlay open={redirecting} message={redirectMessage} />
      <AuthPanel
        title="Verification required"
        subtitle="Enter the 6-digit code sent to your email."
        footer={
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Back to sign in?{" "}
            <Link href="/login" className="font-semibold text-indigo-600 underline-offset-2 hover:underline dark:text-indigo-400">
              Sign in
            </Link>
          </p>
        }
      >
        {!mfaToken ? (
          <div
            role="alert"
            className="rounded-2xl border border-rose-200/90 bg-rose-50 px-4 py-3 text-sm text-rose-800 shadow-sm dark:border-rose-900/40 dark:bg-rose-950/50 dark:text-rose-200"
          >
            Missing MFA token. Please sign in again.
          </div>
        ) : null}

        {error ? (
          <div
            role="alert"
            className="mt-4 rounded-2xl border border-rose-200/90 bg-rose-50 px-4 py-3 text-sm text-rose-800 shadow-sm dark:border-rose-900/40 dark:bg-rose-950/50 dark:text-rose-200"
          >
            {error}
          </div>
        ) : null}

        <form className="mt-5 space-y-5" onSubmit={onSubmit}>
          <div>
            <label htmlFor="otp" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
              6-digit OTP
            </label>
            <input
              id="otp"
              name="otp"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              disabled={busy || !mfaToken}
              placeholder="123456"
              className={input}
            />
            {touched && otpError ? <p className="mt-2 text-sm text-rose-700 dark:text-rose-200">{otpError}</p> : null}
          </div>

          <button type="submit" disabled={busy || !canSubmit} className={btnGradient + " w-full min-h-12"}>
            {busy ? "Verifying…" : "Verify"}
          </button>
        </form>
      </AuthPanel>
    </>
  );
}

