"use client";

import { useState } from "react";
import { Loader2, Send, Sparkles, MessageSquareHeart } from "lucide-react";

import { getContactSubmitErrorMessage, submitContactMessage } from "@/lib/contactApi";
import { btnGradient, input, transitionBase } from "@/lib/ui";

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
          : "Thanks — your message was received successfully by our clinical operations team.",
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
    <div className="relative overflow-hidden rounded-[2.5rem] border border-indigo-200/80 bg-white/95 p-8 sm:p-14 shadow-2xl shadow-indigo-500/15 backdrop-blur-3xl dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-black/60 mx-auto max-w-4xl mb-24 mt-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 -z-10 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/25 via-purple-500/15 to-cyan-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 -z-10 h-72 w-72 rounded-full bg-gradient-to-bl from-violet-500/20 via-pink-500/15 to-transparent blur-3xl"
      />

      <div className="relative z-10">
        <div className="flex items-center gap-3.5 mb-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30 animate-pulse font-bold">
            <MessageSquareHeart className="h-7 w-7" aria-hidden />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 uppercase tracking-widest border border-indigo-200 dark:border-indigo-800">Direct Delivery</span>
            </div>
            <h2 className="font-heading text-2xl font-black text-slate-900 dark:text-white mt-0.5">Send An Inbound Inquiry</h2>
          </div>
        </div>

        <p className="text-base font-medium leading-relaxed text-slate-600 dark:text-slate-300 pb-6 border-b border-indigo-100 dark:border-slate-800">
          We securely route all submissions directly to the HealthBook clinical and technical operations team. Typical response within 1–2 business days for general inquiries and partnerships.
        </p>

        <form className="mt-8 space-y-6" onSubmit={(e) => void onSubmit(e)} noValidate>
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block text-sm font-bold text-slate-800 dark:text-slate-200">
              Full name <span className="text-rose-500">*</span>
              <input
                className={"mt-2 font-medium px-4 py-3.5 rounded-2xl border border-slate-300/80 bg-slate-50/50 dark:bg-slate-950/60 dark:border-slate-700/80 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/15 w-full transition duration-200 " + (fieldErrors.name ? " border-rose-400 focus:border-rose-500 focus:ring-rose-500/20" : "")}
                name="name"
                autoComplete="name"
                placeholder="Dr. Alex Rivera"
                value={form.name}
                disabled={busy}
                required
                maxLength={LIMITS.name}
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
                onChange={(e) => update("name", e.target.value)}
              />
              {fieldErrors.name ? (
                <p id="contact-name-error" className="mt-1.5 text-xs font-bold text-rose-600 dark:text-rose-400">
                  {fieldErrors.name}
                </p>
              ) : null}
            </label>
            <label className="block text-sm font-bold text-slate-800 dark:text-slate-200">
              Email address <span className="text-rose-500">*</span>
              <input
                className={"mt-2 font-medium px-4 py-3.5 rounded-2xl border border-slate-300/80 bg-slate-50/50 dark:bg-slate-950/60 dark:border-slate-700/80 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/15 w-full transition duration-200 " + (fieldErrors.email ? " border-rose-400 focus:border-rose-500 focus:ring-rose-500/20" : "")}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@hospital.org"
                value={form.email}
                disabled={busy}
                required
                maxLength={LIMITS.email}
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
                onChange={(e) => update("email", e.target.value)}
              />
              {fieldErrors.email ? (
                <p id="contact-email-error" className="mt-1.5 text-xs font-bold text-rose-600 dark:text-rose-400">
                  {fieldErrors.email}
                </p>
              ) : null}
            </label>
          </div>

          <label className="block text-sm font-bold text-slate-800 dark:text-slate-200">
            Message <span className="text-rose-500">*</span>
            <textarea
              className={
                "mt-2 min-h-[160px] font-medium p-4 rounded-2xl border border-slate-300/80 bg-slate-50/50 dark:bg-slate-950/60 dark:border-slate-700/80 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/15 w-full transition duration-200 resize-y " +
                (fieldErrors.message ? " border-rose-400 focus:border-rose-500 focus:ring-rose-500/20" : "")
              }
              name="message"
              rows={6}
              placeholder="How can we help? Please describe your organization, specific clinical requirements, and any partnership or compliance targets."
              value={form.message}
              disabled={busy}
              required
              minLength={10}
              maxLength={LIMITS.message}
              aria-invalid={Boolean(fieldErrors.message)}
              aria-describedby={fieldErrors.message ? "contact-message-error contact-message-count" : "contact-message-count"}
              onChange={(e) => update("message", e.target.value)}
            />
            <div className="mt-1.5 flex justify-between gap-2 text-xs font-bold text-slate-500 dark:text-slate-500">
              {fieldErrors.message ? (
                <p id="contact-message-error" className="text-rose-600 dark:text-rose-400 font-extrabold">
                  {fieldErrors.message}
                </p>
              ) : (
                <span />
              )}
              <span id="contact-message-count" className="font-mono">
                {form.message.length.toLocaleString()} / {LIMITS.message.toLocaleString()} chars
              </span>
            </div>
          </label>

          {error ? (
            <p
              role="alert"
              className="rounded-2xl border border-rose-200/80 bg-rose-50 p-4 text-sm font-bold text-rose-800 dark:border-rose-500/30 dark:bg-rose-950/50 dark:text-rose-200 shadow-md"
            >
              {error}
            </p>
          ) : null}
          {success && status === "sent" ? (
            <p
              role="status"
              className="rounded-2xl border border-emerald-200/80 bg-emerald-50 p-4 text-sm font-bold text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-950/50 dark:text-emerald-100 shadow-md animate-bounce"
            >
              🎉 {success}
            </p>
          ) : null}

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              disabled={busy}
              className={
                btnGradient +
                " w-full justify-center gap-3 sm:w-auto px-10 py-4 text-base shadow-xl shadow-indigo-500/30 " +
                transitionBase +
                " font-extrabold transform hover:scale-105 disabled:pointer-events-none disabled:opacity-60 rounded-2xl"
              }
            >
              {busy ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                  <span>Securely Sending…</span>
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" aria-hidden />
                  <span>Send Secure Inquiry</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
