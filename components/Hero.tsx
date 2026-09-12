import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section
        aria-label="Hero — KozyNestStays premium stays in Greater Noida"
        style={{ position: "relative", width: "100%", background: "#FAF7F2", overflow: "hidden" }}
      >
        {/* ═══════════════════════════════════════
            MOBILE HERO — Reference card design
            Full image top + rounded white card
        ═══════════════════════════════════════ */}
        <div className="lg:hidden" style={{ position: "relative", background: "#FAF7F2" }}>

          {/* Hero image — full width, fixed height */}
          <div style={{ position: "relative", width: "100%", height: "52vh", minHeight: "300px", maxHeight: "420px" }}>
            <Image
              src="/images/hero.jpg"
              alt="Luxurious living room — KozyNestStays Greater Noida"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            {/* Subtle tag top-left */}
            <div style={{
              position: "absolute", top: "16px", left: "16px",
              color: "rgba(255,255,255,0.85)",
              fontSize: "9px", fontWeight: 600, letterSpacing: "0.18em",
              textTransform: "uppercase", lineHeight: 1.4,
              textShadow: "0 1px 6px rgba(0,0,0,0.4)",
            }}>
              MORE THAN A STAY<br />A BETTER YOU
            </div>
          </div>

          {/* Rounded white card panel */}
          <div style={{
            background: "#FAF7F2",
            borderRadius: "28px 28px 0 0",
            marginTop: "-28px",
            position: "relative",
            zIndex: 2,
            padding: "28px 24px 0",
          }}>
            {/* Eyebrow with lines */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: "10px", marginBottom: "16px",
            }}>
              <span style={{ flex: 1, height: "1px", background: "#D5CEBC", maxWidth: "40px" }} />
              <span style={{
                fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em",
                color: "#68645E", textTransform: "uppercase",
              }}>Greater Noida</span>
              <span style={{ flex: 1, height: "1px", background: "#D5CEBC", maxWidth: "40px" }} />
            </div>

            {/* H1 */}
            <h1 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(36px, 9.5vw, 50px)",
              fontWeight: 600, lineHeight: 1.06,
              letterSpacing: "-0.02em", color: "#1E2A20",
              marginBottom: "12px",
              textAlign: "center",
            }}>
              Your{" "}
              <em style={{ fontStyle: "italic", color: "#B78955", fontWeight: 400 }}>cozy</em>
              {" "}escape<br />starts here.
            </h1>

            {/* Body */}
            <p style={{
              fontSize: "13.5px", color: "#68645E", lineHeight: 1.75,
              marginBottom: "20px",
              textAlign: "center",
            }}>
              Handpicked, fully-furnished apartments<br />
              at Paramount Golf Foreste, Greater Noida —<br />
              perfect for couples, families &amp; business travelers.
            </p>

            {/* CTA full-width */}
            <Link
              href="#stays"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                width: "100%",
                padding: "15px 24px",
                background: "#1E2A20", color: "#FAF7F2",
                fontSize: "15px", fontWeight: 700,
                borderRadius: "14px", textDecoration: "none",
                minHeight: "52px",
              }}
            >
              Explore Stays
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>

            {/* Divider with tagline */}
            <div style={{
              display: "flex", alignItems: "center", gap: "10px",
              margin: "20px 0",
            }}>
              <span style={{ flex: 1, height: "1px", background: "#E5DED4" }} />
              <span style={{
                fontSize: "8px", fontWeight: 700, letterSpacing: "0.18em",
                color: "#9A9490", textTransform: "uppercase", whiteSpace: "nowrap",
              }}>Stays Designed For A Better Tomorrow</span>
              <span style={{ flex: 1, height: "1px", background: "#E5DED4" }} />
            </div>

            {/* Stats with icons */}
            <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "20px" }}>
              {[
                {
                  val: "5",
                  label: "Properties",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E2A20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  ),
                },
                {
                  val: "100+",
                  label: "Happy Guests",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E2A20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  ),
                },
                {
                  val: "Zeta-1",
                  label: "Greater Noida",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E2A20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  ),
                },
              ].map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    flex: 1,
                    display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
                    borderRight: i < 2 ? "1px solid #E5DED4" : "none",
                    padding: "0 8px",
                  }}
                >
                  {s.icon}
                  <span style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "20px", fontWeight: 700, color: "#1E2A20", lineHeight: 1,
                  }}>{s.val}</span>
                  <span style={{
                    fontSize: "9.5px", color: "#68645E", textAlign: "center", lineHeight: 1.3,
                  }}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* Scroll indicator */}
            <div style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
              paddingBottom: "20px",
            }}>
              <div style={{
                width: "22px", height: "34px", borderRadius: "12px",
                border: "1.5px solid #C5BEAF",
                display: "flex", justifyContent: "center", paddingTop: "5px",
              }}>
                <div style={{
                  width: "3px", height: "7px", borderRadius: "2px",
                  background: "#B78955",
                  animation: "scroll-dot 1.6s ease-in-out infinite",
                }} />
              </div>
              <span style={{ fontSize: "8px", fontWeight: 700, letterSpacing: "0.18em", color: "#9A9490", textTransform: "uppercase" }}>
                Scroll to Explore
              </span>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            DESKTOP HERO — Split layout (unchanged)
        ═══════════════════════════════════════ */}
        {/* Right-side image panel */}
        <div
          aria-hidden="true"
          className="hidden lg:block"
          style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "50%" }}
        >
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="50vw"
          />
          <div style={{
            position: "absolute", inset: "0 auto 0 0", width: "180px",
            background: "linear-gradient(to right, #FAF7F2 0%, rgba(250,247,242,0) 100%)",
          }} />
          <div style={{
            position: "absolute", top: "28px", right: "28px", zIndex: 2,
            display: "grid", gridTemplateColumns: "repeat(5,8px)", gap: "8px", opacity: 0.35,
          }}>
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#1E2A20" }} />
            ))}
          </div>
        </div>

        {/* Desktop content */}
        <div className="hidden lg:block kn-container" style={{ position: "relative", zIndex: 10 }}>
          <div style={{
            paddingTop: "clamp(60px, 8vw, 100px)",
            paddingBottom: "clamp(60px, 8vw, 80px)",
            maxWidth: "560px",
          }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "rgba(183,137,85,0.10)", border: "1px solid rgba(183,137,85,0.25)",
              borderRadius: "100px", padding: "6px 16px 6px 8px", marginBottom: "24px",
            }}>
              <span style={{
                background: "#B78955", borderRadius: "100px",
                padding: "3px 10px", fontSize: "9px", fontWeight: 700,
                color: "#fff", letterSpacing: "0.1em", textTransform: "uppercase",
              }}>New</span>
              <span style={{ fontSize: "12px", color: "#B78955", fontWeight: 500 }}>
                Greater Noida&apos;s Most Loved Stays
              </span>
            </div>

            <h1 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(48px, 5.8vw, 76px)",
              fontWeight: 600, lineHeight: 1.04,
              letterSpacing: "-0.02em", color: "#1E2A20", marginBottom: "20px",
            }}>
              Your cozy{" "}
              <em style={{ fontStyle: "italic", color: "#B78955", fontWeight: 300 }}>escape</em>
              <br />starts here.
            </h1>

            <p style={{
              fontSize: "clamp(14px, 1vw, 16px)", color: "#68645E", lineHeight: 1.85,
              maxWidth: "420px", marginBottom: "32px",
            }}>
              Handpicked, fully-furnished apartments at Paramount Golf Foreste,
              Greater Noida — perfect for couples, families &amp; business travelers.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", marginBottom: "40px" }}>
              <Link
                href="#stays"
                className="hero-cta-primary"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "14px 28px",
                  background: "#1E2A20", color: "#FAF7F2",
                  fontSize: "14px", fontWeight: 700,
                  borderRadius: "14px", textDecoration: "none",
                  boxShadow: "0 6px 24px rgba(30,42,32,0.25)", minHeight: "48px",
                }}
              >
                Explore Stays
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>

              <Link
                href="#experience"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "12px",
                  fontSize: "14px", fontWeight: 500, color: "#1E2A20", textDecoration: "none",
                }}
              >
                <span style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  border: "1.5px solid #D5CEBC", background: "#fff",
                  display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  boxShadow: "0 2px 8px rgba(30,42,32,0.07)",
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5,3 19,12 5,21" /></svg>
                </span>
                See how it works
              </Link>
            </div>

            <div style={{
              display: "flex", alignItems: "center",
              paddingTop: "20px", borderTop: "1px solid #E5DED4",
            }}>
              {[
                { val: "5", label: "Properties" },
                { val: "100+", label: "Happy Guests" },
                { val: "Zeta-1", label: "Greater Noida" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    paddingRight: i < 2 ? "clamp(16px, 3vw, 28px)" : "0",
                    paddingLeft: i > 0 ? "clamp(16px, 3vw, 28px)" : "0",
                    borderRight: i < 2 ? "1px solid #E5DED4" : "none",
                    display: "flex", flexDirection: "column", gap: "3px",
                  }}
                >
                  <span style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "clamp(22px, 2.8vw, 34px)",
                    fontWeight: 700, color: "#1E2A20", lineHeight: 1,
                  }}>{s.val}</span>
                  <span style={{ fontSize: "clamp(10px, 1vw, 11.5px)", color: "#9A9490", letterSpacing: "0.02em" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
