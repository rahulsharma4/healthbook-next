"use client";

import { useCallback, useState } from "react";

import { resolvePostAuthRedirect } from "@/lib/redirect-after-auth";

export function usePostAuthRedirect() {
  const [redirecting, setRedirecting] = useState(false);
  const [redirectMessage, setRedirectMessage] = useState("");

  /**
   * @returns {{ ok: true } | { ok: false, error: string, fallbackUrl: string, fallbackLabel: string }}
   */
  const redirectWithUser = useCallback((user) => {
    let fromParam = null;
    if (typeof window !== "undefined") {
      fromParam = new URLSearchParams(window.location.search).get("from");
    }
    const resolved = resolvePostAuthRedirect(user, fromParam);
    if (!resolved.ok) {
      return resolved;
    }

    setRedirectMessage(resolved.message);
    setRedirecting(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.location.replace(resolved.url);
      });
    });
    return { ok: true };
  }, []);

  return { redirecting, redirectMessage, redirectWithUser };
}
