import { Container } from "@/components/Container";
import { transitionBase } from "@/lib/ui";

export function MarketingArticle({ kicker, title, subtitle, children }) {
  return (
    <article className="relative py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(ellipse_70%_80%_at_50%_0%,rgba(99,102,241,0.12),transparent_65%)] dark:bg-[radial-gradient(ellipse_70%_80%_at_50%_0%,rgba(129,140,248,0.1),transparent_65%)]"
      />
      <Container>
        <header className="mx-auto max-w-5xl text-center">
          {kicker ? (
            <p
              className={
                "inline-flex rounded-full border border-indigo-200/70 bg-white/75 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 shadow-sm backdrop-blur-md dark:border-indigo-500/35 dark:bg-slate-900/55 dark:text-indigo-300 " +
                transitionBase
              }
            >
              {kicker}
            </p>
          ) : null}
          <h1 className="mt-5 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem] dark:text-white">
            {title}
          </h1>
          {subtitle ? (
            <p className="mx-auto mt-4 max-w-4xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
              {subtitle}
            </p>
          ) : null}
        </header>

        <div
          className={
            "mx-auto mt-12 max-w-5xl rounded-[1.35rem] border border-slate-200/75 bg-[var(--hb-glass)] p-8 shadow-[var(--hb-shadow-card)] backdrop-blur-2xl sm:p-12 lg:p-14 dark:border-slate-800/85 dark:bg-slate-950/55 " +
            transitionBase +
            " hover:shadow-[var(--hb-shadow-hover)]"
          }
        >
          <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 [&_a]:font-semibold [&_a]:text-indigo-600 [&_a]:underline-offset-2 hover:[&_a]:text-indigo-500 dark:[&_a]:text-indigo-400 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 dark:[&_h2]:text-white [&_li]:mt-2 [&_p]:first:mt-0 [&_p]:mt-4 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
            {children}
          </div>
        </div>
      </Container>
    </article>
  );
}
