"use client";

import Link from "next/link";
import Navbar from "@/components/landing-page/home/navbar";
import Footer from "@/components/landing-page/home/footer";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

// ── Animation helpers ─────────────────────────────────────────────────────────

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT_EXPO, delay },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const, delay },
  }),
};

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Note: metadata is exported from app/boq-management/layout.tsx since this is a client component.
// Create app/boq-management/layout.tsx with:
//   export const metadata = { title: "BOQ Management Software for Kenya | Lobocon", ... }

// ── Structured data ───────────────────────────────────────────────────────────

function BOQStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Lobocon BOQ Management",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Bill of quantities management software for construction firms in Kenya and East Africa.",
    provider: {
      "@type": "Organization",
      name: "Lobocon",
      url: "https://lobocon.co",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I import my existing Excel BOQ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Lobocon accepts Excel and Google Sheets BOQs directly. You map your columns once during setup and the system builds your live tracker from your existing data. Most teams are up and running within an hour.",
        },
      },
      {
        "@type": "Question",
        name: "Does it work for NCA-format BOQs used in Kenya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Lobocon supports the standard NCA bill format used by most Kenyan quantity surveyors. The code, description, quantity, and unit structure maps directly.",
        },
      },
      {
        "@type": "Question",
        name: "How does site progress get into the system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Site foremen log progress directly in Lobocon using a simplified mobile-friendly view. The QS sees updates in real time without having to chase anyone.",
        },
      },
      {
        "@type": "Question",
        name: "What happens when there is a variation order?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Variations are raised directly in Lobocon with a description, value, and status. The BOQ updates when the variation is approved and the full history is retained for final account.",
        },
      },
      {
        "@type": "Question",
        name: "Is Lobocon built for the Kenyan market specifically?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Lobocon is built in Kenya for construction firms in Kenya and East Africa. Currency defaults to KES and the BOQ format follows local QS convention.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

// ── Primitives ────────────────────────────────────────────────────────────────

const Hatch = () => <div className="hatch" />;

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[11px] font-bold tracking-[0.2em] text-slate-900 uppercase mb-4">
    {children}
  </p>
);

const Breadcrumb = () => (
  <nav className="flex items-center gap-2 text-[12px] text-slate-500 mb-8 font-medium">
    <Link href="/" className="hover:text-slate-900 transition-colors">
      Home
    </Link>
    <span>/</span>
    <Link href="/#platform" className="hover:text-slate-900 transition-colors">
      Platform
    </Link>
    <span>/</span>
    <span className="text-slate-900">BOQ Management</span>
  </nav>
);

const StatCard = ({ num, label }: { num: string; label: string }) => (
  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left">
    <p className="text-[26px] font-black text-slate-900 font-mono tracking-tight leading-none mb-2">
      {num}
    </p>
    <p className="text-[12px] font-semibold text-slate-600 leading-snug">
      {label}
    </p>
  </div>
);

const FAQItem = ({ q, a }: { q: string; a: string }) => (
  <details className="group border-b border-slate-200 last:border-b-0">
    <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none">
      <span className="text-[15px] font-semibold text-slate-900">{q}</span>
      <svg
        className="w-4 h-4 text-slate-400 shrink-0 transition-transform group-open:rotate-45"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          d="M12 4v16m8-8H4"
        />
      </svg>
    </summary>
    <p className="pb-5 text-[14px] text-slate-600 leading-relaxed max-w-2xl">
      {a}
    </p>
  </details>
);

const RelatedCard = ({
  tag,
  title,
  href,
}: {
  tag: string;
  title: string;
  href: string;
}) => (
  <Link
    href={href}
    className="block p-5 border border-slate-200 rounded-xl bg-white hover:border-slate-400 hover:shadow-sm transition-all"
  >
    <span className="inline-block px-3 py-1 rounded bg-slate-100 text-slate-700 text-[11px] font-semibold mb-3">
      {tag}
    </span>
    <p className="text-[14px] font-semibold text-slate-900 leading-snug">
      {title}
    </p>
  </Link>
);

// ── Isometric cubes (exact match to iso-shapes.tsx) ──────────────────────────

const IsoGhostCube = ({ style }: { style?: React.CSSProperties }) => (
  <svg
    className="absolute ghost-cube pointer-events-none select-none"
    style={style}
    viewBox="0 0 130 110"
    fill="none"
  >
    <polygon
      points="65,8 118,36 65,64 12,36"
      fill="none"
      stroke="#94a3b8"
      strokeWidth="1.2"
      strokeDasharray="5 4"
      strokeLinejoin="round"
    />
    <polygon
      points="12,36 12,84 65,112 65,64"
      fill="none"
      stroke="#94a3b8"
      strokeWidth="1.2"
      strokeDasharray="5 4"
      strokeLinejoin="round"
    />
    <polygon
      points="118,36 118,84 65,112 65,64"
      fill="none"
      stroke="#94a3b8"
      strokeWidth="1.2"
      strokeDasharray="5 4"
      strokeLinejoin="round"
    />
  </svg>
);

const IsoAmberCube = ({
  style,
  size = 128,
  opacity = 1,
}: {
  style?: React.CSSProperties;
  size?: number;
  opacity?: number;
}) => (
  <svg
    className="absolute cube-b pointer-events-none select-none"
    style={{ ...style, opacity }}
    width={size}
    viewBox="0 0 128 108"
    fill="none"
  >
    <polygon
      points="64,6 118,34 64,62 10,34"
      fill="#fef9c3"
      stroke="#ca8a04"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <polygon
      points="10,34 10,84 64,112 64,62"
      fill="#fef08a"
      stroke="#ca8a04"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <polygon
      points="118,34 118,84 64,112 64,62"
      fill="#fde047"
      stroke="#ca8a04"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <line
      x1="64"
      y1="6"
      x2="64"
      y2="62"
      stroke="#ca8a04"
      strokeWidth="0.5"
      strokeDasharray="3 4"
      opacity="0.4"
    />
  </svg>
);

const IsoEmeraldCube = ({
  style,
  size = 160,
  opacity = 1,
}: {
  style?: React.CSSProperties;
  size?: number;
  opacity?: number;
}) => (
  <svg
    className="absolute cube-a pointer-events-none select-none"
    style={{ ...style, opacity }}
    width={size}
    viewBox="0 0 160 136"
    fill="none"
  >
    <polygon
      points="80,6 148,44 80,82 12,44"
      fill="#ecfdf5"
      stroke="#059669"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <polygon
      points="12,44 12,102 80,140 80,82"
      fill="#d1fae5"
      stroke="#059669"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <polygon
      points="148,44 148,102 80,140 80,82"
      fill="#6ee7b7"
      stroke="#059669"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <line
      x1="80"
      y1="6"
      x2="80"
      y2="82"
      stroke="#059669"
      strokeWidth="0.5"
      strokeDasharray="3 4"
      opacity="0.4"
    />
  </svg>
);

