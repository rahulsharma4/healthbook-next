import { Container } from "@/components/Container";
import { kickerPill, transitionBase } from "@/lib/ui";

export function MarketingPageHeader({ kicker, title, description, className = "" }) {
  return (
    <div className={"relative overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-16 " + className}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.2),transparent_58%)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(129,140,248,0.16),transparent_58%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 -z-10 h-72 w-72 rounded-full bg-gradient-to-br from-fuchsia-500/15 via-transparent to-cyan-500/10 blur-3xl dark:from-fuchsia-500/12"
      />
      <Container className="relative">
        <div className="mx-auto max-w-5xl text-center">
          {kicker ? (
            <span className={kickerPill + " " + transitionBase + " hover:border-indigo-300/80 hover:shadow-lg"}>{kicker}</span>
          ) : null}
          <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-balance text-slate-900 sm:text-5xl lg:text-[3.25rem] dark:text-white">
            {title}
          </h1>
          {description ? (
            <p className="mx-auto mt-5 max-w-4xl text-pretty text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-400">
              {description}
            </p>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
