"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Phone, Mail, MapPin, ArrowRight, ChevronDown } from "lucide-react";

/* ── Social SVGs ──────────────────────────────────────── */
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

/* ── Data ─────────────────────────────────────────────── */
const cols = [
  {
    heading: "Company",
    links: ["About Us", "Our Stays", "Careers", "Blog", "Contact"],
  },
  {
    heading: "Support",
    links: ["Help Center", "Cancellation Policy", "Terms & Conditions", "Privacy Policy", "FAQ"],
  },
  {
    heading: "For Hosts",
    links: ["List Your Property", "Host Resources", "Partner With Us", "Referral Program"],
  },
];

/* ── Mobile accordion column ── */
function FooterAccordion({ heading, links }: { heading: string; links: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #E5DED4" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 0", background: "none", border: "none", cursor: "pointer",
        }}
      >
        <span style={{
          fontSize: "11px", letterSpacing: "0.18em", fontWeight: 700,
          color: "#B78955", textTransform: "uppercase",
        }}>
          {heading}
        </span>
        <ChevronDown
          size={16}
          color="#68645E"
          style={{ transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0)" }}
        />
      </button>
      <div style={{
        maxHeight: open ? "400px" : "0",
        overflow: "hidden",
        transition: "max-height 0.3s ease",
      }}>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", paddingBottom: "16px" }}>
          {links.map((l) => (
            <li key={l}>
              <a href="#" style={{ fontSize: "13.5px", color: "#4A4744", textDecoration: "none" }}
                className="footer-link">{l}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      style={{ background: "#FAF7F2", paddingTop: "48px", paddingBottom: "32px" }}
      aria-label="Site footer"
    >
      <div className="kn-container">

        {/* ── Card ────────────────────────────────── */}
        <div style={{
          background: "#ffffff",
          borderRadius: "20px",
          border: "1px solid #E0DAD2",
          padding: "clamp(24px, 5vw, 48px)",
          boxShadow: "0 4px 32px rgba(30,42,20,0.06)",
          marginBottom: "20px",
        }}>

          {/* Desktop layout — visible from lg+ */}
          <div className="hidden lg:grid" style={{
            gridTemplateColumns: "2fr 1fr 1.1fr 1fr 1.5fr",
            gap: "40px",
          }}>
            {/* Brand col */}
            <div>
              <Link
                href="/"
                style={{ display: "inline-flex", alignItems: "center", gap: "11px", textDecoration: "none", marginBottom: "16px" }}
                aria-label="KozyNestStays home"
              >
                <div style={{
                  width: "36px", height: "36px", borderRadius: "10px",
                  background: "#1E2A20", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Home size={17} color="#FAF7F2" strokeWidth={1.8} />
                </div>
                <div>
                  <div>
                    <span style={{ fontWeight: 800, fontSize: "15px", color: "#1E2A20" }}>KozyNest</span>
                    <span style={{ fontWeight: 800, fontSize: "15px", color: "#B78955" }}>Stays</span>
                  </div>
                  <p style={{ fontSize: "8px", letterSpacing: "0.15em", color: "#68645E", textTransform: "uppercase", lineHeight: 1, marginTop: "2px" }}>
                    Feel at Home, Anywhere
                  </p>
                </div>
              </Link>

              <p style={{ fontSize: "13px", color: "#68645E", lineHeight: 1.8, maxWidth: "220px", marginBottom: "20px" }}>
                Premium stays at Paramount Golf Foreste, Greater Noida — crafted for comfort and memorable experiences.
              </p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                {[
                  { Icon: Phone, text: "+91 9211549792", href: "tel:+919211549792" },
                  { Icon: Mail, text: "hello@kozyneststays.com", href: "mailto:hello@kozyneststays.com" },
                  { Icon: MapPin, text: "Paramount Golf Foreste, Zeta-1, Greater Noida", href: "https://maps.google.com/?q=28.513355,77.525688" },
                ].map(({ Icon, text, href }) => (
                  <li key={text} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <Icon size={13} color="#B78955" aria-hidden="true" style={{ flexShrink: 0, marginTop: "3px" }} />
                    <a href={href} style={{ fontSize: "12px", color: "#68645E", textDecoration: "none", overflowWrap: "anywhere" }}
                      className="footer-link">{text}</a>
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", gap: "8px" }}>
                {[
                  { Icon: InstagramIcon, label: "Instagram", href: "#" },
                  { Icon: LinkedinIcon, label: "LinkedIn", href: "#" },
                  { Icon: WhatsAppIcon, label: "WhatsApp", href: "https://wa.me/919211549792" },
                  { Icon: XIcon, label: "X", href: "#" },
                ].map(({ Icon, label, href }) => (
                  <a key={label} href={href} aria-label={label}
                    style={{
                      width: "34px", height: "34px", borderRadius: "8px",
                      background: "#F2EDE6", border: "1px solid #E0DAD2",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#68645E", textDecoration: "none",
                    }}
                    className="footer-social"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Link cols */}
            {cols.map((col) => (
              <div key={col.heading}>
                <h3 style={{
                  fontSize: "10px", letterSpacing: "0.18em", fontWeight: 700,
                  color: "#B78955", textTransform: "uppercase", marginBottom: "20px",
                }}>
                  {col.heading}
                </h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" style={{ fontSize: "13px", color: "#4A4744", textDecoration: "none" }}
                        className="footer-link">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact CTA col */}
            <div>
              <h3 style={{
                fontSize: "10px", letterSpacing: "0.18em", fontWeight: 700,
                color: "#B78955", textTransform: "uppercase", marginBottom: "20px",
              }}>
                Get in Touch
              </h3>

              <a href="https://wa.me/919211549792" style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "12px 14px", borderRadius: "12px",
                background: "#F2EDE6", border: "1px solid #E0DAD2",
                textDecoration: "none", marginBottom: "10px",
              }}>
                <WhatsAppIcon />
                <div>
                  <p style={{ fontSize: "12px", fontWeight: 600, color: "#1E2A20", lineHeight: 1 }}>WhatsApp Us</p>
                  <p style={{ fontSize: "11px", color: "#68645E", marginTop: "2px" }}>+91 9211549792</p>
                </div>
              </a>

              <a href="mailto:hello@kozyneststays.com" style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "12px 14px", borderRadius: "12px",
                background: "#F2EDE6", border: "1px solid #E0DAD2",
                textDecoration: "none", marginBottom: "14px",
              }}>
                <Mail size={15} color="#B78955" />
                <div>
                  <p style={{ fontSize: "12px", fontWeight: 600, color: "#1E2A20", lineHeight: 1 }}>Email Us</p>
                  <p style={{ fontSize: "10.5px", color: "#68645E", marginTop: "2px", overflowWrap: "anywhere" }}>hello@kozyneststays.com</p>
                </div>
              </a>

              <Link href="#stays" style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                padding: "12px 20px", borderRadius: "12px",
                background: "#1E2A20", color: "#FAF7F2",
                fontSize: "13px", fontWeight: 600, textDecoration: "none", minHeight: "44px",
              }}>
                Book a Stay <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Mobile layout — visible below lg */}
          <div className="lg:hidden">
            {/* Brand + contact */}
            <div style={{ marginBottom: "24px" }}>
              <Link
                href="/"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "14px" }}
                aria-label="KozyNestStays home"
              >
                <div style={{
                  width: "36px", height: "36px", borderRadius: "10px",
                  background: "#1E2A20", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Home size={17} color="#FAF7F2" strokeWidth={1.8} />
                </div>
                <div>
                  <div>
                    <span style={{ fontWeight: 800, fontSize: "15px", color: "#1E2A20" }}>KozyNest</span>
                    <span style={{ fontWeight: 800, fontSize: "15px", color: "#B78955" }}>Stays</span>
                  </div>
                  <p style={{ fontSize: "8px", letterSpacing: "0.15em", color: "#68645E", textTransform: "uppercase", lineHeight: 1, marginTop: "2px" }}>
                    Feel at Home, Anywhere
                  </p>
                </div>
              </Link>

              <p style={{ fontSize: "13px", color: "#68645E", lineHeight: 1.7, marginBottom: "16px" }}>
                Premium stays at Paramount Golf Foreste, Greater Noida.
              </p>

              {/* Contact row */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                {[
                  { Icon: Phone, text: "+91 9211549792", href: "tel:+919211549792" },
                  { Icon: Mail, text: "hello@kozyneststays.com", href: "mailto:hello@kozyneststays.com" },
                  { Icon: MapPin, text: "Paramount Golf Foreste, Zeta-1", href: "https://maps.google.com/?q=28.513355,77.525688" },
                ].map(({ Icon, text, href }) => (
                  <li key={text} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <Icon size={12} color="#B78955" aria-hidden="true" style={{ flexShrink: 0 }} />
                    <a href={href} style={{ fontSize: "12px", color: "#68645E", textDecoration: "none" }}
                      className="footer-link">{text}</a>
                  </li>
                ))}
              </ul>

              {/* Socials */}
              <div style={{ display: "flex", gap: "8px" }}>
                {[
                  { Icon: InstagramIcon, label: "Instagram", href: "#" },
                  { Icon: LinkedinIcon, label: "LinkedIn", href: "#" },
                  { Icon: WhatsAppIcon, label: "WhatsApp", href: "https://wa.me/919211549792" },
                  { Icon: XIcon, label: "X", href: "#" },
                ].map(({ Icon, label, href }) => (
                  <a key={label} href={href} aria-label={label}
                    style={{
                      width: "34px", height: "34px", borderRadius: "8px",
                      background: "#F2EDE6", border: "1px solid #E0DAD2",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#68645E", textDecoration: "none",
                    }}
                    className="footer-social"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Accordion link columns */}
            {cols.map((col) => (
              <FooterAccordion key={col.heading} heading={col.heading} links={col.links} />
            ))}

            {/* Book CTA */}
            <div style={{ marginTop: "20px" }}>
              <Link href="#stays" style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                padding: "14px 20px", borderRadius: "12px",
                background: "#1E2A20", color: "#FAF7F2",
                fontSize: "14px", fontWeight: 600, textDecoration: "none", minHeight: "48px",
              }}>
                Book a Stay <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────── */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "12px", paddingTop: "12px", flexWrap: "wrap",
        }}>
          <p style={{ fontSize: "12px", color: "#888178" }}>
            &copy; {year} KozyNestStays. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {["Privacy Policy", "Terms & Conditions", "Sitemap"].map((l) => (
              <a key={l} href="#" style={{ fontSize: "11.5px", color: "#888178", textDecoration: "none" }}
                className="footer-link">{l}</a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
