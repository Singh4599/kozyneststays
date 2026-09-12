const items = [
  "🛋️  Fully Furnished",
  "📶  High-Speed WiFi",
  "❄️  Air Conditioning",
  "🍳  Equipped Kitchen",
  "🧺  Fresh Linens",
  "🚗  Secure Parking",
  "📺  Smart TV",
  "🛁  Luxury Bathrooms",
  "☎️  24/7 Support",
  "✨  Professional Cleaning",
  "🔐  Smart Locks",
  "🌿  Peaceful Locality",
];

// Duplicate for seamless loop
const track = [...items, ...items];

export default function AmenitiesMarquee() {
  return (
    <div
      aria-label="Our amenities"
      style={{
        background: "#1E2A20",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "14px 0",
        overflow: "hidden",
        position: "relative",
        maxWidth: "100vw",
        width: "100%",
      }}
    >
      {/* Edge fade masks */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: "80px", zIndex: 2,
        background: "linear-gradient(to right, #1E2A20, transparent)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: "80px", zIndex: 2,
        background: "linear-gradient(to left, #1E2A20, transparent)",
        pointerEvents: "none",
      }} />

      <div
        className="marquee-track"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0",
          width: "max-content",
          animation: "marquee-scroll 32s linear infinite",
        }}
      >
        {track.map((item, i) => (
          <div
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "0 32px",
              whiteSpace: "nowrap",
              borderRight: "1px solid rgba(183,137,85,0.25)",
            }}
          >
            <span style={{ fontSize: "13px", color: "rgba(250,247,242,0.75)", fontWeight: 500, letterSpacing: "0.02em" }}>
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
