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
    <span className="text-slate-900">Resources</span>
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
        id="res-iso-dots"
        x="0"
        y="0"
        width="24"
        height="24"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="12" cy="12" r="0.8" fill="#cbd5e1" opacity="0.4" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#res-iso-dots)" />
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
  b: "bg-blue-50 text-blue-700 border-blue-200",
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
    <rect x="4" y="12" width="20" height="10" rx="2" />
    <path d="M8 12V8h12v4M4 17h20" />
  </svg>
);

// ── Resource categories, the colours the product uses ─────────────────────────

const CAT = {
  materials: "#3B82F6",
  equipment: "#F59E0B",
  fuel: "#EF4444",
  labour: "#10B981",
  subcontractors: "#8B5CF6",
  other: "#64748B",
} as const;

const Dot = ({ color }: { color: string }) => (
  <span
    className="inline-block w-2.5 h-2.5 rounded-sm mr-2 align-middle"
    style={{ background: color }}
  />
);

const SmallCaps = ({
  className = "",
  children,
}: {
  className?: string;
  children: string;
}) => (
  <p
    className={`text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500 ${className}`}
  >
    {children}
  </p>
);

// ── Hero card: plan composition ───────────────────────────────────────────────

const COMPOSITION = [
  { label: "Materials", color: CAT.materials, value: "318.4M", pct: 52 },
  { label: "Equipment", color: CAT.equipment, value: "79.6M", pct: 13 },
  { label: "Fuel", color: CAT.fuel, value: "49.0M", pct: 8 },
  { label: "Labour", color: CAT.labour, value: "67.4M", pct: 11 },
  {
    label: "Subcontractors",
    color: CAT.subcontractors,
    value: "30.6M",
    pct: 5,
  },
  { label: "Other", color: CAT.other, value: "67.4M", pct: 11 },
];

const HeroCard = () => (
  <Card>
    <CardHead
      title="Resource plan, Lot II access road"
      sub="Plan total against actual to date, week 18 of 78"
      right={<Chip tone="s">6 categories</Chip>}
    />
    <div className="px-4.5 py-4">
      <div className="flex items-baseline justify-between mb-2.5">
        <SmallCaps>Plan total</SmallCaps>
        <span className="font-mono text-[22px] font-semibold">KES 612.4M</span>
      </div>
      <div className="flex h-3.5 rounded-[7px] overflow-hidden mb-3.5">
        {COMPOSITION.map((c) => (
          <span
            key={c.label}
            style={{ width: `${c.pct}%`, background: c.color }}
          />
        ))}
      </div>
      {COMPOSITION.map((c) => (
        <div
          key={c.label}
          className="flex items-baseline justify-between gap-4 py-2.5 border-b border-slate-100 last:border-b-0 text-[13px]"
        >
          <span className="font-semibold text-slate-700">
            <Dot color={c.color} />
            {c.label}
          </span>
          <span className="font-mono font-semibold">
            {c.value}{" "}
            <span className="font-medium text-slate-500">{c.pct}%</span>
          </span>
        </div>
      ))}
    </div>
  </Card>
);

// ── Preview 1: Plan lines ─────────────────────────────────────────────────────

const PLAN: {
  line: string;
  basis: string;
  color: string;
  planned: string;
  used: string;
  actual: string;
  tone: keyof typeof CHIP;
  status: string;
}[] = [
  {
    line: "Cement 42.5N",
    basis: "4,800 bags at KES 890",
    color: CAT.materials,
    planned: "4,272,000",
    used: "2,910 bags",
    actual: "2,589,900",
    tone: "g",
    status: "On track",
  },
  {
    line: "Excavator 20 to 30 t",
    basis: "1,900 h at KES 6,500",
    color: CAT.equipment,
    planned: "12,350,000",
    used: "1,412 h",
    actual: "9,178,000",
    tone: "g",
    status: "On track",
  },
  {
    line: "Diesel, plant fleet",
    basis: "210,000 L at KES 192",
    color: CAT.fuel,
    planned: "40,320,000",
    used: "148,300 L",
    actual: "42,081,600",
    tone: "r",
    status: "Over budget",
  },
  {
    line: "Masons",
    basis: "18 at KES 1,400 a day",
    color: CAT.labour,
    planned: "11,793,600",
    used: "312 days",
    actual: "7,862,400",
    tone: "g",
    status: "On track",
  },
  {
    line: "Line marking subcontract",
    basis: "lump sum",
    color: CAT.subcontractors,
    planned: "4,200,000",
    used: "0",
    actual: "0",
    tone: "s",
    status: "Not started",
  },
];

