import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import {
  ArrowRight,
  BarChart3,
  CalendarRange,
  CreditCard,
  FileSignature,
  GitBranch,
  History,
  MessageSquare,
  Pill,
  Search,
  Stethoscope,
  UserCheck,
  UsersRound,
  Sparkles,
  Zap,
} from "lucide-react";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { MarketingPageHeader } from "@/components/marketing/MarketingPageHeader";
import { MARKETING_PHOTOS } from "@/lib/marketingPhotos";
import { btnGhost, btnGradient, transitionBase } from "@/lib/ui";

const benefits = [
  {
    title: "Unified Patient Panels",
    description:
      "See who is due for follow-up, which clinical charts need review, and today’s availability-backed schedule in one calm surface—without tab sprawl.",
    Icon: UsersRound,
    shadow: "shadow-indigo-500/25",
  },
  {
    title: "Verifiable Digital Prescriptions",
    description:
      "Author structured prescriptions with intelligent guardrails and clear audit context, so pharmacy handoff stays traceable and flawless.",
    Icon: FileSignature,
    shadow: "shadow-purple-500/25",
  },
  {
    title: "Instant Longitudinal History",
    description:
      "Granted timelines, prior visits, lab reports, and DICOM/PDF attachments load in context so you prepare 5x faster and document with fewer lookups.",
    Icon: History,
    shadow: "shadow-cyan-500/25",
  },
  {
    title: "Practice Utilization Analytics",
    description:
      "Clinic-level signals on utilization, completion rates, and messaging engagement help you run the entire clinical operations—not just the calendar.",
    Icon: BarChart3,
    shadow: "shadow-emerald-500/25",
  },
];

const workflowSteps = [
  { label: "Patient Intake", detail: "Identity verification & biometric sync" },
  { label: "Structured Encounter", detail: "Clinical charting & lab review" },
  { label: "Verifiable Orders", detail: "Signed prescriptions & follow-up lock" },
];

const productFeatures = [
  {
    title: "Smart Availability Engine",
    description:
      "Publish slots, dynamic buffers, and blackout windows so automated booking engines respect how you actually practice—not generic grids.",
    Icon: CalendarRange,
    color: "from-indigo-600 to-violet-600",
  },
  {
    title: "Clinic Queue Commander",
    description:
      "Run in-person patient flow with live tokens: mark arrived, call next, and keep the physical waiting room informed with real-time ETAs.",
    Icon: Stethoscope,
    color: "from-violet-600 to-purple-600",
  },
  {
    title: "Permission-Aware Search",
    description:
      "Lightning-fast lookup across patient demographics and clinical identifiers with crystal-clear audit trails showing who accessed what.",
    Icon: Search,
    color: "from-blue-600 to-indigo-600",
  },
  {
    title: "Immutable Record Versioning",
    description:
      "Every meaningful clinical edit leaves an immutable trail: compare versions, restore clarity after collaborative updates, and eliminate disputes.",
    Icon: GitBranch,
    color: "from-purple-600 to-pink-600",
  },
  {
    title: "Realtime In-App Chat",
    description:
      "Keep asynchronous care securely inside HealthBook—threads stay attached beside the patient chart with instant delivery for urgent clarifications.",
    Icon: MessageSquare,
    color: "from-emerald-600 to-teal-600",
  },
  {
    title: "Split Fee & Payment Routing",
    description:
      "See payment status instantly. In-person visits collect only platform fees online while full doctor consultation fees are collected securely at the clinic.",
    Icon: CreditCard,
    color: "from-teal-600 to-cyan-600",
  },
  {
    title: "Adherence Telemetry",
    description:
      "When patients enable adherence reminders, medication compliance telemetry surfaces alongside active encounters for data-driven titration.",
    Icon: Pill,
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "Governed Credentialing",
    description:
      "New clinician accounts route through rigorous administrative verification; privileged actions remain audit-log friendly by design.",
    Icon: UserCheck,
    color: "from-amber-500 to-orange-600",
  },
];

