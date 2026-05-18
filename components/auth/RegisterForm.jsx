"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { AuthFullScreenLoader } from "@/components/auth/AuthFullScreenLoader";
import { AuthRedirectOverlay } from "@/components/auth/AuthRedirectOverlay";
import { AuthPanel } from "@/components/auth/AuthPanel";
import { AuthRequestError, signupRequest } from "@/lib/auth-client";
import { usePostAuthRedirect } from "@/hooks/usePostAuthRedirect";
import { btnGradient, input, panelInset, transitionBase } from "@/lib/ui";

const GENDERS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
  { value: "prefer_not_to_say", label: "Prefer not to say" },
];

const roleBtnActive =
  "border-indigo-500 bg-gradient-to-br from-indigo-50 to-violet-50 text-indigo-900 shadow-md shadow-indigo-500/15 ring-1 ring-indigo-500/20 dark:border-indigo-400 dark:from-indigo-950/70 dark:to-violet-950/50 dark:text-indigo-100";
const roleBtnIdle =
  "border-slate-200/90 bg-white text-slate-700 hover:border-indigo-200 hover:bg-slate-50/90 hover:shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-500/30";

function clampInt(raw, { min, max }) {
  const v = Math.floor(Number(raw));
  if (!Number.isFinite(v)) return null;
  if (v < min || v > max) return null;
  return v;
}

function computeAgeFromDob(dob) {
  if (!dob) return null;
  const d = new Date(String(dob));
  if (Number.isNaN(d.getTime())) return null;
  const now = new Date();
  if (d > now) return null;
  const diff = now.getTime() - d.getTime();
  const yr = 1000 * 60 * 60 * 24 * 365.25;
  return Math.max(0, Math.floor(diff / yr));
}

function onlyDigits(s) {
  return String(s || "").replace(/\D/g, "");
}

function normalizeIndiaMobileForUi(raw) {
  const d = onlyDigits(raw);
  if (!d) return "";
  // Keep last 10 digits if user typed country code.
  if (d.length > 10) return d.slice(-10);
  return d;
}

function StepDots({ steps, current }) {
  return (
    <div className="flex items-center gap-2">
      {steps.map((s, idx) => {
        const active = idx === current;
        const done = idx < current;
        return (
          <div key={s.key} className="flex items-center gap-2">
            <div
              className={[
                "h-2.5 w-2.5 rounded-full transition",
                done ? "bg-indigo-600" : active ? "bg-indigo-500" : "bg-slate-200 dark:bg-slate-700",
              ].join(" ")}
            />
            {idx < steps.length - 1 ? <div className="h-px w-8 bg-slate-200 dark:bg-slate-700" /> : null}
          </div>
        );
      })}
    </div>
  );
}

