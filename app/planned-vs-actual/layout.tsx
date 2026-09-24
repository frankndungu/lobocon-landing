// app/planned-vs-actual/layout.tsx
// Keeps metadata server-side while the page itself is a client component.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planned vs Actual Site Progress Software | Lobocon",
  description:
    "Weekly site measurement against every BOQ item, turned into earned value, progress and variance on the spot, and verified before it is billed.",
  alternates: { canonical: "/planned-vs-actual" },
  openGraph: {
    title: "Planned vs Actual Site Progress Software | Lobocon",
    description:
      "Measure once, everything updates. Verified before it is billed. Built for site teams in Kenya and East Africa.",
    url: "https://lobocon.co/planned-vs-actual",
  },
};

export default function PlannedVsActualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
