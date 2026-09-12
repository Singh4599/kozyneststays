"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  propertyName: string;
  open: boolean;
  onClose: () => void;
  startIndex?: number;
}

export default function PropertyGallery({ images, propertyName, open, onClose, startIndex = 0 }: Props) {
  const [current, setCurrent] = useState(startIndex);
  const total = images.length;

  useEffect(() => { if (open) setCurrent(startIndex); }, [open, startIndex]);

  // Lock body scroll
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Keyboard nav
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight") setCurrent(p => (p + 1) % total);
    if (e.key === "ArrowLeft") setCurrent(p => (p - 1 + total) % total);
  }, [onClose, total]);

  useEffect(() => {
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, handleKey]);

  // Touch swipe
  const [touchStart, setTouchStart] = useState(0);
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) setCurrent(p => (p + 1) % total);
      else setCurrent(p => (p - 1 + total) % total);
    }
  };

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(0,0,0,0.95)",
        display: "flex", flexDirection: "column",
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`${propertyName} photo gallery`}
    >
      {/* Top bar */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "12px 16px",
        paddingTop: "max(12px, env(safe-area-inset-top))",
        flexShrink: 0,
      }}>
        <p style={{ color: "#fff", fontSize: "14px", fontWeight: 600 }}>
          {propertyName}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 500 }}>
            {current + 1} / {total}
          </span>
          <button
            onClick={onClose}
            style={{
              width: "36px", height: "36px", borderRadius: "50%",
              background: "rgba(255,255,255,0.15)", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
            aria-label="Close gallery"
          >
            <X size={18} color="#fff" />
          </button>
        </div>
      </div>

      {/* Image area */}
      <div
        style={{
          flex: 1, position: "relative",
          display: "flex", alignItems: "center", justifyContent: "center",
          minHeight: 0,
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Desktop prev/next arrows */}
        <button
          onClick={() => setCurrent(p => (p - 1 + total) % total)}
          className="hidden md:flex"
          style={{
            position: "absolute", left: "16px", zIndex: 3,
            width: "44px", height: "44px", borderRadius: "50%",
            background: "rgba(255,255,255,0.15)", border: "none", cursor: "pointer",
            alignItems: "center", justifyContent: "center",
          }}
          aria-label="Previous photo"
        >
          <ChevronLeft size={22} color="#fff" />
        </button>

        <div style={{
          position: "relative",
          width: "100%", height: "100%",
          maxWidth: "1000px",
          padding: "0 16px",
        }}>
          <Image
            src={images[current]}
            alt={`${propertyName} — photo ${current + 1} of ${total}`}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        <button
          onClick={() => setCurrent(p => (p + 1) % total)}
          className="hidden md:flex"
          style={{
            position: "absolute", right: "16px", zIndex: 3,
            width: "44px", height: "44px", borderRadius: "50%",
            background: "rgba(255,255,255,0.15)", border: "none", cursor: "pointer",
            alignItems: "center", justifyContent: "center",
          }}
          aria-label="Next photo"
        >
          <ChevronRight size={22} color="#fff" />
        </button>
      </div>

      {/* Thumbnail strip (desktop only) */}
      <div
        className="hidden md:flex"
        style={{
          justifyContent: "center", gap: "8px",
          padding: "12px 16px 16px", flexShrink: 0,
          overflowX: "auto",
        }}
      >
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: "60px", height: "45px", borderRadius: "6px",
              overflow: "hidden", border: i === current ? "2px solid #B78955" : "2px solid transparent",
              opacity: i === current ? 1 : 0.5,
              cursor: "pointer", flexShrink: 0, position: "relative",
              transition: "opacity 0.2s, border-color 0.2s",
              background: "none", padding: 0,
            }}
            aria-label={`View photo ${i + 1}`}
          >
            <Image src={img} alt="" fill className="object-cover" sizes="60px" />
          </button>
        ))}
      </div>

      {/* Mobile dots */}
      <div
        className="md:hidden"
        style={{
          display: "flex", justifyContent: "center", gap: "6px",
          padding: "12px 16px",
          paddingBottom: "max(16px, env(safe-area-inset-bottom))",
          flexShrink: 0,
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? "20px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background: i === current ? "#B78955" : "rgba(255,255,255,0.35)",
              border: "none", cursor: "pointer", padding: 0,
              transition: "width 0.2s, background 0.2s",
            }}
            aria-label={`Photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
