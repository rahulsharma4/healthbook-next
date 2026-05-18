import Link from "next/link";
import { ArrowRight, BookOpen, Compass, HeartPulse, UsersRound } from "lucide-react";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { MarketingPageHeader } from "@/components/marketing/MarketingPageHeader";
import { btnGhost, btnGradient, cardInteractive, eyebrow, glassPanel } from "@/lib/ui";

const team = [
  {
    name: "Alex Rivera",
    role: "Co-founder & CEO",
    bio: "Former product lead at a national health system; focused on trust, access, and measurable time returned to clinicians.",
    initials: "AR",
  },
  {
    name: "Jordan Lee",
    role: "Head of Product",
    bio: "Designs workflows with nursing and front-desk partners so software matches how care is actually delivered.",
    initials: "JL",
  },
  {
    name: "Sam Okonkwo",
    role: "Engineering Lead",
    bio: "Builds resilient platforms with privacy and auditability as first-class constraints—not afterthoughts.",
    initials: "SO",
  },
  {
    name: "Morgan Chen",
    role: "Clinical Advisor",
    bio: "Practicing physician helping HealthBook stay grounded in real exam rooms, not slide decks. (Advisory, illustrative team.)",
    initials: "MC",
  },
];

function StorySection({ id, eyebrowText, title, children, tone = "default", align = "left" }) {
  const bg =
    tone === "muted"
      ? " border-y border-slate-200/70 bg-slate-50/80 py-16 backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-950/50 sm:py-20"
      : " py-16 sm:py-20";

  return (
    <section id={id} className={"relative " + bg} aria-labelledby={id ? `${id}-heading` : undefined}>
      <Container>
        <div className={align === "center" ? "mx-auto max-w-5xl text-center" : "mx-auto max-w-5xl"}>
          {eyebrowText ? <p className={eyebrow}>{eyebrowText}</p> : null}
          <h2 id={id ? `${id}-heading` : undefined} className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {title}
          </h2>
          <div className="mt-6 space-y-5 text-pretty text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function AboutPageContent() {
  return (
    <>
      <MarketingPageHeader
        kicker="About HealthBook"
        title="Our mission is simple: make continuity of care feel inevitable, not improvised."
        description="HealthBook exists so patients and clinicians share one truthful narrative—records, appointments, and conversations—without the noise of fragmented portals or brittle tools. We build with patience, craft, and respect for how vulnerable health moments already are."
        className="pb-14 sm:pb-20"
      />

      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-indigo-200/60 to-transparent lg:block dark:via-indigo-500/25"
        />

        <Reveal>
          <StorySection id="problem" eyebrowText="Chapter 1" title="Healthcare chaos is not a people problem—it is a systems problem">
            <p>
              Patients juggle passwords, paper after-visit summaries, and half-remembered instructions. Clinicians lose minutes to tabs,
              duplicate data entry, and context that lives outside the chart. Everyone agrees on the goal—better outcomes—but the
              software between them often works against that goal.
            </p>
            <p>
              That friction shows up as missed follow-ups, delayed prescriptions, and anxiety that could have been prevented with
              clearer information at the right time. We call that chaos—not because people fail, but because the digital layer was
              never designed as one coherent story.
            </p>
          </StorySection>
        </Reveal>

        <Reveal delay={0.04}>
          <StorySection id="solution" eyebrowText="Chapter 2" title="HealthBook is the system we wished existed" tone="muted">
            <p>
              HealthBook is a patient-centered health platform that unifies scheduling, medical records, secure messaging, and
              operational insight into a single premium workspace. Patients see a calm timeline; clinicians see the same truth with
              role-appropriate depth.
            </p>
            <p>
              We obsess over defaults that protect privacy, flows that survive a busy Tuesday clinic, and language that does not
              require a medical degree to understand—while still honoring clinical precision where it matters.
            </p>
          </StorySection>
        </Reveal>

        <Reveal delay={0.06}>
          <StorySection id="vision" eyebrowText="Chapter 3" title="The future of digital healthcare is quieter—and more human" align="center">
            <p>
              We believe the next decade rewards platforms that reduce cognitive load: fewer surprises in the inbox, fewer mysteries
              in the chart, and fewer apologies for software that got in the way. Digital healthcare should amplify empathy, not
              replace it with dashboards.
            </p>
            <p>
              HealthBook&apos;s vision is a world where continuity of care is the default—where your story travels with you, with
              consent, and where teams can collaborate without burning trust. We are building that future one release at a time,
              alongside the clinicians and patients who hold us accountable.
            </p>
          </StorySection>
        </Reveal>
      </div>

      <section className="relative pb-16 sm:pb-20" aria-labelledby="team-heading">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className={eyebrow}>People behind the mission</p>
              <h2 id="team-heading" className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                Team
              </h2>
              <p className="mt-4 text-pretty text-lg text-slate-600 dark:text-slate-400">
                Illustrative profiles for storytelling and layout—replace with your real leadership as the company grows.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={0.05 * i}>
                <article className={cardInteractive + " flex h-full flex-col items-center p-7 text-center sm:p-8"}>
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-600 font-heading text-lg font-bold text-white shadow-lg shadow-indigo-500/25"
                    aria-hidden
                  >
                    {member.initials}
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-slate-900 dark:text-white">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-300">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{member.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative pb-24 sm:pb-32" aria-labelledby="about-cta-heading">
        <Container>
          <Reveal>
            <div className={glassPanel + " mx-auto max-w-4xl rounded-[1.5rem] px-8 py-12 text-center sm:px-12 sm:py-14"}>
              <div className="mx-auto flex max-w-xs items-center justify-center gap-3 text-indigo-600 dark:text-indigo-300">
                <BookOpen className="h-5 w-5 shrink-0" aria-hidden />
                <Compass className="h-5 w-5 shrink-0" aria-hidden />
                <HeartPulse className="h-5 w-5 shrink-0" aria-hidden />
                <UsersRound className="h-5 w-5 shrink-0" aria-hidden />
              </div>
              <h2 id="about-cta-heading" className="mt-6 font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                Write the next chapter with us
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-slate-600 dark:text-slate-400">
                Whether you are a patient who wants calmer coordination or a clinic ready to modernize without losing soul—HealthBook
                is built for long arcs, not quick demos.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Link href="/register" className={btnGradient + " min-w-[11rem] justify-center gap-2"}>
                  Get started
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link href="/contact" className={btnGhost + " min-w-[10rem] justify-center"}>
                  Contact us
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
