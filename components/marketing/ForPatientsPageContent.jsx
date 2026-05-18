import Image from "next/image";
import Link from "next/link";
import {
  AlarmClock,
  Bell,
  CalendarHeart,
  CheckCircle2,
  CreditCard,
  FolderOpen,
  Heart,
  Lock,
  MessageSquare,
  Pill,
  ScrollText,
  Share2,
  ShieldCheck,
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
    title: "Longitudinal Record Timeline",
    description:
      "Visits, lab diagnostics, DICOM imaging, and clinical prescriptions land on one gentle, chronological timeline—so you always know what happened and when.",
    Icon: FolderOpen,
    shadow: "shadow-rose-500/25",
  },
  {
    title: "Instant Smart Scheduling",
    description:
      "Pick a verified appointment slot that fits your schedule, receive instant automated confirmations, and reschedule without playing phone tag with front desks.",
    Icon: CalendarHeart,
    shadow: "shadow-teal-500/25",
  },
  {
    title: "Scoped Clinical Sharing",
    description:
      "Grant scoped chart access when you need care, set strict boundaries for what is visible, and instantly revoke when visits wrap—your data, your absolute choice.",
    Icon: Share2,
    shadow: "shadow-purple-500/25",
  },
];

const productFeatures = [
  {
    title: "Notifications & Browser Push",
    description:
      "In-app alerts plus optional browser push when enabled—upcoming visits, lab results, and chat threads surface securely without drowning you in notification noise.",
    Icon: Bell,
    color: "from-rose-500 to-teal-500",
  },
  {
    title: "Transparent Split Payments",
    description:
      "Transparent checkout with fee breakup. In-person visits collect only nominal platform fees online while full doctor consultation fees are paid directly at the clinic.",
    Icon: CreditCard,
    color: "from-teal-500 to-cyan-600",
  },
  {
    title: "Secure In-App Chat",
    description:
      "Realtime encrypted conversations with authorized doctors inside HealthBook—attachments respect retention rules and personal phone numbers stay 100% private.",
    Icon: MessageSquare,
    color: "from-purple-600 to-indigo-600",
  },
  {
    title: "Granular Access Control",
    description:
      "Approve clinicians explicitly, scope precisely what records they can open, and automatically revoke access when an episode of care successfully wraps.",
    Icon: Lock,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Care Plans & Biometric Vitals",
    description:
      "Log blood pressure, blood sugar, and weight, set health goals, and see trend charts so chronic condition management stays visible between physical appointments.",
    Icon: Pill,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Unified Family Profiles",
    description:
      "Manage dependents under one secure account for child and elderly caregiver workflows—book visits for the right family member with flawless record separation.",
    Icon: AlarmClock,
    color: "from-blue-600 to-indigo-600",
  },
  {
    title: "Access Logs & Share Packs",
    description:
      "Review exactly who viewed your chart for complete accountability—and bundle lab reports into time-limited, password-protected links for second opinions.",
    Icon: ScrollText,
    color: "from-rose-500 to-pink-600",
  },
];

const securityPoints = [
  "Modern TLS 1.3 encryption for browser sessions plus hardened cookie flows designed for clinical workloads.",
  "Zero-default sharing—you explicitly approve doctor access instead of default-open legacy portals.",
  "Transparent tamper-evident activity logs plus MFA-ready authentication paths when policy demands stronger assurance.",
];

