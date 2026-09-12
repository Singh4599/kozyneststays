import Image from "next/image";

const team = [
  {
    title: "Designed for Comfort",
    body: "Every KozyNest apartment is thoughtfully curated with premium furniture, modern appliances, and a cosy atmosphere that makes it feel like your second home.",
  },
  {
    title: "Trusted by 100+ Guests",
    body: "From solo business travellers to families celebrating milestones, our guests keep returning for the seamless experience and personal touch we bring to every stay.",
  },
  {
    title: "Prime Location",
    body: "Nestled inside Paramount Golf Foreste, Zeta-1, Greater Noida — a gated township with lush greenery, 24/7 security, sports facilities, and easy highway access.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      style={{ background: "#1E2A20", overflow: "hidden" }}
    >
      <div className="kn-container" style={{ paddingTop: "clamp(48px, 8vw, 80px)", paddingBottom: "clamp(48px, 8vw, 80px)" }}>

        {/* ── Header row ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6" style={{ marginBottom: "clamp(36px, 5vw, 56px)" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <span style={{ width: "28px", height: "1.5px", background: "#B78955", flexShrink: 0 }} />
              <span style={{ fontSize: "10px", letterSpacing: "0.2em", fontWeight: 700, color: "#B78955", textTransform: "uppercase" }}>
                Our Story
              </span>
            </div>
            <h2
              id="about-heading"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(30px, 4.5vw, 60px)",
                fontWeight: 600, color: "#FAF7F2", lineHeight: 1.06,
                letterSpacing: "-0.02em",
              }}
            >
              About{" "}
              <em style={{ fontStyle: "italic", color: "#B78955" }}>KozyNest</em>
              <br />Stays
            </h2>
          </div>

          <p style={{
            fontSize: "clamp(13.5px, 1vw, 15px)", color: "rgba(250,247,242,0.65)",
            lineHeight: 1.85, maxWidth: "420px",
          }}>
            We are a boutique hospitality brand based in Greater Noida, offering handpicked, fully-furnished short-stay apartments that combine home comfort with hotel convenience.
          </p>
        </div>

        {/* ── 2-col layout: image + cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* Image */}
          <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", aspectRatio: "4/3" }}>
            <Image
              src="/images/properties/kozy-1/cover.jpg"
              alt="KozyNestStays — premium apartment interior"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Overlay badge */}
            <div style={{
              position: "absolute", bottom: "16px", left: "16px",
              background: "rgba(30,42,32,0.85)", backdropFilter: "blur(8px)",
              borderRadius: "12px", padding: "10px 16px",
              border: "1px solid rgba(183,137,85,0.3)",
            }}>
              <p style={{ fontSize: "9px", letterSpacing: "0.15em", color: "#B78955", fontWeight: 700, textTransform: "uppercase", marginBottom: "2px" }}>Established</p>
              <p style={{ fontSize: "18px", fontWeight: 700, color: "#FAF7F2", fontFamily: "var(--font-cormorant), Georgia, serif" }}>Greater Noida</p>
            </div>
          </div>

          {/* Value cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {team.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "20px 22px",
                  background: "rgba(250,247,242,0.05)",
                  border: "1px solid rgba(183,137,85,0.2)",
                  borderRadius: "16px",
                  transition: "background 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <div style={{
                    width: "32px", height: "32px", borderRadius: "8px",
                    background: "rgba(183,137,85,0.15)", border: "1px solid rgba(183,137,85,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#B78955" }}>{i + 1}</span>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: "clamp(14px, 1.2vw, 16px)", fontWeight: 600,
                      color: "#FAF7F2", marginBottom: "6px",
                    }}>{item.title}</h3>
                    <p style={{ fontSize: "clamp(12.5px, 0.9vw, 14px)", color: "rgba(250,247,242,0.6)", lineHeight: 1.75 }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA strip */}
            <a
              href="https://maps.google.com/?q=28.513355,77.525688"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "16px 22px",
                background: "#B78955", borderRadius: "14px",
                textDecoration: "none", marginTop: "4px",
              }}
            >
              <div>
                <p style={{ fontSize: "10px", letterSpacing: "0.15em", fontWeight: 700, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", marginBottom: "2px" }}>Find Us</p>
                <p style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>Paramount Golf Foreste, Zeta-1</p>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        {/* ── Trusted platforms strip ── */}
        <div style={{
          marginTop: "clamp(36px, 5vw, 56px)",
          borderTop: "1px solid rgba(183,137,85,0.2)",
          paddingTop: "clamp(24px, 4vw, 36px)",
        }}>
          <p style={{
            fontSize: "9.5px", letterSpacing: "0.22em", fontWeight: 700,
            color: "rgba(250,247,242,0.4)", textTransform: "uppercase",
            textAlign: "center", marginBottom: "20px",
          }}>
            Listed &amp; Reviewed On
          </p>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            flexWrap: "wrap", gap: "clamp(20px, 4vw, 48px)",
          }}>
            {[
              { name: "Airbnb", color: "#FF5A5F" },
              { name: "Booking.com", color: "#6DA8D4" },
              { name: "Google", color: "#7EAFD4" },
              { name: "MakeMyTrip", color: "#E07070" },
              { name: "Agoda", color: "#5BB8D8" },
            ].map((p) => (
              <span
                key={p.name}
                style={{
                  fontSize: "clamp(16px, 2vw, 22px)",
                  fontWeight: 800,
                  color: p.color,
                  letterSpacing: "-0.02em",
                  opacity: 0.85,
                }}
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
