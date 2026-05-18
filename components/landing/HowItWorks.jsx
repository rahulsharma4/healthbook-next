"use client";

import { motion } from "framer-motion";
import { ClipboardList, Stethoscope, UserRound, Sparkles } from "lucide-react";

import { Container } from "@/components/Container";
import { eyebrow, transitionBase } from "@/lib/ui";

const steps = [
  {
    step: "01",
    title: "Patient Books & Grants Access",
    body: "Select a verified doctor, lock in an availability-backed slot, and grant scoped chart access with 1-click. Enable WhatsApp or browser push alerts instantly.",
    icon: UserRound,
    tone: "from-rose-500 via-fuchsia-500 to-indigo-600",
    shadow: "shadow-rose-500/30",
  },
  {
    step: "02",
    title: "Doctor Conducts Video Consult",
    body: "Open longitudinal patient records instantly, initiate a zero-setup Jitsi video call, and issue a digitally verifiable PDF prescription without friction.",
    icon: Stethoscope,
    tone: "from-indigo-600 via-violet-600 to-cyan-500",
    shadow: "shadow-indigo-500/30",
  },
  {
    step: "03",
    title: "Records Sync to Audit Timeline",
    body: "Lab reports, doctor notes, and follow-up schedules automatically organize into a clean, immutable timeline ready for subsequent clinician review.",
    icon: ClipboardList,
    tone: "from-cyan-500 via-teal-500 to-emerald-600",
    shadow: "shadow-teal-500/30",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(99,102,241,0.08)_0%,transparent_48%,rgba(6,182,212,0.08)_100%)] dark:bg-[linear-gradient(180deg,rgba(99,102,241,0.14)_0%,transparent_48%,rgba(6,182,212,0.1)_100%)]"
      />
      <Container>
        <motion.div
          className="mx-auto max-w-4xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-200/80 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600 animate-spin" style={{ animationDuration: "6s" }} />
            <span>Effortless Care Journey</span>
          </div>
          <h2 className="font-heading text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            3 Simple Steps to Continuity
          </h2>
          <p className="mt-4 text-pretty text-lg font-medium text-slate-600 dark:text-slate-300 sm:text-xl">
            We unite fragmented patient histories with lightning-fast telehealth consultations into one seamless, auditable workflow.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-6xl">
          {/* Animated Interconnecting Laser Line */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-12 right-12 top-24 hidden h-1.5 rounded-full bg-gradient-to-r from-rose-500 via-indigo-500 to-emerald-500 lg:block opacity-60 dark:opacity-80 shadow-lg shadow-indigo-500/30"
          />
          <ul className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.li
                  key={s.step}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className={
                      "relative z-10 flex h-full flex-col rounded-[2.5rem] border border-slate-200/90 bg-white/95 p-8 pt-14 shadow-2xl shadow-slate-200/60 backdrop-blur-xl dark:border-slate-800/90 dark:bg-slate-900/95 dark:shadow-black/60 " +
                      transitionBase +
                      " hover:-translate-y-2 hover:border-indigo-300 hover:shadow-[0_35px_80px_-15px_rgba(99,102,241,0.25)] dark:hover:border-indigo-500/40"
                    }
                  >
                    <div className="absolute top-6 right-8 text-6xl font-black font-mono text-slate-100 dark:text-slate-800/60 pointer-events-none select-none transition group-hover:scale-110 group-hover:text-indigo-100 dark:group-hover:text-indigo-950/50">
                      {s.step}
                    </div>

                    <div
                      className={
                        "absolute left-8 top-0 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-xl " +
                        s.tone +
                        " " + s.shadow + " " +
                        transitionBase +
                        " transform group-hover:scale-110 group-hover:rotate-3"
                      }
                    >
                      <Icon className="h-7 w-7" strokeWidth={2.2} aria-hidden />
                    </div>
                    <h3 className="mt-4 font-heading text-2xl font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition duration-200">{s.title}</h3>
                    <p className="mt-4 flex-1 text-base leading-relaxed text-slate-600 dark:text-slate-300 font-medium">{s.body}</p>
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
