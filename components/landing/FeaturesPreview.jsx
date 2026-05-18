import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Calendar, Files, Link2, MessageCircle, Pill, ShieldCheck, Smartphone, Sparkles } from "lucide-react";

import { Container } from "@/components/Container";
import { featurePreviewItems, homeSecondaryFeatures } from "@/lib/marketing-data";
import { btnGhost, btnGradient, transitionBase } from "@/lib/ui";

const icons = {
  records: Files,
  booking: Calendar,
  security: ShieldCheck,
  messaging: MessageCircle,
  reminders: Pill,
  push: Smartphone,
  share: Link2,
  governance: Building2,
};

export function FeaturesPreview() {
  return (
    <section id="features-preview" className="relative scroll-mt-24 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent dark:via-indigo-500/40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 bottom-0 -z-10 h-72 w-[min(100%,56rem)] -translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px] dark:bg-indigo-500/15"
      />

      <Container>
        <div className="mx-auto max-w-4xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-200/80 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600 animate-spin" style={{ animationDuration: "6s" }} />
            <span>Robust Clinical Tooling</span>
          </div>
          <h2 className="font-heading text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Engineered For Frictionless Care
          </h2>
          <p className="mt-4 text-pretty text-lg font-medium text-slate-600 sm:text-xl dark:text-slate-300">
            Scheduling, longitudinal medical records, consent-aware sharing, encrypted chat, medicine adherence nudges, optional browser push alerts, and admin governance—all in one workspace.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[88rem] gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {featurePreviewItems.map(({ key, title, blurb, accent, glow }) => {
            const Icon = icons[key] || Files;
            return (
              <article
                key={key}
                className={
                  "group relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white/95 p-8 shadow-xl shadow-slate-200/50 backdrop-blur-3xl dark:border-slate-800/90 dark:bg-slate-900/90 dark:shadow-black/50 " +
                  transitionBase +
                  " hover:-translate-y-2 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/20 dark:hover:border-indigo-500/40"
                }
              >
                <div
                  aria-hidden
                  className={
                    "pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br opacity-60 blur-2xl " +
                    glow +
                    " transition-all duration-500 group-hover:opacity-100 group-hover:scale-125"
                  }
                />
                <div
                  className={
                    "relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br " +
                    accent +
                    " text-white shadow-xl shadow-indigo-500/25 " +
                    transitionBase +
                    " transform group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl"
                  }
                >
                  <Icon className="h-8 w-8" strokeWidth={2} aria-hidden />
                </div>
                <h3 className="relative font-heading text-2xl font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition duration-200">{title}</h3>
                <p className="relative mt-3 text-base font-medium leading-relaxed text-slate-600 dark:text-slate-300">{blurb}</p>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-20 max-w-3xl text-center text-xs font-black uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
          Also Live Across All Production Portals
        </p>
        <div className="mx-auto mt-8 grid max-w-[88rem] gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {homeSecondaryFeatures.map(({ key, title, blurb, accent, glow }) => {
            const Icon = icons[key] || Files;
            return (
              <article
                key={key}
                className={
                  "group relative overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white/90 p-7 shadow-lg shadow-slate-200/40 backdrop-blur-2xl dark:border-slate-800/90 dark:bg-slate-900/80 sm:p-8 " +
                  transitionBase +
                  " hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-500/15 dark:hover:border-teal-500/30"
                }
              >
                <div
                  aria-hidden
                  className={
                    "pointer-events-none absolute -left-6 bottom-0 h-36 w-36 rounded-full bg-gradient-to-br opacity-50 blur-2xl " +
                    glow +
                    " transition-opacity duration-500 group-hover:opacity-90"
                  }
                />
                <div
                  className={
                    "relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br " +
                    accent +
                    " text-white shadow-lg shadow-indigo-500/20 " +
                    transitionBase +
                    " transform group-hover:scale-110"
                  }
                >
                  <Icon className="h-7 w-7" strokeWidth={2} aria-hidden />
                </div>
                <h3 className="relative font-heading text-xl font-black text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition duration-200">{title}</h3>
                <p className="relative mt-2 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">{blurb}</p>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link href="/features" className={btnGradient + " group inline-flex min-h-[3.5rem] items-center gap-3 px-8 text-base shadow-xl font-extrabold"}>
            Explore all features
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden />
          </Link>
          <Link href="/for-patients" className={btnGhost + " min-h-[3.5rem] px-8 text-base font-extrabold border border-slate-300 dark:border-slate-700"}>
            For patients
          </Link>
        </div>
      </Container>
    </section>
  );
}
