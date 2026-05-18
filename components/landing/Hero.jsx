"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Container } from "@/components/Container";
import { heroCapabilityPills } from "@/lib/marketing-data";
import { btnGhost, btnGradient, transitionBase } from "@/lib/ui";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const motionSafe = !reduceMotion;

  return (
    <section className="relative overflow-hidden pb-20 pt-12 sm:pb-32 sm:pt-16 lg:pb-36 lg:pt-20">
      {/* Radiant Glowing Ambient Backdrop */}
      <div aria-hidden className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[700px] w-[1000px] -translate-x-1/2 bg-gradient-to-br from-indigo-500/25 via-purple-500/20 to-pink-500/25 blur-[140px] rounded-full" />
        <div className="absolute left-[10%] top-20 h-96 w-96 rounded-full bg-gradient-to-tr from-violet-500/25 via-fuchsia-500/20 to-transparent blur-[120px]" />
        <div className="absolute right-[10%] bottom-10 h-96 w-96 rounded-full bg-gradient-to-bl from-cyan-500/25 via-indigo-500/20 to-transparent blur-[120px]" />
      </div>

      <Container className="relative">
        <div className="relative mx-auto max-w-6xl">
          {/* Glassmorphic Multi-Layer Container */}
          <div className="relative overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] border border-white/80 bg-white/85 p-8 sm:p-16 lg:p-20 shadow-[0_30px_100px_-20px_rgba(99,102,241,0.25)] backdrop-blur-3xl dark:border-slate-800 dark:bg-slate-950/85 dark:shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)]">
            
            {/* Subtle Grid Overlay for Tech Premium Aesthetic */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            
            <motion.div
              className="relative z-10 mx-auto max-w-4xl text-center"
              variants={motionSafe ? container : undefined}
              initial={motionSafe ? "hidden" : false}
              animate={motionSafe ? "visible" : undefined}
            >
              <motion.div
                variants={motionSafe ? item : undefined}
                className={
                  "mx-auto mb-8 inline-flex items-center gap-2.5 rounded-full border border-indigo-200 bg-gradient-to-r from-indigo-50/90 to-violet-50/90 px-5 py-2 shadow-md shadow-indigo-500/15 backdrop-blur-xl dark:border-indigo-500/40 dark:from-slate-900/90 dark:to-indigo-950/90 " +
                  transitionBase +
                  " hover:border-indigo-300 hover:shadow-lg dark:hover:border-indigo-400/50"
                }
              >
                <Sparkles className="h-4 w-4 text-indigo-600 animate-pulse dark:text-indigo-300" aria-hidden />
                <span className="text-xs font-black uppercase tracking-[0.25em] text-indigo-800 dark:text-indigo-200">
                  Care that feels human again
                </span>
              </motion.div>

              <motion.h1
                variants={motionSafe ? item : undefined}
                className="text-balance font-heading text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
              >
                Stop juggling portals.{" "}
                <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent dark:from-violet-400 dark:via-indigo-300 dark:to-cyan-300 font-black">
                  Start feeling in control
                </span>{" "}
                of every visit, record, and message.
              </motion.h1>

              <motion.p
                variants={motionSafe ? item : undefined}
                className="mx-auto mt-8 max-w-3xl text-pretty text-lg sm:text-xl leading-relaxed font-medium text-slate-600 dark:text-slate-300"
              >
                HealthBook is the calm command center for modern care—records, appointments, consent-aware sharing, realtime messaging,
                medicine reminders, optional browser push, clinician analytics, and admin governance—all backed by one HIPAA-minded API.
              </motion.p>

              <motion.div
                variants={motionSafe ? item : undefined}
                className="mx-auto mt-10 flex flex-wrap justify-center gap-2.5 sm:gap-3"
                aria-label="Highlighted capabilities"
              >
                {heroCapabilityPills.map((label) => (
                  <span
                    key={label}
                    className={
                      "rounded-2xl border border-indigo-200/80 bg-gradient-to-r from-violet-50/90 to-indigo-50/90 px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-indigo-950 shadow-sm backdrop-blur-md dark:border-indigo-500/30 dark:from-violet-950/40 dark:to-indigo-950/40 dark:text-indigo-100 " +
                      transitionBase +
                      " hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md dark:hover:border-indigo-400/45 cursor-default"
                    }
                  >
                    {label}
                  </span>
                ))}
              </motion.div>

              <motion.div
                variants={motionSafe ? item : undefined}
                className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
              >
                <Link href="/register" className={btnGradient + " group min-h-[3.5rem] min-w-[220px] gap-2.5 rounded-2xl px-8 text-base shadow-xl shadow-indigo-500/30 font-bold"}>
                  Get Started
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden />
                </Link>
                <Link href="/features" className={btnGhost + " min-h-[3.5rem] min-w-[200px] rounded-2xl px-8 text-base font-bold shadow-sm"}>
                  Explore Features
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
