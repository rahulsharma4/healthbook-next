"use client";

/**
 * Full-screen auth loading surface: session checks, sign-in/out, and redirects.
 * Uses Tailwind + globals `hb-loader-*` for smooth entrance transitions.
 */
export function AuthFullScreenLoader({
  open,
  title = "Loading",
  subtitle,
  tone = "light",
  zClass = "z-[210]",
}) {
  if (!open) return null;

  const dark = tone === "dark";

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={[
        "fixed inset-0 flex flex-col items-center justify-center overflow-hidden p-6",
        zClass,
        "hb-loader-backdrop transition-[background-color,backdrop-filter] duration-500 ease-out",
        dark
          ? "bg-slate-950/88 text-white backdrop-blur-xl supports-backdrop-filter:bg-slate-950/78"
          : "bg-background/93 text-foreground backdrop-blur-lg supports-backdrop-filter:bg-background/80 dark:bg-slate-950/90 dark:text-slate-100 dark:backdrop-blur-xl",
      ].join(" ")}
    >
      {/* Soft light orbs — slow pulse for depth */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className={[
            "absolute left-[-10%] top-[-18%] h-[min(72vh,560px)] w-[min(90vw,560px)] rounded-full blur-3xl motion-safe:animate-pulse",
            dark ? "bg-indigo-600/28" : "bg-indigo-500/14 dark:bg-indigo-500/22",
          ].join(" ")}
          style={{ animationDuration: "3.4s" }}
        />
        <div
          className={[
            "absolute right-[-8%] bottom-[-22%] h-[min(60vh,480px)] w-[min(85vw,480px)] rounded-full blur-3xl motion-safe:animate-pulse",
            dark ? "bg-violet-600/20" : "bg-cyan-500/10 dark:bg-violet-500/18",
          ].join(" ")}
          style={{ animationDuration: "4.1s", animationDelay: "0.4s" }}
        />
        <div
          className={[
            "absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl",
            dark ? "bg-indigo-400/10" : "bg-indigo-400/8 dark:bg-indigo-300/12",
          ].join(" ")}
        />
      </div>

      <div className="relative z-10 flex max-w-md flex-col items-center text-center hb-loader-content">
        {/* Dual-ring spinner — different speeds for a smooth, modern feel */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          <div
            className={[
              "absolute inset-0 rounded-full border-[3px] motion-safe:animate-spin",
              dark
                ? "border-white/10 border-t-indigo-300 border-r-violet-300/70"
                : "border-slate-200/90 border-t-indigo-600 border-r-violet-500/55 dark:border-slate-700 dark:border-t-indigo-400 dark:border-r-violet-400/60",
            ].join(" ")}
            style={{ animationDuration: "1.12s" }}
            aria-hidden
          />
          <div
            className={[
              "absolute inset-[11px] rounded-full border-2 border-transparent motion-safe:animate-spin",
              dark ? "border-b-fuchsia-400/70 border-l-indigo-200/35" : "border-b-indigo-500/65 border-l-violet-400/35 dark:border-b-indigo-300/70",
            ].join(" ")}
            style={{ animationDuration: "1.65s", animationDirection: "reverse" }}
            aria-hidden
          />
          <div
            className={[
              "h-2.5 w-2.5 rounded-full shadow-lg motion-safe:animate-pulse",
              dark
                ? "bg-linear-to-br from-indigo-200 to-violet-300 shadow-indigo-500/40"
                : "bg-linear-to-br from-indigo-500 to-violet-600 shadow-indigo-500/30 dark:from-indigo-300 dark:to-violet-400",
            ].join(" ")}
            style={{ animationDuration: "1.8s" }}
            aria-hidden
          />
        </div>

        <h2
          className={[
            "mt-10 font-heading text-lg font-semibold tracking-tight sm:text-xl",
            dark ? "text-white" : "text-slate-900 dark:text-white",
          ].join(" ")}
        >
          {title}
        </h2>
        {subtitle ? (
          <p
            className={[
              "mt-2 max-w-xs text-sm leading-relaxed sm:text-base",
              dark ? "text-slate-300" : "text-slate-600 dark:text-slate-400",
            ].join(" ")}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