export function RegisterForm() {
  const [role, setRole] = useState("patient");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("prefer_not_to_say");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [stateVal, setStateVal] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [docCity, setDocCity] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const [qualification, setQualification] = useState("");
  const [consultationFee, setConsultationFee] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [languages, setLanguages] = useState("");
  const [about, setAbout] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [clinicPhone, setClinicPhone] = useState("");
  const [clinicAddress, setClinicAddress] = useState("");

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [fallback, setFallback] = useState(null);
  const { redirecting, redirectMessage, redirectWithUser } = usePostAuthRedirect();

  const steps = useMemo(() => {
    const common = [
      { key: "role", label: "Account type" },
      { key: "account", label: "Account" },
    ];
    const patient = [
      { key: "patient", label: "Patient details" },
      { key: "review", label: "Review" },
    ];
    const doctor = [
      { key: "doctor", label: "Professional" },
      { key: "clinic", label: "Clinic" },
      { key: "review", label: "Review" },
    ];
    return role === "patient" ? [...common, ...patient] : [...common, ...doctor];
  }, [role]);

  const [stepIdx, setStepIdx] = useState(0);
  const step = steps[stepIdx]?.key || "role";

  useEffect(() => {
    setStepIdx(0);
  }, [role]);

  const computedAge = useMemo(() => computeAgeFromDob(dateOfBirth.trim()), [dateOfBirth]);

  const patientOk = useMemo(() => {
    if (role !== "patient") return true;
    const hasDob = Boolean(dateOfBirth.trim());
    const hasAge = age.trim() !== "" && Number.isFinite(Number(age)) && Number(age) >= 0 && Number(age) <= 130;
    return (
      name.trim().length >= 2 &&
      email.includes("@") &&
      password.length >= 8 &&
      phone.trim() &&
      city.trim() &&
      gender &&
      (hasDob || hasAge)
    );
  }, [role, name, email, password, phone, city, gender, dateOfBirth, age]);

  const doctorOk = useMemo(() => {
    if (role !== "doctor") return true;
    return name.trim().length >= 2 && email.includes("@") && password.length >= 8;
  }, [role, name, email, password]);

  const canSubmit = role === "patient" ? patientOk : doctorOk;

  const stepValid = useMemo(() => {
    const baseIdentityOk = name.trim().length >= 2 && email.includes("@") && password.length >= 8;

    if (step === "role") return role === "patient" || role === "doctor";
    if (step === "account") return baseIdentityOk;

    if (role === "patient") {
      const phoneOk = normalizeIndiaMobileForUi(phone).length === 10;
      const cityOk = city.trim().length > 0;
      const hasDob = Boolean(dateOfBirth.trim());
      const ageN = clampInt(age, { min: 0, max: 130 });
      const hasAge = age.trim() !== "" && ageN != null;
      if (step === "patient") return baseIdentityOk && phoneOk && cityOk && Boolean(gender) && (hasDob || hasAge);
      if (step === "review") return canSubmit;
    }

    if (role === "doctor") {
      if (step === "doctor") return baseIdentityOk && specialization.trim().length >= 2 && docCity.trim().length >= 2;
      if (step === "clinic") return clinicName.trim().length >= 2 && normalizeIndiaMobileForUi(clinicPhone).length === 10;
      if (step === "review") {
        return (
          baseIdentityOk &&
          specialization.trim().length >= 2 &&
          docCity.trim().length >= 2 &&
          clinicName.trim().length >= 2 &&
          normalizeIndiaMobileForUi(clinicPhone).length === 10
        );
      }
    }

    return false;
  }, [step, role, name, email, password, gender, phone, city, dateOfBirth, age, specialization, docCity, clinicName, clinicPhone, canSubmit]);

  const onNext = () => {
    setError("");
    setFallback(null);
    if (!stepValid) {
      setError("Please complete the required fields to continue.");
      return;
    }
    setStepIdx((i) => Math.min(steps.length - 1, i + 1));
  };

  const onBack = () => {
    setError("");
    setFallback(null);
    setStepIdx((i) => Math.max(0, i - 1));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setFallback(null);
    if (!canSubmit) {
      setError("Please fill all required fields. Password must be at least 8 characters.");
      return;
    }
    setLoading(true);
    let clearLoading = true;
    try {
      const payload =
        role === "patient"
          ? {
              name: name.trim(),
              email: email.trim().toLowerCase(),
              password,
              role: "patient",
              patientProfile: {
                gender,
                phone: normalizeIndiaMobileForUi(phone),
                city: city.trim(),
                ...(stateVal.trim() ? { state: stateVal.trim() } : {}),
                ...(address.trim() ? { address: address.trim() } : {}),
                ...(dateOfBirth.trim() ? { dateOfBirth: dateOfBirth.trim() } : {}),
                ...(dateOfBirth.trim() ? { age: null } : age.trim() === "" ? {} : { age: Number(age) }),
              },
            }
          : {
              name: name.trim(),
              email: email.trim().toLowerCase(),
              password,
              role: "doctor",
              doctorProfile: {
                specialization: specialization.trim() || undefined,
                hospitalName: hospitalName.trim() || undefined,
                city: docCity.trim() || undefined,
                qualification: qualification.trim() || undefined,
                experienceYears: experienceYears.trim() === "" ? undefined : Number(experienceYears),
                consultationFee: consultationFee.trim() === "" ? undefined : Number(consultationFee),
                registrationNumber: registrationNumber.trim() || undefined,
                languages: languages.trim() || undefined,
                about: about.trim() || undefined,
                clinic: {
                  name: clinicName.trim(),
                  phone: normalizeIndiaMobileForUi(clinicPhone),
                  address: clinicAddress.trim(),
                },
              },
            };

      const res = await signupRequest(payload);
      const redirectResult = redirectWithUser(res.user);
      if (redirectResult?.ok === false) {
        setError(redirectResult.error);
        setFallback({ url: redirectResult.fallbackUrl, label: redirectResult.fallbackLabel });
        return;
      }
      clearLoading = false;
    } catch (err) {
      const msg = err instanceof AuthRequestError ? err.message : "Something went wrong. Please try again.";
      setError(msg);
    } finally {
      if (clearLoading) setLoading(false);
    }
  };

  const busy = loading || redirecting;

  return (
    <>
      <AuthFullScreenLoader
        open={loading && !redirecting}
        title="Creating your account…"
        subtitle="This only takes a moment."
        tone="dark"
        zClass="z-[180]"
      />
      <AuthRedirectOverlay open={redirecting} message={redirectMessage} />
      <AuthPanel
        title="Create your account"
        subtitle="Choose patient or doctor. You will be redirected to the right HealthBook app."
        footer={
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Already registered?{" "}
            <Link
              href="/login"
              className="font-semibold text-indigo-600 underline-offset-2 transition hover:text-indigo-500 hover:underline dark:text-indigo-400"
            >
              Sign in
            </Link>
          </p>
        }
      >
        <form className="space-y-5" onSubmit={onSubmit}>
          {error ? (
            <div
              role="alert"
              className="rounded-2xl border border-rose-200/90 bg-rose-50 px-4 py-3 text-sm text-rose-800 shadow-sm dark:border-rose-900/40 dark:bg-rose-950/50 dark:text-rose-200"
            >
              <p>{error}</p>
              {fallback?.url ? (
                <p className="mt-2">
                  <a
                    href={fallback.url}
                    className="font-semibold text-indigo-700 underline-offset-2 hover:underline dark:text-indigo-300"
                  >
                    {fallback.label}
                  </a>
                </p>
              ) : null}
            </div>
          ) : null}

          <div className="flex items-center justify-between gap-3">
            <StepDots steps={steps} current={stepIdx} />
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Step {Math.min(stepIdx + 1, steps.length)} of {steps.length}
            </div>
          </div>

          {step === "role" ? (
            <div>
              <span className="mb-2 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">I am a</span>
              <div className="grid grid-cols-2 gap-2">
                {["patient", "doctor"].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    disabled={busy}
                    className={
                      "rounded-xl border px-3 py-2.5 text-sm font-semibold " +
                      transitionBase +
                      " " +
                      (role === r ? roleBtnActive : roleBtnIdle)
                    }
                  >
                    {r === "patient" ? "Patient" : "Doctor"}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                Your onboarding steps depend on this choice.
              </p>
            </div>
          ) : null}

          {step === "account" ? (
            <>
              <div>
                <label htmlFor="name" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                  Full name
                </label>
                <input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} disabled={busy} className={input} />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={busy}
                  className={input}
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                  Password (min 8 characters)
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={busy}
                    className={input + " pr-12"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-indigo-600 transition-colors"
                    title={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268-2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    )}
                  </button>
                </div>
              </div>
            </>
          ) : null}

          {role === "patient" && step === "patient" ? (
            <div className={panelInset}>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Patient profile</p>
              <div>
                <label htmlFor="gender" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  disabled={busy}
                  className={input}
                >
                  {GENDERS.map((g) => (
                    <option key={g.value} value={g.value}>
                      {g.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                  Mobile (India +91)
                </label>
                <input
                  id="phone"
                  name="phone"
                  inputMode="numeric"
                  value={phone}
                  onChange={(e) => setPhone(normalizeIndiaMobileForUi(e.target.value))}
                  disabled={busy}
                  placeholder="10-digit mobile"
                  className={input}
                />
              </div>
              <div>
                <label htmlFor="city" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                  City
                </label>
                <input id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} disabled={busy} className={input} />
              </div>
              <div>
                <label htmlFor="state" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                  State (optional)
                </label>
                <input id="state" name="state" value={stateVal} onChange={(e) => setStateVal(e.target.value)} disabled={busy} className={input} />
              </div>
              <div>
                <label htmlFor="address" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                  Address (optional)
                </label>
                <input id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} disabled={busy} className={input} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="dob" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                    Date of birth
                  </label>
                  <input
                    id="dob"
                    name="dateOfBirth"
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => {
                      const v = e.target.value;
                      setDateOfBirth(v);
                      if (v) {
                        const nextAge = computeAgeFromDob(v);
                        setAge(nextAge == null ? "" : String(nextAge));
                      } else {
                        // allow manual age again when DOB cleared
                        setAge("");
                      }
                    }}
                    disabled={busy}
                    className={input}
                  />
                  {computedAge != null ? (
                    <div className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
                      Age: {computedAge} years (auto)
                    </div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="age" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                    Or age
                  </label>
                  <input
                    id="age"
                    name="age"
                    inputMode="numeric"
                    value={age}
                    onChange={(e) => setAge(onlyDigits(e.target.value))}
                    disabled={busy || Boolean(dateOfBirth.trim())}
                    placeholder="e.g. 32"
                    className={input}
                  />
                  {dateOfBirth.trim() ? (
                    <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Age is calculated from date of birth.</div>
                  ) : null}
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Provide either date of birth or age (required by HealthBook).</p>
            </div>
          ) : null}

          {role === "doctor" && step === "doctor" ? (
            <div className={panelInset}>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Doctor profile</p>
              <div>
                <label htmlFor="spec" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                  Specialization *
                </label>
                <input id="spec" value={specialization} onChange={(e) => setSpecialization(e.target.value)} disabled={busy} className={input} placeholder="e.g. Cardiologist" />
              </div>
              <div>
                <label htmlFor="docCity" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                  City *
                </label>
                <input id="docCity" value={docCity} onChange={(e) => setDocCity(e.target.value)} disabled={busy} className={input} placeholder="e.g. Jaipur" />
              </div>
              <div>
                <label htmlFor="hospital" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                  Hospital / clinic (optional)
                </label>
                <input id="hospital" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} disabled={busy} className={input} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="exp" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                    Experience (years, optional)
                  </label>
                  <input id="exp" inputMode="numeric" value={experienceYears} onChange={(e) => setExperienceYears(onlyDigits(e.target.value))} disabled={busy} className={input} placeholder="e.g. 8" />
                </div>
                <div>
                  <label htmlFor="fee" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                    Consultation fee (₹, optional)
                  </label>
                  <input id="fee" inputMode="numeric" value={consultationFee} onChange={(e) => setConsultationFee(onlyDigits(e.target.value))} disabled={busy} className={input} placeholder="e.g. 500" />
                </div>
              </div>
              <div>
                <label htmlFor="qual" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                  Qualification (optional)
                </label>
                <input id="qual" value={qualification} onChange={(e) => setQualification(e.target.value)} disabled={busy} className={input} placeholder="e.g. MBBS, MD" />
              </div>
              <div>
                <label htmlFor="regNo" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                  Registration number (optional)
                </label>
                <input id="regNo" value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} disabled={busy} className={input} placeholder="e.g. MCI-12345 / DMC-xxxx" />
              </div>
              <div>
                <label htmlFor="langs" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                  Languages (optional)
                </label>
                <input id="langs" value={languages} onChange={(e) => setLanguages(e.target.value)} disabled={busy} className={input} placeholder="e.g. English, Hindi" />
              </div>
              <div>
                <label htmlFor="about" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                  About (optional)
                </label>
                <textarea id="about" value={about} onChange={(e) => setAbout(e.target.value)} disabled={busy} rows={4} className={input + " min-h-[120px] py-2.5"} placeholder="Briefly describe your practice…" />
              </div>
            </div>
          ) : null}

          {role === "doctor" && step === "clinic" ? (
            <div className={panelInset}>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Clinic details</p>
              <div>
                <label htmlFor="clinicName" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                  Clinic name *
                </label>
                <input id="clinicName" value={clinicName} onChange={(e) => setClinicName(e.target.value)} disabled={busy} className={input} placeholder="e.g. HealthCare Clinic" />
              </div>
              <div>
                <label htmlFor="clinicPhone" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                  Clinic phone (India +91) *
                </label>
                <input id="clinicPhone" inputMode="numeric" value={clinicPhone} onChange={(e) => setClinicPhone(normalizeIndiaMobileForUi(e.target.value))} disabled={busy} className={input} placeholder="10-digit mobile" />
              </div>
              <div>
                <label htmlFor="clinicAddress" className="mb-1.5 block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                  Clinic address (optional)
                </label>
                <input id="clinicAddress" value={clinicAddress} onChange={(e) => setClinicAddress(e.target.value)} disabled={busy} className={input} placeholder="Street, area, landmark…" />
              </div>
            </div>
          ) : null}

          {step === "review" ? (
            <div className={panelInset}>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Review</p>
              <div className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-slate-500 dark:text-slate-400">Role</span>
                  <span className="font-semibold capitalize">{role}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-slate-500 dark:text-slate-400">Name</span>
                  <span className="font-semibold">{name.trim() || "—"}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-slate-500 dark:text-slate-400">Email</span>
                  <span className="font-semibold">{email.trim() || "—"}</span>
                </div>
                {role === "patient" ? (
                  <>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-slate-500 dark:text-slate-400">Phone</span>
                      <span className="font-semibold">{normalizeIndiaMobileForUi(phone) ? `+91 ${normalizeIndiaMobileForUi(phone)}` : "—"}</span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-slate-500 dark:text-slate-400">City</span>
                      <span className="font-semibold">{city.trim() || "—"}</span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-slate-500 dark:text-slate-400">DOB/Age</span>
                      <span className="font-semibold">
                        {dateOfBirth.trim() ? `${dateOfBirth.trim()} (${computedAge ?? "—"}y)` : age.trim() ? `${age.trim()}y` : "—"}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-slate-500 dark:text-slate-400">Specialization</span>
                      <span className="font-semibold">{specialization.trim() || "—"}</span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-slate-500 dark:text-slate-400">City</span>
                      <span className="font-semibold">{docCity.trim() || "—"}</span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-slate-500 dark:text-slate-400">Clinic</span>
                      <span className="font-semibold">{clinicName.trim() || "—"}</span>
                    </div>
                  </>
                )}
              </div>
              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                By creating an account, you agree to the HealthBook terms and privacy policy.
              </p>
            </div>
          ) : null}

          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={onBack}
              disabled={busy || stepIdx === 0}
              className={
                "flex-1 rounded-xl border px-3 py-3 text-sm font-semibold " +
                transitionBase +
                " border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              }
            >
              Back
            </button>

            {step === "review" ? (
              <button
                type="submit"
                disabled={busy || !stepValid}
                className={btnGradient + " flex-1 disabled:opacity-60"}
              >
                {busy ? "Creating account…" : "Create account"}
              </button>
            ) : (
              <button
                type="button"
                onClick={onNext}
                disabled={busy}
                className={btnGradient + " flex-1 disabled:opacity-60"}
              >
                Next
              </button>
            )}
          </div>
        </form>
      </AuthPanel>
    </>
  );
}
