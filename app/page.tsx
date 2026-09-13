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

/* ── Primary: LodgingBusiness ── */
const jsonLdBusiness = {
  "@context": "https://schema.org",
  "@type": ["LodgingBusiness", "LocalBusiness"],
  "@id": "https://kozyneststays.com/#business",
  name: "KozyNestStays",
  alternateName: "Kozy Nest Stays",
  description:
    "Premium fully-furnished short-stay apartments at Paramount Golf Foreste, Zeta-1, Greater Noida. Ideal for couples, families, and business travellers. Starting from ₹1,400/night.",
  url: "https://kozyneststays.com",
  logo: "https://kozyneststays.com/favicon.png",
  image: "https://kozyneststays.com/og-image.jpg",
  telephone: "+919211549792",
  email: "Anshpandit0074@gmail.com",
  sameAs: [
    "https://www.instagram.com/hosteransh",
    "https://wa.me/919211549792",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Paramount Golf Foreste, Zeta-1",
    addressLocality: "Greater Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201306",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.513355",
    longitude: "77.525688",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  areaServed: [
    { "@type": "City", name: "Greater Noida" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Delhi NCR" },
  ],
  priceRange: "₹1,400 – ₹2,000 per night",
  hasMap: "https://maps.google.com/?q=28.513355,77.525688",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
    { "@type": "LocationFeatureSpecification", name: "Equipped Kitchen", value: true },
    { "@type": "LocationFeatureSpecification", name: "Smart TV", value: true },
    { "@type": "LocationFeatureSpecification", name: "24/7 Support", value: true },
    { "@type": "LocationFeatureSpecification", name: "Secure Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Fresh Linens", value: true },
    { "@type": "LocationFeatureSpecification", name: "Daily Housekeeping", value: true },
  ],
  containsPlace: [
    { "@type": "Accommodation", name: "Kozynest Unit 1", numberOfRooms: 1, priceRange: "₹1,400/night" },
    { "@type": "Accommodation", name: "Kozynest Unit 2", numberOfRooms: 1, priceRange: "₹1,600/night" },
    { "@type": "Accommodation", name: "Kozynest Unit 3", numberOfRooms: 1, priceRange: "₹1,600/night" },
    { "@type": "Accommodation", name: "Kozynest Unit 4", numberOfRooms: 1, priceRange: "₹1,800/night" },
    { "@type": "Accommodation", name: "Kozynest Unit 5", numberOfRooms: 2, priceRange: "₹2,000/night" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "100",
    bestRating: "5",
    worstRating: "1",
  },
};

/* ── FAQ Schema ── */
const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is KozyNestStays located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KozyNestStays is located at Paramount Golf Foreste, Zeta-1, Greater Noida, Uttar Pradesh — a premium gated township with 24/7 security.",
      },
    },
    {
      "@type": "Question",
      name: "What is the starting price per night at KozyNestStays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stays start from ₹1,400 per night. Prices vary by unit: Unit 1 at ₹1,400, Unit 2 & 3 at ₹1,600, Unit 4 at ₹1,800, and Unit 5 at ₹2,000 per night.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a stay at KozyNestStays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book instantly via WhatsApp by messaging +91 9211549792 or by clicking the Book Now button on our website. We confirm availability within minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Are the apartments couple friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all KozyNestStays units are couple friendly, family friendly, and suitable for solo business travellers.",
      },
    },
    {
      "@type": "Question",
      name: "What amenities are included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All apartments include high-speed WiFi, air conditioning, fully equipped kitchen, Smart TV, fresh linens, 24/7 guest support, secure parking, and daily housekeeping.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
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