const IsoVioletCube = ({
  style,
  size = 100,
  opacity = 1,
}: {
  style?: React.CSSProperties;
  size?: number;
  opacity?: number;
}) => (
  <svg
    className="absolute cube-c pointer-events-none select-none"
    style={{ ...style, opacity }}
    width={size}
    viewBox="0 0 100 84"
    fill="none"
  >
    <polygon
      points="50,6 92,28 50,50 8,28"
      fill="#ede9fe"
      stroke="#7c3aed"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <polygon
      points="8,28 8,66 50,88 50,50"
      fill="#ddd6fe"
      stroke="#7c3aed"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <polygon
      points="92,28 92,66 50,88 50,50"
      fill="#c4b5fd"
      stroke="#7c3aed"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

const IcoBOQ = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    style={{ width: 28, height: 28, flexShrink: 0 }}
  >
    <polygon
      points="16,3 26,7 16,11 6,7"
      fill="#fef9c3"
      stroke="#ca8a04"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="6,7 16,11 16,14 6,10"
      fill="#fef08a"
      stroke="#ca8a04"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="26,7 16,11 16,14 26,10"
      fill="#fde047"
      stroke="#ca8a04"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="16,11 26,15 16,19 6,15"
      fill="#fef9c3"
      stroke="#ca8a04"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="6,15 16,19 16,22 6,18"
      fill="#fef08a"
      stroke="#ca8a04"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="26,15 16,19 16,22 26,18"
      fill="#fde047"
      stroke="#ca8a04"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
  </svg>
);

const IsoStrip = () => (
  <div
    className="w-full bg-white relative overflow-hidden"
    style={{ height: "164px" }}
  >
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <pattern
        id="boq-iso-dots"
        x="0"
        y="0"
        width="24"
        height="24"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="12" cy="12" r="0.8" fill="#cbd5e1" opacity="0.4" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#boq-iso-dots)" />
    </svg>
    <IsoGhostCube style={{ left: "4%", top: "20%", width: "50px" }} />
    <IsoAmberCube
      style={{ left: "12%", top: "10%", width: "52px" }}
      opacity={0.7}
    />
    <IsoEmeraldCube
      style={{ left: "24%", top: "5%", width: "60px" }}
      opacity={0.6}
    />
    <IsoGhostCube style={{ left: "38%", top: "15%", width: "40px" }} />
    <IsoAmberCube
      style={{ left: "50%", top: "8%", width: "44px" }}
      opacity={0.55}
    />
    <IsoEmeraldCube
      style={{ left: "62%", top: "12%", width: "36px" }}
      opacity={0.5}
    />
    <IsoVioletCube
      style={{ left: "74%", top: "6%", width: "38px" }}
      opacity={0.6}
    />
    <IsoGhostCube style={{ left: "86%", top: "18%", width: "48px" }} />
  </div>
);

// ── Browser chrome wrapper (matches app screenshots) ──────────────────────────

