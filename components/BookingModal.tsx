"use client";

import { useState, useEffect, useRef } from "react";
import { X, CalendarDays, Clock, Users, Plus, Minus, MessageCircle } from "lucide-react";
import type { Stay } from "@/data/stays";
import { formatPrice } from "@/lib/utils";

interface BookingModalProps {
  stay: Stay;
  open: boolean;
  onClose: () => void;
}

export default function BookingModal({ stay, open, onClose }: BookingModalProps) {
  const today = new Date().toISOString().split("T")[0];
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [checkInTime, setCheckInTime] = useState("14:00");
  const [checkOutTime, setCheckOutTime] = useState("11:00");
  const [guests, setGuests] = useState(2);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const modalRef = useRef<HTMLDivElement>(null);
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [open, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) onClose();
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!checkIn) errs.checkIn = "Select check-in date";
    if (!checkOut) errs.checkOut = "Select check-out date";
    if (checkIn && checkOut && checkOut < checkIn) errs.checkOut = "Check-out must be after check-in";
    if (checkIn && checkOut && checkOut === checkIn && checkOutTime <= checkInTime) {
      errs.checkOutTime = "Check-out time must be after check-in time";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    const formatDate = (d: string) => {
      const date = new Date(d + "T00:00:00");
      return date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
    };
    const formatTime = (t: string) => {
      const [h, m] = t.split(":");
      const hr = parseInt(h);
      return `${hr % 12 || 12}:${m} ${hr >= 12 ? "PM" : "AM"}`;
    };

    const lines = [
      `Hello KozyNestStays!`,
      ``,
      `I would like to enquire about a stay.`,
      ``,
      `*Property:* ${stay.name}`,
      `*Location:* Paramount Golf Foreste, Zeta-1, Greater Noida`,
      ``,
      `*Check-in:* ${formatDate(checkIn)} at ${formatTime(checkInTime)}`,
      `*Check-out:* ${formatDate(checkOut)} at ${formatTime(checkOutTime)}`,
      ``,
      `*Guests:* ${guests}`,
      `*Price:* Rs. ${formatPrice(stay.price)} per night`,
      ``,
      `Please confirm availability and booking details.`,
      ``,
      `Thank you.`,
    ];

    const msg = lines.join("\n");
    window.open(`https://wa.me/919211549792?text=${encodeURIComponent(msg)}`, "_blank");

  };

  if (!open) return null;

  const LABEL: React.CSSProperties = {
    fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em",
    color: "#B78955", textTransform: "uppercase", marginBottom: "8px", display: "block",
  };
  const INPUT_WRAP: React.CSSProperties = {
    display: "flex", alignItems: "center", gap: "12px",
    background: "#F5F0E8", borderRadius: "12px", padding: "13px 14px",
    cursor: "pointer",
  };
  const INPUT: React.CSSProperties = {
    flex: 1, background: "transparent", border: "none", outline: "none",
    fontSize: "14px", fontWeight: 600, color: "#1A1815", width: "100%",
  };

  const TimeSelect = ({ value, onChange, label, error }: {
    value: string; onChange: (v: string) => void; label: string; error?: string;
  }) => (
    <div style={{ flex: 1 }}>
      <span style={LABEL}>{label}</span>
      <div style={{ ...INPUT_WRAP, border: error ? "1px solid #ef4444" : "none" }}>
        <Clock size={15} color="#B78955" />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ ...INPUT, cursor: "pointer", WebkitAppearance: "none", appearance: "none" }}
        >
          {Array.from({ length: 24 }, (_, i) => {
            const h = i.toString().padStart(2, "0");
            const label12 = `${i % 12 || 12}:00 ${i >= 12 ? "PM" : "AM"}`;
            return <option key={h} value={`${h}:00`}>{label12}</option>;
          })}
        </select>
      </div>
      {error && <p style={{ fontSize: "11px", color: "#ef4444", marginTop: "4px" }}>{error}</p>}
    </div>
  );

  return (
    <div
      onClick={handleBackdropClick}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(30,42,32,0.5)", backdropFilter: "blur(4px)",
        display: "flex", alignItems: "flex-end", justifyContent: "center",
      }}
      role="dialog" aria-modal="true" aria-label={`Book ${stay.name}`}
    >
      <div
        ref={modalRef}
        style={{
          background: "#FAF7F2", borderRadius: "24px 24px 0 0",
          width: "100%", maxWidth: "520px",
          maxHeight: "92dvh", overflowY: "auto",
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
          boxShadow: "0 -10px 60px rgba(30,42,32,0.2)",
          animation: "slideUp 0.3s ease-out",
        }}
      >
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "18px 20px 14px", borderBottom: "1px solid #E5DED4",
          position: "sticky", top: 0, background: "#FAF7F2", zIndex: 2,
          borderRadius: "24px 24px 0 0",
        }}>
          <div>
            <h3 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "20px", fontWeight: 600, color: "#1E2A20", lineHeight: 1.2,
            }}>Book Your Stay</h3>
            <p style={{ fontSize: "12px", color: "#68645E", marginTop: "2px" }}>
              {stay.name} — ₹{formatPrice(stay.price)}/night
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              width: "36px", height: "36px", borderRadius: "50%",
              background: "#F2ECE3", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}
            aria-label="Close booking"
          ><X size={18} color="#1E2A20" /></button>
        </div>

        {/* Form */}
        <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Property */}
          <div>
            <span style={LABEL}>Property</span>
            <div style={{ ...INPUT_WRAP, cursor: "default" }}>
              <div style={{
                width: "34px", height: "34px", borderRadius: "8px",
                background: "#E5DED4", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                fontSize: "16px",
              }}>🏠</div>
              <div>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#1A1815" }}>{stay.name}</p>
                <p style={{ fontSize: "11px", color: "#68645E" }}>Paramount Golf Foreste, Greater Noida</p>
              </div>
            </div>
          </div>

          {/* Check-in / Check-out dates */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <div>
              <span style={LABEL}>Check-in Date</span>
              <div
                style={{ ...INPUT_WRAP, border: errors.checkIn ? "1px solid #ef4444" : "none" }}
                onClick={() => checkInRef.current?.showPicker()}
              >
                <CalendarDays size={15} color="#B78955" />
                <input
                  ref={checkInRef} type="date" min={today} value={checkIn}
                  onChange={(e) => { setCheckIn(e.target.value); setErrors(p => ({ ...p, checkIn: "" })); }}
                  style={INPUT}
                />
              </div>
              {errors.checkIn && <p style={{ fontSize: "11px", color: "#ef4444", marginTop: "4px" }}>{errors.checkIn}</p>}
            </div>
            <div>
              <span style={LABEL}>Check-out Date</span>
              <div
                style={{ ...INPUT_WRAP, border: errors.checkOut ? "1px solid #ef4444" : "none" }}
                onClick={() => checkOutRef.current?.showPicker()}
              >
                <CalendarDays size={15} color="#B78955" />
                <input
                  ref={checkOutRef} type="date" min={checkIn || today} value={checkOut}
                  onChange={(e) => { setCheckOut(e.target.value); setErrors(p => ({ ...p, checkOut: "" })); }}
                  style={INPUT}
                />
              </div>
              {errors.checkOut && <p style={{ fontSize: "11px", color: "#ef4444", marginTop: "4px" }}>{errors.checkOut}</p>}
            </div>
          </div>

          {/* Check-in / Check-out times */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <TimeSelect value={checkInTime} onChange={setCheckInTime} label="Check-in Time" />
            <TimeSelect value={checkOutTime} onChange={setCheckOutTime} label="Check-out Time" error={errors.checkOutTime} />
          </div>

          {/* Guests */}
          <div>
            <span style={LABEL}>Guests</span>
            <div style={{ ...INPUT_WRAP, justifyContent: "space-between", cursor: "default" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Users size={15} color="#B78955" />
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#1A1815" }}>
                  {guests} Guest{guests !== 1 ? "s" : ""}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <button
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  style={{
                    width: "30px", height: "30px", borderRadius: "50%",
                    border: "1.5px solid #D5CEBC", background: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                  }}
                  aria-label="Decrease guests"
                ><Minus size={13} /></button>
                <span style={{ width: "22px", textAlign: "center", fontSize: "15px", fontWeight: 700 }}>{guests}</span>
                <button
                  onClick={() => setGuests(Math.min(10, guests + 1))}
                  style={{
                    width: "30px", height: "30px", borderRadius: "50%",
                    border: "1.5px solid #D5CEBC", background: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                  }}
                  aria-label="Increase guests"
                ><Plus size={13} /></button>
              </div>
            </div>
          </div>

          {/* Price */}
          <div style={{
            background: "#fff", borderRadius: "12px", border: "1px solid #E5DED4",
            padding: "14px 16px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <span style={{ fontSize: "13px", color: "#68645E" }}>Price per night</span>
            <span style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "22px", fontWeight: 700, color: "#1E2A20",
            }}>₹{formatPrice(stay.price)}</span>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            style={{
              width: "100%", padding: "14px",
              background: "#25D366", color: "#fff",
              fontSize: "14px", fontWeight: 700,
              borderRadius: "14px", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
              boxShadow: "0 6px 24px rgba(37,211,102,0.3)",
              minHeight: "50px",
            }}
          >
            <MessageCircle size={17} />
            Continue on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
