// app/earned-value/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Earned Value Management Software for Kenya | Lobocon",
  description:
    "Track CPI, EAC, and cost variance automatically from your live BOQ. Lobocon calculates earned value management metrics in real time for construction firms in Kenya and East Africa.",
  keywords: [
    "earned value management construction Kenya",
    "CPI construction software Kenya",
    "EVM software Africa",
    "construction earned value Kenya",
    "cost performance index construction",
    "construction project performance Kenya",
  ],
  alternates: { canonical: "/earned-value" },
  openGraph: {
    title: "Earned Value Management Software for Kenya | Lobocon",
    description:
      "CPI, EAC, and cost variance calculated automatically from your live BOQ. Know if your project is profitable this week, not next month.",
    url: "https://lobocon.co/earned-value",
  },
};

export default function EarnedValueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
