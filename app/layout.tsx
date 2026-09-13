import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1E2A20",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kozyneststays.in"),

  /* ── Title ── */
  title: {
    default: "KozyNestStays | Premium Short-Stay Apartments in Greater Noida",
    template: "%s | KozyNestStays",
  },

  /* ── Description (155 chars max, keyword-rich) ── */
  description:
    "Book fully-furnished, premium short-stay apartments at Paramount Golf Foreste, Zeta-1, Greater Noida. Perfect for couples, families & business travellers. Enquire on WhatsApp — instant confirmation.",

  /* ── Keywords ── */
  keywords: [
    // Brand
    "KozyNestStays", "kozy nest stays", "kozy stays noida", "kozystays greater noida",
    "kozynest greater noida", "kozyneststays.in", "kozynest apartment noida", "kozy nest bnb",

    // Airbnb Style
    "airbnb greater noida", "airbnb near greater noida", "airbnb in noida",
    "airbnb alternative greater noida", "airbnb type stay greater noida",
    "airbnb style apartment noida", "airbnb near paramount golf foreste",
    "better than airbnb noida", "airbnb noida sector", "airbnb near delhi greater noida",

    // Hotel Alternatives
    "hotel in greater noida", "hotel near paramount golf foreste", "hotel zeta 1 greater noida",
    "boutique hotel greater noida", "budget hotel greater noida", "luxury hotel greater noida",
    "hotel with kitchen greater noida", "hotel near noida expressway", "hotel greater noida west",
    "affordable hotel greater noida", "hotel near expo mart greater noida",
    "hotel near knowledge park greater noida",

    // Short Stay / Short Term
    "short stay greater noida", "short term stay noida", "short stay noida",
    "short stay apartment noida", "one night stay greater noida", "2 night stay greater noida",
    "weekend stay greater noida", "weekend getaway near delhi", "short term rental noida",
    "temporary accommodation greater noida", "short stay near delhi", "short trip stay noida",

    // Apartment / Flat Rentals
    "furnished apartment greater noida", "fully furnished apartment noida",
    "furnished flat greater noida", "service apartment greater noida",
    "service apartment noida", "serviced apartment greater noida",
    "studio apartment greater noida", "1bhk on rent greater noida",
    "2bhk short stay noida", "apartment on daily rent noida",
    "apartment rent greater noida", "luxury apartment greater noida",
    "premium apartment noida",

    // Couple Friendly
    "couple friendly stay greater noida", "couple stay noida", "couple room noida",
    "couple friendly hotel noida", "couple friendly stay near delhi",
    "private room couple noida", "unmarried couple hotel noida",
    "couple stay paramount golf foreste", "romantic stay noida",
    "couple friendly apartment greater noida",

    // Business / Corporate
    "business travel accommodation noida", "corporate stay greater noida",
    "corporate apartment noida", "business apartment greater noida",
    "long term corporate stay noida", "work from home stay noida",
    "executive apartment noida", "monthly stay greater noida",
    "business stay near delhi", "corporate guest house noida",

    // Family / Group
    "family stay greater noida", "family apartment noida", "group stay noida",
    "family vacation rental greater noida", "family friendly stay noida",
    "large group accommodation noida", "family friendly apartment greater noida",
    "vacation home greater noida",

    // Location Specific
    "stay in paramount golf foreste", "apartment paramount golf foreste",
    "stay zeta 1 greater noida", "accommodation zeta greater noida",
    "stay near knowledge park greater noida", "stay near pari chowk",
    "accommodation near expo mart", "stay near sector alpha greater noida",
    "noida expressway apartment stay", "stay near jewar airport",
    "accommodation near jewar airport", "noida extension stay",
    "greater noida west accommodation", "Zeta-1 Greater Noida accommodation",
    "Paramount Golf Foreste stay",

    // Premium / Luxury
    "luxury stay greater noida", "premium short stay noida",
    "luxury short term rental noida", "premium apartment rental greater noida",
    "5 star alternative greater noida", "luxury furnished flat noida",
    "high end apartment greater noida", "premium holiday home noida",

    // Daily / Weekly / Monthly
    "daily rent apartment greater noida", "daily rent flat noida",
    "weekly stay noida", "weekly rental greater noida",
    "monthly stay noida", "monthly rental apartment greater noida",
    "per night apartment noida", "rent apartment for a week greater noida",

    // Near Me Style
    "stays near me greater noida", "apartment near me noida", "short stay near me",
    "furnished flat near me noida", "holiday home near me",
    "service apartment near me noida", "vacation rental near me greater noida",
    "guesthouse near me greater noida", "homestay near me noida",

    // Homestay / Guesthouse / BnB
    "homestay greater noida", "homestay noida", "premium homestay noida",
    "guesthouse greater noida", "guesthouse zeta greater noida",
    "bed and breakfast noida", "bnb greater noida", "bnb near greater noida",

    // Booking Intent
    "book apartment greater noida", "book short stay noida",
    "online booking apartment noida", "instant booking apartment noida",
    "whatsapp booking stay noida", "book holiday home noida",
    "direct booking apartment noida", "cheapest stay greater noida",
    "best stay greater noida", "top rated stay noida",

    // Delhi NCR Broader
    "stay near delhi", "accommodation near delhi", "short stay delhi ncr",
    "apartment near delhi", "weekend trip from delhi stay",
    "day outing stay near delhi", "holiday apartment near delhi",
    "furnished apartment delhi ncr", "short rental delhi ncr",
    "premium stay delhi ncr",

    // Special Occasion
    "birthday stay greater noida", "anniversary stay noida",
    "party apartment noida", "event stay greater noida",
    "celebration apartment noida", "private party venue noida",
    "special occasion stay noida",

    // Long-tail Variations
    "furnished short stay apartment greater noida with wifi",
    "fully equipped apartment rent greater noida",
    "private apartment short stay noida",
    "holiday flat for rent greater noida",
    "furnished accommodation noida with kitchen",
    "best short term apartment noida",
    "premium furnished stay near delhi ncr",
    "apartment near golf course greater noida",
    "short stay with balcony greater noida",
    "apartment near expressway noida",
  ],

  /* ── Authorship ── */
  authors: [{ name: "KozyNestStays", url: "https://kozyneststays.in" }],
  creator: "KozyNestStays",
  publisher: "KozyNestStays",

  /* ── Canonical + Alternates ── */
  alternates: {
    canonical: "https://kozyneststays.in",
  },

  /* ── Verification ── */
  verification: {
    google: "1b7GYgBWlpV3BUBw1e2X7J0wiD9oNSHM1NQNN1m7_-8",
  },

  /* ── Indexing ── */
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  /* ── Favicon / Icons ── */
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  /* ── Open Graph (Facebook, WhatsApp, LinkedIn previews) ── */
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kozyneststays.com",
    siteName: "KozyNestStays",
    title: "KozyNestStays | Premium Short-Stay Apartments in Greater Noida",
    description:
      "Fully-furnished premium apartments at Paramount Golf Foreste, Zeta-1, Greater Noida. ₹1,400/night onwards. Ideal for couples, families & business trips.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KozyNestStays — Premium furnished apartments at Paramount Golf Foreste, Greater Noida",
        type: "image/jpeg",
      },
    ],
  },

  /* ── Twitter / X card ── */
  twitter: {
    card: "summary_large_image",
    title: "KozyNestStays | Premium Stays in Greater Noida",
    description:
      "Fully-furnished premium apartments at Paramount Golf Foreste, Zeta-1, Greater Noida. From ₹1,400/night.",
    images: ["/og-image.jpg"],
    creator: "@kozyneststays",
  },

  /* ── App / manifest ── */
  applicationName: "KozyNestStays",
  category: "travel",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-[#FAF7F2] text-[#1C1B19] font-sans antialiased">
        {children}
        <WhatsAppCTA />
      </body>
    </html>
  );
}
