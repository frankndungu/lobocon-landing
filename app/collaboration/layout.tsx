// app/collaboration/layout.tsx
// Keeps metadata server-side while the page itself is a client component.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Project Collaboration with Role-Based Access | Lobocon",
  description:
    "Invite the QS, the PM, the client and the Engineer to one project in four fields. Roles that match the job, read-only by default for outsiders, financials at the level you choose.",
  alternates: { canonical: "/collaboration" },
  openGraph: {
    title: "Construction Project Collaboration with Role-Based Access | Lobocon",
    description:
      "Same numbers, different permissions. A four-field invite, five roles, and a programme share link that needs no login.",
    url: "https://lobocon.co/collaboration",
  },
};

export default function CollaborationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
