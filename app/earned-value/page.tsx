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
    <span className="text-slate-900">Earned Value</span>
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

const IsoIndigo = ({
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
      fill="#e0e7ff"
      stroke="#6366f1"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <polygon
      points="10,34 10,84 64,112 64,62"
      fill="#eef2ff"
      stroke="#6366f1"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <polygon
      points="118,34 118,84 64,112 64,62"
      fill="#c7d2fe"
      stroke="#6366f1"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <line
      x1="64"
      y1="6"
      x2="64"
      y2="62"
      stroke="#6366f1"
      strokeWidth="0.5"
      strokeDasharray="3 4"
      opacity="0.4"
    />
  </svg>
);

const IsoEmerald = ({
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
      fill="#d1fae5"
      stroke="#059669"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <polygon
      points="8,28 8,66 50,88 50,50"
      fill="#ecfdf5"
      stroke="#059669"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <polygon
      points="92,28 92,66 50,88 50,50"
      fill="#6ee7b7"
      stroke="#059669"
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

const IcoEV = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    style={{ width: 28, height: 28, flexShrink: 0 }}
  >
    <polygon
      points="16,2 22,5 16,8 10,5"
      fill="#e0e7ff"
      stroke="#6366f1"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="10,5 16,8 16,26 10,23"
      fill="#eef2ff"
      stroke="#6366f1"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="22,5 16,8 16,26 22,23"
      fill="#c7d2fe"
      stroke="#6366f1"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="16,14 22,17 16,20 10,17"
      fill="none"
      stroke="#a5b4fc"
      strokeWidth="0.8"
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
        id="ev-iso-dots"
        x="0"
        y="0"
        width="24"
        height="24"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="12" cy="12" r="0.8" fill="#cbd5e1" opacity="0.4" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#ev-iso-dots)" />
    </svg>
    <IsoGhost style={{ left: "4%", top: "20%", width: "50px" }} />
    <IsoIndigo
      style={{ left: "12%", top: "8%", width: "52px" }}
      opacity={0.7}
    />
    <IsoEmerald
      style={{ left: "25%", top: "5%", width: "44px" }}
      opacity={0.6}
    />
    <IsoGhost style={{ left: "38%", top: "15%", width: "38px" }} />
    <IsoIndigo
      style={{ left: "50%", top: "10%", width: "48px" }}
      opacity={0.5}
    />
    <IsoAmber
      style={{ left: "63%", top: "6%", width: "36px" }}
      opacity={0.55}
    />
    <IsoEmerald
      style={{ left: "75%", top: "12%", width: "40px" }}
      opacity={0.5}
    />
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

// Preview 1: EVM key metrics + performance
const EVMMetricsPreview = () => (
  <BrowserFrame url="app.lobocon.co/projects/primark/earned-value">
    {/* Project header */}
    <div className="px-4 pt-3 pb-2.5 border-b border-slate-100 flex items-center justify-between gap-3">
      <div>
        <p className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">
          Earned Value Management
        </p>
        <h3 className="text-[13px] font-black text-slate-900 leading-tight">
          Primark Apartments
        </h3>
        <p className="text-[8px] text-slate-600">Last snapshot: 25 Jan 2026</p>
      </div>
      <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-[9px] font-bold rounded-lg border border-emerald-100">
        Excellent
      </span>
    </div>

    {/* 5 metric cards */}
    <div className="grid grid-cols-5 divide-x divide-slate-100 border-b border-slate-100">
      {[
        {
          label: "BAC",
          val: "KES 12.5M",
          cls: "text-slate-900",
          sub: "Budget at Completion",
        },
        {
          label: "EV",
          val: "KES 4.88M",
          cls: "text-blue-600",
          sub: "Earned Value",
        },
        {
          label: "AC",
          val: "KES 4.20M",
          cls: "text-slate-900",
          sub: "Actual Cost",
        },
        {
          label: "CPI",
          val: "1.16",
          cls: "text-emerald-600",
          sub: "Cost Performance",
        },
        {
          label: "EAC",
          val: "KES 10.8M",
          cls: "text-slate-900",
          sub: "Forecast at Completion",
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

    {/* Performance detail — two columns */}
    <div className="grid grid-cols-2 divide-x divide-slate-100">
      <div className="p-3">
        <p className="text-[8px] font-black text-slate-600 uppercase tracking-widest mb-2.5">
          Cost Performance
        </p>
        <div className="space-y-2">
          {[
            {
              label: "Cost Variance (CV)",
              note: "EV - AC",
              val: "+KES 675K",
              cls: "text-emerald-600",
            },
            {
              label: "CPI",
              note: "KES 1.16 earned per KES spent",
              val: "1.16",
              cls: "text-emerald-600",
            },
            {
              label: "VAC",
              note: "Variance at Completion",
              val: "+KES 1.72M",
              cls: "text-emerald-600",
            },
            {
              label: "TCPI",
              note: "Efficiency needed to meet BAC",
              val: "0.89",
              cls: "text-emerald-600",
            },
          ].map((r) => (
            <div
              key={r.label}
              className="flex items-center justify-between gap-2"
            >
              <div>
                <p className="text-[10px] font-semibold text-slate-800">
                  {r.label}
                </p>
                <p className="text-[8px] text-slate-600">{r.note}</p>
              </div>
              <span className={`text-[11px] font-black font-mono ${r.cls}`}>
                {r.val}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] font-semibold text-slate-800">
              Actual Progress
            </span>
            <span className="text-[9px] font-black font-mono text-slate-900">
              39.0%
            </span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full"
              style={{ width: "39%" }}
            />
          </div>
          <p className="text-[8px] text-slate-600 mt-1">
            Based on BOQ earned value / BAC
          </p>
        </div>
      </div>

      <div className="p-3">
        <p className="text-[8px] font-black text-slate-600 uppercase tracking-widest mb-2.5">
          Schedule Performance
        </p>
        <div className="space-y-2">
          {[
            { label: "SPI", note: "Needs scheduling data" },
            { label: "Schedule Variance (SV)", note: "EV - PV" },
            { label: "PV (Planned Value)", note: "Set when schedule added" },
            { label: "% Planned Complete", note: "Planned completion" },
          ].map((r) => (
            <div
              key={r.label}
              className="flex items-center justify-between gap-2"
            >
              <div>
                <p className="text-[10px] font-semibold text-slate-600">
                  {r.label}
                </p>
                <p className="text-[8px] text-slate-600 italic">{r.note}</p>
              </div>
              <span className="text-[11px] font-black font-mono text-slate-300">
                —
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 bg-slate-50 border border-slate-200 rounded-lg p-2">
          <p className="text-[8px] text-slate-700 leading-relaxed">
            Schedule metrics unlock once the Scheduling module is configured.
          </p>
        </div>
      </div>
    </div>
  </BrowserFrame>
);

// Preview 2: Budget health + snapshot history
const BudgetHealthPreview = () => (
  <BrowserFrame url="app.lobocon.co/projects/primark/earned-value">
    <div className="grid grid-cols-2 divide-x divide-slate-100">
      {/* Left: budget health */}
      <div className="p-4">
        <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-3">
          Budget Health
        </p>
        <div className="flex items-end gap-2 mb-2">
          <span className="text-[32px] font-black font-mono text-emerald-600 leading-none">
            13.8%
          </span>
          <span className="text-[11px] font-semibold text-slate-600 mb-1">
            remaining
          </span>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-emerald-500 rounded-full"
            style={{ width: "13.8%" }}
          />
        </div>
        <p className="text-[10px] text-slate-700">
          Project forecast to come in under budget by 13.8%
        </p>

        <div className="mt-4 space-y-2">
          <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-2">
            Quick Insights
          </p>
          {[
            {
              label: "Cost Performance",
              val: "Under budget",
              cls: "text-emerald-600",
            },
            { label: "Schedule", val: "No data yet", cls: "text-slate-600" },
            {
              label: "Budget remaining",
              val: "KES 1.72M",
              cls: "text-slate-900",
            },
            {
              label: "Forecast saving",
              val: "KES 1.72M",
              cls: "text-emerald-600",
            },
          ].map((r) => (
            <div
              key={r.label}
              className="flex items-center justify-between py-1 border-b border-slate-50 last:border-b-0"
            >
              <span className="text-[10px] text-slate-700">{r.label}</span>
              <span className={`text-[10px] font-bold ${r.cls}`}>{r.val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: snapshot history */}
      <div className="p-4">
        <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-3">
          Snapshot History
        </p>
        <div className="space-y-1.5">
          {[
            {
              date: "25 Jan 2026",
              ev: "KES 4.88M",
              ac: "KES 4.20M",
              cpi: "1.16",
              pct: "39.0%",
              badge: "Excellent",
              badgeCls: "bg-emerald-50 text-emerald-700 border-emerald-100",
              latest: true,
            },
            {
              date: "15 Dec 2025",
              ev: "KES 3.10M",
              ac: "KES 2.85M",
              cpi: "1.09",
              pct: "24.8%",
              badge: "Good",
              badgeCls: "bg-blue-50 text-blue-700 border-blue-100",
              latest: false,
            },
            {
              date: "1 Nov 2025",
              ev: "KES 1.25M",
              ac: "KES 1.18M",
              cpi: "1.06",
              pct: "10.0%",
              badge: "Good",
              badgeCls: "bg-blue-50 text-blue-700 border-blue-100",
              latest: false,
            },
          ].map((s) => (
            <div
              key={s.date}
              className="border border-slate-200 rounded-lg p-2.5 bg-white"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold text-slate-900 font-mono">
                    {s.date}
                  </span>
                  {s.latest && (
                    <span className="px-1.5 py-0.5 bg-blue-50 text-blue-700 text-[7px] font-bold rounded border border-blue-100">
                      Latest
                    </span>
                  )}
                </div>
                <span
                  className={`px-1.5 py-0.5 text-[8px] font-bold rounded border ${s.badgeCls}`}
                >
                  {s.badge}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-1">
                {[
                  { k: "EV", v: s.ev, cls: "text-blue-600" },
                  { k: "AC", v: s.ac, cls: "text-slate-800" },
                  { k: "CPI", v: s.cpi, cls: "text-emerald-600" },
                  { k: "%", v: s.pct, cls: "text-slate-800" },
                ].map((c) => (
                  <div key={c.k}>
                    <p className="text-[7px] text-slate-600 font-semibold">
                      {c.k}
                    </p>
                    <p className={`text-[9px] font-black font-mono ${c.cls}`}>
                      {c.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </BrowserFrame>
);

// Preview 3: Expenses by category
const ExpensesPreview = () => (
  <BrowserFrame url="app.lobocon.co/projects/primark/expenses">
    <div className="px-4 pt-3 pb-2 border-b border-slate-100 flex items-center justify-between">
      <div>
        <p className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">
          Expenses
        </p>
        <h3 className="text-[13px] font-black text-slate-900">
          Primark Apartments
        </h3>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-[9px] font-semibold text-slate-700">
          Total spent:
        </span>
        <span className="text-[11px] font-black font-mono text-slate-900">
          KES 4,200,000
        </span>
      </div>
    </div>

    {/* Category breakdown */}
    <div className="p-4">
      <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-3">
        By Category
      </p>
      <div className="space-y-3">
        {[
          {
            label: "Materials",
            val: "KES 1,680,000",
            pct: 40,
            cls: "bg-blue-500",
            badge: "bg-blue-50 text-blue-700 border-blue-100",
          },
          {
            label: "Labor",
            val: "KES 1,260,000",
            pct: 30,
            cls: "bg-emerald-500",
            badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
          },
          {
            label: "Equipment",
            val: "KES 504,000",
            pct: 12,
            cls: "bg-violet-500",
            badge: "bg-violet-50 text-violet-700 border-violet-100",
          },
          {
            label: "Subcontractor",
            val: "KES 420,000",
            pct: 10,
            cls: "bg-rose-500",
            badge: "bg-rose-50 text-rose-700 border-rose-100",
          },
          {
            label: "Overhead",
            val: "KES 336,000",
            pct: 8,
            cls: "bg-slate-400",
            badge: "bg-slate-100 text-slate-700 border-slate-200",
          },
        ].map((r) => (
          <div key={r.label}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1.5">
                <span
                  className={`inline-block px-2 py-0.5 text-[8px] font-bold rounded border ${r.badge}`}
                >
                  {r.label}
                </span>
              </div>
              <span className="text-[10px] font-black font-mono text-slate-900">
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

    {/* Recent expenses */}
    <div className="border-t border-slate-100">
      <div className="px-4 py-2 bg-slate-50 border-b border-slate-100">
        <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest">
          Recent Expenses
        </p>
      </div>
      {[
        {
          ref: "EXP-012",
          desc: "Reinforcement bars — T12 & T16",
          cat: "Materials",
          amt: "KES 340,000",
          status: "Paid",
          sCls: "bg-emerald-50 text-emerald-700 border-emerald-100",
        },
        {
          ref: "EXP-011",
          desc: "Concrete pump hire — 3 days",
          cat: "Equipment",
          amt: "KES 84,000",
          status: "Paid",
          sCls: "bg-emerald-50 text-emerald-700 border-emerald-100",
        },
        {
          ref: "EXP-010",
          desc: "Formwork subcontractor — Feb",
          cat: "Subcontractor",
          amt: "KES 210,000",
          status: "Pending",
          sCls: "bg-amber-50 text-amber-700 border-amber-100",
        },
      ].map((e) => (
        <div
          key={e.ref}
          className="flex items-center justify-between px-4 py-2 border-b border-slate-50 last:border-b-0 hover:bg-slate-50"
        >
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-[8px] font-black font-mono text-slate-600 shrink-0">
              {e.ref}
            </span>
            <span className="text-[10px] text-slate-800 truncate">
              {e.desc}
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[10px] font-black font-mono text-slate-900">
              {e.amt}
            </span>
            <span
              className={`px-1.5 py-0.5 text-[8px] font-bold rounded border ${e.sCls}`}
            >
              {e.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  </BrowserFrame>
);

// Preview 4: S-curve data (simplified SVG — no Chart.js dependency)
const SCurvePreview = () => (
  <BrowserFrame url="app.lobocon.co/projects/primark/earned-value">
    <div className="p-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-[11px] font-black text-slate-900">EVM S-Curve</p>
          <p className="text-[9px] text-slate-600">
            PV · EV · AC over time — Primark Apartments
          </p>
        </div>
        <div className="flex items-center gap-3">
          {[
            { label: "PV", cls: "bg-slate-300" },
            { label: "EV", cls: "bg-blue-600" },
            { label: "AC", cls: "bg-amber-500" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-1">
              <div className={`w-4 h-0.5 rounded ${l.cls}`} />
              <span className="text-[8px] font-semibold text-slate-700">
                {l.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SVG chart */}
      <svg viewBox="0 0 480 160" className="w-full" style={{ height: "160px" }}>
        {/* Grid lines */}
        {[0, 40, 80, 120, 160].map((y) => (
          <line
            key={y}
            x1="40"
            y1={y}
            x2="480"
            y2={y}
            stroke="#f1f5f9"
            strokeWidth="1"
          />
        ))}
        {/* Y labels */}
        {[
          { y: 20, label: "KES 12M" },
          { y: 60, label: "KES 8M" },
          { y: 100, label: "KES 4M" },
          { y: 140, label: "KES 0" },
        ].map((l) => (
          <text
            key={l.y}
            x="36"
            y={l.y + 4}
            textAnchor="end"
            fontSize="8"
            fill="#475569"
          >
            {l.label}
          </text>
        ))}
        {/* X labels */}
        {[
          { x: 80, label: "Nov" },
          { x: 160, label: "Dec" },
          { x: 240, label: "Jan" },
          { x: 320, label: "Feb" },
          { x: 400, label: "Mar" },
          { x: 460, label: "Apr" },
        ].map((l) => (
          <text
            key={l.x}
            x={l.x}
            y="156"
            textAnchor="middle"
            fontSize="8"
            fill="#475569"
          >
            {l.label}
          </text>
        ))}
        {/* EAC forecast dashed */}
        <polyline
          points="240,93 280,82 320,71 360,59 400,47 460,31"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="1.2"
          strokeDasharray="4 3"
        />
        {/* EV line — blue */}
        <polyline
          points="80,133 160,107 240,93"
          fill="none"
          stroke="#2563eb"
          strokeWidth="2"
        />
        <circle cx="80" cy="133" r="3.5" fill="#2563eb" />
        <circle cx="160" cy="107" r="3.5" fill="#2563eb" />
        <circle cx="240" cy="93" r="3.5" fill="#2563eb" />
        {/* AC line — amber */}
        <polyline
          points="80,136 160,110 240,97"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
        />
        <circle cx="80" cy="136" r="3.5" fill="#f59e0b" />
        <circle cx="160" cy="110" r="3.5" fill="#f59e0b" />
        <circle cx="240" cy="97" r="3.5" fill="#f59e0b" />
        {/* Current date marker */}
        <line
          x1="240"
          y1="10"
          x2="240"
          y2="148"
          stroke="#e2e8f0"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <text x="244" y="18" fontSize="7" fill="#475569">
          Today
        </text>
      </svg>

      {/* EAC callout */}
      <div className="mt-2 flex items-center justify-between px-3 py-2 bg-emerald-50 border border-emerald-100 rounded-lg">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[9px] font-semibold text-emerald-800">
            Forecast at Completion (EAC)
          </span>
        </div>
        <span className="text-[11px] font-black font-mono text-emerald-700">
          KES 10.8M
        </span>
      </div>
      <p className="text-[8px] text-slate-600 mt-1.5 text-center">
        Saving KES 1.72M vs budget of KES 12.5M at current CPI 1.16
      </p>
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
      <IsoIndigo
        style={{ right: "3%", top: "3%", width: "30px", position: "absolute" }}
        opacity={0.2}
      />
      <IsoGhost
        style={{
          left: "2%",
          bottom: "4%",
          width: "26px",
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
    <div className="px-4 pt-3 pb-2 border-b border-slate-100 flex items-center justify-between gap-3">
      <div>
        <p className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">
          Earned Value Management
        </p>
        <h3 className="text-[13px] font-black text-slate-900">
          Primark Apartments
        </h3>
      </div>
      <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-[9px] font-bold rounded-lg border border-emerald-100">
        Excellent
      </span>
    </div>
    <div className="grid grid-cols-5 divide-x divide-slate-100 border-b border-slate-100">
      {[
        { label: "BAC", val: "KES 12.5M", cls: "text-slate-900" },
        { label: "EV", val: "KES 4.88M", cls: "text-blue-600" },
        { label: "AC", val: "KES 4.20M", cls: "text-slate-900" },
        { label: "CPI", val: "1.16", cls: "text-emerald-600" },
        { label: "EAC", val: "KES 10.8M", cls: "text-slate-900" },
      ].map((m) => (
        <div key={m.label} className="px-2.5 py-2.5 bg-white text-center">
          <p className="text-[7px] font-black text-slate-600 uppercase tracking-wider mb-0.5">
            {m.label}
          </p>
          <p className={`text-[10px] font-black font-mono ${m.cls}`}>{m.val}</p>
        </div>
      ))}
    </div>
    <div className="p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[9px] font-black text-slate-700 uppercase tracking-widest">
          Performance
        </p>
        <span className="text-[8px] font-semibold text-slate-600">
          Snapshot: 25 Jan 2026
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Cost Variance", val: "+KES 675K", cls: "text-emerald-600" },
          { label: "CPI", val: "1.16", cls: "text-emerald-600" },
          { label: "VAC", val: "+KES 1.72M", cls: "text-emerald-600" },
          { label: "TCPI", val: "0.89", cls: "text-emerald-600" },
        ].map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between px-2.5 py-2 bg-slate-50 border border-slate-100 rounded-lg"
          >
            <span className="text-[9px] font-semibold text-slate-800">
              {r.label}
            </span>
            <span className={`text-[10px] font-black font-mono ${r.cls}`}>
              {r.val}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[9px] font-semibold text-slate-800">
            Actual Progress
          </span>
          <span className="text-[9px] font-black font-mono text-slate-900">
            39.0%
          </span>
        </div>
        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full"
            style={{ width: "39%" }}
          />
        </div>
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
          "You find out the project is over budget at the monthly meeting. By then it is too late to change anything.",
          "CPI and EVM calculations happen in Excel at month-end, if they happen at all.",
          "Nobody agrees on the numbers because everyone is working from a different spreadsheet version.",
          "Clients ask for performance reports and you spend two days pulling the data together.",
          "There is no early warning system. Problems compound silently until they are too expensive to fix.",
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
          "CPI updates automatically every time BOQ progress is recorded. You know this week if the project is profitable.",
          "One click to calculate an EVM snapshot. The S-curve updates immediately.",
          "EAC forecasts tell you today what the project will cost at completion, not at the end.",
          "Share a live read-only dashboard with your client. No manual reports.",
          "Budget health, variance at completion, and TCPI are always visible — one screen.",
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

export default function EarnedValuePage() {
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
                name: "What is earned value management in construction?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Earned value management (EVM) is a method for measuring project performance by comparing the value of work actually completed against the planned budget and actual cost. It tells you whether you are over or under budget and ahead or behind schedule at any point in the project.",
                },
              },
              {
                "@type": "Question",
                name: "What is CPI and why does it matter?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "CPI is the Cost Performance Index — the ratio of earned value to actual cost. A CPI above 1.0 means you are earning more value than you are spending. A CPI of 1.16 means for every KES spent you are earning KES 1.16 of completed work. Lobocon calculates this automatically from your BOQ progress.",
                },
              },
              {
                "@type": "Question",
                name: "Does Lobocon work without a project schedule?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Cost performance metrics — CPI, EV, AC, VAC, EAC — all calculate from BOQ progress alone. Schedule metrics like SPI unlock when you connect the Scheduling module, but you get full cost visibility from day one.",
                },
              },
              {
                "@type": "Question",
                name: "Is Lobocon built for construction firms in Kenya?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Lobocon is built specifically for construction firms in Kenya and East Africa. All values are in KES by default and the BOQ format follows the NCA convention used by Kenyan quantity surveyors.",
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
                  <IcoEV />
                  <span className="text-[11px] font-bold tracking-[0.2em] text-slate-900 uppercase">
                    Earned Value
                  </span>
                </motion.div>
                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.08}
                  className="text-[38px] sm:text-[48px] lg:text-[58px] font-black text-slate-900 tracking-[-0.025em] leading-[1.03] mb-6"
                >
                  Know if your project is profitable{" "}
                  <span className="text-slate-500">before it is too late.</span>
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.16}
                  className="text-[17px] text-slate-700 leading-relaxed mb-10 max-w-lg"
                >
                  Most construction firms in Kenya find out they are over budget
                  at the month-end meeting. Lobocon calculates CPI, EAC, and
                  variance automatically from your live BOQ — so you know this
                  week, not next month.
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
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 rounded-full border border-slate-200 text-slate-900 font-semibold hover:bg-slate-50 transition-colors text-sm"
                  >
                    WhatsApp us
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
                    num="1.16"
                    label="CPI on Primark Apartments — earning KES 1.16 per shilling spent"
                  />
                  <StatCard
                    num="13.8%"
                    label="budget saving forecast at completion"
                  />
                  <StatCard
                    num="1 click"
                    label="to calculate a full EVM snapshot from your live BOQ"
                  />
                </motion.div>
              </div>

              {/* Hero dark panel — indigo gradient */}
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
                      "linear-gradient(135deg,#1e1b4b 0%,#312e81 60%,#0f0d2e 100%)",
                  }}
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 600 420"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <pattern
                      id="ev-hero-dp"
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
                        fill="#818cf8"
                        opacity="0.15"
                      />
                    </pattern>
                    <rect width="600" height="420" fill="url(#ev-hero-dp)" />
                    <g opacity="0.14">
                      <polygon
                        points="80,140 200,80 320,140 200,200"
                        fill="#818cf8"
                      />
                      <polygon
                        points="80,140 80,280 200,340 200,200"
                        fill="#6366f1"
                      />
                      <polygon
                        points="320,140 320,280 200,340 200,200"
                        fill="#4338ca"
                      />
                    </g>
                  </svg>
                </div>
                <IsoIndigo
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
                <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-5 py-3 bg-indigo-950/50 border-t border-indigo-800/30">
                  <span className="text-[9px] font-bold text-white uppercase tracking-widest shrink-0">
                    Customer Story
                  </span>
                  <span className="text-[11px] font-semibold text-indigo-100/80 truncate">
                    How Primark Apartments forecast a KES 1.72M saving before
                    phase two started
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
                You should not find out about overruns{" "}
                <span className="text-slate-500">at the end of the month.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[16px] text-slate-700 max-w-lg mb-2">
                EVM is not a finance theory. It is the only way to know your
                project is profitable while you can still do something about it.
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
          <div className="max-w-7xlto">
            <Reveal>
              <SectionLabel>What it does</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] font-black text-slate-900 tracking-[-0.02em] leading-[1.03] max-w-2xl mb-12">
                Real numbers.{" "}
                <span className="text-slate-500">Updated as work happens.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <FeatureBlock
                  label="Metrics dashboard"
                  accentDot="bg-indigo-600"
                  patternId="ev-feat-1"
                  icon={<IcoEV />}
                  title="CPI, EAC, and variance — always current"
                  body="BAC, EV, AC, CPI, and EAC update automatically every time BOQ progress is recorded on site. No manual calculations. No end-of-month catch-up. The five numbers that tell you whether Primark Apartments will come in on budget are always on screen."
                  preview={<EVMMetricsPreview />}
                />
                <FeatureBlock
                  label="S-curve"
                  accentDot="bg-blue-600"
                  patternId="ev-feat-2"
                  icon={
                    <svg
                      viewBox="0 0 28 28"
                      fill="none"
                      style={{ width: 28, height: 28 }}
                    >
                      <polyline
                        points="4,22 8,18 14,12 20,8 24,6"
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <polyline
                        points="4,22 8,19 14,14 20,11 24,9"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <line
                        x1="4"
                        y1="4"
                        x2="4"
                        y2="24"
                        stroke="#e2e8f0"
                        strokeWidth="1.2"
                      />
                      <line
                        x1="4"
                        y1="24"
                        x2="24"
                        y2="24"
                        stroke="#e2e8f0"
                        strokeWidth="1.2"
                      />
                    </svg>
                  }
                  title="See where the project is heading"
                  body="The S-curve plots EV and AC over time and extends the AC forecast (EAC) as a dashed projection. You can see immediately if actual costs are diverging from earned value and how the gap is trending across the remaining project duration."
                  preview={<SCurvePreview />}
                  reverse
                />
                <FeatureBlock
                  label="Budget health"
                  accentDot="bg-emerald-600"
                  patternId="ev-feat-3"
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
                  title="Snapshot history and budget remaining"
                  body="Every EVM snapshot is stored with its date, CPI, and percentage complete. Budget health shows what is left at the forecast rate. Three snapshots into a project you already have a trend line — improving, stable, or deteriorating."
                  preview={<BudgetHealthPreview />}
                />
                <FeatureBlock
                  label="Expense tracking"
                  accentDot="bg-amber-500"
                  patternId="ev-feat-4"
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
                        stroke="#ca8a04"
                        strokeWidth="1.2"
                      />
                      <line
                        x1="9"
                        y1="10"
                        x2="19"
                        y2="10"
                        stroke="#ca8a04"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="9"
                        y1="14"
                        x2="15"
                        y2="14"
                        stroke="#ca8a04"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="9"
                        y1="18"
                        x2="13"
                        y2="18"
                        stroke="#ca8a04"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  }
                  title="Expenses feed directly into AC"
                  body="Log expenses by category — materials, labor, equipment, subcontractor, overhead. Every approved expense updates the Actual Cost (AC) line automatically. Your CPI recalculates in real time. No double-entry, no reconciliation at month-end."
                  preview={<ExpensesPreview />}
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
                id="ev-test-dp"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="0.7" fill="#334155" opacity="0.6" />
              </pattern>
              <rect width="1200" height="400" fill="url(#ev-test-dp)" />
              <g opacity="0.1">
                <polygon points="80,80 160,40 240,80 160,120" fill="#818cf8" />
                <polygon points="80,80 80,200 160,240 160,120" fill="#6366f1" />
                <polygon
                  points="240,80 240,200 160,240 160,120"
                  fill="#4338ca"
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
                "We caught a KES 4M overrun at 40% complete. By the time it
                would have shown up in our spreadsheets it would have been KES
                12M."
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
                    James Kariuki
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Project Manager, Kensetsu Ltd
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
                    What construction PMs in Kenya{" "}
                    <span className="text-slate-500">ask us first.</span>
                  </h2>
                  <p className="mt-4 text-[15px] text-slate-700 leading-relaxed max-w-sm">
                    Email us at{" "}
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-slate-900 font-semibold hover:underline"
                    >
                      {CONTACT.email}
                    </a>{" "}
                    if your question is not here.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="border-t border-slate-200">
                  {[
                    {
                      q: "What is earned value management in construction?",
                      a: "EVM is a method for measuring project performance by comparing the value of work actually completed against your planned budget and actual cost. It tells you whether you are over or under budget and ahead or behind schedule at any point in the project — not just at month-end.",
                    },
                    {
                      q: "What is CPI and why does it matter?",
                      a: "CPI is the Cost Performance Index — the ratio of earned value to actual cost. A CPI above 1.0 means you are earning more value than you are spending. A CPI of 1.16 means for every KES spent you are earning KES 1.16 of completed work. Lobocon calculates this automatically from your BOQ progress.",
                    },
                    {
                      q: "Does Lobocon work without a project schedule?",
                      a: "Yes. Cost performance metrics — CPI, EV, AC, VAC, EAC — all calculate from BOQ progress alone. Schedule metrics like SPI unlock when you connect the Scheduling module, but you get full cost visibility from day one.",
                    },
                    {
                      q: "How often does CPI update?",
                      a: "Every time a BOQ progress entry is recorded on site. If your foreman logs concrete work at 8am, your CPI reflects that by 8:01am. There is no batch calculation or overnight job.",
                    },
                    {
                      q: "Can we share EVM data with clients?",
                      a: "Yes. You can grant clients a read-only dashboard that shows overall earned value, percentage complete, and forecast at completion without exposing your internal cost breakdown. Most firms find this replaces the monthly progress meeting entirely.",
                    },
                    {
                      q: "Is this built for Kenya and East Africa?",
                      a: "Yes. Lobocon is built in Kenya for construction firms in Kenya and East Africa. All values are in KES by default and the BOQ format follows the NCA convention used by Kenyan quantity surveyors.",
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
                    title="Earned Value Management for Construction PMs: A Practical Guide"
                    href="/blog/earned-value-management-construction"
                  />
                  <RelatedCard
                    tag="Guide"
                    title="How to Track Variation Orders and Protect Your Margin"
                    href="/blog/variation-orders-margin"
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
                  Stop finding out at month-end.
                  <br />
                  Know now.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[16px] sm:text-[17px] text-slate-700 leading-relaxed mb-10 max-w-md">
                  Book a working session and we will show you how your BOQ data
                  becomes live EVM metrics — no Excel, no manual calculations.
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
