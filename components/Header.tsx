"use client";

/**
 * Header.tsx — NOW ONLY USED AS A SCROLL-STICKY HEADER AFTER HERO
 * On desktop, the initial hero header is rendered inside Hero.tsx.
 * This component renders a fixed header that appears once the user scrolls past the hero.
 * On mobile, the header inside Hero.tsx handles everything.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Stays", href: "#stays" },
  { label: "About Us", href: "#experience" },
  { label: "Offers", href: "#stays" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show fixed header once scrolled past hero viewport
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        height: "68px",
        background: "rgba(250,247,242,0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #E5DED4",
        boxShadow: "0 1px 12px rgba(30,42,32,0.07)",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.35s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
      role="banner"
      aria-hidden={!visible}
    >
      <div style={{
        maxWidth: "1360px", margin: "0 auto",
        padding: "0 clamp(16px, 5vw, 72px)",
        height: "100%",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px",
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", flexShrink: 0 }}>
          <Image src="/favicon.png" alt="KozyNestStays logo" width={32} height={32} style={{ borderRadius: "7px" }} />
          <div>
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <span style={{ fontWeight: 700, fontSize: "14px", color: "#1E2A20" }}>KozyNest</span>
              <span style={{ fontWeight: 700, fontSize: "14px", color: "#B78955" }}>Stays</span>
            </div>
            <p style={{ fontSize: "7.5px", letterSpacing: "0.12em", color: "#68645E", textTransform: "uppercase", lineHeight: 1 }}>Feel at Home, Anywhere</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center" style={{ gap: "clamp(20px, 2.5vw, 36px)" }} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="nav-link" style={{
              textDecoration: "none", fontSize: "13px", fontWeight: 500, color: "#3D3B38",
              position: "relative", paddingBottom: "2px",
            }}>{link.label}</Link>
          ))}
        </nav>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <button className="hidden lg:flex" style={{
            width: "34px", height: "34px", borderRadius: "8px",
            background: "transparent", border: "1px solid #E5DED4",
            alignItems: "center", justifyContent: "center", cursor: "pointer",
          }} aria-label="View wishlist">
            <Heart size={15} color="#68645E" strokeWidth={1.8} />
          </button>
          <Link href="#stays" style={{
            display: "inline-flex", alignItems: "center",
            padding: "8px 16px", borderRadius: "9px",
            background: "#1E2A20", color: "#FAF7F2",
            fontSize: "13px", fontWeight: 600, textDecoration: "none",
          }}>Book Now</Link>
        </div>
      </div>
    </header>
  );
}
