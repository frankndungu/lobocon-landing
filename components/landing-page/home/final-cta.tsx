export default function FinalCTA() {
  return (
    <>
      <section style={{ background: "#f5f0e8" }}>
        <div className="relative w-full overflow-hidden">
          {/* Left isometric cubes */}
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
              <pattern
                id="dots-l"
                x="0"
                y="0"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="4" cy="4" r="0.8" fill="#b8b0a4" opacity="0.6" />
              </pattern>
              <polygon
                points="40,110 40,260 140,310 140,160"
                fill="url(#dots-l)"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* Right isometric cubes */}
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
              <pattern
                id="dots-r"
                x="0"
                y="0"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="4" cy="4" r="0.8" fill="#b8b0a4" opacity="0.6" />
              </pattern>
              <polygon
                points="240,230 240,380 140,430 140,280"
                fill="url(#dots-r)"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-24 lg:py-32 max-w-3xl mx-auto">
            <h2 className="text-[36px] sm:text-[48px] lg:text-[58px] font-black text-slate-900 leading-[1.05] tracking-[-0.025em] mb-6">
              Connect your QS,
              <br />
              site, and finance
              <br />
              teams.
            </h2>
            <p className="text-[16px] sm:text-[17px] text-slate-700 leading-relaxed mb-10 max-w-md">
              Lobocon is the missing piece that brings your BOQ, schedule, and
              cash flow together so you can build with confidence.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-[14px] font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Book a session
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
