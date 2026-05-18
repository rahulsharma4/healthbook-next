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
import { transitionBase } from "@/lib/ui";

const TILES = [
  {
    title: "Appointments & availability",
    description:
      "Patients book and manage visits; doctors publish real slots, buffers, and blackout windows so scheduling reflects real clinic rhythm.",
    Icon: CalendarClock,
    accent: "from-violet-500 to-indigo-600",
    photo: MARKETING_PHOTOS.appointments,
    imageAlt: "Clinicians collaborating during a shift handoff",
    shadow: "shadow-violet-500/25",
  },
  {
    title: "Medical records & versions",
    description:
      "Structured timelines with uploads (labs, imaging, PDFs). Important edits can retain history so collaborative charting stays accountable.",
    Icon: FileStack,
    accent: "from-indigo-500 to-blue-600",
    photo: MARKETING_PHOTOS.medicalRecords,
    imageAlt: "Clinician reviewing a digital chart during a consultation",
    shadow: "shadow-indigo-500/25",
  },
  {
    title: "Consent-based record sharing",
    description:
      "Patients grant doctors scoped access to their chart—explicit grants replace guesswork about who can see what.",
    Icon: KeyRound,
    accent: "from-emerald-500 to-teal-600",
    photo: MARKETING_PHOTOS.consentCollaboration,
    imageAlt: "Care team discussion at a conference table",
    shadow: "shadow-emerald-500/25",
  },
  {
    title: "Access transparency",
    description:
      "Patients can review activity showing who accessed their health data—trust grows when visibility is the default.",
    Icon: ScrollText,
    accent: "from-sky-500 to-cyan-600",
    photo: MARKETING_PHOTOS.documentsAudit,
    imageAlt: "Documents and compliance paperwork organized on a desk",
    shadow: "shadow-cyan-500/25",
  },
  {
    title: "Secure in-app messaging",
    description:
      "Threaded conversations between patients and care teams with realtime delivery—fewer lost SMS threads and clearer follow-ups.",
    Icon: MessagesSquare,
    accent: "from-fuchsia-500 to-rose-500",
    photo: MARKETING_PHOTOS.messaging,
    imageAlt: "Clinician using a laptop during a consultation",
    shadow: "shadow-rose-500/25",
  },
  {
    title: "Notifications & browser push",
    description:
      "In-product alerts plus optional web push (when enabled) for appointments, messages, and reminders—without burying people in noise.",
    Icon: BellRing,
    accent: "from-amber-500 to-orange-600",
    photo: MARKETING_PHOTOS.notifications,
    imageAlt: "Smartphone on a desk showing notifications",
    shadow: "shadow-amber-500/25",
  },
  {
    title: "Medicine reminders",
    description:
      "Patients set schedules for medications; dashboards can surface adherence-friendly views for authorized clinicians.",
    Icon: Pill,
    accent: "from-rose-400 to-pink-600",
    photo: MARKETING_PHOTOS.medication,
    imageAlt: "Medication blister packs and pharmacy supplies",
    shadow: "shadow-pink-500/25",
  },
  {
    title: "Shareable report links",
    description:
      "Patients bundle selected uploads into time-limited share links—useful for referrals or family coordination with guardrails.",
    Icon: Link2,
    accent: "from-cyan-500 to-indigo-600",
    photo: MARKETING_PHOTOS.technologyShare,
    imageAlt: "Diagnostic imaging displays suggesting shared radiology and reports",
    shadow: "shadow-cyan-500/25",
  },
  {
    title: "MFA-ready sign-in",
    description:
      "Layered authentication flows support verification challenges where policy requires—sessions remain first-class for browser clients.",
    Icon: ShieldCheck,
    accent: "from-slate-700 to-indigo-700",
    photo: MARKETING_PHOTOS.mfaDevice,
    imageAlt: "Mobile phone used for secure verification",
    shadow: "shadow-indigo-500/25",
  },
  {
    title: "Doctor workspace analytics",
    description:
      "Operational dashboards for clinicians—stats and utilization signals so practices tune capacity instead of flying blind.",
    Icon: LayoutDashboard,
    accent: "from-blue-600 to-violet-600",
    photo: MARKETING_PHOTOS.analytics,
    imageAlt: "Business analytics charts on a monitor",
    shadow: "shadow-blue-500/25",
  },
  {
    title: "Doctor reviews",
    description:
      "Patients who have been seen can leave structured feedback; listings surface trusted signals for others choosing care.",
    Icon: Star,
    accent: "from-yellow-500 to-amber-600",
    photo: MARKETING_PHOTOS.reviews,
    imageAlt: "Doctor speaking reassuringly with a patient",
    shadow: "shadow-yellow-500/25",
  },
  {
    title: "Admin governance",
    description:
      "Directory controls, doctor onboarding approvals, immutable audit trails, inbound inquiries, and CMS-style blog publishing for your public site.",
    Icon: Building2,
    accent: "from-indigo-600 to-slate-800",
    photo: MARKETING_PHOTOS.adminTeam,
    imageAlt: "Operations team collaborating in an office",
    shadow: "shadow-indigo-500/25",
  },
];

