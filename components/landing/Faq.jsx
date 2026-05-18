"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { Container } from "@/components/Container";
import { eyebrow, transitionBase } from "@/lib/ui";

const faqs = [
  {
    q: "Is HealthBook a replacement for my doctor?",
    a: "No. HealthBook is software to help you organize care — appointments, records, and messages. Medical decisions always belong to you and your licensed providers.",
  },
  {
    q: "How does HealthBook protect my health data?",
    a: "We design for least-privilege access, encryption in transit, audit-friendly activity, CSRF-aware browser APIs, and explicit consent paths before clinicians open your chart. Exact certifications depend on your deployment — talk to us about your compliance targets.",
  },
  {
    q: "Can clinics onboard multiple locations?",
    a: "Yes. Clinic-tier workflows are built for teams that need routing, roles, and governance across sites — without sacrificing a calm experience for front-desk staff and clinicians.",
  },
  {
    q: "Do patients need to install an app?",
    a: "HealthBook ships responsive web portals first—patients and clinicians start from modern browsers. Optional web push uses the browser’s notification surface when someone explicitly opts in.",
  },
  {
    q: "How do payments work for online vs in-person visits?",
    a: "HealthBook supports a checkout flow with clear fee breakup. Online visits are prepaid. For in-person visits, clinics can choose to collect the platform fee online and have patients pay the doctor’s full consultation fee at the clinic (so platform fees never reduce what the doctor charges).",
  },
  {
    q: "Does HealthBook support multi-factor authentication?",
    a: "Yes. Accounts can be challenged with additional verification when MFA policies apply. Cookie-backed sessions remain tightly scoped so browsers behave predictably in clinical settings.",
  },
  {
    q: "How do medicine reminders work?",
    a: "Patients configure schedules inside their portal. Authorized clinicians may see adherence-friendly summaries alongside encounters when access has been granted—helpful for titration conversations without nagging SMS chains.",
  },
  {
    q: "Can I share imaging or PDFs without emailing everything?",
    a: "Patients can bundle selected uploads into time-limited share links and revoke them early if plans change—ideal for referrals while staying inside audited workflows.",
  },
  {
    q: "What happens after I submit the contact form?",
    a: "Your note is stored securely for our team to review. We respond to thoughtful inquiries as capacity allows — for urgent clinical issues, always contact your provider or emergency services.",
  },
  {
    q: "Can I export my information?",
    a: "Product direction supports portability where regulations allow. We will document export formats and retention policies clearly before production launch for your jurisdiction.",
  },
];

export function Faq() {
  const [openId, setOpenId] = useState(0);

  return (
    <section id="faq" className="scroll-mt-24 border-y border-slate-200/70 bg-white/50 py-20 backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-950/40 sm:py-28">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <p className={eyebrow}>FAQ</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Answers that help you evaluate faster
          </h2>
          <p className="mt-4 text-pretty text-lg text-slate-600 dark:text-slate-400 sm:text-xl">
            Straight talk on shipped capabilities—from MFA and reminders to share links—plus privacy posture and scale thinking without buzzword bingo.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openId === index;
            return (
              <div
                key={item.q}
                className={
                  "overflow-hidden rounded-2xl border border-slate-200/80 bg-[var(--hb-glass)] shadow-[var(--hb-shadow-card)] backdrop-blur-xl dark:border-slate-800/85 dark:bg-slate-950/55 " +
                  transitionBase +
                  (isOpen ? " ring-1 ring-indigo-200/60 dark:ring-indigo-500/25" : " hover:border-indigo-200/50 dark:hover:border-indigo-500/20")
                }
              >
                <button
                  type="button"
                  id={`faq-btn-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  onClick={() => setOpenId(isOpen ? -1 : index)}
                >
                  <span className="font-heading text-base font-semibold text-slate-900 sm:text-lg dark:text-white">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-200"
                  >
                    <ChevronDown className="h-5 w-5" aria-hidden />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-btn-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-slate-200/70 px-5 pb-5 pt-4 text-sm leading-relaxed text-slate-600 sm:px-6 sm:text-base dark:border-slate-800 dark:text-slate-400">
                        {item.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
