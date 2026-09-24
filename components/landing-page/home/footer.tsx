import Link from "next/link";
import { CONTACT } from "@/components/contact/contact";

const Logo = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    style={{ width: "28px", height: "28px", flexShrink: 0 }}
  >
    <polygon
      points="16,2 28,8 16,14 4,8"
      fill="none"
      stroke="#1e293b"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <line
      x1="4"
      y1="8"
      x2="4"
      y2="22"
      stroke="#1e293b"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <line
      x1="16"
      y1="14"
      x2="16"
      y2="28"
      stroke="#1e293b"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <line
      x1="28"
      y1="8"
      x2="28"
      y2="22"
      stroke="#1e293b"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <polygon
      points="16,16 28,22 16,28 4,22"
      fill="none"
      stroke="#1e293b"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

type FooterItem = { label: string; href: string };

const PLATFORM: FooterItem[] = [
  { label: "BOQ Management", href: "/boq" },
  { label: "Earned Value", href: "/earned-value" },
  { label: "Cash Flow", href: "/cash-flow" },
  { label: "Scheduling", href: "/scheduling" },
  { label: "Planned vs Actual", href: "/planned-vs-actual" },
  { label: "Resources", href: "/resources" },
  { label: "Reporting", href: "/reporting" },
  { label: "Collaboration", href: "/collaboration" },
  { label: "RFIs", href: "/rfis" },
  { label: "Documents", href: "/documents" },
];

const SOLUTIONS: FooterItem[] = [
  { label: "Property Developers", href: "#" },
  { label: "Infrastructure Firms", href: "#" },
  { label: "Engineering Firms", href: "#" },
  { label: "Quantity Surveyors", href: "#" },
];

const RESOURCES: FooterItem[] = [
  { label: "Blog", href: "#" },
  { label: "Tutorials", href: "#" },
  { label: "Webinars", href: "#" },
  { label: "Events", href: "#" },
  { label: "Documentation", href: "#" },
];

const COMPANY: FooterItem[] = [
  { label: "About", href: "/about" },
  { label: "The pilot", href: "/pilot" },
  { label: "Contact", href: `mailto:${CONTACT.email}` },
];

const ColLabel = ({ label }: { label: string }) => (
  <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-slate-900 mb-4.5">
    {label}
  </p>
);

const footerLinkClass =
  "block text-[15px] text-slate-700 hover:text-slate-900 transition-colors py-1.25";

// Internal routes use Link; mailto and placeholder "#" stay plain anchors.
const FooterLink = ({ label, href }: FooterItem) =>
  href.startsWith("/") ? (
    <Link href={href} className={footerLinkClass}>
      {label}
    </Link>
  ) : (
    <a href={href} className={footerLinkClass}>
      {label}
    </a>
  );

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Main nav grid */}
      <div className="w-full max-w-345 mx-auto px-5 md:px-10 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <Logo />
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  color: "#1e293b",
                  letterSpacing: "-0.4px",
                }}
              >
                lobocon
              </span>
            </Link>
          </div>

          {/* Platform */}
          <div>
            <ColLabel label="Platform" />
            {PLATFORM.map((l) => (
              <FooterLink key={l.label} {...l} />
            ))}
          </div>

          {/* Solutions */}
          <div>
            <ColLabel label="Solutions" />
            {SOLUTIONS.map((l) => (
              <FooterLink key={l.label} {...l} />
            ))}
          </div>

          {/* Resources */}
          <div>
            <ColLabel label="Resources" />
            {RESOURCES.map((l) => (
              <FooterLink key={l.label} {...l} />
            ))}
          </div>

          {/* Company */}
          <div>
            <ColLabel label="Company" />
            {COMPANY.map((l) => (
              <FooterLink key={l.label} {...l} />
            ))}
          </div>
        </div>
      </div>

      <hr className="border-none border-t border-slate-200 m-0" />

      {/* Newsletter strip */}
      <div className="w-full max-w-345 mx-auto px-5 md:px-10 lg:px-16 py-6">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <p className="text-[14px] font-semibold text-slate-900 shrink-0 sm:w-64">
            Get the latest from Lobocon
          </p>
          <div className="flex items-center gap-3 w-full max-w-lg">
            <input
              type="email"
              placeholder="Work email"
              className="flex-1 border border-slate-200 rounded-md px-4 py-2.5 text-[14px] text-slate-900 placeholder-slate-400 outline-none focus:border-slate-400 transition-colors bg-white"
            />
            <button className="shrink-0 bg-slate-900 border border-slate-200 rounded-md px-5 py-2.5 text-[14px] font-semibold text-white transition-colors cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="border-none border-t border-slate-200 m-0" />

      {/* Copyright bar */}
      <div className="w-full max-w-345 mx-auto px-5 md:px-10 lg:px-16 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
            <p className="text-[13px] text-slate-900">
              &copy; Lobocon 2026. All rights reserved.
            </p>
            <p className="text-[13px] text-slate-700">
              WhatsApp{" "}
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono font-semibold text-slate-900"
              >
                {CONTACT.phoneDisplay}
              </a>{" "}
              or{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-semibold text-slate-900 break-words"
              >
                {CONTACT.email}
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[13px] text-slate-700 hover:text-slate-900 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[13px] text-slate-700 hover:text-slate-900 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
