import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Calendar, Files, Link2, MessageCircle, Pill, ShieldCheck, Smartphone } from "lucide-react";

import { Container } from "@/components/Container";
import { featurePreviewItems, homeSecondaryFeatures } from "@/lib/marketing-data";
import { btnGhost, btnGradient, eyebrow, transitionBase } from "@/lib/ui";

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
    <section id="features-preview" className="relative scroll-mt-24 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-indigo-300/50 to-transparent dark:via-indigo-500/30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 bottom-0 -z-10 h-64 w-[min(100%,48rem)] -translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl dark:bg-indigo-500/10"
      />

      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <p className={eyebrow}>Features</p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] dark:text-white">
            A preview of what makes HealthBook feel effortless
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-400">
            Scheduling, longitudinal records, consent sharing, encrypted messaging, medicine adherence nudges, optional browser push, and admin-grade governance—shipping together today.
          </p>
          <div className="mt-6 flex justify-center" aria-hidden>
            <Image
              src="/globe.svg"
              alt=""
              width={48}
              height={48}
              className="opacity-70 dark:opacity-60"
              loading="lazy"
              decoding="async"
              unoptimized
            />
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-[88rem] gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {featurePreviewItems.map(({ key, title, blurb, accent, glow }) => {
            const Icon = icons[key] || Files;
            return (
              <article
                key={key}
                className={
                  "group relative overflow-hidden rounded-[1.35rem] border border-slate-200/70 bg-[var(--hb-glass)] p-8 shadow-[var(--hb-shadow-card)] backdrop-blur-2xl dark:border-slate-800/80 dark:bg-slate-950/50 " +
                  transitionBase +
                  " hover:-translate-y-1 hover:border-indigo-200/60 hover:shadow-[var(--hb-shadow-hover)] dark:hover:border-indigo-500/30"
                }
              >
                <div
                  aria-hidden
                  className={
                    "pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br opacity-70 blur-2xl " +
                    glow +
                    " transition-opacity duration-500 group-hover:opacity-100"
                  }
                />
                <div
                  className={
                    "relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br " +
                    accent +
                    " text-white shadow-lg shadow-indigo-500/25 " +
                    transitionBase +
                    " group-hover:scale-105 group-hover:shadow-xl"
                  }
                >
                  <Icon className="h-7 w-7" strokeWidth={1.65} aria-hidden />
                </div>
                <h3 className="relative font-heading text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
                <p className="relative mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{blurb}</p>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
          Also live in production builds
        </p>
        <div className="mx-auto mt-6 grid max-w-[88rem] gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {homeSecondaryFeatures.map(({ key, title, blurb, accent, glow }) => {
            const Icon = icons[key] || Files;
            return (
              <article
                key={key}
                className={
                  "group relative overflow-hidden rounded-[1.35rem] border border-slate-200/70 bg-white/80 p-7 shadow-[var(--hb-shadow-card)] backdrop-blur-2xl dark:border-slate-800/80 dark:bg-slate-950/55 sm:p-8 " +
                  transitionBase +
                  " hover:-translate-y-1 hover:border-teal-200/50 hover:shadow-[var(--hb-shadow-hover)] dark:hover:border-teal-500/20"
                }
              >
                <div
                  aria-hidden
                  className={
                    "pointer-events-none absolute -left-6 bottom-0 h-36 w-36 rounded-full bg-gradient-to-br opacity-60 blur-2xl " +
                    glow +
                    " transition-opacity duration-500 group-hover:opacity-90"
                  }
                />
                <div
                  className={
                    "relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br " +
                    accent +
                    " text-white shadow-md shadow-indigo-500/20 " +
                    transitionBase +
                    " group-hover:scale-105"
                  }
                >
                  <Icon className="h-6 w-6" strokeWidth={1.65} aria-hidden />
                </div>
                <h3 className="relative font-heading text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{blurb}</p>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <Link href="/features" className={btnGradient + " group inline-flex min-h-12 items-center gap-2 px-8 text-base"}>
            Explore all features
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
          </Link>
          <Link href="/for-patients" className={btnGhost + " min-h-12 px-8 text-base"}>
            For patients
          </Link>
        </div>
      </Container>
    </section>
  );
}
