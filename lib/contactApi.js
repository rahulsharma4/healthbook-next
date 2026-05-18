import { getApiBaseUrl } from "@/lib/env";

/**
 * @param {{ name: string; email: string; message: string }} payload
 * @returns {Promise<{ success: boolean; message?: string; id?: string }>}
 */
export async function submitContactMessage(payload) {
  const url = `${getApiBaseUrl()}/contact`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: payload.name.trim(),
      email: payload.email.trim(),
      message: payload.message.trim(),
    }),
  });

  let data = {};
  try {
    data = await res.json();
  } catch {
    /* ignore */
  }

  if (!res.ok) {
    const err = new Error(
      typeof data.message === "string" && data.message.trim() ? data.message.trim() : "Request failed",
    );
    err.status = res.status;
    err.details = data.details;
    err.body = data;
    throw err;
  }

  return data;
}

/**
 * @param {unknown} err
 * @param {number} [status]
 */
export function getContactSubmitErrorMessage(err, status) {
  const s = status ?? err?.status;
  const details = err?.details;
  if (details && typeof details === "object" && details.fields && typeof details.fields === "object") {
    const fields = details.fields;
    const parts = Object.entries(fields)
      .map(([key, val]) => `${key}: ${val}`)
      .filter(Boolean);
    if (parts.length) return parts.join(" · ");
  }
  if (typeof err?.message === "string" && err.message.trim()) return err.message.trim();
  if (s === 429) return "Too many submissions from this network. Please try again in a few minutes.";
  if (s === 0 || s == null) return "Cannot reach the server. Check that the API is running and CORS allows this site.";
  return "Something went wrong. Please try again.";
}
