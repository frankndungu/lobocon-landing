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
    <span className="text-slate-900">Documents</span>
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
        id="doc-iso-dots"
        x="0"
        y="0"
        width="24"
        height="24"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="12" cy="12" r="0.8" fill="#cbd5e1" opacity="0.4" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#doc-iso-dots)" />
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
    <rect
      x="9"
      y="4.5"
      width="12"
      height="15"
      rx="1.2"
      fill="#e0e7ff"
      stroke="#4f46e5"
      strokeWidth="1.2"
    />
    <rect
      x="6"
      y="8.5"
      width="12"
      height="15"
      rx="1.2"
      fill="#ffffff"
      stroke="#4f46e5"
      strokeWidth="1.2"
    />
    <line
      x1="9"
      y1="13"
      x2="15"
      y2="13"
      stroke="#4f46e5"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <line
      x1="9"
      y1="16"
      x2="15"
      y2="16"
      stroke="#4f46e5"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

// ── Hero mockup: revision table ───────────────────────────────────────────────

const REVISIONS = [
  {
    rev: "Rev D",
    status: "Current",
    statusCls: "bg-emerald-50 text-emerald-700 border-emerald-100",
    issued: "11 Sep 10:02",
    by: "A. Kamau",
    received: [
      { who: "K. Otieno", when: "11 Sep 10:31" },
      { who: "P. Achieng", when: "11 Sep 12:05" },
    ],
  },
  {
    rev: "Rev C",
    status: "Superseded 11 Sep",
    statusCls: "bg-slate-50 text-slate-600 border-slate-200",
    issued: "28 Aug 15:40",
    by: "A. Kamau",
    received: [{ who: "K. Otieno", when: "28 Aug 16:12" }],
  },
  {
    rev: "Rev B",
    status: "Superseded 28 Aug",
    statusCls: "bg-slate-50 text-slate-600 border-slate-200",
    issued: "02 Aug 09:15",
    by: "A. Kamau",
    received: [{ who: "K. Otieno", when: "02 Aug 11:00" }],
  },
];

const REV_COLS = "minmax(0,0.6fr) minmax(0,1.1fr) minmax(0,1.1fr) minmax(0,1.4fr)";

const HeroMockup = () => (
  <div className="float-card w-full" style={{ maxWidth: "520px", opacity: 1 }}>
    <div className="px-4 pt-2.5 pb-2 border-b border-slate-100 flex items-center justify-between gap-3">
      <div>
        <p className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">
          Drawing register · <span className="font-mono">S-201</span>
        </p>
        <h3 className="text-[13px] font-black text-slate-900">
          Level 1 slab reinforcement
        </h3>
        <p className="text-[8px] text-slate-600">Primark Apartments</p>
      </div>
      <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[8px] font-bold rounded border border-emerald-100 font-mono">
        Rev D current
      </span>
    </div>
    <div
      className="grid gap-2 px-4 py-1.5 bg-slate-50 border-b border-slate-100"
      style={{ gridTemplateColumns: REV_COLS }}
    >
      {["Rev", "Status", "Issued", "Received"].map((h) => (
        <span
          key={h}
          className="text-[7px] font-black text-slate-600 uppercase tracking-wider"
        >
          {h}
        </span>
      ))}
    </div>
    {REVISIONS.map((r, i) => (
      <div
        key={r.rev}
        className={`grid gap-2 items-start px-4 py-2.5 border-b border-slate-50 last:border-b-0 ${i > 0 ? "opacity-75" : ""}`}
        style={{ gridTemplateColumns: REV_COLS }}
      >
        <span className="text-[10px] font-black font-mono text-slate-900">
          {r.rev}
        </span>
        <span
          className={`justify-self-start px-1.5 py-0.5 text-[8px] font-bold rounded border ${r.statusCls}`}
        >
          {r.status}
        </span>
        <span className="text-[9px] text-slate-800">
          <span className="font-mono">{r.issued}</span>
          <br />
          <span className="text-slate-600">by {r.by}</span>
        </span>
        <span className="space-y-0.5">
          {r.received.map((x) => (
            <span key={x.who} className="block text-[9px] text-slate-800">
              {x.who}{" "}
              <span className="font-mono text-slate-600">{x.when}</span>
            </span>
          ))}
        </span>
      </div>
    ))}
  </div>
);

