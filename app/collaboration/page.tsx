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
    <span className="text-slate-900">Collaboration</span>
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
        id="col-iso-dots"
        x="0"
        y="0"
        width="24"
        height="24"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="12" cy="12" r="0.8" fill="#cbd5e1" opacity="0.4" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#col-iso-dots)" />
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

const PILL = {
  dark: "bg-slate-900 text-white",
  line: "border border-slate-200 text-slate-900",
  danger: "border border-slate-200 text-red-700",
} as const;

const Pill = ({
  tone,
  children,
}: {
  tone: keyof typeof PILL;
  children: string;
}) => (
  <span
    className={`inline-flex items-center rounded-full px-4 py-2 text-[12px] font-semibold ${PILL[tone]}`}
  >
    {children}
  </span>
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
    <circle cx="10" cy="10" r="4" />
    <circle cx="19" cy="12" r="3" />
    <path d="M3 23c0-4 3-7 7-7s7 3 7 7M17 23c0-3 2-5 5-5" />
  </svg>
);

const FieldLabel = ({ children }: { children: string }) => (
  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
    {children}
  </p>
);

const Field = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={`rounded-lg border border-slate-200 px-3 py-2.5 text-[13px] ${className}`}
  >
    {children}
  </div>
);

// ── Hero card: team access ────────────────────────────────────────────────────

const TEAM: {
  member: string;
  kind: string;
  role: string;
  sees: string;
  tone: keyof typeof CHIP;
  status: string;
}[] = [
  {
    member: "J. Kariuki",
    kind: "Internal",
    role: "Project Manager",
    sees: "Full access",
    tone: "g",
    status: "Active",
  },
  {
    member: "A. Mwangi",
    kind: "Internal",
    role: "Quantity Surveyor",
    sees: "BOQ and cost",
    tone: "g",
    status: "Active",
  },
  {
    member: "S. Mwita",
    kind: "Internal",
    role: "Site Foreman",
    sees: "Progress only",
    tone: "g",
    status: "Active",
  },
  {
    member: "Client view",
    kind: "External",
    role: "Viewer",
    sees: "Read-only dashboard",
    tone: "g",
    status: "Active",
  },
  {
    member: "qs@consultant.co.ke",
    kind: "External",
    role: "Financial Viewer",
    sees: "BOQ, summaries, reports",
    tone: "a",
    status: "Invited 2 days ago",
  },
];

