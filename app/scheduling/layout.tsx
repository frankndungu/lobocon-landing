// app/scheduling/layout.tsx
// Keeps metadata server-side while the page itself is a client component.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Scheduling Software for Kenya | Lobocon",
  description:
    "Import your MS Project programme or build it in Lobocon. Critical path, float and slippage recalculate on every update, and every re-baseline carries a reason.",
  keywords: [
    "construction scheduling software Kenya",
    "critical path method construction",
    "MS Project import construction",
    "construction programme baseline",
    "extension of time claim records",
  ],
  alternates: { canonical: "/scheduling" },
  openGraph: {
    title: "Construction Scheduling Software for Kenya | Lobocon",
    description:
      "Programme says week 14. Site is in week 19. Know which activity ate the five weeks.",
    url: "https://lobocon.co/scheduling",
  },
};

export default function SchedulingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
