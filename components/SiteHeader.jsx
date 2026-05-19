"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/Container";
import { useAuth } from "@/hooks/useAuth";
import { btnGhost, btnGradient, transitionBase } from "@/lib/ui";
import { getAdminAppUrl, getUserAppUrl } from "@/lib/env";

const navBase =
  "rounded-full px-3 py-2 text-xs font-medium text-slate-600 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-slate-900/[0.05] hover:text-indigo-700 sm:px-3.5 sm:text-sm dark:text-slate-400 dark:hover:bg-white/[0.07] dark:hover:text-indigo-200";

const navActive =
  " bg-gradient-to-r from-violet-600/[0.14] via-indigo-600/[0.16] to-blue-600/[0.14] font-semibold text-indigo-900 shadow-sm ring-1 ring-inset ring-indigo-400/35 dark:from-violet-500/20 dark:via-indigo-500/22 dark:to-blue-600/18 dark:text-indigo-50 dark:ring-indigo-400/35";

function NavItem({ href, children, pathname, onNavigate, layout = "inline", matchPrefix = false }) {
  const active = matchPrefix ? pathname === href || pathname.startsWith(`${href}/`) : pathname === href;
  const layoutCls = layout === "stack" ? " w-full justify-center py-3 sm:py-3.5 " : "";
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={navBase + layoutCls + (active ? navActive : "")}
    >
      {children}
    </Link>
  );
}

