"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Activity, Bell, LayoutDashboard, MessageSquare, Search } from "lucide-react";

import { Container } from "@/components/Container";
import { MARKETING_IMAGE_BLUR_DATA_URL } from "@/lib/marketingImageBlur";
import { glassPanel, transitionBase } from "@/lib/ui";

const bars = [42, 68, 55, 80, 48, 72, 60, 88, 52, 76];

export function ProductPreview() {
  const reduceMotion = useReducedMotion();
  const fadeUp = reduceMotion
    ? {}
    : { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.35 } };
  const fadeUpLarge = reduceMotion
    ? {}
    : { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } };

  return (
    <section id="product-preview" aria-label="Product preview" className="relative scroll-mt-24 py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[min(80vh,640px)] -translate-y-1/2 bg-[radial-gradient(ellipse_65%_50%_at_50%_50%,rgba(99,102,241,0.14),transparent_65%)] dark:bg-[radial-gradient(ellipse_65%_50%_at_50%_50%,rgba(129,140,248,0.12),transparent_65%)]"
      />
      <Container>
        <motion.div
          className="mx-auto max-w-5xl text-center"
          {...fadeUp}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">Product preview</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] dark:text-white">
            One dashboard. Every touchpoint.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-600 dark:text-slate-400 sm:text-xl">
            Messaging volume, notification cadence, utilization charts, and patient search mirror live clinician tooling—rendered here as a calm glassmorphic snapshot rather than a generic mockup.
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-14 max-w-6xl"
          {...fadeUpLarge}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className={
              "absolute -inset-4 rounded-[2rem] bg-linear-to-br from-indigo-500/25 via-violet-500/15 to-cyan-500/20 blur-2xl sm:-inset-8 " +
              transitionBase
            }
            aria-hidden
          >
          </div>
          <div
            className={
              "relative overflow-hidden rounded-[1.65rem] border border-white/70 bg-[var(--hb-glass)] shadow-[0_36px_90px_-28px_rgba(15,23,42,0.22)] ring-1 ring-slate-900/[0.05] backdrop-blur-2xl dark:border-slate-700/70 dark:bg-slate-950/50 dark:ring-white/10 " +
              transitionBase +
              " hover:shadow-[0_44px_100px_-28px_rgba(79,70,229,0.28)]"
            }
          >
            <div className="relative aspect-[16/10] min-h-[280px] w-full sm:aspect-[21/10] sm:min-h-[320px]">
              <Image
                src="/marketing/home-ambient.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 1024px"
                className="object-cover opacity-[0.35] dark:opacity-[0.28]"
                priority
                placeholder="blur"
                blurDataURL={MARKETING_IMAGE_BLUR_DATA_URL}
              />
              <Image
                src="/marketing/dashboard-texture.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 1024px"
                className="object-cover mix-blend-multiply opacity-40 dark:mix-blend-soft-light dark:opacity-35"
                loading="lazy"
                placeholder="blur"
                blurDataURL={MARKETING_IMAGE_BLUR_DATA_URL}
              />
              <div className="absolute inset-0 bg-linear-to-b from-white/75 via-white/65 to-indigo-50/40 dark:from-slate-950/85 dark:via-slate-950/75 dark:to-indigo-950/50" />

              <div className="absolute inset-0 flex flex-col p-3 sm:p-5">
                <div className="flex items-center justify-between gap-2 rounded-xl border border-slate-200/60 bg-white/85 px-3 py-2 shadow-sm backdrop-blur-md dark:border-slate-700/60 dark:bg-slate-900/75">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-indigo-600 to-violet-600 text-white shadow-md sm:h-9 sm:w-9">
                      <LayoutDashboard className="h-4 w-4 sm:h-[1.05rem] sm:w-[1.05rem]" aria-hidden />
                    </span>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Workspace
                      </p>
                      <p className="truncate text-xs font-bold text-slate-900 sm:text-sm dark:text-white">HealthBook · Overview</p>
                    </div>
                  </div>
                  <div className="hidden items-center gap-2 sm:flex">
                    <span className={glassPanel + " flex items-center gap-2 px-3 py-1.5 text-xs text-slate-600 dark:text-slate-300"}>
                      <Search className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
                      Search patients…
                    </span>
                    <span className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/80 bg-white/90 dark:border-slate-600 dark:bg-slate-800/90">
                      <Bell className="h-4 w-4 text-slate-600 dark:text-slate-300" aria-hidden />
                      <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-900" />
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex min-h-0 flex-1 gap-2 sm:mt-4 sm:gap-3">
                  <aside className="hidden w-44 shrink-0 flex-col gap-1 rounded-xl border border-slate-200/50 bg-white/70 p-2 text-xs font-medium text-slate-600 backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-900/60 dark:text-slate-300 lg:flex">
                    {["Overview", "Appointments", "Records", "Messages", "Settings"].map((label, idx) => (
                      <span
                        key={label}
                        className={
                          "rounded-lg px-3 py-2 " +
                          (idx === 0
                            ? "bg-indigo-600/10 font-semibold text-indigo-800 dark:bg-indigo-500/15 dark:text-indigo-100"
                            : "hover:bg-slate-100/80 dark:hover:bg-slate-800/80")
                        }
                      >
                        {label}
                      </span>
                    ))}
                  </aside>

                  <div className="flex min-w-0 flex-1 flex-col gap-2 sm:gap-3">
                    <div className="grid shrink-0 grid-cols-3 gap-2 sm:gap-3">
                      {[
                        { k: "Today", v: "12", sub: "appointments" },
                        { k: "Unread", v: "3", sub: "messages" },
                        { k: "Records", v: "28", sub: "this month" },
                      ].map((cell) => (
                        <div
                          key={cell.k}
                          className={
                            glassPanel +
                            " rounded-xl px-3 py-3 shadow-sm backdrop-blur-md sm:px-4 sm:py-4 " +
                            transitionBase +
                            " hover:shadow-md"
                          }
                        >
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
                            {cell.k}
                          </p>
                          <p className="mt-1 font-heading text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">{cell.v}</p>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400">{cell.sub}</p>
                        </div>
                      ))}
                    </div>

                    <div
                      className={
                        glassPanel +
                        " flex min-h-0 flex-1 flex-col rounded-xl p-4 shadow-sm backdrop-blur-md sm:p-5 " +
                        transitionBase +
                        " hover:shadow-md"
                      }
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                          <Activity className="mr-1 inline h-3.5 w-3.5 text-indigo-500" aria-hidden />
                          Visit volume
                        </p>
                        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-800 dark:text-emerald-200">
                          +18% WoW
                        </span>
                      </div>
                      <div className="mt-4 flex h-36 items-end gap-1.5 sm:h-40 sm:gap-2">
                        {bars.map((h, i) => (
                          <div key={i} className="flex h-full min-h-0 flex-1 flex-col justify-end">
                            <motion.div
                              className="w-full rounded-t-md bg-linear-to-t from-indigo-600/90 to-violet-400/90 shadow-sm shadow-indigo-500/15 dark:from-indigo-500 dark:to-violet-400"
                              style={{ height: `${h}%` }}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, amount: 0.2 }}
                              transition={{ duration: 0.4, delay: 0.03 + i * 0.025, ease: [0.22, 1, 0.36, 1] }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-2 rounded-xl border border-dashed border-indigo-200/70 bg-indigo-50/50 px-3 py-2.5 text-xs text-indigo-900 dark:border-indigo-500/30 dark:bg-indigo-950/40 dark:text-indigo-100 sm:gap-3 sm:px-4">
                      <MessageSquare className="h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-300" aria-hidden />
                      <span className="leading-snug">
                        <span className="font-semibold">Dr. Rao</span> replied about your lab follow-up — tap Messages to continue.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
