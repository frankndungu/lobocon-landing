"use client";

import Link from "next/link";
import Navbar from "@/components/landing-page/home/navbar";
import Footer from "@/components/landing-page/home/footer";
import { CONTACT } from "@/components/contact/contact";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

// ── Animation ─────────────────────────────────────────────────────────────────

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (d: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay: d },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (d: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: d },
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

// ── Primitives ────────────────────────────────────────────────────────────────

const Hatch = () => <div className="hatch" />;

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[11px] font-bold tracking-[0.2em] text-slate-900 uppercase mb-4">
    {children}
  </p>
);

const Breadcrumb = () => (
  <nav className="flex items-center gap-2 text-[12px] text-slate-600 mb-8 font-medium">
    <Link href="/" className="hover:text-slate-900 transition-colors">
      Home
    </Link>
    <span>/</span>
    <Link href="/#platform" className="hover:text-slate-900 transition-colors">
      Platform
    </Link>
    <span>/</span>
    <span className="text-slate-900">Planned vs Actual</span>
  </nav>
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



// ── Isometric cubes ───────────────────────────────────────────────────────────

const IsoGhost = ({ style }: { style?: React.CSSProperties }) => (
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

const IsoEmerald = ({
  style,
  size = 128,
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
    viewBox="0 0 128 108"
    fill="none"
  >
    <polygon
      points="64,6 118,34 64,62 10,34"
      fill="#d1fae5"
      stroke="#059669"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <polygon
      points="10,34 10,84 64,112 64,62"
      fill="#ecfdf5"
      stroke="#059669"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <polygon
      points="118,34 118,84 64,112 64,62"
      fill="#6ee7b7"
      stroke="#059669"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <line
      x1="64"
      y1="6"
      x2="64"
      y2="62"
      stroke="#059669"
      strokeWidth="0.5"
      strokeDasharray="3 4"
      opacity="0.4"
    />
  </svg>
);

const IsoBlue = ({
  style,
  size = 100,
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
    viewBox="0 0 100 84"
    fill="none"
  >
    <polygon
      points="50,6 92,28 50,50 8,28"
      fill="#dbeafe"
      stroke="#3b82f6"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <polygon
      points="8,28 8,66 50,88 50,50"
      fill="#eff6ff"
      stroke="#3b82f6"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <polygon
      points="92,28 92,66 50,88 50,50"
      fill="#bfdbfe"
      stroke="#3b82f6"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

const IsoAmber = ({
  style,
  size = 80,
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
      fill="#fef9c3"
      stroke="#ca8a04"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <polygon
      points="8,28 8,66 50,88 50,50"
      fill="#fef08a"
      stroke="#ca8a04"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <polygon
      points="92,28 92,66 50,88 50,50"
      fill="#fde047"
      stroke="#ca8a04"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);


// ── ISO strip ─────────────────────────────────────────────────────────────────

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
        id="pva-iso-dots"
        x="0"
        y="0"
        width="24"
        height="24"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="12" cy="12" r="0.8" fill="#cbd5e1" opacity="0.4" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#pva-iso-dots)" />
    </svg>
    <IsoGhost style={{ left: "4%", top: "20%", width: "50px" }} />
    <IsoEmerald
      style={{ left: "12%", top: "8%", width: "52px" }}
      opacity={0.7}
    />
    <IsoBlue style={{ left: "25%", top: "5%", width: "44px" }} opacity={0.6} />
    <IsoGhost style={{ left: "38%", top: "15%", width: "38px" }} />
    <IsoEmerald
      style={{ left: "50%", top: "10%", width: "48px" }}
      opacity={0.5}
    />
    <IsoAmber
      style={{ left: "63%", top: "6%", width: "36px" }}
      opacity={0.55}
    />
    <IsoBlue style={{ left: "75%", top: "12%", width: "40px" }} opacity={0.5} />
    <IsoGhost style={{ left: "87%", top: "18%", width: "46px" }} />
  </div>
);


// ── Preview primitives ────────────────────────────────────────────────────────

// Wraps every run of digits in the mono face, so figures inside mixed text
// still read as numbers.
const M = ({ children }: { children: string }) => (
  <>
    {children.split(/(\d[\d.,:]*)/).map((part, i) =>
      i % 2 === 1 ? (
        <span key={i} className="font-mono">
          {part}
        </span>
      ) : (
        part
      ),
    )}
  </>
);

const Card = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={`w-full bg-white border border-slate-200 rounded-xl shadow-[0_8px_24px_rgba(15,23,42,0.06)] ${className}`}
  >
    {children}
  </div>
);

const CardHead = ({
  title,
  sub,
  right,
}: {
  title: React.ReactNode;
  sub?: string;
  right?: React.ReactNode;
}) => (
  <div className="flex items-center justify-between gap-3 px-4.5 py-3.5 border-b border-slate-100">
    <div className="min-w-0">
      <p className="text-[13px] font-bold text-slate-900">{title}</p>
      {sub && (
        <p className="mt-0.5 text-[11px] text-slate-500">
          <M>{sub}</M>
        </p>
      )}
    </div>
    {right}
  </div>
);

const CHIP = {
  g: "bg-emerald-50 text-emerald-700 border-emerald-200",
  a: "bg-amber-50 text-amber-800 border-amber-200",
  r: "bg-red-50 text-red-700 border-red-200",
  s: "bg-slate-100 text-slate-700 border-slate-200",
} as const;

const Chip = ({
  tone,
  children,
}: {
  tone: keyof typeof CHIP;
  children: string;
}) => (
  <span
    className={`inline-block shrink-0 whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-bold ${CHIP[tone]}`}
  >
    <M>{children}</M>
  </span>
);

// A label and value row. Values are mono unless they are words.
const KV = ({
  k,
  v,
  text = false,
}: {
  k: string;
  v: React.ReactNode;
  text?: boolean;
}) => (
  <div className="flex items-baseline justify-between gap-4 py-2.5 border-b border-slate-100 last:border-b-0 text-[13px]">
    <span className="font-semibold text-slate-700">
      <M>{k}</M>
    </span>
    <span
      className={`text-right font-semibold ${text ? "" : "font-mono"}`}
    >
      {v}
    </span>
  </div>
);

const TABLE =
  "w-full border-collapse text-[13px] [&_tr:last-child_td]:border-b-0";
const TH =
  "px-3 py-2.5 text-left text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500 border-b border-slate-200 whitespace-nowrap";
const TD = "px-3 py-2.75 border-b border-slate-100 align-middle";

const Bar = ({ pct, color }: { pct: number; color: string }) => (
  <div className="h-2 rounded bg-slate-200 overflow-hidden">
    <div
      className="h-full rounded"
      style={{ width: `${pct}%`, background: color }}
    />
  </div>
);

// ── Feature block ─────────────────────────────────────────────────────────────

interface FeatureBlockProps {
  label: string;
  dot: string;
  title: string;
  body: string;
  preview: React.ReactNode;
  reverse?: boolean;
}

const FeatureBlock = ({
  label,
  dot,
  title,
  body,
  preview,
  reverse,
}: FeatureBlockProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-slate-200 last:border-b-0">
    <div
      className={`flex flex-col justify-center p-7 sm:p-10 lg:p-12 border-b lg:border-b-0 border-slate-200 ${reverse ? "lg:order-2 lg:border-l" : "lg:border-r"}`}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2.5 h-2.5 rounded-sm" style={{ background: dot }} />
        <span className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.15em]">
          {label}
        </span>
      </div>
      <h3 className="text-[22px] sm:text-[26px] font-black text-slate-900 leading-tight tracking-tight mb-4">
        {title}
      </h3>
      <p className="text-[15px] text-slate-700 leading-relaxed max-w-md">
        {body}
      </p>
    </div>
    <div
      className="flex items-center justify-center p-5 lg:p-8 lg:min-h-115"
      style={{
        background: "#f8f7f4",
        backgroundImage: "radial-gradient(#cbd5e1 0.8px, transparent 0.8px)",
        backgroundSize: "24px 24px",
      }}
    >
      {preview}
    </div>
  </div>
);

// ── Icon ──────────────────────────────────────────────────────────────────────

const PageIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 28 28"
    fill="none"
    stroke="#64748b"
    strokeWidth="1.2"
    aria-hidden="true"
  >
    <rect x="4" y="6" width="20" height="16" rx="2" />
    <path d="M8 17l4-4 3 3 5-6" />
  </svg>
);

// ── Hero card: planned against actual, week 18 ───────────────────────────────

const PROGRESS: {
  item: string;
  verified?: boolean;
  tone: keyof typeof CHIP;
  status: string;
  planned: number;
  actual: number;
  color: string;
}[] = [
  {
    item: "Concrete pours",
    tone: "a",
    status: "8 percent behind",
    planned: 80,
    actual: 72,
    color: "#f59e0b",
  },
  {
    item: "Block laying",
    tone: "r",
    status: "15 percent behind",
    planned: 60,
    actual: 45,
    color: "#ef4444",
  },
  {
    item: "Steel fixing",
    verified: true,
    tone: "g",
    status: "4 percent ahead",
    planned: 55,
    actual: 59,
    color: "#10b981",
  },
];

const HeroCard = () => (
  <Card>
    <CardHead
      title="Planned vs Actual, Week 18"
      sub="Block A superstructure, measured 22 Sep, verified 23 Sep"
      right={<Chip tone="s">3 items</Chip>}
    />
    <div className="px-4.5 py-4 space-y-4.5">
      {PROGRESS.map((p) => (
        <div key={p.item}>
          <div className="flex items-center justify-between gap-3 mb-2 text-[13px]">
            <span className="font-bold text-slate-900">
              {p.item}
              {p.verified && (
                <span className="ml-1.5 text-[11px] text-emerald-700">
                  Verified
                </span>
              )}
            </span>
            <Chip tone={p.tone}>{p.status}</Chip>
          </div>
          <div className="grid grid-cols-[60px_minmax(0,1fr)_44px] gap-2.5 items-center text-[11px] text-slate-500">
            <span>Planned</span>
            <Bar pct={p.planned} color="#cbd5e1" />
            <span className="font-mono">{p.planned}%</span>
            <span>Actual</span>
            <Bar pct={p.actual} color={p.color} />
            <span className="font-mono">{p.actual}%</span>
          </div>
        </div>
      ))}
    </div>
  </Card>
);

// ── Preview 1: Measurement ────────────────────────────────────────────────────

const MeasurementPreview = () => (
  <Card className="max-w-130">
    <CardHead
      title={
        <>
          <span className="font-mono">1.1.2</span>{" "}
          <M>Excavate exceeding 1.5 m, not exceeding 3.0 m</M>
        </>
      }
      sub="Week 18, 15 to 21 Sep, entered by K. Otieno, Site Agent"
      right={<Chip tone="a">In progress</Chip>}
    />
    <div className="px-4.5 py-4">
      <KV k="Measured this period" v="134.24 m3" />
      <KV k="Cumulative" v="223.24 of 360 m3" />
      <KV k="Contract rate" v="KES 1,100" />
      <KV
        k="Earned this period"
        v={<span className="text-emerald-700">KES 147,664</span>}
      />
      <KV k="Progress" v="62%" />
    </div>
  </Card>
);

// ── Preview 2: Verification ───────────────────────────────────────────────────

const VerificationPreview = () => (
  <Card className="max-w-130">
    <CardHead
      title={
        <>
          <span className="font-mono">1.1.2</span>{" "}
          <M>Excavate exceeding 1.5 m</M>
        </>
      }
      sub="Week 18"
      right={<Chip tone="g">Verified, locked</Chip>}
    />
    <div className="px-4.5 py-4">
      <KV k="Measured" v="134.24 m3" />
      <KV k="Verified by" v="A. Mwangi, QS" text />
      <KV k="Verified at" v="15 Sep, 11:48" />
      <KV
        k="Note"
        v={
          <span className="font-normal text-slate-700">
            Re-measured with the RE on site
          </span>
        }
        text
      />
      <div className="mt-3.5 flex items-center gap-2 text-[12px] text-slate-500">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#64748b"
          strokeWidth="2"
          aria-hidden="true"
        >
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
        Cannot be deleted while verified
      </div>
    </div>
  </Card>
);

// ── Preview 3: Budget against actual ──────────────────────────────────────────

const BILLS: {
  bill: string;
  budget: string;
  actual: string;
  variance: string;
  cpi: string;
  over?: boolean;
  under?: boolean;
}[] = [
  {
    bill: "Bill 1, Earthworks",
    budget: "48.2M",
    actual: "41.6M",
    variance: "+6.6M",
    cpi: "1.08",
    under: true,
  },
  {
    bill: "Bill 2, Pavement",
    budget: "122.9M",
    actual: "118.4M",
    variance: "+4.5M",
    cpi: "1.02",
    under: true,
  },
  {
    bill: "Bill 4, Structures",
    budget: "96.4M",
    actual: "104.1M",
    variance: "7.7M over",
    cpi: "0.93",
    over: true,
  },
  {
    bill: "Bill 7, Slope protection",
    budget: "18.0M",
    actual: "6.1M",
    variance: "not started",
    cpi: "n/a",
  },
];

const BudgetPreview = () => (
  <Card className="max-w-140">
    <div className="overflow-x-auto">
      <table className={TABLE}>
        <thead>
          <tr>
            <th className={TH}>Bill</th>
            <th className={`${TH} text-right`}>Budget</th>
            <th className={`${TH} text-right`}>Actual</th>
            <th className={`${TH} text-right`}>Variance</th>
            <th className={`${TH} text-right`}>CPI</th>
          </tr>
        </thead>
        <tbody>
          {BILLS.map((b) => (
            <tr key={b.bill}>
              <td className={`${TD} font-bold text-slate-900`}>
                <M>{b.bill}</M>
              </td>
              <td className={`${TD} text-right font-mono`}>{b.budget}</td>
              <td className={`${TD} text-right font-mono`}>{b.actual}</td>
              <td
                className={`${TD} text-right font-mono whitespace-nowrap ${b.over ? "text-red-700" : b.under ? "text-emerald-700" : ""}`}
              >
                {b.variance}
              </td>
              <td
                className={`${TD} text-right font-mono ${b.over ? "text-red-700" : ""}`}
              >
                {b.cpi}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);

// ── Preview 4: Site conditions ────────────────────────────────────────────────

const ConditionsPreview = () => (
  <Card className="max-w-130">
    <CardHead title="Week 18 conditions" sub="Entered with the measurement" />
    <div className="px-4.5 py-4">
      <p className="mb-3 rounded-lg border border-amber-200 bg-amber-50 px-3.5 py-3 text-[14px] leading-relaxed text-slate-700">
        <M>
          Heavy rains days 3 to 4, compaction delayed. Access road impassable
          Thursday morning.
        </M>
      </p>
      <KV k="Working days lost" v="1.5" />
      <KV
        k="Linked programme task"
        v={<M>2.1 Substructure, progress 62%</M>}
        text
      />
    </div>
  </Card>
);

// ── Before / After ────────────────────────────────────────────────────────────

const BeforeAfter = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 border border-slate-200 rounded-2xl overflow-hidden">
    <div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-slate-200 bg-white">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2.5 h-2.5 rounded-sm bg-red-500" />
        <span className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.15em]">
          Today
        </span>
      </div>
      <ul>
        <li className="py-2.75 border-t border-slate-100 text-[15px] text-slate-700 leading-normal">
          The foreman sends photos on WhatsApp
        </li>
        <li className="py-2.75 border-t border-slate-100 text-[15px] text-slate-700 leading-normal">
          The QS re-types quantities into Excel
        </li>
        <li className="py-2.75 border-t border-slate-100 text-[15px] text-slate-700 leading-normal">
          Last week&apos;s cumulative is in another file
        </li>
        <li className="py-2.75 border-t border-slate-100 text-[15px] text-slate-700 leading-normal">
          Nobody signs the number off before it is billed
        </li>
      </ul>
    </div>
    <div className="p-6 sm:p-8" style={{ background: "#f8f7f4" }}>
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
        <span className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.15em]">
          With Lobocon
        </span>
      </div>
      <ul>
        <li className="py-2.75 border-t border-slate-100 text-[15px] text-slate-700 leading-normal">
          The site engineer enters the measured quantity per BOQ item for the week
        </li>
        <li className="py-2.75 border-t border-slate-100 text-[15px] text-slate-700 leading-normal">
          Cumulative, earned value and percent complete are derived, not typed
        </li>
        <li className="py-2.75 border-t border-slate-100 text-[15px] text-slate-700 leading-normal">
          The PM or QS verifies and the entry locks
        </li>
        <li className="py-2.75 border-t border-slate-100 text-[15px] text-slate-700 leading-normal">
          The weekly report is a rollup, not a rewrite
        </li>
      </ul>
    </div>
  </div>
);

// ── FAQ ───────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "How often do we measure?",
    a: "Weekly by default. Biweekly, monthly and custom periods are supported, one entry per item per period.",
  },
  {
    q: "Can a measurement exceed the contract quantity?",
    a: "No. The entry is rejected. Variations are handled in the BOQ, not by over-measuring.",
  },
  {
    q: "Who can verify an entry?",
    a: "A PM or QS with edit rights on the BOQ. Verified entries are locked until the PM removes the verification.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PlannedVsActualPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-100">
        <Navbar />

        {/* ── Hero ── */}
        <section className="w-full px-5 md:px-10 lg:px-16 pt-16 pb-0">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center pb-12 lg:pb-20">
              <div>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                  className="inline-flex items-center gap-2 mb-5"
                >
                  <PageIcon />
                  <span className="text-[11px] font-bold tracking-[0.2em] text-slate-900 uppercase">
                    Planned vs Actual
                  </span>
                </motion.div>
                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.08}
                  className="text-[38px] sm:text-[48px] lg:text-[58px] font-black text-slate-900 tracking-[-0.025em] leading-[1.03] mb-6"
                >
                  Planned 80 percent. Actual 72 percent.{" "}
                  <span className="text-slate-500">Know it on Monday, not at month end.</span>
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.16}
                  className="text-[17px] text-slate-700 leading-relaxed mb-10 max-w-lg"
                >
                  Site measures quantities against every BOQ item each week. Lobocon turns the measurement into earned value, progress and variance on the spot, ties it to the linked programme task, and locks the entry once the PM or QS verifies it for billing.
                </motion.p>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.22}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
                >
                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-8 py-3.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/20 text-sm"
                  >
                    Message us on WhatsApp
                  </a>
                  <Link
                    href="/session"
                    className="flex items-center justify-center px-8 py-3.5 rounded-full border border-slate-200 text-slate-900 font-semibold hover:bg-slate-50 transition-colors text-sm"
                  >
                    Book a working session
                  </Link>
                </motion.div>
              </div>

              {/* Hero panel */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={0.2}
                className="relative overflow-hidden rounded-2xl border border-slate-200 p-5 sm:p-10"
                style={{ background: "#f8f7f4" }}
              >
                <HeroCard />
              </motion.div>
            </div>
          </div>
        </section>

        <Hatch />

        {/* ── Problem / Solution ── */}
        <section className="w-full px-5 md:px-10 lg:px-16 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel>The problem</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] font-black text-slate-900 tracking-[-0.02em] leading-[1.03] max-w-3xl mb-4">
                The weekly report is built{" "}
                <span className="text-slate-500">from memory on Friday.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[16px] text-slate-700 max-w-lg mb-10">It is not the site&apos;s fault. It is what a spreadsheet forces a site into.</p>
            </Reveal>
            <Reveal delay={0.15}>
              <BeforeAfter />
            </Reveal>
          </div>
        </section>

        <Hatch />

        {/* ── Features ── */}
        <section className="w-full px-5 md:px-10 lg:px-16 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel>What it does</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] font-black text-slate-900 tracking-[-0.02em] leading-[1.03] max-w-3xl mb-4">
                Measure once.{" "}
                <span className="text-slate-500">Everything updates.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[16px] text-slate-700 max-w-lg mb-10">Four things the module does with one number from site.</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <FeatureBlock
                  label="Measurement"
                  dot="#10b981"
                  title="Measure once, everything updates"
                  body="Enter the quantity done this week against a BOQ item. Lobocon derives the cumulative quantity, this period's earned value, cumulative earned value and percent complete, and writes them back to the item. Contract quantity and rate are snapshotted on the entry, so history stays right even if the BOQ changes later."
                  preview={<MeasurementPreview />}
                />
                <FeatureBlock
                  label="Verification"
                  dot="#3b82f6"
                  title="Verified before it is billed"
                  body="A measurement is a claim until the PM or QS verifies it. Verified entries lock, cannot be deleted, and carry the verifier's name, time and note. That is what goes into the interim certificate."
                  preview={<VerificationPreview />}
                  reverse
                />
                <FeatureBlock
                  label="Budget against actual"
                  dot="#f59e0b"
                  title="Budget against actual at every level"
                  body="Bill, section and item: budget, actual cost, variance, earned value and CPI, rolled up with progress weighted by value. Where a BOQ item is linked to a programme task, the task's recorded progress is used."
                  preview={<BudgetPreview />}
                />
                <FeatureBlock
                  label="Site conditions"
                  dot="#ef4444"
                  title="The reason travels with the number"
                  body="Every period carries site notes and site conditions. Heavy rain on days three and four is recorded against the week it slowed, not remembered at the claims meeting."
                  preview={<ConditionsPreview />}
                  reverse
                />
              </div>
            </Reveal>
          </div>
        </section>

        <Hatch />

        {/* ── FAQ ── */}
        <section className="w-full px-5 md:px-10 lg:px-16 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] gap-8 lg:gap-16">
            <Reveal>
              <SectionLabel>Questions</SectionLabel>
              <h2 className="text-[30px] sm:text-[40px] font-black text-slate-900 tracking-[-0.02em] leading-[1.03]">
                Before you message.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border-b border-slate-200">
                {FAQS.map((f) => (
                  <div key={f.q} className="py-5.5 border-t border-slate-200">
                    <h3 className="mb-1.5 text-[17px] font-bold text-slate-900">
                      {f.q}
                    </h3>
                    <p className="text-[15px] text-slate-700 leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
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
                    tag="Blog"
                    title="How to Track Variation Orders and Protect Your Margin"
                    href="/blog/variation-orders-margin"
                  />
                  <RelatedCard
                    tag="Blog"
                    title="Earned Value Management for Construction PMs: A Practical Guide"
                    href="/blog/earned-value-management-construction"
                  />
                  <RelatedCard
                    tag="Tutorial"
                    title="Migrating Your BOQ from Excel to Lobocon in Under an Hour"
                    href="/blog/boq-excel-to-lobocon"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <Hatch />


        {/* ── Final CTA ── */}
        <section
          className="relative overflow-hidden border-t text-center"
          style={{ background: "#f5f0e8", borderColor: "#e5e0d6" }}
        >
          <svg
            className="hidden lg:block absolute left-0 top-0 bottom-0 h-full w-80 pointer-events-none select-none"
            style={{ opacity: 0.55 }}
            viewBox="0 0 280 520"
            fill="none"
            preserveAspectRatio="xMaxYMid meet"
            aria-hidden="true"
          >
            <polygon
              points="140,60 240,110 140,160 40,110"
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
          <div className="relative z-10 flex flex-col items-center px-5 sm:px-8 py-16 lg:py-28 max-w-3xl mx-auto">
            <Reveal>
              <h2 className="text-[36px] sm:text-[48px] lg:text-[50px] font-black text-slate-900 leading-[1.05] tracking-[-0.025em] mb-4">
                Stop finding out at month end.{" "}
                <span className="text-slate-500">Know on Monday.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[16px] text-slate-700 leading-relaxed mb-9 max-w-md">
                Message us with how many projects you are running. You get a
                reply the same working day.
              </p>
            </Reveal>
            <Reveal delay={0.18} className="w-full sm:w-auto">
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white text-[14px] font-bold px-8.5 py-4 rounded-xl transition-colors"
              >
                Message us on WhatsApp
              </a>
            </Reveal>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
