"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Stays", href: "#stays" },
  { label: "About Us", href: "#about" },
  { label: "Offers", href: "#offers" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: scrolled ? "64px" : "76px",
          background: "#FAF7F2",
          borderBottom: "1px solid #E5DED4",
          boxShadow: scrolled ? "0 1px 12px rgba(30,42,32,0.07)" : "none",
          transition: "height 0.3s ease, box-shadow 0.3s ease",
        }}
        role="banner"
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 clamp(16px, 5vw, 80px)",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", flexShrink: 0 }}
            aria-label="KozyNestStays — go to homepage"
          >
            <Image
              src="/favicon.png"
              alt="KozyNestStays logo"
              width={36}
              height={36}
              style={{ borderRadius: "8px", display: "block" }}
            />
            <div>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <span style={{ fontWeight: 700, fontSize: "15px", color: "#1E2A20", letterSpacing: "-0.01em" }}>KozyNest</span>
                <span style={{ fontWeight: 700, fontSize: "15px", color: "#B78955", letterSpacing: "-0.01em" }}>Stays</span>
              </div>
              <p style={{ fontSize: "8.5px", letterSpacing: "0.12em", color: "#68645E", textTransform: "uppercase", lineHeight: 1 }}>
                Feel at Home, Anywhere
              </p>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav
            className="hidden lg:flex items-center"
            style={{ gap: "36px" }}
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="nav-link"
                style={{
                  textDecoration: "none",
                  fontSize: "13.5px",
                  fontWeight: 500,
                  color: "#3D3B38",
                  position: "relative",
                  paddingBottom: "2px",
                }}
                aria-label={link.label}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div
            style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}
          >
            {/* Wishlist */}
            <button
              className="hidden lg:flex"
              style={{
                width: "36px", height: "36px", borderRadius: "8px",
                background: "transparent", border: "1px solid #E5DED4",
                alignItems: "center", justifyContent: "center",
                cursor: "pointer", flexShrink: 0,
              }}
              aria-label="View wishlist"
            >
              <Heart size={16} color="#68645E" strokeWidth={1.8} />
            </button>

            {/* Book Now */}
            <Link
              href="#stays"
              style={{
                display: "inline-flex", alignItems: "center",
                padding: "8px 16px", borderRadius: "9px",
                background: "#1E2A20", color: "#FAF7F2",
                fontSize: "13px", fontWeight: 600, textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Book Now
            </Link>
          </div>
        </div>
      </header>


      {/* Push content below fixed header */}
      <div style={{ height: "76px" }} aria-hidden="true" />
    </>
  );
}
