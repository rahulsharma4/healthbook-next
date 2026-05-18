import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Bell,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  Lock,
  MessageSquare,
  ScrollText,
  ShieldCheck,
  Sparkles,
  UserRoundCog,
} from "lucide-react";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { MarketingPageHeader } from "@/components/marketing/MarketingPageHeader";
import { PlatformCapabilities } from "@/components/marketing/PlatformCapabilities";
import { DEEP_FEATURE_PHOTO } from "@/lib/marketingPhotos";
import { MARKETING_IMAGE_BLUR_DATA_URL } from "@/lib/marketingImageBlur";
import { btnGhost, btnGradient, transitionBase } from "@/lib/ui";

const coreFeatures = [
  {
    title: "Medical Records",
    description:
      "Centralize visits, labs, imaging, and prescriptions in one structured timeline patients and clinicians can trust.",
    Icon: ClipboardList,
    accent: "from-indigo-500 to-violet-600",
    shadow: "shadow-indigo-500/25",
  },
  {
    title: "Appointments",
    description:
      "Book, reschedule, and confirm visits with real-time availability, reminders, and fewer no-shows.",
    Icon: CalendarClock,
    accent: "from-violet-500 to-fuchsia-600",
    shadow: "shadow-violet-500/25",
  },
  {
    title: "Messaging",
    description:
      "Threaded, in-app conversations with context on hand—no scattered email threads or lost context.",
    Icon: MessageSquare,
    accent: "from-cyan-500 to-indigo-600",
    shadow: "shadow-cyan-500/25",
  },
  {
    title: "Secure Access",
    description:
      "Role-based permissions, session hardening, and consent-aware sharing so the right people see the right data.",
    Icon: ShieldCheck,
    accent: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/25",
  },
  {
    title: "Notifications",
    description:
      "Smart nudges for upcoming visits, new messages, and record updates—tuned so teams stay informed, not overwhelmed.",
    Icon: Bell,
    accent: "from-amber-500 to-orange-600",
    shadow: "shadow-amber-500/25",
  },
  {
    title: "Analytics",
    description:
      "Operational insight into utilization, engagement, and care pathways—without exporting to a dozen spreadsheets.",
    Icon: BarChart3,
    accent: "from-sky-500 to-indigo-600",
    shadow: "shadow-sky-500/25",
  },
];

const deepFeatures = [
  {
    slug: "medical-records",
    title: "Medical Records That Read Like A Story",
    body:
      "HealthBook unifies fragmented documents into a chronological health narrative. Filters and summaries help clinicians prepare in minutes, while patients see plain-language context next to clinical detail.",
    benefits: [
      "Structured timeline with source-linked artifacts",
      "Sensitive categories surfaced only to authorized roles",
      "Export-friendly bundles when portability matters",
    ],
    imageSrc: DEEP_FEATURE_PHOTO["medical-records"],
    imageAlt: "Clinical team preparing coordinated care with records at hand",
  },
  {
    slug: "appointments",
    title: "Scheduling That Respects Everyone’s Time",
    body:
      "From first availability search to post-visit follow-up, appointment flows mirror consumer-grade booking—while staying aligned to clinic rules, buffers, and provider preferences.",
    benefits: [
      "Real-time slot integrity across devices",
      "Timezone-aware reminders and confirmations",
      "Reschedule paths that keep care teams aligned",
    ],
    imageSrc: DEEP_FEATURE_PHOTO.appointments,
    imageAlt: "Clinician reviewing schedule details with a patient on a tablet",
  },
  {
    slug: "messaging",
    title: "Messaging Where Clinical Context Lives",
    body:
      "Threads stay inside the workspace with attachment guardrails and clear read states. Patients message with confidence; staff respond with the record in view—not buried in personal inboxes.",
    benefits: [
      "Role-aware visibility on every thread",
      "Document previews with policy-friendly retention",
      "Fewer context switches during busy shifts",
    ],
    imageSrc: DEEP_FEATURE_PHOTO.messaging,
    imageAlt: "Focused consultation using a laptop for secure clinical communication",
  },
  {
    slug: "secure-access",
    title: "Secure Access Without Slowing Teams Down",
    body:
      "Granular permissions, delegated access with expiry, and hardened sessions mean security is the default—not a bolt-on that blocks legitimate care.",
    benefits: [
      "Least-privilege defaults with clear escalation paths",
      "Proxy access with scoped visibility and revoke controls",
      "Session signals tuned for clinical workstations",
    ],
    imageSrc: DEEP_FEATURE_PHOTO["secure-access"],
    imageAlt: "Digital security concept reinforcing protected health access",
  },
  {
    slug: "notifications",
    title: "Notifications That Cut Noise, Not Signal",
    body:
      "Delivery is tuned for urgency: appointments, labs, and secure messages surface reliably, while low-priority churn stays out of the way.",
    benefits: [
      "Channel-aware delivery for web and mobile surfaces",
      "Batching rules that respect focus time",
      "Audit-friendly delivery metadata when required",
    ],
    imageSrc: DEEP_FEATURE_PHOTO.notifications,
    imageAlt: "Staying on top of timely updates using a smartphone",
  },
  {
    slug: "analytics",
    title: "Analytics For Calmer Operations",
    body:
      "Dashboards translate utilization, messaging volume, and cohort trends into decisions leaders can act on—without exporting sensitive data to ad-hoc tools.",
    benefits: [
      "Cohort filters that respect privacy boundaries",
      "Snapshot exports for leadership reviews",
      "Trend views that highlight drift early",
    ],
    imageSrc: DEEP_FEATURE_PHOTO.analytics,
    imageAlt: "Reviewing operational metrics and charts on a laptop",
  },
];

