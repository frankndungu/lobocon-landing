import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="/hero-background.svg"
          alt="background hero"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 md:pt-36 pb-16 sm:pb-20 lg:pt-44 lg:pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-14 lg:gap-20 items-center">
          {/* Left: Value Proposition */}
          <div className="space-y-5 sm:space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
              Know If Your Project Will Make Money
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-300">
              Before It's Too Late
            </h2>
            <p className="text-base sm:text-lg text-white leading-relaxed max-w-xl">
              Complete construction project management. Plan schedules, track
              cash flow, manage teams, and know your profitability in real-time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-4 sm:pt-6">
              <button className="bg-white text-slate-900 px-6 sm:px-7 md:px-9 py-4 sm:py-5 rounded-md text-base sm:text-lg font-medium hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                Get 2 Months Free
                <ArrowRight size={20} />
              </button>
              <button className="bg-transparent text-white border border-slate-600 px-6 sm:px-7 md:px-9 py-4 sm:py-5 rounded-md text-base sm:text-lg font-medium hover:bg-slate-800 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right: Metrics and Visualization */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Circular Metrics */}
            <div className="bg-slate-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {/* Budget Health */}
                <div className="flex flex-col items-center">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-2 sm:mb-3">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 96 96"
                    >
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#475569"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#10b981"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 40 * 0.92} ${
                          2 * Math.PI * 40
                        }`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm sm:text-lg md:text-xl font-bold text-white">
                        92%
                      </span>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm text-white">Budget</span>
                </div>

                {/* Timeline Progress */}
                <div className="flex flex-col items-center">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-2 sm:mb-3">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 96 96"
                    >
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#475569"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="oklch(66.6% 0.179 58.318)"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 40 * 0.64} ${
                          2 * Math.PI * 40
                        }`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm sm:text-lg md:text-xl font-bold text-white">
                        64%
                      </span>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm text-white">
                    Timeline
                  </span>
                </div>

                {/* Cash Flow Status */}
                <div className="flex flex-col items-center">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-2 sm:mb-3">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 96 96"
                    >
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#475569"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#10b981"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 40 * 0.78} ${
                          2 * Math.PI * 40
                        }`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm sm:text-lg md:text-xl font-bold text-white">
                        78%
                      </span>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm text-white">
                    Cash Flow
                  </span>
                </div>

                {/* Profitability */}
                <div className="flex flex-col items-center">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-2 sm:mb-3">
                    <div className="w-full h-full rounded-full bg-green-900 flex items-center justify-center border-4 border-emerald-500">
                      <span className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-300">
                        A
                      </span>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm text-white">
                    Profitability
                  </span>
                </div>
              </div>
            </div>

            {/* Cash Flow Graph */}
            <div className="bg-slate-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
              <div className="flex items-end justify-between h-32 sm:h-40 md:h-48 relative">
                {/* Y-axis label */}
                <div className="absolute left-0 top-0 bottom-0 flex items-center">
                  <span className="text-[10px] sm:text-xs text-white -rotate-90 whitespace-nowrap">
                    $ Cash Flow
                  </span>
                </div>

                {/* Graph area */}
                <div className="flex-1 ml-5 sm:ml-6 md:ml-8 relative h-full">
                  {/* Grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    <div className="border-t border-slate-700/50"></div>
                    <div className="border-t border-slate-700/50"></div>
                    <div className="border-t border-slate-700/50"></div>
                    <div className="border-t border-slate-700/50"></div>
                  </div>

                  {/* Cash flow line */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 0,180 Q 60,160 120,140 T 240,100 T 360,60 T 480,40 T 600,35"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="3"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d="M 0,180 Q 60,160 120,140 T 240,100 T 360,60 T 480,40 T 600,35 L 600,192 L 0,192 Z"
                      fill="url(#cashFlowGradient)"
                      opacity="0.2"
                    />
                    <defs>
                      <linearGradient
                        id="cashFlowGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#10b981" />
                        <stop
                          offset="100%"
                          stopColor="#10b981"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* X-axis labels */}
              <div className="flex justify-between mt-3 sm:mt-4 text-[10px] sm:text-xs text-white ml-5 sm:ml-6 md:ml-8">
                <span>Jan</span>
                <span className="hidden sm:inline">Mar</span>
                <span>May</span>
                <span className="hidden sm:inline">Jul</span>
                <span>Sep</span>
                <span className="hidden sm:inline">Nov</span>
              </div>
              <div className="text-center mt-2 sm:mt-3 text-[10px] sm:text-xs text-white">
                Timeline
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
