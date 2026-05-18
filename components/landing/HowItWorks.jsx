"use client";

import { motion } from "framer-motion";
import { ClipboardList, Stethoscope, UserRound } from "lucide-react";

import { Container } from "@/components/Container";
import { eyebrow, transitionBase } from "@/lib/ui";

const steps = [
  {
    step: "01",
    title: "Patient books & shares intent",
    body: "Choose a doctor, lock an availability-backed slot, grant scoped chart access, enable reminders or push alerts if you want—and revoke anytime care wraps.",
    icon: UserRound,
    tone: "from-rose-500 via-fuchsia-500 to-indigo-600",
  },
  {
    step: "02",
    title: "Doctor delivers coordinated care",
    body: "Review longitudinal records, message in realtime, capture structured visits, issue digital prescriptions, and glance at analytics—without juggling unrelated portals.",
    icon: Stethoscope,
    tone: "from-indigo-600 via-violet-600 to-cyan-500",
  },
  {
    step: "03",
    title: "Record stays clear for everyone",
    body: "Notes, labs, uploads, share-pack links, and adherence cues settle into one auditable timeline—ready for the next clinician or admin governance review.",
    icon: ClipboardList,
    tone: "from-cyan-500 via-sky-500 to-indigo-600",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(99,102,241,0.08)_0%,transparent_48%,rgba(6,182,212,0.08)_100%)] dark:bg-[linear-gradient(180deg,rgba(99,102,241,0.14)_0%,transparent_48%,rgba(6,182,212,0.1)_100%)]"
      />
      <Container>
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={eyebrow}>How it works</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Patient → Doctor → Record
          </h2>
          <p className="mt-4 text-pretty text-lg text-slate-600 dark:text-slate-400 sm:text-xl">
            Three steps tie together scheduling, consent sharing, messaging, reminders, analytics, and governance—so nobody reverse-engineers what happened last visit.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-6xl">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-14 hidden h-0.5 bg-linear-to-r from-indigo-200 via-violet-200 to-cyan-200 lg:block dark:from-indigo-900 dark:via-violet-900 dark:to-cyan-900"
          />
          <ul className="grid gap-8 lg:grid-cols-3 lg:gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.li
                  key={s.step}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className={
                      "relative z-10 flex h-full flex-col rounded-3xl border border-slate-200/90 bg-white/95 p-8 pt-12 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.11)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/88 dark:shadow-black/35 " +
                      transitionBase +
                      " hover:-translate-y-1 hover:border-indigo-200/60 hover:shadow-[0_28px_60px_-12px_rgba(79,70,229,0.14)] dark:hover:border-indigo-500/25"
                    }
                  >
                    <div
                      className={
                        "absolute left-8 top-0 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl bg-linear-to-br text-white shadow-lg " +
                        s.tone +
                        " shadow-indigo-500/30 " +
                        transitionBase +
                        " group-hover:scale-105"
                      }
                    >
                      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{s.title}</h3>
                    <p className="mt-3 flex-1 leading-relaxed text-slate-600 dark:text-slate-400">{s.body}</p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
