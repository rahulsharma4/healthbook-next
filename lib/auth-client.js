import { getApiBaseUrl } from "@/lib/env";

export class AuthRequestError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "AuthRequestError";
    this.status = status;
  }
}

async function parseJson(res) {
  const text = await res.text();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return {};
  }
}

export async function postAuthJson(path, body) {
  const base = getApiBaseUrl();
  const url = `${base}${path.startsWith("/") ? path : `/${path}`}`;
  const res = await fetch(url, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await parseJson(res);
  if (!res.ok) {
    const msg = typeof data?.message === "string" && data.message ? data.message : `Request failed (${res.status})`;
    throw new AuthRequestError(msg, res.status);
  }
  return data;
}

export async function loginRequest(identifier, password) {
  return postAuthJson("/auth/login", { identifier: identifier.trim(), password });
}

export async function signupRequest(payload) {
  return postAuthJson("/auth/signup", payload);
}

export async function verifyMfaRequest({ mfaToken, otp }) {
  return postAuthJson("/auth/mfa/verify", { mfaToken, otp });
}
