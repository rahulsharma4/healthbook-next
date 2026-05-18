"use client";

import { usePathname } from "next/navigation";

import { SiteHeader } from "@/components/SiteHeader";

/** Remount header on route change so mobile menu closes without a synchronous setState-in-effect. */
export function SiteHeaderGate() {
  const pathname = usePathname();
  return <SiteHeader key={pathname} />;
}
