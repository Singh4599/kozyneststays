import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AmenitiesMarquee from "@/components/AmenitiesMarquee";
import Benefits from "@/components/Benefits";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import FeaturedStays from "@/components/FeaturedStays";
import ExperienceSection from "@/components/ExperienceSection";
import TrustStrip from "@/components/TrustStrip";
import StatsSection from "@/components/StatsSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "KozyNestStays",
  description: "Premium short-stay apartments at Paramount Golf Foreste, Zeta-1, Greater Noida for couples, families, and business travelers.",
  url: "https://kozyneststays.com",
  telephone: "+919211549792",
  email: "hello@kozyneststays.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Paramount Golf Foreste, Zeta-1",
    addressLocality: "Greater Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.513355",
    longitude: "77.525688",
  },
  areaServed: { "@type": "City", name: "Greater Noida" },
  priceRange: "₹₹",
  hasMap: "https://maps.google.com/?q=28.513355,77.525688",
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main-content">
        {/* Hero + booking bar */}
        <Hero />

        {/* Marquee 1 — Amenities ticker */}
        <AmenitiesMarquee />

        {/* Benefits — image cards */}
        <Benefits />

        {/* Marquee 2 — Guest reviews */}
        <ReviewsMarquee />

        <FeaturedStays />
        <ExperienceSection />
        <TrustStrip />
        <StatsSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
