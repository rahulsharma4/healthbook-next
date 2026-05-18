/** Shared JSX for Open Graph / Twitter dynamic images (`next/og`). */
export function HealthBookOgImageRoot() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 45%, #0891b2 100%)",
        color: "#f8fafc",
      }}
    >
      <div
        style={{
          fontSize: 56,
          fontWeight: 800,
          letterSpacing: "-0.03em",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        HealthBook
      </div>
      <div
        style={{
          marginTop: 20,
          fontSize: 26,
          fontWeight: 500,
          opacity: 0.95,
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        Your health, organized
      </div>
      <div
        style={{
          marginTop: 36,
          fontSize: 18,
          opacity: 0.85,
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        Appointments · Records · Secure messaging
      </div>
    </div>
  );
}