export function PlatformCapabilities() {
  return (
    <section className="relative border-y border-indigo-100/60 bg-gradient-to-b from-white via-indigo-50/40 to-white py-24 dark:border-slate-800/80 dark:from-slate-950 dark:via-indigo-950/20 dark:to-slate-950 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent dark:via-indigo-500/30"
      />
      <Container>
        <Reveal>
          <div className="mx-auto max-w-4xl text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-200/80 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800 mb-4 shadow-sm">
              <Activity className="h-3.5 w-3.5 text-indigo-600 animate-pulse" />
              <span>Tested & Deployed Architecture</span>
            </div>
            <h2 className="font-heading text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Everything We Ship Today
            </h2>
            <p className="mt-4 text-pretty text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
              HealthBook pairs a HIPAA-minded Node API with dedicated Patient and Doctor portals, an Admin console for governance, and this Next.js marketing surface. Below is how those pieces show up for real users.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-[88rem] grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {TILES.map(({ title, description, Icon, accent, photo, imageAlt, shadow }, i) => (
            <Reveal key={title} delay={0.03 * (i % 6)} className="h-full min-w-0">
              <article
                className={
                  "group flex h-full min-w-0 flex-col overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white/95 shadow-xl shadow-slate-200/50 backdrop-blur-2xl dark:border-slate-800/90 dark:bg-slate-900/90 dark:shadow-black/50 " +
                  transitionBase +
                  " hover:-translate-y-2 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/20 dark:hover:border-indigo-500/40"
                }
              >
                <div className="relative aspect-[16/10] w-full min-h-0 shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <Image
                    src={photo}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    priority={i < 3}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition duration-300"
                  />
                  <div className="absolute bottom-4 left-4 z-10">
                    <div
                      className={
                        "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br " +
                        accent +
                        " text-white shadow-xl " + shadow + " " +
                        transitionBase +
                        " transform group-hover:scale-110 group-hover:rotate-6"
                      }
                    >
                      <Icon className="h-6 w-6" strokeWidth={2} aria-hidden />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <h3 className="font-heading text-xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">{title}</h3>
                  <p className="mt-3 flex-1 text-base font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                    {description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-16 flex flex-wrap items-center justify-center gap-4 rounded-[2rem] border border-dashed border-indigo-200/80 bg-white/80 p-6 sm:p-8 text-center shadow-lg shadow-indigo-500/5 backdrop-blur-xl dark:border-indigo-500/30 dark:bg-indigo-950/30">
            <span className="inline-flex max-w-md items-center gap-2.5 text-sm font-bold text-indigo-950 dark:text-indigo-100">
              <Activity className="h-4 w-4 shrink-0 text-indigo-600 animate-pulse" aria-hidden />
              Includes clinical workflow cues like verifiable prescriptions and longitudinal history views.
            </span>
            <span className="hidden sm:inline text-indigo-200 dark:text-slate-600" aria-hidden>
              •
            </span>
            <span className="inline-flex max-w-md items-center gap-2.5 text-sm font-bold text-indigo-950 dark:text-indigo-100">
              <Stethoscope className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
              Doctors complete profiles, verifiable signatures, and secure stamp workflows.
            </span>
            <span className="hidden lg:inline text-indigo-200 dark:text-slate-600" aria-hidden>
              •
            </span>
            <span className="inline-flex max-w-md items-center gap-2.5 text-sm font-bold text-indigo-950 dark:text-indigo-100">
              <History className="h-4 w-4 shrink-0 text-purple-600" aria-hidden />
              Inquiries flow into Admin review alongside audit-grade activity logs.
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
