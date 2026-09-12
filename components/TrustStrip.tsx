const platforms = [
  { name: "Airbnb", color: "#FF5A5F" },
  { name: "Booking.com", color: "#003580" },
  { name: "Google", color: "#4285F4" },
  { name: "MakeMyTrip", color: "#E74C3C" },
  { name: "Agoda", color: "#00B0F0" },
];

// Duplicate 4x for seamless infinite loop
const track = [...platforms, ...platforms, ...platforms, ...platforms];

const Dot = () => (
  <span style={{
    display: "inline-block", width: "4px", height: "4px", borderRadius: "50%",
    background: "#D5CEBC", flexShrink: 0, margin: "0 28px",
  }} />
);

export default function TrustStrip() {
  return (
    <section
      style={{
        background: "#FAF7F2",
        borderTop: "1px solid rgba(183,137,85,0.15)",
        borderBottom: "1px solid rgba(183,137,85,0.15)",
        padding: "16px 0",
        overflow: "hidden",
        position: "relative",
      }}
      aria-label="Trusted platforms"
    >
      {/* Eyebrow */}
      <p style={{
        fontSize: "9.5px", letterSpacing: "0.25em", fontWeight: 700,
        color: "#A89F91", textTransform: "uppercase",
        textAlign: "center", marginBottom: "12px",
      }}>
        Trusted by Travelers Across
      </p>

      {/* Edge fades */}
      <div style={{
        position: "absolute", left: 0, top: "34px", bottom: 0, width: "80px", zIndex: 2,
        background: "linear-gradient(to right, #FAF7F2, transparent)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", right: 0, top: "34px", bottom: 0, width: "80px", zIndex: 2,
        background: "linear-gradient(to left, #FAF7F2, transparent)", pointerEvents: "none",
      }} />

      {/* Scrolling track — 18s fast loop */}
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marquee-scroll 18s linear infinite",
          alignItems: "center",
        }}
      >
        {track.map((p, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex", alignItems: "center",
              fontSize: "clamp(16px, 2vw, 24px)",
              fontWeight: 800,
              color: p.color,
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
            }}
          >
            {p.name}
            <Dot />
          </span>
        ))}
      </div>
    </section>
  );
}
