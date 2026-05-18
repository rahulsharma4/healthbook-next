import Link from "next/link";

import { Container } from "@/components/Container";
import { btnGradient, transitionBase } from "@/lib/ui";

const productLinks = [
  { label: "Features", href: "/features" },
  { label: "For doctors", href: "/for-doctors" },
  { label: "For patients", href: "/for-patients" },
  { label: "Blog", href: "/blogs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Sign in", href: "/login" },
  { label: "Register", href: "/register" },
];

const legalLinks = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms of service", href: "/terms" },
  { label: "Payment policy", href: "/payment-policy" },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-auto border-t border-slate-800/80 bg-linear-to-b from-slate-950 via-slate-950 to-indigo-950/90 text-slate-300">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-indigo-400/45 to-transparent"
      />
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="font-heading text-xl font-bold tracking-tight text-white transition hover:text-indigo-200"
            >
              HealthBook
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              HIPAA-minded coordination for patients and clinics: appointments, longitudinal records, consent sharing, realtime messaging, medicine reminders, optional web push, doctor analytics, patient access logs, shareable report packs, MFA-ready auth, and admin governance—all orchestrated through HealthBook’s unified API.
            </p>
            <Link href="/register" className={btnGradient + " mt-8 inline-flex shadow-white/10 ring-white/20"}>
              Get started
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7 lg:justify-items-end">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Product</div>
              <ul className="mt-4 space-y-3 text-sm">
                {productLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={"text-slate-400 " + transitionBase + " hover:text-white hover:underline underline-offset-4"}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Legal</div>
              <ul className="mt-4 space-y-3 text-sm">
                {legalLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={"text-slate-400 " + transitionBase + " hover:text-white hover:underline underline-offset-4"}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Contact</div>
              <p className="mt-4 text-sm text-slate-400">
                <Link href="/contact" className="text-indigo-300 underline-offset-2 hover:text-white hover:underline">
                  Contact form
                </Link>
                <br />
                <span className="mt-2 inline-block text-slate-500">hello@healthbook.example</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800/90 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} HealthBook. All rights reserved.</p>
          <p className="text-slate-600">Designed for clarity. Built for trust.</p>
        </div>
      </Container>
    </footer>
  );
}
