import { Sparkles } from "lucide-react";
import { Container } from "@/components/Container";
import { transitionBase } from "@/lib/ui";

export function MarketingPageHeader({ kicker, title, description, className = "" }) {
  return (
    <div className={"relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20 " + className}>
      {/* Exquisite Ambient Light Orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.25),transparent_65%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(129,140,248,0.22),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 bg-gradient-to-br from-indigo-500/30 via-purple-500/25 to-pink-500/30 blur-[120px] rounded-full"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[10%] top-10 -z-10 h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-500/20 via-transparent to-fuchsia-500/20 blur-[100px]"
      />
      
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {kicker ? (
            <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-black uppercase tracking-widest text-indigo-700 bg-indigo-50/90 border border-indigo-200/80 shadow-md backdrop-blur-md dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800 mb-6">
              <Sparkles className="h-4 w-4 text-indigo-600 animate-spin dark:text-indigo-400" style={{ animationDuration: "6s" }} />
              <span>{kicker}</span>
            </div>
          ) : null}
          <h1 className="font-heading text-4xl font-black tracking-tight text-balance text-slate-900 sm:text-6xl lg:text-7xl dark:text-white drop-shadow-sm">
            {title}
          </h1>
          {description ? (
            <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg font-medium leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
              {description}
            </p>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
