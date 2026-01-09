import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lobocon - Construction Project Management Software",
  description:
    "All-in-one construction management software for contractors, quantity surveyors, and project managers. Track BOQs, schedules, cash flow, labor, and budgets in real-time. Affordable alternative to Procore, Autodesk, and MS Project built for African construction companies.",
  keywords: [
    // Core product terms
    "construction management software",
    "construction project management software",
    "construction ERP software",
    "construction management system",
    "construction software Kenya",
    "construction software Africa",

    // Feature-specific keywords
    "BOQ software",
    "bill of quantities software",
    "construction BOQ management",
    "construction scheduling software",
    "construction cash flow management",
    "construction budget tracking",
    "construction cost control software",
    "construction labor management",
    "construction resource allocation",
    "construction progress tracking",
    "construction financial management",
    "construction reporting software",
    "construction document management",
    "construction invoice management",
    "construction time tracking",

    // Competitor alternative keywords
    "Procore alternative",
    "Procore alternative Africa",
    "Procore alternative Kenya",
    "affordable construction management software",
    "construction software for small contractors",
    "construction software for African contractors",
    "Autodesk alternative",
    "MS Project construction alternative",

    // Job role keywords
    "quantity surveyor software",
    "contractor management software",
    "project manager software construction",
    "site manager software",
    "construction estimating software",
    "QS software Kenya",

    // Use case keywords
    "residential construction software",
    "commercial construction software",
    "infrastructure project management",
    "building construction software",
    "construction company software",
    "general contractor software",
    "subcontractor management software",

    // Regional keywords
    "construction software Kenya",
    "construction software Nairobi",
    "construction management software Africa",
    "construction project software East Africa",

    // Pain point keywords
    "construction project profitability",
    "track construction project costs",
    "construction project visibility",
    "construction collaboration software",
    "real-time construction tracking",
    "construction budget overrun prevention",
    "construction cash flow tracking",

    // Technology/standards keywords
    "SMM compliance software",
    "Standard Method of Measurement software",
    "construction measurement standards",
    "PMI construction software",
    "cloud construction software",
    "mobile construction app",
    "construction software with BOQ",
  ],
  authors: [{ name: "Nexaslab" }],
  creator: "Nexaslab",
  publisher: "Lobocon",
  metadataBase: new URL("https://lobocon.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lobocon.co",
    title:
      "Lobocon - Construction Project Management Software | Kenya & Africa",
    description:
      "All-in-one construction management software built for African contractors. Track BOQs, schedules, cash flow, and budgets in real-time. Affordable alternative to Procore and Autodesk.",
    siteName: "Lobocon",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lobocon - Construction Project Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lobocon - Construction Project Management Simplified",
    description:
      "All-in-one construction management for African contractors. Track BOQs, schedules, cash flow, and teams. Affordable Procore alternative.",
    images: ["/og-image.png"],
    creator: "@lobocon",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0f172a" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DGC5DN5K95"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DGC5DN5K95');
        `}
      </Script>
    </html>
  );
}
