import { AuthFullScreenLoader } from "@/components/auth/AuthFullScreenLoader";

/** Session / gate checks on light app shell (marketing + private layouts). */
export function SessionLoader({ label = "Checking your session…", subtitle = "Hang tight — we’re almost there." }) {
  return (
    <AuthFullScreenLoader open title={label} subtitle={subtitle} tone="light" zClass="z-100" />
  );
}