const securityPillars = [
  {
    title: "Encryption",
    description:
      "Data is protected in transit with modern TLS and encrypted storage patterns so PHI stays shielded from device to data center.",
    Icon: Lock,
    shadow: "shadow-purple-500/20",
  },
  {
    title: "Access control",
    description:
      "Role-based policies, consent scopes, and break-glass procedures are modeled explicitly—not implied by folder permissions.",
    Icon: UserRoundCog,
    shadow: "shadow-indigo-500/20",
  },
  {
    title: "Audit logs",
    description:
      "Tamper-evident activity trails capture who viewed or changed records, supporting compliance reviews and incident response.",
    Icon: ScrollText,
    shadow: "shadow-emerald-500/20",
  },
];

function FeatureImagePanel({ src, alt, priority }) {
  const remote = /^https?:\/\//i.test(String(src || ""));
  return (
    <div
      className={
        "relative aspect-[16/10] w-full min-h-0 overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white/95 shadow-2xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-black/50 " +
        transitionBase
      }
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        {...(remote
          ? { placeholder: "empty" }
          : { placeholder: "blur", blurDataURL: MARKETING_IMAGE_BLUR_DATA_URL })}
        className="object-cover object-center transform transition-transform duration-700 hover:scale-105"
        sizes="(min-width: 1024px) 42vw, 100vw"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-950/20 via-transparent to-cyan-500/10 opacity-60"
      />
    </div>
  );
}

