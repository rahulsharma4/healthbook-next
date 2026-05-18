/** Shared Tailwind class strings — premium SaaS surface kit for HealthBook Next site. */

export const transitionBase = "transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]";

/** Primary gradient CTA — purple → blue */
export const btnGradient =
  "inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 px-5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 ring-1 ring-white/20 " +
  transitionBase +
  " hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 hover:brightness-[1.05] active:translate-y-0 active:brightness-100 disabled:pointer-events-none disabled:opacity-55 disabled:shadow-none disabled:hover:translate-y-0";

/** Secondary / ghost button */
export const btnGhost =
  "inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200/90 bg-white/90 px-5 text-sm font-semibold text-slate-800 shadow-sm " +
  transitionBase +
  " hover:-translate-y-0.5 hover:border-indigo-300/90 hover:bg-white hover:shadow-md hover:ring-1 hover:ring-indigo-200/50 dark:border-slate-600 dark:bg-slate-900/85 dark:text-slate-100 dark:hover:border-indigo-500/40 dark:hover:ring-indigo-500/20";

/** Form controls */
export const input =
  "w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none " +
  transitionBase +
  " placeholder:text-slate-400 focus:border-indigo-500 focus:shadow-md focus:shadow-indigo-500/10 focus:ring-4 focus:ring-indigo-500/15 disabled:cursor-not-allowed disabled:opacity-55 dark:border-slate-700 dark:bg-slate-950/90 dark:text-white";

/** Marketing / auth elevated cards */
export const cardElevated =
  "rounded-3xl border border-slate-200/85 bg-white/92 p-8 shadow-[0_24px_60px_-14px_rgba(15,23,42,0.12)] backdrop-blur-md " +
  transitionBase +
  " hover:border-indigo-200/70 hover:shadow-[0_28px_64px_-14px_rgba(79,70,229,0.14)] dark:border-slate-700/90 dark:bg-slate-900/88 dark:shadow-black/40 dark:hover:border-indigo-500/25";

/** Feature / testimonial tiles */
export const cardInteractive =
  "rounded-3xl border border-slate-200/75 bg-[var(--hb-glass)] p-8 shadow-[var(--hb-shadow-card)] backdrop-blur-xl " +
  transitionBase +
  " hover:-translate-y-1 hover:border-indigo-200/55 hover:shadow-[var(--hb-shadow-hover)] dark:border-slate-800/90 dark:bg-slate-950/55 dark:shadow-black/45 dark:hover:border-indigo-500/35";

/** Glass panel — hero stats, overlays */
export const glassPanel =
  "rounded-2xl border border-[var(--hb-glass-border)] bg-[var(--hb-glass)] shadow-[var(--hb-shadow-soft)] backdrop-blur-2xl";

/** Pill badge / kicker */
export const kickerPill =
  "inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 shadow-[0_8px_30px_-8px_rgba(79,70,229,0.35)] backdrop-blur-md dark:border-indigo-500/35 dark:bg-slate-900/55 dark:text-indigo-200";

/** Section kicker label */
export const eyebrow =
  "text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400";

/** Inset panel (auth sub-forms) */
export const panelInset =
  "space-y-4 rounded-2xl border border-slate-200/70 bg-slate-50/90 p-4 shadow-inner shadow-slate-900/[0.03] dark:border-slate-700/80 dark:bg-slate-900/55";
