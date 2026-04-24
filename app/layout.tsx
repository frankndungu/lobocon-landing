import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title:
    "Lobocon | Finance, Scheduling, Planned vs Actual. Every Project. One Platform.",
  description:
    "Lobocon is the Construction OS for property developers and infrastructure firms. Track BOQ, cash flow, earned value, schedules, and labor in real time. Know your project is profitable before it's too late.",
  keywords: [
    "construction management software",
    "planned vs actual construction",
    "BOQ management software",
    "bill of quantities software",
    "construction cash flow",
    "earned value management",
    "construction scheduling software",
    "construction labor tracking",
    "construction finance software",
    "construction project management",
    "property developer software",
    "infrastructure project management",
    "construction ERP",
    "construction OS",
    "Procore alternative",
    "construction software Kenya",
    "construction software Africa",
    "construction software Nairobi",
  ],
  authors: [{ name: "Lobocon", url: "https://lobocon.co" }],
  creator: "Lobocon",
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
      "Lobocon | Construction Finance, Scheduling, Planned vs Actual. Every Project. One Platform.",
    description:
      "Lobocon is the Construction OS for property developers and infrastructure firms. Track BOQ, cash flow, earned value, schedules, and labor in real time.",
    siteName: "Lobocon",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lobocon — The Construction OS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Lobocon | Construction Finance, Scheduling, Planned vs Actual. Every Project. One Platform.",
    description:
      "Track BOQ, cash flow, earned value, schedules, and labor in real time. The Construction OS for property developers and infrastructure firms.",
    images: ["/og-image.png"],
    creator: "@lobocon",
    site: "@lobocon",
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
  applicationName: "Lobocon",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
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
