"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Heart, Images } from "lucide-react";
import { stays } from "@/data/stays";
import { formatPrice } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import BookingModal from "./BookingModal";
import PropertyGallery from "./PropertyGallery";
import type { Stay } from "@/data/stays";

function PropertyCard({
  stay,
  onBook,
  onGallery,
}: {
  stay: Stay;
  onBook: (s: Stay) => void;
  onGallery: (s: Stay) => void;
}) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <article style={{ cursor: "default", minWidth: 0 }} aria-label={stay.name}>
      {/* Image */}
      <div
        style={{
          position: "relative", borderRadius: "14px", overflow: "hidden",
          aspectRatio: "4/3", marginBottom: "10px",
        }}
        className="group"
      >
        <Image
          src={stay.image}
          alt={`${stay.name} — Paramount Golf Foreste, Greater Noida`}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Wishlist */}
        <button
          onClick={(e) => { e.preventDefault(); setWishlisted(!wishlisted); }}
          style={{
            position: "absolute", top: "10px", right: "10px",
            width: "32px", height: "32px", borderRadius: "50%",
            background: "rgba(255,255,255,0.92)", backdropFilter: "blur(4px)",
            border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
          aria-label={wishlisted ? `Remove ${stay.name} from wishlist` : `Add ${stay.name} to wishlist`}
        >
          <Heart size={14} className={wishlisted ? "fill-red-500 text-red-500" : "text-[#68645E]"} strokeWidth={2} />
        </button>

        {/* Photo count badge */}
        <button
          onClick={() => onGallery(stay)}
          style={{
            position: "absolute", bottom: "10px", right: "10px",
            display: "flex", alignItems: "center", gap: "5px",
            background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)",
            borderRadius: "8px", padding: "5px 10px",
            border: "none", cursor: "pointer",
            fontSize: "11px", fontWeight: 600, color: "#fff",
          }}
          aria-label={`View all ${stay.images.length} photos of ${stay.name}`}
        >
          <Images size={12} color="#fff" />
          {stay.images.length}
        </button>
      </div>

      {/* Info */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "3px" }}>
          <MapPin size={10} color="#B78955" style={{ flexShrink: 0 }} />
          <span style={{
            fontSize: "10.5px", color: "#68645E",
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>
            Paramount Golf Foreste, Greater Noida
          </span>
        </div>

        <h3 style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(15px, 1.2vw, 18px)", fontWeight: 600,
          color: "#1C1B19", lineHeight: 1.25, marginBottom: "3px",
        }}>
          {stay.name}
        </h3>

        <p style={{ fontSize: "13px", color: "#1C1B19", marginBottom: "10px" }}>
          <strong style={{ fontSize: "14px", fontWeight: 700 }}>₹{formatPrice(stay.price)}</strong>
          <span style={{ color: "#68645E", fontWeight: 400 }}> / night</span>
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={() => onGallery(stay)}
            style={{
              flex: 1, padding: "10px 0",
              background: "transparent", color: "#1E2A20",
              fontSize: "12px", fontWeight: 600,
              borderRadius: "10px", border: "1.5px solid #E5DED4",
              cursor: "pointer", minHeight: "40px",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "5px",
              transition: "border-color 0.2s",
            }}
          >
            <Images size={13} /> Photos
          </button>
          <button
            onClick={() => onBook(stay)}
            style={{
              flex: 1.4, padding: "10px 0",
              background: "#1E2A20", color: "#FAF7F2",
              fontSize: "12px", fontWeight: 600,
              borderRadius: "10px", border: "none",
              cursor: "pointer", minHeight: "40px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#152017")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#1E2A20")}
          >
            Book Now
          </button>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedStays() {
  const [bookingStay, setBookingStay] = useState<Stay | null>(null);
  const [galleryStay, setGalleryStay] = useState<Stay | null>(null);

  return (
    <>
      <section
        id="stays"
        className="kn-section"
        style={{ background: "#FAF7F2" }}
        aria-labelledby="stays-heading"
      >
        <div className="kn-container">
          {/* Section header */}
          <div style={{
            display: "flex", alignItems: "flex-end", justifyContent: "space-between",
            marginBottom: "clamp(24px, 4vw, 40px)", gap: "16px", flexWrap: "wrap",
          }}>
            <div>
              {/* Eyebrow */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <span style={{ width: "28px", height: "1.5px", background: "#B78955", flexShrink: 0 }} />
                <span style={{ fontSize: "10px", letterSpacing: "0.2em", fontWeight: 700, color: "#B78955", textTransform: "uppercase" }}>
                  Our Properties
                </span>
              </div>
              {/* Main heading */}
              <h2
                id="stays-heading"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(32px, 5vw, 64px)",
                  fontWeight: 600, color: "#1E2A20", lineHeight: 1.05,
                  letterSpacing: "-0.02em", marginBottom: "6px",
                }}
              >
                Featured{" "}
                <em style={{ fontStyle: "italic", color: "#B78955", fontWeight: 400 }}>stays</em>
              </h2>
              <p style={{ fontSize: "clamp(13px, 1vw, 15px)", color: "#68645E", lineHeight: 1.6 }}>
                Handpicked apartments. Beautiful places, warm vibes.
              </p>
            </div>

            {/* View all — desktop only */}
            <a
              href="#stays"
              className="hidden md:inline-flex"
              style={{
                alignItems: "center", gap: "8px",
                fontSize: "13px", fontWeight: 600, color: "#1E2A20",
                textDecoration: "none", paddingBottom: "4px",
                borderBottom: "1.5px solid #1E2A20", whiteSpace: "nowrap",
              }}
            >
              View all 5 properties
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          {/* Desktop — horizontal drag + scroll Swiper */}
          <div className="hidden md:block" style={{ marginRight: "-clamp(16px, 5vw, 80px)" }}>
            <Swiper
              modules={[Mousewheel, FreeMode]}
              slidesPerView={3.3}
              spaceBetween={20}
              grabCursor
              freeMode
              mousewheel={{ forceToAxis: true }}
              breakpoints={{
                1024: { slidesPerView: 3.8, spaceBetween: 24 },
                1280: { slidesPerView: 4.2, spaceBetween: 24 },
              }}
            >
              {stays.map((s) => (
                <SwiperSlide key={s.id}>
                  <PropertyCard stay={s} onBook={setBookingStay} onGallery={setGalleryStay} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Mobile Swiper */}
          <div className="md:hidden">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1.15}
              spaceBetween={12}
              grabCursor
              pagination={{ clickable: true }}
            >
              {stays.map((s) => (
                <SwiperSlide key={s.id}>
                  <PropertyCard stay={s} onBook={setBookingStay} onGallery={setGalleryStay} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {bookingStay && (
        <BookingModal stay={bookingStay} open={!!bookingStay} onClose={() => setBookingStay(null)} />
      )}

      {/* Property Gallery */}
      {galleryStay && (
        <PropertyGallery
          images={galleryStay.images}
          propertyName={galleryStay.name}
          open={!!galleryStay}
          onClose={() => setGalleryStay(null)}
        />
      )}
    </>
  );
}
