"use client";

import { AuthFullScreenLoader } from "@/components/auth/AuthFullScreenLoader";

export function AuthRedirectOverlay({ open, message }) {
  return (
    <AuthFullScreenLoader
      open={open}
      title={message || "Taking you to your app"}
      subtitle="Redirecting…"
      tone="dark"
      zClass="z-[200]"
    />
  );
}
