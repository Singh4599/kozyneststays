import Image from "next/image";
import { CheckCircle, ShieldCheck, BadgeDollarSign, Headphones, Sparkles, Star } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Handpicked Homes",
    desc: "Every property is personally vetted for quality, comfort & cleanliness.",
    img: "/images/properties/kozy-1/cover.jpg",
    dark: true,
  },
  {
    icon: ShieldCheck,
    title: "Trusted & Safe",
    desc: "Verified hosts, secure payments, and full guest protection on every booking.",
    img: "/images/properties/kozy-5/cover.jpg",
    dark: false,
  },
  {
    icon: BadgeDollarSign,
    title: "Best Price Guarantee",
    desc: "We match or beat any lower rate you find — no questions asked.",
    img: "/images/properties/kozy-1/2.jpg",
    dark: true,
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Our local team is on call around the clock to help with anything.",
    img: "/images/properties/kozy-3/cover.jpg",
    dark: false,
  },
  {
    icon: Sparkles,
    title: "Hotel-Grade Clean",
    desc: "Professional deep-cleaning after every checkout. Fresh linens every time.",
    img: "/images/properties/kozy-4/cover.jpg",
    dark: true,
  },
  {
    icon: Star,
    title: "Premium Location",
    desc: "Located at Paramount Golf Foreste, Zeta-1 — one of Greater Noida's finest addresses.",
    img: "/images/properties/kozy-2/cover.jpg",
    dark: false,
  },
];

export default function Benefits() {
  return (
    <section
      aria-label="Why choose KozyNestStays"
      className="kn-section"
      style={{ background: "#FAF7F2" }}
    >
      <div className="kn-container">

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(24px, 4vw, 48px)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
            <span style={{ width: "28px", height: "1.5px", background: "#B78955" }} />
            <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", color: "#B78955", textTransform: "uppercase" }}>
              Why KozyNestStays
            </p>
            <span style={{ width: "28px", height: "1.5px", background: "#B78955" }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(26px, 4.5vw, 56px)",
            fontWeight: 600, color: "#1E2A20",
            letterSpacing: "-0.02em", lineHeight: 1.08,
          }}>
            The KozyNest Difference
          </h2>
        </div>

        {/* Cards — 2x3 on mobile, 3x2 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3" style={{ gap: "clamp(10px, 2.5vw, 20px)" }}>
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="benefit-card"
                style={{
                  position: "relative",
                  borderRadius: "clamp(10px, 2vw, 18px)",
                  overflow: "hidden",
                  aspectRatio: "5 / 3",
                  cursor: "default",
                }}
              >
                {/* BG image */}
                <Image
                  src={b.img}
                  alt={b.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  style={{ transition: "transform 0.5s ease" }}
                />

                {/* Gradient — light at top so photo shows, darker at bottom for text */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.18) 40%, rgba(0,0,0,0.72) 100%)",
                }} />

                {/* Content */}
                <div style={{
                  position: "absolute", inset: 0,
                  display: "flex", flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "clamp(12px, 3vw, 24px)",
                }}>
                  {/* Icon */}
                  <div style={{
                    width: "clamp(30px, 5vw, 42px)", height: "clamp(30px, 5vw, 42px)",
                    borderRadius: "clamp(8px, 1.5vw, 12px)",
                    background: b.dark ? "rgba(183,137,85,0.25)" : "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(8px)",
                    border: `1px solid ${b.dark ? "rgba(183,137,85,0.4)" : "rgba(255,255,255,0.3)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon className="w-[clamp(14px,2vw,20px)] h-[clamp(14px,2vw,20px)]" color={b.dark ? "#C8995F" : "#fff"} strokeWidth={1.6} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 style={{
                      fontSize: "clamp(14px, 1.6vw, 22px)", fontWeight: 700,
                      color: "#fff", letterSpacing: "-0.01em",
                      marginBottom: "clamp(4px, 0.6vw, 10px)",
                      textShadow: "0 2px 12px rgba(0,0,0,0.5)",
                      lineHeight: 1.2,
                    }}>
                      {b.title}
                    </h3>
                    <p className="hidden sm:block" style={{
                      fontSize: "clamp(11px, 1.1vw, 14px)", color: "rgba(255,255,255,0.88)",
                      lineHeight: 1.55, maxWidth: "260px",
                      textShadow: "0 1px 6px rgba(0,0,0,0.5)",
                    }}>
                      {b.desc}
                    </p>

                    {/* Accent */}
                    <div style={{
                      display: "flex", alignItems: "center", gap: "4px",
                      marginTop: "clamp(6px, 1vw, 14px)",
                    }}>
                      <div style={{ width: "18px", height: "2px", borderRadius: "2px", background: b.dark ? "#C8995F" : "#fff" }} />
                      <div style={{ width: "6px", height: "2px", borderRadius: "2px", background: "rgba(255,255,255,0.3)" }} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