// ── Preview 1: Revision chain ─────────────────────────────────────────────────

const ChainPreview = () => (
  <BrowserFrame url="app.lobocon.co/projects/primark/drawings/S-201">
    <div className="px-4 pt-3 pb-2 border-b border-slate-100">
      <p className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">
        Revisions · <span className="font-mono">S-201</span>
      </p>
      <h3 className="text-[12px] font-black text-slate-900">
        Level 1 slab reinforcement
      </h3>
    </div>
    <div className="p-4 space-y-2">
      {[
        { rev: "Rev D", note: "Issued 11 Sep", current: true },
        { rev: "Rev C", note: "Superseded 11 Sep" },
        { rev: "Rev B", note: "Superseded 28 Aug" },
        { rev: "Rev A", note: "Superseded 02 Aug" },
      ].map((r) => (
        <div
          key={r.rev}
          className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg border ${r.current ? "border-emerald-200 bg-emerald-50/40" : "border-slate-200 bg-white"}`}
        >
          <span className="text-[10px] font-black font-mono text-slate-900 w-10">
            {r.rev}
          </span>
          <span className="text-[9px] font-mono text-slate-700">{r.note}</span>
          {r.current ? (
            <span className="ml-auto px-1.5 py-0.5 text-[8px] font-bold rounded border bg-emerald-50 text-emerald-700 border-emerald-100">
              Current
            </span>
          ) : (
            <span className="ml-auto px-1.5 py-0.5 text-[8px] font-black uppercase tracking-widest rounded border-2 border-red-300 text-red-500 -rotate-3">
              Superseded
            </span>
          )}
        </div>
      ))}
    </div>
  </BrowserFrame>
);

// ── Preview 2: Transmittal receipts ───────────────────────────────────────────

const TransmittalPreview = () => (
  <BrowserFrame url="app.lobocon.co/projects/primark/transmittals/TR-019">
    <div className="px-4 pt-3 pb-2 border-b border-slate-100 flex items-center justify-between">
      <div>
        <p className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">
          Transmittal · <span className="font-mono">TR-019</span>
        </p>
        <h3 className="text-[12px] font-black text-slate-900">
          <span className="font-mono">S-201</span> Rev D
        </h3>
      </div>
      <span className="text-[8px] font-mono text-slate-600">
        Issued 11 Sep 10:02
      </span>
    </div>
    <div className="p-4">
      {[
        { who: "K. Otieno", role: "Site agent", opened: "11 Sep 10:31" },
        { who: "P. Achieng", role: "Foreman", opened: "11 Sep 12:05" },
        { who: "S. Njoroge", role: "Steel fixer", opened: null },
      ].map((r) => (
        <div
          key={r.who}
          className="flex items-center gap-2.5 py-2 border-b border-slate-100 last:border-b-0"
        >
          <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[8px] font-black text-slate-700">
            {r.who
              .split(" ")
              .map((p) => p[0])
              .join("")}
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-bold text-slate-900">{r.who}</p>
            <p className="text-[8px] text-slate-600">{r.role}</p>
          </div>
          {r.opened ? (
            <span className="ml-auto text-[9px] font-mono text-emerald-700">
              Opened {r.opened}
            </span>
          ) : (
            <span className="ml-auto px-1.5 py-0.5 text-[8px] font-bold rounded border bg-amber-50 text-amber-800 border-amber-200">
              Not opened yet
            </span>
          )}
        </div>
      ))}
    </div>
  </BrowserFrame>
);

// ── Preview 3: Project files ──────────────────────────────────────────────────

const FilesPreview = () => (
  <BrowserFrame url="app.lobocon.co/projects/primark/files">
    <div className="px-4 pt-3 pb-2 border-b border-slate-100">
      <p className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">
        Project files
      </p>
      <h3 className="text-[12px] font-black text-slate-900">
        Primark Apartments
      </h3>
    </div>
    <div className="p-4">
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { f: "Drawings", n: "142" },
          { f: "Site photos", n: "1,208" },
          { f: "Contracts", n: "12" },
        ].map((d) => (
          <div
            key={d.f}
            className="px-2.5 py-2 bg-slate-50 border border-slate-100 rounded-lg"
          >
            <p className="text-[9px] font-bold text-slate-900">{d.f}</p>
            <p className="text-[8px] font-mono text-slate-600">{d.n} files</p>
          </div>
        ))}
      </div>
      {[
        { n: "S-201_RevD.pdf", s: "8.4 MB", tag: "Structural" },
        { n: "IMG_2231.jpg", s: "4.1 MB", tag: "Slab B2" },
      ].map((f) => (
        <div
          key={f.n}
          className="flex items-center gap-2 py-2 border-b border-slate-100 last:border-b-0"
        >
          <span className="text-[9px] font-mono font-semibold text-slate-900 truncate">
            {f.n}
          </span>
          <span className="px-1.5 py-0.5 rounded bg-indigo-50 border border-indigo-100 text-[7px] font-bold text-indigo-700">
            {f.tag}
          </span>
          <span className="ml-auto text-[8px] font-mono text-slate-600">
            {f.s}
          </span>
        </div>
      ))}
      <p className="mt-3 text-[8px] text-slate-600">
        Documents up to <span className="font-mono">100 MB</span>, photos up
        to <span className="font-mono">20 MB</span>. Encrypted at rest.
      </p>
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
          "Rev C went to the group chat.",
          "Rev D went in an email to the PM.",
          "The site printed Rev C.",
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
          "One register, with Rev D marked current.",
          "Rev C stamped superseded on the date it happened.",
          "Receipts recorded against names.",
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
    q: "What exists today?",
    a: "Project files: upload, folders and tags. Revisions, the superseded stamp and receipts are built inside your pilot.",
  },
  {
    q: "Where are files stored?",
    a: "Encrypted object storage hosted in the EU, with daily backups and a monthly copy delivered to storage you control.",
  },
  {
    q: "Can we take our documents with us?",
    a: "Yes, at any time and at exit, at no charge.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DocumentsPage() {
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
                    Documents
                  </span>
                </motion.div>
                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.08}
                  className="text-[38px] sm:text-[48px] lg:text-[58px] font-black text-slate-900 tracking-[-0.025em] leading-[1.03] mb-6"
                >
                  Site built to Rev C. Rev D was in an email.{" "}
                  <span className="text-slate-500">A drawing register with receipts.</span>
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.16}
                  className="text-[17px] text-slate-700 leading-relaxed mb-10 max-w-lg"
                >
                  Every drawing revision issued through Lobocon records who issued it, who received it and when it was opened. Superseded revisions are stamped, not deleted, so the question of what was current on the 12th has one answer.
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
                      "linear-gradient(135deg,#1e1b4b 0%,#312e81 60%,#0f0d2e 100%)",
                  }}
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 600 420"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <pattern
                      id="doc-hero-dp"
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
                        fill="#a5b4fc"
                        opacity="0.15"
                      />
                    </pattern>
                    <rect width="600" height="420" fill="url(#doc-hero-dp)" />
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
                Two channels, two revisions, one site building to the wrong one.
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
                One register.{" "}
                <span className="text-slate-500">Every revision accounted for.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <FeatureBlock
                  label="Revisions"
                  accentDot="bg-indigo-600"
                  patternId="doc-feat-1"
                  icon={<PageIcon />}
                  title="Revisions in a chain"
                  body="Each drawing carries its revisions in order. The current one is flagged, the rest are stamped superseded with the date, and nothing is deleted."
                  preview={<ChainPreview />}
                />
                <FeatureBlock
                  label="Receipts"
                  accentDot="bg-emerald-600"
                  patternId="doc-feat-2"
                  icon={<PageIcon />}
                  title="Receipts, not read receipts"
                  body="Issue a revision to named people and the register records when each of them opened it. The transmittal is the record."
                  preview={<TransmittalPreview />}
                  reverse
                />
                <FeatureBlock
                  label="Files"
                  accentDot="bg-slate-700"
                  patternId="doc-feat-3"
                  icon={<PageIcon />}
                  title="Files that stay with the project"
                  body="Documents up to 100 MB and photos up to 20 MB, in folders with tags, stored encrypted and exportable at any time."
                  preview={<FilesPreview />}
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
