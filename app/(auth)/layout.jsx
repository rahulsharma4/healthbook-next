import Link from "next/link";

import { GuestGuard } from "@/components/GuestGuard";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Account",
  description: "Sign in, register, or verify your HealthBook account.",
  robots: { index: false, follow: true },
};

export default function AuthLayout({ children }) {
  return (
    <GuestGuard>
      <div className="relative min-h-full">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-15%,rgba(99,102,241,0.2),transparent)] dark:bg-[radial-gradient(ellipse_90%_55%_at_50%_-15%,rgba(129,140,248,0.14),transparent)]"
        />
        <div className="relative px-4 py-8 sm:py-14">
          <Container className="max-w-xl">
            <Link
              href="/"
              className="text-sm font-semibold text-slate-600 transition duration-300 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
            >
              ← Back to HealthBook
            </Link>
            <div className="mx-auto mt-8 w-full sm:mt-10">{children}</div>
          </Container>
        </div>
      </div>
    </GuestGuard>
  );
}
