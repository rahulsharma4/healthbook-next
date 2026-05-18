"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { getPublicApiBase } from "@/lib/publicApiBase";

function can(action, status) {
  const st = String(status || "");
  if (action === "confirm") return st === "pending";
  if (action === "reject") return st === "pending";
  if (action === "checked_in") return st === "confirmed";
  if (action === "in_progress") return st === "confirmed" || st === "checked_in";
  if (action === "completed") return st === "confirmed" || st === "checked_in" || st === "in_progress";
  if (action === "no_show") return st === "confirmed" || st === "checked_in";
  return false;
}

export function AppointmentStatusActions({ appointmentId, status }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [err, setErr] = useState("");

  const actions = useMemo(
    () => [
      { key: "confirm", label: "Confirm", nextStatus: "confirmed" },
      { key: "reject", label: "Reject", nextStatus: "rejected" },
      { key: "checked_in", label: "Mark checked-in", nextStatus: "checked_in" },
      { key: "in_progress", label: "In progress", nextStatus: "in_progress" },
      { key: "completed", label: "Complete", nextStatus: "completed" },
      { key: "no_show", label: "No-show", nextStatus: "no_show" },
    ],
    [],
  );

  const run = async (nextStatus) => {
    setErr("");
    const id = String(appointmentId || "");
    if (!id) return;

    let reason = "";
    let meetingLink = "";
    if (nextStatus === "rejected") {
      reason = window.prompt("Reject reason (optional):", "") || "";
    }
    if (nextStatus === "confirmed") {
      meetingLink = window.prompt("Meeting link (optional for online):", "") || "";
    }

    const apiBase = getPublicApiBase();
    const url = `${apiBase}/appointments/${encodeURIComponent(id)}/status`;
    const res = await fetch(url, {
      method: "PATCH",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: nextStatus, ...(reason ? { reason } : {}), ...(meetingLink ? { meetingLink } : {}) }),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      setErr(text || `Failed (${res.status})`);
      return;
    }
    startTransition(() => router.refresh());
  };

  return (
    <div className="mt-3 space-y-2">
      <div className="flex flex-wrap gap-2">
        {actions
          .filter((a) => can(a.key, status))
          .map((a) => (
            <button
              key={a.key}
              type="button"
              disabled={pending}
              onClick={() => run(a.nextStatus)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900/30 dark:text-slate-200 dark:hover:bg-slate-800/60"
            >
              {a.label}
            </button>
          ))}
      </div>
      {err ? (
        <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs text-rose-700">
          {err}
        </div>
      ) : null}
    </div>
  );
}