const PlanPreview = () => (
  <Card className="max-w-150">
    <div className="overflow-x-auto">
      <table className={TABLE}>
        <thead>
          <tr>
            <th className={TH}>Line</th>
            <th className={`${TH} text-right`}>Planned</th>
            <th className={`${TH} text-right`}>Used</th>
            <th className={`${TH} text-right`}>Actual</th>
            <th className={`${TH} text-right`}>Status</th>
          </tr>
        </thead>
        <tbody>
          {PLAN.map((p) => (
            <tr key={p.line}>
              <td className={TD}>
                <span className="whitespace-nowrap font-bold text-slate-900">
                  <Dot color={p.color} />
                  <M>{p.line}</M>
                </span>
                <span className="block text-[11px] text-slate-500 whitespace-nowrap">
                  <M>{p.basis}</M>
                </span>
              </td>
              <td className={`${TD} text-right font-mono`}>{p.planned}</td>
              <td className={`${TD} text-right font-mono whitespace-nowrap`}>
                {p.used}
              </td>
              <td
                className={`${TD} text-right font-mono ${p.tone === "r" ? "text-red-700" : ""}`}
              >
                {p.actual}
              </td>
              <td className={`${TD} text-right`}>
                <Chip tone={p.tone}>{p.status}</Chip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);

// ── Preview 2: Requisition ────────────────────────────────────────────────────

const STAGES = [
  { label: "Draft", text: "text-slate-500", on: false },
  { label: "Pending approval", text: "text-amber-800", on: false },
  { label: "Approved", text: "text-blue-700", on: true },
  { label: "Received", text: "text-emerald-700", on: false },
];

const HISTORY = [
  {
    when: "24 Sep, 08:30",
    what: "S. Cheruiyot raised it. Sub-base layer for pavement build-up.",
  },
  {
    when: "26 Sep, 10:15",
    what: "N. Singh approved it. Approved against the pavement bill.",
  },
  { when: "pending", what: "Received, awaiting GRN." },
];

const RequisitionPreview = () => (
  <div className="w-full max-w-150">
    <div className="grid grid-cols-4 gap-2 mb-3">
      {STAGES.map((s) => (
        <span
          key={s.label}
          className={`text-[10px] font-bold uppercase tracking-[0.1em] ${s.text}`}
        >
          {s.label}
        </span>
      ))}
    </div>
    <div className="grid grid-cols-4 gap-2 mb-3.5">
      {STAGES.map((s) => (
        <span
          key={s.label}
          className={`h-1.5 rounded-[3px] ${s.on ? "bg-blue-500" : "bg-slate-200"}`}
        />
      ))}
    </div>
    <Card>
      <CardHead
        title={
          <>
            <span className="font-mono">tw9-bx2</span> Crushed stone, sub-base
          </>
        }
        sub="Bill 2, Pavement. Sub-base, crushed stone. Due 28 Sep"
        right={<Chip tone="b">Approved</Chip>}
      />
      <div className="px-4.5 py-4">
        <KV k="Quantity" v="500 m3 at KES 2,200" />
        <KV k="Estimate" v="KES 1,100,000" />
        <KV k="Attached" v="quote-quarry.xlsx" text />
        <div className="mt-3.5 pt-3 border-t border-slate-100 space-y-0.5 text-[12px] leading-[1.7] text-slate-700">
          {HISTORY.map((h) => (
            <p key={h.when}>
              <span className="font-mono text-slate-500">{h.when}</span>{" "}
              {h.what}
            </p>
          ))}
        </div>
      </div>
    </Card>
  </div>
);

// ── Preview 3: Site diary ─────────────────────────────────────────────────────

const DiaryPreview = () => (
  <Card className="max-w-105">
    <CardHead
      title="Site diary, Thu 24 Sep"
      sub="Week 18, entered by Eng. Njuguna, 17:42"
      right={<Chip tone="a">Saved offline, will sync</Chip>}
    />
    <div className="px-4.5 py-4">
      <SmallCaps className="mb-1.5">Manpower</SmallCaps>
      <KV
        k="On site"
        v={
          <>
            84{" "}
            <span className="font-medium text-slate-500">
              of <span className="font-mono">90</span> planned
            </span>
          </>
        }
      />
      <KV k="Masons 18, steel fixers 12, labourers 38" v="-6" />
      <SmallCaps className="mt-3.5 mb-1.5">Equipment</SmallCaps>
      <KV k="Excavator 20 to 30 t" v="8.5 h" />
      <KV k="Vibratory roller" v="6.0 h" />
      <SmallCaps className="mt-3.5 mb-1.5">Materials received</SmallCaps>
      <KV k="Cement 42.5N" v="120 bags" />
    </div>
  </Card>
);

// ── Preview 4: Fuel and plant ─────────────────────────────────────────────────

const FUEL = [
  { plant: "Excavator 20 to 30 t", hours: "8.5", rate: "18", litres: "153", kes: "29,376" },
  { plant: "Vibratory roller", hours: "6.0", rate: "12", litres: "72", kes: "13,824" },
  { plant: "Motor grader", hours: "0", rate: "15", litres: "0", kes: "0" },
];

const FuelPreview = () => (
  <Card className="max-w-140">
    <div className="overflow-x-auto">
      <table className={TABLE}>
        <thead>
          <tr>
            <th className={TH}>Plant</th>
            <th className={`${TH} text-right`}>Hours</th>
            <th className={`${TH} text-right`}>L per h</th>
            <th className={`${TH} text-right`}>Litres</th>
            <th className={`${TH} text-right`}>KES</th>
          </tr>
        </thead>
        <tbody>
          {FUEL.map((f) => (
            <tr key={f.plant}>
              <td className={`${TD} font-bold text-slate-900 whitespace-nowrap`}>
                <M>{f.plant}</M>
              </td>
              <td className={`${TD} text-right font-mono`}>{f.hours}</td>
              <td className={`${TD} text-right font-mono`}>{f.rate}</td>
              <td className={`${TD} text-right font-mono`}>{f.litres}</td>
              <td className={`${TD} text-right font-mono`}>{f.kes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="px-4.5 py-3.5 border-t border-slate-200">
      <div className="flex items-center justify-between gap-3 mb-1.5 text-[12px]">
        <span className="font-bold text-slate-900">
          <M>Motor grader utilisation, week 18</M>
        </span>
        <Chip tone="a">Idle 3 days</Chip>
      </div>
      <Bar pct={41} color="#f59e0b" />
      <p className="mt-1.5 text-[11px] text-slate-500">
        <M>41 percent. Dry-hire accruing at KES 12,000 a day.</M>
      </p>
    </div>
  </Card>
);

// ── Preview 5: Recommendations ────────────────────────────────────────────────

const FLAGS: {
  tone: keyof typeof CHIP;
  level: string;
  subject: string;
  text: string;
}[] = [
  {
    tone: "r",
    level: "Critical",
    subject: "Diesel, plant fleet",
    text: "has passed its budget by KES 1.76M. Monitor closely.",
  },
  {
    tone: "a",
    level: "Warning",
    subject: "Cement 42.5N",
    text: "runs out in 9 days at the current rate. Raise a requisition.",
  },
  {
    tone: "a",
    level: "Warning",
    subject: "Motor grader",
    text: "is budgeted but unused past week 1. Confirm it is still required.",
  },
  {
    tone: "g",
    level: "OK",
    subject: "Masons",
    text: "are being consumed within budget.",
  },
];

const FlagsPreview = () => (
  <Card className="max-w-130">
    {FLAGS.map((f) => (
      <div
        key={f.subject}
        className="flex items-center gap-3 px-4.5 py-3.5 border-b border-slate-100 last:border-b-0"
      >
        <Chip tone={f.tone}>{f.level}</Chip>
        <p className="flex-1 text-[13px] leading-normal text-slate-700">
          <span className="font-bold text-slate-900">
            <M>{f.subject}</M>
          </span>{" "}
          <M>{f.text}</M>
        </p>
      </div>
    ))}
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
          One workbook, one owner, one laptop
        </li>
        <li className="py-2.75 border-t border-slate-100 text-[15px] text-slate-700 leading-normal">
          Actuals typed in at month end
        </li>
        <li className="py-2.75 border-t border-slate-100 text-[15px] text-slate-700 leading-normal">
          Fuel estimated, plant hours guessed
        </li>
        <li className="py-2.75 border-t border-slate-100 text-[15px] text-slate-700 leading-normal">
          Subcontractor claims in a separate file
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
          The workbook imported once; lines added by hand survive a re-import
        </li>
        <li className="py-2.75 border-t border-slate-100 text-[15px] text-slate-700 leading-normal">
          The site diary feeds the actuals every day
        </li>
        <li className="py-2.75 border-t border-slate-100 text-[15px] text-slate-700 leading-normal">
          Fuel from machine hours times consumption
        </li>
        <li className="py-2.75 border-t border-slate-100 text-[15px] text-slate-700 leading-normal">
          Requisitions linked to BOQ items, stockout and over-budget flags before the meeting
        </li>
      </ul>
    </div>
  </div>
);

// ── FAQ ───────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "Can we import our existing resource workbook?",
    a: "Yes. The import builds the plan and a re-import refreshes imported lines while leaving the lines you added by hand.",
  },
  {
    q: "Does the site diary work without signal?",
    a: "Yes. Entries save on the phone and sync when it is back online.",
  },
  {
    q: "How are subcontractors handled?",
    a: "As their own category. Each subcontract is a plan line with its own requisitions and claims, tracked against its budget like any other resource.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ResourcesPage() {
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
                    Resources
                  </span>
                </motion.div>
                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.08}
                  className="text-[38px] sm:text-[48px] lg:text-[58px] font-black text-slate-900 tracking-[-0.025em] leading-[1.03] mb-6"
                >
                  Every resource on site, planned and actual.{" "}
                  <span className="text-slate-500">Labour, materials, fuel, subcontractors, equipment.</span>
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.16}
                  className="text-[17px] text-slate-700 leading-relaxed mb-10 max-w-lg"
                >
                  One resource plan per project, in the six categories your QS already uses. Planned cost from quantity and rate, actual cost from what site used, variance and status per line, and requisitions that go from draft to received with a reason at every step.
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
                The resource plan lives in a workbook{" "}
                <span className="text-slate-500">only the QS can open.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[16px] text-slate-700 max-w-lg mb-10">The site never sees the budget line it is spending.</p>
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
                Six categories.{" "}
                <span className="text-slate-500">One plan, one set of actuals.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[16px] text-slate-700 max-w-lg mb-10">Five things the module does with what site records.</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <FeatureBlock
                  label="Planned cost"
                  dot="#3b82f6"
                  title="Six categories, one plan"
                  body="Materials, equipment, labour, subcontractors, fuel and other. Every line carries planned quantity and rate, used quantity, actual cost, variance and a status: not started, in progress, on track, over budget or complete."
                  preview={<PlanPreview />}
                />
                <FeatureBlock
                  label="Requisitions"
                  dot="#f59e0b"
                  title="Requisitions with a reason at every step"
                  body="Draft, pending approval, approved, received. Each requisition links to a BOQ bill and item, carries the quote, the delivery note or the GRN, and a history of who moved it, when, and why."
                  preview={<RequisitionPreview />}
                  reverse
                />
                <FeatureBlock
                  label="Site diary"
                  dot="#10b981"
                  title="The site diary feeds the actuals"
                  body="The site engineer records manpower, equipment hours and materials received each day, on a phone, with or without signal. The diary writes the usage logs and inventory that actual cost is built from, tagged to the programme week."
                  preview={<DiaryPreview />}
                />
                <FeatureBlock
                  label="Fuel and plant"
                  dot="#ef4444"
                  title="Fuel and plant, not guessed"
                  body="Fuel burn is machine hours times consumption at the diesel rate, per plant. Plant utilisation, machine totals and levelling show what is working, what is idle and what is double-booked."
                  preview={<FuelPreview />}
                  reverse
                />
                <FeatureBlock
                  label="Recommendations"
                  dot="#8b5cf6"
                  title="Flags before the stockout"
                  body="Lobocon reads the plan against usage and tells you what to do: raise a requisition before a material runs out, monitor a line that has passed its budget, confirm a resource that is budgeted but idle."
                  preview={<FlagsPreview />}
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
                Know what is idle{" "}
                <span className="text-slate-500">before it costs you.</span>
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
