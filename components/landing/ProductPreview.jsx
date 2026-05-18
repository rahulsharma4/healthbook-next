"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Activity, Bell, LayoutDashboard, MessageSquare, Search, Sparkles } from "lucide-react";

import { Container } from "@/components/Container";
import { MARKETING_IMAGE_BLUR_DATA_URL } from "@/lib/marketingImageBlur";
import { glassPanel, transitionBase } from "@/lib/ui";

const bars = [42, 68, 55, 80, 48, 72, 60, 88, 52, 76];

export function ProductPreview() {
  const reduceMotion = useReducedMotion();
  const fadeUp = reduceMotion
    ? {}
    : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.35 } };
  const fadeUpLarge = reduceMotion
    ? {}
    : { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } };

  return (
    <section id="product-preview" aria-label="Product preview" className="relative scroll-mt-24 py-24 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[min(80vh,700px)] -translate-y-1/2 bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,rgba(99,102,241,0.18),transparent_70%)] dark:bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,rgba(129,140,248,0.15),transparent_70%)]"
      />
      <Container>
        <motion.div
          className="mx-auto max-w-4xl text-center mb-16"
          {...fadeUp}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-200/80 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600 animate-spin" style={{ animationDuration: "6s" }} />
            <span>Interactive Workspace</span>
          </div>
          <h2 className="font-heading text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            One Dashboard. Every Touchpoint.
          </h2>
          <p className="mt-4 text-pretty text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
            Messaging volume, notification cadence, clinical utilization charts, and patient search mirror live clinician tooling—rendered here as a calm glassmorphic snapshot.
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-16 max-w-6xl"
          {...fadeUpLarge}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className={
              "absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/35 via-purple-500/25 to-cyan-500/30 blur-3xl sm:-inset-8 " +
              transitionBase
            }
            aria-hidden
          >
          </div>
          <div
            className={
              "relative overflow-hidden rounded-[2.25rem] border border-white/80 bg-[var(--hb-glass)] shadow-[0_40px_100px_-20px_rgba(15,23,42,0.3)] ring-1 ring-slate-900/[0.05] backdrop-blur-3xl dark:border-slate-700/80 dark:bg-slate-950/70 dark:ring-white/10 " +
              transitionBase +
              " hover:shadow-[0_50px_120px_-20px_rgba(79,70,229,0.35)]"
            }
          >
            <div className="relative aspect-[16/10] min-h-[320px] w-full sm:aspect-[21/10] sm:min-h-[380px]">
              <Image
                src="/marketing/home-ambient.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 1024px"
                className="object-cover opacity-[0.4] dark:opacity-[0.3]"
                priority
                placeholder="blur"
                blurDataURL={MARKETING_IMAGE_BLUR_DATA_URL}
              />
              <Image
                src="/marketing/dashboard-texture.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 1024px"
                className="object-cover mix-blend-multiply opacity-50 dark:mix-blend-soft-light dark:opacity-40"
                loading="lazy"
                placeholder="blur"
                blurDataURL={MARKETING_IMAGE_BLUR_DATA_URL}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-indigo-50/50 dark:from-slate-950/90 dark:via-slate-950/80 dark:to-indigo-950/60" />

              <div className="absolute inset-0 flex flex-col p-4 sm:p-8">
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-white/95 px-5 py-3 shadow-lg shadow-indigo-500/10 backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/90">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30 font-bold">
                      <LayoutDashboard className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                        Active Workspace
                      </p>
                      <p className="truncate text-sm sm:text-base font-black font-heading text-slate-900 dark:text-white">HealthBook · Clinical Command</p>
                    </div>
                  </div>
                  <div className="hidden items-center gap-3 sm:flex">
                    <span className={glassPanel + " flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 rounded-xl"}>
                      <Search className="h-4 w-4 shrink-0 opacity-70" aria-hidden />
                      Search patients, labs, visits…
                    </span>
                    <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/90 bg-white/95 shadow-sm dark:border-slate-700 dark:bg-slate-800 transition hover:scale-105">
                      <Bell className="h-5 w-5 text-slate-700 dark:text-slate-200" aria-hidden />
                      <span className="absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-900 animate-pulse" />
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex min-h-0 flex-1 gap-4 sm:gap-6">
                  <aside className="hidden w-52 shrink-0 flex-col gap-1.5 rounded-2xl border border-slate-200/80 bg-white/85 p-3 text-xs font-extrabold text-slate-600 backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-300 lg:flex shadow-lg shadow-slate-200/30">
                    {["Overview Dashboard", "Appointments (12)", "Patient Records", "Secure Messaging", "Analytics & Vitals", "Workspace Settings"].map((label, idx) => (
                      <span
                        key={label}
                        className={
                          "rounded-xl px-4 py-3 transition " +
                          (idx === 0
                            ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-102 font-black font-heading"
                            : "hover:bg-indigo-50/80 dark:hover:bg-slate-800/80 hover:text-indigo-600 dark:hover:text-indigo-400")
                        }
                      >
                        {label}
                      </span>
                    ))}
                  </aside>

                  <div className="flex min-w-0 flex-1 flex-col gap-4 sm:gap-5">
                    <div className="grid shrink-0 grid-cols-3 gap-3 sm:gap-4">
                      {[
                        { k: "Appointments Today", v: "12 Slots", sub: "100% Confirmed" },
                        { k: "Secure Messages", v: "3 Unread", sub: "Lab queries active" },
                        { k: "Records Shared", v: "28 Patient", sub: "HIPAA consent locked" },
                      ].map((cell) => (
                        <div
                          key={cell.k}
                          className={
                            glassPanel +
                            " rounded-2xl p-4 sm:p-5 shadow-lg shadow-slate-200/40 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-700/80 " +
                            transitionBase +
                            " hover:shadow-xl hover:-translate-y-1 hover:border-indigo-300"
                          }
                        >
                          <p className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                            {cell.k}
                          </p>
                          <p className="mt-1 font-heading text-2xl font-black text-slate-900 sm:text-3xl dark:text-white">{cell.v}</p>
                          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">{cell.sub}</p>
                        </div>
                      ))}
                    </div>

                    <div
                      className={
                        glassPanel +
                        " flex min-h-0 flex-1 flex-col rounded-2xl p-5 sm:p-6 shadow-lg shadow-slate-200/40 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-700/80 " +
                        transitionBase +
                        " hover:shadow-xl"
                      }
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-bold text-slate-900 dark:text-white font-heading">
                          <Activity className="mr-2 inline h-4 w-4 text-indigo-600 animate-pulse" aria-hidden />
                          Longitudinal Visit Volume Analytics
                        </p>
                        <span className="rounded-full bg-emerald-100/90 px-3 py-1 text-[11px] font-extrabold text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shadow-sm">
                          +18% WoW Growth
                        </span>
                      </div>
                      <div className="mt-6 flex h-40 items-end gap-2 sm:h-44 sm:gap-3">
                        {bars.map((h, i) => (
                          <div key={i} className="flex h-full min-h-0 flex-1 flex-col justify-end group">
                            <motion.div
                              className="w-full rounded-t-lg bg-gradient-to-t from-indigo-600 to-violet-500 shadow-lg shadow-indigo-500/25 dark:from-indigo-500 dark:to-violet-400 group-hover:from-indigo-500 group-hover:to-cyan-400 transition-all duration-300 cursor-pointer"
                              style={{ height: `${h}%` }}
                              initial={{ opacity: 0, y: 15 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, amount: 0.2 }}
                              transition={{ duration: 0.4, delay: 0.03 + i * 0.025, ease: [0.22, 1, 0.36, 1] }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-3.5 rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-50/90 to-purple-50/90 p-4 shadow-md backdrop-blur-md dark:border-indigo-500/40 dark:from-slate-900/90 dark:to-indigo-950/90 text-sm text-indigo-950 dark:text-indigo-100">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-500/30 animate-pulse">
                        <MessageSquare className="h-5 w-5" aria-hidden />
                      </div>
                      <span className="leading-relaxed font-medium">
                        <span className="font-extrabold font-heading text-indigo-900 dark:text-indigo-200">Dr. Rao</span> replied about your recent cardiology lab follow-up — tap Secure Messages to continue.
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
