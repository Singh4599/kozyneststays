import Image from "next/image";

const stats = [
  { value: "100+", label: "Happy Guests" },
  { value: "5", label: "Curated Properties" },
  { value: "24/7", label: "Guest Support" },
  { value: "1", label: "Premium Location" },
];

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="kn-section"
      style={{ background: "#FAF7F2" }}
      aria-labelledby="stats-heading"
    >
      <div className="kn-container">

        {/* ═══ MOBILE LAYOUT (< md) ═══
            Order: Heading → Image → Stats */}
        <div className="flex flex-col gap-6 md:hidden" style={{ textAlign: "center" }}>
          {/* Heading */}
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "12px" }}>
              <span style={{ width: "24px", height: "1.5px", background: "#B78955", flexShrink: 0 }} />
              <p style={{ fontSize: "10px", letterSpacing: "0.2em", fontWeight: 700, color: "#B78955", textTransform: "uppercase" }}>Our Numbers</p>
            </div>
            <h2
              id="stats-heading"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(26px, 7vw, 36px)",
                fontWeight: 600, color: "#1E2A20", lineHeight: 1.1,
              }}
            >
              Why guests choose
              <br />
              <em style={{ color: "#B78955", fontStyle: "italic" }}>KozyNestStays</em>
            </h2>
          </div>

          {/* Image */}
          <div style={{
            position: "relative", borderRadius: "14px", overflow: "hidden",
            aspectRatio: "4/3", width: "100%",
          }}>
            <Image
              src="/images/stats.jpg"
              alt="Cozy KozyNestStays apartment"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Stats 2x2 */}
          <div className="grid grid-cols-2" style={{ gap: "16px" }}>
            {stats.map((s) => (
              <div key={s.label} style={{ paddingLeft: "12px", borderLeft: "2px solid #E5DED4" }}>
                <p style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(28px, 8vw, 40px)",
                  fontWeight: 700, color: "#1E2A20", lineHeight: 1, marginBottom: "3px",
                }}>{s.value}</p>
                <p style={{ fontSize: "11px", color: "#68645E", fontWeight: 500 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ DESKTOP LAYOUT (md+) ═══
            Side-by-side: Stats left, Image right */}
        <div className="hidden md:grid md:grid-cols-2" style={{ gap: "clamp(32px, 5vw, 64px)", alignItems: "center" }}>
          {/* Left */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ width: "28px", height: "1.5px", background: "#B78955", flexShrink: 0 }} />
              <p style={{ fontSize: "10px", letterSpacing: "0.2em", fontWeight: 700, color: "#B78955", textTransform: "uppercase" }}>Our Numbers</p>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 600, color: "#1E2A20", lineHeight: 1.1, marginBottom: "32px",
              }}
              aria-hidden="true"
            >
              Why guests choose
              <br />
              <em style={{ color: "#B78955", fontStyle: "italic" }}>KozyNestStays</em>
            </h2>

            <div className="grid grid-cols-2" style={{ gap: "24px" }}>
              {stats.map((s) => (
                <div key={s.label} style={{ paddingLeft: "14px", borderLeft: "2px solid #E5DED4" }}>
                  <p style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "clamp(36px, 4.5vw, 52px)",
                    fontWeight: 700, color: "#1E2A20", lineHeight: 1, marginBottom: "4px",
                  }}>{s.value}</p>
                  <p style={{ fontSize: "12px", color: "#68645E", fontWeight: 500 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div style={{
            position: "relative", borderRadius: "16px", overflow: "hidden",
            aspectRatio: "4/3", width: "100%",
          }}>
            <Image
              src="/images/stats.jpg"
              alt="Cozy KozyNestStays apartment interior"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
