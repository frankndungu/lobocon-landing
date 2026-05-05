"use client";

import Link from "next/link";
import Navbar from "@/components/landing-page/home/navbar";
import Footer from "@/components/landing-page/home/footer";
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
    <span className="text-slate-900">Cash Flow</span>
  </nav>
);

const StatCard = ({ num, label }: { num: string; label: string }) => (
  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left">
    <p className="text-[26px] font-black text-slate-900 font-mono tracking-tight leading-none mb-2">
      {num}
    </p>
    <p className="text-[12px] font-semibold text-slate-700 leading-snug">
      {label}
    </p>
  </div>
);

const FAQItem = ({ q, a }: { q: string; a: string }) => (
  <details className="group border-b border-slate-200 last:border-b-0">
    <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none">
      <span className="text-[15px] font-semibold text-slate-900">{q}</span>
      <svg
        className="w-4 h-4 text-slate-600 shrink-0 transition-transform group-open:rotate-45"
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
    <p className="pb-5 text-[14px] text-slate-700 leading-relaxed max-w-2xl">
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

const IcoCashFlow = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    style={{ width: 28, height: 28, flexShrink: 0 }}
  >
    <polygon
      points="16,10 28,15 16,20 4,15"
      fill="#dcfce7"
      stroke="#16a34a"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="4,15 16,20 16,25 4,20"
      fill="#f0fdf4"
      stroke="#16a34a"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="28,15 16,20 16,25 28,20"
      fill="#bbf7d0"
      stroke="#16a34a"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="16,4 21,7 16,10 11,7"
      fill="#86efac"
      stroke="#16a34a"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="11,7 16,10 16,13 11,10"
      fill="#dcfce7"
      stroke="#16a34a"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="21,7 16,10 16,13 21,10"
      fill="#bbf7d0"
      stroke="#16a34a"
      strokeWidth="1.1"
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
        id="cf-iso-dots"
        x="0"
        y="0"
        width="24"
        height="24"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="12" cy="12" r="0.8" fill="#cbd5e1" opacity="0.4" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#cf-iso-dots)" />
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

// ── Browser frame ─────────────────────────────────────────────────────────────

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
      <span className="flex-1 text-center text-[10px] text-slate-600 font-mono truncate">
        {url}
      </span>
    </div>
    {children}
  </div>
);

// ── Live previews ─────────────────────────────────────────────────────────────

