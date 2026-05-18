"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";

import { getContactSubmitErrorMessage, submitContactMessage } from "@/lib/contactApi";
import { btnGradient, glassPanel, input, transitionBase } from "@/lib/ui";

const initial = { name: "", email: "", message: "" };

const LIMITS = { name: 200, email: 254, message: 10_000 };

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateFields(form) {
  const name = form.name.trim();
  const email = form.email.trim();
  const message = form.message.trim();
  /** @type {Record<string, string>} */
  const fields = {};

  if (!name) fields.name = "Please enter your name.";
  else if (name.length > LIMITS.name) fields.name = `Name must be at most ${LIMITS.name} characters.`;

  if (!email) fields.email = "Please enter your email.";
  else if (email.length > LIMITS.email) fields.email = `Email must be at most ${LIMITS.email} characters.`;
  else if (!emailRe.test(email)) fields.email = "Please enter a valid email address.";

  if (!message) fields.message = "Please enter a message.";
  else if (message.length < 10) fields.message = "Message should be at least 10 characters so we can help.";
  else if (message.length > LIMITS.message) fields.message = `Message must be at most ${LIMITS.message.toLocaleString()} characters.`;

  return { fields, ok: Object.keys(fields).length === 0 };
}

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [success, setSuccess] = useState("");

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    setError("");
    setSuccess("");
    setFieldErrors((e) => ({ ...e, [field]: undefined }));
    if (status === "sent") setStatus("idle");
  }

  async function onSubmit(e) {
    e.preventDefault();
    const { fields, ok } = validateFields(form);
    setFieldErrors(fields);
    if (!ok) {
      setError("Please fix the highlighted fields.");
      return;
    }
    setStatus("sending");
    setError("");
    setSuccess("");
    setFieldErrors({});
    try {
      const data = await submitContactMessage(form);
      setForm(initial);
      setStatus("sent");
      setSuccess(
        typeof data?.message === "string" && data.message.trim()
          ? data.message.trim()
          : "Thanks — your message was received.",
      );
    } catch (err) {
      setStatus("idle");
      const apiFields = err?.details?.fields ?? err?.body?.details?.fields;
      if (apiFields && typeof apiFields === "object") {
        setFieldErrors(
          Object.fromEntries(
            Object.entries(apiFields).map(([k, v]) => [k, typeof v === "string" ? v : String(v)]),
          ),
        );
      }
      if (err instanceof TypeError) {
        setError(getContactSubmitErrorMessage(null, undefined));
        return;
      }
      setError(getContactSubmitErrorMessage(err, err?.status));
    }
  }

  const busy = status === "sending";

  return (
    <div className={glassPanel + " relative overflow-hidden p-8 sm:p-10"}>
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 -z-10 h-56 w-56 rounded-full bg-gradient-to-tr from-indigo-500/20 via-transparent to-cyan-500/15 blur-3xl"
      />
      <div className="relative">
        <h2 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">Send a message</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          We route submissions to the HealthBook team. Typical response within one to two business days for general inquiries.
        </p>

        <form className="mt-8 space-y-5" onSubmit={(e) => void onSubmit(e)} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Full name
              <input
                className={"mt-2 " + input + (fieldErrors.name ? " border-rose-400 focus:border-rose-500 focus:ring-rose-500/20" : "")}
                name="name"
                autoComplete="name"
                placeholder="Alex Rivera"
                value={form.name}
                disabled={busy}
                required
                maxLength={LIMITS.name}
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
                onChange={(e) => update("name", e.target.value)}
              />
              {fieldErrors.name ? (
                <p id="contact-name-error" className="mt-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                  {fieldErrors.name}
                </p>
              ) : null}
            </label>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Email
              <input
                className={"mt-2 " + input + (fieldErrors.email ? " border-rose-400 focus:border-rose-500 focus:ring-rose-500/20" : "")}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@organization.com"
                value={form.email}
                disabled={busy}
                required
                maxLength={LIMITS.email}
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
                onChange={(e) => update("email", e.target.value)}
              />
              {fieldErrors.email ? (
                <p id="contact-email-error" className="mt-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                  {fieldErrors.email}
                </p>
              ) : null}
            </label>
          </div>

          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Message
            <textarea
              className={
                "mt-2 min-h-[140px] resize-y " +
                input +
                (fieldErrors.message ? " border-rose-400 focus:border-rose-500 focus:ring-rose-500/20" : "")
              }
              name="message"
              rows={5}
              placeholder="How can we help? Mention your organization, role, and any timelines."
              value={form.message}
              disabled={busy}
              required
              minLength={10}
              maxLength={LIMITS.message}
              aria-invalid={Boolean(fieldErrors.message)}
              aria-describedby={fieldErrors.message ? "contact-message-error contact-message-count" : "contact-message-count"}
              onChange={(e) => update("message", e.target.value)}
            />
            <div className="mt-1 flex justify-between gap-2 text-xs text-slate-500 dark:text-slate-500">
              {fieldErrors.message ? (
                <p id="contact-message-error" className="font-medium text-rose-600 dark:text-rose-400">
                  {fieldErrors.message}
                </p>
              ) : (
                <span />
              )}
              <span id="contact-message-count">
                {form.message.length.toLocaleString()} / {LIMITS.message.toLocaleString()}
              </span>
            </div>
          </label>

          {error ? (
            <p
              role="alert"
              className="rounded-xl border border-rose-200/80 bg-rose-50/90 px-4 py-3 text-sm font-medium text-rose-800 dark:border-rose-500/30 dark:bg-rose-950/40 dark:text-rose-200"
            >
              {error}
            </p>
          ) : null}
          {success && status === "sent" ? (
            <p
              role="status"
              className="rounded-xl border border-emerald-200/80 bg-emerald-50/90 px-4 py-3 text-sm font-medium text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-950/40 dark:text-emerald-100"
            >
              {success}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={busy}
            className={
              btnGradient +
              " w-full justify-center gap-2 sm:w-auto " +
              transitionBase +
              " disabled:pointer-events-none disabled:opacity-60"
            }
          >
            {busy ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                Sending…
              </>
            ) : (
              <>
                <Send className="h-4 w-4" aria-hidden />
                Send message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
