/**
 * Generates soft WebP placeholders for the marketing home page (hero / product preview).
 * Run: npm run generate:marketing-webp
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "marketing");

const ambientSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
  <defs>
    <linearGradient id="sky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f4f6ff"/>
      <stop offset="45%" stop-color="#eef2ff"/>
      <stop offset="100%" stop-color="#ecfeff"/>
    </linearGradient>
    <radialGradient id="glow1" cx="22%" cy="8%" r="55%">
      <stop offset="0%" stop-color="rgba(99,102,241,0.45)"/>
      <stop offset="55%" stop-color="rgba(99,102,241,0)"/>
    </radialGradient>
    <radialGradient id="glow2" cx="88%" cy="18%" r="45%">
      <stop offset="0%" stop-color="rgba(168,85,247,0.32)"/>
      <stop offset="60%" stop-color="rgba(168,85,247,0)"/>
    </radialGradient>
    <radialGradient id="glow3" cx="50%" cy="95%" r="50%">
      <stop offset="0%" stop-color="rgba(6,182,212,0.22)"/>
      <stop offset="65%" stop-color="rgba(6,182,212,0)"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#sky)"/>
  <rect width="100%" height="100%" fill="url(#glow1)"/>
  <rect width="100%" height="100%" fill="url(#glow2)"/>
  <rect width="100%" height="100%" fill="url(#glow3)"/>
</svg>`;

const textureSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="b" x1="0%" y1="0%" x2="100%" y2="1">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e0e7ff"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(99,102,241,0.06)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#b)"/>
  <rect width="100%" height="100%" fill="url(#grid)"/>
</svg>`;

await mkdir(outDir, { recursive: true });

await sharp(Buffer.from(ambientSvg)).webp({ quality: 82, effort: 4 }).toFile(path.join(outDir, "home-ambient.webp"));

await sharp(Buffer.from(textureSvg)).webp({ quality: 80, effort: 4 }).toFile(path.join(outDir, "dashboard-texture.webp"));

/** Abstract feature illustrations (960×600) — unique gradients per pillar */
const featureSvgs = [
  {
    name: "feature-medical-records.webp",
    svg: `
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="600" viewBox="0 0 960 600">
  <defs>
    <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f5f3ff"/><stop offset="100%" stop-color="#ecfeff"/>
    </linearGradient>
    <linearGradient id="card1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95"/><stop offset="100%" stop-color="#eef2ff"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg1)"/>
  <rect x="80" y="72" width="800" height="456" rx="28" fill="url(#card1)" stroke="rgba(99,102,241,0.2)" stroke-width="2"/>
  <rect x="120" y="120" width="240" height="18" rx="9" fill="rgba(99,102,241,0.35)"/>
  <rect x="120" y="160" width="680" height="12" rx="6" fill="rgba(148,163,184,0.45)"/>
  <rect x="120" y="188" width="620" height="12" rx="6" fill="rgba(148,163,184,0.35)"/>
  <rect x="120" y="230" width="720" height="100" rx="16" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.15)"/>
  <rect x="140" y="250" width="120" height="60" rx="10" fill="rgba(99,102,241,0.2)"/>
  <rect x="280" y="258" width="400" height="10" rx="5" fill="rgba(100,116,139,0.4)"/>
  <rect x="280" y="278" width="340" height="10" rx="5" fill="rgba(100,116,139,0.3)"/>
  <rect x="120" y="360" width="680" height="12" rx="6" fill="rgba(148,163,184,0.35)"/>
  <rect x="120" y="388" width="520" height="12" rx="6" fill="rgba(148,163,184,0.28)"/>
</svg>`,
  },
  {
    name: "feature-appointments.webp",
    svg: `
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="600" viewBox="0 0 960 600">
  <defs>
    <linearGradient id="bg2" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fdf4ff"/><stop offset="100%" stop-color="#eef2ff"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg2)"/>
  <rect x="100" y="90" width="760" height="420" rx="32" fill="#ffffff" fill-opacity="0.92" stroke="rgba(168,85,247,0.22)" stroke-width="2"/>
  <rect x="140" y="130" width="200" height="160" rx="20" fill="rgba(168,85,247,0.12)"/>
  <rect x="160" y="150" width="36" height="36" rx="8" fill="rgba(168,85,247,0.45)"/>
  <rect x="210" y="158" width="100" height="10" rx="5" fill="rgba(100,116,139,0.45)"/>
  <rect x="210" y="178" width="80" height="8" rx="4" fill="rgba(148,163,184,0.5)"/>
  <rect x="380" y="130" width="440" height="48" rx="14" fill="rgba(99,102,241,0.1)"/>
  <rect x="400" y="146" width="280" height="14" rx="7" fill="rgba(99,102,241,0.35)"/>
  <rect x="380" y="200" width="200" height="72" rx="16" fill="rgba(6,182,212,0.12)" stroke="rgba(6,182,212,0.25)"/>
  <rect x="600" y="200" width="200" height="72" rx="16" fill="rgba(168,85,247,0.1)" stroke="rgba(168,85,247,0.2)"/>
  <rect x="380" y="290" width="200" height="72" rx="16" fill="rgba(148,163,184,0.15)"/>
  <rect x="600" y="290" width="200" height="72" rx="16" fill="rgba(99,102,241,0.08)"/>
  <rect x="380" y="390" width="420" height="14" rx="7" fill="rgba(100,116,139,0.35)"/>
  <rect x="380" y="416" width="320" height="14" rx="7" fill="rgba(148,163,184,0.3)"/>
</svg>`,
  },
  {
    name: "feature-messaging.webp",
    svg: `
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="600" viewBox="0 0 960 600">
  <defs>
    <linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ecfeff"/><stop offset="100%" stop-color="#f0f9ff"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg3)"/>
  <rect x="110" y="100" width="740" height="400" rx="28" fill="#ffffff" fill-opacity="0.94" stroke="rgba(6,182,212,0.2)" stroke-width="2"/>
  <rect x="150" y="150" width="420" height="88" rx="20" fill="rgba(99,102,241,0.1)"/>
  <rect x="170" y="170" width="200" height="12" rx="6" fill="rgba(99,102,241,0.4)"/>
  <rect x="170" y="192" width="320" height="10" rx="5" fill="rgba(148,163,184,0.45)"/>
  <rect x="590" y="170" width="220" height="88" rx="20" fill="rgba(6,182,212,0.15)"/>
  <rect x="610" y="190" width="160" height="10" rx="5" fill="rgba(15,118,110,0.35)"/>
  <rect x="610" y="208" width="120" height="8" rx="4" fill="rgba(100,116,139,0.35)"/>
  <rect x="150" y="270" width="320" height="88" rx="20" fill="rgba(6,182,212,0.12)"/>
  <rect x="490" y="270" width="320" height="88" rx="20" fill="rgba(148,163,184,0.12)"/>
  <rect x="150" y="390" width="660" height="72" rx="18" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.12)"/>
  <rect x="170" y="412" width="420" height="10" rx="5" fill="rgba(100,116,139,0.35)"/>
</svg>`,
  },
  {
    name: "feature-secure-access.webp",
    svg: `
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="600" viewBox="0 0 960 600">
  <defs>
    <linearGradient id="bg4" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="#ecfdf5"/><stop offset="100%" stop-color="#f0fdf4"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg4)"/>
  <circle cx="480" cy="260" r="120" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.35)" stroke-width="3"/>
  <rect x="430" y="230" width="100" height="80" rx="12" fill="#ffffff" stroke="rgba(16,185,129,0.45)" stroke-width="2"/>
  <path d="M 460 270 L 475 288 L 520 240" fill="none" stroke="rgba(16,185,129,0.85)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="180" y="140" width="220" height="280" rx="24" fill="#ffffff" fill-opacity="0.9" stroke="rgba(15,118,110,0.2)"/>
  <rect x="210" y="180" width="160" height="14" rx="7" fill="rgba(15,118,110,0.35)"/>
  <rect x="210" y="210" width="140" height="10" rx="5" fill="rgba(100,116,139,0.4)"/>
  <rect x="210" y="240" width="160" height="36" rx="10" fill="rgba(16,185,129,0.12)"/>
  <rect x="210" y="290" width="160" height="36" rx="10" fill="rgba(148,163,184,0.2)"/>
  <rect x="560" y="140" width="220" height="280" rx="24" fill="#ffffff" fill-opacity="0.9" stroke="rgba(99,102,241,0.18)"/>
  <rect x="590" y="180" width="160" height="14" rx="7" fill="rgba(99,102,241,0.35)"/>
  <rect x="590" y="210" width="120" height="10" rx="5" fill="rgba(100,116,139,0.35)"/>
  <rect x="590" y="250" width="160" height="120" rx="14" fill="rgba(99,102,241,0.06)"/>
</svg>`,
  },
  {
    name: "feature-notifications.webp",
    svg: `
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="600" viewBox="0 0 960 600">
  <defs>
    <linearGradient id="bg5" x1="0%" y1="50%" x2="100%" y2="50%">
      <stop offset="0%" stop-color="#fffbeb"/><stop offset="100%" stop-color="#fff7ed"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg5)"/>
  <rect x="120" y="110" width="720" height="380" rx="30" fill="#ffffff" fill-opacity="0.93" stroke="rgba(245,158,11,0.25)" stroke-width="2"/>
  <path d="M 480 130 L 520 200 H 440 Z" fill="rgba(245,158,11,0.25)"/>
  <ellipse cx="480" cy="248" rx="56" ry="52" fill="rgba(245,158,11,0.2)" stroke="rgba(217,119,6,0.4)" stroke-width="2"/>
  <rect x="456" y="228" width="48" height="32" rx="6" fill="rgba(217,119,6,0.35)"/>
  <rect x="180" y="320" width="600" height="56" rx="16" fill="rgba(99,102,241,0.08)"/>
  <rect x="200" y="338" width="320" height="12" rx="6" fill="rgba(100,116,139,0.4)"/>
  <rect x="180" y="400" width="280" height="56" rx="16" fill="rgba(245,158,11,0.1)"/>
  <rect x="480" y="400" width="300" height="56" rx="16" fill="rgba(148,163,184,0.15)"/>
  <rect x="200" y="418" width="200" height="10" rx="5" fill="rgba(100,116,139,0.35)"/>
  <rect x="500" y="418" width="220" height="10" rx="5" fill="rgba(100,116,139,0.3)"/>
</svg>`,
  },
  {
    name: "feature-analytics.webp",
    svg: `
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="600" viewBox="0 0 960 600">
  <defs>
    <linearGradient id="bg6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f0f9ff"/><stop offset="100%" stop-color="#eef2ff"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg6)"/>
  <rect x="90" y="95" width="780" height="410" rx="32" fill="#ffffff" fill-opacity="0.92" stroke="rgba(14,165,233,0.2)" stroke-width="2"/>
  <rect x="140" y="150" width="120" height="180" rx="12" fill="rgba(14,165,233,0.2)"/>
  <rect x="290" y="200" width="120" height="130" rx="12" fill="rgba(99,102,241,0.25)"/>
  <rect x="440" y="170" width="120" height="160" rx="12" fill="rgba(168,85,247,0.2)"/>
  <rect x="590" y="220" width="120" height="110" rx="12" fill="rgba(6,182,212,0.22)"/>
  <rect x="140" y="360" width="680" height="110" rx="20" fill="rgba(148,163,184,0.12)"/>
  <path d="M 180 430 L 260 380 L 340 400 L 460 340 L 580 360 L 720 300 L 780 320" fill="none" stroke="rgba(99,102,241,0.55)" stroke-width="4" stroke-linecap="round"/>
  <circle cx="780" cy="320" r="8" fill="rgba(99,102,241,0.7)"/>
</svg>`,
  },
];

