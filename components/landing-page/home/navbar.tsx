"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { CornerDownRight } from "lucide-react";
import { CONTACT } from "@/components/contact/contact";

const Logo = () => (
  <svg
    viewBox="0 0 32 34"
    fill="none"
    style={{ height: "30px", width: "auto" }}
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

const Chevron = () => (
  <svg
    className="w-3.5 h-3.5 text-slate-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const IcoBOQ = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    style={{ width: 28, height: 28, flexShrink: 0 }}
  >
    <polygon
      points="16,3 26,7 16,11 6,7"
      fill="#fef9c3"
      stroke="#ca8a04"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="6,7 16,11 16,14 6,10"
      fill="#fef08a"
      stroke="#ca8a04"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="26,7 16,11 16,14 26,10"
      fill="#fde047"
      stroke="#ca8a04"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="16,11 26,15 16,19 6,15"
      fill="#fef9c3"
      stroke="#ca8a04"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="6,15 16,19 16,22 6,18"
      fill="#fef08a"
      stroke="#ca8a04"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="26,15 16,19 16,22 26,18"
      fill="#fde047"
      stroke="#ca8a04"
      strokeWidth="1.1"
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

const IcoScheduling = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    style={{ width: 28, height: 28, flexShrink: 0 }}
  >
    <polygon
      points="10,4 16,7 16,13 10,10"
      fill="#fce7f3"
      stroke="#db2777"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="16,7 22,4 22,10 16,13"
      fill="#fbcfe8"
      stroke="#db2777"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="10,4 16,1 22,4 16,7"
      fill="#fdf2f8"
      stroke="#db2777"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="16,13 28,8 28,14 16,19"
      fill="#fbcfe8"
      stroke="#db2777"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="16,19 28,14 28,20 16,25"
      fill="#fce7f3"
      stroke="#db2777"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="16,13 22,10 28,13 22,16"
      fill="#fdf2f8"
      stroke="#db2777"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
  </svg>
);

const IcoPvA = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    style={{ width: 28, height: 28, flexShrink: 0 }}
  >
    <polygon
      points="6,12 12,9 18,12 12,15"
      fill="#e0f2fe"
      stroke="#0284c7"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="6,12 12,15 12,22 6,19"
      fill="#f0f9ff"
      stroke="#0284c7"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="18,12 12,15 12,22 18,19"
      fill="#bae6fd"
      stroke="#0284c7"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="16,5 22,2 28,5 22,8"
      fill="#fed7aa"
      stroke="#ea580c"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="16,5 22,8 22,22 16,19"
      fill="#fff7ed"
      stroke="#ea580c"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="28,5 22,8 22,22 28,19"
      fill="#fdba74"
      stroke="#ea580c"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
  </svg>
);

const IcoCollab = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    style={{ width: 28, height: 28, flexShrink: 0 }}
  >
    <polygon
      points="14,3 22,7 14,11 6,7"
      fill="#d1fae5"
      stroke="#059669"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="6,7 14,11 14,18 6,14"
      fill="#ecfdf5"
      stroke="#059669"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="22,7 14,11 14,18 22,14"
      fill="#6ee7b7"
      stroke="#059669"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="18,11 26,15 18,19 10,15"
      fill="#a7f3d0"
      stroke="#059669"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="10,15 18,19 18,26 10,22"
      fill="#d1fae5"
      stroke="#059669"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="26,15 18,19 18,26 26,22"
      fill="#6ee7b7"
      stroke="#059669"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
  </svg>
);

const IcoResources = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    style={{ width: 28, height: 28, flexShrink: 0 }}
  >
    <polygon
      points="16,8 28,13 16,18 4,13"
      fill="#ede9fe"
      stroke="#7c3aed"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="4,13 16,18 16,22 4,17"
      fill="#f5f3ff"
      stroke="#7c3aed"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="28,13 16,18 16,22 28,17"
      fill="#ddd6fe"
      stroke="#7c3aed"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="20,3 25,6 20,9 15,6"
      fill="#c4b5fd"
      stroke="#7c3aed"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="15,6 20,9 20,12 15,9"
      fill="#ede9fe"
      stroke="#7c3aed"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <polygon
      points="25,6 20,9 20,12 25,9"
      fill="#a78bfa"
      stroke="#7c3aed"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
  </svg>
);

