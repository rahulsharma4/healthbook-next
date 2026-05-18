"use client";

import { motion } from "framer-motion";
import { Star, Sparkles } from "lucide-react";

import { Container } from "@/components/Container";
import { cardInteractive, eyebrow, transitionBase } from "@/lib/ui";

const quotes = [
  {
    quote:
      "Between work and kids I never remembered which portal had my MRI. HealthBook is the first place everything actually lives together — I walked into my follow-up prepared for once.",
    name: "Sarah Mitchell",
    role: "Patient · Austin, TX",
    initials: "SM",
    color: "from-indigo-500 to-purple-600",
  },
  {
    quote:
      "We rolled it out to three physicians last quarter. Booking friction dropped immediately, and patients comment on how ‘calm’ the whole thing feels compared to our old clunky vendor.",
    name: "Dr. Arjun Mehta",
    role: "Clinic Lead · Internal Medicine",
    initials: "AM",
    color: "from-emerald-500 to-teal-600",
  },
  {
    quote:
      "I was skeptical of another health app. Two weeks in, my cardiologist’s notes and my home readings were in one thread — no more screenshotting PDFs into my camera roll.",
    name: "Elena Rossi",
    role: "Patient · Milan",
    initials: "ER",
    color: "from-violet-500 to-fuchsia-600",
  },
];

const list = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-24 sm:py-32 relative">
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
            <span>Proven In Production</span>
          </div>
          <h2 className="font-heading text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Loved By Doctors & Patients
          </h2>
          <p className="mt-4 text-pretty text-lg font-medium text-slate-600 dark:text-slate-300 sm:text-xl">
            Real success stories from clinical pilots and design partners across multiple care specialties.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          variants={list}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {quotes.map((t) => (
            <motion.article
              key={t.name}
              variants={card}
              className={
                "group flex flex-col rounded-[2.25rem] border border-slate-200/90 bg-white/95 p-8 shadow-2xl shadow-slate-200/50 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-black/50 " +
                transitionBase +
                " hover:-translate-y-2 hover:border-indigo-300 hover:shadow-[0_35px_80px_-15px_rgba(99,102,241,0.25)] dark:hover:border-indigo-500/40"
              }
            >
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 fill-amber-400 text-amber-400 transform group-hover:scale-110 transition duration-150" style={{ transitionDelay: `${idx * 50}ms` }} />
                ))}
              </div>

              <blockquote className="flex-1 border-0 p-0 mb-8">
                <p className="text-base font-medium leading-relaxed text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition duration-200">
                  “{t.quote}”
                </p>
              </blockquote>

              <footer className="mt-auto flex items-center gap-4 border-t border-slate-100/90 pt-6 dark:border-slate-800/80">
                <div
                  className={
                    "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br " +
                    t.color +
                    " text-lg font-black text-white shadow-xl shadow-indigo-500/20 " +
                    transitionBase +
                    " transform group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl"
                  }
                  aria-hidden
                >
                  {t.initials}
                </div>
                <div>
                  <cite className="not-italic font-heading text-lg font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition duration-200">{t.name}</cite>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-0.5">{t.role}</div>
                </div>
              </footer>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