const HeroCard = () => (
  <Card>
    <CardHead
      title="Team access, Block A"
      sub="Role-based permissions, 4 members, 1 pending"
      right={<Pill tone="dark">Invite</Pill>}
    />
    <div className="overflow-x-auto">
      <table className={TABLE}>
        <thead>
          <tr>
            <th className={TH}>Member</th>
            <th className={TH}>Role</th>
            <th className={TH}>Sees</th>
            <th className={`${TH} text-right`}>Status</th>
          </tr>
        </thead>
        <tbody>
          {TEAM.map((t) => (
            <tr key={t.member}>
              <td className={TD}>
                <span className="block font-bold text-slate-900">
                  {t.member}
                </span>
                <span className="block text-[11px] text-slate-500">
                  {t.kind}
                </span>
              </td>
              <td className={TD}>{t.role}</td>
              <td className={TD}>{t.sees}</td>
              <td className={`${TD} text-right`}>
                <Chip tone={t.tone}>{t.status}</Chip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);

// ── Preview 1: Invite ─────────────────────────────────────────────────────────

const InvitePreview = () => (
  <Card className="max-w-110">
    <CardHead
      title="Invite collaborator"
      sub="They get access to this project"
    />
    <div className="px-4.5 py-4">
      <FieldLabel>Type</FieldLabel>
      <div className="grid grid-cols-2 mb-3.5 overflow-hidden rounded-lg border border-slate-200 text-center text-[13px] font-semibold">
        <span className="p-2.25 text-slate-500">Internal</span>
        <span className="p-2.25 bg-slate-900 text-white">External</span>
      </div>
      <FieldLabel>Email</FieldLabel>
      <Field className="mb-3.5">qs@consultant.co.ke</Field>
      <FieldLabel>Role</FieldLabel>
      <Field className="flex justify-between">
        <span>Financial Viewer</span>
        <span className="text-slate-500">v</span>
      </Field>
      <p className="mt-2 mb-3.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-[12px] leading-normal text-slate-700">
        <span className="font-bold">Financial Viewer</span> can see the BOQ,
        budget summaries and financial reports. Cannot edit anything.
      </p>
      <FieldLabel>Message</FieldLabel>
      <Field className="mb-4 text-slate-700">
        Sharing the Block A BOQ for your cost review.
      </Field>
      <div className="flex justify-end gap-2.5">
        <Pill tone="line">Cancel</Pill>
        <Pill tone="dark">Send invite</Pill>
      </div>
    </div>
  </Card>
);

// ── Preview 2: Roles ──────────────────────────────────────────────────────────

const ROLES: {
  role: string;
  desc: string;
  tone: keyof typeof CHIP;
  kind: string;
}[] = [
  {
    role: "Owner",
    desc: "Everything, including billing and removing members. Cannot be removed.",
    tone: "s",
    kind: "System",
  },
  {
    role: "Admin",
    desc: "Everything except billing. Can invite and manage the team.",
    tone: "s",
    kind: "System",
  },
  {
    role: "Financial Viewer",
    desc: "BOQ, budget summaries and financial reports. No edits.",
    tone: "s",
    kind: "System",
  },
  {
    role: "Collaborator",
    desc: "Records progress, raises requisitions, comments. No rates.",
    tone: "s",
    kind: "System",
  },
  {
    role: "Viewer",
    desc: "Read-only dashboard, no financials.",
    tone: "s",
    kind: "System",
  },
  {
    role: "Site Agent, Block A",
    desc: "Progress entries and the site diary only. Built from 6 permissions.",
    tone: "g",
    kind: "Custom",
  },
];

const RolesPreview = () => (
  <Card className="max-w-130">
    {ROLES.map((r) => (
      <div
        key={r.role}
        className="flex items-center justify-between gap-3 px-4.5 py-3.5 border-b border-slate-100 last:border-b-0"
      >
        <div className="min-w-0">
          <p className="text-[13px] font-bold text-slate-900">{r.role}</p>
          <p className="mt-0.5 text-[11px] text-slate-500">
            <M>{r.desc}</M>
          </p>
        </div>
        <Chip tone={r.tone}>{r.kind}</Chip>
      </div>
    ))}
  </Card>
);

// ── Preview 3: External access ────────────────────────────────────────────────

const ExternalPreview = () => (
  <Card className="max-w-120">
    <CardHead
      title="qs@consultant.co.ke"
      sub="External, Financial Viewer, invited by J. Kariuki"
      right={<Chip tone="g">Active</Chip>}
    />
    <div className="px-4.5 py-4">
      <KV k="Financials" v="Summary" text />
      <KV k="Bills visible" v={<M>2 of 7</M>} text />
      <KV k="Can download documents" v="No" text />
      <KV k="Access ends" v="31 Dec 2026" />
      <KV k="Last seen" v="23 Sep, 16:40" />
      <div className="mt-3.5 flex gap-2.5">
        <Pill tone="line">Edit access</Pill>
        <Pill tone="danger">Deactivate</Pill>
      </div>
    </div>
  </Card>
);

// ── Preview 4: Share the programme ────────────────────────────────────────────

const SharePreview = () => (
  <Card className="max-w-115">
    <CardHead
      title="Share the programme"
      sub="Read-only, no login required"
    />
    <div className="px-4.5 py-4">
      <div className="flex gap-2 mb-3">
        <div className="flex-1 min-w-0 truncate rounded-lg border border-slate-200 px-3 py-2.5 font-mono text-[12px] text-slate-700">
          lobocon.co/s/blk-a-programme-7f3k2
        </div>
        <Pill tone="dark">Copy</Pill>
      </div>
      <KV k="Shows" v="Gantt, baseline, critical path" text />
      <KV k="Hides" v="Rates, costs, resource plan" text />
      <KV k="Expires" v="in 30 days" />
      <KV k="Opened" v="4 times, last 23 Sep" />
      <div className="mt-3.5">
        <Pill tone="danger">Revoke link</Pill>
      </div>
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
          The QS has the BOQ
        </li>
        <li className="py-2.75 border-t border-slate-100 text-[15px] text-slate-700 leading-normal">
          The PM has the programme
        </li>
        <li className="py-2.75 border-t border-slate-100 text-[15px] text-slate-700 leading-normal">
          Finance has the expenses
        </li>
        <li className="py-2.75 border-t border-slate-100 text-[15px] text-slate-700 leading-normal">
          The client gets a PDF on the 5th
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
          One project, one set of numbers
        </li>
        <li className="py-2.75 border-t border-slate-100 text-[15px] text-slate-700 leading-normal">
          Each person sees the slice their role allows
        </li>
        <li className="py-2.75 border-t border-slate-100 text-[15px] text-slate-700 leading-normal">
          The client on a live read-only view
        </li>
        <li className="py-2.75 border-t border-slate-100 text-[15px] text-slate-700 leading-normal">
          Every change carries who did it and the permission that allowed it
        </li>
      </ul>
    </div>
  </div>
);

// ── FAQ ───────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "Do clients need an account?",
    a: "For project access, yes, they create a login from the invitation email. The schedule share link needs no login.",
  },
  {
    q: "How many people can we add?",
    a: "Internal users are unlimited. External collaborators are capped by plan, and the number is on your order form.",
  },
  {
    q: "Can we remove someone?",
    a: "Deactivate with a reason and their access ends immediately. Reactivate later if needed. The owner cannot be removed.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CollaborationPage() {
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
                    Collaboration
                  </span>
                </motion.div>
                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.08}
                  className="text-[38px] sm:text-[48px] lg:text-[58px] font-black text-slate-900 tracking-[-0.025em] leading-[1.03] mb-6"
                >
                  The QS, the PM, the client and the Engineer.{" "}
                  <span className="text-slate-500">Same numbers, different permissions.</span>
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.16}
                  className="text-[17px] text-slate-700 leading-relaxed mb-10 max-w-lg"
                >
                  Invite anyone to a project in four fields. Internal staff get the role their job needs. Clients, consultants and inspectors get read-only by default, with financials shown at the level you choose. Every action in the system carries the permission that allowed it.
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
                Five people, five spreadsheets,{" "}
                <span className="text-slate-500">one meeting to reconcile them.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[16px] text-slate-700 max-w-lg mb-10">Everyone is right about their own file.</p>
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
                Four fields to invite.{" "}
                <span className="text-slate-500">Five roles to choose from.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[16px] text-slate-700 max-w-lg mb-10">Four things the module does so the numbers stay shared and the rates stay private.</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <FeatureBlock
                  label="Invite"
                  dot="#10b981"
                  title="A four-field invite"
                  body="Type, email, role, message. Choosing a role shows one plain sentence of what that person will see. External invites default to Viewer, internal to Collaborator. Ten seconds, then the email goes out."
                  preview={<InvitePreview />}
                />
                <FeatureBlock
                  label="Roles"
                  dot="#3b82f6"
                  title="Roles that match the job"
                  body="Owner, Admin, Financial Viewer, Collaborator and Viewer out of the box, plus custom roles built from individual permissions when a firm needs a site agent who can log progress but not see rates."
                  preview={<RolesPreview />}
                  reverse
                />
                <FeatureBlock
                  label="External access"
                  dot="#f59e0b"
                  title="Clients see what you decide"
                  body="Financial visibility at none, summary or detailed. Access scoped to specific bills. Time-boxed access that expires on its own. Deactivate with a reason, reactivate later. The project owner can never be removed by mistake."
                  preview={<ExternalPreview />}
                />
                <FeatureBlock
                  label="Share"
                  dot="#8b5cf6"
                  title="Share the programme without a login"
                  body="A read-only link to the schedule for the Engineer or the client. No account, no download, and it can be revoked."
                  preview={<SharePreview />}
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
                Everyone on the same numbers.{" "}
                <span className="text-slate-500">Nobody on the same spreadsheet.</span>
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
