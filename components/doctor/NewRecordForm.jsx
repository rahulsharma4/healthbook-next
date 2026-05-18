"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { getPublicApiBase } from "@/lib/publicApiBase";

function emptyMed() {
  return {
    name: "",
    dosageForm: "tablet",
    strength: "",
    route: "oral",
    dosage: "",
    frequency: "",
    timing: "",
    withFood: "",
    totalQuantity: "",
    refills: 0,
    prn: false,
    prnReason: "",
    prnMaxPerDay: 0,
    prnMinGapHours: 0,
    prnMaxDailyDose: "",
    duration: "",
    notes: "",
  };
}

export function NewRecordForm({ patientId }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [err, setErr] = useState("");
  const [ok, setOk] = useState("");

  const [diagnosis, setDiagnosis] = useState("");
  const [diagnosisIcd, setDiagnosisIcd] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [tests, setTests] = useState("");
  const [allergies, setAllergies] = useState("");
  const [warnings, setWarnings] = useState("");
  const [notes, setNotes] = useState("");
  const [visitType, setVisitType] = useState("in_person");
  const [severity, setSeverity] = useState("low");
  const [followUpDate, setFollowUpDate] = useState("");
  const [vitals, setVitals] = useState({
    bpSystolic: "",
    bpDiastolic: "",
    sugarMgDl: "",
    pulseBpm: "",
    temperatureC: "",
    spo2Percent: "",
  });
  const [meds, setMeds] = useState([emptyMed()]);
  const [files, setFiles] = useState([]);

  const addMed = () => setMeds((m) => [...m, emptyMed()]);
  const removeMed = (idx) => setMeds((m) => m.filter((_, i) => i !== idx));
  const setMed = (idx, patch) => setMeds((m) => m.map((row, i) => (i === idx ? { ...row, ...patch } : row)));

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setOk("");

    const pid = String(patientId || "").trim();
    if (!pid) return setErr("Missing patientId");
    if (!diagnosis.trim()) return setErr("Diagnosis is required");

    const medicines = meds
      .map((m) => ({
        name: String(m.name || "").trim(),
        dosageForm: String(m.dosageForm || "").trim(),
        strength: String(m.strength || "").trim(),
        route: String(m.route || "").trim(),
        dosage: String(m.dosage || "").trim(),
        frequency: String(m.frequency || "").trim(),
        timing: String(m.timing || "").trim(),
        withFood: String(m.withFood || "").trim(),
        totalQuantity: String(m.totalQuantity || "").trim(),
        refills: m.refills === "" || m.refills == null ? 0 : Math.max(0, Math.floor(Number(m.refills)) || 0),
        prn: Boolean(m.prn),
        prnReason: String(m.prnReason || "").trim(),
        prnMaxPerDay:
          m.prnMaxPerDay === "" || m.prnMaxPerDay == null ? 0 : Math.max(0, Math.floor(Number(m.prnMaxPerDay)) || 0),
        prnMinGapHours:
          m.prnMinGapHours === "" || m.prnMinGapHours == null ? 0 : Math.max(0, Math.floor(Number(m.prnMinGapHours)) || 0),
        prnMaxDailyDose: String(m.prnMaxDailyDose || "").trim(),
        duration: String(m.duration || "").trim(),
        notes: String(m.notes || "").trim(),
      }))
      .filter((m) => m.name);

    const fd = new FormData();
    fd.append("patientId", pid);
    fd.append("diagnosis", diagnosis.trim());
    if (diagnosisIcd.trim()) fd.append("diagnosisIcd", diagnosisIcd.trim());
    if (symptoms.trim()) fd.append("symptoms", symptoms.trim());
    if (tests.trim()) fd.append("tests", tests.trim());
    if (allergies.trim()) fd.append("allergies", allergies.trim());
    if (warnings.trim()) fd.append("warnings", warnings.trim());
    if (notes.trim()) fd.append("notes", notes.trim());
    fd.append("visitType", visitType);
    fd.append("severity", severity);
    fd.append("medicines", JSON.stringify(medicines));
    if (followUpDate) fd.append("followUpDate", followUpDate);
    fd.append("vitals", JSON.stringify(vitals));
    for (const f of files) fd.append("files", f);

    const apiBase = getPublicApiBase();
    const res = await fetch(`${apiBase}/records`, {
      method: "POST",
      credentials: "include",
      body: fd,
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      setErr(text || `Failed (${res.status})`);
      return;
    }

    setOk("Record created.");
    startTransition(() => router.push("/dashboard/doctor/patients"));
  };

  return (
    <form onSubmit={submit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900/30">
      {err ? <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">{err}</div> : null}
      {ok ? <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">{ok}</div> : null}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block">
          <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">Visit type</div>
          <select value={visitType} onChange={(e) => setVisitType(e.target.value)} className="mt-1 h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white">
            <option value="in_person">In-person</option>
            <option value="online">Online</option>
          </select>
        </label>
        <label className="block">
          <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">Severity</div>
          <select value={severity} onChange={(e) => setSeverity(e.target.value)} className="mt-1 h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>
        </label>
      </div>

      <label className="block">
        <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">Diagnosis *</div>
        <input value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} className="mt-1 h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-950/30 dark:text-white" />
      </label>

      <label className="block">
        <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">ICD codes (optional)</div>
        <input value={diagnosisIcd} onChange={(e) => setDiagnosisIcd(e.target.value)} className="mt-1 h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white" placeholder="e.g. J02.9" />
      </label>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block">
          <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">Symptoms (optional)</div>
          <textarea value={symptoms} onChange={(e) => setSymptoms(e.target.value)} rows={3} className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white" />
        </label>
        <label className="block">
          <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">Tests (optional)</div>
          <textarea value={tests} onChange={(e) => setTests(e.target.value)} rows={3} className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white" />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block">
          <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">Allergies (optional)</div>
          <input value={allergies} onChange={(e) => setAllergies(e.target.value)} className="mt-1 h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white" placeholder="e.g. Penicillin" />
        </label>
        <label className="block">
          <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">Warnings/Advice (optional)</div>
          <input value={warnings} onChange={(e) => setWarnings(e.target.value)} className="mt-1 h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white" placeholder="e.g. avoid driving if drowsy" />
        </label>
      </div>

      <label className="block">
        <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">Notes (optional)</div>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white" />
      </label>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block">
          <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">Follow-up date (optional)</div>
          <input type="date" value={followUpDate} onChange={(e) => setFollowUpDate(e.target.value)} className="mt-1 h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white" />
        </label>
        <label className="block">
          <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">Attachments (optional)</div>
          <input
            type="file"
            multiple
            onChange={(e) => setFiles(Array.from(e.target.files || []))}
            className="mt-1 block w-full text-sm"
          />
          <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Up to 5 files; images/pdf only.</div>
        </label>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-950/20">
        <div className="text-sm font-semibold text-slate-900 dark:text-white">Vitals (optional)</div>
        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {[
            ["bpSystolic", "BP systolic"],
            ["bpDiastolic", "BP diastolic"],
            ["sugarMgDl", "Sugar mg/dL"],
            ["pulseBpm", "Pulse bpm"],
            ["temperatureC", "Temp °C"],
            ["spo2Percent", "SpO₂ %"],
          ].map(([k, label]) => (
            <input
              key={k}
              value={String(vitals[k] ?? "")}
              onChange={(e) => setVitals((v) => ({ ...v, [k]: e.target.value }))}
              placeholder={label}
              className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white"
            />
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-slate-900 dark:text-white">Medicines</div>
          <button type="button" onClick={addMed} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/30 dark:text-slate-200">
            Add medicine
          </button>
        </div>
        {meds.map((m, idx) => (
          <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-950/20">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <input value={m.name} onChange={(e) => setMed(idx, { name: e.target.value })} placeholder="Name *" className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white" />
              <input value={m.strength} onChange={(e) => setMed(idx, { strength: e.target.value })} placeholder="Strength (e.g. 500 mg)" className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white" />
              <input value={m.dosage} onChange={(e) => setMed(idx, { dosage: e.target.value })} placeholder="Dosage (e.g. 1 tab)" className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white" />
            </div>

            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-4">
              <select value={m.dosageForm} onChange={(e) => setMed(idx, { dosageForm: e.target.value })} className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white">
                <option value="tablet">Tablet</option>
                <option value="capsule">Capsule</option>
                <option value="syrup">Syrup</option>
                <option value="injection">Injection</option>
                <option value="drops">Drops</option>
              </select>
              <select value={m.route} onChange={(e) => setMed(idx, { route: e.target.value })} className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white">
                <option value="oral">Oral</option>
                <option value="topical">Topical</option>
                <option value="inhalation">Inhalation</option>
                <option value="iv">IV</option>
              </select>
              <input value={m.frequency} onChange={(e) => setMed(idx, { frequency: e.target.value })} placeholder="Frequency (e.g. 1-0-1)" className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white" />
              <input value={m.timing} onChange={(e) => setMed(idx, { timing: e.target.value })} placeholder="Timing (e.g. morning,night)" className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white" />
            </div>

            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-4">
              <select value={m.withFood} onChange={(e) => setMed(idx, { withFood: e.target.value })} className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white">
                <option value="">Food: —</option>
                <option value="after_food">After food</option>
                <option value="before_food">Before food</option>
                <option value="with_food">With food</option>
                <option value="empty_stomach">Empty stomach</option>
              </select>
              <input value={m.totalQuantity} onChange={(e) => setMed(idx, { totalQuantity: e.target.value })} placeholder="Total qty (e.g. 10 tablets)" className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white" />
              <input value={String(m.refills ?? 0)} onChange={(e) => setMed(idx, { refills: e.target.value })} placeholder="Refills" className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white" />
              <input value={m.duration} onChange={(e) => setMed(idx, { duration: e.target.value })} placeholder="Duration (e.g. 5 days)" className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white" />
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                <input type="checkbox" checked={Boolean(m.prn)} onChange={(e) => setMed(idx, { prn: e.target.checked })} />
                PRN (as needed)
              </label>
              {meds.length > 1 ? (
                <button type="button" onClick={() => removeMed(idx)} className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-700 hover:bg-rose-100">
                  Remove
                </button>
              ) : null}
            </div>

            {m.prn ? (
              <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-4">
                <input value={m.prnReason} onChange={(e) => setMed(idx, { prnReason: e.target.value })} placeholder="PRN reason" className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white" />
                <input value={String(m.prnMaxPerDay ?? 0)} onChange={(e) => setMed(idx, { prnMaxPerDay: e.target.value })} placeholder="Max per day" className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white" />
                <input value={String(m.prnMinGapHours ?? 0)} onChange={(e) => setMed(idx, { prnMinGapHours: e.target.value })} placeholder="Min gap (hours)" className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white" />
                <input value={m.prnMaxDailyDose} onChange={(e) => setMed(idx, { prnMaxDailyDose: e.target.value })} placeholder="Max daily dose (e.g. 2000 mg)" className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white" />
              </div>
            ) : null}

            <div className="mt-2">
              <textarea value={m.notes} onChange={(e) => setMed(idx, { notes: e.target.value })} rows={2} placeholder="Medicine notes (optional)" className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950/30 dark:text-white" />
            </div>
          </div>
        ))}
        <div className="text-[11px] text-slate-500 dark:text-slate-400">
          This Next.js form now supports advanced prescription fields (PRN, strength, dosage form, refills, total quantity, allergies/warnings, vitals, attachments).
        </div>
      </div>

      <div className="pt-2">
        <button type="submit" disabled={pending} className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-60">
          Create record
        </button>
      </div>
    </form>
  );
}