for (const { name, svg } of featureSvgs) {
  await sharp(Buffer.from(svg)).webp({ quality: 82, effort: 4 }).toFile(path.join(outDir, name));
}

/** Doctor dashboard UI mock (1280×720) — For Doctors marketing page */
const doctorDashboardMockSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
  <defs>
    <linearGradient id="ddbg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/><stop offset="50%" stop-color="#eef2ff"/><stop offset="100%" stop-color="#f5f3ff"/>
    </linearGradient>
    <linearGradient id="ddtop" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#4f46e5"/><stop offset="55%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#6366f1"/>
    </linearGradient>
    <filter id="dds" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="rgba(79,70,229,0.15)"/>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#ddbg)"/>
  <rect x="24" y="20" width="280" height="680" rx="20" fill="#ffffff" stroke="rgba(99,102,241,0.18)" stroke-width="2" filter="url(#dds)"/>
  <rect x="44" y="44" width="160" height="22" rx="8" fill="rgba(99,102,241,0.45)"/>
  <rect x="44" y="80" width="200" height="10" rx="5" fill="rgba(148,163,184,0.5)"/>
  <rect x="44" y="120" width="240" height="40" rx="10" fill="rgba(99,102,241,0.12)"/>
  <rect x="44" y="175" width="240" height="40" rx="10" fill="rgba(168,85,247,0.08)"/>
  <rect x="44" y="230" width="240" height="40" rx="10" fill="rgba(148,163,184,0.12)"/>
  <rect x="44" y="300" width="100" height="12" rx="6" fill="rgba(100,116,139,0.45)"/>
  <rect x="44" y="325" width="220" height="36" rx="10" fill="rgba(99,102,241,0.06)"/>
  <rect x="44" y="372" width="220" height="36" rx="10" fill="rgba(99,102,241,0.06)"/>
  <rect x="44" y="419" width="220" height="36" rx="10" fill="rgba(99,102,241,0.06)"/>
  <rect x="320" y="20" width="936" height="64" rx="16" fill="#ffffff" stroke="rgba(99,102,241,0.15)" stroke-width="2"/>
  <rect x="348" y="40" width="200" height="14" rx="7" fill="rgba(99,102,241,0.35)"/>
  <rect x="1080" y="36" width="140" height="32" rx="10" fill="url(#ddtop)"/>
  <rect x="320" y="100" width="300" height="120" rx="18" fill="#ffffff" stroke="rgba(99,102,241,0.12)" stroke-width="2"/>
  <rect x="340" y="118" width="120" height="10" rx="5" fill="rgba(100,116,139,0.4)"/>
  <rect x="340" y="138" width="180" height="28" rx="8" fill="rgba(99,102,241,0.2)"/>
  <rect x="340" y="178" width="100" height="10" rx="5" fill="rgba(34,197,94,0.35)"/>
  <rect x="636" y="100" width="300" height="120" rx="18" fill="#ffffff" stroke="rgba(168,85,247,0.15)" stroke-width="2"/>
  <rect x="656" y="118" width="140" height="10" rx="5" fill="rgba(100,116,139,0.4)"/>
  <rect x="656" y="138" width="160" height="28" rx="8" fill="rgba(168,85,247,0.18)"/>
  <rect x="656" y="178" width="90" height="10" rx="5" fill="rgba(99,102,241,0.35)"/>
  <rect x="952" y="100" width="304" height="120" rx="18" fill="#ffffff" stroke="rgba(6,182,212,0.2)" stroke-width="2"/>
  <rect x="972" y="118" width="100" height="10" rx="5" fill="rgba(100,116,139,0.4)"/>
  <rect x="972" y="138" width="200" height="28" rx="8" fill="rgba(6,182,212,0.15)"/>
  <rect x="972" y="178" width="120" height="10" rx="5" fill="rgba(100,116,139,0.35)"/>
  <rect x="320" y="240" width="936" height="460" rx="20" fill="#ffffff" stroke="rgba(99,102,241,0.14)" stroke-width="2" filter="url(#dds)"/>
  <rect x="348" y="268" width="180" height="16" rx="8" fill="rgba(99,102,241,0.4)"/>
  <rect x="1000" y="270" width="100" height="12" rx="6" fill="rgba(148,163,184,0.45)"/>
  <rect x="348" y="308" width="880" height="44" rx="12" fill="rgba(99,102,241,0.06)"/>
  <rect x="368" y="322" width="80" height="16" rx="6" fill="rgba(99,102,241,0.25)"/>
  <rect x="480" y="324" width="200" height="12" rx="6" fill="rgba(100,116,139,0.35)"/>
  <rect x="720" y="324" width="120" height="12" rx="6" fill="rgba(148,163,184,0.35)"/>
  <rect x="980" y="324" width="200" height="12" rx="6" fill="rgba(148,163,184,0.3)"/>
  <rect x="348" y="364" width="880" height="44" rx="12" fill="rgba(168,85,247,0.05)"/>
  <rect x="368" y="378" width="80" height="16" rx="6" fill="rgba(168,85,247,0.22)"/>
  <rect x="480" y="380" width="220" height="12" rx="6" fill="rgba(100,116,139,0.35)"/>
  <rect x="720" y="380" width="120" height="12" rx="6" fill="rgba(148,163,184,0.35)"/>
  <rect x="980" y="380" width="200" height="12" rx="6" fill="rgba(148,163,184,0.3)"/>
  <rect x="348" y="420" width="880" height="44" rx="12" fill="rgba(99,102,241,0.04)"/>
  <rect x="368" y="434" width="80" height="16" rx="6" fill="rgba(99,102,241,0.15)"/>
  <rect x="480" y="436" width="180" height="12" rx="6" fill="rgba(100,116,139,0.32)"/>
  <rect x="720" y="436" width="120" height="12" rx="6" fill="rgba(148,163,184,0.35)"/>
  <rect x="980" y="436" width="200" height="12" rx="6" fill="rgba(148,163,184,0.3)"/>
  <rect x="348" y="476" width="880" height="44" rx="12" fill="rgba(99,102,241,0.04)"/>
  <rect x="368" y="490" width="80" height="16" rx="6" fill="rgba(99,102,241,0.15)"/>
  <rect x="480" y="492" width="240" height="12" rx="6" fill="rgba(100,116,139,0.32)"/>
  <rect x="348" y="536" width="420" height="140" rx="16" fill="rgba(99,102,241,0.07)" stroke="rgba(99,102,241,0.12)"/>
  <rect x="788" y="536" width="440" height="140" rx="16" fill="rgba(168,85,247,0.06)" stroke="rgba(168,85,247,0.12)"/>
  <rect x="372" y="562" width="200" height="12" rx="6" fill="rgba(100,116,139,0.4)"/>
  <path d="M 372 600 L 420 560 L 480 590 L 560 520 L 640 540" fill="none" stroke="rgba(99,102,241,0.5)" stroke-width="3" stroke-linecap="round"/>
  <rect x="812" y="562" width="180" height="12" rx="6" fill="rgba(100,116,139,0.4)"/>
  <rect x="812" y="590" width="360" height="64" rx="10" fill="rgba(148,163,184,0.15)"/>
