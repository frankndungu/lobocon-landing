// app/resources/layout.tsx
// Keeps metadata server-side while the page itself is a client component.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Resource Planning Software for Kenya | Lobocon",
  description:
    "Labour, materials, fuel, subcontractors and equipment in one resource plan. Planned cost, actual cost and variance per line, requisitions with a reason at every step, and a site diary that feeds the actuals.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Construction Resource Planning Software for Kenya | Lobocon",
    description:
      "Six categories, one plan, one set of actuals. Fuel from machine hours, requisitions linked to the BOQ, flags before the stockout.",
    url: "https://lobocon.co/resources",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
