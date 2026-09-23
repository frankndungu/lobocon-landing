// app/documents/layout.tsx
// Keeps metadata server-side while the page itself is a client component.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drawing Register and Document Control for Kenya | Lobocon",
  description:
    "A drawing register with receipts. Every revision records who issued it, who received it and when it was opened. Superseded revisions are stamped, not deleted.",
  keywords: [
    "drawing register software Kenya",
    "construction document control",
    "drawing revision control",
    "construction transmittals",
  ],
  alternates: { canonical: "/documents" },
  openGraph: {
    title: "Drawing Register and Document Control for Kenya | Lobocon",
    description:
      "Site built to Rev C. Rev D was in an email. A drawing register with receipts.",
    url: "https://lobocon.co/documents",
  },
};

export default function DocumentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