</svg>`;

await sharp(Buffer.from(doctorDashboardMockSvg)).webp({ quality: 84, effort: 4 }).toFile(path.join(outDir, "doctor-dashboard-mock.webp"));

/** Patient health timeline mock (1100×680) — For Patients marketing page */
const patientTimelineMockSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="680" viewBox="0 0 1100 680">
  <defs>
    <linearGradient id="ptbg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fffafb"/><stop offset="40%" stop-color="#f0fdfa"/><stop offset="100%" stop-color="#f0f9ff"/>
    </linearGradient>
    <filter id="pts" x="-4%" y="-4%" width="108%" height="108%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="rgba(244,114,182,0.12)"/>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#ptbg)"/>
  <rect x="48" y="40" width="1004" height="600" rx="28" fill="#ffffff" fill-opacity="0.92" stroke="rgba(20,184,166,0.2)" stroke-width="2" filter="url(#pts)"/>
  <rect x="80" y="72" width="200" height="18" rx="9" fill="rgba(244,114,182,0.35)"/>
  <rect x="80" y="104" width="280" height="11" rx="5" fill="rgba(148,163,184,0.45)"/>
  <line x1="120" y1="160" x2="120" y2="580" stroke="rgba(20,184,166,0.35)" stroke-width="4" stroke-linecap="round"/>
  <circle cx="120" cy="190" r="12" fill="#ffffff" stroke="rgba(244,114,182,0.65)" stroke-width="3"/>
  <circle cx="120" cy="310" r="12" fill="#ffffff" stroke="rgba(20,184,166,0.65)" stroke-width="3"/>
  <circle cx="120" cy="430" r="12" fill="#ffffff" stroke="rgba(56,189,248,0.65)" stroke-width="3"/>
  <circle cx="120" cy="550" r="12" fill="#ffffff" stroke="rgba(167,139,250,0.55)" stroke-width="3"/>
  <rect x="160" y="165" width="880" height="100" rx="18" fill="rgba(254,242,242,0.9)" stroke="rgba(244,114,182,0.2)"/>
  <rect x="184" y="186" width="140" height="12" rx="6" fill="rgba(244,114,182,0.5)"/>
  <rect x="184" y="208" width="320" height="10" rx="5" fill="rgba(100,116,139,0.38)"/>
  <rect x="184" y="232" width="260" height="10" rx="5" fill="rgba(148,163,184,0.35)"/>
  <rect x="184" y="254" width="80" height="8" rx="4" fill="rgba(20,184,166,0.4)"/>
  <rect x="160" y="285" width="880" height="100" rx="18" fill="rgba(240,253,250,0.95)" stroke="rgba(20,184,166,0.22)"/>
  <rect x="184" y="306" width="100" height="12" rx="6" fill="rgba(20,184,166,0.45)"/>
  <rect x="184" y="328" width="400" height="10" rx="5" fill="rgba(100,116,139,0.38)"/>
  <rect x="184" y="350" width="340" height="10" rx="5" fill="rgba(148,163,184,0.32)"/>
  <rect x="160" y="405" width="880" height="100" rx="18" fill="rgba(240,249,255,0.95)" stroke="rgba(56,189,248,0.22)"/>
  <rect x="184" y="426" width="160" height="12" rx="6" fill="rgba(56,189,248,0.4)"/>
  <rect x="184" y="448" width="360" height="10" rx="5" fill="rgba(100,116,139,0.38)"/>
  <rect x="184" y="470" width="200" height="10" rx="5" fill="rgba(148,163,184,0.32)"/>
  <rect x="160" y="525" width="880" height="88" rx="18" fill="rgba(245,243,255,0.9)" stroke="rgba(167,139,250,0.2)"/>
  <rect x="184" y="546" width="180" height="12" rx="6" fill="rgba(167,139,250,0.4)"/>
  <rect x="184" y="568" width="300" height="10" rx="5" fill="rgba(100,116,139,0.35)"/>
</svg>`;

await sharp(Buffer.from(patientTimelineMockSvg)).webp({ quality: 84, effort: 4 }).toFile(path.join(outDir, "patient-timeline-mock.webp"));

await writeFile(
  path.join(outDir, "README.txt"),
  "WebP assets are generated by `npm run generate:marketing-webp` (requires devDependency `sharp`).\n" +
    "Includes home ambient/texture, feature-*.webp (Features), doctor-dashboard-mock.webp (For Doctors), patient-timeline-mock.webp (For Patients).\n",
  "utf8",
);

console.log(
  "Wrote public/marketing/home-ambient.webp, dashboard-texture.webp, doctor-dashboard-mock.webp, patient-timeline-mock.webp, and " +
    featureSvgs.length +
    " feature-*.webp files",
);
