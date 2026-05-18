"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/Container";
import { cardInteractive, eyebrow, transitionBase } from "@/lib/ui";

const quotes = [
  {
    quote:
      "Between work and kids I never remembered which portal had my MRI. HealthBook is the first place everything actually lives together — I walked into my follow-up prepared for once.",
    name: "Sarah Mitchell",
    role: "Patient · Austin, TX",
    initials: "SM",
  },
  {
    quote:
      "We rolled it out to three physicians last quarter. Booking friction dropped immediately, and patients comment on how ‘calm’ the whole thing feels compared to our old vendor.",
    name: "Dr. Arjun Mehta",
    role: "Clinic lead · Internal medicine",
    initials: "AM",
  },
  {
    quote:
      "I was skeptical of another health app. Two weeks in, my cardiologist’s notes and my home readings were in one thread — no more screenshotting PDFs into my camera roll.",
    name: "Elena Rossi",
    role: "Patient · Milan",
    initials: "ER",
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
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={eyebrow}>Testimonials</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Teams and patients who refuse to settle for clunky software
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Representative feedback from pilots and design partners — names and locales are illustrative for marketing.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          variants={list}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {quotes.map((t) => (
            <motion.article key={t.name} variants={card} className={"group flex flex-col " + cardInteractive}>
              <div className="mb-6 text-4xl leading-none text-indigo-200 transition group-hover:text-indigo-300 dark:text-indigo-900 dark:group-hover:text-indigo-800">
                “
              </div>
              <blockquote className="flex-1 border-0 p-0">
                <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">{t.quote}</p>
              </blockquote>
              <footer className="mt-8 flex items-center gap-4 border-t border-slate-100/90 pt-6 dark:border-slate-800">
                <div
                  className={
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white shadow-md " +
                    transitionBase +
                    " group-hover:scale-105 group-hover:shadow-lg"
                  }
                  aria-hidden
                >
                  {t.initials}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-slate-900 dark:text-white">{t.name}</cite>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{t.role}</div>
                </div>
              </footer>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
