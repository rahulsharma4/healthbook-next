import Image from "next/image";
import Link from "next/link";
import {
  AlarmClock,
  Bell,
  CalendarHeart,
  CreditCard,
  FolderOpen,
  Heart,
  Lock,
  MessageSquare,
  Pill,
  ScrollText,
  Share2,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { MarketingPageHeader } from "@/components/marketing/MarketingPageHeader";
import { MARKETING_PHOTOS } from "@/lib/marketingPhotos";
import { btnGhost, btnGradient, cardInteractive, eyebrow, glassPanel, transitionBase } from "@/lib/ui";

const benefits = [
  {
    title: "Track records",
    description:
      "Visits, labs, imaging, and documents land on one gentle timeline—so you always know what happened, and when.",
    Icon: FolderOpen,
  },
  {
    title: "Book appointments",
    description:
      "Pick a time that fits your life, get clear confirmations, and reschedule without playing phone tag with the front desk.",
    Icon: CalendarHeart,
  },
  {
    title: "Share with doctors",
    description:
      "Grant access when you need care, set boundaries for what is visible, and revoke when visits wrap—your data, your choice.",
    Icon: Share2,
  },
];

const productFeatures = [
  {
    title: "Notifications & push",
    description:
      "In-app alerts plus optional browser push when you enable it—visits, labs, and threads surface without drowning you in noise.",
    Icon: Bell,
  },
  {
    title: "Payments & cancellations",
    description:
      "Transparent checkout with fee breakup and clear cancellation windows. In-person visits can collect only the platform fee online while doctor fees are paid at the clinic.",
    Icon: CreditCard,
  },
  {
    title: "Secure messaging",
    description:
      "Realtime conversations with authorized clinicians inside HealthBook—attachments respect retention rules and personal numbers stay private.",
    Icon: MessageSquare,
  },
  {
    title: "Granular access control",
    description:
      "Approve doctors explicitly, scope what they can open, and revoke access when an episode of care ends.",
    Icon: Lock,
  },
  {
    title: "Care plans & vitals",
    description:
      "Log BP, sugar, and weight, set goals, and see trend charts so chronic care stays visible between appointments.",
    Icon: Pill,
  },
  {
    title: "Family profiles",
    description:
      "Manage dependents under one account for child and caregiver flows—book visits for the right person with clean record separation.",
    Icon: AlarmClock,
  },
  {
    title: "Activity log & share packs",
    description:
      "Review who touched your chart for accountability—and bundle uploads into revocable links when referrals need fast collaboration.",
    Icon: ScrollText,
  },
];

const securityPoints = [
  "Modern TLS for browser sessions plus hardened cookie flows designed for clinical workloads.",
  "Granular sharing—you approve doctor access instead of default-open portals.",
  "Transparent activity logs plus MFA-ready authentication paths when policy demands stronger assurance.",
];

export function ForPatientsPageContent() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(ellipse_100%_70%_at_50%_-25%,rgba(251,207,232,0.35),transparent_55%)] dark:bg-[radial-gradient(ellipse_100%_70%_at_50%_-25%,rgba(244,114,182,0.12),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(ellipse_55%_45%_at_0%_50%,rgba(204,251,241,0.45),transparent_50%)] dark:bg-[radial-gradient(ellipse_55%_45%_at_0%_50%,rgba(45,212,191,0.08),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(ellipse_50%_40%_at_100%_80%,rgba(224,242,254,0.55),transparent_45%)] dark:bg-[radial-gradient(ellipse_50%_40%_at_100%_80%,rgba(56,189,248,0.06),transparent_45%)]"
      />

      <MarketingPageHeader
        kicker="For patients"
        title="Your complete health history in one place"
        description="Book visits, read your longitudinal record, grant consent-aware access to doctors, message in realtime, opt into browser alerts, manage medicine reminders, inspect access logs, and share curated report packs—all from one responsive patient portal."
        className="pb-10 sm:pb-14"
      />

      <section className="relative pb-20 sm:pb-24" aria-labelledby="patient-benefits-heading">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className={eyebrow + " text-teal-700 dark:text-teal-300"}>Everyday benefits</p>
              <h2 id="patient-benefits-heading" className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                Less chasing paperwork, more clarity for you and your family
              </h2>
            </div>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3 sm:gap-8">
            {benefits.map(({ title, description, Icon }, i) => (
              <Reveal key={title} delay={0.05 * i}>
                <article
                  className={
                    "flex h-full flex-col rounded-[1.5rem] border border-rose-100/90 bg-white/90 p-7 shadow-sm backdrop-blur-md dark:border-rose-500/15 dark:bg-slate-950/55 sm:p-8 " +
                    transitionBase +
                    " hover:-translate-y-0.5 hover:border-teal-200/80 hover:shadow-md dark:hover:border-teal-500/25"
                  }
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-teal-500 text-white shadow-md shadow-rose-400/25">
                    <Icon className="h-5 w-5" strokeWidth={1.65} aria-hidden />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative pb-20 sm:pb-28" aria-labelledby="timeline-preview-heading">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className={eyebrow + " text-teal-700 dark:text-teal-300"}>Timeline</p>
              <h2 id="timeline-preview-heading" className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                Your medical history preview
              </h2>
              <p className="mt-4 text-pretty text-lg text-slate-600 dark:text-slate-400">
                A single scrollable story: visits, labs, and prescriptions grouped so the past makes sense—not buried in PDFs.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mx-auto mt-12 max-w-5xl">
              <div
                className={
                  "overflow-hidden rounded-[1.5rem] border border-teal-100/90 bg-gradient-to-b from-white via-rose-50/30 to-teal-50/40 p-2 shadow-sm dark:border-teal-900/30 dark:from-slate-950 dark:via-slate-900/80 dark:to-teal-950/20 sm:p-3 " +
                  transitionBase +
                  " hover:shadow-md"
                }
              >
                <div className="relative aspect-16/10 w-full min-h-0 overflow-hidden rounded-[1.2rem] bg-slate-100 ring-1 ring-rose-100/60 dark:bg-slate-900 dark:ring-rose-500/15">
                  <Image
                    src={MARKETING_PHOTOS.patientTimeline}
                    alt="Warm clinical moment focused on the patient experience and continuity of care"
                    fill
                    priority
                    placeholder="empty"
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) min(80rem, 92vw), 100vw"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative pb-20 sm:pb-24" aria-labelledby="patient-features-heading">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className={eyebrow + " text-teal-700 dark:text-teal-300"}>Inside the portal</p>
              <h2 id="patient-features-heading" className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                Thoughtful tools for busy lives
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-pretty text-lg text-slate-600 dark:text-slate-400">
                Every module below maps to live APIs—nothing here is vaporware. Browse doctors, leave structured reviews after visits, and keep caregivers in the loop without surrendering your privacy.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {productFeatures.map(({ title, description, Icon }, i) => (
              <Reveal key={title} delay={0.05 * i}>
                <article className={cardInteractive + " flex h-full flex-col rounded-[1.4rem] border-rose-100/50 p-8 dark:border-rose-500/10"}>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/15 text-teal-800 dark:bg-teal-400/15 dark:text-teal-200">
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

      <section className="relative pb-20 sm:pb-24" aria-labelledby="patient-security-heading">
        <Container>
          <Reveal>
            <div
              className={
                glassPanel +
                " mx-auto max-w-3xl rounded-[1.5rem] border-teal-100/80 bg-gradient-to-br from-white/95 via-teal-50/40 to-rose-50/35 px-8 py-10 text-center dark:border-teal-900/25 dark:from-slate-950/90 dark:via-teal-950/20 dark:to-rose-950/15 sm:px-12 sm:py-12"
              }
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-700 dark:text-teal-200">
                <ShieldCheck className="h-6 w-6" strokeWidth={1.65} aria-hidden />
              </div>
              <h2 id="patient-security-heading" className="mt-5 font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                Security you can feel good about
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-pretty text-slate-600 dark:text-slate-400">
                HealthBook treats your information with the same seriousness you do—without turning the experience into a maze of legal jargon.
              </p>
              <ul className="mx-auto mt-8 max-w-lg space-y-3 text-left text-sm text-slate-700 dark:text-slate-300 sm:text-base">
                {securityPoints.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-rose-400 to-teal-500" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative pb-24 sm:pb-32" aria-labelledby="patients-cta-heading">
        <Container>
          <Reveal>
            <div className={glassPanel + " relative mx-auto max-w-4xl overflow-hidden rounded-[1.5rem] px-8 py-12 text-center sm:px-12 sm:py-14"}>
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-500/10"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-teal-200/50 blur-3xl dark:bg-teal-500/10"
              />
              <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-teal-500 text-white shadow-lg shadow-rose-400/25">
                <Heart className="h-7 w-7" aria-hidden />
              </span>
              <h2 id="patients-cta-heading" className="relative mt-6 font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                Start your calmer health story today
              </h2>
              <p className="relative mx-auto mt-4 max-w-2xl text-pretty text-slate-600 dark:text-slate-400">
                Create a free account, connect your care team when you are ready, and keep your health records app and patient portal in one friendly place.
              </p>
              <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Link href="/register" className={btnGradient + " min-w-[11rem] justify-center gap-2"}>
                  Create your account
                </Link>
                <Link href="/features" className={btnGhost + " min-w-[10rem] justify-center"}>
                  Browse features
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
