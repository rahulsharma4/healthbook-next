import { LoginForm } from "@/components/auth/LoginForm";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/login",
  title: "Login",
  description:
    "Sign in to HealthBook with your secure account — access appointments, records, and messaging across patient and clinician experiences.",
  keywords: ["HealthBook login", "patient sign in", "doctor login"],
});

export default function LoginPage() {
  return <LoginForm />;
}
