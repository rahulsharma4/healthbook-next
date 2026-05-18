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
} from "lucide-react";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { MarketingPageHeader } from "@/components/marketing/MarketingPageHeader";
import { MARKETING_PHOTOS } from "@/lib/marketingPhotos";
import { btnGhost, btnGradient, cardInteractive, eyebrow, glassPanel, transitionBase } from "@/lib/ui";

const benefits = [
  {
    title: "Manage patients",
    description:
      "See who is due for follow-up, which charts need review, and today’s schedule in one calm surface—without tab sprawl.",
    Icon: UsersRound,
  },
  {
    title: "Create digital prescriptions",
    description:
      "Author structured prescriptions with guardrails and clear audit context, so pharmacy handoff stays traceable and legible.",
    Icon: FileSignature,
  },
  {
    title: "Access history",
    description:
      "Granted timelines, prior visits, and attachments load in context so you prepare faster and document with fewer lookups.",
    Icon: History,
  },
  {
    title: "Analytics",
    description:
      "Clinic-level signals on utilization, completion rates, and engagement help you run the practice—not just the schedule.",
    Icon: BarChart3,
  },
];

const workflowSteps = [
  { label: "Patient", detail: "Intake & identity" },
  { label: "Record", detail: "Structured charting" },
  { label: "Prescription", detail: "Signed & tracked" },
];

const productFeatures = [
  {
    title: "Availability management",
    description:
      "Publish slots, buffers, and blackout windows so booking engines respect how you actually practice—not generic grids.",
    Icon: CalendarRange,
  },
  {
    title: "Clinic queue board",
    description:
      "Run in-person flow with live tokens: mark arrived, call next, and keep the waiting room informed with practical ETAs.",
    Icon: Stethoscope,
  },
  {
    title: "Patient search",
    description:
      "Fast, permission-aware lookup across demographics and identifiers with clear visibility into who accessed what.",
    Icon: Search,
  },
  {
    title: "Record versioning",
    description:
      "Every meaningful edit leaves a trail: compare versions, restore clarity after collaborative updates, and reduce disputes.",
    Icon: GitBranch,
  },
  {
    title: "Realtime patient messaging",
    description:
      "Keep asynchronous care inside HealthBook—threads stay beside the chart with realtime delivery for urgent clarifications.",
    Icon: MessageSquare,
  },
  {
    title: "Payments-ready appointments",
    description:
      "See payment status alongside bookings. In-person visits can collect only platform fees online while clinic consultation fees are paid directly at the clinic.",
    Icon: CreditCard,
  },
  {
    title: "Medication adherence context",
    description:
      "When patients enable reminders, adherence signals surface alongside encounters so follow-ups reflect real-world behavior.",
    Icon: Pill,
  },
  {
    title: "Governed onboarding",
    description:
      "New clinician accounts route through administrative approvals; privileged actions remain audit-log friendly by design.",
    Icon: UserCheck,
  },
];

