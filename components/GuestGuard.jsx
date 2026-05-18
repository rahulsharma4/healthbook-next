"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { SessionLoader } from "@/components/SessionLoader";
import { resolvePostAuthRedirect } from "@/lib/redirect-after-auth";

/** Keeps signed-in users off guest-only routes (pairs with middleware cookie check). */
export function GuestGuard({ children }) {
  const { loading, isAuthenticated, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (isAuthenticated) {
      let fromParam = null;
      try {
        fromParam = new URLSearchParams(window.location.search).get("from");
      } catch {
        /* ignore */
      }

      const resolved = resolvePostAuthRedirect(user, fromParam);
      if (resolved?.ok) {
        window.location.replace(resolved.url);
        return;
      }

      router.replace("/dashboard");
    }
  }, [loading, isAuthenticated, router, user]);

  if (loading) {
    return <SessionLoader />;
  }

  if (isAuthenticated) {
    return <SessionLoader label="Redirecting…" />;
  }

  return children;
}
