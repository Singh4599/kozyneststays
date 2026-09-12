"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, CalendarDays, Users, Search, Plus, Minus, ChevronDown } from "lucide-react";

const FIELD: React.CSSProperties = {
  display: "flex", alignItems: "center", gap: "12px",
  padding: "18px 24px",
  minWidth: 0, flex: 1,
  borderRight: "1px solid #EDE8E1",
};

const ICON_WRAP: React.CSSProperties = {
  width: "38px", height: "38px", borderRadius: "10px",
  background: "#F5F0E8", display: "flex",
  alignItems: "center", justifyContent: "center", flexShrink: 0,
};

const LABEL: React.CSSProperties = {
  fontSize: "9px", fontWeight: 700, letterSpacing: "0.18em",
  color: "#B78955", textTransform: "uppercase" as const,
  marginBottom: "4px", display: "block", whiteSpace: "nowrap",
};

const VALUE: React.CSSProperties = {
  fontSize: "14.5px", fontWeight: 700, color: "#1A1815",
  whiteSpace: "nowrap", letterSpacing: "-0.01em",
};

const HINT: React.CSSProperties = {
  fontSize: "11px", color: "#A09C97", marginTop: "1px", whiteSpace: "nowrap",
};

export default function BookingBarFloating() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [showGuests, setShowGuests] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const guestRef = useRef<HTMLDivElement>(null);
  const totalGuests = adults + children;
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);
  const mCheckInRef = useRef<HTMLInputElement>(null);
  const mCheckOutRef = useRef<HTMLInputElement>(null);
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (guestRef.current && !guestRef.current.contains(e.target as Node))
        setShowGuests(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const handleSearch = () => {
    let msg = `Hi KozyNest, I'm looking for a stay at Paramount Golf Foreste, Greater Noida.`;
    if (checkIn && checkOut) {
      msg += ` Dates: ${checkIn} to ${checkOut}.`;
    }
    msg += ` Guests: ${totalGuests}.`;
    window.open(`https://wa.me/919211549792?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div
      id="booking"
      aria-label="Search stays"
      style={{
        background: "#fff",
        borderRadius: "20px",
        border: "1px solid #E5DED4",
        boxShadow: "0 20px 80px rgba(30,42,32,0.13), 0 4px 16px rgba(30,42,32,0.06)",
        overflow: "visible",
      }}
    >
      {/* ═══ DESKTOP ══════════════════════════════════════ */}
      <div
        className="hidden md:flex"
        style={{ alignItems: "stretch", minHeight: "84px" }}
      >
        {/* WHERE */}
        <div style={{ ...FIELD, flex: 1.2 }}>
          <div style={ICON_WRAP}>
            <MapPin size={17} color="#B78955" strokeWidth={2} />
          </div>
          <div style={{ minWidth: 0 }}>
            <span style={LABEL}>Where</span>
            <p style={VALUE}>Paramount Golf Foreste</p>
            <p style={HINT}>Zeta-1, Greater Noida</p>
          </div>
        </div>

        {/* CHECK IN */}
        <div 
          style={{ ...FIELD, flex: 1, cursor: "pointer" }}
          onClick={() => checkInRef.current?.showPicker()}
        >
          <div style={ICON_WRAP}>
            <CalendarDays size={17} color="#B78955" strokeWidth={2} />
          </div>
          <div style={{ minWidth: 0, flex: 1 }}>
            <label htmlFor="b-checkin" style={LABEL}>Check In</label>
            <input
              ref={checkInRef}
              id="b-checkin"
              type="date"
              min={today}
              value={checkIn}
              onChange={e => setCheckIn(e.target.value)}
              style={{
                ...VALUE,
                background: "transparent", border: "none",
                outline: "none", cursor: "pointer",
                width: "100%", padding: 0,
                color: checkIn ? "#1A1815" : "#A09C97",
              }}
            />
            {!checkIn && <p style={HINT}>Add date</p>}
          </div>
        </div>

        {/* CHECK OUT */}
        <div 
          style={{ ...FIELD, flex: 1, cursor: "pointer" }}
          onClick={() => checkOutRef.current?.showPicker()}
        >
          <div style={ICON_WRAP}>
            <CalendarDays size={17} color="#B78955" strokeWidth={2} />
          </div>
          <div style={{ minWidth: 0, flex: 1 }}>
            <label htmlFor="b-checkout" style={LABEL}>Check Out</label>
            <input
              ref={checkOutRef}
              id="b-checkout"
              type="date"
              min={checkIn || today}
              value={checkOut}
              onChange={e => setCheckOut(e.target.value)}
              style={{
                ...VALUE,
                background: "transparent", border: "none",
                outline: "none", cursor: "pointer",
                width: "100%", padding: 0,
                color: checkOut ? "#1A1815" : "#A09C97",
              }}
            />
            {!checkOut && <p style={HINT}>Add date</p>}
          </div>
        </div>

        {/* GUESTS */}
        <div style={{ flex: 1.1, position: "relative" }} ref={guestRef}>
          <button
            onClick={() => setShowGuests(!showGuests)}
            style={{
              ...FIELD,
              width: "100%", height: "100%",
              background: "transparent", border: "none", cursor: "pointer",
              borderRight: "1px solid #EDE8E1",
            }}
            aria-expanded={showGuests}
            aria-label="Select guests"
          >
            <div style={ICON_WRAP}>
              <Users size={17} color="#B78955" strokeWidth={2} />
            </div>
            <div style={{ flex: 1, textAlign: "left", minWidth: 0 }}>
              <span style={LABEL}>Guests</span>
              <p style={VALUE}>{totalGuests} Guest{totalGuests !== 1 ? "s" : ""}</p>
              <p style={HINT}>{adults} adult{adults !== 1 ? "s" : ""}{children > 0 ? `, ${children} child` : ""}</p>
            </div>
            <ChevronDown
              size={14} color="#A09C97"
              style={{ flexShrink: 0, transition: "transform 0.2s", transform: showGuests ? "rotate(180deg)" : "none" }}
            />
          </button>

          {showGuests && (
            <div style={{
              position: "absolute", top: "calc(100% + 8px)", left: "50%",
              transform: "translateX(-50%)",
              width: "250px",
              background: "#fff", borderRadius: "18px",
              border: "1px solid #E5DED4",
              boxShadow: "0 20px 60px rgba(30,42,32,0.15)",
              padding: "20px 20px", zIndex: 40,
            }}>
              {[
                { label: "Adults", sub: "Age 13+", val: adults, set: setAdults, min: 1 },
                { label: "Children", sub: "Ages 2–12", val: children, set: setChildren, min: 0 },
              ].map((g, i) => (
                <div
                  key={g.label}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    paddingTop: i ? "16px" : 0, marginTop: i ? "16px" : 0,
                    borderTop: i ? "1px solid #F2ECE3" : "none",
                  }}
                >
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#1A1815" }}>{g.label}</p>
                    <p style={{ fontSize: "12px", color: "#A09C97", marginTop: "2px" }}>{g.sub}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <button onClick={() => g.set(Math.max(g.min, g.val - 1))}
                      style={{
                        width: "30px", height: "30px", borderRadius: "50%",
                        border: "1.5px solid #E5DED4", background: "#fff",
                        display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                      }}
                      aria-label={`Decrease ${g.label}`}><Minus size={12} /></button>
                    <span style={{ width: "22px", textAlign: "center", fontSize: "15px", fontWeight: 700, color: "#1A1815" }}>{g.val}</span>
                    <button onClick={() => g.set(g.val + 1)}
                      style={{
                        width: "30px", height: "30px", borderRadius: "50%",
                        border: "1.5px solid #E5DED4", background: "#fff",
                        display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                      }}
                      aria-label={`Increase ${g.label}`}><Plus size={12} /></button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SEARCH */}
        <div style={{ display: "flex", alignItems: "center", padding: "12px 16px 12px 12px", flexShrink: 0 }}>
          <button
            onClick={handleSearch}
            style={{
              display: "flex", alignItems: "center", gap: "9px",
              padding: "14px 26px",
              background: "#1E2A20", color: "#FAF7F2",
              borderRadius: "14px", border: "none", cursor: "pointer",
              fontSize: "14px", fontWeight: 700, whiteSpace: "nowrap",
              letterSpacing: "0.01em",
              boxShadow: "0 6px 20px rgba(30,42,32,0.28)",
            }}
            aria-label="Search available stays"
          >
            <Search size={15} />
            Search
          </button>
        </div>
      </div>

      {/* ═══ MOBILE ═══════════════════════════════════════ */}
      <div className="md:hidden" style={{ padding: "16px" }}>
        {/* Where */}
        <div style={{
          display: "flex", alignItems: "center", gap: "12px",
          background: "#F5F0E8", borderRadius: "12px",
          padding: "14px 16px", marginBottom: "10px",
        }}>
          <MapPin size={15} color="#B78955" strokeWidth={2} />
          <div>
            <p style={{ ...LABEL, fontSize: "8.5px" }}>Where</p>
            <p style={{ fontSize: "14px", fontWeight: 700, color: "#1A1815" }}>Paramount Golf Foreste</p>
          </div>
        </div>

        {/* Check In / Check Out */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "10px" }}>
          {[
            { id: "m-ci", labelText: "Check In", val: checkIn, set: setCheckIn, min: today, ref: mCheckInRef },
            { id: "m-co", labelText: "Check Out", val: checkOut, set: setCheckOut, min: checkIn || today, ref: mCheckOutRef },
          ].map(({ id, labelText, val, set, min, ref }) => (
            <div 
              key={id} 
              style={{ background: "#F5F0E8", borderRadius: "12px", padding: "14px 14px", cursor: "pointer" }}
              onClick={() => ref.current?.showPicker()}
            >
              <label htmlFor={id} style={{ ...LABEL, fontSize: "8.5px" }}>{labelText}</label>
              <input
                ref={ref}
                id={id} type="date" min={min} value={val}
                onChange={e => set(e.target.value)}
                style={{
                  width: "100%", background: "transparent", border: "none", outline: "none",
                  fontSize: "13px", fontWeight: 700, color: "#1A1815",
                }}
              />
            </div>
          ))}
        </div>

        {/* Guests */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "#F5F0E8", borderRadius: "12px", padding: "14px 16px", marginBottom: "12px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Users size={15} color="#B78955" strokeWidth={2} />
            <div>
              <p style={{ ...LABEL, fontSize: "8.5px" }}>Guests</p>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "#1A1815" }}>{totalGuests} Guest{totalGuests !== 1 ? "s" : ""}</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button onClick={() => setAdults(Math.max(1, adults - 1))}
              style={{ width: "28px", height: "28px", borderRadius: "50%", border: "1.5px solid #D5CEBC", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
              aria-label="Decrease"><Minus size={11} /></button>
            <span style={{ width: "20px", textAlign: "center", fontSize: "14px", fontWeight: 700 }}>{totalGuests}</span>
            <button onClick={() => setAdults(adults + 1)}
              style={{ width: "28px", height: "28px", borderRadius: "50%", border: "1.5px solid #D5CEBC", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
              aria-label="Increase"><Plus size={11} /></button>
          </div>
        </div>

        <button
          onClick={handleSearch}
          style={{
            width: "100%", padding: "15px",
            background: "#1E2A20", color: "#FAF7F2",
            fontSize: "14px", fontWeight: 700, borderRadius: "14px",
            border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
            boxShadow: "0 6px 20px rgba(30,42,32,0.25)",
          }}
        >
          <Search size={15} /> Search Stays
        </button>
      </div>
    </div>
  );
}
