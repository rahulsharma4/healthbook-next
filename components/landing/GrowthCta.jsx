"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

import { Container } from "@/components/Container";
import { btnGhost, btnGradient, transitionBase } from "@/lib/ui";

/**
 * @param {{ variant?: "band" | "compact" }} props
 */
export function GrowthCta({ variant = "band" }) {
  if (variant === "compact") {
    return (
      <section className="py-12 sm:py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={
              "flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-indigo-200/80 bg-gradient-to-br from-indigo-50/95 via-white to-violet-50/90 p-8 shadow-2xl shadow-indigo-500/15 dark:border-indigo-500/30 dark:from-indigo-950/70 dark:via-slate-900/95 dark:to-violet-950/60 sm:flex-row sm:items-center sm:p-12 backdrop-blur-2xl"
            }
          >
            <div>
              <p className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-black uppercase tracking-widest text-indigo-700 bg-indigo-100/80 dark:bg-indigo-950 dark:text-indigo-300">
                <Sparkles className="h-3.5 w-3.5 text-indigo-600 animate-spin" style={{ animationDuration: "6s" }} />
                <span>Ready When You Are</span>
              </p>
              <h2 className="mt-3 font-heading text-2xl font-black text-slate-900 sm:text-3xl dark:text-white">
                Launch Your HIPAA-Ready Portal
              </h2>
              <p className="mt-2 max-w-xl text-base font-medium text-slate-600 dark:text-slate-300">
                Spin up a clinical workspace, invite a pilot cohort, and eliminate 45+ minutes of portal fatigue daily.
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-4 sm:w-auto sm:flex-row">
              <Link href="/register" className={btnGradient + " justify-center gap-3 sm:min-w-[14rem] shadow-xl font-extrabold"}>
                <Zap className="h-4 w-4 animate-bounce" style={{ animationDuration: "2s" }} />
                <span>Start Free Trial</span>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/contact" className={btnGhost + " justify-center sm:min-w-[11rem] font-extrabold border border-slate-300 dark:border-slate-700"}>
                Talk to sales
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden py-24 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_70%_at_50%_120%,rgba(99,102,241,0.25),transparent_65%)] dark:bg-[radial-gradient(ellipse_90%_70%_at_50%_120%,rgba(129,140,248,0.2),transparent_65%)]"
      />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={
            "relative overflow-hidden rounded-[3rem] border border-white/60 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 p-12 text-center text-white shadow-[0_40px_100px_-20px_rgba(79,70,229,0.5)] sm:p-20 dark:border-white/15 dark:shadow-indigo-950/80 " +
            transitionBase
          }
        >
          <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-cyan-400/25 blur-3xl" />
          
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-black uppercase tracking-widest bg-white/15 text-white backdrop-blur-md border border-white/20 mb-6 shadow-lg">
            <Sparkles className="h-4 w-4 animate-spin" style={{ animationDuration: "6s" }} />
            <span>Elevate Your Clinical Standards</span>
          </div>

          <h2 className="relative font-heading text-4xl font-black tracking-tight sm:text-6xl drop-shadow-sm">Experience Calmer Operations</h2>
          <p className="relative mx-auto mt-6 max-w-3xl text-lg sm:text-xl font-medium leading-relaxed text-indigo-100">
            Join thousands of clinical teams who demand fewer disconnected portals, crystal-clear patient timelines, and software worthy of the bedside moments they protect every day.
          </p>
          
          <div className="relative mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/register"
              className={
                "inline-flex min-h-[3.75rem] min-w-[240px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-white via-indigo-50 to-cyan-50 px-8 text-base font-extrabold text-indigo-950 shadow-2xl shadow-indigo-950/30 ring-4 ring-white/40 " +
                transitionBase +
                " hover:-translate-y-1 hover:from-indigo-50 hover:via-white hover:to-cyan-50 hover:shadow-2xl hover:scale-105"
              }
            >
              <Zap className="h-5 w-5 fill-indigo-600 text-indigo-600 animate-bounce" style={{ animationDuration: "2s" }} />
              <span>Start Free Portal</span>
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
            <Link
              href="/for-doctors"
              className={
                "inline-flex min-h-[3.75rem] min-w-[180px] items-center justify-center rounded-2xl border border-white/40 bg-white/10 px-8 text-base font-extrabold text-white backdrop-blur-md shadow-lg " +
                transitionBase +
                " hover:-translate-y-1 hover:bg-white/20 hover:border-white/60 hover:scale-105"
              }
            >
              For Doctors
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