function NavLinks({ pathname, onNavigate, layout = "inline" }) {
  return (
    <>
      <NavItem href="/" pathname={pathname} onNavigate={onNavigate} layout={layout}>
        Home
      </NavItem>
      <NavItem href="/features" pathname={pathname} onNavigate={onNavigate} layout={layout}>
        Features
      </NavItem>
      <NavItem href="/for-doctors" pathname={pathname} onNavigate={onNavigate} layout={layout}>
        For Doctors
      </NavItem>
      <NavItem href="/for-patients" pathname={pathname} onNavigate={onNavigate} layout={layout}>
        For Patients
      </NavItem>
      <NavItem href="/about" pathname={pathname} onNavigate={onNavigate} layout={layout}>
        About
      </NavItem>
      <NavItem href="/blogs" pathname={pathname} onNavigate={onNavigate} layout={layout} matchPrefix>
        Blog
      </NavItem>
      <NavItem href="/contact" pathname={pathname} onNavigate={onNavigate} layout={layout}>
        Contact
      </NavItem>
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const { user, isAuthenticated, loading, logout, isLoggingOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const displayName = user?.name?.trim() || user?.email?.trim() || "Account";
  const role = String(user?.role ?? "").trim().toLowerCase();
  const portalDashboardUrl =
    role === "admin"
      ? `${getAdminAppUrl()}/admin`
      : role === "patient"
        ? `${getUserAppUrl()}/patient/home`
        : role === "doctor"
          ? `${getUserAppUrl()}/doctor/home`
          : `${getUserAppUrl()}/dashboard`;

  const headerSurface = menuOpen
    ? "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
    : elevated
      ? "border-slate-200/90 bg-white/92 shadow-[0_14px_44px_-14px_rgba(15,23,42,0.18)] dark:border-slate-800 dark:bg-slate-950/92 dark:shadow-black/45"
      : "border-slate-200/60 bg-white/72 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)] dark:border-slate-800/70 dark:bg-slate-950/65 dark:shadow-black/35";

  return (
    <header
      className={
        "sticky top-0 z-50 border-b backdrop-blur-2xl transition-[box-shadow,background-color,border-color] duration-300 ease-out " +
        headerSurface
      }
    >
      <Container className="relative z-50 flex h-14 items-center justify-between gap-3 sm:h-16 sm:gap-4">
        <Link
          href="/"
          className={
            "flex min-w-0 shrink-0 items-center gap-2 font-heading text-base font-bold tracking-tight text-slate-900 sm:gap-2.5 sm:text-lg " +
            transitionBase +
            " hover:text-indigo-700 dark:text-white dark:hover:text-indigo-300"
          }
        >
          <Image
            src="/icon-mark.svg"
            alt=""
            width={36}
            height={36}
            className="h-8 w-8 shrink-0 rounded-xl shadow-md shadow-indigo-500/15 ring-1 ring-slate-900/5 sm:h-9 sm:w-9 dark:ring-white/10"
            priority
            unoptimized
          />
          <span className="truncate">HealthBook</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:gap-2 xl:gap-3 min-[1180px]:flex">
          <NavLinks pathname={pathname} layout="inline" />
        </nav>

        <div className="hidden items-center gap-2 min-[1180px]:flex xl:gap-3">
          {loading ? (
            <span className="text-sm text-slate-500 dark:text-slate-400">…</span>
          ) : isAuthenticated ? (
            <>
              <span
                className="max-w-36 truncate text-sm font-semibold text-slate-800 dark:text-slate-200 xl:max-w-40"
                title={displayName}
              >
                {displayName}
              </span>
              <Link
                href={portalDashboardUrl}
                prefetch={false}
                className={btnGhost + " min-h-10 px-3 py-2 sm:px-4"}
              >
                Go to dashboard
              </Link>
              <button
                type="button"
                onClick={() => void logout()}
                disabled={isLoggingOut}
                className={
                  btnGhost +
                  " min-h-10 px-3 py-2 sm:px-4 disabled:pointer-events-none disabled:opacity-55"
                }
              >
                {isLoggingOut ? "Signing out…" : "Log out"}
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className={btnGhost + " min-h-10 px-3 py-2 sm:px-4"}>
                Sign in
              </Link>
              <Link href="/register" className={btnGradient + " min-h-10 px-4 py-2"}>
                Get started
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center gap-2 min-[1180px]:hidden">
          {!loading && isAuthenticated ? (
            <span className="max-w-24 truncate text-xs font-semibold text-slate-700 dark:text-slate-300 sm:max-w-28">
              {displayName}
            </span>
          ) : null}
          <button
            type="button"
            className={
              "inline-flex min-h-10 min-w-10 items-center justify-center rounded-xl border border-slate-200/90 bg-white/90 text-slate-800 shadow-sm dark:border-slate-600 dark:bg-slate-900/85 dark:text-slate-100 " +
              transitionBase
            }
            aria-expanded={menuOpen}
            aria-controls="site-mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            {menuOpen ? <X className="h-5 w-5" strokeWidth={2} aria-hidden /> : <Menu className="h-5 w-5" strokeWidth={2} aria-hidden />}
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-slate-900/65 backdrop-blur-sm min-[1180px]:hidden transition-opacity duration-300"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <div
            id="site-mobile-menu"
            className="absolute left-0 right-0 top-full z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-slate-200 bg-white px-6 py-6 shadow-2xl shadow-slate-900/25 min-[1180px]:hidden dark:border-slate-800 dark:bg-slate-950"
          >
            <nav className="mx-auto flex max-w-5xl flex-col gap-1 text-sm font-medium">
              <NavLinks pathname={pathname} onNavigate={closeMenu} layout="stack" />
              <div className="mt-4 flex flex-col gap-2 border-t border-slate-200/80 pt-4 dark:border-slate-800">
                {loading ? (
                  <span className="text-sm text-slate-500">Loading…</span>
                ) : isAuthenticated ? (
                  <>
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">
                      Signed in as
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">{displayName}</span>
                    <Link
                      href={portalDashboardUrl}
                      prefetch={false}
                      className={btnGhost + " w-full justify-center"}
                      onClick={closeMenu}
                    >
                      Go to dashboard
                    </Link>
                    <button
                      type="button"
                      onClick={() => void logout()}
                      disabled={isLoggingOut}
                      className={
                        btnGhost +
                        " w-full justify-center disabled:pointer-events-none disabled:opacity-55"
                      }
                    >
                      {isLoggingOut ? "Signing out…" : "Log out"}
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className={btnGhost + " justify-center"} onClick={closeMenu}>
                      Sign in
                    </Link>
                    <Link href="/register" className={btnGradient + " justify-center"} onClick={closeMenu}>
                      Get started
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
