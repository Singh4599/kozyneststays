"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, CalendarDays, Users, Search, Plus, Minus, ChevronDown } from "lucide-react";

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [showGuests, setShowGuests] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const guestRef = useRef<HTMLDivElement>(null);

  const totalGuests = adults + children;

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (guestRef.current && !guestRef.current.contains(e.target as Node)) {
        setShowGuests(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSearch = () => {
    const el = document.getElementById("stays");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      id="booking"
      className="bg-[#F2ECE3] py-8"
      aria-label="Search for stays"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="bg-white rounded-2xl border border-[#E5DED4] shadow-[0_4px_24px_rgba(30,42,32,0.08)]">

          {/* Desktop Layout */}
          <div className="hidden md:flex items-stretch divide-x divide-[#E5DED4]">
            {/* Where */}
            <div className="flex flex-1 items-center gap-3 px-6 py-5 min-w-0">
              <MapPin size={18} className="text-[#B78955] flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] font-bold tracking-[0.14em] text-[#B78955] uppercase mb-1">Where</p>
                <p className="text-[14px] font-semibold text-[#1C1B19] truncate">Greater Noida</p>
              </div>
            </div>

            {/* Check In */}
            <div className="flex flex-1 items-center gap-3 px-6 py-5 min-w-0">
              <CalendarDays size={18} className="text-[#B78955] flex-shrink-0" />
              <div className="min-w-0 w-full">
                <label htmlFor="check-in" className="block text-[10px] font-bold tracking-[0.14em] text-[#B78955] uppercase mb-1">
                  Check In
                </label>
                <input
                  id="check-in"
                  type="date"
                  min={today}
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-transparent text-[14px] font-semibold text-[#1C1B19] border-none outline-none cursor-pointer"
                  aria-label="Check-in date"
                />
              </div>
            </div>

            {/* Check Out */}
            <div className="flex flex-1 items-center gap-3 px-6 py-5 min-w-0">
              <CalendarDays size={18} className="text-[#B78955] flex-shrink-0" />
              <div className="min-w-0 w-full">
                <label htmlFor="check-out" className="block text-[10px] font-bold tracking-[0.14em] text-[#B78955] uppercase mb-1">
                  Check Out
                </label>
                <input
                  id="check-out"
                  type="date"
                  min={checkIn || today}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-transparent text-[14px] font-semibold text-[#1C1B19] border-none outline-none cursor-pointer"
                  aria-label="Check-out date"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="relative flex-1 min-w-0" ref={guestRef}>
              <button
                onClick={() => setShowGuests(!showGuests)}
                className="w-full flex items-center gap-3 px-6 py-5 text-left"
                aria-expanded={showGuests}
              >
                <Users size={18} className="text-[#B78955] flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold tracking-[0.14em] text-[#B78955] uppercase mb-1">Guests</p>
                  <p className="text-[14px] font-semibold text-[#1C1B19]">
                    {totalGuests} Guest{totalGuests !== 1 ? "s" : ""}
                  </p>
                </div>
                <ChevronDown size={14} className={`text-[#68645E] transition-transform duration-200 ${showGuests ? "rotate-180" : ""}`} />
              </button>

              {showGuests && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-xl border border-[#E5DED4] shadow-[0_8px_32px_rgba(30,42,32,0.12)] p-5 z-30 w-[240px]">
                  {[
                    { label: "Adults", sub: "Age 13+", val: adults, set: setAdults, min: 1 },
                    { label: "Children", sub: "Age 2–12", val: children, set: setChildren, min: 0 },
                  ].map((g) => (
                    <div key={g.label} className={`flex items-center justify-between ${g.label === "Children" ? "mt-4 pt-4 border-t border-[#E5DED4]" : ""}`}>
                      <div>
                        <p className="text-[14px] font-medium text-[#1C1B19]">{g.label}</p>
                        <p className="text-[12px] text-[#68645E]">{g.sub}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button onClick={() => g.set(Math.max(g.min, g.val - 1))} className="w-8 h-8 rounded-full border border-[#E5DED4] flex items-center justify-center hover:border-[#1E2A20] transition-colors" aria-label={`Decrease ${g.label}`}>
                          <Minus size={13} />
                        </button>
                        <span className="w-5 text-center font-semibold text-[#1C1B19] text-sm">{g.val}</span>
                        <button onClick={() => g.set(g.val + 1)} className="w-8 h-8 rounded-full border border-[#E5DED4] flex items-center justify-center hover:border-[#1E2A20] transition-colors" aria-label={`Increase ${g.label}`}>
                          <Plus size={13} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Search */}
            <div className="flex items-center px-5 py-5">
              <button
                onClick={handleSearch}
                className="w-12 h-12 bg-[#1E2A20] hover:bg-[#152017] text-white rounded-full flex items-center justify-center transition-colors duration-200 flex-shrink-0"
                aria-label="Search available stays"
              >
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden p-5 space-y-3">
            <div className="flex items-center gap-3 p-3.5 bg-[#F2ECE3] rounded-xl">
              <MapPin size={16} className="text-[#B78955] flex-shrink-0" />
              <div>
                <p className="text-[10px] font-bold tracking-[0.12em] text-[#B78955] uppercase">Where</p>
                <p className="text-[14px] font-semibold text-[#1C1B19]">Greater Noida</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 bg-[#F2ECE3] rounded-xl">
                <label htmlFor="m-check-in" className="block text-[10px] font-bold tracking-[0.1em] text-[#B78955] uppercase mb-1">Check In</label>
                <input id="m-check-in" type="date" min={today} value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="w-full bg-transparent text-[13px] font-semibold text-[#1C1B19] outline-none" />
              </div>
              <div className="p-3.5 bg-[#F2ECE3] rounded-xl">
                <label htmlFor="m-check-out" className="block text-[10px] font-bold tracking-[0.1em] text-[#B78955] uppercase mb-1">Check Out</label>
                <input id="m-check-out" type="date" min={checkIn || today} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="w-full bg-transparent text-[13px] font-semibold text-[#1C1B19] outline-none" />
              </div>
            </div>
            <div className="flex items-center justify-between p-3.5 bg-[#F2ECE3] rounded-xl">
              <div className="flex items-center gap-2">
                <Users size={16} className="text-[#B78955]" />
                <div>
                  <p className="text-[10px] font-bold tracking-[0.1em] text-[#B78955] uppercase">Guests</p>
                  <p className="text-[14px] font-semibold text-[#1C1B19]">{totalGuests} Guest{totalGuests !== 1 ? "s" : ""}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setAdults(Math.max(1, adults - 1))} className="w-7 h-7 rounded-full border border-[#E5DED4] bg-white flex items-center justify-center" aria-label="Decrease guests"><Minus size={12} /></button>
                <span className="w-4 text-center font-semibold text-sm">{totalGuests}</span>
                <button onClick={() => setAdults(adults + 1)} className="w-7 h-7 rounded-full border border-[#E5DED4] bg-white flex items-center justify-center" aria-label="Increase guests"><Plus size={12} /></button>
              </div>
            </div>
            <button onClick={handleSearch} className="w-full py-3.5 bg-[#1E2A20] text-[#FAF7F2] text-[14px] font-semibold rounded-xl hover:bg-[#152017] transition-colors flex items-center justify-center gap-2">
              <Search size={16} />
              Search Stays
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