export function ForDoctorsPageContent() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(99,102,241,0.18),transparent_55%)] dark:bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(129,140,248,0.12),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(ellipse_60%_50%_at_100%_40%,rgba(168,85,247,0.12),transparent_50%)] dark:bg-[radial-gradient(ellipse_60%_50%_at_100%_40%,rgba(192,132,252,0.08),transparent_50%)]"
      />

      <MarketingPageHeader
        kicker="For doctors"
        title="Built for modern doctors"
        description="Operate from an approved clinician workspace: availability-aware scheduling, searchable patient panels, structured charting with uploads, digital prescriptions, realtime messaging, utilization analytics, medicine-reminder insights, profile signatures/stamps, and patient reviews—all coordinated through HealthBook’s unified API."
        className="pb-10 sm:pb-14"
      />

      <section className="relative pb-20 sm:pb-24" aria-labelledby="doctor-benefits-heading">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className={eyebrow}>Why clinicians switch</p>
              <h2 id="doctor-benefits-heading" className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                Benefits that respect your license—and your time
              </h2>
              <p className="mt-4 text-pretty text-lg text-slate-600 dark:text-slate-400">
                HealthBook is doctor software designed around real clinic cadence: fewer clicks between decision and documentation.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:gap-8">
            {benefits.map(({ title, description, Icon }, i) => (
              <Reveal key={title} delay={0.04 * (i % 2)}>
                <article
                  className={
                    "group flex h-full flex-col rounded-[1.35rem] border border-indigo-200/50 bg-gradient-to-br from-white/95 via-indigo-50/40 to-violet-50/50 p-8 shadow-[var(--hb-shadow-card)] backdrop-blur-xl dark:border-indigo-500/20 dark:from-slate-950/90 dark:via-indigo-950/30 dark:to-violet-950/25 sm:p-9 " +
                    transitionBase +
                    " hover:-translate-y-0.5 hover:border-indigo-300/70 hover:shadow-[var(--hb-shadow-hover)]"
                  }
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30">
                    <Icon className="h-6 w-6" strokeWidth={1.65} aria-hidden />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative pb-20 sm:pb-24" aria-labelledby="workflow-heading">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className={eyebrow}>Clinical workflow</p>
              <h2 id="workflow-heading" className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                Patient → record → prescription
              </h2>
              <p className="mt-4 text-pretty text-lg text-slate-600 dark:text-slate-400">
                One intentional path through the chart: align intake, documentation, and orders so nothing falls between systems.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div
              className="mx-auto mt-12 flex max-w-4xl flex-col items-center gap-4 sm:flex-row sm:items-stretch sm:justify-center sm:gap-2"
              role="list"
              aria-label="Clinical workflow: patient, then record, then prescription"
            >
              {workflowSteps.map((step, index) => (
                <Fragment key={step.label}>
                  <div
                    role="listitem"
                    className={
                      "flex w-full flex-1 flex-col items-center rounded-2xl border border-indigo-200/60 bg-white/90 px-6 py-6 text-center shadow-sm dark:border-indigo-500/25 dark:bg-slate-900/70 " +
                      transitionBase +
                      " hover:border-violet-300/80 hover:shadow-md dark:hover:border-violet-500/30"
                    }
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
                      Step {index + 1}
                    </span>
                    <span className="mt-2 font-heading text-lg font-bold text-slate-900 dark:text-white">{step.label}</span>
                    <span className="mt-1 text-sm text-slate-600 dark:text-slate-400">{step.detail}</span>
                  </div>
                  {index < workflowSteps.length - 1 ? (
                    <span className="flex h-10 shrink-0 items-center justify-center sm:h-auto sm:w-10" aria-hidden>
                      <ArrowRight className="h-6 w-6 rotate-90 text-violet-400 sm:rotate-0 dark:text-violet-300/80" />
                    </span>
                  ) : null}
                </Fragment>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative pb-20 sm:pb-28" aria-labelledby="dashboard-preview-heading">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className={eyebrow}>Dashboard preview</p>
              <h2 id="dashboard-preview-heading" className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                Your clinic command center
              </h2>
              <p className="mt-4 text-pretty text-lg text-slate-600 dark:text-slate-400">
                A doctor dashboard UI mock showing how schedules, patient queues, and quick actions stay visible at a glance.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mx-auto mt-12 max-w-6xl">
              <div
                className={
                  "relative overflow-hidden rounded-[1.35rem] border border-indigo-200/60 bg-gradient-to-b from-slate-50 to-indigo-50/80 p-2 shadow-[var(--hb-shadow-card)] dark:border-indigo-500/25 dark:from-slate-950 dark:to-indigo-950/40 sm:p-3 " +
                  transitionBase +
                  " hover:shadow-[var(--hb-shadow-hover)]"
                }
              >
                <div className="relative aspect-16/10 w-full min-h-0 overflow-hidden rounded-[1.05rem] bg-slate-100 ring-1 ring-indigo-200/40 dark:bg-slate-900 dark:ring-indigo-500/20">
                  <Image
                    src={MARKETING_PHOTOS.doctorDashboard}
                    alt="Physician in clinical workspace focused on rounds and patient coordination"
                    fill
                    priority
                    placeholder="empty"
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) min(90rem, 92vw), 100vw"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative pb-20 sm:pb-24" aria-labelledby="doctor-features-heading">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className={eyebrow}>Clinic management</p>
              <h2 id="doctor-features-heading" className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                Features that keep the front desk and exam room aligned
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-pretty text-lg text-slate-600 dark:text-slate-400">
                Six highlights mirror modules running in the doctor-facing app today—from operational dashboards to asynchronous messaging and adherence-aware follow-ups.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {productFeatures.map(({ title, description, Icon }, i) => (
              <Reveal key={title} delay={0.05 * i}>
                <article className={cardInteractive + " flex h-full flex-col p-8"}>
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/25">
                    <Icon className="h-5 w-5" strokeWidth={1.65} aria-hidden />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative pb-24 sm:pb-32" aria-labelledby="doctors-cta-heading">
        <Container>
          <Reveal>
            <div
              className={
                glassPanel +
                " relative mx-auto max-w-4xl overflow-hidden px-8 py-12 text-center sm:px-12 sm:py-14 " +
                transitionBase
              }
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br from-indigo-500/25 to-violet-500/20 blur-3xl dark:from-indigo-500/15"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-gradient-to-tr from-violet-500/20 to-cyan-500/15 blur-3xl dark:to-cyan-500/10"
              />
              <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30">
                <Stethoscope className="h-7 w-7" aria-hidden />
              </span>
              <h2 id="doctors-cta-heading" className="relative mt-6 font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                Ready for calmer clinic management?
              </h2>
              <p className="relative mx-auto mt-4 max-w-2xl text-pretty text-slate-600 dark:text-slate-400">
                Join doctors who want modern doctor software with a trust-first posture—encryption, access control, and audit-friendly
                workflows built in.
              </p>
              <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Link href="/register" className={btnGradient + " min-w-[11rem] justify-center gap-2"}>
                  Join as a doctor
                </Link>
                <Link href="/contact" className={btnGhost + " min-w-[10rem] justify-center"}>
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
