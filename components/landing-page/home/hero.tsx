import Link from "next/link";

const ArrowDown = () => (
  <svg
    className="w-3 h-3"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M19 14l-7 7m0 0l-7-7m7 7V3"
    />
  </svg>
);

const ArrowUp = () => (
  <svg
    className="w-3 h-3"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M5 10l7-7m0 0l7 7m-7-7v18"
    />
  </svg>
);

const Badge = ({ label }: { label: string }) => (
  <div className="px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-[11px] uppercase tracking-widest mb-6">
    {label}
  </div>
);

export default function Hero() {
  return (
    <section className="w-full">
      {/* Mobile */}
      <div className="sm:hidden px-5 pt-12 pb-14 flex flex-col items-center text-center ">
        <Badge label="The connected construction platform" />
        <h1 className="text-[34px] font-black text-slate-900 tracking-tight leading-[1.05]">
          Construction intelligence
          <span className="text-slate-500"> for complete project control.</span>
        </h1>
        <p className="mt-5 text-slate-700 text-base font-medium leading-relaxed">
          Know if your project is profitable before it is too late. One platform
          for tracking your BOQ, planned vs actual, schedule, and cash flow.
        </p>
        <div className="mt-7 flex flex-col gap-3 w-full">
          <Link
            href="/session"
            className="w-full px-8 py-3.5 rounded-full bg-slate-900 text-white font-semibold text-sm text-center hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/20"
          >
            Book a working session
          </Link>
          <a
            href="mailto:sales@lobocon.co"
            className="w-full px-8 py-3.5 rounded-full border border-slate-200 text-slate-900 font-semibold text-sm text-center hover:bg-slate-50 transition-colors"
          >
            Contact Sales
          </a>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 w-full">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-2">
              Portfolio Margin
            </p>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-xs font-semibold text-slate-700">
                P&amp;L:
              </span>
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-50 text-red-700 border border-red-200">
                <ArrowDown />
                14.6%
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-slate-700">
                Spend:
              </span>
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <ArrowUp />
                8.3%
              </span>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-2">
              Phase Progress
            </p>
            <p className="text-2xl font-black text-slate-900 font-mono mb-2">
              56%
            </p>
            <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full"
                style={{ width: "56%" }}
              />
            </div>
            <span className="inline-block mt-2 text-[9px] font-bold bg-red-50 text-red-700 border border-red-200 px-1.5 py-0.5 rounded">
              BELOW TARGET
            </span>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left col-span-2">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">
              Revenue Growth
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg font-black text-slate-900 font-mono">
                  KES 245,345
                </span>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="flex items-end gap-1 h-8">
                <div
                  className="w-4 bg-blue-600 rounded-sm"
                  style={{ height: "80%" }}
                />
                <div
                  className="w-4 bg-slate-200 rounded-sm"
                  style={{ height: "50%" }}
                />
                <div
                  className="w-4 bg-slate-200 rounded-sm"
                  style={{ height: "65%" }}
                />
                <div
                  className="w-4 bg-slate-200 rounded-sm"
                  style={{ height: "40%" }}
                />
                <div
                  className="w-4 bg-slate-200 rounded-sm"
                  style={{ height: "55%" }}
                />
              </div>
            </div>
            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wide mt-1">
              Financial Analytics · Q2 Forecast
            </p>
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div className="hidden sm:flex lg:hidden flex-col items-center text-center w-full px-8 md:px-20 pt-16 pb-20 ">
        <Badge label="The connected construction platform" />
        <h1
          className="w-full font-black text-slate-900 tracking-tight leading-[1.05]"
          style={{ fontSize: "clamp(36px, 5.5vw, 64px)" }}
        >
          Construction intelligence
          <span className="text-slate-500"> for complete project control.</span>
        </h1>
        <p
          className="mt-6 text-slate-700 font-medium leading-relaxed w-full"
          style={{ fontSize: "clamp(15px, 1.8vw, 18px)", maxWidth: "600px" }}
        >
          Know if your project is profitable before it is too late. One platform
          for tracking your BOQ, planned vs actual, schedule, and cash flow.
        </p>
        <div className="mt-10 flex flex-row gap-4">
          <Link
            href="/session"
            className="px-8 py-3.5 rounded-full bg-slate-900 text-white font-semibold text-sm text-center hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/20"
          >
            Book a working session
          </Link>
          <a
            href="mailto:sales@lobocon.co"
            className="px-8 py-3.5 rounded-full border border-slate-200 text-slate-900 font-semibold text-sm text-center hover:bg-slate-50 transition-colors"
          >
            Contact Sales
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-5 w-full">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-3">
              Portfolio Margin
            </p>
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-sm font-semibold text-slate-700">
                P&amp;L:
              </span>
              <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-xs font-bold bg-red-50 text-red-700 border border-red-200">
                <ArrowDown />
                14.6%
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-slate-700">
                Spend:
              </span>
              <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <ArrowUp />
                8.3%
              </span>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-2">
              Phase Progress
            </p>
            <p className="text-2xl font-black text-slate-900 font-mono mb-2">
              56%
            </p>
            <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full"
                style={{ width: "56%" }}
              />
            </div>
            <span className="inline-block mt-2 text-[9px] font-bold bg-red-50 text-red-700 border border-red-200 px-1.5 py-0.5 rounded">
              BELOW TARGET
            </span>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">
              Revenue Growth
            </p>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl font-black text-slate-900 font-mono">
                KES 245,345
              </span>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="flex items-end gap-1.5 h-10 w-full">
              <div
                className="flex-1 bg-blue-600 rounded"
                style={{ height: "80%" }}
              />
              <div
                className="flex-1 bg-slate-200 rounded"
                style={{ height: "50%" }}
              />
              <div
                className="flex-1 bg-slate-200 rounded"
                style={{ height: "65%" }}
              />
              <div
                className="flex-1 bg-slate-200 rounded"
                style={{ height: "40%" }}
              />
              <div
                className="flex-1 bg-slate-200 rounded"
                style={{ height: "55%" }}
              />
            </div>
            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wide mt-2">
              Financial Analytics · Q2
            </p>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block overflow-hidden">
        <div className="flex flex-col items-center text-center px-5 md:px-10 lg:px-16 pt-16 relative z-10">
          <Badge label="The connected construction platform" />
          <h1 className="text-[76px] font-black text-slate-900 tracking-tight max-w-5xl leading-[1.05]">
            Construction intelligence
            <br />
            <span className="text-slate-500">
              for complete project control.
            </span>
          </h1>
          <p className="mt-8 text-slate-700 text-lg max-w-2xl font-medium leading-relaxed">
            Know if your project is profitable before it is too late. One
            platform for tracking your BOQ, planned vs actual, schedule, and
            cash flow.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Link
              href="/session"
              className="px-8 py-3.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/20 text-sm"
            >
              Book a working session
            </Link>
            <a
              href="mailto:support@nexaslab.com"
              className="px-8 py-3.5 rounded-full border border-slate-200 text-slate-900 font-semibold hover:bg-slate-50 transition-colors text-sm"
            >
              Contact Sales
            </a>
          </div>
        </div>

        <div
          className="relative w-full max-w-6xl mx-auto mt-10 pb-8"
          style={{ height: "780px" }}
        >
          <div className="absolute inset-0 border border-dashed border-slate-100 rounded-[100%] top-1/2 -translate-y-1/2 scale-125 opacity-60 pointer-events-none" />
          <div className="absolute inset-0 border border-dashed border-slate-100 rounded-[100%] top-1/2 -translate-y-1/2 scale-[0.85] opacity-60 rotate-12 pointer-events-none" />

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
            style={{ width: "880px", height: "880px" }}
          >
            <div className="absolute inset-0 rounded-full bg-blue-50/20 blur-2xl scale-50 z-0" />
            <img
              src="https://res.cloudinary.com/kwishi/image/upload/v1776147434/download_huod9l.png"
              alt="Construction Site 3D"
              className="w-full h-full object-contain relative z-10"
            />
          </div>

          <div
            className="floating-card absolute left-10 top-12 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-[0_8px_30px_rgba(15,23,42,0.08)] border border-slate-200 flex flex-col gap-4 z-20 pointer-events-none"
            style={
              {
                "--rotation": "-3deg",
                minWidth: "190px",
                opacity: 1,
              } as React.CSSProperties & { "--rotation": string }
            }
          >
            <div>
              <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wide mb-2">
                Portfolio Margin
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-800">
                  P&amp;L:
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold bg-red-50 text-red-700 border border-red-200">
                  <ArrowDown />
                  14.6%
                </span>
              </div>
            </div>
            <div className="w-full h-px bg-slate-100" />
            <div>
              <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wide mb-2">
                Active Spend
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-800">
                  Project:
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ArrowUp />
                  8.3%
                </span>
              </div>
            </div>
          </div>

          <div
            className="floating-card delay-1 absolute left-24 bottom-16 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-[0_8px_30px_rgba(15,23,42,0.08)] border border-slate-200 flex flex-col z-20 pointer-events-none"
            style={
              {
                "--rotation": "2.5deg",
                minWidth: "220px",
                opacity: 1,
              } as React.CSSProperties & { "--rotation": string }
            }
          >
            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wide mb-2">
              Phase Progress
            </p>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl font-black text-slate-900 font-mono tracking-tight">
                56%
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-red-50 text-red-700 border border-red-200">
                BELOW TARGET
              </span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full"
                style={{ width: "56%" }}
              />
            </div>
          </div>

          <div
            className="floating-card delay-2 absolute right-14 top-20 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-[0_8px_30px_rgba(15,23,42,0.08)] border border-slate-200 flex flex-col gap-3 z-20 pointer-events-none"
            style={
              {
                "--rotation": "-2deg",
                minWidth: "220px",
                opacity: 1,
              } as React.CSSProperties & { "--rotation": string }
            }
          >
            <div>
              <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wide mb-1">
                Revenue Growth
              </p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-slate-900 font-mono tracking-tight">
                  KES 245,345
                </span>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>
            <div className="flex items-end gap-1.5 h-14 w-full">
              <div
                className="flex-1 bg-blue-600 rounded"
                style={{ height: "80%" }}
              />
              <div
                className="flex-1 bg-slate-100 rounded"
                style={{ height: "50%" }}
              />
              <div
                className="flex-1 bg-slate-100 rounded"
                style={{ height: "65%" }}
              />
              <div
                className="flex-1 bg-slate-100 rounded"
                style={{ height: "40%" }}
              />
              <div
                className="flex-1 bg-slate-100 rounded"
                style={{ height: "55%" }}
              />
            </div>
            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wide">
              Financial Analytics · Q2 Forecast
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
