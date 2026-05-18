import { cardElevated } from "@/lib/ui";
import { cn } from "@/lib/utils";

export function AuthPanel({ title, subtitle, children, footer }) {
  return (
    <div className={cn(cardElevated, "w-full max-w-md")}>
      <div className="text-center">
        <h1 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h1>
        {subtitle ? <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{subtitle}</p> : null}
      </div>
      <div className="mt-8">{children}</div>
      {footer ? (
        <div className="mt-8 border-t border-slate-100/90 pt-6 text-center dark:border-slate-800/90">{footer}</div>
      ) : null}
    </div>
  );
}
