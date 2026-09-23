// app/pilot/layout.tsx
// Keeps metadata server-side while the page itself is a client component.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Lobocon Pilot | One live project, ninety days",
  description:
    "A paid 90-day pilot for contractors running more than one live contract. Your BOQ, your programme, your site team. KES 300,000, credited against your first year if you continue.",
  alternates: { canonical: "/pilot" },
  openGraph: {
    title: "The Lobocon Pilot | One live project, ninety days",
    description:
      "For contractors running more than one live contract. KES 300,000 for 90 days on one project, credited against your first year if you continue.",
    url: "https://lobocon.co/pilot",
  },
};

export default function PilotLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
