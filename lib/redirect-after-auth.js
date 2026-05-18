import { getAdminAppUrl, getUserAppUrl } from "@/lib/env";
import { getTrustedReturnUrl } from "@/lib/post-login-return";

const KNOWN_ROLES = new Set(["patient", "doctor", "admin"]);

/**
 * Resolves where to send the user after login/register from `user.role`.
 * If `fromParam` is a trusted URL (same Next app or allowed Vite origin for that role), it wins.
 * Otherwise: patient/doctor → user app origin; admin → admin app origin.
 *
 * @returns {{ ok: true, url: string, message: string } | { ok: false, error: string, fallbackUrl: string, fallbackLabel: string }}
 */
export function resolvePostAuthRedirect(user, fromParam) {
  const roleRaw = user?.role;
  const role = String(roleRaw ?? "").trim().toLowerCase();

  const userApp = getUserAppUrl();
  const adminApp = getAdminAppUrl();
  const userOrigin = `${userApp}/`;
  const adminOrigin = `${adminApp}/`;

  if (roleRaw == null || String(roleRaw).trim() === "" || !KNOWN_ROLES.has(role)) {
    return {
      ok: false,
      error:
        "Your account role could not be determined, so we cannot open the correct portal. Please contact support or try signing in again.",
      fallbackUrl: userOrigin,
      fallbackLabel: "Open user portal",
    };
  }

  const remembered = getTrustedReturnUrl(fromParam, role);
  if (remembered) {
    return {
      ok: true,
      url: remembered,
      message: "Taking you back…",
    };
  }

  switch (role) {
    case "admin":
      return {
        ok: true,
        url: adminOrigin,
        message: "Opening admin console…",
      };
    case "doctor":
      return {
        ok: true,
        url: userOrigin,
        message: "Opening doctor portal…",
      };
    case "patient":
      return {
        ok: true,
        url: userOrigin,
        message: "Opening your dashboard…",
      };
    default:
      return {
        ok: false,
        error: "Unsupported account role for this sign-in flow.",
        fallbackUrl: userOrigin,
        fallbackLabel: "Open user portal",
      };
  }
}
