"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";

// ── SVG Icons ────────────────────────────────────────────────────────────────

const LearnMoreIcon = () => (
  <svg
    width="14"
    height="14"
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
);

const SubRing = ({ id, stroke }: { id: string; stroke: string }) => (
  <svg
    className="w-3.5 h-3.5 shrink-0"
    viewBox="0 0 14 14"
    style={{ transform: "rotate(-90deg)" }}
  >
    <circle cx="7" cy="7" r="5.5" className="sub-ring-bg" />
    <circle
      cx="7"
      cy="7"
      r="5.5"
      className="sub-ring-fill"
      id={id}
      stroke={stroke}
    />
  </svg>
);

// ── Tab icons ─────────────────────────────────────────────────────────────────

const CommercialIcon = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    className="w-6 h-6 sm:w-7 sm:h-7 shrink-0"
  >
    <polygon
      points="16,4 26,9 16,14 6,9"
      fill="#fef9c3"
      stroke="#ca8a04"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <polygon
      points="6,9 16,14 16,20 6,15"
      fill="#fef08a"
      stroke="#ca8a04"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <polygon
      points="26,9 16,14 16,20 26,15"
      fill="#fde047"
      stroke="#ca8a04"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <polygon
      points="16,14 26,19 16,24 6,19"
      fill="#fef9c3"
      stroke="#ca8a04"
      strokeWidth="1"
      strokeLinejoin="round"
      opacity=".7"
    />
    <polygon
      points="6,19 16,24 16,28 6,24"
      fill="#fef08a"
      stroke="#ca8a04"
      strokeWidth="1"
      strokeLinejoin="round"
      opacity=".7"
    />
    <polygon
      points="26,19 16,24 16,28 26,24"
      fill="#fde047"
      stroke="#ca8a04"
      strokeWidth="1"
      strokeLinejoin="round"
      opacity=".7"
    />
  </svg>
);

const ExecutionIcon = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    className="w-6 h-6 sm:w-7 sm:h-7 shrink-0"
  >
    <polygon
      points="16,3 24,7 16,11 8,7"
      fill="#d1fae5"
      stroke="#059669"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <polygon
      points="8,7 16,11 16,24 8,20"
      fill="#ecfdf5"
      stroke="#059669"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <polygon
      points="24,7 16,11 16,24 24,20"
      fill="#6ee7b7"
      stroke="#059669"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <line
      x1="16"
      y1="3"
      x2="16"
      y2="0"
      stroke="#059669"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <line
      x1="16"
      y1="0"
      x2="26"
      y2="0"
      stroke="#059669"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <line
      x1="26"
      y1="0"
      x2="26"
      y2="5"
      stroke="#059669"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeDasharray="1.5 1.5"
    />
  </svg>
);

const ReportingIcon = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    className="w-6 h-6 sm:w-7 sm:h-7 shrink-0"
  >
    <polygon
      points="16,6 24,10 16,14 8,10"
      fill="#ede9fe"
      stroke="#7c3aed"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <polygon
      points="8,10 16,14 16,26 8,22"
      fill="#f5f3ff"
      stroke="#7c3aed"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <polygon
      points="24,10 16,14 16,26 24,22"
      fill="#ddd6fe"
      stroke="#7c3aed"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <polygon
      points="20,2 26,5 20,8 14,5"
      fill="#c4b5fd"
      stroke="#7c3aed"
      strokeWidth="1"
      strokeLinejoin="round"
      opacity=".8"
    />
    <polygon
      points="14,5 20,8 20,12 14,9"
      fill="#ede9fe"
      stroke="#7c3aed"
      strokeWidth="1"
      strokeLinejoin="round"
      opacity=".8"
    />
    <polygon
      points="26,5 20,8 20,12 26,9"
      fill="#a78bfa"
      stroke="#7c3aed"
      strokeWidth="1"
      strokeLinejoin="round"
      opacity=".8"
    />
  </svg>
);

// ── Panel backgrounds ─────────────────────────────────────────────────────────

const BgDotPattern = ({ id, color }: { id: string; color: string }) => (
  <>
    <pattern
      id={id}
      x="0"
      y="0"
      width="20"
      height="20"
      patternUnits="userSpaceOnUse"
    >
      <circle cx="10" cy="10" r="1" fill={color} opacity=".22" />
    </pattern>
    <rect width="600" height="540" fill={`url(#${id})`} />
  </>
);

// ── Sub-panel left content ────────────────────────────────────────────────────

interface SubTabItem {
  id: string;
  label: string;
  stroke: string;
  active: boolean;
  onClick: () => void;
}

interface SubLeftProps {
  accent: string;
  category: string;
  title: string;
  desc: string;
  href: string;
  tabs: SubTabItem[];
}

const SubLeft = ({
  accent,
  category,
  title,
  desc,
  href,
  tabs,
}: SubLeftProps) => (
  <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-12 lg:w-[40%] shrink-0 border-b lg:border-b-0 lg:border-r border-slate-100">
    <div>
      <div className="flex items-center gap-2 mb-6">
        <div className={`w-2.5 h-2.5 rounded-sm ${accent}`} />
        <span className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">
          {category}
        </span>
      </div>
      <h3 className="text-[28px] lg:text-[36px] font-black text-slate-900 leading-tight tracking-tight mb-5">
        {title}
      </h3>
      <p className="text-[15px] text-slate-900 leading-relaxed mb-8 max-w-sm">
        {desc}
      </p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-900 hover:text-slate-900 transition-colors mb-10"
      >
        <LearnMoreIcon /> Learn more
      </Link>
    </div>
    <div className="flex items-center gap-5 flex-wrap">
      {tabs.map((t) => (
        <button
          key={t.id}
          data-sub={
            t.id.replace("srf-", "").replace(/-\d+$/, "") +
            "-" +
            t.id.split("-").pop()
          }
          className={`sub-tab-item${t.active ? " active" : ""}`}
          onClick={t.onClick}
        >
          <SubRing id={t.id} stroke={t.stroke} />
          {t.label}
        </button>
      ))}
    </div>
  </div>
);

// ── Customer story bar ────────────────────────────────────────────────────────

interface StoryBarProps {
  bg: string;
  border: string;
  labelColor: string;
  textColor: string;
  text: string;
}

const StoryBar = ({
  bg,
  border,
  labelColor,
  textColor,
  text,
}: StoryBarProps) => (
  <div
    className={`absolute bottom-0 left-0 right-0 flex items-center gap-3 px-6 py-3 ${bg} ${border} border-t`}
  >
    <span
      className={`text-[9px] font-bold ${labelColor} uppercase tracking-widest shrink-0`}
    >
      Customer Story
    </span>
    <span className={`text-[11px] font-semibold ${textColor} truncate`}>
      {text}
    </span>
  </div>
);

// ── Float card wrapper ────────────────────────────────────────────────────────

const CardWrap = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => (
  <div
    id={`card-wrap-${id}`}
    className="absolute inset-0 flex items-center justify-center p-3 sm:p-5 lg:p-8 pt-4 sm:pt-6 pb-16 sm:pb-20"
    style={{ overflowX: "hidden", overflowY: "auto" }}
  >
    {children}
  </div>
);

// ── PANEL 1: COMMERCIAL ───────────────────────────────────────────────────────

