import Image from "next/image";
import Link from "next/link";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="kn-section"
      style={{ background: "#FAF7F2" }}
      aria-labelledby="experience-heading"
    >
      <div className="kn-container">

        {/* ── DESKTOP: 2-col grid (copy left | image right) ── */}
        <div className="hidden md:grid md:grid-cols-2 items-center gap-16">
          {/* LEFT — full copy */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <span style={{ width: "28px", height: "1.5px", background: "#B78955", flexShrink: 0 }} />
              <p style={{ fontSize: "10px", letterSpacing: "0.2em", fontWeight: 700, color: "#B78955", textTransform: "uppercase" }}>
                Make Every Stay Memorable
              </p>
            </div>
            <h2
              id="experience-heading"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(28px, 4vw, 54px)",
                fontWeight: 600, color: "#1E2A20", lineHeight: 1.08,
                letterSpacing: "-0.02em", marginBottom: "18px",
              }}
            >
              Designed for comfort.<br />
              Made for{" "}
              <em style={{ color: "#B78955", fontStyle: "italic" }}>memories.</em>
            </h2>
            <p style={{
              fontSize: "clamp(13.5px, 1vw, 15px)", color: "#68645E", lineHeight: 1.85,
              marginBottom: "28px", maxWidth: "440px",
            }}>
              Whether it&rsquo;s a weekend getaway, work trip, or a long stay
              &mdash; we&rsquo;ve got the perfect space for every moment.
              Every apartment is fully furnished, professionally cleaned, and ready when you arrive.
            </p>
            <Link
              href="#stays"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "13px 26px", background: "#1E2A20", color: "#FAF7F2",
                fontSize: "14px", fontWeight: 600, borderRadius: "12px",
                textDecoration: "none", minHeight: "48px",
              }}
            >
              Explore All Homes →
            </Link>
          </div>

          {/* RIGHT — image */}
          <div style={{
            position: "relative", borderRadius: "20px", overflow: "hidden",
            aspectRatio: "4/3", width: "100%",
            boxShadow: "0 16px 48px rgba(30,42,32,0.12)",
          }}>
            <Image
              src="/images/properties/kozy-3/3.jpg"
              alt="Luxurious KozyNestStays apartment interior"
              fill
              className="object-cover object-center"
              sizes="50vw"
            />
          </div>
        </div>

        {/* ── MOBILE: eyebrow → heading → image → body → CTA ── */}
        <div className="md:hidden flex flex-col gap-5">
          {/* Eyebrow + Heading */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <span style={{ width: "24px", height: "1.5px", background: "#B78955", flexShrink: 0 }} />
              <p style={{ fontSize: "10px", letterSpacing: "0.2em", fontWeight: 700, color: "#B78955", textTransform: "uppercase" }}>
                Make Every Stay Memorable
              </p>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(28px, 8vw, 40px)",
                fontWeight: 600, color: "#1E2A20", lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              Designed for comfort.<br />
              Made for{" "}
              <em style={{ color: "#B78955", fontStyle: "italic" }}>memories.</em>
            </h2>
          </div>

          {/* Image — after heading on mobile */}
          <div style={{
            position: "relative", borderRadius: "16px", overflow: "hidden",
            aspectRatio: "4/3", width: "100%",
            boxShadow: "0 10px 32px rgba(30,42,32,0.10)",
          }}>
            <Image
              src="/images/properties/kozy-3/3.jpg"
              alt="Luxurious KozyNestStays apartment interior"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>

          {/* Body + CTA */}
          <div>
            <p style={{
              fontSize: "14px", color: "#68645E", lineHeight: 1.8,
              marginBottom: "20px",
            }}>
              Whether it&rsquo;s a weekend getaway, work trip, or a long stay
              &mdash; we&rsquo;ve got the perfect space for every moment.
            </p>
            <Link
              href="#stays"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                padding: "14px 26px", background: "#1E2A20", color: "#FAF7F2",
                fontSize: "14px", fontWeight: 600, borderRadius: "12px",
                textDecoration: "none", minHeight: "48px", width: "100%",
              }}
            >
              Explore All Homes →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
