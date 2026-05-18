import { RegisterForm } from "@/components/auth/RegisterForm";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/register",
  title: "Register",
  description:
    "Create your HealthBook account as a patient or clinician — structured onboarding designed for safer, smoother care journeys.",
  keywords: ["HealthBook signup", "register patient", "register doctor", "create account"],
});

export default function RegisterPage() {
  return <RegisterForm />;
}
