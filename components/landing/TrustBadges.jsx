"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Lock, ShieldAlert, Sparkles, Stethoscope } from "lucide-react";

import { Container } from "@/components/Container";
import { transitionBase } from "@/lib/ui";

const badges = [
  {
    key: "hipaa",
    label: "HIPAA & ISO Ready",
    sub: "Enterprise-grade policies, audit trails, and strict access controls built for clinical workflows.",
    icon: BadgeCheck,
    color: "from-indigo-600 via-indigo-500 to-blue-600",
    shadow: "shadow-indigo-500/25",
  },
  {
    key: "secure",
    label: "Zero-Trust Architecture",
    sub: "TLS 1.3 encryption, CSRF defense, MFA support, and explicit patient-controlled sharing grants.",
    icon: Lock,
    color: "from-violet-600 via-purple-600 to-fuchsia-600",
    shadow: "shadow-purple-500/25",
  },
  {
    key: "trusted",
    label: "Clinician-Crafted UI",
    sub: "Designed alongside active physicians to eliminate portal fatigue and save 45+ mins every day.",
    icon: Stethoscope,
    color: "from-emerald-600 via-teal-600 to-cyan-600",
    shadow: "shadow-teal-500/25",
  },
];

export function TrustBadges() {
  return (
    <section aria-label="Trust and compliance" className="relative border-y border-indigo-100/80 bg-gradient-to-b from-slate-50/90 via-white to-slate-50/90 py-16 dark:border-slate-800/80 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(ellipse_70%_80%_at_50%_0%,rgba(99,102,241,0.12),transparent_70%)] dark:bg-[radial-gradient(ellipse_70%_80%_at_50%_0%,rgba(129,140,248,0.15),transparent_70%)]"
      />
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-200/80 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600 animate-spin" style={{ animationDuration: "6s" }} />
            <span>Uncompromising Security</span>
          </div>
          <h2 className="mt-3 font-heading text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
            Bank-Grade Defense For Clinical Data
          </h2>
        </div>

        <ul className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.li
                key={b.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={
                  "group relative overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white/95 p-8 shadow-xl shadow-slate-200/50 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-none " +
                  transitionBase +
                  " hover:-translate-y-1.5 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/15 dark:hover:border-indigo-500/40"
                }
              >
                <div className="absolute top-0 right-0 -mr-6 -mt-6 h-28 w-28 rounded-full bg-indigo-500/10 blur-2xl group-hover:bg-indigo-500/20 transition-all duration-300" />
                
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${b.color} text-white shadow-xl ${b.shadow} transform group-hover:scale-110 transition duration-300`}>
                  <Icon className="h-7 w-7" strokeWidth={2} aria-hidden />
                </span>
                
                <div className="mt-6">
                  <p className="font-heading text-lg font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition duration-200">{b.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{b.sub}</p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
