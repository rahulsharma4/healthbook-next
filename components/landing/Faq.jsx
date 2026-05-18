"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

import { Container } from "@/components/Container";
import { transitionBase } from "@/lib/ui";

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
    <section id="faq" className="scroll-mt-24 border-y border-indigo-100/60 bg-gradient-to-b from-white via-slate-50/50 to-white py-24 backdrop-blur-sm dark:border-slate-800/80 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900/40 dark:to-slate-950 sm:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-200/80 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600 animate-spin" style={{ animationDuration: "6s" }} />
            <span>Clear & Transparent</span>
          </div>
          <h2 className="font-heading text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-pretty text-lg font-medium text-slate-600 dark:text-slate-300 sm:text-xl">
            Everything you need to know about HIPAA compliance, billing models, medicine reminders, and clinical portal workflows.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openId === index;
            return (
              <div
                key={item.q}
                className={
                  "overflow-hidden rounded-[1.5rem] border border-slate-200/90 bg-white/95 shadow-lg shadow-slate-200/40 backdrop-blur-xl dark:border-slate-800/90 dark:bg-slate-900/80 dark:shadow-none " +
                  transitionBase +
                  (isOpen ? " ring-2 ring-indigo-500/40 border-indigo-300 dark:ring-indigo-500/30 dark:border-indigo-500/50" : " hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:border-indigo-500/30")
                }
              >
                <button
                  type="button"
                  id={`faq-btn-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 sm:px-8 sm:py-6 text-left focus:outline-none"
                  onClick={() => setOpenId(isOpen ? -1 : index)}
                >
                  <span className="font-heading text-lg font-bold text-slate-900 sm:text-xl dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition duration-200 ${isOpen ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25' : 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-200'}`}
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
                      <p className="border-t border-slate-100 px-6 pb-6 pt-5 text-base font-medium leading-relaxed text-slate-600 sm:px-8 dark:border-slate-800/80 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-900/30">
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
