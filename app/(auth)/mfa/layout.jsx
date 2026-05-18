import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/mfa",
  title: "Verify sign-in",
  description: "Complete two-step verification to finish signing in to your HealthBook account.",
  robots: { index: false, follow: true },
});

export default function MfaLayout({ children }) {
  return children;
}
