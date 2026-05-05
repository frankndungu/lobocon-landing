// app/boq/layout.tsx
// Keeps metadata server-side while the page itself is a client component.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BOQ Management Software for Kenya | Lobocon",
  description:
    "Import, track, and reconcile your bill of quantities in real time. Lobocon replaces BOQ spreadsheets for construction firms in Kenya and East Africa. No more end-of-month surprises.",
  keywords: [
    "BOQ software Kenya",
    "bill of quantities software",
    "BOQ management construction Kenya",
    "BOQ tracking East Africa",
    "construction QS software Nairobi",
    "bill of quantities management",
    "BOQ reconciliation software",
  ],
  alternates: { canonical: "/boq" },
  openGraph: {
    title: "BOQ Management Software for Kenya | Lobocon",
    description:
      "Stop reconciling BOQs in Excel. Track every line item live against site progress. Built for QS teams in Kenya and East Africa.",
    url: "https://lobocon.co/boq",
  },
};

export default function BOQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}