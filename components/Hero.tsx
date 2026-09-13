"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { stays } from "@/data/stays";
import BookingModal from "./BookingModal";

/* ── Nav links (same as Header) ── */
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Stays", href: "#stays" },
  { label: "About Us", href: "#experience" },
  { label: "Offers", href: "#stays" },
  { label: "Contact", href: "#contact" },
];

/* ── Amenity strip ── */
const amenities = [
  { icon: "home", title: "Fully Furnished" },
  { icon: "shield", title: "Safe & Secure" },
  { icon: "pin", title: "Prime Location" },
  { icon: "wifi", title: "High-Speed WiFi" },
  { icon: "leaf", title: "Peaceful Surroundings" },
];
const amenityIcons: Record<string, React.ReactNode> = {
  home: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  shield: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  pin: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  wifi: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>,
  leaf: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89-.47.89-1.78C8.5 16 12 14 17 8z"/><path d="M17 8c4-1 6-5 6-5s-4 2-5 6"/></svg>,
};

/* ── Right-side property cards ── */
const heroCards = [
  { stayIndex: 0, top: "12%", right: "clamp(40px, 5vw, 100px)", label: "KozyNest 01", sub: "2 BHK • Golf View", tilt: "rotate(5deg)" },
  { stayIndex: 1, top: "39%", right: "clamp(90px, 11vw, 180px)", label: "KozyNest 02", sub: "1 BHK • City View", tilt: "rotate(-5deg)" },
  { stayIndex: 2, top: "66%", right: "clamp(40px, 5vw, 100px)", label: "KozyNest 03", sub: "Studio • Peaceful", tilt: "rotate(4deg)" },
];

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bookingStay, setBookingStay] = useState<typeof stays[0] | null>(null);
  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════
          MOBILE: Original header + hero (untouched)
      ═══════════════════════════════════════ */}
      <div className="lg:hidden">
        {/* Mobile header */}
        <header
          style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
            height: scrolled ? "64px" : "76px",
            background: "#FAF7F2", borderBottom: "1px solid #E5DED4",
            boxShadow: scrolled ? "0 1px 12px rgba(30,42,32,0.07)" : "none",
            transition: "height 0.3s ease, box-shadow 0.3s ease",
          }}
          role="banner"
        >
          <div style={{
            maxWidth: "1280px", margin: "0 auto",
            padding: "0 clamp(16px, 5vw, 80px)", height: "100%",
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px",
          }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", flexShrink: 0 }}>
              <Image src="/favicon.png" alt="KozyNestStays logo" width={36} height={36} style={{ borderRadius: "8px" }} />
              <div>
                <div style={{ display: "flex", alignItems: "baseline" }}>
                  <span style={{ fontWeight: 700, fontSize: "15px", color: "#1E2A20" }}>KozyNest</span>
                  <span style={{ fontWeight: 700, fontSize: "15px", color: "#B78955" }}>Stays</span>
                </div>
                <p style={{ fontSize: "8.5px", letterSpacing: "0.12em", color: "#68645E", textTransform: "uppercase", lineHeight: 1 }}>Feel at Home, Anywhere</p>
              </div>
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Link href="#stays" style={{
                display: "inline-flex", alignItems: "center",
                padding: "8px 16px", borderRadius: "9px",
                background: "#1E2A20", color: "#FAF7F2",
                fontSize: "13px", fontWeight: 600, textDecoration: "none",
              }}>Book Now</Link>
            </div>
          </div>
        </header>
        <div style={{ height: "76px" }} aria-hidden="true" />

        {/* Mobile hero content */}
        <section style={{ position: "relative", width: "100%", background: "#FAF7F2", overflow: "hidden" }}>
          <div style={{ position: "relative", width: "100%", height: "52vh", minHeight: "300px", maxHeight: "420px" }}>
            <Image src="/images/hero.jpg" alt="Luxurious living room — KozyNestStays Greater Noida" fill className="object-cover object-center" priority sizes="100vw" />
            <div style={{ position: "absolute", top: "16px", left: "16px", color: "rgba(255,255,255,0.85)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", lineHeight: 1.4, textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
              MORE THAN A STAY<br />A BETTER YOU
            </div>
          </div>
          <div style={{ background: "#FAF7F2", borderRadius: "28px 28px 0 0", marginTop: "-28px", position: "relative", zIndex: 2, padding: "28px 24px 0" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ flex: 1, height: "1px", background: "#D5CEBC", maxWidth: "40px" }} />
              <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", color: "#68645E", textTransform: "uppercase" }}>Greater Noida</span>
              <span style={{ flex: 1, height: "1px", background: "#D5CEBC", maxWidth: "40px" }} />
            </div>
            <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(36px, 9.5vw, 50px)", fontWeight: 600, lineHeight: 1.06, letterSpacing: "-0.02em", color: "#1E2A20", marginBottom: "12px", textAlign: "center" }}>
              Your <em style={{ fontStyle: "italic", color: "#B78955", fontWeight: 400 }}>cozy</em> escape<br />starts here.
            </h1>
            <p style={{ fontSize: "13.5px", color: "#68645E", lineHeight: 1.75, marginBottom: "20px", textAlign: "center" }}>
              Handpicked, fully-furnished apartments<br />at Paramount Golf Foreste, Greater Noida —<br />perfect for couples, families &amp; business travelers.
            </p>
            <Link href="#stays" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "100%", padding: "15px 24px", background: "#1E2A20", color: "#FAF7F2", fontSize: "15px", fontWeight: 700, borderRadius: "14px", textDecoration: "none", minHeight: "52px" }}>
              Explore Stays
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "20px 0" }}>
              <span style={{ flex: 1, height: "1px", background: "#E5DED4" }} />
              <span style={{ fontSize: "8px", fontWeight: 700, letterSpacing: "0.18em", color: "#9A9490", textTransform: "uppercase", whiteSpace: "nowrap" }}>Stays Designed For A Better Tomorrow</span>
              <span style={{ flex: 1, height: "1px", background: "#E5DED4" }} />
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "20px" }}>
              {[
                { val: "5", label: "Properties", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E2A20" strokeWidth="1.6"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
                { val: "100+", label: "Happy Guests", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E2A20" strokeWidth="1.6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
                { val: "Zeta-1", label: "Greater Noida", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E2A20" strokeWidth="1.6"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> },
              ].map((s, i) => (
                <div key={s.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", borderRight: i < 2 ? "1px solid #E5DED4" : "none", padding: "0 8px" }}>
                  {s.icon}
                  <span style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "20px", fontWeight: 700, color: "#1E2A20", lineHeight: 1 }}>{s.val}</span>
                  <span style={{ fontSize: "9.5px", color: "#68645E", textAlign: "center", lineHeight: 1.3 }}>{s.label}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", paddingBottom: "20px" }}>
              <div style={{ width: "22px", height: "34px", borderRadius: "12px", border: "1.5px solid #C5BEAF", display: "flex", justifyContent: "center", paddingTop: "5px" }}>
                <div style={{ width: "3px", height: "7px", borderRadius: "2px", background: "#B78955", animation: "scroll-dot 1.6s ease-in-out infinite" }} />
              </div>
              <span style={{ fontSize: "8px", fontWeight: 700, letterSpacing: "0.18em", color: "#9A9490", textTransform: "uppercase" }}>Scroll to Explore</span>
            </div>
          </div>
        </section>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          DESKTOP: Full-viewport hero with BG, header overlay, content
      ═══════════════════════════════════════════════════════════ */}
      <section
        className="hidden lg:block"
        aria-label="Hero — KozyNestStays premium stays in Greater Noida"
        style={{
          position: "relative",
          width: "100%",
          height: "100svh",
          minHeight: "760px",
          overflow: "hidden",
          background: "#E8E0D5", /* fallback while image loads */
        }}
      >
        {/* ── z-0: Full background artwork ── */}
        <Image
          src="/images/hero-desktop-bg-try.png"
          alt="KozyNestStays — premium architectural interior at Paramount Golf Foreste"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "20% top",
            zIndex: 0,
          }}
        />


        {/* ── z-30: Desktop header overlay ── */}
        <header
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            zIndex: 30,
            height: "84px",
            background: scrolled ? "rgba(250,247,242,0.95)" : "transparent",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            borderBottom: scrolled ? "1px solid rgba(229,222,212,0.3)" : "1px solid transparent",
            transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease",
          }}
          role="banner"
        >
          <div style={{
            maxWidth: "1360px", margin: "0 auto",
            padding: "0 clamp(24px, 4vw, 72px)",
            height: "100%",
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px",
          }}>
            {/* Logo */}
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", flexShrink: 0 }}>
              <Image src="/favicon.png" alt="KozyNestStays logo" width={36} height={36} style={{ borderRadius: "8px" }} />
              <div>
                <div style={{ display: "flex", alignItems: "baseline" }}>
                  <span style={{ fontWeight: 700, fontSize: "15px", color: "#1E2A20" }}>KozyNest</span>
                  <span style={{ fontWeight: 700, fontSize: "15px", color: "#B78955" }}>Stays</span>
                </div>
                <p style={{ fontSize: "8.5px", letterSpacing: "0.12em", color: "#68645E", textTransform: "uppercase", lineHeight: 1 }}>Feel at Home, Anywhere</p>
              </div>
            </Link>

            {/* Nav */}
            <nav style={{ display: "flex", alignItems: "center", gap: "clamp(20px, 2.5vw, 40px)" }} aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className="nav-link" style={{
                  textDecoration: "none", fontSize: "13.5px", fontWeight: 500, color: "#3D3B38",
                  position: "relative", paddingBottom: "2px",
                }}>{link.label}</Link>
              ))}
            </nav>

            {/* Right actions */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
              <button style={{
                width: "36px", height: "36px", borderRadius: "8px",
                background: "rgba(255,255,255,0.6)", border: "1px solid rgba(229,222,212,0.5)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
              }} aria-label="View wishlist">
                <Heart size={16} color="#68645E" strokeWidth={1.8} />
              </button>
              <Link href="#stays" style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "9px 18px", borderRadius: "9px",
                background: "#1E2A20", color: "#FAF7F2",
                fontSize: "13px", fontWeight: 600, textDecoration: "none",
              }}>
                Book Now
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </header>

        {/* ── z-10: Left editorial content ── */}
        <div style={{
          position: "absolute",
          top: 0, bottom: 0, left: 0, right: 0,
          zIndex: 10,
          pointerEvents: "none",
        }}>
          <div style={{
            maxWidth: "1360px", margin: "0 auto",
            padding: "0 clamp(24px, 4vw, 72px)",
            height: "100%",
            display: "flex", flexDirection: "column", justifyContent: "center",
          }}>
            <div style={{
              pointerEvents: "auto",
              maxWidth: "clamp(300px, 24vw, 400px)",
              marginLeft: "clamp(24px, 5vw, 80px)", /* push text to the right to match reference */
              paddingTop: "84px",  /* account for header */
              paddingBottom: "120px", /* account for booking bar + amenities */
            }}>
          {/* Eyebrow */}
          <p style={{
            fontSize: "10px", letterSpacing: "0.22em", fontWeight: 700,
            color: "#5A564F", textTransform: "uppercase",
            lineHeight: 1.7, marginBottom: "clamp(16px, 2vh, 28px)",
          }}>
            More than a stay<br />A better you
          </p>

          {/* Headline: "Your space." */}
          <div style={{ marginBottom: "clamp(4px, 0.5vh, 8px)" }}>
            <span style={{
              display: "block",
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(70px, 8.5vw, 130px)",
              fontWeight: 700, lineHeight: 0.85,
              letterSpacing: "-0.04em", color: "#16231A",
            }}>Your</span>
            <span style={{
              display: "block",
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(70px, 8.5vw, 130px)",
              fontWeight: 700, lineHeight: 0.85,
              letterSpacing: "-0.04em", color: "#16231A",
            }}>space.</span>
          </div>

          {/* Headline: "Your pace." */}
          <div style={{ marginBottom: "clamp(18px, 2.5vh, 30px)" }}>
            <span style={{
              display: "block",
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(70px, 8.5vw, 130px)",
              fontWeight: 400, fontStyle: "italic",
              lineHeight: 0.85, letterSpacing: "-0.04em",
              color: "#C4A56E",
            }}>Your</span>
            <span style={{
              display: "block",
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(70px, 8.5vw, 130px)",
              fontWeight: 400, fontStyle: "italic",
              lineHeight: 0.85, letterSpacing: "-0.04em",
              color: "#C4A56E",
            }}>pace.</span>
          </div>

          {/* Description */}
          <p style={{
            fontSize: "clamp(13px, 0.95vw, 15px)",
            color: "#5A564F", lineHeight: 1.75,
            maxWidth: "340px",
            marginBottom: "clamp(18px, 2vh, 26px)",
          }}>
            Handpicked, fully-furnished apartments<br />
            at Paramount Golf Foreste, Greater Noida<br />
            — for every kind of traveler.
          </p>

          {/* Watch Our Story */}
          <Link href="#stays" style={{
            display: "inline-flex", alignItems: "center", gap: "12px",
            textDecoration: "none", color: "#1E2A20",
            fontSize: "13.5px", fontWeight: 500,
          }}>
            <span style={{
              width: "42px", height: "42px", borderRadius: "50%",
              border: "1.5px solid #D5CEBC", background: "rgba(255,255,255,0.7)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 2px 10px rgba(30,42,32,0.06)",
            }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="#1E2A20"><polygon points="6,3 20,12 6,21" /></svg>
            </span>
            Watch Our Story
          </Link>
            </div>
          </div>
        </div>

        {/* ── z-12: Property Cards (Floating on Right Wall) ── */}
        {heroCards.map((card, i) => {
          const stay = stays[card.stayIndex];
          return (
            <button
              key={card.label}
              onClick={() => setBookingStay(stay)}
              onMouseEnter={() => setHoveredHotspot(i)}
              onMouseLeave={() => setHoveredHotspot(null)}
              aria-label={`View ${card.label}`}
              style={{
                position: "absolute",
                top: card.top,
                right: card.right,
                width: "clamp(180px, 14vw, 220px)",
                zIndex: 12,
                background: "rgba(250, 246, 240, 0.95)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.8)",
                borderRadius: "18px",
                padding: "6px",
                cursor: "pointer",
                textAlign: "left",
                transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, z-index 0s",
                transform: hoveredHotspot === i ? `translateY(-6px) scale(1.05) rotate(0deg)` : `translateY(0) scale(1) ${card.tilt}`,
                boxShadow: hoveredHotspot === i 
                  ? "0 24px 40px rgba(0,0,0,0.12), 0 0 30px rgba(255,255,255,0.8)" 
                  : "0 10px 30px rgba(0,0,0,0.08), 0 0 20px rgba(255,255,255,0.4)",
              }}
            >
              {/* Card Image */}
              <div style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1.6",
                borderRadius: "14px",
                overflow: "hidden",
                marginBottom: "10px",
              }}>
                <Image
                  src={stay.images[0] || "/images/hero.jpg"}
                  alt={card.label}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.6s ease", transform: hoveredHotspot === i ? "scale(1.05)" : "scale(1)" }}
                />
              </div>

              {/* Card Info */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 4px 2px" }}>
                <div>
                  <p style={{ fontSize: "11.5px", fontWeight: 700, color: "#1E2A20", marginBottom: "1px" }}>{card.label}</p>
                  <p style={{ fontSize: "8.5px", color: "#68645E" }}>{card.sub}</p>
                </div>
                <div style={{
                  width: "24px", height: "24px",
                  borderRadius: "50%",
                  background: hoveredHotspot === i ? "#1E2A20" : "#FFF",
                  border: "1px solid #E5DED4",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.3s ease",
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={hoveredHotspot === i ? "#fff" : "#1E2A20"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </button>
          );
        })}

        {/* ── z-20: Floating booking bar ── */}
        <div style={{
          position: "absolute",
          bottom: "clamp(52px, 7vh, 88px)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          width: "clamp(560px, 44vw, 740px)",
          animation: "heroBarUp 0.6s ease-out 0.3s both",
        }}>
          <div style={{
            background: "rgba(255,255,255,0.88)",
            backdropFilter: "blur(16px)",
            borderRadius: "22px",
            padding: "4px 6px 4px 18px",
            display: "flex",
            alignItems: "center",
            boxShadow: "0 8px 40px rgba(30,42,32,0.10), 0 0 0 1px rgba(229,222,212,0.4)",
          }}>
            {/* Check-in */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 10px 7px 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#68645E" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <div>
                  <p style={{ fontSize: "10px", fontWeight: 600, color: "#1E2A20", marginBottom: "1px" }}>Check-in</p>
                  <p style={{ fontSize: "9px", color: "#9A9490" }}>Select date</p>
                </div>
              </div>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9A9490" strokeWidth="1.5"><path d="M6 9l6 6 6-6"/></svg>
            </div>
            <div style={{ width: "1px", height: "28px", background: "#E5DED4", flexShrink: 0 }} />

            {/* Check-out */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#68645E" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <div>
                  <p style={{ fontSize: "10px", fontWeight: 600, color: "#1E2A20", marginBottom: "1px" }}>Check-out</p>
                  <p style={{ fontSize: "9px", color: "#9A9490" }}>Select date</p>
                </div>
              </div>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9A9490" strokeWidth="1.5"><path d="M6 9l6 6 6-6"/></svg>
            </div>
            <div style={{ width: "1px", height: "28px", background: "#E5DED4", flexShrink: 0 }} />

            {/* Guests */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#68645E" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                <div>
                  <p style={{ fontSize: "10px", fontWeight: 600, color: "#1E2A20", marginBottom: "1px" }}>Guests</p>
                  <p style={{ fontSize: "9px", color: "#9A9490" }}>2 Guests</p>
                </div>
              </div>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9A9490" strokeWidth="1.5"><path d="M6 9l6 6 6-6"/></svg>
            </div>

            {/* CTA */}
            <button
              onClick={() => setBookingStay(stays[0])}
              style={{
                display: "flex", alignItems: "center", gap: "5px",
                padding: "10px 18px",
                background: "#1E2A20", color: "#FAF7F2",
                fontSize: "12px", fontWeight: 600,
                borderRadius: "18px", border: "none",
                cursor: "pointer", whiteSpace: "nowrap",
                minHeight: "38px",
                boxShadow: "0 4px 14px rgba(30,42,32,0.22)",
              }}
            >
              Find a Stay
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* ── z-25: Bottom amenity strip (Transparent) ── */}
        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          zIndex: 25,
          padding: "16px 0 20px", /* slight padding boost for floor placement */
        }}>
          <div style={{
            maxWidth: "1280px", margin: "0 auto",
            padding: "0 clamp(24px, 4vw, 60px)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            color: "#3D3B38",
          }}>
            {amenities.map((a, i) => (
              <div key={a.title} style={{
                display: "flex", alignItems: "center", gap: "7px",
                paddingRight: i < amenities.length - 1 ? "clamp(8px, 1.2vw, 16px)" : "0",
                borderRight: i < amenities.length - 1 ? "1px solid rgba(229,222,212,0.5)" : "none",
                paddingLeft: i > 0 ? "clamp(8px, 1.2vw, 16px)" : "0",
              }}>
                <div style={{ opacity: 0.55 }}>{amenityIcons[a.icon]}</div>
                <p style={{ fontSize: "11.5px", fontWeight: 600, color: "#1E2A20" }}>{a.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking modal — reuses existing */}
      {bookingStay && (
        <BookingModal
          stay={bookingStay}
          allStays={stays}
          open={!!bookingStay}
          onClose={() => setBookingStay(null)}
        />
      )}
    </>
  );
}
