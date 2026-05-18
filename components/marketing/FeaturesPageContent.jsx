import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Bell,
  CalendarClock,
  ClipboardList,
  Lock,
  MessageSquare,
  ScrollText,
  ShieldCheck,
  UserRoundCog,
} from "lucide-react";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { MarketingPageHeader } from "@/components/marketing/MarketingPageHeader";
import { PlatformCapabilities } from "@/components/marketing/PlatformCapabilities";
import { DEEP_FEATURE_PHOTO } from "@/lib/marketingPhotos";
import { MARKETING_IMAGE_BLUR_DATA_URL } from "@/lib/marketingImageBlur";
import { btnGhost, btnGradient, cardInteractive, eyebrow, glassPanel, transitionBase } from "@/lib/ui";

const coreFeatures = [
  {
    title: "Medical Records",
    description:
      "Centralize visits, labs, imaging, and prescriptions in one structured timeline patients and clinicians can trust.",
    Icon: ClipboardList,
    accent: "from-indigo-500 to-violet-600",
  },
  {
    title: "Appointments",
    description:
      "Book, reschedule, and confirm visits with real-time availability, reminders, and fewer no-shows.",
    Icon: CalendarClock,
    accent: "from-violet-500 to-fuchsia-600",
  },
  {
    title: "Messaging",
    description:
      "Threaded, in-app conversations with context on hand—no scattered email threads or lost context.",
    Icon: MessageSquare,
    accent: "from-cyan-500 to-indigo-600",
  },
  {
    title: "Secure Access",
    description:
      "Role-based permissions, session hardening, and consent-aware sharing so the right people see the right data.",
    Icon: ShieldCheck,
    accent: "from-emerald-500 to-teal-600",
  },
  {
    title: "Notifications",
    description:
      "Smart nudges for upcoming visits, new messages, and record updates—tuned so teams stay informed, not overwhelmed.",
    Icon: Bell,
    accent: "from-amber-500 to-orange-600",
  },
  {
    title: "Analytics",
    description:
      "Operational insight into utilization, engagement, and care pathways—without exporting to a dozen spreadsheets.",
    Icon: BarChart3,
    accent: "from-sky-500 to-indigo-600",
  },
];

const deepFeatures = [
  {
    slug: "medical-records",
    title: "Medical records that read like a story",
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
    title: "Scheduling that respects everyone’s time",
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
    title: "Messaging where clinical context lives",
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
    title: "Secure access without slowing teams down",
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
    title: "Notifications that cut noise, not signal",
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
    title: "Analytics for calmer operations",
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
  },
  {
    title: "Access control",
    description:
      "Role-based policies, consent scopes, and break-glass procedures are modeled explicitly—not implied by folder permissions.",
    Icon: UserRoundCog,
  },
  {
    title: "Audit logs",
    description:
      "Tamper-evident activity trails capture who viewed or changed records, supporting compliance reviews and incident response.",
    Icon: ScrollText,
  },
];