// Preview 1: Cash flow snapshot metrics + alert
const SnapshotMetricsPreview = () => (
  <BrowserFrame url="app.lobocon.co/projects/primark/cash-flow">
    {/* Alert banner */}
    <div className="flex items-center gap-2 px-4 py-2.5 bg-amber-50 border-b border-amber-200">
      <span className="text-amber-600 font-bold text-[11px] shrink-0">
        Warning
      </span>
      <p className="text-[10px] text-amber-700 font-medium">
        Overdue invoices of <span className="font-black">KES 850,000</span> —
        chase payment from client before end of month.
      </p>
    </div>

    {/* Project header */}
    <div className="px-4 pt-2.5 pb-2 border-b border-slate-100 flex items-center justify-between gap-3">
      <div>
        <p className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">
          Cash Flow
        </p>
        <h3 className="text-[13px] font-black text-slate-900">
          Primark Apartments
        </h3>
        <p className="text-[8px] text-slate-600">Last snapshot: 13 Feb 2026</p>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-[8px] font-semibold text-slate-700">
          1 Feb – 28 Feb 2026
        </span>
        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[8px] font-bold rounded border border-emerald-100">
          Healthy
        </span>
      </div>
    </div>

    {/* 4 metric cards */}
    <div className="grid grid-cols-4 divide-x divide-slate-100 border-b border-slate-100">
      {[
        {
          label: "Cash Position",
          val: "KES 4.2M",
          cls: "text-emerald-600",
          sub: "closing balance",
        },
        {
          label: "Net Cash Flow",
          val: "KES 1.8M",
          cls: "text-emerald-600",
          sub: "this period",
        },
        {
          label: "Outstanding",
          val: "KES 2.1M",
          cls: "text-blue-600",
          sub: "KES 850K overdue",
        },
        {
          label: "Cash Runway",
          val: "47 days",
          cls: "text-slate-900",
          sub: "at KES 89K/day burn",
        },
      ].map((m) => (
        <div key={m.label} className="px-3 py-3 bg-white">
          <p className="text-[8px] font-black text-slate-600 uppercase tracking-wider mb-1">
            {m.label}
          </p>
          <p className={`text-[12px] font-black font-mono ${m.cls}`}>{m.val}</p>
          <p className="text-[8px] text-slate-600 mt-0.5">{m.sub}</p>
        </div>
      ))}
    </div>

    {/* Cash in / out detail — two columns */}
    <div className="grid grid-cols-2 divide-x divide-slate-100">
      <div className="p-3">
        <p className="text-[8px] font-black text-slate-600 uppercase tracking-widest mb-2">
          Cash In
        </p>
        {[
          {
            label: "Total Cash In (Cumulative)",
            val: "KES 18,500,000",
            cls: "text-emerald-600",
          },
          {
            label: "Cash In This Period",
            val: "KES 3,200,000",
            cls: "text-emerald-600",
          },
          {
            label: "Work Billed",
            val: "KES 20,600,000",
            cls: "text-slate-800",
          },
          {
            label: "Work Earned (EV)",
            val: "KES 19,200,000",
            cls: "text-blue-600",
          },
          {
            label: "Outstanding Invoices",
            val: "KES 2,100,000",
            cls: "text-blue-600",
          },
          {
            label: "Overdue Invoices",
            val: "KES 850,000",
            cls: "text-red-600",
          },
        ].map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between py-0.5 border-b border-slate-50 last:border-b-0"
          >
            <span className="text-[9px] text-slate-700">{r.label}</span>
            <span className={`text-[9px] font-black font-mono ${r.cls}`}>
              {r.val}
            </span>
          </div>
        ))}
      </div>
      <div className="p-3">
        <p className="text-[8px] font-black text-slate-600 uppercase tracking-widest mb-2">
          Cash Out
        </p>
        {[
          {
            label: "Total Cash Out (Cumulative)",
            val: "KES 14,300,000",
            cls: "text-red-600",
          },
          {
            label: "Cash Out This Period",
            val: "KES 1,400,000",
            cls: "text-red-600",
          },
          {
            label: "Burn Rate (Daily)",
            val: "KES 89,286",
            cls: "text-slate-800",
          },
        ].map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between py-0.5 border-b border-slate-50"
          >
            <span className="text-[9px] text-slate-700">{r.label}</span>
            <span className={`text-[9px] font-black font-mono ${r.cls}`}>
              {r.val}
            </span>
          </div>
        ))}
        <p className="text-[8px] font-black text-slate-600 uppercase tracking-widest mt-2 mb-1.5">
          Cash Position
        </p>
        {[
          {
            label: "Opening Balance",
            val: "KES 2,400,000",
            cls: "text-slate-800",
          },
          {
            label: "Closing Balance",
            val: "KES 4,200,000",
            cls: "text-emerald-600",
          },
          {
            label: "Projected Balance",
            val: "KES 6,300,000",
            cls: "text-blue-600",
          },
        ].map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between py-0.5 border-b border-slate-50 last:border-b-0"
          >
            <span className="text-[9px] text-slate-700">{r.label}</span>
            <span className={`text-[9px] font-black font-mono ${r.cls}`}>
              {r.val}
            </span>
          </div>
        ))}
      </div>
    </div>
  </BrowserFrame>
);

