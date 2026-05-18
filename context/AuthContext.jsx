"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthFullScreenLoader } from "@/components/auth/AuthFullScreenLoader";
import { api, dedupedAuthRefresh } from "@/lib/api";

const AuthContext = createContext(null);

/**
 * Hydrates the client from the HTTP-only session cookie.
 * HealthBook backend exposes **POST** `/auth/refresh` under `NEXT_PUBLIC_API_BASE_URL` (e.g. …/api/v1).
 */
export function AuthProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const logoutInFlight = useRef(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await dedupedAuthRefresh();
        const data = res?.data;
        if (cancelled) return;
        setUser(data?.user ?? null);
      } catch {
        if (!cancelled) setUser(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const logout = useCallback(async () => {
    if (logoutInFlight.current) return;
    logoutInFlight.current = true;
    setIsLoggingOut(true);
    try {
      await api.post("/auth/logout", {});
    } catch {
      /* still clear client session */
    } finally {
      setUser(null);
      logoutInFlight.current = false;
      router.replace("/login");
      /* Keep full-screen loader visible briefly through the route transition. */
      window.setTimeout(() => setIsLoggingOut(false), 320);
    }
  }, [router]);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      loading,
      logout,
      isLoggingOut,
    }),
    [user, loading, logout, isLoggingOut],
  );

  return (
    <AuthContext.Provider value={value}>
      <AuthFullScreenLoader
        open={isLoggingOut}
        title="Signing out…"
        subtitle="Closing your session securely."
        tone="dark"
        zClass="z-[250]"
      />
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
