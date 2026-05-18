import Link from "next/link";
import { ArrowRight, BookOpen, Compass, HeartPulse, Sparkles, UsersRound, Zap } from "lucide-react";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { MarketingPageHeader } from "@/components/marketing/MarketingPageHeader";
import { btnGhost, btnGradient, transitionBase } from "@/lib/ui";

const team = [
  {
    name: "Alex Rivera",
    role: "Co-founder & CEO",
    bio: "Former product lead at a national health system; focused on trust, access, and measurable time returned to active clinicians.",
    initials: "AR",
    color: "from-indigo-500 to-purple-600",
  },
  {
    name: "Jordan Lee",
    role: "Head of Product",
    bio: "Designs workflows with nursing and front-desk partners so software matches exactly how care is delivered at the bedside.",
    initials: "JL",
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    name: "Sam Okonkwo",
    role: "Engineering Lead",
    bio: "Builds bulletproof resilient platforms with zero-trust privacy and auditability as first-class architectural constraints.",
    initials: "SO",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Dr. Morgan Chen",
    role: "Chief Medical Advisor",
    bio: "Practicing physician helping HealthBook stay grounded in real clinical exam rooms, eliminating daily portal fatigue.",
    initials: "MC",
    color: "from-cyan-500 to-blue-600",
  },
];