const BOQCard = () => (
  <div className="float-card w-full max-w-130">
    <div className="px-5 py-3.5 border-b border-slate-100 bg-white">
      <div className="flex items-center gap-2 mb-0.5">
        <svg
          className="w-4 h-4 text-slate-900"
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
        <span className="px-1.5 py-0.5 bg-slate-100 text-slate-900 text-[9px] font-bold rounded">
          B-SUB
        </span>
        <span className="px-1.5 py-0.5 bg-amber-100 text-amber-700 text-[9px] font-bold rounded">
          ALL PROVISIONAL
        </span>
      </div>
      <p className="text-[10px] text-slate-900 ml-6">
        52 items · column bases, basement slab, waterproofing, reinforcement
      </p>
    </div>
    <div
      className="boq-grid grid px-5 py-2 border-b border-slate-100 bg-slate-50/50"
      style={{ gridTemplateColumns: "56px 1fr 72px 52px" }}
    >
      <span className="text-[9px] font-black text-slate-900 uppercase tracking-wider">
        Code
      </span>
      <span className="text-[9px] font-black text-slate-900 uppercase tracking-wider">
        Description
      </span>
      <span className="text-[9px] font-black text-slate-900 uppercase tracking-wider text-right">
        Qty
      </span>
      <span className="text-[9px] font-black text-slate-900 uppercase tracking-wider text-right boq-unit">
        Unit
      </span>
    </div>
    {[
      {
        code: "1.1.1",
        desc: "Excavate to reduce levels; not exceeding 1.5m deep",
        qty: "300",
        unit: "m³",
        bg: "",
      },
      {
        code: "1.1.2",
        desc: "Ditto; exceeding 1.5m but not exceeding 3.0m deep",
        qty: "350",
        unit: "m³",
        bg: "",
      },
      {
        code: "1.5.1",
        desc: "Vibrated reinforced insitu concrete class 25MPa — Column bases",
        qty: "14,000",
        unit: "m³",
        bg: "",
      },
      {
        code: "1.8.1",
        desc: "T8 high tension ribbed steel bars reinforcement to BS 4449",
        qty: "26,991",
        unit: "Kg",
        bg: "",
      },
      {
        code: "1.4.1",
        desc: "Allow for keeping the whole excavation free from all water",
        qty: "1",
        unit: "Item",
        bg: "#fefce8",
      },
    ].map((row) => (
      <div
        key={row.code}
        className="boq-grid grid px-5 py-2.5 border-b border-slate-50/80"
        style={{
          gridTemplateColumns: "56px 1fr 72px 52px",
          background: row.bg || undefined,
        }}
      >
        <span className="text-[11px] text-slate-900">{row.code}</span>
        <span className="text-[11px] text-slate-900">{row.desc}</span>
        <span className="text-[11px] text-slate-900 text-right font-mono">
          {row.qty}
        </span>
        <span className="text-[11px] text-slate-900 text-right">
          {row.unit}
        </span>
      </div>
    ))}
    <div className="px-5 py-3 flex items-center justify-between bg-slate-50/50">
      <span className="text-[11px] font-black text-slate-900">
        Section Total
      </span>
      <span className="text-[12px] font-black text-slate-900 font-mono">
        KES 48,230,000
      </span>
    </div>
  </div>
);

const EarnedValueCard = () => (
  <div className="float-card w-full max-w-125">
    <div className="px-5 py-4 border-b border-slate-100">
      <p className="text-[12px] font-bold text-slate-900">Performance Detail</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:divide-x divide-slate-100">
      <div className="p-5 space-y-3">
        <p className="app-label text-slate-900">Cost Performance</p>
        <div>
          <p className="text-[11px] font-bold text-slate-900">
            Cost Variance (CV){" "}
            <span className="text-[10px] text-slate-900 font-normal">
              EV – AC
            </span>
          </p>
          <p className="text-[15px] font-black text-emerald-600 font-mono">
            +KES 675K
          </p>
        </div>
        <div>
          <p className="text-[11px] font-bold text-slate-900">CPI</p>
          <p className="text-[11px] text-slate-900 text-xs">
            Earning KES 1.16 per KES spent
          </p>
          <p className="text-[15px] font-black text-emerald-600 font-mono">
            1.16
          </p>
        </div>
        <div>
          <p className="text-[11px] font-bold text-slate-900">
            VAC{" "}
            <span className="text-[10px] text-slate-900 font-normal">
              Variance at Completion
            </span>
          </p>
          <p className="text-[15px] font-black text-emerald-600 font-mono">
            +KES 1.72M
          </p>
        </div>
        <div>
          <p className="text-[11px] font-bold text-slate-900">
            TCPI{" "}
            <span className="text-[10px] text-slate-900 font-normal">
              Efficiency to meet BAC
            </span>
          </p>
          <p className="text-[15px] font-black text-slate-800 font-mono">
            0.89
          </p>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <p className="text-[11px] font-bold text-slate-900">
              Actual Progress
            </p>
            <span className="text-[11px] font-black text-slate-800 font-mono">
              39.0%
            </span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full">
            <div
              className="h-full bg-blue-600 rounded-full"
              style={{ width: "39%" }}
            />
          </div>
          <p className="text-[9px] text-slate-900 mt-1">
            Based on BOQ earned value ÷ BAC
          </p>
        </div>
      </div>
      <div className="p-5 space-y-3">
        <p className="app-label text-slate-900">Schedule Performance</p>
        <div>
          <p className="text-[11px] font-bold text-slate-900">SPI</p>
          <p className="text-[11px] text-slate-900 italic">
            Needs scheduling data
          </p>
        </div>
        <div>
          <p className="text-[11px] font-bold text-slate-900">
            Schedule Variance (SV)
          </p>
          <p className="text-[11px] text-slate-900 italic">EV – PV</p>
        </div>
        <div>
          <p className="text-[11px] font-bold text-slate-900">
            PV (Planned Value)
          </p>
          <p className="text-[11px] text-slate-900 italic">
            Set when schedule added
          </p>
        </div>
        <div>
          <p className="text-[11px] font-bold text-slate-900">
            % Planned Complete
          </p>
          <p className="text-[11px] text-slate-900 italic">
            Planned completion
          </p>
        </div>
        <div className="bg-slate-50 rounded-lg p-3 mt-2">
          <p className="text-[10px] text-slate-900">
            Schedule metrics unlock with the Scheduling module.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const CashFlowCard = () => (
  <div className="float-card w-full max-w-125">
    <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-[11px] font-bold text-slate-900">Snapshot</span>
        <span className="text-[11px] text-slate-900">13 Feb 2026</span>
        <span className="text-[10px] text-slate-900">Period</span>
        <span className="text-[11px] text-slate-900 font-semibold">
          1 Feb – 28 Feb 2026
        </span>
      </div>
      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full shrink-0">
        Healthy
      </span>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 p-4 sm:p-5">
      <div className="space-y-2.5">
        <p className="app-label text-slate-900 mb-2">Cash In</p>
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
        ].map((r) => (
          <div key={r.label} className="flex justify-between gap-2">
            <span className="text-[10px] text-slate-900">{r.label}</span>
            <span
              className={`text-[10px] font-bold font-mono whitespace-nowrap ${r.cls}`}
            >
              {r.val}
            </span>
          </div>
        ))}
        <div className="pt-2 border-t border-slate-100 mt-2">
          <p className="app-label text-slate-900 mb-2">Outstanding</p>
          <div className="flex justify-between gap-2">
            <span className="text-[10px] text-slate-900">
              Outstanding Invoices
            </span>
            <span className="text-[10px] font-bold text-blue-600 font-mono whitespace-nowrap">
              KES 2,100,000
            </span>
          </div>
          <div className="flex justify-between gap-2 mt-1">
            <span className="text-[10px] text-slate-900">Overdue Invoices</span>
            <span className="text-[10px] font-bold text-red-600 font-mono whitespace-nowrap">
              KES 850,000
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-2.5">
        <p className="app-label text-slate-900 mb-2">Cash Out</p>
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
          <div key={r.label} className="flex justify-between gap-2">
            <span className="text-[10px] text-slate-900">{r.label}</span>
            <span
              className={`text-[10px] font-bold font-mono whitespace-nowrap ${r.cls}`}
            >
              {r.val}
            </span>
          </div>
        ))}
        <div className="pt-2 border-t border-slate-100 mt-2">
          <p className="app-label text-slate-900 mb-2">Cash Position</p>
          <div className="flex justify-between gap-2">
            <span className="text-[10px] text-slate-900">Opening Balance</span>
            <span className="text-[10px] font-bold text-slate-800 font-mono whitespace-nowrap">
              KES 2,400,000
            </span>
          </div>
          <div className="flex justify-between gap-2 mt-1">
            <span className="text-[10px] text-slate-900">Closing Balance</span>
            <span className="text-[10px] font-bold text-emerald-600 font-mono whitespace-nowrap">
              KES 4,200,000
            </span>
          </div>
          <div className="flex justify-between gap-2 mt-1">
            <span className="text-[10px] text-slate-900">
              Projected Balance
            </span>
            <span className="text-[10px] font-bold text-blue-600 font-mono whitespace-nowrap">
              KES 6,300,000
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ── PANEL 2: EXECUTION ────────────────────────────────────────────────────────

