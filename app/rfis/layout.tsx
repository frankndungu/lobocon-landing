// app/rfis/layout.tsx
// Keeps metadata server-side while the page itself is a client component.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RFIs for Construction Sites in Kenya | Lobocon",
  description:
    "RFIs raised on site, addressed to a named person, with a due date and a timestamp on every step. The addressee answers from an email link, no account needed.",
  keywords: [
    "RFI software construction Kenya",
    "request for information construction",
    "RFI tracking site",
    "construction RFI log",
  ],
  alternates: { canonical: "/rfis" },
  openGraph: {
    title: "RFIs for Construction Sites in Kenya | Lobocon",
    description:
      "Sixteen days waiting on one answer. Every RFI issued, answered and dated.",
    url: "https://lobocon.co/rfis",
  },
};

export default function RFIsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
