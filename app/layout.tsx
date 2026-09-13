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
  metadataBase: new URL("https://kozyneststays.com"),

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
    "short stay Greater Noida",
    "short term rental Greater Noida",
    "furnished apartment Greater Noida",
    "service apartment Noida",
    "Paramount Golf Foreste stay",
    "Zeta-1 Greater Noida accommodation",
    "KozyNestStays",
    "kozy nest stays",
    "holiday apartment Greater Noida",
    "couple friendly stay Greater Noida",
    "business travel accommodation Noida",
    "Airbnb alternative Greater Noida",
    "premium homestay Noida",
    "luxury apartment Greater Noida",
    "daily rent apartment Greater Noida",
    "weekly rental Noida",
    "Ansh hoster stays",
  ],

  /* ── Authorship ── */
  authors: [{ name: "KozyNestStays", url: "https://kozyneststays.com" }],
  creator: "KozyNestStays",
  publisher: "KozyNestStays",

  /* ── Canonical + Alternates ── */
  alternates: {
    canonical: "https://kozyneststays.com",
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