const SchedulingCard = () => (
  <div className="float-card w-full max-w-130">
    <div className="flex items-center gap-1 px-4 py-3 border-b border-slate-100 bg-slate-50/50 flex-wrap">
      <button className="px-3 py-1.5 text-[10px] font-semibold text-slate-900 rounded flex items-center gap-1.5 hover:bg-slate-100">
        ≡ Baseline
      </button>
      <button className="px-3 py-1.5 text-[10px] font-semibold text-slate-900 rounded flex items-center gap-1.5 hover:bg-slate-100">
        ∿ Variance
      </button>
      <button className="px-3 py-1.5 text-[10px] font-semibold text-slate-900 rounded hover:bg-slate-100">
        Workload
      </button>
      <div className="ml-auto flex items-center gap-2 flex-wrap">
        {[
          ["bg-red-500", "Critical"],
          ["bg-slate-400", "Baseline"],
          ["bg-blue-600", "Summary"],
          ["bg-amber-400", "Milestone"],
        ].map(([c, l]) => (
          <span
            key={l}
            className="flex items-center gap-1 text-[9px] text-slate-900"
          >
            <span className={`w-2 h-2 rounded-full ${c} inline-block`} />
            {l}
          </span>
        ))}
      </div>
    </div>
    <div
      className="grid border-b border-slate-100 bg-slate-50/30"
      style={{ gridTemplateColumns: "150px 1fr 1fr 1fr 1fr" }}
    >
      <div className="px-3 py-1.5 border-r border-slate-100" />
      {["26 Jan–1 Feb", "2 Feb–8 Feb", "9 Feb–15 Feb", "16 Feb–22 Feb"].map(
        (w) => (
          <div
            key={w}
            className="py-1.5 border-r border-slate-100 last:border-r-0 text-center text-[9px] font-bold text-slate-900"
          >
            {w}
          </div>
        ),
      )}
    </div>
    <div className="divide-y divide-slate-50">
      <div
        className="grid items-center"
        style={{ gridTemplateColumns: "150px 1fr 1fr 1fr 1fr", height: "34px" }}
      >
        <div className="px-3 text-[10px] font-medium text-slate-800 border-r border-slate-100">
          1.1 Site Clearance
        </div>
        <div className="col-span-2 px-1 flex items-center">
          <div className="h-5 rounded w-full bg-red-500 flex items-center px-2">
            <span className="text-[9px] font-bold text-white">
              1.1 Site Clearance
            </span>
          </div>
        </div>
        <div className="col-span-2" />
      </div>
      <div
        className="grid items-center"
        style={{ gridTemplateColumns: "150px 1fr 1fr 1fr 1fr", height: "34px" }}
      >
        <div className="px-3 text-[10px] text-slate-800 border-r border-slate-100 flex items-center gap-1">
          <span className="text-slate-900">→</span>1.2 Setting Out
        </div>
        <div className="col-span-2 px-1 flex items-center">
          <div
            className="h-5 rounded bg-blue-500 flex items-center px-2"
            style={{ width: "90%" }}
          >
            <span className="text-[9px] font-bold text-white">
              1.2 Setting Out
            </span>
          </div>
        </div>
        <div className="col-span-2" />
      </div>
      <div
        className="grid items-center"
        style={{ gridTemplateColumns: "150px 1fr 1fr 1fr 1fr", height: "34px" }}
      >
        <div className="px-3 text-[10px] text-slate-900 border-r border-slate-100">
          1.9 Deshuttering
        </div>
        <div />
        <div className="px-1 flex items-center col-span-2">
          <div className="h-5 rounded bg-red-500 flex items-center px-2 w-4/5">
            <span className="text-[9px] font-bold text-white truncate">
              1.9 Deshuttering and Curing
            </span>
          </div>
        </div>
        <div />
      </div>
      <div
        className="grid items-center"
        style={{ gridTemplateColumns: "150px 1fr 1fr 1fr 1fr", height: "34px" }}
      >
        <div className="px-3 text-[10px] text-slate-900 border-r border-slate-100">
          2.1 Substructure
        </div>
        <div />
        <div />
        <div className="px-1 flex items-center col-span-2">
          <div className="h-5 rounded bg-blue-400/70 flex items-center px-2 w-3/4">
            <span className="text-[9px] font-bold text-white">
              2.1 Substructure
            </span>
          </div>
        </div>
      </div>
      <div
        className="grid items-center"
        style={{ gridTemplateColumns: "150px 1fr 1fr 1fr 1fr", height: "34px" }}
      >
        <div className="px-3 text-[10px] text-slate-900 border-r border-slate-100">
          3.0 Milestone
        </div>
        <div />
        <div />
        <div />
        <div className="flex items-center px-3">
          <div className="w-3 h-3 bg-amber-400 rotate-45" />
        </div>
      </div>
    </div>
    <div className="px-4 py-2.5 border-t border-slate-100 flex items-center justify-between bg-slate-50/40">
      <span className="text-[10px] text-slate-900">
        Week 18 of 52 ·{" "}
        <span className="text-emerald-600 font-semibold">On track</span>
      </span>
      <div className="flex items-center gap-2">
        <button className="px-3 py-1 text-[10px] font-semibold text-slate-900 border border-slate-200 rounded">
          ↓ Export
        </button>
        <button className="px-3 py-1 text-[10px] font-bold text-white bg-emerald-600 rounded">
          Share
        </button>
      </div>
    </div>
  </div>
);