function StorySection({ id, eyebrowText, title, children, tone = "default", align = "left" }) {
  const bg =
    tone === "muted"
      ? " border-y border-indigo-100/80 bg-gradient-to-b from-slate-50/90 via-indigo-50/30 to-slate-50/90 py-20 backdrop-blur-xl dark:border-slate-800 dark:bg-gradient-to-b dark:from-slate-950 dark:via-indigo-950/20 dark:to-slate-950 sm:py-28"
      : " py-20 sm:py-28";

  return (
    <section id={id} className={"relative overflow-hidden " + bg} aria-labelledby={id ? `${id}-heading` : undefined}>
      <Container>
        <div className={align === "center" ? "mx-auto max-w-4xl text-center" : "mx-auto max-w-4xl"}>
          {eyebrowText ? (
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-200/80 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800 mb-4 shadow-sm">
              <Sparkles className="h-3 w-3 text-indigo-600" />
              <span>{eyebrowText}</span>
            </div>
          ) : null}
          <h2 id={id ? `${id}-heading` : undefined} className="font-heading text-3xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            {title}
          </h2>
          <div className="mt-8 space-y-6 text-pretty text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function AboutPageContent() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(99,102,241,0.2),transparent_65%)] dark:bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(129,140,248,0.18),transparent_65%)]"
      />
      
      <MarketingPageHeader
        kicker="About Our Mission"
        title="Making Care Continuity Inevitable, Not Improvised."
        description="HealthBook exists so patients and clinicians share one truthful narrative—records, appointments, and conversations—without the noise of fragmented portals or clunky legacy software. We build with extreme care, absolute transparency, and immense respect for the bedside moments we protect."
        className="pb-16 sm:pb-24"
      />

      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 bottom-0 hidden w-1.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent lg:block dark:via-indigo-500/40 shadow-lg shadow-indigo-500/20"
        />

        <Reveal>
          <StorySection id="problem" eyebrowText="Chapter 01" title="Healthcare Chaos Is A Systems Problem, Not A People Problem.">
            <p className="bg-white/80 dark:bg-slate-900/80 p-8 rounded-[2rem] border border-slate-200/90 dark:border-slate-800/90 shadow-xl shadow-slate-200/40 dark:shadow-none backdrop-blur-xl">
              Patients juggle countless passwords, paper discharge summaries, and half-remembered instructions. Clinicians lose precious hours to tab sprawl, repetitive data entry, and vital context that lives outside the active chart. Everyone shares the exact same goal—better patient outcomes—but the legacy software between them works directly against that goal.
            </p>
            <p className="p-4 sm:p-6 text-slate-700 dark:text-slate-300">
              That operational friction manifests as missed follow-ups, delayed prescriptions, and immense anxiety that could have been completely prevented with crystal-clear information. We call that chaos—not because hardworking medical professionals fail, but because the underlying digital infrastructure was never designed as one cohesive story.
            </p>
          </StorySection>
        </Reveal>

        <Reveal delay={0.04}>
          <StorySection id="solution" eyebrowText="Chapter 02" title="HealthBook Is The Command Center We Wished Existed." tone="muted">
            <p className="bg-white/95 dark:bg-slate-900/90 p-8 sm:p-10 rounded-[2rem] border border-indigo-200/80 dark:border-indigo-500/30 shadow-2xl shadow-indigo-500/10 backdrop-blur-2xl font-semibold text-slate-800 dark:text-slate-200">
              HealthBook is a patient-centered clinical platform that unifies smart scheduling, longitudinal medical records, realtime secure chat, and operational practice insights into a single premium workspace. Patients experience a calm, friendly timeline; clinicians command the exact same truthful history with medical-grade depth.
            </p>
            <p className="p-4 sm:p-6 text-slate-700 dark:text-slate-300">
              We obsess over defaults that guarantee zero-trust privacy, workflows that effortlessly survive a chaotic Tuesday morning clinic, and plain-language transparency that empowers patients without sacrificing clinical precision.
            </p>
          </StorySection>
        </Reveal>

        <Reveal delay={0.06}>
          <StorySection id="vision" eyebrowText="Chapter 03" title="The Future Of Digital Healthcare Is Quieter & More Human." align="center">
            <p className="bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 text-white p-8 sm:p-12 rounded-[2.5rem] shadow-2xl shadow-indigo-950/50 border border-indigo-400/30 relative overflow-hidden">
              <span className="absolute top-0 right-0 -mr-16 -mt-16 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
              We believe the next decade rewards platforms that dramatically reduce cognitive load: zero surprises in the inbox, zero mysteries in the patient chart, and zero apologies for software getting in the way. High-end digital healthcare should amplify empathy, not replace it with cold dashboards.
            </p>
            <p className="p-4 sm:p-6 text-slate-700 dark:text-slate-300 font-semibold">
              HealthBook&apos;s definitive vision is a world where continuity of care is the absolute default—where your medical story travels securely with you under explicit consent. We are building that future release by release alongside the active clinicians and patients who hold us accountable.
            </p>
          </StorySection>
        </Reveal>
      </div>

      <section className="relative py-24 sm:py-32 bg-slate-50/50 dark:bg-slate-900/30 border-t border-indigo-100 dark:border-slate-800" aria-labelledby="team-heading">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-200/80 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800 mb-4 shadow-sm">
                <UsersRound className="h-3.5 w-3.5 text-indigo-600" />
                <span>The Minds Behind The Platform</span>
              </div>
              <h2 id="team-heading" className="font-heading text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                Leadership Team
              </h2>
              <p className="mt-4 text-pretty text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
                Illustrative executive leadership dedicated to engineering flawless continuity of care across national clinical ecosystems.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={0.05 * i}>
                <article className={"group flex h-full flex-col items-center rounded-[2rem] border border-slate-200/90 bg-white/95 p-8 text-center shadow-xl shadow-slate-200/50 backdrop-blur-2xl dark:border-slate-800/90 dark:bg-slate-900/90 dark:shadow-black/50 " + transitionBase + " hover:-translate-y-2 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/20"}>
                  <div className={`relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${member.color} font-heading text-2xl font-black text-white shadow-xl shadow-indigo-500/30 transform group-hover:scale-110 group-hover:rotate-6 transition duration-300`}>
                    {member.initials}
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">{member.name}</h3>
                  <p className="mt-1.5 inline-block rounded-full bg-indigo-50 dark:bg-slate-800 px-3 py-1 text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-slate-700">{member.role}</p>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">{member.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-24 sm:py-36 bg-gradient-to-b from-indigo-50/50 via-white to-white dark:from-slate-950 dark:via-slate-900/40 dark:to-slate-950 border-t border-indigo-100 dark:border-slate-800" aria-labelledby="about-cta-heading">
        <Container>
          <Reveal>
            <div className={"relative mx-auto max-w-5xl overflow-hidden rounded-[3rem] border border-indigo-200/80 bg-gradient-to-br from-indigo-900 via-indigo-950 to-purple-950 p-12 sm:p-20 text-center text-white shadow-2xl shadow-indigo-950/50 " + transitionBase}>
              <div className="absolute top-0 right-0 -mr-20 -mt-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
              
              <div className="mx-auto flex max-w-xs items-center justify-center gap-4 text-cyan-400 bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/20 mb-6 shadow-lg">
                <BookOpen className="h-6 w-6 shrink-0 animate-pulse" aria-hidden />
                <Compass className="h-6 w-6 shrink-0" aria-hidden />
                <HeartPulse className="h-6 w-6 shrink-0 text-rose-400 animate-bounce" aria-hidden style={{ animationDuration: "2s" }} />
                <UsersRound className="h-6 w-6 shrink-0 text-indigo-300" aria-hidden />
              </div>

              <h2 id="about-cta-heading" className="font-heading text-3xl font-black tracking-tight sm:text-5xl drop-shadow-sm">
                Write The Next Chapter With Us
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-relaxed text-indigo-200 sm:text-xl">
                Whether you are a patient who wants calmer coordination or a clinic ready to modernize without losing its soul—HealthBook is engineered for decades of reliability, not quick demos.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <Link href="/register" className={btnGradient + " min-h-[3.75rem] min-w-[200px] justify-center gap-3 shadow-2xl shadow-indigo-500/40 font-extrabold transform hover:scale-105"}>
                  <Zap className="h-5 w-5 animate-bounce" style={{ animationDuration: "2s" }} />
                  <span>Get Started Now</span>
                </Link>
                <Link href="/contact" className={btnGhost + " min-h-[3.75rem] min-w-[180px] justify-center font-extrabold border border-white/30 hover:bg-white/10"}>
                  Contact our team
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