export function ForDoctorsPageContent() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(99,102,241,0.22),transparent_65%)] dark:bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(129,140,248,0.18),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-10 top-1/3 -z-20 h-96 w-96 rounded-full bg-gradient-to-tr from-violet-600/20 via-fuchsia-600/15 to-transparent blur-[120px]"
      />

      <MarketingPageHeader
        kicker="For Doctors & Practice Leads"
        title="Command Your Practice With Calm Precision."
        description="Operate from a verified clinical workspace: availability-aware scheduling, searchable patient panels, structured charting with multi-format uploads, digital prescriptions, realtime messaging, utilization analytics, and adherence telemetry—all coordinated through HealthBook’s unified API."
        className="pb-12 sm:pb-16"
      />

      <section className="relative pb-24 sm:pb-32" aria-labelledby="doctor-benefits-heading">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-200/80 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800 mb-4 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-indigo-600 animate-spin" style={{ animationDuration: "6s" }} />
                <span>Why Clinicians Switch</span>
              </div>
              <h2 id="doctor-benefits-heading" className="font-heading text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                Benefits That Respect Your License & Time
              </h2>
              <p className="mt-4 text-pretty text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
                HealthBook is professional medical software designed around real clinical cadence: eliminating tab sprawl and reducing clicks between diagnostic decision and documentation.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-6xl gap-8 sm:grid-cols-2 lg:gap-8">
            {benefits.map(({ title, description, Icon, shadow }, i) => (
              <Reveal key={title} delay={0.04 * (i % 2)}>
                <article
                  className={
                    "group flex h-full flex-col rounded-[2rem] border border-indigo-200/80 bg-gradient-to-br from-white/95 via-indigo-50/50 to-violet-50/70 p-8 sm:p-10 shadow-2xl shadow-indigo-500/10 backdrop-blur-2xl dark:border-indigo-500/30 dark:from-slate-900/95 dark:via-indigo-950/40 dark:to-violet-950/30 dark:shadow-black/50 " +
                    transitionBase +
                    " hover:-translate-y-2 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/25 dark:hover:border-indigo-500/50"
                  }
                >
                  <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-xl ${shadow} transform group-hover:scale-110 group-hover:rotate-6 transition duration-300`}>
                    <Icon className="h-8 w-8" strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className="font-heading text-2xl font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">{title}</h3>
                  <p className="mt-3 text-base font-medium leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-indigo-50/40 via-white to-white dark:from-indigo-950/20 dark:via-slate-950 dark:to-slate-950 border-y border-indigo-100 dark:border-slate-800" aria-labelledby="workflow-heading">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-200/80 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800 mb-4 shadow-sm">
                <Stethoscope className="h-3.5 w-3.5 text-indigo-600" />
                <span>Streamlined Clinical Pipeline</span>
              </div>
              <h2 id="workflow-heading" className="font-heading text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                Patient Intake → Structured Record → Orders
              </h2>
              <p className="mt-4 text-pretty text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
                One intentional path through the patient encounter: align intake, physical documentation, and verifiable orders so nothing falls between systems.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div
              className="mx-auto mt-14 flex max-w-5xl flex-col items-center gap-6 sm:flex-row sm:items-stretch sm:justify-center sm:gap-4"
              role="list"
              aria-label="Clinical workflow: patient, then record, then prescription"
            >
              {workflowSteps.map((step, index) => (
                <Fragment key={step.label}>
                  <div
                    role="listitem"
                    className={
                      "flex w-full flex-1 flex-col items-center justify-center rounded-[2rem] border border-indigo-200/80 bg-white/95 px-8 py-10 text-center shadow-xl shadow-slate-200/50 backdrop-blur-xl dark:border-indigo-500/30 dark:bg-slate-900/90 dark:shadow-black/50 " +
                      transitionBase +
                      " hover:-translate-y-2 hover:border-violet-400 hover:shadow-2xl hover:shadow-indigo-500/20 dark:hover:border-violet-500/50"
                    }
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-black text-sm mb-4 shadow-md shadow-indigo-500/25">
                      0{index + 1}
                    </div>
                    <span className="font-heading text-2xl font-black text-slate-900 dark:text-white">{step.label}</span>
                    <span className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">{step.detail}</span>
                  </div>
                  {index < workflowSteps.length - 1 ? (
                    <span className="flex h-12 shrink-0 items-center justify-center sm:h-auto sm:w-12 animate-pulse" aria-hidden>
                      <ArrowRight className="h-8 w-8 rotate-90 text-indigo-600 sm:rotate-0 dark:text-indigo-400 font-extrabold" />
                    </span>
                  ) : null}
                </Fragment>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative py-24 sm:py-32" aria-labelledby="dashboard-preview-heading">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-200/80 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800 mb-4 shadow-sm">
                <Zap className="h-3.5 w-3.5 text-indigo-600" />
                <span>High-Fidelity Interface Mock</span>
              </div>
              <h2 id="dashboard-preview-heading" className="font-heading text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                Your Clinical Command Center
              </h2>
              <p className="mt-4 text-pretty text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
                A high-fidelity doctor dashboard UI mockup showing how schedules, patient queues, and rapid medical actions stay visible at a glance.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mx-auto mt-14 max-w-6xl">
              <div
                className={
                  "relative overflow-hidden rounded-[2.5rem] border border-indigo-200/90 bg-gradient-to-b from-white via-indigo-50/50 to-indigo-100/40 p-3 sm:p-4 shadow-2xl shadow-indigo-500/20 dark:border-indigo-500/40 dark:from-slate-900 dark:via-indigo-950/40 dark:to-slate-900 dark:shadow-black/80 " +
                  transitionBase +
                  " hover:shadow-[0_45px_100px_-15px_rgba(99,102,241,0.35)] hover:-translate-y-1"
                }
              >
                <div className="relative aspect-[16/10] w-full min-h-0 overflow-hidden rounded-[2rem] bg-slate-100 ring-2 ring-indigo-200/80 dark:bg-slate-900 dark:ring-indigo-500/40">
                  <Image
                    src={MARKETING_PHOTOS.doctorDashboard}
                    alt="Physician in clinical workspace focused on rounds and patient coordination"
                    fill
                    priority
                    placeholder="empty"
                    className="object-cover object-center transform transition-transform duration-700 hover:scale-105"
                    sizes="(min-width: 1024px) min(90rem, 92vw), 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative py-24 sm:py-32 bg-slate-50/50 dark:bg-slate-900/30 border-t border-indigo-100 dark:border-slate-800" aria-labelledby="doctor-features-heading">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-200/80 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800 mb-4 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-indigo-600 animate-spin" style={{ animationDuration: "6s" }} />
                <span>Operational Excellence</span>
              </div>
              <h2 id="doctor-features-heading" className="font-heading text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                Features That Align Front Desk & Exam Room
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-pretty text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
                8 highlights mirror modules running in the doctor-facing portal today—from operational dashboards to asynchronous secure chat and adherence-aware follow-ups.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {productFeatures.map(({ title, description, Icon, color }, i) => (
              <Reveal key={title} delay={0.05 * i}>
                <article className={"group flex h-full flex-col rounded-[2rem] border border-slate-200/90 bg-white/95 p-8 shadow-xl shadow-slate-200/50 backdrop-blur-2xl dark:border-slate-800/90 dark:bg-slate-900/90 dark:shadow-black/50 " + transitionBase + " hover:-translate-y-2 hover:border-indigo-300 hover:shadow-2xl"}>
                  <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-xl shadow-indigo-500/20 transform group-hover:scale-110 group-hover:rotate-6 transition`}>
                    <Icon className="h-7 w-7" strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className="font-heading text-xl font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">{title}</h3>
                  <p className="mt-3 flex-1 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-24 sm:py-36 bg-white dark:bg-slate-950 border-t border-indigo-100 dark:border-slate-800" aria-labelledby="doctors-cta-heading">
        <Container>
          <Reveal>
            <div
              className={
                "relative mx-auto max-w-5xl overflow-hidden rounded-[3rem] border border-indigo-200/80 bg-gradient-to-br from-indigo-900 via-indigo-950 to-purple-950 p-12 sm:p-20 text-center text-white shadow-2xl shadow-indigo-950/50 " +
                transitionBase
              }
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/25 blur-3xl"
              />
              <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-xl shadow-indigo-500/40 mb-6">
                <Stethoscope className="h-8 w-8 animate-pulse" aria-hidden />
              </span>
              <h2 id="doctors-cta-heading" className="relative font-heading text-3xl font-black tracking-tight sm:text-5xl drop-shadow-sm">
                Ready For Calmer Clinic Operations?
              </h2>
              <p className="relative mx-auto mt-6 max-w-3xl text-lg font-medium leading-relaxed text-indigo-200 sm:text-xl">
                Join thousands of verified doctors who want modern clinical software with a zero-trust security posture—encryption, strict access control, and audit-friendly workflows built in.
              </p>
              <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <Link href="/register" className={btnGradient + " min-h-[3.75rem] min-w-[220px] justify-center gap-3 shadow-2xl shadow-indigo-500/40 font-extrabold transform hover:scale-105"}>
                  <Zap className="h-5 w-5 animate-bounce" style={{ animationDuration: "2s" }} />
                  <span>Join As A Doctor</span>
                </Link>
                <Link href="/contact" className={btnGhost + " min-h-[3.75rem] min-w-[180px] justify-center font-extrabold border border-white/30 hover:bg-white/10"}>
                  Talk to our team
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
