// app/reporting/layout.tsx
// Keeps metadata server-side while the page itself is a client component.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Reporting with an Audit Trail | Lobocon",
  description:
    "Certified work, actual cost and CPI from the same entries your site team makes, with who entered each change, when, and why. Export to Excel or give the Engineer a read-only login.",
  keywords: [
    "construction reporting software Kenya",
    "interim payment certificate records",
    "construction audit trail",
    "earned value reporting construction",
  ],
  alternates: { canonical: "/reporting" },
  openGraph: {
    title: "Construction Reporting with an Audit Trail | Lobocon",
    description:
      "The Engineer questioned your interim certificate. Show the record, not a spreadsheet.",
    url: "https://lobocon.co/reporting",
  },
};

export default function ReportingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