export function FeaturesPageContent() {
  return (
    <>
      <MarketingPageHeader
        kicker="Features Architecture"
        title="Everything You Need To Manage Health Digitally"
        description="Records, appointments, consent-aware sharing, realtime messaging, medicine reminders, optional web push, analytics for clinicians, and admin-grade governance—wired through one HealthBook API."
      />

      <section className="relative pb-24 sm:pb-32" aria-labelledby="core-features-heading">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-200/80 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800 mb-4 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-indigo-600 animate-spin" style={{ animationDuration: "6s" }} />
                <span>Synchronized Workflows</span>
              </div>
              <h2 id="core-features-heading" className="font-heading text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                6 Pillars of Digital Health Coordination
              </h2>
              <p className="mt-4 text-pretty text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
                Feature-rich yet calm: each module interoperates so patients feel one journey—scheduling, charting, messaging, reminders, and governance stay in sync behind the scenes.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {coreFeatures.map(({ title, description, Icon, accent, shadow }, i) => (
              <Reveal key={title} delay={0.04 * (i % 3)}>
                <article
                  className={
                    "group flex h-full flex-col rounded-[2rem] border border-slate-200/90 bg-white/95 p-8 shadow-xl shadow-slate-200/50 backdrop-blur-2xl dark:border-slate-800/90 dark:bg-slate-900/90 dark:shadow-black/50 " +
                    transitionBase +
                    " hover:-translate-y-2 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/20 dark:hover:border-indigo-500/40"
                  }
                >
                  <div
                    className={
                      "mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br " +
                      accent +
                      " text-white shadow-xl " + shadow + " " +
                      transitionBase +
                      " transform group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl"
                    }
                  >
                    <Icon className="h-7 w-7" strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className="font-heading text-xl font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">{title}</h3>
                  <p className="mt-3 flex-1 text-base font-medium leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <PlatformCapabilities />

      <div className="space-y-24 py-16 sm:space-y-32 sm:py-24 bg-gradient-to-b from-white via-indigo-50/20 to-white dark:from-slate-950 dark:via-indigo-950/10 dark:to-slate-950">
        {deepFeatures.map((feature, index) => {
          const reverse = index % 2 === 1;
          return (
            <section
              key={feature.slug}
              className="relative overflow-hidden"
              aria-labelledby={`feature-${feature.slug}-heading`}
            >
              <Container>
                <Reveal>
                  <div
                    className={
                      "mx-auto flex max-w-6xl flex-col items-center gap-12 lg:gap-16 " +
                      (reverse ? "lg:flex-row-reverse" : "lg:flex-row")
                    }
                  >
                    <div className="w-full flex-1">
                      <FeatureImagePanel
                        src={feature.imageSrc}
                        alt={feature.imageAlt}
                        priority={index < 2}
                      />
                    </div>
                    <div className="w-full flex-1">
                      <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-black uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-200/80 dark:bg-indigo-950 dark:text-indigo-300 mb-4 shadow-sm">
                        <Sparkles className="h-3 w-3 text-indigo-600" />
                        <span>Module Deep Dive</span>
                      </div>
                      <h2
                        id={`feature-${feature.slug}-heading`}
                        className="font-heading text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white"
                      >
                        {feature.title}
                      </h2>
                      <p className="mt-4 text-pretty text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300">{feature.body}</p>
                      <ul className="mt-8 space-y-4 text-slate-700 dark:text-slate-300 font-semibold">
                        {feature.benefits.map((b) => (
                          <li key={b} className="flex items-center gap-3.5 text-base">
                            <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </Container>
            </section>
          );
        })}
      </div>

      <section className="relative py-24 sm:py-32 border-t border-indigo-100 dark:border-slate-800" aria-labelledby="security-heading">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-200/80 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800 mb-4 shadow-sm">
                <Lock className="h-3.5 w-3.5 text-indigo-600" />
                <span>Enterprise Trust & Compliance</span>
              </div>
              <h2 id="security-heading" className="font-heading text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                Security Engineered For Regulated Care
              </h2>
              <p className="mt-4 text-pretty text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
                Encryption-minded transport, role-aware APIs with CSRF defenses, patient-controlled grants, immutable admin audit trails, and transparent patient access logs.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-3 lg:gap-8">
            {securityPillars.map(({ title, description, Icon, shadow }, i) => (
              <Reveal key={title} delay={0.05 * i}>
                <article className={"group flex h-full flex-col rounded-[2rem] border border-slate-200/90 bg-white/95 p-8 shadow-xl shadow-slate-200/50 backdrop-blur-2xl dark:border-slate-800/90 dark:bg-slate-900/90 dark:shadow-black/50 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-300 hover:shadow-2xl"}>
                  <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-200 shadow-lg ${shadow} transform group-hover:scale-110 group-hover:rotate-6 transition`}>
                    <Icon className="h-7 w-7" strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className="font-heading text-xl font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">{title}</h3>
                  <p className="mt-3 text-base font-medium leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-24 sm:py-36 bg-gradient-to-b from-indigo-50/50 via-white to-white dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950 border-t border-indigo-100 dark:border-slate-800" aria-labelledby="features-cta-heading">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-5xl rounded-[3rem] border border-indigo-200/80 bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 p-12 text-center text-white shadow-2xl shadow-indigo-950/50 sm:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
              
              <h2 id="features-cta-heading" className="font-heading text-3xl font-black tracking-tight sm:text-5xl drop-shadow-sm relative z-10">
                Bring Every Feature Online In One Workspace
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg font-medium leading-relaxed text-indigo-200 relative z-10">
                Start with the modules you need today; expand into full digital coordination as your organization grows—without re-platforming.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 relative z-10">
                <Link href="/register" className={btnGradient + " min-h-[3.75rem] min-w-[200px] justify-center gap-2 shadow-2xl shadow-indigo-500/40 font-extrabold transform hover:scale-105"}>
                  Get started
                </Link>
                <Link href="/contact" className={btnGhost + " min-h-[3.75rem] min-w-[180px] justify-center font-extrabold border border-white/30 hover:bg-white/10"}>
                  Contact sales
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
