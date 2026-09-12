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
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kozyneststays.com"),
  title: "KozyNestStays | Premium Stays in Greater Noida",
  description:
    "Book comfortable stays at KozyNestStays in Paramount Golf Foreste, Zeta-1, Greater Noida. Explore our properties and enquire directly through WhatsApp.",
  keywords: [
    "short stay Greater Noida",
    "premium apartments Greater Noida",
    "Paramount Golf Foreste stays",
    "furnished apartments Noida",
    "KozyNestStays",
    "Zeta-1 Greater Noida accommodation",
    "business travel accommodation Noida",
  ],
  authors: [{ name: "KozyNestStays" }],
  creator: "KozyNestStays",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://kozyneststays.com" },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kozyneststays.com",
    siteName: "KozyNestStays",
    title: "KozyNestStays | Premium Stays in Greater Noida",
    description:
      "Book comfortable stays at Paramount Golf Foreste, Zeta-1, Greater Noida. Enquire via WhatsApp.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "KozyNestStays — Premium apartment living room in Greater Noida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KozyNestStays | Premium Stays in Greater Noida",
    description:
      "Book comfortable stays at Paramount Golf Foreste, Zeta-1, Greater Noida. Enquire via WhatsApp.",
    images: ["/images/hero.jpg"],
  },
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
