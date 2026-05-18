"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Lock, Stethoscope } from "lucide-react";

import { Container } from "@/components/Container";
import { transitionBase } from "@/lib/ui";

const badges = [
  {
    key: "hipaa",
    label: "HIPAA-ready",
    sub: "Policies & controls built for regulated workflows",
    icon: BadgeCheck,
  },
  {
    key: "secure",
    label: "Secure by design",
    sub: "TLS, CSRF-aware APIs, MFA-capable auth & patient-controlled grants",
    icon: Lock,
  },
  {
    key: "trusted",
    label: "Trusted by doctors",
    sub: "Built with clinicians who live in the inbox between visits",
    icon: Stethoscope,
  },
];

export function TrustBadges() {
  return (
    <section aria-label="Trust and compliance" className="relative border-y border-slate-200/60 bg-slate-50/80 py-10 dark:border-slate-800/80 dark:bg-slate-950/40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(99,102,241,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(129,140,248,0.1),transparent_70%)]"
      />
      <Container>
        <ul className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3 sm:gap-6">
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.li
                key={b.key}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={
                  "flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-900/70 dark:shadow-black/20 " +
                  transitionBase +
                  " hover:border-indigo-200/70 hover:shadow-md dark:hover:border-indigo-500/25"
                }
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/25">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </span>
                <div>
                  <p className="font-heading text-sm font-bold text-slate-900 dark:text-white">{b.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{b.sub}</p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