const IcoPropDev = () => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    style={{ width: 28, height: 28, flexShrink: 0 }}
  >
    <polygon
      points="14,4 22,8 14,12 6,8"
      fill="#dbeafe"
      stroke="#3b82f6"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <polygon
      points="6,8 14,12 14,20 6,16"
      fill="#eff6ff"
      stroke="#3b82f6"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <polygon
      points="22,8 14,12 14,20 22,16"
      fill="#bfdbfe"
      stroke="#3b82f6"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

const IcoInfra = () => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    style={{ width: 28, height: 28, flexShrink: 0 }}
  >
    <polygon
      points="14,3 20,6 14,9 8,6"
      fill="#d1fae5"
      stroke="#10b981"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <polygon
      points="8,6 14,9 14,18 8,15"
      fill="#ecfdf5"
      stroke="#10b981"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <polygon
      points="20,6 14,9 14,18 20,15"
      fill="#a7f3d0"
      stroke="#10b981"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

const IcoEng = () => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    style={{ width: 28, height: 28, flexShrink: 0 }}
  >
    <polygon
      points="14,3 20,6 14,9 8,6"
      fill="#e0e7ff"
      stroke="#6366f1"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <polygon
      points="8,6 14,9 14,18 8,15"
      fill="#eef2ff"
      stroke="#6366f1"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <polygon
      points="20,6 14,9 14,18 20,15"
      fill="#c7d2fe"
      stroke="#6366f1"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

const IcoBlog = () => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    style={{ width: 26, height: 26, flexShrink: 0, marginTop: 1 }}
  >
    <rect
      x="5"
      y="5"
      width="18"
      height="18"
      rx="2"
      fill="none"
      stroke="#64748b"
      strokeWidth="1.2"
    />
    <line
      x1="9"
      y1="10"
      x2="19"
      y2="10"
      stroke="#64748b"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <line
      x1="9"
      y1="14"
      x2="19"
      y2="14"
      stroke="#64748b"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <line
      x1="9"
      y1="18"
      x2="14"
      y2="18"
      stroke="#64748b"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const IcoEvents = () => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    style={{ width: 26, height: 26, flexShrink: 0, marginTop: 1 }}
  >
    <rect
      x="5"
      y="7"
      width="18"
      height="16"
      rx="2"
      fill="none"
      stroke="#64748b"
      strokeWidth="1.2"
    />
    <line
      x1="9"
      y1="7"
      x2="9"
      y2="4"
      stroke="#64748b"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <line
      x1="19"
      y1="7"
      x2="19"
      y2="4"
      stroke="#64748b"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <line x1="5" y1="11" x2="23" y2="11" stroke="#64748b" strokeWidth="1.2" />
  </svg>
);

const IcoTutorials = () => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    style={{ width: 26, height: 26, flexShrink: 0, marginTop: 1 }}
  >
    <circle
      cx="14"
      cy="14"
      r="9"
      fill="none"
      stroke="#64748b"
      strokeWidth="1.2"
    />
    <polygon
      points="11,10 20,14 11,18"
      fill="none"
      stroke="#64748b"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

const IcoHelp = () => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    style={{ width: 26, height: 26, flexShrink: 0, marginTop: 1 }}
  >
    <circle
      cx="14"
      cy="14"
      r="9"
      fill="none"
      stroke="#64748b"
      strokeWidth="1.2"
    />
    <line
      x1="14"
      y1="10"
      x2="14"
      y2="14"
      stroke="#64748b"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="14" cy="17" r="0.8" fill="#64748b" />
  </svg>
);

const IcoAbout = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    style={{ width: 32, height: 32, flexShrink: 0 }}
  >
    <polygon
      points="16,3 24,7 16,11 8,7"
      fill="#e2e8f0"
      stroke="#475569"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <polygon
      points="8,7 16,11 16,24 8,20"
      fill="#f1f5f9"
      stroke="#475569"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <polygon
      points="24,7 16,11 16,24 24,20"
      fill="#cbd5e1"
      stroke="#475569"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <rect x="10" y="15" width="3" height="3" rx="0.3" fill="#94a3b8" />
    <rect x="19" y="15" width="3" height="3" rx="0.3" fill="#94a3b8" />
    <rect x="13" y="20" width="6" height="4" rx="0.3" fill="#94a3b8" />
  </svg>
);

const IcoRFI = () => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    style={{ width: 28, height: 28, flexShrink: 0 }}
  >
    <path
      d="M6 6.5h16a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-9l-4.5 3.5v-3.5H6A1.5 1.5 0 0 1 4.5 17V8A1.5 1.5 0 0 1 6 6.5z"
      fill="none"
      stroke="#64748b"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path
      d="M12.2 10.6a1.9 1.9 0 1 1 2.6 1.8c-.5.2-.8.6-.8 1.1v.6"
      fill="none"
      stroke="#64748b"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="14" cy="15.9" r="0.7" fill="#64748b" />
  </svg>
);

