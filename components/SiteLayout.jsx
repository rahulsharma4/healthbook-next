import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeaderGate } from "@/components/SiteHeaderGate";

export function SiteLayout({ children }) {
  return (
    <div className="relative flex min-h-full flex-col bg-gradient-to-b from-white via-slate-50/40 to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <SiteHeaderGate />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
