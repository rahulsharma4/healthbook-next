import Image from "next/image";
import {
  Activity,
  BellRing,
  Building2,
  CalendarClock,
  FileStack,
  History,
  KeyRound,
  LayoutDashboard,
  Link2,
  MessagesSquare,
  Pill,
  ScrollText,
  ShieldCheck,
  Star,
  Stethoscope,
} from "lucide-react";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { MARKETING_PHOTOS } from "@/lib/marketingPhotos";
import { eyebrow, transitionBase } from "@/lib/ui";

/** Mirrors capabilities wired in Backend + User/Admin portals (high level, accurate). */
const TILES = [
  {
    title: "Appointments & availability",
    description:
      "Patients book and manage visits; doctors publish real slots, buffers, and blackout windows so scheduling reflects real clinic rhythm.",
    Icon: CalendarClock,
    accent: "from-violet-500 to-indigo-600",
    photo: MARKETING_PHOTOS.appointments,
    imageAlt: "Clinicians collaborating during a shift handoff",
  },
  {
    title: "Medical records & versions",
    description:
      "Structured timelines with uploads (labs, imaging, PDFs). Important edits can retain history so collaborative charting stays accountable.",
    Icon: FileStack,
    accent: "from-indigo-500 to-blue-600",
    photo: MARKETING_PHOTOS.medicalRecords,
    imageAlt: "Clinician reviewing a digital chart during a consultation",
  },
  {
    title: "Consent-based record sharing",
    description:
      "Patients grant doctors scoped access to their chart—explicit grants replace guesswork about who can see what.",
    Icon: KeyRound,
    accent: "from-emerald-500 to-teal-600",
    photo: MARKETING_PHOTOS.consentCollaboration,
    imageAlt: "Care team discussion at a conference table",
  },
  {
    title: "Access transparency",
    description:
      "Patients can review activity showing who accessed their health data—trust grows when visibility is the default.",
    Icon: ScrollText,
    accent: "from-sky-500 to-cyan-600",
    photo: MARKETING_PHOTOS.documentsAudit,
    imageAlt: "Documents and compliance paperwork organized on a desk",
  },
  {
    title: "Secure in-app messaging",
    description:
      "Threaded conversations between patients and care teams with realtime delivery—fewer lost SMS threads and clearer follow-ups.",
    Icon: MessagesSquare,
    accent: "from-fuchsia-500 to-rose-500",
    photo: MARKETING_PHOTOS.messaging,
    imageAlt: "Clinician using a laptop during a consultation",
  },
  {
    title: "Notifications & browser push",
    description:
      "In-product alerts plus optional web push (when enabled) for appointments, messages, and reminders—without burying people in noise.",
    Icon: BellRing,
    accent: "from-amber-500 to-orange-600",
    photo: MARKETING_PHOTOS.notifications,
    imageAlt: "Smartphone on a desk showing notifications",
  },
  {
    title: "Medicine reminders",
    description:
      "Patients set schedules for medications; dashboards can surface adherence-friendly views for authorized clinicians.",
    Icon: Pill,
    accent: "from-rose-400 to-pink-600",
    photo: MARKETING_PHOTOS.medication,
    imageAlt: "Medication blister packs and pharmacy supplies",
  },
  {
    title: "Shareable report links",
    description:
      "Patients bundle selected uploads into time-limited share links—useful for referrals or family coordination with guardrails.",
    Icon: Link2,
    accent: "from-cyan-500 to-indigo-600",
    photo: MARKETING_PHOTOS.technologyShare,
    imageAlt: "Diagnostic imaging displays suggesting shared radiology and reports",
  },
  {
    title: "MFA-ready sign-in",
    description:
      "Layered authentication flows support verification challenges where policy requires—sessions remain first-class for browser clients.",
    Icon: ShieldCheck,
    accent: "from-slate-700 to-indigo-700",
    photo: MARKETING_PHOTOS.mfaDevice,
    imageAlt: "Mobile phone used for secure verification",
  },
  {
    title: "Doctor workspace analytics",
    description:
      "Operational dashboards for clinicians—stats and utilization signals so practices tune capacity instead of flying blind.",
    Icon: LayoutDashboard,
    accent: "from-blue-600 to-violet-600",
    photo: MARKETING_PHOTOS.analytics,
    imageAlt: "Business analytics charts on a monitor",
  },
  {
    title: "Doctor reviews",
    description:
      "Patients who have been seen can leave structured feedback; listings surface trusted signals for others choosing care.",
    Icon: Star,
    accent: "from-yellow-500 to-amber-600",
    photo: MARKETING_PHOTOS.reviews,
    imageAlt: "Doctor speaking reassuringly with a patient",
  },
  {
    title: "Admin governance",
    description:
      "Directory controls, doctor onboarding approvals, immutable audit trails, inbound inquiries, and CMS-style blog publishing for your public site.",
    Icon: Building2,
    accent: "from-indigo-600 to-slate-800",
    photo: MARKETING_PHOTOS.adminTeam,
    imageAlt: "Operations team collaborating in an office",
  },
];

