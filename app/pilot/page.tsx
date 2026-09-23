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

// ── WhatsApp glyph ────────────────────────────────────────────────────────────

const WhatsAppGlyph = ({ color = "#6ee7b7" }: { color?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L4 21l1.6-4.4A8.5 8.5 0 1 1 21 12z" />
  </svg>
);

// ── Content ───────────────────────────────────────────────────────────────────

const GLANCE: { k: string; v: React.ReactNode; mono?: boolean; big?: boolean }[] =
  [
    { k: "Price", v: "KES 300,000", mono: true, big: true },
    { k: "Term", v: "90 days", mono: true },
    { k: "Scope", v: "One live project, unlimited users" },
    { k: "Included", v: "BOQ and programme migration, up to 40 hours" },
    {
      k: "After the pilot",
      v: (
        <>
          From <span className="font-mono">KES 86,500</span> a month, billed
          annually
        </>
      ),
    },
    { k: "If you stop", v: "Export everything, nothing further owed" },
  ];

const RECORDS = [
  {
    tag: "RFIs",
    href: "/rfis",
    title:
      "The RFI went into the WhatsApp group on the 3rd. The answer came on the 19th.",
    body: "Nobody can prove either date. Sixteen days of delay you cannot date is sixteen days you cannot claim.",
    live: false,
  },
  {
    tag: "Documents",
    href: "/documents",
    title: "Site built to Rev C. Rev D was in an email.",
    body: "Rework you pay for, and a dispute with no record of who issued what, to whom, and when.",
    live: false,
  },
  {
    tag: "Scheduling",
    href: "/scheduling",
    title: "Programme says week 14. Site is in week 19.",
    body: "An extension of time claim stands on the critical path and the reason each slip was logged, not on a printout from March.",
    live: true,
  },
  {
    tag: "Reporting",
    href: "/reporting",
    title: "The Engineer questioned your interim certificate.",
    body: "Certified quantities with who entered them, when, and why they changed. Not four spreadsheets with three numbers.",
    live: true,
  },
];

const PHASES = [
  {
    weeks: "Weeks 1 to 2",
    title: "Migration",
    body: "We import your BOQ and your MS Project programme, set up your team with individual logins, and train up to ten users on site. You keep working in the meantime.",
  },
  {
    weeks: "Weeks 3 to 10",
    title: "Live on site",
    body: "Progress is recorded as work happens. CPI, cash position and the critical path update on every entry. Every change carries a name, a time and a reason.",
  },
  {
    weeks: "Weeks 11 to 13",
    title: "Decide",
    body: "You see the annual price in writing by day 70. Continue and the KES 300,000 is credited against year one. Stop and you export everything, nothing further owed.",
  },
];

const ASSURANCES = [
  {
    title: "You own the data",
    body: "Your BOQs, rates and schedules stay yours. Never used to train anything, never shared.",
  },
  {
    title: "Export any time",
    body: "Excel and CSV exports of every BOQ and financial table, at no charge, during and after.",
  },
  {
    title: "A copy in your hands",
    body: "An encrypted backup delivered to storage you control, every month.",
  },
  {
    title: "Data Protection Act, 2019",
    body: "Processed under Kenyan law, encrypted in transit and at rest, daily backups.",
  },
];

const FAQS = [
  {
    q: "What do you need from us to start?",
    a: "Your BOQ in Excel, your programme in MS Project if you have one, and a site agent or QS who will record progress. Two weeks from signature to live.",
  },
  {
    q: "Can we start on a project that is already underway?",
    a: "Yes, and it is usually the better test. We load the BOQ with progress to date, baseline the programme where it stands, and the record starts from there.",
  },
  {
    q: "Who signs, and what do they sign?",
    a: "A one-page order form with the pilot fee, the project and the annual price, plus our standard terms. No procurement marathon.",
  },
  {
    q: "What if we stop after ninety days?",
    a: "You say so by day 75, export everything in Excel, and that is the end of it. The pilot fee is the only money that changes hands.",
  },
];

const H2 =
  "text-[28px] sm:text-[34px] lg:text-[40px] font-black text-slate-900 tracking-[-0.025em] leading-[1.08]";

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PilotPage() {
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
        <section className="w-full px-5 md:px-10 lg:px-16 pt-10 lg:pt-22 pb-9 lg:pb-18">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_440px] gap-9 lg:gap-20 items-center">
            <div className="flex flex-col gap-4.5 lg:gap-6">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
              >
                <SectionLabel>The pilot</SectionLabel>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.08}
                className="text-[38px] sm:text-[48px] lg:text-[58px] font-black text-slate-900 tracking-[-0.025em] leading-[1.03]"
              >
                One live project.
                <br className="hidden sm:block" /> Ninety days.
                <br className="hidden sm:block" /> Then you decide.
              </motion.h1>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.16}
                className="max-w-155 text-[15px] lg:text-[18px] font-medium text-slate-700 leading-relaxed"
              >
                For contractors running more than one live contract. Lobocon
                runs on one of your projects for ninety days, with your BOQ,
                your programme and your site team.{" "}
                <span className="font-mono font-semibold text-slate-900">
                  KES 300,000
                </span>
                , credited against your first year if you continue.
              </motion.p>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.22}
                className="flex flex-col sm:flex-row sm:items-center gap-3.5 sm:mt-2"
              >
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7.5 py-3.75 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/20"
                >
                  <WhatsAppGlyph />
                  Message us on WhatsApp
                </a>
                <Link
                  href="/session"
                  className="w-full sm:w-auto flex items-center justify-center px-7.5 py-3.75 rounded-full border border-slate-200 text-slate-900 font-semibold text-sm hover:bg-slate-50 transition-colors"
                >
                  Book a working session
                </Link>
              </motion.div>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.28}
                className="text-[13px] lg:text-[14px] text-slate-500 leading-relaxed"
              >
                Reply the same working day.{" "}
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono font-semibold text-slate-900 hover:underline"
                >
                  {CONTACT.phoneDisplay}
                </a>
                , or{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-semibold text-slate-900 hover:underline break-words"
                >
                  {CONTACT.email}
                </a>
              </motion.p>
            </div>

            {/* Pilot at a glance */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-900/10 px-5 py-5 lg:px-7.5 lg:py-7"
            >
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-slate-500 pb-3 lg:pb-3.5 border-b border-slate-100">
                Pilot at a glance
              </p>
              {GLANCE.map((row, i) => (
                <div
                  key={row.k}
                  className={`flex items-baseline justify-between gap-4 lg:gap-6 pt-3 lg:pt-3.5 ${i < GLANCE.length - 1 ? "pb-3 lg:pb-3.5 border-b border-slate-100" : ""}`}
                >
                  <span className="shrink-0 text-[13px] lg:text-[14px] font-semibold text-slate-700">
                    {row.k}
                  </span>
                  <span
                    className={`text-right font-semibold text-slate-900 ${row.mono ? "font-mono" : ""} ${row.big ? "text-[20px] lg:text-[22px]" : row.mono ? "text-[15px] lg:text-[16px]" : "text-[13px] lg:text-[14px]"}`}
                  >
                    {row.v}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <Hatch />

        {/* ── What PMs told us ── */}
        <section className="w-full px-5 md:px-10 lg:px-16 py-11 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <Reveal className="max-w-190 mb-6 lg:mb-9">
              <SectionLabel>What PMs told us</SectionLabel>
              <h2 className={H2}>
                Four records that did not exist when they were needed.
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
              {RECORDS.map((r, i) => (
                <Reveal key={r.tag} delay={0.05 * i} className="flex">
                  <div className="flex flex-col gap-2.5 lg:gap-3.5 w-full rounded-2xl border border-slate-200 bg-white p-4.5 lg:p-6">
                    <span className="self-start px-2.5 py-1 rounded-full bg-slate-100 text-[11px] font-bold tracking-widest uppercase text-slate-700">
                      {r.tag}
                    </span>
                    <Link
                      href={r.href}
                      className="text-[16px] lg:text-[18px] font-bold text-slate-900 leading-[1.35] hover:underline decoration-slate-300 underline-offset-4"
                    >
                      {r.title}
                    </Link>
                    <p className="text-[13px] lg:text-[14px] text-slate-700 leading-[1.55]">
                      {r.body}
                    </p>
                    <span
                      className={`mt-auto self-start px-3 py-1 rounded-full text-[12px] font-bold border ${r.live ? "bg-emerald-50 text-emerald-800 border-emerald-200" : "bg-amber-50 text-amber-800 border-amber-200"}`}
                    >
                      {r.live ? "Live today" : "Ships inside your pilot"}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── What the ninety days look like ── */}
        <section className="w-full px-5 md:px-10 lg:px-16 pb-11 lg:pb-20">
          <div className="max-w-7xl mx-auto">
            <Reveal className="max-w-190 mb-4 lg:mb-9">
              <h2 className={H2}>What the ninety days look like.</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
              {PHASES.map((p, i) => (
                <Reveal key={p.title} delay={0.06 * i} className="flex">
                  <div className="flex flex-col gap-2 lg:gap-3 w-full bg-slate-50 border border-slate-200 rounded-2xl p-4.5 lg:p-6.5">
                    <span className="font-mono text-[12px] lg:text-[13px] font-semibold text-slate-500">
                      {p.weeks}
                    </span>
                    <span className="text-[17px] lg:text-[20px] font-extrabold text-slate-900">
                      {p.title}
                    </span>
                    <p className="text-[13px] lg:text-[14px] text-slate-700 leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Arithmetic ── */}
        <section
          className="w-full px-5 md:px-10 lg:px-16 py-10 lg:py-18 border-y"
          style={{ background: "#f5f0e8", borderColor: "#e5e0d6" }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] gap-6 lg:gap-16 items-center">
            <svg
              className="hidden lg:block"
              width="280"
              height="200"
              viewBox="0 0 280 200"
              fill="none"
              aria-hidden="true"
            >
              <polygon
                points="140,20 200,50 140,80 80,50"
                fill="#ede8df"
                stroke="#b8b0a4"
                strokeWidth="1.2"
              />
              <polygon
                points="80,50 80,120 140,150 140,80"
                fill="#e6e0d6"
                stroke="#b8b0a4"
                strokeWidth="1.2"
              />
              <polygon
                points="200,50 200,120 140,150 140,80"
                fill="#ddd7cc"
                stroke="#b8b0a4"
                strokeWidth="1.2"
              />
              <polygon
                points="40,110 100,140 40,170 -20,140"
                fill="none"
                stroke="#b8b0a4"
                strokeWidth="1.2"
                strokeDasharray="5 4"
              />
              <polygon
                points="240,110 280,130 240,150 200,130"
                fill="none"
                stroke="#b8b0a4"
                strokeWidth="1.2"
                strokeDasharray="5 4"
              />
            </svg>
            <Reveal className="flex flex-col gap-4.5 lg:gap-6">
              <h2 className={`${H2} max-w-180`}>
                Priced at about 0.2 percent of contract value.
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
                {[
                  { n: "KES 500M", l: "one contract", cls: "text-slate-900" },
                  {
                    n: "KES 5M",
                    l: "a 1 percent overrun found at month end",
                    cls: "text-red-700",
                  },
                  {
                    n: "KES 1.04M",
                    l: "Lobocon for a year, unlimited users",
                    cls: "text-emerald-700",
                  },
                ].map((f) => (
                  <div key={f.n} className="flex flex-col gap-1 lg:gap-1.5">
                    <span
                      className={`font-mono text-[30px] lg:text-[34px] font-semibold leading-tight ${f.cls}`}
                    >
                      {f.n}
                    </span>
                    <span className="text-[13px] lg:text-[14px] text-slate-700">
                      {f.l}
                    </span>
                  </div>
                ))}
              </div>
              <p className="max-w-180 text-[14px] lg:text-[16px] text-slate-700 leading-relaxed">
                Per-project pricing means the subscription sits in that
                project&apos;s preliminaries, not in head office overhead. One
                overrun caught in week two instead of month three pays for it
                several times over.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── What it costs ── */}
        <section className="w-full px-5 md:px-10 lg:px-16 py-11 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <Reveal className="max-w-190 mb-4 lg:mb-9">
              <h2 className={H2}>What it costs, in full.</h2>
            </Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
              <Reveal className="flex">
                <div className="flex flex-col gap-3 lg:gap-4 w-full bg-slate-900 text-white rounded-2xl p-5.5 lg:p-8">
                  <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-slate-400">
                    The pilot
                  </span>
                  <span className="font-mono text-[34px] lg:text-[44px] font-semibold text-emerald-300 leading-none">
                    KES 300,000
                  </span>
                  <p className="text-[14px] lg:text-[15px] text-slate-200 leading-relaxed">
                    Ninety days on one live project. Migration of your BOQ and
                    programme up to <span className="font-mono">40</span> hours,
                    training for up to ten users, unlimited logins, full
                    platform access. Payable on signature, exclusive of VAT.
                  </p>
                  <p className="text-[13px] lg:text-[14px] font-bold text-amber-200">
                    Credited against your first year if you continue.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.08} className="flex">
                <div className="flex flex-col gap-3 lg:gap-4 w-full bg-white border border-slate-200 rounded-2xl p-5.5 lg:p-8">
                  <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-slate-500">
                    After the pilot
                  </span>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-mono text-[34px] lg:text-[44px] font-semibold text-slate-900 leading-none">
                      KES 100,000
                    </span>
                    <span className="text-[14px] lg:text-[15px] font-semibold text-slate-700">
                      a month
                    </span>
                  </div>
                  <p className="text-[14px] lg:text-[15px] text-slate-700 leading-relaxed">
                    Or{" "}
                    <span className="font-mono font-semibold text-slate-900">
                      KES 1,038,000
                    </span>{" "}
                    a year billed in advance, which works out at{" "}
                    <span className="font-mono">KES 86,500</span> a month. Per
                    project, unlimited users, renewals capped at{" "}
                    <span className="font-mono">10</span> percent a year.
                    Larger portfolios move up a tier by contract value, and we
                    tell you the number before you sign.
                  </p>
                  <p className="text-[13px] lg:text-[14px] text-slate-500">
                    All prices exclusive of VAT.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Assurances ── */}
        <section className="w-full px-5 md:px-10 lg:px-16 pb-11 lg:pb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
            {ASSURANCES.map((a, i) => (
              <Reveal key={a.title} delay={0.05 * i} className="flex">
                <div className="flex flex-col gap-1.5 lg:gap-2.5 w-full p-4 lg:p-5.5 border border-slate-200 rounded-2xl">
                  <span className="text-[14px] lg:text-[15px] font-extrabold text-slate-900">
                    {a.title}
                  </span>
                  <p className="text-[12px] lg:text-[14px] text-slate-700 leading-normal lg:leading-[1.55]">
                    {a.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Before you message ── */}
        <section className="w-full px-5 md:px-10 lg:px-16 pb-11 lg:pb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] gap-3.5 lg:gap-16">
            <Reveal>
              <h2 className={H2}>Before you message.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="border-b border-slate-200">
                {FAQS.map((f) => (
                  <div
                    key={f.q}
                    className="flex flex-col gap-1.5 lg:gap-2 py-4 lg:py-5.5 border-t border-slate-200"
                  >
                    <h3 className="text-[15px] lg:text-[17px] font-bold text-slate-900">
                      {f.q}
                    </h3>
                    <p className="text-[13px] lg:text-[15px] text-slate-700 leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

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
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 sm:px-8 py-12 lg:py-24 max-w-3xl mx-auto">
              <Reveal>
                <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-black text-slate-900 leading-[1.05] tracking-[-0.025em] mb-4 lg:mb-5.5">
                  Message us with how many projects you are running.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[15px] lg:text-[17px] text-slate-700 leading-relaxed mb-4 lg:mb-5.5">
                  You get a reply the same working day.
                </p>
              </Reveal>
              <Reveal delay={0.18} className="w-full sm:w-auto">
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white text-[14px] font-bold px-8.5 py-4 rounded-xl transition-colors"
                >
                  <WhatsAppGlyph />
                  Message us on WhatsApp
                </a>
              </Reveal>
              <Reveal delay={0.24}>
                <p className="mt-4 lg:mt-5.5 text-[13px] lg:text-[15px] text-slate-700 leading-relaxed flex flex-col sm:block">
                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-semibold text-slate-900 hover:underline"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                  <span className="hidden sm:inline"> and </span>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="font-semibold text-slate-900 hover:underline"
                  >
                    {CONTACT.email}
                  </a>
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
