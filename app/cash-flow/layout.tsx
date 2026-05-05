// app/cash-flow/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Cash Flow Software for Kenya | Lobocon",
  description:
    "Track cash in, cash out, runway, and client invoices in real time. Lobocon replaces cash flow spreadsheets for construction firms in Kenya and East Africa.",
  keywords: [
    "construction cash flow software Kenya",
    "cash flow forecasting construction Kenya",
    "construction finance software Nairobi",
    "invoice tracking construction Kenya",
    "cash runway construction project",
    "construction payment tracking East Africa",
  ],
  alternates: { canonical: "/cash-flow" },
  openGraph: {
    title: "Construction Cash Flow Software for Kenya | Lobocon",
    description:
      "See your cash position 90 days out. Track overdue invoices and client payments in one place. Built for construction firms in Kenya.",
    url: "https://lobocon.co/cash-flow",
  },
};

export default function CashFlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