export function PlatformCapabilities() {
  return (
    <section className="relative border-y border-slate-200/70 bg-gradient-to-b from-white via-indigo-50/[0.35] to-white py-20 dark:border-slate-800/80 dark:from-slate-950 dark:via-indigo-950/25 dark:to-slate-950 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/25"
      />
      <Container>
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <p className={eyebrow}>Live platform capabilities</p>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] dark:text-white">
              Everything we ship today — not a roadmap slide
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-pretty text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              HealthBook pairs a HIPAA-minded Node API with dedicated Patient and Doctor apps (Vite), an Admin console for governance, and this Next.js
              marketing surface including articles and contact routing. Below is how those pieces show up for real users.
            </p>
          </div>
        </Reveal>

        {/* Note: grid placement must live on Reveal’s wrapper (direct grid children). Previously col-span on inner <article> broke the layout. */}
        <div className="mx-auto mt-14 grid max-w-[88rem] grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {TILES.map(({ title, description, Icon, accent, photo, imageAlt }, i) => (
            <Reveal key={title} delay={0.03 * (i % 6)} className="h-full min-w-0">
              <article
                className={
                  "group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.35rem] border border-slate-200/75 bg-[var(--hb-glass)] shadow-[var(--hb-shadow-card)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/55 " +
                  transitionBase +
                  " hover:-translate-y-0.5 hover:border-indigo-200/70 hover:shadow-[var(--hb-shadow-hover)] dark:hover:border-indigo-500/30"
                }
              >
                <div className="relative aspect-16/10 w-full min-h-0 shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <Image
                    src={photo}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                    priority={i < 3}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div
                    className={
                      "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br " +
                      accent +
                      " text-white shadow-lg shadow-indigo-500/20 " +
                      transitionBase
                    }
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-slate-900 dark:text-white">{title}</h3>
                  <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-slate-600 sm:text-[15px] dark:text-slate-400">
                    {description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-dashed border-indigo-200/80 bg-indigo-50/40 px-5 py-4 text-center dark:border-indigo-500/25 dark:bg-indigo-950/20">
            <span className="inline-flex max-w-md items-center gap-2 text-sm font-semibold text-indigo-900 dark:text-indigo-100">
              <Activity className="h-4 w-4 shrink-0" aria-hidden />
              Includes clinical workflow cues like prescriptions and longitudinal history views for authorized clinicians.
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-600" aria-hidden>
              |
            </span>
            <span className="inline-flex max-w-md items-center gap-2 text-sm font-semibold text-indigo-900 dark:text-indigo-100">
              <Stethoscope className="h-4 w-4 shrink-0" aria-hidden />
              Doctors complete profiles, signatures, and stamps where your deployment enables document workflows.
            </span>
            <span className="hidden lg:inline text-slate-300 dark:text-slate-600" aria-hidden>
              |
            </span>
            <span className="inline-flex max-w-md items-center gap-2 text-sm font-semibold text-indigo-900 dark:text-indigo-100">
              <History className="h-4 w-4 shrink-0" aria-hidden />
              Contact inquiries flow into Admin review alongside audit-grade activity logs.
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