const BrowserFrame = ({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) => (
  <div className="float-card w-full" style={{ opacity: 1 }}>
    <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center gap-2">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
      </div>
      <span className="flex-1 text-center text-[10px] text-slate-500 font-mono truncate">
        {url}
      </span>
    </div>
    {children}
  </div>
);

// ── Live preview 1: BOQ import + setup workflow (compact, no internal scroll) ─

const ImportPreview = () => (
  <BrowserFrame url="app.lobocon.co/projects/primark/setup">
    {/* Success banner */}
    <div className="px-4 pt-3 pb-2 border-b border-slate-100">
      <div className="flex items-start gap-2 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1" />
        <div>
          <p className="text-[10px] font-bold text-emerald-800">
            BOQ successfully imported
          </p>
          <p className="text-[9px] text-emerald-600 mt-0.5">
            3 files · 16 bills · 942 items · KES 859,673,313 contract sum
            derived automatically
          </p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 divide-x divide-slate-100">
      {/* Left: steps — condensed */}
      <div className="p-3">
        <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2">
          Project Setup Progress
        </p>
        <div className="space-y-0">
          {[
            { n: 1, label: "Project Created", done: true },
            { n: 2, label: "BOQ Imported", done: true },
            { n: 3, label: "Configure Financial Settings", active: true },
            { n: 4, label: "Invite Team", done: false },
            { n: 5, label: "Project Live", done: false },
          ].map((step, i) => (
            <div key={step.n} className="flex gap-2">
              <div className="flex flex-col items-center">
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-black shrink-0 ${step.done ? "bg-emerald-500 text-white" : step.active ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-400 border border-slate-200"}`}
                >
                  {step.n}
                </div>
                {i < 4 && (
                  <div
                    className="w-px bg-slate-200"
                    style={{ height: "10px" }}
                  />
                )}
              </div>
              <p
                className={`text-[10px] font-semibold pt-0.5 pb-1.5 ${step.done || step.active ? "text-slate-900" : "text-slate-400"}`}
              >
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: detected items + budget summary */}
      <div className="p-3">
        <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2">
          What Was Detected
        </p>
        <div className="space-y-1.5 mb-3">
          <div className="flex items-center justify-between p-2 bg-white border border-slate-200 rounded-lg">
            <div>
              <p className="text-[10px] font-bold text-slate-900">
                Provisional Sums
              </p>
              <p className="text-[8px] text-slate-500">Civil BOQ — Bill VIII</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] font-black text-slate-900 font-mono">
                KES 3,125,000
              </p>
              <span className="inline-block px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[7px] font-bold rounded">
                Included in total
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between p-2 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-[10px] font-bold text-amber-800">
              No Contingency Detected
            </p>
            <button className="px-2 py-0.5 bg-amber-500 text-white text-[8px] font-bold rounded-md">
              Add
            </button>
          </div>
          <div className="flex items-center justify-between p-2 bg-white border border-slate-200 rounded-lg">
            <p className="text-[10px] font-bold text-slate-900">
              Management Reserve
            </p>
            <button className="px-2 py-0.5 bg-slate-900 text-white text-[8px] font-bold rounded-md">
              Configure
            </button>
          </div>
        </div>
        <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
          Current Budget Summary
        </p>
        <div className="space-y-1">
          {[
            {
              label: "Contract Sum",
              val: "859,673,313",
              cls: "text-slate-900",
              bg: "bg-white border-slate-200",
            },
            {
              label: "Contingency",
              val: "+ 0",
              cls: "text-amber-500",
              bg: "bg-amber-50/60 border-amber-100",
            },
            {
              label: "Management Reserve",
              val: "+ 0",
              cls: "text-slate-400",
              bg: "bg-white border-slate-100",
            },
          ].map((row) => (
            <div
              key={row.label}
              className={`flex items-center justify-between px-2 py-1.5 border rounded-lg ${row.bg}`}
            >
              <p className="text-[9px] font-semibold text-slate-700">
                {row.label}
              </p>
              <p className={`text-[10px] font-black font-mono ${row.cls}`}>
                {row.val}
              </p>
            </div>
          ))}
          <div className="flex items-center justify-between px-2 py-2 bg-slate-900 rounded-lg">
            <p className="text-[9px] font-bold text-white">
              Total Project Budget
            </p>
            <p className="text-[10px] font-black text-emerald-400 font-mono">
              859,673,313
            </p>
          </div>
        </div>
      </div>
    </div>
  </BrowserFrame>
);

// ── Live preview 2: Financial configuration (compact, no internal scroll) ─────

const FinancialConfigPreview = () => (
  <BrowserFrame url="app.lobocon.co/projects/primark/financial-setup">
    {/* Compact project header */}
    <div className="px-4 pt-3 pb-2 border-b border-slate-100 flex items-center justify-between gap-3">
      <div>
        <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">
          Financial Setup
        </p>
        <h3 className="text-[13px] font-black text-slate-900 leading-tight">
          Primark Apartments
        </h3>
        <p className="text-[8px] text-slate-500">
          Westlands, Nairobi — Primark Developments Ltd
        </p>
      </div>
      <div className="text-right shrink-0">
        <p className="text-[7px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">
          Contract Sum
        </p>
        <p className="text-[14px] font-black text-slate-900 font-mono">
          KES 859,673,313
        </p>
        <p className="text-[7px] text-slate-400">
          16 bills · 302 sections · 942 items
        </p>
      </div>
    </div>
    {/* Slim tab bar */}
    <div className="flex border-b border-slate-200 px-3">
      {[
        "Setup Workflow",
        "Financial Configuration",
        "Bills & Contingency",
        "Visibility Settings",
      ].map((tab) => (
        <button
          key={tab}
          className={`px-2.5 py-2 text-[9px] font-semibold border-b-2 -mb-px whitespace-nowrap ${tab === "Financial Configuration" ? "border-emerald-600 text-slate-900" : "border-transparent text-slate-400"}`}
        >
          {tab}
        </button>
      ))}
    </div>
    <div className="grid grid-cols-2 divide-x divide-slate-100 p-3 gap-0">
      {/* Left: cost baseline + contingency */}
      <div className="pr-3 space-y-2">
        {/* Cost baseline card */}
        <div className="border border-slate-200 rounded-lg p-2.5 bg-white">
          <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
            Cost Baseline
          </p>
          <div className="flex items-start justify-between gap-2 mb-2">
            <p className="text-[10px] font-bold text-slate-900 leading-snug">
              Auto-sync baseline from BOQ
            </p>
            <div
              className="toggle shrink-0"
              style={{
                transform: "scale(0.75)",
                transformOrigin: "right center",
              }}
            />
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-md px-2 py-1.5 flex items-center justify-between">
            <div>
              <p className="text-[9px] text-slate-500">Current baseline</p>
              <p className="text-[8px] text-emerald-600 font-semibold">
                Auto-sync is on — updates with BOQ
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black text-slate-900 font-mono">
                KES 859,673,313
              </p>
              <p className="text-[7px] text-slate-400">Last synced: just now</p>
            </div>
          </div>
        </div>
        {/* Contingency card */}
        <div className="border border-slate-200 rounded-lg p-2.5 bg-white">
          <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
            Contingency Allowance
          </p>
          <div className="flex items-start gap-1.5 bg-amber-50 border border-amber-200 rounded-md p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-0.5" />
            <p className="text-[8px] text-amber-700 leading-relaxed">
              No contingency was found in your BOQ. You can add a contingency
              percentage per bill or a global percentage across all bills.
            </p>
          </div>
        </div>
      </div>

      {/* Right: live budget preview */}
      <div className="pl-3">
        <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-2">
          Live Budget Preview
        </p>
        <div className="space-y-1">
          <div className="flex items-center justify-between px-2.5 py-2 border border-slate-200 rounded-lg bg-white">
            <div>
              <p className="text-[10px] font-bold text-slate-900">
                Contract Sum
              </p>
              <p className="text-[7px] text-slate-400">Raw BOQ · 16 bills</p>
            </div>
            <p className="text-[10px] font-black text-slate-900 font-mono">
              859,673,313
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-px h-2.5 bg-slate-200" />
          </div>
          <div className="flex items-center justify-between px-2.5 py-2 border border-amber-100 rounded-lg bg-amber-50/50">
            <div>
              <p className="text-[10px] font-bold text-amber-700">
                Contingency
              </p>
              <p className="text-[7px] text-amber-400">Not added</p>
            </div>
            <p className="text-[10px] font-black text-amber-500 font-mono">
              + 0
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-px h-2.5 bg-slate-200" />
          </div>
          <div className="flex items-center justify-between px-2.5 py-2 border border-emerald-200 rounded-lg bg-emerald-50">
            <div>
              <p className="text-[10px] font-bold text-emerald-800">
                Cost Plan / Baseline
              </p>
              <p className="text-[7px] text-emerald-600">
                Contract sum + contingency
              </p>
            </div>
            <p className="text-[10px] font-black text-emerald-700 font-mono">
              859,673,313
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-px h-2.5 bg-slate-200" />
          </div>
          <div className="flex items-center justify-between px-2.5 py-2 border border-slate-100 rounded-lg bg-white">
            <div>
              <p className="text-[10px] font-bold text-slate-400">
                Management Reserve
              </p>
              <p className="text-[7px] text-slate-300">Not configured</p>
            </div>
            <p className="text-[10px] font-black text-slate-300 font-mono">
              + 0
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-px h-2.5 bg-slate-200" />
          </div>
          <div className="flex items-center justify-between px-2.5 py-2.5 bg-slate-900 rounded-xl">
            <p className="text-[10px] font-bold text-white">
              Total Project Budget
            </p>
            <p className="text-[11px] font-black text-emerald-400 font-mono">
              859,673,313
            </p>
          </div>
        </div>
      </div>
    </div>
  </BrowserFrame>
);

// ── Live preview 3: BOQ line items ────────────────────────────────────────────

const BOQTablePreview = () => (
  <BrowserFrame url="app.lobocon.co/projects/primark/boq">
    <div className="px-4 py-3 border-b border-slate-100 bg-white">
      <div className="flex items-center gap-2 flex-wrap mb-0.5">
        <svg
          className="w-3.5 h-3.5 text-slate-600 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        <span className="text-[11px] font-black text-slate-900">
          Element 1 — Substructures
        </span>
        <span className="px-1.5 py-0.5 bg-slate-100 text-slate-600 text-[8px] font-bold rounded">
          B-SUB
        </span>
        <span className="px-1.5 py-0.5 bg-amber-100 text-amber-700 text-[8px] font-bold rounded">
          ALL PROVISIONAL
        </span>
      </div>
      <p className="text-[9px] text-slate-500 ml-5">
        52 items · column bases, basement slab, waterproofing, reinforcement
      </p>
    </div>
    <div
      className="grid px-4 py-1.5 border-b border-slate-100 bg-slate-50/60"
      style={{ gridTemplateColumns: "48px 1fr 60px 44px" }}
    >
      {["Code", "Description", "Qty", "Unit"].map((h, i) => (
        <span
          key={h}
          className={`text-[8px] font-black text-slate-400 uppercase tracking-wider ${i > 1 ? "text-right" : ""}`}
        >
          {h}
        </span>
      ))}
    </div>
    {[
      {
        code: "1.1.1",
        desc: "Excavate to reduce levels; not exceeding 1.5m deep",
        qty: "300",
        unit: "m3",
      },
      {
        code: "1.1.2",
        desc: "Ditto; exceeding 1.5m but not exceeding 3.0m deep",
        qty: "350",
        unit: "m3",
      },
      {
        code: "1.5.1",
        desc: "Vibrated reinforced insitu concrete class 25MPa — Column bases",
        qty: "14,000",
        unit: "m3",
      },
      {
        code: "1.8.1",
        desc: "T8 high tension ribbed steel bars reinforcement to BS 4449",
        qty: "26,991",
        unit: "Kg",
      },
      {
        code: "1.4.1",
        desc: "Allow for keeping the whole excavation free from all water",
        qty: "1",
        unit: "Item",
      },
    ].map((row, i) => (
      <div
        key={row.code}
        className="grid px-4 py-2 border-b border-slate-50"
        style={{
          gridTemplateColumns: "48px 1fr 60px 44px",
          background: i === 4 ? "#fefce8" : undefined,
        }}
      >
        <span className="text-[10px] text-slate-600 font-mono">{row.code}</span>
        <span className="text-[10px] text-slate-700 pr-2 leading-tight">
          {row.desc}
        </span>
        <span className="text-[10px] text-slate-700 text-right font-mono">
          {row.qty}
        </span>
        <span className="text-[10px] text-slate-500 text-right">
          {row.unit}
        </span>
      </div>
    ))}
    <div className="px-4 py-2.5 flex items-center justify-between bg-slate-50">
      <span className="text-[10px] font-black text-slate-900">
        Section Total
      </span>
      <span className="text-[11px] font-black text-slate-900 font-mono">
        KES 48,230,000
      </span>
    </div>
  </BrowserFrame>
);

// ── Live preview 4: Collaboration / role-based ────────────────────────────────

const CollabPreview = () => (
  <BrowserFrame url="app.lobocon.co/projects/primark/team">
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[12px] font-bold text-slate-900">
            Team Access — Primark Apartments
          </p>
          <p className="text-[9px] text-slate-500 mt-0.5">
            Role-based permissions · 4 members
          </p>
        </div>
        <button className="px-2.5 py-1.5 bg-slate-900 text-white text-[9px] font-bold rounded-lg">
          Invite member
        </button>
      </div>
      <div className="space-y-2">
        {[
          {
            init: "JK",
            name: "James Kariuki",
            role: "Project Manager",
            bg: "bg-blue-600",
            badge: "Full Access",
            badgeCls: "bg-blue-50 text-blue-700 border-blue-100",
          },
          {
            init: "AO",
            name: "Amina Osei",
            role: "Quantity Surveyor",
            bg: "bg-amber-500",
            badge: "BOQ + Cost",
            badgeCls: "bg-amber-50 text-amber-700 border-amber-100",
          },
          {
            init: "SM",
            name: "Samuel Mwita",
            role: "Site Foreman",
            bg: "bg-emerald-600",
            badge: "Progress only",
            badgeCls: "bg-emerald-50 text-emerald-700 border-emerald-100",
          },
          {
            init: "C",
            name: "Client View",
            role: "Read-only dashboard",
            bg: "bg-slate-300",
            badge: "View only",
            badgeCls: "bg-slate-100 text-slate-600 border-slate-200",
          },
        ].map((m) => (
          <div
            key={m.name}
            className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-100"
          >
            <div className="flex items-center gap-2.5">
              <div
                className={`w-7 h-7 rounded-full ${m.bg} flex items-center justify-center text-[9px] font-black text-white shrink-0`}
              >
                {m.init}
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-900">{m.name}</p>
                <p className="text-[9px] text-slate-500">{m.role}</p>
              </div>
            </div>
            <span
              className={`px-2 py-0.5 text-[9px] font-bold rounded-lg border ${m.badgeCls}`}
            >
              {m.badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  </BrowserFrame>
);

// ── Live preview 5: Variation orders ─────────────────────────────────────────

const VariationPreview = () => (
  <BrowserFrame url="app.lobocon.co/projects/primark/variations">
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[12px] font-bold text-slate-900">
            Variation Orders
          </p>
          <p className="text-[9px] text-slate-500 mt-0.5">
            Primark Apartments · 3 active
          </p>
        </div>
        <button className="px-2.5 py-1.5 bg-slate-900 text-white text-[9px] font-bold rounded-lg">
          New variation
        </button>
      </div>
      <div className="space-y-2">
        {[
          {
            ref: "VO-001",
            desc: "Additional ground beam due to unforeseen rock",
            val: "+KES 420,000",
            status: "Approved",
            statusCls: "bg-emerald-50 text-emerald-700 border-emerald-100",
            date: "14 Jan 2026",
            valCls: "text-emerald-600",
          },
          {
            ref: "VO-002",
            desc: "Client-instructed change to facade cladding spec",
            val: "+KES 1,240,000",
            status: "Pending",
            statusCls: "bg-amber-50 text-amber-700 border-amber-100",
            date: "22 Jan 2026",
            valCls: "text-amber-600",
          },
          {
            ref: "VO-003",
            desc: "Omission of ornamental pool from basement level",
            val: "-KES 380,000",
            status: "Rejected",
            statusCls: "bg-red-50 text-red-600 border-red-100",
            date: "28 Jan 2026",
            valCls: "text-red-500",
          },
        ].map((vo) => (
          <div
            key={vo.ref}
            className="flex items-center justify-between gap-2 p-2.5 border border-slate-200 rounded-xl bg-white"
          >
            <div className="flex items-start gap-2 min-w-0">
              <span className="shrink-0 px-1.5 py-0.5 bg-slate-100 text-slate-600 text-[8px] font-black rounded font-mono">
                {vo.ref}
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold text-slate-900 leading-snug">
                  {vo.desc}
                </p>
                <p className="text-[8px] text-slate-400 mt-0.5">{vo.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <span className={`text-[10px] font-black font-mono ${vo.valCls}`}>
                {vo.val}
              </span>
              <span
                className={`px-1.5 py-0.5 text-[8px] font-bold rounded-lg border ${vo.statusCls}`}
              >
                {vo.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg">
        <span className="text-[10px] font-bold text-slate-600">
          Net variation impact
        </span>
        <span className="text-[11px] font-black text-emerald-600 font-mono">
          +KES 1,280,000
        </span>
      </div>
    </div>
  </BrowserFrame>
);

// ── Live preview 6: Cash flow feeds from BOQ ─────────────────────────────────

const CashFlowFeedPreview = () => (
  <BrowserFrame url="app.lobocon.co/projects/primark/cash-flow">
    <div className="p-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-[12px] font-bold text-slate-900">
            Cash Flow Forecast
          </p>
          <p className="text-[9px] text-slate-500 mt-0.5">
            Snapshot 13 Feb 2026 · Period 1 Feb – 28 Feb 2026
          </p>
        </div>
        <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[9px] font-bold rounded-full">
          Healthy
        </span>
      </div>
      <div className="flex items-center gap-2 mb-3 px-3 py-2 bg-blue-50 border border-blue-100 rounded-lg">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 animate-pulse" />
        <p className="text-[9px] text-blue-700 font-semibold">
          Live — updating from BOQ progress at 62% completion
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {[
          {
            label: "Total Cash In",
            val: "KES 18,500,000",
            cls: "text-emerald-600",
            sub: "Cumulative",
          },
          {
            label: "Cash In This Period",
            val: "KES 3,200,000",
            cls: "text-emerald-600",
            sub: "Feb 2026",
          },
          {
            label: "Total Cash Out",
            val: "KES 14,300,000",
            cls: "text-red-500",
            sub: "Cumulative",
          },
          {
            label: "Burn Rate (Daily)",
            val: "KES 89,286",
            cls: "text-slate-700",
            sub: "Per day",
          },
        ].map((r) => (
          <div
            key={r.label}
            className="bg-slate-50 border border-slate-200 rounded-lg p-2.5"
          >
            <p className="text-[8px] text-slate-500 mb-1 font-semibold">
              {r.label}
            </p>
            <p className={`text-[11px] font-black font-mono ${r.cls}`}>
              {r.val}
            </p>
            <p className="text-[8px] text-slate-400 mt-0.5">{r.sub}</p>
          </div>
        ))}
      </div>
      <div className="space-y-1">
        {[
          {
            label: "Opening Balance",
            val: "KES 2,400,000",
            cls: "text-slate-700",
          },
          {
            label: "Closing Balance",
            val: "KES 4,200,000",
            cls: "text-emerald-600",
          },
          {
            label: "Projected Balance (30 days)",
            val: "KES 6,300,000",
            cls: "text-blue-600",
          },
        ].map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between px-2.5 py-1.5 border border-slate-100 rounded-lg bg-white"
          >
            <span className="text-[10px] text-slate-600">{r.label}</span>
            <span className={`text-[10px] font-black font-mono ${r.cls}`}>
              {r.val}
            </span>
          </div>
        ))}
      </div>
    </div>
  </BrowserFrame>
);

// ── Feature block layout ──────────────────────────────────────────────────────

interface FeatureBlockProps {
  label: string;
  accentDot: string;
  icon: React.ReactNode;
  title: string;
  body: string;
  preview: React.ReactNode;
  patternId: string;
  reverse?: boolean;
}

const FeatureBlock = ({
  label,
  accentDot,
  icon,
  title,
  body,
  preview,
  patternId,
  reverse,
}: FeatureBlockProps) => (
  <div
    className={`grid grid-cols-1 lg:grid-cols-2 border-b border-slate-200 last:border-b-0 ${reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}
  >
    {/* Copy side */}
    <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-200">
      <div className="flex items-center gap-2 mb-4">
        <div className={`w-2.5 h-2.5 rounded-sm ${accentDot}`} />
        <span className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">
          {label}
        </span>
      </div>
      <div className="mb-3">{icon}</div>
      <h3 className="text-[22px] sm:text-[26px] font-black text-slate-900 leading-tight tracking-tight mb-4">
        {title}
      </h3>
      <p className="text-[15px] text-slate-600 leading-relaxed max-w-md">
        {body}
      </p>
    </div>

    {/* Preview side — warm neutral bg matching site palette */}
    <div
      className="relative overflow-hidden"
      style={{ minHeight: "480px", background: "#f8f7f4" }}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id={patternId}
          x="0"
          y="0"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="12" cy="12" r="0.8" fill="#cbd5e1" opacity="0.3" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      {/* Subtle iso cubes in corner */}
      <IsoAmberCube
        style={{ right: "3%", top: "3%", width: "32px", position: "absolute" }}
        opacity={0.25}
      />
      <IsoGhostCube
        style={{
          left: "2%",
          bottom: "4%",
          width: "28px",
          position: "absolute",
          opacity: 0.15,
        }}
      />
      {/* Preview content */}
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-5 overflow-auto">
        <div className="w-full" style={{ maxWidth: "600px" }}>
          {preview}
        </div>
      </div>
    </div>
  </div>
);

// ── Hero BOQ mockup ───────────────────────────────────────────────────────────

const BOQHeroMockup = () => (
  <div className="float-card w-full" style={{ maxWidth: "520px", opacity: 1 }}>
    <div className="px-5 py-3.5 border-b border-slate-100 bg-white">
      <div className="flex items-center gap-2 mb-0.5 flex-wrap">
        <svg
          className="w-4 h-4 text-slate-600 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        <span className="text-[12px] font-black text-slate-900">
          Element 1 — Substructures
        </span>
        <span className="px-1.5 py-0.5 bg-slate-100 text-slate-600 text-[9px] font-bold rounded">
          B-SUB
        </span>
        <span className="px-1.5 py-0.5 bg-amber-100 text-amber-700 text-[9px] font-bold rounded">
          ALL PROVISIONAL
        </span>
      </div>
      <p className="text-[10px] text-slate-500 ml-6">
        52 items · column bases, basement slab, waterproofing, reinforcement
      </p>
    </div>
    <div
      className="grid px-5 py-2 border-b border-slate-100 bg-slate-50/50"
      style={{ gridTemplateColumns: "56px 1fr 72px 52px" }}
    >
      {["Code", "Description", "Qty", "Unit"].map((h, i) => (
        <span
          key={h}
          className={`text-[9px] font-black text-slate-500 uppercase tracking-wider ${i > 1 ? "text-right" : ""}`}
        >
          {h}
        </span>
      ))}
    </div>
    {[
      {
        code: "1.1.1",
        desc: "Excavate to reduce levels; not exceeding 1.5m deep",
        qty: "300",
        unit: "m3",
      },
      {
        code: "1.1.2",
        desc: "Ditto; exceeding 1.5m but not exceeding 3.0m deep",
        qty: "350",
        unit: "m3",
      },
      {
        code: "1.5.1",
        desc: "Vibrated reinforced insitu concrete class 25MPa — Column bases",
        qty: "14,000",
        unit: "m3",
      },
      {
        code: "1.8.1",
        desc: "T8 high tension ribbed steel bars reinforcement to BS 4449",
        qty: "26,991",
        unit: "Kg",
      },
      {
        code: "1.4.1",
        desc: "Allow for keeping the whole excavation free from all water",
        qty: "1",
        unit: "Item",
      },
    ].map((row) => (
      <div
        key={row.code}
        className="grid px-5 py-2.5 border-b border-slate-50"
        style={{ gridTemplateColumns: "56px 1fr 72px 52px" }}
      >
        <span className="text-[11px] text-slate-600 font-mono">{row.code}</span>
        <span className="text-[11px] text-slate-700 pr-2">{row.desc}</span>
        <span className="text-[11px] text-slate-700 text-right font-mono">
          {row.qty}
        </span>
        <span className="text-[11px] text-slate-500 text-right">
          {row.unit}
        </span>
      </div>
    ))}
    <div className="px-5 py-3 flex items-center justify-between bg-slate-50">
      <span className="text-[11px] font-black text-slate-900">
        Section Total
      </span>
      <span className="text-[12px] font-black text-slate-900 font-mono">
        KES 48,230,000
      </span>
    </div>
  </div>
);

// ── Before / After ────────────────────────────────────────────────────────────

const BeforeAfter = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 border border-slate-200 rounded-2xl overflow-hidden mt-12">
    <div className="p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-slate-200 bg-white">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-red-500" />
        <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
          Before Lobocon
        </span>
      </div>
      <ul className="space-y-4">
        {[
          "Multiple Excel files, one per trade. No single version anyone trusts.",
          "Reconciliation only happens at month-end. By then the damage is already done.",
          "Site progress lives in WhatsApp messages. It never makes it back into the BOQ.",
          "Client wants an update and you spend half a day pulling numbers from three spreadsheets.",
          "Variation orders get lost or disputed because there is no audit trail.",
        ].map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-[14px] text-slate-600 leading-relaxed"
          >
            <span className="mt-0.5 shrink-0 text-red-400 font-bold text-[12px]">
              x
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="p-8 sm:p-10 bg-slate-50/40">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-emerald-500" />
        <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
          With Lobocon
        </span>
      </div>
      <ul className="space-y-4">
        {[
          "One BOQ shared across the whole team. QS, PM, foreman and client all see the same numbers.",
          "Progress updates as work is recorded on site. The BOQ is always current.",
          "Import your existing Excel BOQ in under an hour. No re-entering data.",
          "Client dashboard is live. No more weekly PDFs or status emails.",
          "Every variation is logged with a timestamp. No disputes at final account.",
        ].map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-[14px] text-slate-700 leading-relaxed"
          >
            <span className="mt-0.5 shrink-0 text-emerald-500 font-bold text-[12px]">
              v
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BOQManagementPage() {
  return (
    <>
      <BOQStructuredData />
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-100">
        <Navbar />

        {/* ── Hero ── */}
        <section className="w-full px-5 md:px-10 lg:px-16 pt-16 pb-0">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-16 lg:pb-20">
              <div>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                  className="inline-flex items-center gap-2 mb-5"
                >
                  <IcoBOQ />
                  <span className="text-[11px] font-bold tracking-[0.2em] text-slate-900 uppercase">
                    BOQ Management
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.08}
                  className="text-[38px] sm:text-[48px] lg:text-[58px] font-black text-slate-900 tracking-[-0.025em] leading-[1.03] mb-6"
                >
                  Your bill of quantities,{" "}
                  <span className="text-slate-500">live on site.</span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.16}
                  className="text-[17px] text-slate-600 leading-relaxed mb-10 max-w-lg"
                >
                  Construction firms in Kenya spend weeks every month
                  reconciling BOQ spreadsheets. Lobocon replaces that with a
                  live tracker that updates as work happens — so you know where
                  every shilling is going before the month ends.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.22}
                  className="flex items-center gap-4 flex-wrap mb-12"
                >
                  <Link
                    href="/session"
                    className="px-8 py-3.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/20 text-sm"
                  >
                    Book a working session
                  </Link>
                  <a
                    href="mailto:sales@lobocon.co"
                    className="px-8 py-3.5 rounded-full border border-slate-200 text-slate-900 font-semibold hover:bg-slate-50 transition-colors text-sm"
                  >
                    Contact Sales
                  </a>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.3}
                  className="grid grid-cols-3 gap-4"
                >
                  <StatCard
                    num="3 wks"
                    label="saved per project on BOQ reconciliation"
                  />
                  <StatCard
                    num="942"
                    label="line items tracked live across 16 bills"
                  />
                  <StatCard
                    num="1"
                    label="source of truth for your whole QS team"
                  />
                </motion.div>
              </div>

              {/* Hero dark panel */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={0.2}
                className="relative rounded-2xl overflow-hidden"
                style={{ minHeight: "420px" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg,#92400e 0%,#78350f 60%,#451a03 100%)",
                  }}
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 600 420"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <pattern
                      id="hero-dp"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="1"
                        fill="#fbbf24"
                        opacity="0.18"
                      />
                    </pattern>
                    <rect width="600" height="420" fill="url(#hero-dp)" />
                    <g opacity="0.14">
                      <polygon
                        points="80,140 200,80 320,140 200,200"
                        fill="#fbbf24"
                      />
                      <polygon
                        points="80,140 80,280 200,340 200,200"
                        fill="#f59e0b"
                      />
                      <polygon
                        points="320,140 320,280 200,340 200,200"
                        fill="#d97706"
                      />
                    </g>
                  </svg>
                </div>
                <IsoAmberCube
                  style={{
                    right: "8%",
                    top: "6%",
                    width: "44px",
                    position: "absolute",
                  }}
                  opacity={0.3}
                />
                <IsoGhostCube
                  style={{
                    left: "4%",
                    bottom: "12%",
                    width: "36px",
                    position: "absolute",
                    opacity: 0.2,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 pb-14">
                  <BOQHeroMockup />
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-5 py-3 bg-amber-950/50 border-t border-amber-800/30">
                  <span className="text-[9px] font-bold text-amber-300/60 uppercase tracking-widest shrink-0">
                    Customer Story
                  </span>
                  <span className="text-[11px] font-semibold text-amber-100/80 truncate">
                    How Skyline Kenya cut BOQ reconciliation from 3 weeks to 2
                    days
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Hatch />

        {/* ── Trust bar ── */}
        <section className="w-full px-5 md:px-10 lg:px-16 py-8">
          <Reveal>
            <p className="text-center text-[11px] font-bold tracking-[0.2em] text-slate-900 mb-6 uppercase">
              Trusted by leading construction firms in Kenya
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-3 sm:grid-cols-6 border-t border-l border-slate-200">
              {[
                {
                  top: "STAN",
                  bottom: "BUILD",
                  cls: "font-black text-slate-900",
                },
                {
                  top: "Skyline",
                  bottom: "Kenya",
                  cls: "font-black text-emerald-700",
                },
                {
                  top: "Maisha",
                  bottom: "Construct",
                  cls: "font-black text-rose-700",
                },
                {
                  top: "Kensetsu",
                  bottom: "Ltd",
                  cls: "font-black text-indigo-700",
                },
                {
                  top: "Harbourage",
                  bottom: "EA",
                  cls: "font-black text-teal-700",
                },
                {
                  top: "BUILD",
                  bottom: "SCAPE",
                  cls: "font-light text-blue-700 tracking-[0.1em]",
                },
              ].map(({ top, bottom, cls }) => (
                <div
                  key={top}
                  className="h-24 flex flex-col items-center justify-center border-b border-r border-slate-200 gap-0.5 opacity-70 hover:opacity-100 transition-opacity"
                >
                  <span className={`text-[13px] uppercase ${cls}`}>{top}</span>
                  <span className="text-[9px] font-bold tracking-[0.15em] text-slate-400 uppercase">
                    {bottom}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <Hatch />

        {/* ── Problem / Solution ── */}
        <section className="w-full px-5 md:px-10 lg:px-16 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel>The problem</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] font-black text-slate-900 tracking-[-0.02em] leading-[1.03] max-w-2xl mb-4">
                Every QS team in Kenya is doing{" "}
                <span className="text-slate-500">the same thing wrong.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[16px] text-slate-600 max-w-lg mb-2">
                It is not your fault. It is what the tools have forced you into.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <BeforeAfter />
            </Reveal>
          </div>
        </section>

        <Hatch />

        {/* ── Features with live previews ── */}
        <section className="w-full px-5 md:px-10 lg:px-16 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel>What it does</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] font-black text-slate-900 tracking-[-0.02em] leading-[1.03] max-w-2xl mb-12">
                Everything your QS team needs.{" "}
                <span className="text-slate-500">Nothing it does not.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <FeatureBlock
                  label="Import"
                  accentDot="bg-amber-500"
                  patternId="feat-dp-1"
                  icon={
                    <svg
                      viewBox="0 0 28 28"
                      fill="none"
                      style={{ width: 28, height: 28 }}
                    >
                      <polygon
                        points="14,3 22,7 14,11 6,7"
                        fill="#fef9c3"
                        stroke="#ca8a04"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                      <polygon
                        points="6,7 14,11 14,24 6,20"
                        fill="#fef08a"
                        stroke="#ca8a04"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                      <polygon
                        points="22,7 14,11 14,24 22,20"
                        fill="#fde047"
                        stroke="#ca8a04"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  title="Paste or upload your existing BOQ"
                  body="Lobocon accepts Excel and Google Sheets BOQs directly. You map your columns once and the system builds your live tracker automatically. The contract sum is derived instantly — 942 items across 16 bills, parsed in seconds."
                  preview={<ImportPreview />}
                />

                <FeatureBlock
                  label="Financial configuration"
                  accentDot="bg-emerald-600"
                  patternId="feat-dp-2"
                  icon={
                    <svg
                      viewBox="0 0 28 28"
                      fill="none"
                      style={{ width: 28, height: 28 }}
                    >
                      <polygon
                        points="14,3 22,7 14,11 6,7"
                        fill="#d1fae5"
                        stroke="#059669"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                      <polygon
                        points="6,7 14,11 14,24 6,20"
                        fill="#ecfdf5"
                        stroke="#059669"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                      <polygon
                        points="22,7 14,11 14,24 22,20"
                        fill="#6ee7b7"
                        stroke="#059669"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  title="Cost baseline locks to your BOQ automatically"
                  body="Set your contingency, management reserve, and cost baseline in one place. The live budget preview updates as you configure each item — so your finance team always sees the total project budget before you commit to anything."
                  preview={<FinancialConfigPreview />}
                  reverse
                />

                <FeatureBlock
                  label="Live tracking"
                  accentDot="bg-amber-500"
                  patternId="feat-dp-3"
                  icon={
                    <svg
                      viewBox="0 0 28 28"
                      fill="none"
                      style={{ width: 28, height: 28 }}
                    >
                      <polygon
                        points="14,2 22,6 14,10 6,6"
                        fill="#e0e7ff"
                        stroke="#6366f1"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                      <polygon
                        points="6,6 14,10 14,25 6,21"
                        fill="#eef2ff"
                        stroke="#6366f1"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                      <polygon
                        points="22,6 14,10 14,25 22,21"
                        fill="#c7d2fe"
                        stroke="#6366f1"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  title="Track every line item against actual site progress"
                  body="Site teams record daily progress against each BOQ code. The tracker updates in real time. Your QS sees exactly which items are on track, which are over-running, and where the margin risk is building — before it costs you."
                  preview={<BOQTablePreview />}
                />

                <FeatureBlock
                  label="Role-based access"
                  accentDot="bg-violet-600"
                  patternId="feat-dp-4"
                  icon={
                    <svg
                      viewBox="0 0 28 28"
                      fill="none"
                      style={{ width: 28, height: 28 }}
                    >
                      <polygon
                        points="14,3 20,6 14,9 8,6"
                        fill="#ede9fe"
                        stroke="#7c3aed"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                      <polygon
                        points="8,6 14,9 14,18 8,15"
                        fill="#f5f3ff"
                        stroke="#7c3aed"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                      <polygon
                        points="20,6 14,9 14,18 20,15"
                        fill="#ddd6fe"
                        stroke="#7c3aed"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  title="The right view for every person on your team"
                  body="Your QS sees everything. Your foreman sees only progress entry. Your client sees a read-only dashboard. One platform, with permissions that match how your project is actually structured on site."
                  preview={<CollabPreview />}
                  reverse
                />

                <FeatureBlock
                  label="Variation orders"
                  accentDot="bg-rose-600"
                  patternId="feat-dp-5"
                  icon={
                    <svg
                      viewBox="0 0 28 28"
                      fill="none"
                      style={{ width: 28, height: 28 }}
                    >
                      <rect
                        x="5"
                        y="5"
                        width="18"
                        height="18"
                        rx="2"
                        fill="none"
                        stroke="#e11d48"
                        strokeWidth="1.2"
                      />
                      <line
                        x1="9"
                        y1="10"
                        x2="19"
                        y2="10"
                        stroke="#e11d48"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="9"
                        y1="14"
                        x2="19"
                        y2="14"
                        stroke="#e11d48"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="9"
                        y1="18"
                        x2="14"
                        y2="18"
                        stroke="#e11d48"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  }
                  title="Every variation logged with a full audit trail"
                  body="Raise variations directly in Lobocon with a description, value, and approval status. The BOQ updates when approved. The full history is retained for final account — no more disputes about what was agreed and when."
                  preview={<VariationPreview />}
                />

                <FeatureBlock
                  label="Connected platform"
                  accentDot="bg-teal-600"
                  patternId="feat-dp-6"
                  icon={
                    <svg
                      viewBox="0 0 28 28"
                      fill="none"
                      style={{ width: 28, height: 28 }}
                    >
                      <polygon
                        points="14,3 20,6 14,9 8,6"
                        fill="#d1fae5"
                        stroke="#0d9488"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                      <polygon
                        points="8,6 14,9 14,18 8,15"
                        fill="#ecfdf5"
                        stroke="#0d9488"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                      <polygon
                        points="20,6 14,9 14,18 20,15"
                        fill="#99f6e4"
                        stroke="#0d9488"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  title="BOQ progress feeds your cash flow automatically"
                  body="When work reaches 62% completion your projected inflows update immediately. Your BOQ is not an island — it feeds earned value, cash flow forecasting, and your live project dashboard without you having to do anything extra."
                  preview={<CashFlowFeedPreview />}
                  reverse
                />
              </div>
            </Reveal>
          </div>
        </section>

        <Hatch />

        {/* ── Testimonial ── */}
        <section
          className="w-full px-5 md:px-10 lg:px-16 py-20 lg:py-28 relative overflow-hidden"
          style={{ background: "#0f172a" }}
        >
          <div className="absolute inset-0 pointer-events-none select-none">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1200 400"
              preserveAspectRatio="xMidYMid slice"
            >
              <pattern
                id="test-dp"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="0.7" fill="#334155" opacity="0.6" />
              </pattern>
              <rect width="1200" height="400" fill="url(#test-dp)" />
              <g opacity="0.12">
                <polygon points="80,80 160,40 240,80 160,120" fill="#fbbf24" />
                <polygon points="80,80 80,200 160,240 160,120" fill="#f59e0b" />
                <polygon
                  points="240,80 240,200 160,240 160,120"
                  fill="#d97706"
                />
              </g>
              <g opacity="0.08">
                <polygon
                  points="980,60 1060,20 1140,60 1060,100"
                  fill="#fbbf24"
                />
                <polygon
                  points="980,60 980,180 1060,220 1060,100"
                  fill="#f59e0b"
                />
                <polygon
                  points="1140,60 1140,180 1060,220 1060,100"
                  fill="#d97706"
                />
              </g>
            </svg>
          </div>
          <Reveal>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <p className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-8">
                Customer Story
              </p>
              <blockquote className="text-[24px] sm:text-[28px] lg:text-[32px] font-black text-white leading-tight tracking-[-0.02em] mb-8">
                "BOQ alone saved 3 weeks per project. Our QS team finally does
                analysis, not spreadsheets."
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-black text-white uppercase tracking-wide">
                    Amina Osei
                  </p>
                  <p className="text-[11px] text-slate-400">
                    QS Lead, Skyline Kenya
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <Hatch />

        {/* ── FAQ ── */}
        <section className="w-full px-5 md:px-10 lg:px-16 py-16 lg:py-24">
          <div className="max-w-7xlto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <Reveal>
                <div>
                  <SectionLabel>Common questions</SectionLabel>
                  <h2 className="text-[28px] sm:text-[36px] font-black text-slate-900 tracking-[-0.02em] leading-tight max-w-sm">
                    What Kenya-based QS teams{" "}
                    <span className="text-slate-500">ask us first.</span>
                  </h2>
                  <p className="mt-4 text-[15px] text-slate-600 leading-relaxed max-w-sm">
                    If you have a question not listed here, email us at{" "}
                    <a
                      href="mailto:sales@lobocon.co"
                      className="text-slate-900 font-semibold hover:underline"
                    >
                      sales@lobocon.co
                    </a>
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="border-t border-slate-200">
                  {[
                    {
                      q: "Can I import my existing Excel BOQ?",
                      a: "Yes. Lobocon accepts Excel and Google Sheets BOQs directly. You map your columns once during setup and the system builds your live tracker from your existing data. Most teams are up and running within an hour.",
                    },
                    {
                      q: "Does it work for NCA-format BOQs used in Kenya?",
                      a: "Yes. Lobocon supports the standard NCA bill format used by most Kenyan quantity surveyors. The code, description, quantity, and unit structure maps directly. If you use a custom format, the import tool handles that too.",
                    },
                    {
                      q: "How does site progress get into the system?",
                      a: "Site foremen log progress directly in Lobocon using a simplified mobile-friendly view. They only see their assigned work packages and enter a percentage or quantity done. The QS sees updates in real time without having to chase anyone.",
                    },
                    {
                      q: "What happens when there is a variation order?",
                      a: "Variations are raised directly in Lobocon with a description, value, and status. Approvals are tracked. The BOQ updates when the variation is approved and the full history is retained for final account.",
                    },
                    {
                      q: "Can our client see the BOQ?",
                      a: "You control what clients see. You can give them a read-only live dashboard that shows overall progress and financial position without exposing your internal cost breakdown. Most firms find this replaces the weekly progress meeting entirely.",
                    },
                    {
                      q: "Is Lobocon built for the Kenyan market specifically?",
                      a: "Yes. Lobocon is built in Kenya for construction firms in Kenya and East Africa. Currency defaults to KES, the BOQ format follows local QS convention, and the team understands how construction projects are structured and contracted in this market.",
                    },
                  ].map((item) => (
                    <FAQItem key={item.q} {...item} />
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <IsoStrip />
        <Hatch />

        {/* ── Related ── */}
        <section className="w-full px-5 md:px-10 lg:px-16 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="flex flex-col lg:flex-row lg:gap-16">
                <div className="shrink-0 lg:w-52 mb-8 lg:mb-0 lg:pt-1">
                  <SectionLabel>Inside Lobocon</SectionLabel>
                  <h2 className="text-[28px] font-black text-slate-800 leading-tight tracking-[-0.02em] mb-4">
                    From the blog
                  </h2>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15 10 5 5-5 5" />
                      <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                    </svg>
                    View all
                  </Link>
                </div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <RelatedCard
                    tag="Tutorial"
                    title="Migrating Your BOQ from Excel to Lobocon in Under an Hour"
                    href="/blog/boq-excel-to-lobocon"
                  />
                  <RelatedCard
                    tag="Blog"
                    title="How to Track Variation Orders and Protect Your Margin"
                    href="/blog/variation-orders-margin"
                  />
                  <RelatedCard
                    tag="Blog"
                    title="Earned Value Management for Construction PMs: A Practical Guide"
                    href="/blog/earned-value-management-construction"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <Hatch />

        {/* ── Final CTA ── */}
        <section style={{ background: "#f5f0e8" }}>
          <div className="relative w-full overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-64 lg:w-80 pointer-events-none select-none"
              style={{ opacity: 0.55 }}
            >
              <svg
                viewBox="0 0 280 520"
                fill="none"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMaxYMid meet"
              >
                <polygon
                  points="140,60 240,110 140,160 40,110"
                  fill="none"
                  stroke="#b8b0a4"
                  strokeWidth="1.2"
                  strokeDasharray="5 4"
                />
                <polygon
                  points="40,110 40,260 140,310 140,160"
                  fill="none"
                  stroke="#b8b0a4"
                  strokeWidth="1.2"
                  strokeDasharray="5 4"
                />
                <polygon
                  points="240,110 240,260 140,310 140,160"
                  fill="none"
                  stroke="#b8b0a4"
                  strokeWidth="1.2"
                  strokeDasharray="5 4"
                />
                <polygon
                  points="100,310 170,345 100,380 30,345"
                  fill="#ede8df"
                  stroke="#b8b0a4"
                  strokeWidth="1.2"
                />
                <polygon
                  points="30,345 30,430 100,465 100,380"
                  fill="#e6e0d6"
                  stroke="#b8b0a4"
                  strokeWidth="1.2"
                />
                <polygon
                  points="170,345 170,430 100,465 100,380"
                  fill="#ddd7cc"
                  stroke="#b8b0a4"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
            <div
              className="absolute right-0 top-0 bottom-0 w-64 lg:w-80 pointer-events-none select-none"
              style={{ opacity: 0.55 }}
            >
              <svg
                viewBox="0 0 280 520"
                fill="none"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMinYMid meet"
              >
                <polygon
                  points="140,180 240,230 140,280 40,230"
                  fill="none"
                  stroke="#b8b0a4"
                  strokeWidth="1.2"
                  strokeDasharray="5 4"
                />
                <polygon
                  points="40,230 40,380 140,430 140,280"
                  fill="none"
                  stroke="#b8b0a4"
                  strokeWidth="1.2"
                  strokeDasharray="5 4"
                />
                <polygon
                  points="240,230 240,380 140,430 140,280"
                  fill="none"
                  stroke="#b8b0a4"
                  strokeWidth="1.2"
                  strokeDasharray="5 4"
                />
                <polygon
                  points="180,60 240,90 180,120 120,90"
                  fill="#ede8df"
                  stroke="#b8b0a4"
                  strokeWidth="1.2"
                />
                <polygon
                  points="120,90 120,160 180,190 180,120"
                  fill="#e6e0d6"
                  stroke="#b8b0a4"
                  strokeWidth="1.2"
                />
                <polygon
                  points="240,90 240,160 180,190 180,120"
                  fill="#ddd7cc"
                  stroke="#b8b0a4"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-24 lg:py-32 max-w-3xl mx-auto">
              <Reveal>
                <h2 className="text-[36px] sm:text-[48px] lg:text-[50px] font-black text-slate-900 leading-[1.05] tracking-[-0.025em] mb-6">
                  Stop reconciling at month-end.
                  <br />
                  Know now.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[16px] sm:text-[17px] text-slate-700 leading-relaxed mb-10 max-w-md">
                  Book a working session with the Lobocon team. We will import
                  your first BOQ with you and show you exactly how your QS
                  workflow changes.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <Link
                  href="/session"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-[14px] font-bold px-8 py-4 rounded-lg transition-colors"
                >
                  Book a session
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
