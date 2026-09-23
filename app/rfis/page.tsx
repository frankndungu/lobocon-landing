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
    <span className="text-slate-900">RFIs</span>
  </nav>
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
        id="rfi-iso-dots"
        x="0"
        y="0"
        width="24"
        height="24"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="12" cy="12" r="0.8" fill="#cbd5e1" opacity="0.4" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#rfi-iso-dots)" />
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


// ── Icon ──────────────────────────────────────────────────────────────────────

const PageIcon = () => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    style={{ width: 28, height: 28, flexShrink: 0 }}
  >
    <path
      d="M6 6.5h16a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-9l-4.5 3.5v-3.5H6A1.5 1.5 0 0 1 4.5 17V8A1.5 1.5 0 0 1 6 6.5z"
      fill="#fef3c7"
      stroke="#d97706"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path
      d="M12.2 10.6a1.9 1.9 0 1 1 2.6 1.8c-.5.2-.8.6-.8 1.1v.6"
      fill="none"
      stroke="#b45309"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="14" cy="15.9" r="0.7" fill="#b45309" />
  </svg>
);

// ── Hero mockup: RFI card ─────────────────────────────────────────────────────

const HeroMockup = () => (
  <div className="float-card w-full" style={{ maxWidth: "480px", opacity: 1 }}>
    <div className="px-4 pt-3 pb-2.5 border-b border-slate-100 flex items-start justify-between gap-3">
      <div className="min-w-0">
        <p className="text-[9px] font-black font-mono text-slate-600">
          RFI-042
        </p>
        <h3 className="text-[13px] font-black text-slate-900">
          Rebar spacing, gridline C
        </h3>
        <p className="text-[8px] text-slate-600">
          Primark Apartments · Level 1 slab
        </p>
      </div>
      <span className="shrink-0 px-2 py-0.5 bg-amber-50 text-amber-800 text-[8px] font-bold rounded border border-amber-200">
        Answered, <span className="font-mono">9</span> days late
      </span>
    </div>
    <div className="p-4">
      <div className="relative pl-4 space-y-3">
        <div className="absolute left-1.25 top-1 bottom-1 w-px bg-slate-200" />
        {[
          {
            k: "Issued",
            v: "3 Sep 08:41",
            by: "by K. Otieno, Site agent",
            dot: "bg-slate-900",
          },
          {
            k: "Addressed to",
            v: "M. Wanjiru",
            by: "Resident Engineer",
            dot: "bg-slate-400",
            name: true,
          },
          {
            k: "Due",
            v: "10 Sep",
            by: "7 days to respond",
            dot: "bg-amber-500",
          },
          {
            k: "Answered",
            v: "19 Sep 17:05",
            by: "from the emailed link",
            dot: "bg-red-500",
          },
        ].map((s) => (
          <div key={s.k} className="relative flex items-baseline gap-3">
            <span
              className={`absolute -left-4 top-1 w-2.5 h-2.5 rounded-full border-2 border-white ${s.dot}`}
            />
            <span className="w-20 shrink-0 text-[8px] font-black text-slate-600 uppercase tracking-wider">
              {s.k}
            </span>
            <span
              className={`text-[10px] font-bold text-slate-900 ${s.name ? "" : "font-mono"}`}
            >
              {s.v}
            </span>
            <span className="text-[8px] text-slate-600 truncate">{s.by}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-2">
        <span className="px-2 py-1 rounded-md bg-red-50 border border-red-100 text-[9px] font-bold text-red-700">
          Schedule impact: <span className="font-mono">16</span> days
        </span>
        <span className="px-2 py-1 rounded-md bg-slate-50 border border-slate-200 text-[9px] font-bold text-slate-700">
          Cost impact: <span className="font-mono">KES 0</span>
        </span>
      </div>
    </div>
  </div>
);

// ── Preview 1: Raise an RFI ───────────────────────────────────────────────────

const RaisePreview = () => (
  <BrowserFrame url="app.lobocon.co/projects/primark/rfis/new">
    <div className="px-4 pt-3 pb-2 border-b border-slate-100">
      <p className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">
        New RFI
      </p>
      <h3 className="text-[12px] font-black text-slate-900">
        Primark Apartments
      </h3>
    </div>
    <div className="p-4 grid grid-cols-2 gap-2.5">
      {[
        { k: "Subject", v: "Rebar spacing, gridline C", wide: true },
        { k: "Addressed to", v: "M. Wanjiru, RE" },
        { k: "Response due", v: "10 Sep 2026", mono: true },
        { k: "Priority", v: "High" },
        { k: "Location", v: "Level 1, grid C/4" },
        { k: "Drawing", v: "S-201 Rev D", mono: true },
        { k: "Impact", v: "Schedule: yes · Cost: none" },
      ].map((f) => (
        <div key={f.k} className={f.wide ? "col-span-2" : ""}>
          <p className="text-[7px] font-black text-slate-600 uppercase tracking-wider mb-1">
            {f.k}
          </p>
          <div
            className={`px-2.5 py-1.5 rounded-md border border-slate-200 bg-white text-[9px] text-slate-900 truncate ${f.mono ? "font-mono" : "font-semibold"}`}
          >
            {f.v}
          </div>
        </div>
      ))}
      <div className="col-span-2 flex justify-end pt-1">
        <span className="px-3 py-1.5 rounded-md bg-slate-900 text-[9px] font-semibold text-white">
          Issue RFI
        </span>
      </div>
    </div>
  </BrowserFrame>
);

// ── Preview 2: Answered from a link ───────────────────────────────────────────

const EmailPreview = () => (
  <div className="float-card w-full" style={{ opacity: 1 }}>
    <div className="px-4 pt-3 pb-2.5 border-b border-slate-100">
      <p className="text-[8px] text-slate-600">
        From <span className="font-semibold text-slate-900">Lobocon</span> on
        behalf of K. Otieno
      </p>
      <h3 className="text-[11px] font-black text-slate-900">
        <span className="font-mono">RFI-042</span>: Rebar spacing, gridline C
      </h3>
      <p className="text-[8px] text-slate-600">
        Response due <span className="font-mono">10 Sep</span>
      </p>
    </div>
    <div className="p-4">
      <p className="text-[9px] text-slate-800 leading-relaxed mb-3">
        Drawing S-201 Rev D shows Y16 at 150 centres on gridline C, the bar
        schedule shows 200. Please confirm which governs before the pour.
      </p>
      <span className="inline-block px-3 py-1.5 rounded-md bg-slate-900 text-[9px] font-semibold text-white mb-2">
        Open and answer
      </span>
      <p className="text-[8px] text-slate-600 mb-3">
        No login needed. No app to install.
      </p>
      <div className="grid grid-cols-2 gap-2">
        {[
          { k: "Opened", v: "12 Sep 09:10" },
          { k: "Answered", v: "19 Sep 17:05" },
        ].map((r) => (
          <div
            key={r.k}
            className="px-2.5 py-2 bg-slate-50 border border-slate-100 rounded-lg"
          >
            <p className="text-[7px] font-black text-slate-600 uppercase tracking-wider">
              {r.k}
            </p>
            <p className="text-[9px] font-mono font-bold text-slate-900">
              {r.v}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ── Preview 3: RFI board ──────────────────────────────────────────────────────

const BoardPreview = () => (
  <BrowserFrame url="app.lobocon.co/projects/primark/rfis">
    <div className="px-4 pt-3 pb-2 border-b border-slate-100 flex items-center justify-between">
      <div>
        <p className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">
          RFIs
        </p>
        <h3 className="text-[12px] font-black text-slate-900">
          Primark Apartments
        </h3>
      </div>
      <span className="px-1.5 py-0.5 text-[8px] font-bold rounded border bg-red-50 text-red-700 border-red-100">
        <span className="font-mono">2</span> overdue
      </span>
    </div>
    <div className="p-3 grid grid-cols-4 gap-2">
      {[
        { col: "Draft", cards: [{ id: "RFI-047", t: "Door schedule L2" }] },
        {
          col: "Open",
          cards: [
            { id: "RFI-045", t: "Lift pit depth", late: "4 d" },
            { id: "RFI-046", t: "Kerb detail" },
          ],
        },
        {
          col: "In review",
          cards: [{ id: "RFI-044", t: "Beam B7 cover", late: "2 d" }],
        },
        {
          col: "Closed",
          cards: [
            { id: "RFI-042", t: "Rebar spacing C" },
            { id: "RFI-041", t: "Slab set-down" },
          ],
        },
      ].map((c) => (
        <div key={c.col} className="bg-slate-50 rounded-lg p-1.5 min-w-0">
          <p className="text-[7px] font-black text-slate-600 uppercase tracking-wider px-1 mb-1.5">
            {c.col}
          </p>
          <div className="space-y-1.5">
            {c.cards.map((k: { id: string; t: string; late?: string }) => (
              <div
                key={k.id}
                className={`bg-white border rounded-md p-1.5 ${k.late ? "border-red-200" : "border-slate-200"}`}
              >
                <p className="text-[7px] font-mono font-bold text-slate-600">
                  {k.id}
                </p>
                <p className="text-[8px] font-semibold text-slate-900 truncate">
                  {k.t}
                </p>
                {k.late && (
                  <p className="mt-0.5 text-[7px] font-bold text-red-600">
                    Overdue <span className="font-mono">{k.late}</span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </BrowserFrame>
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
          "Asked in the WhatsApp group.",
          "Answered when someone scrolls back.",
          "No date anyone can defend.",
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
          "Issued to a named person, with a due date set.",
          "A timestamp on issue, on open and on answer.",
          "Overdue RFIs flagged.",
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

// ── FAQ ───────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "Does the person answering need a Lobocon account?",
    a: "No. They answer from the emailed link.",
  },
  {
    q: "What does the record hold?",
    a: "Who raised it, who it was addressed to, when it was issued, opened and answered, the due date, the answer, the references and any impact.",
  },
  {
    q: "When does it ship?",
    a: "Inside your pilot. It is built with your site team on your live project, so the first RFIs in it are yours.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function RFIsPage() {
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-16 lg:pb-20">
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
                    RFIs
                  </span>
                </motion.div>
                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.08}
                  className="text-[38px] sm:text-[48px] lg:text-[58px] font-black text-slate-900 tracking-[-0.025em] leading-[1.03] mb-6"
                >
                  Sixteen days waiting on one answer.{" "}
                  <span className="text-slate-500">Every RFI issued, answered and dated.</span>
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.16}
                  className="text-[17px] text-slate-700 leading-relaxed mb-10 max-w-lg"
                >
                  RFIs raised on site, addressed to a named person, with a due date and a timestamp on every step. The addressee answers from an email link, no account needed, and the record stays with the project.
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
                    className="flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/20 text-sm"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#6ee7b7"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L4 21l1.6-4.4A8.5 8.5 0 1 1 21 12z" />
                    </svg>
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
                className="relative rounded-2xl overflow-hidden"
                style={{ minHeight: "420px" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg,#451a03 0%,#78350f 60%,#1c0a02 100%)",
                  }}
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 600 420"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <pattern
                      id="rfi-hero-dp"
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
                        fill="#fcd34d"
                        opacity="0.15"
                      />
                    </pattern>
                    <rect width="600" height="420" fill="url(#rfi-hero-dp)" />
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
                    bottom: "8%",
                    width: "32px",
                    position: "absolute",
                    opacity: 0.2,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
                  <HeroMockup />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Status strip ── */}
        <div className="w-full px-5 md:px-10 lg:px-16 py-3.5 bg-amber-50 border-y border-amber-200">
          <p className="max-w-7xl mx-auto flex items-center gap-2.5 text-[13px] font-semibold text-amber-800">
            <span className="w-2 h-2 shrink-0 rounded-full bg-amber-500" />
            Ships inside your pilot. Built with your site team on your live
            project.
          </p>
        </div>

        <Hatch />

        {/* ── Problem / Solution ── */}
        <section className="w-full px-5 md:px-10 lg:px-16 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel>The problem</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] font-black text-slate-900 tracking-[-0.02em] leading-[1.03] max-w-3xl mb-4">
                An RFI in a group chat has no owner, no due date and no proof.
              </h2>
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
                Every question has an owner{" "}
                <span className="text-slate-500">and a date.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <FeatureBlock
                  label="Raise"
                  accentDot="bg-amber-500"
                  patternId="rfi-feat-1"
                  icon={<PageIcon />}
                  title="Raise it in a minute"
                  body="Project, subject, addressed to, response due, priority, location, drawing and revision references, and the cost or schedule impact if there is one."
                  preview={<RaisePreview />}
                />
                <FeatureBlock
                  label="Answer"
                  accentDot="bg-emerald-600"
                  patternId="rfi-feat-2"
                  icon={<PageIcon />}
                  title="Answered from a link"
                  body="The addressee gets an email from Lobocon, opens the RFI, and answers. No login, no app to install. The answer and its time land on the record."
                  preview={<EmailPreview />}
                  reverse
                />
                <FeatureBlock
                  label="Board"
                  accentDot="bg-slate-700"
                  patternId="rfi-feat-3"
                  icon={<PageIcon />}
                  title="A board your PM can run"
                  body="Draft, Open, In review and Closed, with overdue RFIs flagged. One place to see what is waiting on whom."
                  preview={<BoardPreview />}
                />
              </div>
            </Reveal>
          </div>
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
                    What site teams{" "}
                    <span className="text-slate-500">ask us first.</span>
                  </h2>
                  <p className="mt-4 text-[15px] text-slate-700 leading-relaxed max-w-sm">
                    WhatsApp us on{" "}
                    <a
                      href={CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-900 font-semibold font-mono hover:underline"
                    >
                      {CONTACT.phoneDisplay}
                    </a>{" "}
                    or email{" "}
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-slate-900 font-semibold hover:underline break-words"
                    >
                      {CONTACT.email}
                    </a>{" "}
                    if your question is not here.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="border-t border-slate-200">
                  {FAQS.map((item) => (
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
                    tag="Blog"
                    title="Why Cash Flow Forecasting Is the Most Overlooked Tool in Construction"
                    href="/blog/cash-flow-forecasting-construction"
                  />
                  <RelatedCard
                    tag="Blog"
                    title="How to Track Variation Orders and Protect Your Margin"
                    href="/blog/variation-orders-margin"
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
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 sm:px-8 py-24 lg:py-32 max-w-3xl mx-auto">
              <Reveal>
                <h2 className="text-[36px] sm:text-[48px] lg:text-[50px] font-black text-slate-900 leading-[1.05] tracking-[-0.025em] mb-6">
                  One live project.
                  <br />
                  Ninety days.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[16px] sm:text-[17px] text-slate-700 leading-relaxed mb-10 max-w-md">
                  The pilot is{" "}
                  <span className="font-mono font-semibold text-slate-900">
                    KES 300,000
                  </span>
                  , credited against your first year if you continue. Message
                  us with how many projects you are running.
                </p>
              </Reveal>
              <Reveal
                delay={0.18}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
              >
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-[14px] font-bold px-8 py-4 rounded-lg transition-colors"
                >
                  <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#6ee7b7"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L4 21l1.6-4.4A8.5 8.5 0 1 1 21 12z" />
                    </svg>
                  Message us on WhatsApp
                </a>
                <Link
                  href="/pilot"
                  className="inline-flex items-center justify-center border border-slate-300 hover:bg-white/60 text-slate-900 text-[14px] font-bold px-8 py-4 rounded-lg transition-colors"
                >
                  See the pilot
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