// Preview 2: 90-day forecast + key metrics
const ForecastPreview = () => (
  <BrowserFrame url="app.lobocon.co/projects/primark/cash-flow">
    <div className="grid grid-cols-2 divide-x divide-slate-100">
      {/* Left: key metrics */}
      <div className="p-4">
        <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-3">
          Key Metrics
        </p>
        <div className="space-y-0">
          {[
            {
              label: "Collection Ratio",
              val: "89.8%",
              cls: "text-emerald-600",
            },
            {
              label: "Billing Efficiency",
              val: "107.3%",
              cls: "text-blue-600",
            },
            {
              label: "Billing Gap (EV-Billed)",
              val: "-KES 1,400,000",
              cls: "text-amber-600",
            },
            {
              label: "Collection Gap",
              val: "KES 2,100,000",
              cls: "text-amber-600",
            },
            {
              label: "Cash Conversion Days",
              val: "23 days",
              cls: "text-slate-900",
            },
            {
              label: "Burn Rate (Daily)",
              val: "KES 89,286",
              cls: "text-slate-900",
            },
          ].map((r) => (
            <div
              key={r.label}
              className="flex items-center justify-between py-1.5 border-b border-slate-50 last:border-b-0"
            >
              <span className="text-[10px] text-slate-700">{r.label}</span>
              <span className={`text-[10px] font-black font-mono ${r.cls}`}>
                {r.val}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: 90-day forecast bars + billing gap */}
      <div className="p-4">
        <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-3">
          90-Day Forecast
        </p>
        <div className="flex items-end gap-1 h-16 mb-1">
          {[
            { h: "90%", cls: "bg-emerald-200" },
            { h: "80%", cls: "bg-emerald-200" },
            { h: "71%", cls: "bg-emerald-200" },
            { h: "62%", cls: "bg-amber-200" },
            { h: "53%", cls: "bg-amber-200" },
            { h: "44%", cls: "bg-amber-200" },
            { h: "35%", cls: "bg-red-200" },
            { h: "25%", cls: "bg-red-200" },
            { h: "15%", cls: "bg-red-200" },
          ].map((b, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t ${b.cls}`}
              style={{ height: b.h }}
            />
          ))}
        </div>
        <div className="flex justify-between text-[8px] text-slate-600 mb-2">
          <span>Feb 26</span>
          <span>Mar 26</span>
          <span>Apr 26</span>
          <span>May 26</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-2 bg-amber-50 border border-amber-100 rounded-lg mb-3">
          <span className="text-[9px] text-amber-700 font-semibold">
            Cash runs out in <strong>47 days</strong> — collect outstanding
            invoices.
          </span>
        </div>

        <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-2">
          Billing Gap
        </p>
        {[
          {
            label: "Work Earned (EV)",
            val: "KES 19.2M",
            pct: 93,
            cls: "bg-blue-400",
          },
          {
            label: "Work Billed",
            val: "KES 20.6M",
            pct: 100,
            cls: "bg-blue-600",
          },
          {
            label: "Cash Received",
            val: "KES 18.5M",
            pct: 90,
            cls: "bg-emerald-500",
          },
        ].map((r) => (
          <div key={r.label} className="mb-1.5">
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[9px] text-slate-700">{r.label}</span>
              <span className="text-[9px] font-black font-mono text-slate-900">
                {r.val}
              </span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${r.cls}`}
                style={{ width: `${r.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </BrowserFrame>
);

// Preview 3: Snapshot history table
const HistoryPreview = () => (
  <BrowserFrame url="app.lobocon.co/projects/primark/cash-flow">
    <div className="px-4 pt-3 pb-2 border-b border-slate-100 flex items-center justify-between">
      <div>
        <p className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">
          Snapshot History
        </p>
        <h3 className="text-[12px] font-black text-slate-900">
          Primark Apartments
        </h3>
      </div>
      <span className="text-[8px] text-slate-600">Last 30 snapshots</span>
    </div>

    {/* Header row */}
    <div
      className="grid px-4 py-1.5 bg-slate-50 border-b border-slate-100"
      style={{ gridTemplateColumns: "100px 60px 110px 110px 90px 70px" }}
    >
      {["Date", "Type", "Net Flow", "Closing Bal", "Outstanding", "Health"].map(
        (h) => (
          <span
            key={h}
            className="text-[8px] font-black text-slate-600 uppercase tracking-wider"
          >
            {h}
          </span>
        ),
      )}
    </div>

    {[
      {
        date: "13 Feb 2026",
        type: "Manual",
        flow: "+KES 1,800,000",
        flowCls: "text-emerald-600",
        bal: "KES 4,200,000",
        outstanding: "KES 2,100,000",
        health: "Healthy",
        hCls: "bg-emerald-50 text-emerald-700 border-emerald-100",
      },
      {
        date: "31 Jan 2026",
        type: "Monthly",
        flow: "+KES 2,100,000",
        flowCls: "text-emerald-600",
        bal: "KES 2,400,000",
        outstanding: "KES 3,050,000",
        health: "Healthy",
        hCls: "bg-emerald-50 text-emerald-700 border-emerald-100",
      },
      {
        date: "15 Jan 2026",
        type: "Manual",
        flow: "-KES 400,000",
        flowCls: "text-red-600",
        bal: "KES 300,000",
        outstanding: "KES 4,200,000",
        health: "Warning",
        hCls: "bg-amber-50 text-amber-700 border-amber-100",
      },
    ].map((r) => (
      <div
        key={r.date}
        className="grid px-4 py-2.5 border-b border-slate-50 last:border-b-0 hover:bg-slate-50"
        style={{ gridTemplateColumns: "100px 60px 110px 110px 90px 70px" }}
      >
        <span className="text-[9px] font-mono text-slate-800">{r.date}</span>
        <span className="text-[9px] font-semibold text-slate-700">
          {r.type}
        </span>
        <span className={`text-[9px] font-black font-mono ${r.flowCls}`}>
          {r.flow}
        </span>
        <span className="text-[9px] font-mono text-slate-800">{r.bal}</span>
        <span className="text-[9px] font-mono text-blue-600">
          {r.outstanding}
        </span>
        <span
          className={`px-1.5 py-0.5 text-[8px] font-bold rounded border self-center ${r.hCls}`}
        >
          {r.health}
        </span>
      </div>
    ))}
  </BrowserFrame>
);

// Preview 4: Client payments
const ClientPaymentsPreview = () => (
  <BrowserFrame url="app.lobocon.co/projects/primark/client-payments">
    <div className="px-4 pt-3 pb-2 border-b border-slate-100 flex items-center justify-between gap-3">
      <div>
        <p className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">
          Client Payments
        </p>
        <h3 className="text-[13px] font-black text-slate-900">
          Primark Apartments
        </h3>
      </div>
      <button className="px-2.5 py-1 bg-slate-900 text-white text-[9px] font-bold rounded-lg">
        Add Invoice
      </button>
    </div>

    {/* 5 metric tiles */}
    <div className="grid grid-cols-5 divide-x divide-slate-100 border-b border-slate-100">
      {[
        { label: "Total Billed", val: "KES 20.6M", cls: "text-slate-900" },
        { label: "Cash Received", val: "KES 18.5M", cls: "text-emerald-600" },
        { label: "Outstanding", val: "KES 2.1M", cls: "text-blue-600" },
        { label: "Overdue", val: "KES 850K", cls: "text-red-600" },
        { label: "Retention Held", val: "KES 1.03M", cls: "text-amber-600" },
      ].map((m) => (
        <div key={m.label} className="px-2.5 py-2.5 bg-white text-center">
          <p className="text-[7px] font-black text-slate-600 uppercase tracking-wider mb-0.5">
            {m.label}
          </p>
          <p className={`text-[10px] font-black font-mono ${m.cls}`}>{m.val}</p>
        </div>
      ))}
    </div>

    {/* Invoice rows */}
    <div className="px-4 py-1.5 bg-slate-50 border-b border-slate-100">
      <div
        className="grid"
        style={{ gridTemplateColumns: "70px 1fr 90px 90px 60px" }}
      >
        {["Ref", "Description", "Amount", "Received", "Status"].map((h) => (
          <span
            key={h}
            className="text-[8px] font-black text-slate-600 uppercase tracking-wider"
          >
            {h}
          </span>
        ))}
      </div>
    </div>
    {[
      {
        ref: "INV-007",
        desc: "Progress payment — Jan 2026",
        amt: "KES 3,200,000",
        received: "KES 3,200,000",
        status: "Received",
        sCls: "bg-emerald-50 text-emerald-700 border-emerald-100",
      },
      {
        ref: "INV-006",
        desc: "Progress payment — Dec 2025",
        amt: "KES 2,800,000",
        received: "KES 1,950,000",
        status: "Partial",
        sCls: "bg-blue-50 text-blue-700 border-blue-100",
      },
      {
        ref: "INV-005",
        desc: "Variation order — VO-001",
        amt: "KES 420,000",
        received: "KES 0",
        status: "Overdue",
        sCls: "bg-red-50 text-red-600 border-red-100",
      },
      {
        ref: "INV-004",
        desc: "Progress payment — Nov 2025",
        amt: "KES 2,100,000",
        received: "KES 2,100,000",
        status: "Received",
        sCls: "bg-emerald-50 text-emerald-700 border-emerald-100",
      },
    ].map((r) => (
      <div
        key={r.ref}
        className="grid px-4 py-2 border-b border-slate-50 last:border-b-0 hover:bg-slate-50"
        style={{ gridTemplateColumns: "70px 1fr 90px 90px 60px" }}
      >
        <span className="text-[9px] font-black font-mono text-slate-700">
          {r.ref}
        </span>
        <span className="text-[9px] text-slate-800 pr-2">{r.desc}</span>
        <span className="text-[9px] font-black font-mono text-slate-900">
          {r.amt}
        </span>
        <span className="text-[9px] font-black font-mono text-emerald-600">
          {r.received}
        </span>
        <span
          className={`px-1.5 py-0.5 text-[8px] font-bold rounded border self-center ${r.sCls}`}
        >
          {r.status}
        </span>
      </div>
    ))}

    {/* Retention */}
    <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
      <span className="text-[9px] font-bold text-slate-700">
        Total Retention Held
      </span>
      <span className="text-[10px] font-black font-mono text-amber-600">
        KES 1,030,000
      </span>
    </div>
  </BrowserFrame>
);

// ── Feature block ─────────────────────────────────────────────────────────────

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
      <p className="text-[15px] text-slate-700 leading-relaxed max-w-md">
        {body}
      </p>
    </div>
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
      <IsoEmerald
        style={{ right: "3%", top: "3%", width: "28px", position: "absolute" }}
        opacity={0.2}
      />
      <IsoGhost
        style={{
          left: "2%",
          bottom: "4%",
          width: "24px",
          position: "absolute",
          opacity: 0.15,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center p-5">
        <div className="w-full" style={{ maxWidth: "600px" }}>
          {preview}
        </div>
      </div>
    </div>
  </div>
);

// ── Hero mockup ───────────────────────────────────────────────────────────────

const HeroMockup = () => (
  <div className="float-card w-full" style={{ maxWidth: "520px", opacity: 1 }}>
    <div className="px-4 pt-2.5 pb-2 border-b border-slate-100 flex items-center justify-between gap-3">
      <div>
        <p className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">
          Cash Flow
        </p>
        <h3 className="text-[13px] font-black text-slate-900">
          Primark Apartments
        </h3>
        <p className="text-[8px] text-slate-600">
          Snapshot 13 Feb 2026 · Period 1 Feb – 28 Feb 2026
        </p>
      </div>
      <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[8px] font-bold rounded border border-emerald-100">
        Healthy
      </span>
    </div>
    <div className="grid grid-cols-4 divide-x divide-slate-100 border-b border-slate-100">
      {[
        { label: "Cash Position", val: "KES 4.2M", cls: "text-emerald-600" },
        { label: "Net Flow", val: "KES 1.8M", cls: "text-emerald-600" },
        { label: "Outstanding", val: "KES 2.1M", cls: "text-blue-600" },
        { label: "Runway", val: "47 days", cls: "text-slate-900" },
      ].map((m) => (
        <div key={m.label} className="px-2.5 py-2.5 bg-white text-center">
          <p className="text-[7px] font-black text-slate-600 uppercase tracking-wider mb-0.5">
            {m.label}
          </p>
          <p className={`text-[11px] font-black font-mono ${m.cls}`}>{m.val}</p>
        </div>
      ))}
    </div>
    <div className="p-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-[8px] font-black text-slate-600 uppercase tracking-widest mb-1.5">
            Cash In
          </p>
          {[
            { label: "Cumulative", val: "KES 18.5M", cls: "text-emerald-600" },
            { label: "This Period", val: "KES 3.2M", cls: "text-emerald-600" },
            { label: "Work Billed", val: "KES 20.6M", cls: "text-slate-800" },
          ].map((r) => (
            <div
              key={r.label}
              className="flex items-center justify-between py-0.5 border-b border-slate-50 last:border-b-0"
            >
              <span className="text-[9px] text-slate-700">{r.label}</span>
              <span className={`text-[9px] font-black font-mono ${r.cls}`}>
                {r.val}
              </span>
            </div>
          ))}
        </div>
        <div>
          <p className="text-[8px] font-black text-slate-600 uppercase tracking-widest mb-1.5">
            Cash Out
          </p>
          {[
            { label: "Cumulative", val: "KES 14.3M", cls: "text-red-600" },
            { label: "This Period", val: "KES 1.4M", cls: "text-red-600" },
            { label: "Closing Bal", val: "KES 4.2M", cls: "text-emerald-600" },
          ].map((r) => (
            <div
              key={r.label}
              className="flex items-center justify-between py-0.5 border-b border-slate-50 last:border-b-0"
            >
              <span className="text-[9px] text-slate-700">{r.label}</span>
              <span className={`text-[9px] font-black font-mono ${r.cls}`}>
                {r.val}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5 px-2.5 py-2 bg-amber-50 border border-amber-100 rounded-lg">
        <span className="text-[8px] font-semibold text-amber-700">
          Overdue invoices of{" "}
          <strong className="font-black">KES 850,000</strong> — chase payment
          before end of month.
        </span>
      </div>
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
          "You find out the site has run out of cash on a Friday when suppliers stop delivering.",
          "Cash flow forecasting means exporting invoices to Excel and doing the sums manually.",
          "Outstanding invoices live in someone's email. Nobody knows what is overdue until it causes a problem.",
          "The client asks about retention and you have to call the accounts office to find out.",
          "No visibility into whether billing is keeping up with work earned on site.",
        ].map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-[14px] text-slate-700 leading-relaxed"
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
          "Cash runway is always on screen. At 47 days you see the warning in time to collect.",
          "One click calculates a cash flow snapshot — cash in, cash out, opening and closing balance.",
          "Outstanding and overdue invoices are flagged automatically with a banner alert.",
          "Client payment history, retention held, and collection ratio in one view.",
          "Billing gap shows whether work earned is outpacing or lagging behind invoices raised.",
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

export default function CashFlowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is construction cash flow forecasting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Construction cash flow forecasting tracks the timing of cash coming in from client payments against cash going out for expenses, labor, and materials. It tells you how many days of runway you have and flags when outstanding invoices need to be chased before the site runs out of funds.",
                },
              },
              {
                "@type": "Question",
                name: "How does Lobocon calculate cash flow?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Lobocon builds cash flow from two sources: expenses logged against the project and client invoices raised. One click calculates a snapshot — opening balance, cash in, cash out, closing balance, and projected balance — for any period you choose.",
                },
              },
              {
                "@type": "Question",
                name: "What is cash runway?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cash runway is the number of days the project can continue at the current burn rate before the closing balance reaches zero. Lobocon calculates this automatically and alerts you when it drops below your warning threshold.",
                },
              },
              {
                "@type": "Question",
                name: "Is this built for construction firms in Kenya?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Lobocon is built in Kenya for construction firms in Kenya and East Africa. All values are in KES, payment methods include MPESA, bank transfer, cheque, and cash, and the invoice structure follows standard Kenyan construction practice.",
                },
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-100">
        <Navbar />

        {/* ── Hero ── */}
        <section className="w-full px-5 md:px-10 lg:px-16 pt-16 pb-0">
          <div className="max-w-7xlto">
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
                  <IcoCashFlow />
                  <span className="text-[11px] font-bold tracking-[0.2em] text-slate-900 uppercase">
                    Cash Flow
                  </span>
                </motion.div>
                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.08}
                  className="text-[38px] sm:text-[48px] lg:text-[58px] font-black text-slate-900 tracking-[-0.025em] leading-[1.03] mb-6"
                >
                  Never get caught short{" "}
                  <span className="text-slate-500">on site again.</span>
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.16}
                  className="text-[17px] text-slate-700 leading-relaxed mb-10 max-w-lg"
                >
                  Construction firms in Kenya lose margin because invoices are
                  not chased and cash gaps are not seen until it is too late.
                  Lobocon tracks every shilling in and out, flags overdue
                  payments, and tells you your runway before the problem
                  arrives.
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
                    num="47 days"
                    label="cash runway visible at all times — not discovered on a Friday"
                  />
                  <StatCard
                    num="89.8%"
                    label="collection ratio tracked automatically on Primark Apartments"
                  />
                  <StatCard
                    num="1 click"
                    label="to calculate a full cash flow snapshot for any period"
                  />
                </motion.div>
              </div>

              {/* Hero dark panel — emerald gradient */}
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
                      "linear-gradient(135deg,#064e3b 0%,#065f46 60%,#022c22 100%)",
                  }}
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 600 420"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <pattern
                      id="cf-hero-dp"
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
                        fill="#34d399"
                        opacity="0.15"
                      />
                    </pattern>
                    <rect width="600" height="420" fill="url(#cf-hero-dp)" />
                    <g opacity="0.14">
                      <polygon
                        points="80,140 200,80 320,140 200,200"
                        fill="#34d399"
                      />
                      <polygon
                        points="80,140 80,280 200,340 200,200"
                        fill="#10b981"
                      />
                      <polygon
                        points="320,140 320,280 200,340 200,200"
                        fill="#059669"
                      />
                    </g>
                  </svg>
                </div>
                <IsoEmerald
                  style={{
                    right: "8%",
                    top: "6%",
                    width: "40px",
                    position: "absolute",
                  }}
                  opacity={0.3}
                />
                <IsoGhost
                  style={{
                    left: "4%",
                    bottom: "12%",
                    width: "32px",
                    position: "absolute",
                    opacity: 0.2,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 pb-14">
                  <HeroMockup />
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-5 py-3 bg-emerald-950/50 border-t border-emerald-800/30">
                  <span className="text-[9px] font-bold text-emerald-300/60 uppercase tracking-widest shrink-0">
                    Customer Story
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-100/80 truncate">
                    How Maisha Construct avoided a KES 6M cash gap with 90-day
                    forecasting
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
                  <span className="text-[9px] font-bold tracking-[0.15em] text-slate-600 uppercase">
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
            <Reveal delay={0.06}>
              <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] font-black text-slate-900 tracking-[-0.02em] leading-[1.03] max-w-2xl mb-4">
                Cash gaps do not appear suddenly.{" "}
                <span className="text-slate-500">They build up quietly.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[16px] text-slate-700 max-w-lg mb-2">
                The warning signs are there weeks in advance — if you are
                looking at the right numbers.
              </p>
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
              <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] font-black text-slate-900 tracking-[-0.02em] leading-[1.03] max-w-2xl mb-12">
                See your cash position.{" "}
                <span className="text-slate-500">
                  Act before the gap opens.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <FeatureBlock
                  label="Cash flow snapshot"
                  accentDot="bg-emerald-600"
                  patternId="cf-feat-1"
                  icon={<IcoCashFlow />}
                  title="Cash in, cash out, and runway in one screen"
                  body="One click calculates a snapshot for any period — cumulative cash in, cash out, opening balance, closing balance, and projected balance. Overdue invoices are flagged with a banner alert before they become a cash gap. All values in KES, updated from your live expense and invoice data."
                  preview={<SnapshotMetricsPreview />}
                />
                <FeatureBlock
                  label="90-day forecast"
                  accentDot="bg-blue-600"
                  patternId="cf-feat-2"
                  icon={
                    <svg
                      viewBox="0 0 28 28"
                      fill="none"
                      style={{ width: 28, height: 28 }}
                    >
                      <rect
                        x="3"
                        y="3"
                        width="22"
                        height="22"
                        rx="2"
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth="1.2"
                      />
                      <line
                        x1="3"
                        y1="10"
                        x2="25"
                        y2="10"
                        stroke="#2563eb"
                        strokeWidth="1"
                        strokeDasharray="2 2"
                        opacity="0.4"
                      />
                      <polyline
                        points="5,22 9,18 13,14 17,11 21,8"
                        fill="none"
                        stroke="#059669"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <polyline
                        points="5,22 9,20 13,17 17,15 21,14"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeDasharray="2 2"
                      />
                    </svg>
                  }
                  title="Know 90 days out before the cash runs out"
                  body="The 90-day forecast projects your closing balance forward at the current burn rate. Green bars are healthy, amber bars are warning, red bars mean the cash runs out. At 47 days remaining you see the alert now — not when suppliers stop delivering on a Friday."
                  preview={<ForecastPreview />}
                  reverse
                />
                <FeatureBlock
                  label="Snapshot history"
                  accentDot="bg-teal-600"
                  patternId="cf-feat-3"
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
                        stroke="#0d9488"
                        strokeWidth="1.2"
                      />
                      <line
                        x1="9"
                        y1="10"
                        x2="19"
                        y2="10"
                        stroke="#0d9488"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="9"
                        y1="14"
                        x2="19"
                        y2="14"
                        stroke="#0d9488"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="9"
                        y1="18"
                        x2="14"
                        y2="18"
                        stroke="#0d9488"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  }
                  title="Every snapshot stored — monthly, weekly, or manual"
                  body="Cash flow snapshots are stored with date, type, net flow, closing balance, and outstanding invoices. You can see exactly when the project was healthy, when it went to warning, and what changed. Monthly snapshots for reporting, manual snapshots whenever something significant happens on site."
                  preview={<HistoryPreview />}
                />
                <FeatureBlock
                  label="Client payments"
                  accentDot="bg-amber-500"
                  patternId="cf-feat-4"
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
                  title="Invoices, retention, and collection in one place"
                  body="Track every client invoice — amount, received, outstanding, overdue, and retention held. Collection ratio and billing efficiency calculate automatically. MPESA, bank transfer, cheque, and cash payment methods supported. No more chasing the accounts office for retention figures."
                  preview={<ClientPaymentsPreview />}
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
                id="cf-test-dp"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="0.7" fill="#334155" opacity="0.6" />
              </pattern>
              <rect width="1200" height="400" fill="url(#cf-test-dp)" />
              <g opacity="0.1">
                <polygon points="80,80 160,40 240,80 160,120" fill="#34d399" />
                <polygon points="80,80 80,200 160,240 160,120" fill="#10b981" />
                <polygon
                  points="240,80 240,200 160,240 160,120"
                  fill="#059669"
                />
              </g>
            </svg>
          </div>
          <Reveal>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <p className="text-[11px] font-bold tracking-[0.2em] text-slate-500 uppercase mb-8">
                Customer Story
              </p>
              <blockquote className="text-[24px] sm:text-[28px] lg:text-[32px] font-black text-white leading-tight tracking-[-0.02em] mb-8">
                "We saw the cash gap coming 6 weeks out. We chased two invoices,
                got paid, and the site never stopped."
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-slate-500"
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
                    Fatuma Hassan
                  </p>
                  <p className="text-[11px] text-slate-500">
                    CEO, Maisha Construct
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <Hatch />

        {/* ── FAQ ── */}
        <section className="w-full px-5 md:px-10 lg:px-16 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <Reveal>
                <div>
                  <SectionLabel>Common questions</SectionLabel>
                  <h2 className="text-[28px] sm:text-[36px] font-black text-slate-900 tracking-[-0.02em] leading-tight max-w-sm">
                    What Kenya-based PMs{" "}
                    <span className="text-slate-500">ask us first.</span>
                  </h2>
                  <p className="mt-4 text-[15px] text-slate-700 leading-relaxed max-w-sm">
                    Email us at{" "}
                    <a
                      href="mailto:sales@lobocon.co"
                      className="text-slate-900 font-semibold hover:underline"
                    >
                      sales@lobocon.co
                    </a>{" "}
                    if your question is not here.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="border-t border-slate-200">
                  {[
                    {
                      q: "What is construction cash flow forecasting?",
                      a: "Construction cash flow forecasting tracks the timing of cash coming in from client payments against cash going out for expenses, labor, and materials. It tells you how many days of runway you have and flags when outstanding invoices need to be chased before the site runs out of funds.",
                    },
                    {
                      q: "How does Lobocon calculate cash flow?",
                      a: "Lobocon builds cash flow from two sources: expenses logged against the project and client invoices raised. One click calculates a snapshot — opening balance, cash in, cash out, closing balance, and projected balance — for any period you choose.",
                    },
                    {
                      q: "What is cash runway?",
                      a: "Cash runway is the number of days the project can continue at the current burn rate before the closing balance reaches zero. Lobocon calculates this automatically and alerts you when it drops below your warning threshold.",
                    },
                    {
                      q: "Does it track retention?",
                      a: "Yes. Every invoice can carry a retention percentage. Lobocon tracks total retention held and retention due for release separately so you always know what you are owed by the client at practical completion.",
                    },
                    {
                      q: "What payment methods are supported?",
                      a: "MPESA, bank transfer, cheque, and cash. All standard Kenyan payment methods are supported when recording invoice payments.",
                    },
                    {
                      q: "Is this built for Kenya and East Africa?",
                      a: "Yes. Lobocon is built in Kenya for construction firms in Kenya and East Africa. All values are in KES by default and the invoice structure follows standard Kenyan construction practice including progress payments, advance payments, variation orders, and retention releases.",
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
                    tag="Blog"
                    title="Why Cash Flow Forecasting Is the Most Overlooked Tool in Construction"
                    href="/blog/cash-flow-forecasting-construction"
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
                  See the gap before it opens.
                  <br />
                  Not after.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[16px] sm:text-[17px] text-slate-700 leading-relaxed mb-10 max-w-md">
                  Book a working session and we will show you your first cash
                  flow snapshot from your real project data — in under an hour.
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
