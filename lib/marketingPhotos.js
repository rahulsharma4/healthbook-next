/**
 * Curated Unsplash photography — distinct crops per slot; avoids repeating the same
 * hero shots across tiles vs deep dives where noted.
 *
 * `fit=crop&w=&h=` normalizes framing so Next/Image `object-cover` layouts stay stable.
 *
 * Requires `images.remotePatterns` for `images.unsplash.com` in next.config.
 */

/** Landscape crop suited to ~16:10 marketing panels */
export function marketingCrop(id, w = 1600, h = 1000) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=85`;
}

/** Platform capability tiles (`PlatformCapabilities`) */
export const MARKETING_PHOTOS = {
  /** Laptop with calendar / schedule */
  appointments: marketingCrop("1771054243991-e7b2d194ac96"),
  /** Clinician in clinical setting */
  medicalRecords: marketingCrop("1758691463393-a2aa9900af8a"),
  consentCollaboration: marketingCrop("1556761175-b413da4baf72"),
  /** Planning board / pins — audit & traceability */
  documentsAudit: marketingCrop("1633526543814-9718c8922b7a"),
  /** Team discussion / collaboration */
  messaging: marketingCrop("1758873269276-9518d0cb4a0b"),
  /** Phone & devices on desk */
  notifications: marketingCrop("1771888961098-4ea728d81091"),
  medication: marketingCrop("1646392206581-2527b1cae5cb"),
  /** Radiology / diagnostics wall — “share imaging & reports” */
  technologyShare: marketingCrop("1770134195107-0217c17ccaad"),
  mfaDevice: marketingCrop("1563013544-824ae1b704d3"),
  analytics: marketingCrop("1543286386-713bdd548da4"),
  reviews: marketingCrop("1633613286991-611fe299c4be"),
  adminTeam: marketingCrop("1552664730-d307ca884978"),
  patientTimeline: marketingCrop("1560307438-8eaa4c20fd13"),
  doctorDashboard: marketingCrop("1766299892683-d50398e31823"),
};

/**
 * `/features` deep dives — separate IDs from tiles so alternating sections feel fresh.
 */
export const DEEP_FEATURE_PHOTO = {
  "medical-records": marketingCrop("1576091160399-112ba8d25d1d"),
  /** Schedule / appointments display — distinct from tile art */
  appointments: marketingCrop("1758556549027-879615701c61"),
  messaging: marketingCrop("1576091160550-2173dba999ef"),
  "secure-access": marketingCrop("1563986768609-322da13575f3"),
  notifications: marketingCrop("1512941937669-90a1b58e7e9c"),
  analytics: marketingCrop("1460925895917-afdab827c52f"),
};