const PvACard = () => (
  <div className="float-card w-full max-w-120 p-5">
    <p className="text-[12px] font-bold text-slate-900 mb-1">
      Planned vs Actual — Week 18
    </p>
    <p className="text-[10px] text-slate-900 mb-5">
      Project Alpha · Block A Superstructure
    </p>
    <div className="space-y-5">
      {[
        {
          label: "Concrete pours",
          variance: "-8% behind",
          varCls: "text-amber-600",
          planned: 80,
          actual: 72,
          actualCls: "bg-emerald-500",
          actualTextCls: "text-emerald-600",
        },
        {
          label: "Block laying",
          variance: "-15% behind",
          varCls: "text-red-600",
          planned: 60,
          actual: 45,
          actualCls: "bg-red-500",
          actualTextCls: "text-red-600",
        },
        {
          label: "Steel fixing",
          variance: "+4% ahead",
          varCls: "text-emerald-600",
          planned: 55,
          actual: 59,
          actualCls: "bg-emerald-500",
          actualTextCls: "text-emerald-600",
        },
      ].map((row) => (
        <div key={row.label}>
          <div className="flex justify-between text-[11px] mb-2">
            <span className="font-semibold text-slate-700">{row.label}</span>
            <span className={`font-bold ${row.varCls}`}>{row.variance}</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-blue-500 w-14">Planned</span>
              <div className="flex-1 h-2.5 bg-blue-100 rounded-full">
                <div
                  className="h-full bg-blue-400 rounded-full"
                  style={{ width: `${row.planned}%` }}
                />
              </div>
              <span className="text-[10px] font-mono text-slate-900 w-8 text-right">
                {row.planned}%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-[9px] w-14 ${row.actualTextCls}`}>
                Actual
              </span>
              <div className="flex-1 h-2.5 bg-slate-100 rounded-full">
                <div
                  className={`h-full rounded-full ${row.actualCls}`}
                  style={{ width: `${row.actual}%` }}
                />
              </div>
              <span
                className={`text-[10px] font-mono w-8 text-right ${row.actualTextCls}`}
              >
                {row.actual}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const LaborCard = () => (
  <div className="float-card w-full max-w-115 p-5">
    <div className="flex items-center justify-between mb-5">
      <div>
        <p className="text-[12px] font-bold text-slate-900">Labor Dashboard</p>
        <p className="text-[10px] text-slate-900">
          Today · Site A, Project Alpha
        </p>
      </div>
      <span className="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold rounded">
        -6 workers
      </span>
    </div>
    <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5">
      <div className="bg-slate-50 rounded-xl p-3 text-center">
        <p className="text-[9px] text-slate-900 uppercase font-bold tracking-wide mb-1">
          On Site
        </p>
        <p className="text-2xl font-black text-slate-900 font-mono">84</p>
      </div>
      <div className="bg-slate-50 rounded-xl p-3 text-center">
        <p className="text-[9px] text-slate-900 uppercase font-bold tracking-wide mb-1">
          Planned
        </p>
        <p className="text-2xl font-black text-slate-900 font-mono">90</p>
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-center">
        <p className="text-[9px] text-amber-600 uppercase font-bold tracking-wide mb-1">
          Variance
        </p>
        <p className="text-2xl font-black text-amber-700 font-mono">-6</p>
      </div>
    </div>
    <div className="space-y-3">
      {[
        {
          label: "Concreters",
          bar: "bg-emerald-500",
          w: "100%",
          count: "24/24",
          textCls: "text-slate-700",
        },
        {
          label: "Steel fixers",
          bar: "bg-amber-500",
          w: "75%",
          count: "12/16",
          textCls: "text-slate-700",
        },
        {
          label: "Masons",
          bar: "bg-red-500",
          w: "60%",
          count: "18/30",
          textCls: "text-red-600",
        },
        {
          label: "Electricians",
          bar: "bg-blue-500",
          w: "100%",
          count: "8/8",
          textCls: "text-slate-700",
        },
      ].map((r) => (
        <div key={r.label} className="flex items-center justify-between">
          <span className="text-[11px] text-slate-900">{r.label}</span>
          <div className="flex items-center gap-3">
            <div className="w-28 h-2 bg-slate-100 rounded-full">
              <div
                className={`h-full rounded-full ${r.bar}`}
                style={{ width: r.w }}
              />
            </div>
            <span
              className={`text-[11px] font-mono w-10 text-right ${r.textCls}`}
            >
              {r.count}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ── PANEL 3: REPORTING ────────────────────────────────────────────────────────

const BudgetCard = () => (
  <div className="float-card w-full max-w-135">
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:divide-x divide-slate-100">
      <div className="p-5 space-y-4">
        <p className="text-[9px] font-black text-slate-900 uppercase tracking-widest">
          Cost Baseline
        </p>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-bold text-slate-900">
              Auto-sync baseline from BOQ
            </p>
            <p className="text-[10px] text-slate-800 mt-0.5 leading-relaxed">
              Updates automatically whenever bills change.
            </p>
          </div>
          <div className="toggle shrink-0 mt-0.5" />
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-slate-900">Current baseline</span>
            <span className="text-[11px] font-black text-slate-900 font-mono">
              KES 859,673,313
            </span>
          </div>
          <p className="text-[9px] text-emerald-600 font-semibold mt-1">
            Auto-sync on · Last synced: just now
          </p>
        </div>
        <p className="text-[9px] font-black text-slate-900 uppercase tracking-widest pt-2">
          Contingency Allowance
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-2.5">
          <p className="text-[10px] text-amber-700">
            • No contingency in BOQ. Add global % or per bill.
          </p>
        </div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-bold text-slate-900">
              Add contingency
            </p>
            <p className="text-[10px] text-slate-800 mt-0.5">
              Standard range 5–15%
            </p>
          </div>
          <div className="toggle shrink-0 mt-0.5" />
        </div>
        <div className="grid grid-cols-2 gap-1">
          <button className="py-2 text-[10px] font-bold text-emerald-700 bg-emerald-50 border-2 border-emerald-500 rounded-lg">
            Global %
          </button>
          <button className="py-2 text-[10px] font-semibold text-slate-900 bg-slate-50 border border-slate-200 rounded-lg">
            Per Bill %
          </button>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-[9px] font-black text-slate-900 uppercase tracking-widest mb-1">
              Global %
            </p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                defaultValue="10"
                className="w-14 text-center text-[12px] font-bold border border-slate-200 rounded-lg py-1.5 font-mono"
              />
              <span className="text-[10px] text-slate-900">all 16 bills</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-black text-slate-900 uppercase tracking-widest mb-1">
              Contingency
            </p>
            <p className="text-[12px] font-black text-red-600 font-mono">
              KES 85,967,331
            </p>
          </div>
        </div>
      </div>
      <div className="p-5">
        <p className="text-[9px] font-black text-slate-900 uppercase tracking-widest mb-4">
          Live Budget Preview
        </p>
        <div className="space-y-2">
          <div className="border border-slate-100 rounded-lg p-2.5">
            <p className="text-[9px] text-slate-900">
              Contract Sum · Raw BOQ · 16 bills
            </p>
            <p className="text-[12px] font-black text-slate-900 font-mono text-right">
              859,673,313
            </p>
          </div>
          <div className="border border-amber-200 bg-amber-50 rounded-lg p-2.5">
            <p className="text-[9px] text-amber-600 font-bold">
              Contingency · 10% global
            </p>
            <p className="text-[12px] font-black text-amber-700 font-mono text-right">
              + 85,967,331
            </p>
          </div>
          <div className="border border-blue-200 bg-blue-50 rounded-lg p-2.5">
            <p className="text-[9px] text-blue-600 font-bold">
              Cost Plan / Baseline
            </p>
            <p className="text-[12px] font-black text-blue-700 font-mono text-right">
              945,640,644
            </p>
          </div>
          <div className="border border-blue-200 bg-blue-50 rounded-lg p-2.5">
            <p className="text-[9px] text-blue-600 font-bold">
              Management Reserve · 5%
            </p>
            <p className="text-[12px] font-black text-blue-700 font-mono text-right">
              + 47,282,032
            </p>
          </div>
          <div className="bg-slate-900 rounded-xl p-3">
            <p className="text-[10px] font-bold text-white">
              Total Project Budget
            </p>
            <p className="text-[9px] text-slate-900">
              + 10% contingency, + 5% reserve
            </p>
            <p className="text-[18px] font-black text-emerald-400 font-mono text-right mt-1">
              992,922,676 <span className="text-[9px] text-slate-900">KES</span>
            </p>
          </div>
        </div>
        <button className="mt-3 w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] font-bold rounded-lg transition-colors">
          Save Budget Configuration
        </button>
      </div>
    </div>
  </div>
);

const CollaborationCard = () => (
  <div className="float-card w-full max-w-110 p-5">
    <p className="text-[12px] font-bold text-slate-900 mb-1">
      Team Access — Project Alpha
    </p>
    <p className="text-[10px] text-slate-900 mb-5">
      Role-based permissions · 4 members
    </p>
    <div className="space-y-2.5">
      {[
        {
          init: "JK",
          name: "James Kariuki",
          role: "Project Manager",
          bg: "bg-blue-600",
          badgeBg: "bg-blue-50 border-blue-100",
          badgeText: "text-blue-700",
          badge: "Full Access",
        },
        {
          init: "AO",
          name: "Amina Osei",
          role: "Quantity Surveyor",
          bg: "bg-amber-500",
          badgeBg: "bg-amber-50 border-amber-100",
          badgeText: "text-amber-700",
          badge: "BOQ + Cost",
        },
        {
          init: "SM",
          name: "Samuel Mwita",
          role: "Site Foreman",
          bg: "bg-emerald-600",
          badgeBg: "bg-emerald-50 border-emerald-100",
          badgeText: "text-emerald-700",
          badge: "Progress only",
        },
        {
          init: "C",
          name: "Client View",
          role: "Read-only dashboard",
          bg: "bg-slate-300",
          badgeBg: "bg-slate-100 border-slate-200",
          badgeText: "text-slate-900",
          badge: "View only",
        },
      ].map((m) => (
        <div
          key={m.name}
          className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100"
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-8 h-8 rounded-full ${m.bg} flex items-center justify-center text-[10px] font-black text-white`}
            >
              {m.init}
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-900">{m.name}</p>
              <p className="text-[9px] text-slate-900">{m.role}</p>
            </div>
          </div>
          <span
            className={`px-2 py-1 text-[10px] font-bold rounded-lg border ${m.badgeBg} ${m.badgeText}`}
          >
            {m.badge}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const ResourcesCard = () => (
  <div className="float-card w-full max-w-120 p-5">
    <p className="text-[12px] font-bold text-slate-900 mb-1">
      Equipment Utilisation
    </p>
    <p className="text-[10px] text-slate-900 mb-5">
      All sites · 3 active projects
    </p>
    <div className="space-y-4">
      <div>
        <div className="flex justify-between text-[11px] mb-1.5">
          <span className="font-semibold text-slate-700">Tower Crane #1</span>
          <span className="font-bold text-emerald-600">Active — Site A</span>
        </div>
        <div className="w-full h-2.5 bg-slate-100 rounded-full">
          <div
            className="h-full bg-emerald-500 rounded-full"
            style={{ width: "92%" }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[9px] text-slate-900">92% utilised</span>
          <span className="text-[9px] font-mono text-slate-800">
            184 / 200 hrs
          </span>
        </div>
      </div>
      <div>
        <div className="flex justify-between text-[11px] mb-1.5">
          <span className="font-semibold text-slate-700">Concrete Pump</span>
          <span className="font-bold text-amber-600">Shared — Sites A/B</span>
        </div>
        <div className="w-full h-2.5 bg-slate-100 rounded-full">
          <div
            className="h-full bg-amber-500 rounded-full"
            style={{ width: "78%" }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[9px] text-slate-900">78% utilised</span>
          <span className="text-[9px] font-mono text-slate-800">
            156 / 200 hrs
          </span>
        </div>
      </div>
      <div>
        <div className="flex justify-between text-[11px] mb-1.5">
          <span className="font-semibold text-slate-700">Excavator JCB-3</span>
          <span className="font-bold text-red-600">Idle ⚠</span>
        </div>
        <div className="w-full h-2.5 bg-slate-100 rounded-full">
          <div
            className="h-full bg-red-200 rounded-full"
            style={{ width: "5%" }}
          />
        </div>
        <div className="bg-red-50 border border-red-100 rounded-lg p-2 mt-1.5">
          <p className="text-[10px] text-red-600">
            Unallocated — cost accruing at KES 12,000/day
          </p>
        </div>
      </div>
    </div>
  </div>
);

// ── Constants ─────────────────────────────────────────────────────────────────

const SUB_COUNTS: Record<number, number> = { 1: 3, 2: 3, 3: 3 };
const SUB_MS = 5000;
const ENTER_CLASSES = [
  "anim-enter-right",
  "anim-enter-left",
  "anim-enter-down",
  "anim-enter-up",
] as const;
const EXIT_PAIRS: Record<string, string> = {
  "anim-enter-right": "anim-exit-left",
  "anim-enter-left": "anim-exit-right",
  "anim-enter-down": "anim-exit-up",
  "anim-enter-up": "anim-exit-down",
};
const ALL_ANIM = [...ENTER_CLASSES, ...Object.values(EXIT_PAIRS)];

// ── Main Component ────────────────────────────────────────────────────────────

export default function Product() {
  const curTabRef = useRef<number>(1);
  const curSubRef = useRef<Record<number, number>>({ 1: 1, 2: 1, 3: 1 });
  const subStartRef = useRef<number>(0);
  const subRAFRef = useRef<number | null>(null);
  const lastEnterRef = useRef<Record<string, string>>({});

  const getCard = useCallback((t: number, s: number): HTMLElement | null => {
    const wrap = document.getElementById(`card-wrap-${t}-${s}`);
    return wrap ? wrap.querySelector(".float-card") : null;
  }, []);

  const animateCardIn = useCallback(
    (t: number, s: number) => {
      const card = getCard(t, s);
      if (!card) return;
      const enterClass =
        ENTER_CLASSES[Math.floor(Math.random() * ENTER_CLASSES.length)];
      lastEnterRef.current[`${t}-${s}`] = enterClass;
      ALL_ANIM.forEach((c) => card.classList.remove(c));
      void (card as HTMLElement).offsetWidth;
      card.classList.add(enterClass);
    },
    [getCard],
  );

  const animateCardOut = useCallback(
    (t: number, s: number, cb?: () => void) => {
      const card = getCard(t, s);
      if (!card) {
        cb?.();
        return;
      }
      const enterClass =
        lastEnterRef.current[`${t}-${s}`] || "anim-enter-right";
      const exitClass = EXIT_PAIRS[enterClass] || "anim-exit-left";
      ALL_ANIM.forEach((c) => card.classList.remove(c));
      void (card as HTMLElement).offsetWidth;
      card.classList.add(exitClass);
      const onEnd = () => {
        card.removeEventListener("animationend", onEnd);
        cb?.();
      };
      card.addEventListener("animationend", onEnd);
    },
    [getCard],
  );

  const setSubRing = useCallback((t: number, s: number, f: number) => {
    const total = 35.19;
    const els = document.querySelectorAll<SVGCircleElement>(
      `[id="srf-${t}-${s}"]`,
    );
    els.forEach((el) => {
      el.style.strokeDashoffset = String(total - total * f);
    });
  }, []);

  const resetSubRings = useCallback(() => {
    [1, 2, 3].forEach((t) => {
      for (let s = 1; s <= SUB_COUNTS[t]; s++) setSubRing(t, s, 0);
    });
  }, [setSubRing]);

  const showSub = useCallback(
    (tabN: number, subN: number, animate: boolean) => {
      const count = SUB_COUNTS[tabN];
      for (let s = 1; s <= count; s++) {
        const panel = document.getElementById(`sp-${tabN}-${s}`);
        const card = getCard(tabN, s);
        if (s === subN) {
          panel?.classList.add("active");
          if (card) (card as HTMLElement).style.opacity = "";
          if (animate) animateCardIn(tabN, s);
        } else {
          panel?.classList.remove("active");
          if (card) {
            ALL_ANIM.forEach((c) => card.classList.remove(c));
            (card as HTMLElement).style.opacity = "";
          }
        }
      }
    },
    [getCard, animateCardIn],
  );

  const syncSubBtns = useCallback((tabN: number, subN: number) => {
    const count = SUB_COUNTS[tabN];
    for (let s = 1; s <= count; s++) {
      const btns = document.querySelectorAll(`[data-sub="${tabN}-${s}"]`);
      btns.forEach((btn) => btn.classList.toggle("active", s === subN));
    }
  }, []);

  const updateTabButtons = useCallback((n: number) => {
    [1, 2, 3].forEach((i) => {
      const btn = document.getElementById(`tab-btn-${i}`);
      btn?.classList.toggle("tab-active", i === n);
    });
  }, []);

  const stopSub = useCallback(() => {
    if (subRAFRef.current) {
      cancelAnimationFrame(subRAFRef.current);
      subRAFRef.current = null;
    }
  }, []);

  const tickSub = useCallback(() => {
    const f = Math.min((performance.now() - subStartRef.current) / SUB_MS, 1);
    setSubRing(curTabRef.current, curSubRef.current[curTabRef.current], f);
    if (f >= 1) {
      const cnt = SUB_COUNTS[curTabRef.current];
      const next = (curSubRef.current[curTabRef.current] % cnt) + 1;
      const prevSub = curSubRef.current[curTabRef.current];
      animateCardOut(curTabRef.current, prevSub, () => {
        setSubRing(curTabRef.current, prevSub, 0);
        curSubRef.current[curTabRef.current] = next;
        showSub(curTabRef.current, next, true);
        syncSubBtns(curTabRef.current, next);
        subStartRef.current = performance.now();
        subRAFRef.current = requestAnimationFrame(tickSub);
      });
      return;
    }
    subRAFRef.current = requestAnimationFrame(tickSub);
  }, [setSubRing, animateCardOut, showSub, syncSubBtns]);

  const switchSub = useCallback(
    (tabN: number, subN: number) => {
      stopSub();
      const prevSub = curSubRef.current[tabN];
      setSubRing(tabN, prevSub, 0);
      curSubRef.current[tabN] = subN;
      showSub(tabN, subN, true);
      syncSubBtns(tabN, subN);
      curTabRef.current = tabN;
      updateTabButtons(tabN);
      subStartRef.current = performance.now();
      subRAFRef.current = requestAnimationFrame(tickSub);
    },
    [stopSub, setSubRing, showSub, syncSubBtns, updateTabButtons, tickSub],
  );

  const switchTab = useCallback(
    (n: number) => {
      curTabRef.current = n;
      updateTabButtons(n);
      const panel = document.getElementById(`panel-${n}`);
      const nav = document.getElementById("main-nav");
      const bar = document.getElementById("main-tab-bar");
      if (panel) {
        const navH = nav ? nav.offsetHeight : 0;
        const barH = bar ? bar.offsetHeight : 64;
        const top =
          panel.getBoundingClientRect().top + window.scrollY - navH - barH;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    [updateTabButtons],
  );

  useEffect(() => {
    const nav = document.getElementById("main-nav");
    const bar = document.getElementById("main-tab-bar");

    // Fix 2: set tab bar top to navbar height so both stack correctly
    const updateTabBarTop = () => {
      if (bar && nav) {
        bar.style.top = `${nav.offsetHeight}px`;
      }
    };
    updateTabBarTop();

    const setScrollMargins = () => {
      const navH = nav ? nav.offsetHeight : 0;
      const barH = bar ? bar.offsetHeight : 64;
      [1, 2, 3].forEach((n) => {
        const p = document.getElementById(`panel-${n}`);
        if (p) p.style.scrollMarginTop = `${navH + barH}px`;
      });
    };
    setScrollMargins();
    window.addEventListener("resize", setScrollMargins);
    window.addEventListener("resize", updateTabBarTop);

    resetSubRings();
    updateTabButtons(1);
    showSub(1, 1, true);
    syncSubBtns(1, 1);

    const showSubSilent = (tabN: number, subN: number) => {
      const count = SUB_COUNTS[tabN];
      for (let s = 1; s <= count; s++) {
        const panel = document.getElementById(`sp-${tabN}-${s}`);
        const card = getCard(tabN, s);
        if (s === subN) {
          panel?.classList.add("active");
          if (card) (card as HTMLElement).style.opacity = "1";
        } else {
          panel?.classList.remove("active");
        }
      }
      syncSubBtns(tabN, subN);
    };
    showSubSilent(2, 1);
    showSubSilent(3, 1);

    subStartRef.current = performance.now();
    subRAFRef.current = requestAnimationFrame(tickSub);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const n = parseInt(el.dataset.panel ?? "0");
            if (n && n !== curTabRef.current) {
              curTabRef.current = n;
              updateTabButtons(n);
            }
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );
    [1, 2, 3].forEach((n) => {
      const el = document.getElementById(`panel-${n}`);
      if (el) observer.observe(el);
    });

    return () => {
      stopSub();
      window.removeEventListener("resize", setScrollMargins);
      window.removeEventListener("resize", updateTabBarTop);
      observer.disconnect();
    };
  }, [
    resetSubRings,
    updateTabButtons,
    showSub,
    syncSubBtns,
    getCard,
    tickSub,
    stopSub,
  ]);

  const makeSubTabs = (
    tabN: number,
    items: { label: string; stroke: string }[],
  ): SubTabItem[] =>
    items.map((item, i) => ({
      id: `srf-${tabN}-${i + 1}`,
      label: item.label,
      stroke: item.stroke,
      active: false,
      onClick: () => switchSub(tabN, i + 1),
    }));

  const commercialTabs = makeSubTabs(1, [
    { label: "BOQ", stroke: "#ca8a04" },
    { label: "Earned Value", stroke: "#ca8a04" },
    { label: "Cash Flow", stroke: "#ca8a04" },
  ]);

  const executionTabs = makeSubTabs(2, [
    { label: "Scheduling", stroke: "#059669" },
    { label: "Planned vs Actual", stroke: "#059669" },
    { label: "Labor", stroke: "#059669" },
  ]);

  const reportingTabs = makeSubTabs(3, [
    { label: "Budget", stroke: "#7c3aed" },
    { label: "Collaboration", stroke: "#7c3aed" },
    { label: "Resources", stroke: "#7c3aed" },
  ]);

  return (
    <section className="w-full max-w-345 mx-auto px-4 sm:px-6 lg:px-16 pt-10 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 lg:pb-10">
      <div className="mb-8 sm:mb-14">
        <p className="text-[11px] font-bold tracking-[0.2em] text-slate-900 uppercase mb-4">
          Platform
        </p>
        <h2 className="text-[32px] sm:text-[42px] lg:text-[58px] font-black text-slate-900 tracking-[-0.02em] leading-[1.03] max-w-2xl">
          One platform.
          <br />
          Every project phase.
        </h2>
      </div>

      <div
        className="border border-slate-200 rounded-2xl"
        style={{ overflow: "clip" }}
      >
        {/* ── Tab Bar — Fix 2: top set dynamically via useEffect, Fix 3: cursor-pointer ── */}
        <div
          id="main-tab-bar"
          className="grid grid-cols-3 bg-white rounded-t-2xl"
          style={{
            position: "sticky",
            top: "73px",
            zIndex: 40,
            borderBottom: "1px solid #e2e8f0",
            boxShadow: "0 1px 4px rgba(15,23,42,0.06)",
          }}
        >
          {(
            [
              { n: 1, icon: <CommercialIcon />, label: "Commercial" },
              { n: 2, icon: <ExecutionIcon />, label: "Execution" },
              { n: 3, icon: <ReportingIcon />, label: "Reporting" },
            ] as const
          ).map((tab, i) => (
            <button
              key={tab.n}
              id={`tab-btn-${tab.n}`}
              onClick={() => switchTab(tab.n)}
              className={`tab-main-btn cursor-pointer flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-6 py-4 sm:py-5 transition-all duration-200${i < 2 ? " border-r border-slate-200" : ""}`}
            >
              {tab.icon}
              <span className="text-[11px] sm:text-[13px] font-semibold hidden xs:inline sm:inline">
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        <div className="hatch" />

        {/* ══ PANEL 1: COMMERCIAL ══ */}
        <div id="panel-1" className="product-panel" data-panel="1">
          <div id="sp-1-1" className="sub-panel flex-col lg:flex-row">
            <SubLeft
              accent="bg-amber-500"
              category="Commercial"
              title="Your bill of quantities, live."
              desc="Import, map, and track every line item against actual site progress. BOQ updates as work happens — no more end-of-month surprises."
              href="/boq"
              tabs={commercialTabs}
            />
            <div
              className="flex-1 relative overflow-hidden panel-right"
              style={{ minHeight: "300px" }}
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
                  viewBox="0 0 600 540"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <g opacity=".18">
                    <polygon
                      points="80,190 200,130 320,190 200,250"
                      fill="#fbbf24"
                    />
                    <polygon
                      points="80,190 80,330 200,390 200,250"
                      fill="#f59e0b"
                    />
                    <polygon
                      points="320,190 320,330 200,390 200,250"
                      fill="#d97706"
                    />
                  </g>
                  <g opacity=".1">
                    <polygon
                      points="400,60 480,20 560,60 480,100"
                      fill="#fbbf24"
                    />
                    <polygon
                      points="400,60 400,160 480,200 480,100"
                      fill="#f59e0b"
                    />
                    <polygon
                      points="560,60 560,160 480,200 480,100"
                      fill="#d97706"
                    />
                  </g>
                  <BgDotPattern id="dp1" color="#fbbf24" />
                </svg>
              </div>
              <CardWrap id="1-1">
                <BOQCard />
              </CardWrap>
              <StoryBar
                bg="bg-amber-950/50"
                border="border-amber-800/30"
                labelColor="text-amber-300/60"
                textColor="text-amber-100/80"
                text="How Skyline Kenya cut BOQ reconciliation from 3 weeks to 2 days ↗"
              />
            </div>
          </div>

          <div id="sp-1-2" className="sub-panel flex-col lg:flex-row">
            <SubLeft
              accent="bg-amber-500"
              category="Commercial"
              title="Know your CPI before it's too late."
              desc="Real-time CPI and SPI from live BOQ progress. Catch overruns at work-package level — not the end-of-month meeting."
              href="/earned-value"
              tabs={commercialTabs}
            />
            <div
              className="flex-1 relative overflow-hidden panel-right"
              style={{ minHeight: "300px" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg,#78350f 0%,#92400e 60%,#451a03 100%)",
                }}
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 600 540"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <g opacity=".15">
                    <polygon
                      points="60,200 160,150 260,200 160,250"
                      fill="#fb923c"
                    />
                    <polygon
                      points="60,200 60,340 160,390 160,250"
                      fill="#f97316"
                    />
                    <polygon
                      points="260,200 260,340 160,390 160,250"
                      fill="#ea580c"
                    />
                  </g>
                  <BgDotPattern id="dp2" color="#fb923c" />
                </svg>
              </div>
              <CardWrap id="1-2">
                <EarnedValueCard />
              </CardWrap>
              <StoryBar
                bg="bg-amber-950/50"
                border="border-amber-800/30"
                labelColor="text-amber-300/60"
                textColor="text-amber-100/80"
                text="How Kensetsu caught a KES 4M overrun before it became KES 12M ↗"
              />
            </div>
          </div>

          <div id="sp-1-3" className="sub-panel flex-col lg:flex-row">
            <SubLeft
              accent="bg-amber-500"
              category="Commercial"
              title="Never get caught short on site."
              desc="Forecast inflows, outflows, and working capital across every active project. See your cash position 90 days forward."
              href="/cash-flow"
              tabs={commercialTabs}
            />
            <div
              className="flex-1 relative overflow-hidden panel-right"
              style={{ minHeight: "300px" }}
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
                  viewBox="0 0 600 540"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <g opacity=".18">
                    <polygon
                      points="100,170 220,110 340,170 220,230"
                      fill="#34d399"
                    />
                    <polygon
                      points="100,170 100,310 220,370 220,230"
                      fill="#10b981"
                    />
                    <polygon
                      points="340,170 340,310 220,370 220,230"
                      fill="#059669"
                    />
                  </g>
                  <BgDotPattern id="dp3" color="#34d399" />
                </svg>
              </div>
              <CardWrap id="1-3">
                <CashFlowCard />
              </CardWrap>
              <StoryBar
                bg="bg-emerald-950/50"
                border="border-emerald-800/30"
                labelColor="text-emerald-300/60"
                textColor="text-emerald-100/80"
                text="How Maisha Construct avoided a KES 6M cash gap with 90-day forecasting ↗"
              />
            </div>
          </div>
        </div>

        <div className="hatch2" />

        {/* ══ PANEL 2: EXECUTION ══ */}
        <div
          id="panel-2"
          className="product-panel border-t border-slate-200"
          data-panel="2"
        >
          <div id="sp-2-1" className="sub-panel flex-col lg:flex-row">
            <SubLeft
              accent="bg-emerald-600"
              category="Execution"
              title="Your baseline. Your critical path."
              desc="Import from MS Project or build in Lobocon. CPM auto-calculates float and critical path. Set baselines, track slippage, keep every trade on schedule."
              href="/scheduling"
              tabs={executionTabs}
            />
            <div
              className="flex-1 relative overflow-hidden panel-right"
              style={{ minHeight: "300px" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "url('https://res.cloudinary.com/kwishi/image/upload/v1776689600/crane_xcarmk.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(2,44,34,0.72) 0%, rgba(6,78,59,0.55) 100%)",
                  }}
                />
              </div>
              <CardWrap id="2-1">
                <SchedulingCard />
              </CardWrap>
              <StoryBar
                bg="bg-teal-950/50"
                border="border-teal-800/30"
                labelColor="text-teal-300/60"
                textColor="text-teal-100/80"
                text="How Harbourage EA kept a 14-storey project on schedule despite a 3-week weather delay ↗"
              />
            </div>
          </div>

          <div id="sp-2-2" className="sub-panel flex-col lg:flex-row">
            <SubLeft
              accent="bg-emerald-600"
              category="Execution"
              title="Daily variance. No surprises."
              desc="Compare daily progress against your baseline at work-package level. Surface slippage before it compounds."
              href="/planned-vs-actual"
              tabs={executionTabs}
            />
            <div
              className="flex-1 relative overflow-hidden panel-right"
              style={{ minHeight: "300px" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "url('https://res.cloudinary.com/kwishi/image/upload/v1776689600/building_yuzqrg.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(15,23,42,0.68) 0%, rgba(30,58,95,0.55) 100%)",
                  }}
                />
              </div>
              <CardWrap id="2-2">
                <PvACard />
              </CardWrap>
              <StoryBar
                bg="bg-blue-950/50"
                border="border-blue-800/30"
                labelColor="text-blue-300/60"
                textColor="text-blue-100/80"
                text="How Vertex Build reduced daily reporting time from 2 hours to 15 minutes ↗"
              />
            </div>
          </div>

          <div id="sp-2-3" className="sub-panel flex-col lg:flex-row">
            <SubLeft
              accent="bg-emerald-600"
              category="Execution"
              title="Every worker. Every hour."
              desc="Track daily headcount, allocation per trade, and overtime against your project labor plan. Know your labor cost in real time — not at month-end."
              href="/resources"
              tabs={executionTabs}
            />
            <div
              className="flex-1 relative overflow-hidden panel-right"
              style={{ minHeight: "300px" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "url('https://res.cloudinary.com/kwishi/image/upload/v1776689600/workers_okacmr.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(12,10,9,0.72) 0%, rgba(41,37,36,0.58) 100%)",
                  }}
                />
              </div>
              <CardWrap id="2-3">
                <LaborCard />
              </CardWrap>
              <StoryBar
                bg="bg-stone-950/50"
                border="border-stone-700/30"
                labelColor="text-stone-400/60"
                textColor="text-stone-200/80"
                text="How Stanbuild reduced labour overspend by 22% with daily tracking ↗"
              />
            </div>
          </div>
        </div>

        <div className="hatch2" />

        {/* ══ PANEL 3: REPORTING ══ */}
        <div
          id="panel-3"
          className="product-panel border-t border-slate-200"
          data-panel="3"
        >
          <div id="sp-3-1" className="sub-panel flex-col lg:flex-row">
            <SubLeft
              accent="bg-violet-600"
              category="Reporting"
              title="Your budget, locked and live."
              desc="Set your cost baseline, configure contingency, and see your total project budget build in real time. One source of truth for your finance team."
              href="/reporting"
              tabs={reportingTabs}
            />
            <div
              className="flex-1 relative overflow-hidden panel-right"
              style={{ minHeight: "300px" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg,#2e1065 0%,#3b0764 60%,#1a0533 100%)",
                }}
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 600 540"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <g opacity=".2">
                    <polygon
                      points="60,290 140,250 220,290 140,330"
                      fill="#a78bfa"
                    />
                    <polygon
                      points="60,290 60,400 140,440 140,330"
                      fill="#7c3aed"
                    />
                    <polygon
                      points="220,290 220,400 140,440 140,330"
                      fill="#6d28d9"
                    />
                  </g>
                  <g opacity=".15">
                    <polygon
                      points="160,170 240,130 320,170 240,210"
                      fill="#a78bfa"
                    />
                    <polygon
                      points="160,170 160,280 240,320 240,210"
                      fill="#7c3aed"
                    />
                    <polygon
                      points="320,170 320,280 240,320 240,210"
                      fill="#6d28d9"
                    />
                  </g>
                  <g opacity=".1">
                    <polygon
                      points="400,60 480,20 560,60 480,100"
                      fill="#c4b5fd"
                    />
                    <polygon
                      points="400,60 400,160 480,200 480,100"
                      fill="#a78bfa"
                    />
                    <polygon
                      points="560,60 560,160 480,200 480,100"
                      fill="#7c3aed"
                    />
                  </g>
                  <line
                    x1="140"
                    y1="330"
                    x2="240"
                    y2="210"
                    stroke="#c4b5fd"
                    strokeWidth=".6"
                    strokeDasharray="4 5"
                    opacity=".3"
                  />
                  <line
                    x1="240"
                    y1="210"
                    x2="480"
                    y2="100"
                    stroke="#c4b5fd"
                    strokeWidth=".6"
                    strokeDasharray="4 5"
                    opacity=".2"
                  />
                  <BgDotPattern id="dp7" color="#a78bfa" />
                </svg>
              </div>
              <CardWrap id="3-1">
                <BudgetCard />
              </CardWrap>
              <StoryBar
                bg="bg-violet-950/50"
                border="border-violet-800/30"
                labelColor="text-violet-300/60"
                textColor="text-violet-100/80"
                text="How Buildscape ran a KES 1.2B project with full financial transparency for their client ↗"
              />
            </div>
          </div>

          <div id="sp-3-2" className="sub-panel flex-col lg:flex-row">
            <SubLeft
              accent="bg-violet-600"
              category="Reporting"
              title="Everyone sees the same numbers."
              desc="Role-based access for your whole team — QS, PM, site foreman, finance, and client. One source of truth, always current."
              href="/collaboration"
              tabs={reportingTabs}
            />
            <div
              className="flex-1 relative overflow-hidden panel-right"
              style={{ minHeight: "300px" }}
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
                  viewBox="0 0 600 540"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <g opacity=".18">
                    <polygon
                      points="80,240 160,200 240,240 160,280"
                      fill="#818cf8"
                    />
                    <polygon
                      points="80,240 80,360 160,400 160,280"
                      fill="#6366f1"
                    />
                    <polygon
                      points="240,240 240,360 160,400 160,280"
                      fill="#4338ca"
                    />
                  </g>
                  <BgDotPattern id="dp8" color="#818cf8" />
                </svg>
              </div>
              <CardWrap id="3-2">
                <CollaborationCard />
              </CardWrap>
              <StoryBar
                bg="bg-indigo-950/50"
                border="border-indigo-800/30"
                labelColor="text-indigo-300/60"
                textColor="text-indigo-100/80"
                text="How Buildscape eliminated weekly status meetings by giving clients live access ↗"
              />
            </div>
          </div>

          <div id="sp-3-3" className="sub-panel flex-col lg:flex-row">
            <SubLeft
              accent="bg-violet-600"
              category="Reporting"
              title="Equipment and materials, tracked."
              desc="Track utilisation, delivery status, and resource allocation across all active sites. Know what's idle before it costs you."
              href="/resources"
              tabs={reportingTabs}
            />
            <div
              className="flex-1 relative overflow-hidden panel-right"
              style={{ minHeight: "300px" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg,#1e1b4b 0%,#2e1065 60%,#0f0d2e 100%)",
                }}
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 600 540"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <g opacity=".18">
                    <polygon
                      points="100,180 180,140 260,180 180,220"
                      fill="#c4b5fd"
                    />
                    <polygon
                      points="100,180 100,300 180,340 180,220"
                      fill="#a78bfa"
                    />
                    <polygon
                      points="260,180 260,300 180,340 180,220"
                      fill="#7c3aed"
                    />
                  </g>
                  <BgDotPattern id="dp9" color="#c4b5fd" />
                </svg>
              </div>
              <CardWrap id="3-3">
                <ResourcesCard />
              </CardWrap>
              <StoryBar
                bg="bg-violet-950/50"
                border="border-violet-800/30"
                labelColor="text-violet-300/60"
                textColor="text-violet-100/80"
                text="How Optima Civil saved KES 800K/month by eliminating idle equipment costs ↗"
              />
            </div>
          </div>
        </div>

        <div className="hatch2" />
      </div>
    </section>
  );
}
