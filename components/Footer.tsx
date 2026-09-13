"use client";

import Image from "next/image";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

/* ── Social SVGs ── */
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const properties = [
  { name: "Kozynest Unit 1", price: "₹1,400/night" },
  { name: "Kozynest Unit 2", price: "₹1,600/night" },
  { name: "Kozynest Unit 3", price: "₹1,600/night" },
  { name: "Kozynest Unit 4", price: "₹1,800/night" },
  { name: "Kozynest Unit 5", price: "₹2,000/night" },
];

const amenities = [
  "High-Speed WiFi",
  "Air Conditioning",
  "Equipped Kitchen",
  "Fresh Linens",
  "Smart TV",
  "24/7 Support",
  "Secure Parking",
  "Daily Housekeeping",
];

const socials = [
  { Icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/hosteransh" },
  { Icon: WhatsAppIcon, label: "WhatsApp", href: "https://wa.me/919211549792" },
  { Icon: PhoneIcon, label: "Call Us", href: "tel:+919211549792" },
];

const HEADING: React.CSSProperties = {
  fontSize: "10px", letterSpacing: "0.18em", fontWeight: 700,
  color: "#B78955", textTransform: "uppercase", marginBottom: "18px",
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      style={{ background: "#FAF7F2", paddingTop: "48px", paddingBottom: "32px" }}
      aria-label="Site footer"
    >
      <div className="kn-container">

        {/* ── Main Card ── */}
        <div style={{
          background: "#ffffff",
          borderRadius: "20px",
          border: "1px solid #E0DAD2",
          padding: "clamp(24px, 5vw, 48px)",
          boxShadow: "0 4px 32px rgba(30,42,20,0.06)",
          marginBottom: "20px",
        }}>

          {/* ── Desktop: 4-col grid ── */}
          <div className="hidden lg:grid" style={{ gridTemplateColumns: "1.8fr 1.2fr 1.2fr 1.4fr", gap: "40px" }}>

            {/* Col 1 — Brand */}
            <div>
              <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "11px", textDecoration: "none", marginBottom: "14px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", overflow: "hidden", flexShrink: 0 }}>
                  <Image src="/favicon.png" alt="KozyNestStays logo" width={36} height={36} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </div>
                <div>
                  <span style={{ fontWeight: 800, fontSize: "15px", color: "#1E2A20" }}>KozyNest</span>
                  <span style={{ fontWeight: 800, fontSize: "15px", color: "#B78955" }}>Stays</span>
                  <p style={{ fontSize: "8px", letterSpacing: "0.15em", color: "#68645E", textTransform: "uppercase", lineHeight: 1, marginTop: "2px" }}>Feel at Home, Anywhere</p>
                </div>
              </Link>

              <p style={{ fontSize: "13px", color: "#68645E", lineHeight: 1.8, maxWidth: "230px", marginBottom: "18px" }}>
                Premium short-stay apartments at Paramount Golf Foreste, Zeta-1, Greater Noida — crafted for comfort and memorable experiences.
              </p>

              {/* Contact details */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "9px", marginBottom: "18px" }}>
                {[
                  { Icon: Phone, text: "+91 9211549792", href: "tel:+919211549792" },
                  { Icon: Mail, text: "Anshpandit0074@gmail.com", href: "mailto:Anshpandit0074@gmail.com" },
                  { Icon: MapPin, text: "Paramount Golf Foreste, Zeta-1, Greater Noida", href: "https://maps.google.com/?q=28.513355,77.525688" },
                ].map(({ Icon, text, href }) => (
                  <li key={text} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <Icon size={12} color="#B78955" style={{ flexShrink: 0, marginTop: "3px" }} />
                    <a href={href} style={{ fontSize: "12px", color: "#68645E", textDecoration: "none", overflowWrap: "anywhere" }} className="footer-link">{text}</a>
                  </li>
                ))}
              </ul>

              {/* Socials */}
              <div style={{ display: "flex", gap: "8px" }}>
                {socials.map(({ Icon, label, href }) => (
                  <a key={label} href={href} aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{
                      width: "34px", height: "34px", borderRadius: "8px",
                      background: "#F2EDE6", border: "1px solid #E0DAD2",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#68645E", textDecoration: "none",
                    }}
                    className="footer-social"
                  ><Icon /></a>
                ))}
              </div>
            </div>

            {/* Col 2 — Our Properties */}
            <div>
              <h3 style={HEADING}>Our Properties</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                {properties.map((p) => (
                  <li key={p.name}>
                    <Link href="#stays" style={{ textDecoration: "none" }} className="footer-link">
                      <p style={{ fontSize: "13px", fontWeight: 600, color: "#1E2A20", marginBottom: "1px" }}>{p.name}</p>
                      <p style={{ fontSize: "11px", color: "#B78955" }}>{p.price}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — At Every Property */}
            <div>
              <h3 style={HEADING}>At Every Property</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {amenities.map((a) => (
                  <li key={a} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#B78955", flexShrink: 0 }} />
                    <span style={{ fontSize: "13px", color: "#4A4744" }}>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Get in Touch */}
            <div>
              <h3 style={HEADING}>Get in Touch</h3>

              <a href="https://wa.me/919211549792" target="_blank" rel="noopener noreferrer" style={{
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

              <a href="mailto:Anshpandit0074@gmail.com" style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "12px 14px", borderRadius: "12px",
                background: "#F2EDE6", border: "1px solid #E0DAD2",
                textDecoration: "none", marginBottom: "10px",
              }}>
                <Mail size={15} color="#B78955" />
                <div>
                  <p style={{ fontSize: "12px", fontWeight: 600, color: "#1E2A20", lineHeight: 1 }}>Email Us</p>
                  <p style={{ fontSize: "10.5px", color: "#68645E", marginTop: "2px" }}>Anshpandit0074@gmail.com</p>
                </div>
              </a>

              <a href="https://maps.google.com/?q=28.513355,77.525688" target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "12px 14px", borderRadius: "12px",
                background: "#F2EDE6", border: "1px solid #E0DAD2",
                textDecoration: "none", marginBottom: "14px",
              }}>
                <MapPin size={15} color="#B78955" />
                <div>
                  <p style={{ fontSize: "12px", fontWeight: 600, color: "#1E2A20", lineHeight: 1 }}>Find Us</p>
                  <p style={{ fontSize: "10.5px", color: "#68645E", marginTop: "2px" }}>Paramount Golf Foreste, Zeta-1</p>
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

          {/* ── Mobile layout ── */}
          <div className="lg:hidden">
            {/* Brand */}
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "12px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", overflow: "hidden", flexShrink: 0 }}>
                <Image src="/favicon.png" alt="KozyNestStays logo" width={36} height={36} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              </div>
              <div>
                <span style={{ fontWeight: 800, fontSize: "15px", color: "#1E2A20" }}>KozyNest</span>
                <span style={{ fontWeight: 800, fontSize: "15px", color: "#B78955" }}>Stays</span>
              </div>
            </Link>

            <p style={{ fontSize: "13px", color: "#68645E", lineHeight: 1.7, marginBottom: "14px" }}>
              Premium stays at Paramount Golf Foreste, Zeta-1, Greater Noida.
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", marginBottom: "14px" }}>
              {[
                { Icon: Phone, text: "+91 9211549792", href: "tel:+919211549792" },
                { Icon: Mail, text: "Anshpandit0074@gmail.com", href: "mailto:Anshpandit0074@gmail.com" },
                { Icon: MapPin, text: "Paramount Golf Foreste, Zeta-1", href: "https://maps.google.com/?q=28.513355,77.525688" },
              ].map(({ Icon, text, href }) => (
                <li key={text} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <Icon size={12} color="#B78955" style={{ flexShrink: 0 }} />
                  <a href={href} style={{ fontSize: "12px", color: "#68645E", textDecoration: "none" }} className="footer-link">{text}</a>
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
              {socials.map(({ Icon, label, href }) => (
                <a key={label} href={href} aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#F2EDE6", border: "1px solid #E0DAD2", display: "flex", alignItems: "center", justifyContent: "center", color: "#68645E", textDecoration: "none" }}
                  className="footer-social"
                ><Icon /></a>
              ))}
            </div>

            {/* Mobile 2-col grid: properties + amenities */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "20px" }}>
              <div>
                <h3 style={HEADING}>Our Properties</h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {properties.map((p) => (
                    <li key={p.name}>
                      <Link href="#stays" style={{ textDecoration: "none" }} className="footer-link">
                        <p style={{ fontSize: "12px", fontWeight: 600, color: "#1E2A20" }}>{p.name}</p>
                        <p style={{ fontSize: "10px", color: "#B78955" }}>{p.price}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={HEADING}>Amenities</h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {amenities.map((a) => (
                    <li key={a} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#B78955", flexShrink: 0 }} />
                      <span style={{ fontSize: "12px", color: "#4A4744" }}>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

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

        {/* ── Bottom bar ── */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "12px", paddingTop: "12px", flexWrap: "wrap",
        }}>
          <p style={{ fontSize: "12px", color: "#888178" }}>
            &copy; {year} KozyNestStays. All rights reserved.
          </p>
          <p style={{ fontSize: "11.5px", color: "#888178" }}>
            Paramount Golf Foreste, Zeta-1, Greater Noida
          </p>
        </div>

      </div>
    </footer>
  );
}