export function ForPatientsPageContent() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_100%_80%_at_50%_-25%,rgba(251,207,232,0.35),transparent_65%)] dark:bg-[radial-gradient(ellipse_100%_80%_at_50%_-25%,rgba(244,114,182,0.15),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-10 top-1/3 -z-20 h-96 w-96 rounded-full bg-gradient-to-br from-teal-500/20 via-cyan-500/15 to-transparent blur-[120px]"
      />

      <MarketingPageHeader
        kicker="For Patients & Families"
        title="Your Entire Medical Life In One Friendly App."
        description="Book verified appointments, read your longitudinal medical records, grant consent-aware access to doctors, message in realtime, opt into browser alerts, manage medicine reminders, inspect access logs, and share curated report packs—all from one responsive patient portal."
        className="pb-12 sm:pb-16"
      />

      <section className="relative pb-24 sm:pb-32" aria-labelledby="patient-benefits-heading">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest text-teal-700 bg-teal-50 border border-teal-200/80 dark:bg-teal-950/80 dark:text-teal-300 dark:border-teal-800 mb-4 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-teal-600 animate-spin" style={{ animationDuration: "6s" }} />
                <span>Everyday Peace of Mind</span>
              </div>
              <h2 id="patient-benefits-heading" className="font-heading text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                Less Chasing Paperwork, More Health Clarity
              </h2>
              <p className="mt-4 text-pretty text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
                We unite fragmented medical histories, lab test PDFs, and clinical prescriptions into one beautiful, easy-to-read narrative for you and your family.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-6xl gap-8 sm:grid-cols-3 lg:gap-8">
            {benefits.map(({ title, description, Icon, shadow }, i) => (
              <Reveal key={title} delay={0.05 * i}>
                <article
                  className={
                    "group flex h-full flex-col rounded-[2rem] border border-rose-100/90 bg-gradient-to-br from-white/95 via-rose-50/30 to-teal-50/40 p-8 sm:p-10 shadow-2xl shadow-rose-500/10 backdrop-blur-2xl dark:border-rose-500/25 dark:from-slate-900/95 dark:via-rose-950/20 dark:to-teal-950/20 dark:shadow-black/50 " +
                    transitionBase +
                    " hover:-translate-y-2 hover:border-rose-300 hover:shadow-2xl hover:shadow-rose-500/20 dark:hover:border-rose-500/50"
                  }
                >
                  <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-teal-500 text-white shadow-xl ${shadow} transform group-hover:scale-110 group-hover:rotate-6 transition duration-300`}>
                    <Icon className="h-8 w-8" strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className="font-heading text-2xl font-black text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition">{title}</h3>
                  <p className="mt-3 flex-1 text-base font-medium leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-rose-50/30 via-white to-white dark:from-rose-950/10 dark:via-slate-950 dark:to-slate-950 border-y border-rose-100 dark:border-slate-800" aria-labelledby="timeline-preview-heading">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest text-teal-700 bg-teal-50 border border-teal-200/80 dark:bg-teal-950/80 dark:text-teal-300 dark:border-teal-800 mb-4 shadow-sm">
                <Heart className="h-3.5 w-3.5 text-rose-500 animate-pulse" />
                <span>Your Longitudinal History</span>
              </div>
              <h2 id="timeline-preview-heading" className="font-heading text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                Your Medical Story At A Glance
              </h2>
              <p className="mt-4 text-pretty text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
                A single scrollable chronological story: doctor visits, lab reports, and medication schedules grouped so your health journey makes absolute sense—not buried in paper folders.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mx-auto mt-14 max-w-6xl">
              <div
                className={
                  "overflow-hidden rounded-[2.5rem] border border-teal-200/90 bg-gradient-to-b from-white via-rose-50/40 to-teal-50/50 p-3 sm:p-4 shadow-2xl shadow-teal-500/20 dark:border-teal-500/40 dark:from-slate-900 dark:via-rose-950/30 dark:to-teal-950/30 dark:shadow-black/80 " +
                  transitionBase +
                  " hover:shadow-[0_45px_100px_-15px_rgba(20,184,166,0.35)] hover:-translate-y-1"
                }
              >
                <div className="relative aspect-[16/10] w-full min-h-0 overflow-hidden rounded-[2rem] bg-slate-100 ring-2 ring-teal-200/80 dark:bg-slate-900 dark:ring-teal-500/40">
                  <Image
                    src={MARKETING_PHOTOS.patientTimeline}
                    alt="Warm clinical moment focused on the patient experience and continuity of care"
                    fill
                    priority
                    placeholder="empty"
                    className="object-cover object-center transform transition-transform duration-700 hover:scale-105"
                    sizes="(min-width: 1024px) min(80rem, 92vw), 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-50" />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative py-24 sm:py-32" aria-labelledby="patient-features-heading">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest text-teal-700 bg-teal-50 border border-teal-200/80 dark:bg-teal-950/80 dark:text-teal-300 dark:border-teal-800 mb-4 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-teal-600 animate-spin" style={{ animationDuration: "6s" }} />
                <span>Inside The Portal</span>
              </div>
              <h2 id="patient-features-heading" className="font-heading text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                Thoughtful Tooling For Busy Lives
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-pretty text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
                Every module below maps directly to active, secure APIs—nothing here is vaporware. Browse verified doctors, leave structured ratings, and keep caregivers in the loop with absolute privacy control.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {productFeatures.map(({ title, description, Icon, color }, i) => (
              <Reveal key={title} delay={0.05 * i}>
                <article className={"group flex h-full flex-col rounded-[2rem] border border-slate-200/90 bg-white/95 p-8 shadow-xl shadow-slate-200/50 backdrop-blur-2xl dark:border-slate-800/90 dark:bg-slate-900/90 dark:shadow-black/50 " + transitionBase + " hover:-translate-y-2 hover:border-teal-300 hover:shadow-2xl"}>
                  <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-xl shadow-teal-500/20 transform group-hover:scale-110 group-hover:rotate-6 transition`}>
                    <Icon className="h-7 w-7" strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className="font-heading text-xl font-black text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition">{title}</h3>
                  <p className="mt-3 flex-1 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-teal-50/30 to-rose-50/20 dark:from-slate-950 dark:via-teal-950/10 dark:to-slate-950 border-t border-teal-100 dark:border-slate-800" aria-labelledby="patient-security-heading">
        <Container>
          <Reveal>
            <div
              className={
                "mx-auto max-w-4xl rounded-[3rem] border border-teal-200/90 bg-gradient-to-br from-white/95 via-teal-50/50 to-rose-50/50 p-12 sm:p-16 shadow-2xl shadow-teal-500/15 backdrop-blur-3xl dark:border-teal-500/30 dark:from-slate-900/95 dark:via-teal-950/40 dark:to-rose-950/30 dark:shadow-black/60 relative overflow-hidden"
              }
            >
              <div className="absolute top-0 right-0 -mr-20 -mt-20 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
              
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-rose-500 text-white shadow-xl shadow-teal-500/30 mb-6">
                <ShieldCheck className="h-8 w-8" strokeWidth={2} aria-hidden />
              </div>
              <h2 id="patient-security-heading" className="font-heading text-3xl font-black tracking-tight text-slate-900 sm:text-4xl dark:text-white text-center">
                Security You Can Feel Good About
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300 text-center">
                HealthBook treats your personal health information with the absolute highest standards of HIPAA-ready compliance—without turning your portal into a maze of legal jargon.
              </p>
              <ul className="mx-auto mt-10 max-w-2xl space-y-4 text-left text-base font-semibold text-slate-700 dark:text-slate-300">
                {securityPoints.map((line) => (
                  <li key={line} className="flex items-center gap-3.5 bg-white/80 dark:bg-slate-800/80 p-4 rounded-2xl border border-teal-100 dark:border-slate-700 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative py-24 sm:py-36 bg-gradient-to-br from-teal-900 via-slate-900 to-rose-950 border-t border-teal-100 dark:border-slate-800 text-white overflow-hidden" aria-labelledby="patients-cta-heading">
        <Container>
          <Reveal>
            <div className="relative mx-auto max-w-4xl text-center">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rose-500/25 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-teal-500/25 blur-3xl"
              />
              <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-teal-500 text-white shadow-xl shadow-rose-500/40 mb-6">
                <Heart className="h-8 w-8 animate-pulse" aria-hidden />
              </span>
              <h2 id="patients-cta-heading" className="relative font-heading text-3xl font-black tracking-tight sm:text-5xl drop-shadow-sm">
                Start Your Calmer Health Story Today
              </h2>
              <p className="relative mx-auto mt-6 max-w-3xl text-lg font-medium leading-relaxed text-teal-100 sm:text-xl">
                Create a free account, connect your verified care team when you are ready, and keep your health records app and patient portal in one secure, friendly place.
              </p>
              <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <Link href="/register" className={btnGradient + " min-h-[3.75rem] min-w-[220px] justify-center gap-3 shadow-2xl shadow-rose-500/40 font-extrabold transform hover:scale-105"}>
                  <Zap className="h-5 w-5 animate-bounce" style={{ animationDuration: "2s" }} />
                  <span>Create Free Account</span>
                </Link>
                <Link href="/features" className={btnGhost + " min-h-[3.75rem] min-w-[180px] justify-center font-extrabold border border-white/30 hover:bg-white/10"}>
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
