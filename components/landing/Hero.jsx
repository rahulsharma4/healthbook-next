"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Activity, ArrowRight, CheckCircle2, ChevronRight, Clock, ShieldCheck, Sparkles, Star, UserCheck, Video, Zap } from "lucide-react";

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

const demoDoctors = [
  { id: "gen", spec: "General Care", name: "Dr. Ananya Sharma", time: "Available in 15 mins", rating: "4.9", exp: "12 yrs exp", fee: "₹500", status: "Online Now" },
  { id: "cardio", spec: "Cardiology", name: "Dr. Rahul Verma", time: "Next slot at 4:30 PM", rating: "5.0", exp: "16 yrs exp", fee: "₹800", status: "Filling Fast" },
  { id: "ped", spec: "Pediatrics", name: "Dr. Priya Sen", time: "Available Today 6:00 PM", rating: "4.8", exp: "10 yrs exp", fee: "₹600", status: "2 slots left" },
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const motionSafe = !reduceMotion;
  const [activeTab, setActiveTab] = useState(demoDoctors[0]);

  return (
    <section className="relative overflow-hidden pb-24 pt-16 sm:pb-36 sm:pt-20 lg:pb-40 lg:pt-24">
      {/* Radiant Glowing Ambient Backdrop */}
      <div aria-hidden className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[750px] w-[1100px] -translate-x-1/2 bg-gradient-to-br from-indigo-500/40 via-purple-500/35 to-pink-500/40 blur-[140px] rounded-full sm:from-indigo-500/45 sm:via-purple-500/40 sm:to-pink-500/45" />
        <div className="absolute left-[5%] top-28 h-96 w-96 rounded-full bg-gradient-to-tr from-violet-600/35 via-fuchsia-600/30 to-transparent blur-[120px]" />
        <div className="absolute right-[5%] bottom-16 h-96 w-96 rounded-full bg-gradient-to-bl from-cyan-500/35 via-indigo-600/30 to-transparent blur-[120px]" />
      </div>

      <Container className="relative px-4 sm:px-6">
        <div className="relative mx-auto max-w-6xl">

          {/* Floating Vitals Widget (Top Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex absolute -top-8 -left-12 z-30 items-center gap-3.5 rounded-2xl border border-white/90 bg-white/95 p-4 shadow-[0_25px_60px_-15px_rgba(99,102,241,0.35)] backdrop-blur-2xl dark:border-slate-700/80 dark:bg-slate-900/95"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25">
              <Activity className="h-6 w-6 text-white animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Live Vitals Sync</span>
              </div>
              <p className="font-heading text-sm font-black text-slate-900 dark:text-white mt-0.5">BP 120/80 · Pulse 72</p>
              <p className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">SpO2 99% · Normal</p>
            </div>
          </motion.div>

          {/* Floating Telehealth Widget (Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -20 }}
            animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden lg:flex absolute -bottom-10 -right-10 z-30 items-center gap-3.5 rounded-2xl border border-white/90 bg-white/95 p-4 shadow-[0_25px_60px_-15px_rgba(168,85,247,0.35)] backdrop-blur-2xl dark:border-slate-700/80 dark:bg-slate-900/95"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/25">
              <Video className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-black bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-200 uppercase tracking-widest">In-App Consult</span>
              </div>
              <p className="font-heading text-sm font-black text-slate-900 dark:text-white mt-0.5">Dr. Sharma (Cardio)</p>
              <p className="text-[11px] font-medium text-purple-600 dark:text-purple-400">1-Click Jitsi Video Ready</p>
            </div>
          </motion.div>

          {/* Glassmorphic Multi-Layer Main Container */}
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[3.75rem] border border-white/90 bg-gradient-to-b from-white/95 via-white/90 to-indigo-50/70 p-6 sm:p-14 lg:p-20 shadow-[0_40px_120px_-15px_rgba(99,102,241,0.35)] backdrop-blur-3xl dark:border-slate-800 dark:bg-gradient-to-b dark:from-slate-950/95 dark:via-slate-950/90 dark:to-indigo-950/50 dark:shadow-[0_40px_120px_-15px_rgba(0,0,0,0.9)]">
            
            {/* Elegant Tech Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none opacity-60 dark:opacity-40" />
            
            {/* Top Glowing Edge Bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500" />

            <motion.div
              className="relative z-10 mx-auto max-w-4xl text-center"
              variants={motionSafe ? container : undefined}
              initial={motionSafe ? "hidden" : false}
              animate={motionSafe ? "visible" : undefined}
            >
              {/* Premium Pill Badge */}
              <motion.div
                variants={motionSafe ? item : undefined}
                className={
                  "mx-auto mb-6 sm:mb-8 inline-flex items-center gap-2.5 rounded-full border border-indigo-200/90 bg-gradient-to-r from-indigo-50/95 via-purple-50/95 to-cyan-50/95 px-5 sm:px-6 py-2 sm:py-2.5 shadow-md shadow-indigo-500/20 backdrop-blur-xl dark:border-indigo-500/40 dark:from-slate-900/95 dark:via-indigo-950/95 dark:to-slate-900/95 " +
                  transitionBase +
                  " hover:border-indigo-300 hover:shadow-lg dark:hover:border-indigo-400/50"
                }
              >
                <Sparkles className="h-4 w-4 text-indigo-600 animate-spin dark:text-indigo-400 shrink-0" aria-hidden style={{ animationDuration: "8s" }} />
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-indigo-950 dark:text-indigo-200 truncate">
                  Care that feels human again
                </span>
              </motion.div>

              {/* Masterpiece Headline */}
              <motion.h1
                variants={motionSafe ? item : undefined}
                className="text-balance font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
              >
                The Calm{" "}
                <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent dark:from-violet-400 dark:via-indigo-300 dark:to-cyan-300 font-black drop-shadow-sm">
                  Command Center
                </span>{" "}
                for Your Medical Life.
              </motion.h1>

              {/* Premium Subtitle */}
              <motion.p
                variants={motionSafe ? item : undefined}
                className="mx-auto mt-6 sm:mt-8 max-w-3xl text-pretty text-base sm:text-xl leading-relaxed font-semibold text-slate-700 dark:text-slate-300"
              >
                Stop juggling multiple disconnected clinical portals. Experience one unified, HIPAA-ready ecosystem for appointments, consent-aware health records, real-time doctor chat, and in-app video calling.
              </motion.p>

              {/* Glowing Neon Capability Pills */}
              <motion.div
                variants={motionSafe ? item : undefined}
                className="mx-auto mt-8 sm:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3.5"
                aria-label="Highlighted capabilities"
              >
                {heroCapabilityPills.map((label) => (
                  <span
                    key={label}
                    className={
                      "rounded-2xl border border-indigo-600/20 bg-indigo-600/10 px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-indigo-900 shadow-sm backdrop-blur-md dark:border-indigo-400/30 dark:bg-indigo-500/15 dark:text-indigo-100 " +
                      transitionBase +
                      " hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-indigo-600/15 hover:shadow-md cursor-default font-mono"
                    }
                  >
                    {label}
                  </span>
                ))}
              </motion.div>

              {/* Live Interactive Doctor Availability Quick-Selector Bar */}
              <motion.div
                variants={motionSafe ? item : undefined}
                className="mx-auto mt-10 sm:mt-12 max-w-3xl rounded-3xl border border-indigo-200/80 bg-white/95 p-4 sm:p-6 shadow-2xl shadow-indigo-500/15 backdrop-blur-2xl dark:border-slate-700/80 dark:bg-slate-900/90"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-indigo-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <UserCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400 animate-pulse shrink-0" />
                    <span className="font-heading text-xs sm:text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Instant Smart Booking Demo</span>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-emerald-100/80 px-2.5 py-1 text-[10px] font-extrabold text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 self-start sm:self-auto">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                    Live Doctors Online
                  </span>
                </div>

                {/* Specialty Tabs */}
                <div className="flex flex-wrap gap-2 pt-4 justify-center">
                  {demoDoctors.map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => setActiveTab(doc)}
                      className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all duration-200 ${
                        activeTab.id === doc.id
                          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 scale-105"
                          : "bg-indigo-50/80 text-slate-700 hover:bg-indigo-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                      }`}
                    >
                      {doc.spec}
                    </button>
                  ))}
                </div>

                {/* Doctor Bio Card */}
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-indigo-50/50 to-purple-50/50 p-4 sm:p-4.5 border border-indigo-100/60 dark:from-slate-800/50 dark:to-indigo-950/40 dark:border-slate-700/60 w-full overflow-hidden">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left w-full min-w-0">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-extrabold text-lg shadow-md shadow-indigo-500/20">
                      {activeTab.name.charAt(4)}
                    </div>
                    <div className="min-w-0 flex-1 w-full">
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                        <h4 className="font-heading font-black text-slate-900 dark:text-white text-base sm:text-lg truncate">{activeTab.name}</h4>
                        <span className="flex items-center gap-0.5 rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 shrink-0">
                          <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> {activeTab.rating}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">{activeTab.spec} · <span className="font-semibold">{activeTab.exp}</span></p>
                      <p className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 text-xs font-extrabold text-indigo-600 dark:text-indigo-400 mt-1.5">
                        <span className="flex items-center"><Clock className="h-3.5 w-3.5 mr-1 shrink-0" />{activeTab.time}</span>
                        <span className="text-slate-300 dark:text-slate-600">·</span>
                        <span className="text-emerald-600">{activeTab.status}</span>
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/register"
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-lg shadow-indigo-500/30 transition hover:scale-105 w-full sm:w-auto shrink-0"
                  >
                    <span>Book Slot ({activeTab.fee})</span>
                    <ChevronRight className="h-4 w-4 shrink-0" />
                  </Link>
                </div>
              </motion.div>

              {/* Action Call Buttons */}
              <motion.div
                variants={motionSafe ? item : undefined}
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 w-full"
              >
                <Link href="/register" className={btnGradient + " group min-h-[3.75rem] w-full sm:w-auto min-w-[240px] gap-3 rounded-2xl px-8 text-base shadow-2xl shadow-indigo-500/40 font-extrabold transform hover:scale-[1.02] justify-center"}>
                  <Zap className="h-5 w-5 fill-white text-white animate-bounce shrink-0" style={{ animationDuration: "2s" }} />
                  Start Free Portal
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1 shrink-0" aria-hidden />
                </Link>
                <Link href="/features" className={btnGhost + " min-h-[3.75rem] w-full sm:w-auto min-w-[200px] rounded-2xl px-8 text-base font-extrabold shadow-sm border border-slate-300/80 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 justify-center"}>
                  Explore Features
                </Link>
              </motion.div>

              {/* Live Trust Stats Footer Bar */}
              <motion.div
                variants={motionSafe ? item : undefined}
                className="mx-auto mt-14 pt-8 border-t border-indigo-100 dark:border-slate-800/80 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-10 text-xs font-extrabold text-slate-600 dark:text-slate-400 uppercase tracking-widest"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>⭐️ 4.9/5 Provider Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>HIPAA & ISO 27001 Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-purple-600 dark:text-purple-400 shrink-0" />
                  <span>Zero-Setup Video Calling</span>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
