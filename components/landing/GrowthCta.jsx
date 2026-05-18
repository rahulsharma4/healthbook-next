"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

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
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={
              "flex flex-col items-start justify-between gap-6 rounded-[1.35rem] border border-indigo-200/60 bg-gradient-to-br from-indigo-50/95 via-white to-violet-50/90 p-8 shadow-[var(--hb-shadow-card)] dark:border-indigo-500/25 dark:from-indigo-950/50 dark:via-slate-950/80 dark:to-violet-950/40 sm:flex-row sm:items-center sm:p-10"
            }
          >
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Ready when you are
              </p>
              <h2 className="mt-2 font-heading text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
                See HealthBook on your own data model
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400">
                Spin up a workspace, invite a pilot cohort, and measure time saved in the first two weeks.
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href="/register" className={btnGradient + " justify-center gap-2 sm:min-w-[11rem]"}>
                Start free
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/contact" className={btnGhost + " justify-center sm:min-w-[10rem]"}>
                Talk to sales
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_70%_at_50%_120%,rgba(99,102,241,0.2),transparent_55%)] dark:bg-[radial-gradient(ellipse_90%_70%_at_50%_120%,rgba(129,140,248,0.16),transparent_55%)]"
      />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={
            "relative overflow-hidden rounded-[1.75rem] border border-white/50 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 p-10 text-center text-white shadow-[0_32px_80px_-24px_rgba(79,70,229,0.45)] sm:p-14 dark:border-white/10 dark:shadow-indigo-950/50 " +
            transitionBase
          }
        >
          <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
          <h2 className="relative font-heading text-3xl font-bold tracking-tight sm:text-4xl">Grow calmer, faster operations</h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-indigo-100 sm:text-lg">
            Join teams who want fewer portals, clearer timelines, and software that feels worthy of the bedside moments they protect
            every day.
          </p>
          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <Link
              href="/register"
              className={
                "inline-flex min-h-12 min-w-[200px] items-center justify-center gap-2 rounded-xl bg-linear-to-r from-white via-indigo-50 to-cyan-50 px-8 text-base font-bold text-indigo-900 shadow-lg shadow-indigo-950/20 ring-2 ring-white/80 " +
                transitionBase +
                " hover:-translate-y-0.5 hover:from-indigo-50 hover:via-white hover:to-cyan-50 hover:shadow-xl"
              }
            >
              Get started free
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/for-doctors"
              className={
                "inline-flex min-h-12 min-w-[160px] items-center justify-center rounded-xl border border-white/40 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm " +
                transitionBase +
                " hover:-translate-y-0.5 hover:bg-white/20"
              }
            >
              For doctors
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
