import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lobocon - Construction Project Management Simplified",
  description:
    "Know if your project will make money before it's too late. Complete project management software for construction companies. Plan schedules, track cash flow, manage teams, and deliver profitable projects.",
  keywords: [
    "construction management software",
    "construction project management",
    "BOQ software",
    "construction scheduling software",
    "project cash flow management",
    "construction labor management",
    "construction budgeting software",
    "project profitability tracking",
    "construction ERP",
    "building project management",
    "construction resource allocation",
    "site management software",
    "construction financial management",
    "project cost control",
    "construction reporting software",
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
    title: "Lobocon - Construction Project Management Simplified",
    description:
      "Know if your project will make money before it's too late. Complete project management for construction companies. Plan schedules, track cash flow, manage teams, and deliver profitable projects.",
    siteName: "Lobocon",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lobocon - Construction Project Management Simplified",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lobocon - Construction Project Management Simplified",
    description:
      "Complete project management for construction companies. Track budgets, manage schedules, monitor cash flow, and deliver profitable projects.",
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
  verification: {
    google: "your-google-verification-code",
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
      </body>
    </html>
  );
}