function FeatureImagePanel({ src, alt, priority }) {
  const remote = /^https?:\/\//i.test(String(src || ""));
  return (
    <div
      className={
        "relative aspect-16/10 w-full min-h-0 overflow-hidden rounded-[1.25rem] border border-slate-200/80 bg-slate-100 shadow-[var(--hb-shadow-card)] dark:border-slate-700/80 dark:bg-slate-900/60 " +
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
        className="object-cover object-center"
        sizes="(min-width: 1024px) 42vw, 100vw"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-600/[0.04] via-transparent to-cyan-500/[0.06]"
      />
    </div>
  );
}

export function FeaturesPageContent() {
  return (
    <>
      <MarketingPageHeader
        kicker="Features"
        title="Everything you need to manage health digitally"
        description="Records, appointments, consent-aware sharing, realtime messaging, medicine reminders, optional web push, analytics for clinicians, and admin-grade governance—wired through one HealthBook API and surfaced in dedicated patient, doctor, and administrator experiences."
      />

      <section className="relative pb-20 sm:pb-24" aria-labelledby="core-features-heading">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-5xl text-center">
              <p className={eyebrow}>Core capabilities</p>
              <h2 id="core-features-heading" className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                Six pillars of digital health coordination
              </h2>
              <p className="mt-4 text-pretty text-lg text-slate-600 dark:text-slate-400 sm:text-xl">
                Feature-rich yet calm: each module interoperates so patients feel one journey—scheduling, charting, messaging, reminders, and governance stay in sync behind the scenes.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {coreFeatures.map(({ title, description, Icon, accent }, i) => (
              <Reveal key={title} delay={0.04 * (i % 3)}>
                <article
                  className={
                    "group flex h-full flex-col rounded-[1.35rem] border border-slate-200/70 bg-[var(--hb-glass)] p-7 shadow-[var(--hb-shadow-card)] backdrop-blur-2xl dark:border-slate-800/85 dark:bg-slate-950/50 sm:p-8 " +
                    transitionBase +
                    " hover:-translate-y-0.5 hover:shadow-[var(--hb-shadow-hover)]"
                  }
                >
                  <div
                    className={
                      "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br " +
                      accent +
                      " text-white shadow-lg shadow-indigo-500/20 " +
                      transitionBase +
                      " group-hover:scale-[1.04]"
                    }
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.65} aria-hidden />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <PlatformCapabilities />

      <div className="space-y-24 pb-8 sm:space-y-28 sm:pb-12">
        {deepFeatures.map((feature, index) => {
          const reverse = index % 2 === 1;
          return (
            <section
              key={feature.slug}
              className="relative"
              aria-labelledby={`feature-${feature.slug}-heading`}
            >
              <Container>
                <Reveal>
                  <div
                    className={
                      "mx-auto flex max-w-6xl flex-col items-center gap-10 lg:gap-14 " +
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
                      <p className={eyebrow}>Deep dive</p>
                      <h2
                        id={`feature-${feature.slug}-heading`}
                        className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
                      >
                        {feature.title}
                      </h2>
                      <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-600 dark:text-slate-400">{feature.body}</p>
                      <ul className="mt-8 space-y-3 text-slate-700 dark:text-slate-300">
                        {feature.benefits.map((b) => (
                          <li key={b} className="flex gap-3 text-sm sm:text-base">
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-sm shadow-indigo-500/40"
                              aria-hidden
                            />
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

      <section className="relative pb-20 sm:pb-28" aria-labelledby="security-heading">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-5xl text-center">
              <p className={eyebrow}>Trust &amp; compliance</p>
              <h2 id="security-heading" className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                Security engineered for regulated care
              </h2>
              <p className="mt-4 text-pretty text-lg text-slate-600 dark:text-slate-400 sm:text-xl">
                Encryption-minded transport, role-aware APIs with CSRF defenses on mutating requests, patient-controlled grants, immutable admin audit trails, and transparent patient access logs—so operations teams can demonstrate accountability.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3 lg:gap-8">
            {securityPillars.map(({ title, description, Icon }, i) => (
              <Reveal key={title} delay={0.05 * i}>
                <article className={cardInteractive + " flex h-full flex-col p-8"}>
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-200">
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

      <section className="relative pb-24 sm:pb-32" aria-labelledby="features-cta-heading">
        <Container>
          <Reveal>
            <div className={glassPanel + " mx-auto max-w-4xl px-8 py-12 text-center sm:px-12 sm:py-14"}>
              <h2 id="features-cta-heading" className="font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                Bring every feature online in one workspace
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-slate-600 dark:text-slate-400">
                Start with the modules you need today; expand into full digital coordination as your organization grows—without re-platforming.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Link href="/register" className={btnGradient + " min-w-[11rem] justify-center gap-2"}>
                  Get started
                </Link>
                <Link href="/contact" className={btnGhost + " min-w-[10rem] justify-center"}>
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
