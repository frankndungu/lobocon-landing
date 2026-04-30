import Link from "next/link";

const FirstCTA = () => {
  return (
    <>
      <div className="hatch" />

      <section className="w-full px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-70">
          {/* LEFT: Copy */}
          <div className="flex flex-col justify-center py-16 lg:py-20 pr-8 sm:pr-14 lg:pr-20 border-r border-slate-200">
            <p className="text-[11px] font-bold tracking-[0.2em] text-slate-900 uppercase mb-5">
              Get started
            </p>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[45px] font-black text-slate-900 leading-[1.05] tracking-[-0.02em] mb-6 max-w-lg">
              Know exactly where
              <br />
              your money is going.
            </h2>
            <p className="text-[15px] text-slate-700 leading-relaxed mb-10 max-w-sm">
              Track your BOQ, cash flow, schedule, and labor in one place. Know
              what is happening on every project before it costs you.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/session"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-[13px] font-bold px-7 py-3.5 rounded-lg transition-colors"
              >
                Book a session
              </Link>
            </div>
          </div>

          {/* RIGHT: Isometric illustration */}
          <div className="relative flex items-center justify-center px-8 py-16 lg:py-20 overflow-hidden bg-slate-50/40">
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <pattern
                id="cta-dots"
                x="0"
                y="0"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="12" cy="12" r="1" fill="#cbd5e1" opacity="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#cta-dots)" />
            </svg>

            <div className="relative w-full max-w-115 h-55 sm:h-65">
              {/* Ghost cube */}
              <svg
                className="absolute ghost-cube"
                style={{ left: "2%", top: "18%", width: "130px" }}
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

              {/* Cube 1: Emerald */}
              <svg
                className="absolute cube-a"
                style={{ left: "22%", top: "5%", width: "160px" }}
                viewBox="0 0 160 136"
                fill="none"
              >
                <polygon
                  points="80,6 148,44 80,82 12,44"
                  fill="#ecfdf5"
                  stroke="#059669"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <polygon
                  points="12,44 12,102 80,140 80,82"
                  fill="#d1fae5"
                  stroke="#059669"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <polygon
                  points="148,44 148,102 80,140 80,82"
                  fill="#6ee7b7"
                  stroke="#059669"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <line
                  x1="80"
                  y1="6"
                  x2="80"
                  y2="82"
                  stroke="#059669"
                  strokeWidth="0.5"
                  strokeDasharray="3 4"
                  opacity=".4"
                />
                <line
                  x1="12"
                  y1="44"
                  x2="148"
                  y2="44"
                  stroke="#059669"
                  strokeWidth="0.5"
                  strokeDasharray="3 4"
                  opacity=".4"
                />
              </svg>

              {/* Cube 2: Amber */}
              <svg
                className="absolute cube-b"
                style={{ left: "46%", top: "28%", width: "128px" }}
                viewBox="0 0 128 108"
                fill="none"
              >
                <polygon
                  points="64,6 118,34 64,62 10,34"
                  fill="#fef9c3"
                  stroke="#ca8a04"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <polygon
                  points="10,34 10,84 64,112 64,62"
                  fill="#fef08a"
                  stroke="#ca8a04"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <polygon
                  points="118,34 118,84 64,112 64,62"
                  fill="#fde047"
                  stroke="#ca8a04"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <line
                  x1="64"
                  y1="6"
                  x2="64"
                  y2="62"
                  stroke="#ca8a04"
                  strokeWidth="0.5"
                  strokeDasharray="3 4"
                  opacity=".4"
                />
                <line
                  x1="10"
                  y1="34"
                  x2="118"
                  y2="34"
                  stroke="#ca8a04"
                  strokeWidth="0.5"
                  strokeDasharray="3 4"
                  opacity=".4"
                />
              </svg>

              {/* Cube 3: Violet */}
              <svg
                className="absolute cube-c"
                style={{ left: "62%", top: "50%", width: "100px" }}
                viewBox="0 0 100 84"
                fill="none"
              >
                <polygon
                  points="50,6 92,28 50,50 8,28"
                  fill="#ede9fe"
                  stroke="#7c3aed"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <polygon
                  points="8,28 8,66 50,88 50,50"
                  fill="#ddd6fe"
                  stroke="#7c3aed"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <polygon
                  points="92,28 92,66 50,88 50,50"
                  fill="#c4b5fd"
                  stroke="#7c3aed"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Connector lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 460 260"
                preserveAspectRatio="none"
              >
                <line
                  x1="185"
                  y1="195"
                  x2="248"
                  y2="165"
                  stroke="#10b981"
                  strokeWidth="0.8"
                  strokeDasharray="4 5"
                  opacity="0.35"
                />
                <line
                  x1="295"
                  y1="195"
                  x2="335"
                  y2="215"
                  stroke="#ca8a04"
                  strokeWidth="0.8"
                  strokeDasharray="4 5"
                  opacity="0.35"
                />
              </svg>

              {/* Labels */}
              <div
                className="absolute flex items-center gap-1.5"
                style={{ left: "14%", top: "3%" }}
              >
                <div className="w-1.5 h-1.5 rounded-sm bg-emerald-600 shrink-0" />
                <span className="text-[9px] font-bold text-slate-700 uppercase tracking-wider">
                  Commercial
                </span>
              </div>
              <div
                className="absolute flex items-center gap-1.5"
                style={{ left: "44%", top: "24%" }}
              >
                <div className="w-1.5 h-1.5 rounded-sm bg-amber-500 shrink-0" />
                <span className="text-[9px] font-bold text-slate-700 uppercase tracking-wider">
                  Execution
                </span>
              </div>
              <div
                className="absolute flex items-center gap-1.5"
                style={{ left: "63%", top: "82%" }}
              >
                <div className="w-1.5 h-1.5 rounded-sm bg-violet-600 shrink-0" />
                <span className="text-[9px] font-bold text-slate-700 uppercase tracking-wider">
                  Reporting
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hatch" />
    </>
  );
};

export default FirstCTA;