const IcoDocs = () => (
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
      fill="none"
      stroke="#64748b"
      strokeWidth="1.2"
    />
    <rect
      x="6"
      y="8.5"
      width="12"
      height="15"
      rx="1.2"
      fill="#ffffff"
      stroke="#64748b"
      strokeWidth="1.2"
    />
    <line
      x1="9"
      y1="13"
      x2="15"
      y2="13"
      stroke="#64748b"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <line
      x1="9"
      y1="16"
      x2="15"
      y2="16"
      stroke="#64748b"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const IcoReporting = () => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    style={{ width: 28, height: 28, flexShrink: 0 }}
  >
    <rect
      x="6.5"
      y="4.5"
      width="15"
      height="19"
      rx="1.2"
      fill="none"
      stroke="#64748b"
      strokeWidth="1.2"
    />
    <line
      x1="9.5"
      y1="9"
      x2="18.5"
      y2="9"
      stroke="#64748b"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <line
      x1="9.5"
      y1="12"
      x2="18.5"
      y2="12"
      stroke="#64748b"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <line
      x1="9.5"
      y1="15"
      x2="15"
      y2="15"
      stroke="#64748b"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M12 19l1.8 1.6 3.4-3.6"
      fill="none"
      stroke="#64748b"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ── Nav data ──────────────────────────────────────────────────────────────────

const platformSections = [
  {
    title: "Commercial",
    links: [
      {
        label: "BOQ Management",
        desc: "Import, track, and manage bills of quantities live.",
        icon: <IcoBOQ />,
        href: "/boq",
      },
      {
        label: "Earned Value",
        desc: "CPI and SPI from live BOQ progress.",
        icon: <IcoEV />,
        href: "/earned-value",
      },
      {
        label: "Cash Flow",
        desc: "Forecast and track project cash positions.",
        icon: <IcoCashFlow />,
        href: "/cash-flow",
      },
    ],
  },
  {
    title: "Execution",
    links: [
      {
        label: "Scheduling",
        desc: "MS Project import, CPM critical path.",
        icon: <IcoScheduling />,
        href: "/scheduling",
      },
      {
        label: "Planned vs Actual",
        desc: "Weekly site measurement, verified before billing.",
        icon: <IcoPvA />,
        href: "/planned-vs-actual",
      },
      {
        label: "Resources",
        desc: "Labour, materials, fuel, subcontractors, equipment.",
        icon: <IcoResources />,
        href: "/resources",
      },
      {
        label: "RFIs",
        desc: "Issued, answered, timestamped. Ships inside the pilot.",
        icon: <IcoRFI />,
        href: "/rfis",
      },
      {
        label: "Documents",
        desc: "Drawing revisions with receipts. Ships inside the pilot.",
        icon: <IcoDocs />,
        href: "/documents",
      },
    ],
  },
  {
    title: "Reporting",
    links: [
      {
        label: "Reporting",
        desc: "Certified quantities with a name, a time and a reason.",
        icon: <IcoReporting />,
        href: "/reporting",
      },
      {
        label: "Collaboration",
        desc: "Same numbers for the QS, the PM, the client and the Engineer.",
        icon: <IcoCollab />,
        href: "/collaboration",
      },
    ],
  },
];

const solutionLinks = [
  { label: "Property Developers", icon: <IcoPropDev /> },
  { label: "Infrastructure Firms", icon: <IcoInfra /> },
  { label: "Engineering Firms", icon: <IcoEng /> },
];

const resourceLinks = [
  {
    label: "Blog",
    desc: "Construction insights and product updates.",
    icon: <IcoBlog />,
  },
  {
    label: "Events",
    desc: "Webinars, demos, and community meetups.",
    icon: <IcoEvents />,
  },
  {
    label: "Tutorials",
    desc: "Step-by-step guides for every feature.",
    icon: <IcoTutorials />,
  },
  {
    label: "Help Center",
    desc: "Documentation and support articles.",
    icon: <IcoHelp />,
  },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      navRef.current?.classList.toggle("nav-scrolled", window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        document.getElementById("mobile-menu")?.classList.remove("open");
        document.body.style.overflow = "";
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function openMenu() {
    document.getElementById("mobile-menu")?.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    document.getElementById("mobile-menu")?.classList.remove("open");
    document.body.style.overflow = "";
  }

  function toggleSection(id: string) {
    document.getElementById("section-" + id)?.classList.toggle("open");
  }

  return (
    <>
      {/* ── Mobile Menu ── */}
      <div id="mobile-menu">
        <div className="flex items-center justify-between px-5 py-5 border-b border-slate-100">
          <Link href="/" className="flex items-center gap-2.5">
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
          <button
            onClick={closeMenu}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
          >
            <svg
              className="w-5 h-5 text-slate-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 px-4 py-3">
          {/* Platform */}
          <div className="border-b border-slate-100">
            <button
              onClick={() => toggleSection("platform")}
              className="w-full flex items-center gap-2.5 px-3 py-4 text-[15px] font-semibold text-slate-900"
            >
              <CornerDownRight className="w-4 h-4 text-slate-900" />
              Platform
            </button>
            <div id="section-platform" className="mobile-section-content pb-3">
              {platformSections.map((group) => (
                <div key={group.title}>
                  <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest px-3 mt-3 mb-2">
                    {group.title}
                  </p>
                  {group.links.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50"
                    >
                      {item.icon}
                      <span className="text-sm font-semibold text-slate-800">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="border-b border-slate-100">
            <button
              onClick={() => toggleSection("solutions")}
              className="w-full flex items-center gap-2.5 px-3 py-4 text-[15px] font-semibold text-slate-900"
            >
              <CornerDownRight className="w-4 h-4 text-slate-900" />
              Solutions
            </button>
            <div id="section-solutions" className="mobile-section-content pb-3">
              {solutionLinks.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 cursor-default"
                >
                  {item.icon}
                  <span className="text-sm font-semibold text-slate-800">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="border-b border-slate-100">
            <button
              onClick={() => toggleSection("resources")}
              className="w-full flex items-center gap-2.5 px-3 py-4 text-[15px] font-semibold text-slate-900"
            >
              <CornerDownRight className="w-4 h-4 text-slate-900" />
              Resources
            </button>
            <div id="section-resources" className="mobile-section-content pb-3">
              {resourceLinks.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 cursor-default"
                >
                  {item.icon}
                  <span className="text-sm font-semibold text-slate-800">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="border-b border-slate-100">
            <button
              onClick={() => toggleSection("company")}
              className="w-full flex items-center gap-2.5 px-3 py-4 text-[15px] font-semibold text-slate-900"
            >
              <CornerDownRight className="w-4 h-4 text-slate-900" />
              Company
            </button>
            <div id="section-company" className="mobile-section-content pb-3">
              <Link
                href="/about"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50"
              >
                <IcoAbout />
                <span className="text-sm font-semibold text-slate-800">
                  About
                </span>
              </Link>
            </div>
          </div>

          {/* Pilot */}
          <div className="border-b border-slate-100">
            <Link
              href="/pilot"
              onClick={closeMenu}
              className="w-full flex items-center gap-2.5 px-3 py-4 text-[15px] font-semibold text-slate-900"
            >
              <CornerDownRight className="w-4 h-4 text-slate-900" />
              Pilot
            </Link>
          </div>
        </div>

        <div className="px-4 py-5 border-t border-slate-100 flex flex-col gap-3">
          <Link
            href="/session"
            className="w-full py-3.5 rounded-full bg-slate-900 text-white text-[15px] font-semibold text-center hover:bg-slate-800 transition-colors"
          >
            Book a session
          </Link>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-full border border-slate-200 text-slate-900 text-[15px] font-semibold text-center hover:bg-slate-50 transition-colors"
          >
            WhatsApp us
          </a>
          <a
            href="https://app.lobocon.co/login"
            className="w-full py-3.5 rounded-full border border-slate-200 text-slate-900 text-[15px] font-semibold text-center hover:bg-slate-50 transition-colors"
          >
            Log in
          </a>
        </div>
      </div>

      {/* ── Main Nav ── */}
      <nav
        id="main-nav"
        ref={navRef}
        className="sticky top-0 z-50 bg-white flex items-center justify-between px-5 md:px-10 lg:px-16 py-4 md:py-5 border-b border-slate-100 transition-shadow duration-300"
      >
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Logo />
          <span
            style={{
              fontSize: "20px",
              fontWeight: 800,
              color: "#1e293b",
              letterSpacing: "-0.4px",
            }}
          >
            lobocon
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-slate-800">
          {/* Platform */}
          <div className="nav-item">
            <span className="flex items-center gap-1 cursor-pointer hover:text-slate-900 transition-colors py-2">
              Platform <Chevron />
            </span>
            <div className="dropdown" style={{ width: "700px" }}>
              <div className="flex">
                {platformSections.map((section, si) => (
                  <div
                    key={section.title}
                    className="flex-1 p-5"
                    style={{
                      borderRight:
                        si < platformSections.length - 1
                          ? "1px solid #f1f5f9"
                          : "none",
                    }}
                  >
                    <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-4">
                      {section.title}
                    </p>
                    {section.links.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="dd-row flex items-start gap-3 p-2.5 cursor-pointer mb-1 rounded-lg"
                      >
                        {item.icon}
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {item.label}
                          </p>
                          <p className="text-xs text-slate-800 mt-0.5 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="nav-item">
            <span className="flex items-center gap-1 cursor-pointer hover:text-slate-900 transition-colors py-2">
              Solutions <Chevron />
            </span>
            <div className="dropdown" style={{ width: "520px" }}>
              <div className="flex">
                <div
                  className="p-6 shrink-0"
                  style={{ width: "200px", borderRight: "1px dashed #f1f5f9" }}
                >
                  <p className="text-base font-bold text-slate-900 mb-1.5">
                    Solutions
                  </p>
                  <p className="text-sm text-slate-800 leading-relaxed">
                    Built for every phase of the project lifecycle.
                  </p>
                </div>
                <div className="flex-1 p-4">
                  {solutionLinks.map((item, i) => (
                    <div
                      key={item.label}
                      className="dd-row flex items-center gap-3 p-3 cursor-default"
                      style={{
                        borderBottom:
                          i < solutionLinks.length - 1
                            ? "1px solid #f1f5f9"
                            : "none",
                      }}
                    >
                      {item.icon}
                      <p className="text-sm font-semibold text-slate-900">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="nav-item">
            <span className="flex items-center gap-1 cursor-pointer hover:text-slate-900 transition-colors py-2">
              Resources <Chevron />
            </span>
            <div className="dropdown" style={{ width: "480px" }}>
              <div
                className="p-4"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "4px",
                }}
              >
                {resourceLinks.map((item, i) => (
                  <div
                    key={item.label}
                    className="dd-row flex items-start gap-3 p-3 cursor-default"
                    style={{
                      borderBottom: i < 2 ? "1px solid #f1f5f9" : "none",
                      borderRight: i % 2 === 0 ? "1px solid #f1f5f9" : "none",
                    }}
                  >
                    {item.icon}
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {item.label}
                      </p>
                      <p className="text-xs text-slate-800 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="nav-item">
            <span className="flex items-center gap-1 cursor-pointer hover:text-slate-900 transition-colors py-2">
              Company <Chevron />
            </span>
            <div className="dropdown" style={{ width: "420px" }}>
              <div className="flex">
                <div
                  className="p-6 shrink-0"
                  style={{ width: "190px", borderRight: "1px dashed #f1f5f9" }}
                >
                  <p className="text-base font-bold text-slate-900 mb-1.5">
                    More about Lobocon
                  </p>
                  <p className="text-sm text-slate-800 leading-relaxed">
                    Building the connected construction platform for Africa.
                  </p>
                </div>
                <div className="flex-1 p-4">
                  <div className="dd-row flex items-center gap-3 p-3 cursor-pointer">
                    <IcoAbout />
                    <Link
                      href="/about"
                      className="text-sm font-semibold text-slate-900"
                    >
                      About
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pilot */}
          <Link
            href="/pilot"
            className="flex items-center gap-1 cursor-pointer hover:text-slate-900 transition-colors py-2"
          >
            Pilot
          </Link>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href="https://app.lobocon.co/login"
            className="px-5 py-2.5 text-[14px] font-medium text-slate-800 hover:text-slate-900 transition-colors"
          >
            Log in
          </a>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-[14px] font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L4 21l1.6-4.4A8.5 8.5 0 1 1 21 12z" />
            </svg>
            WhatsApp us
          </a>
          <Link
            href="/session"
            className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-[14px] font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
          >
            Book a session
          </Link>
        </div>

        {/* Mobile: WhatsApp and hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message us on WhatsApp"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L4 21l1.6-4.4A8.5 8.5 0 1 1 21 12z" />
            </svg>
          </a>
          <button
            onClick={openMenu}
            aria-label="Open menu"
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
          >
            <svg
              className="w-5 h-5 text-slate-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}
