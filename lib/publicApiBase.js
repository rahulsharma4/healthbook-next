export function getPublicApiBase() {
  const raw = process.env.NEXT_PUBLIC_API_BASE_URL || "/api/v1";
  return String(raw).replace(/\/+$/, "") || "/api/v1";
}

