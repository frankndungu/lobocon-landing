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
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 sm:gap-10 lg:gap-16 items-center">
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

          {/* Right: Earned Value Dashboard Mockup */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            {/* Browser Header */}
            <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <div className="flex-1 text-center text-sm text-slate-600 font-mono">
                app.lobocon.co/projects/rsd-2025-001
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 bg-slate-50">
              {/* Project Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-slate-500 mb-1">Project</div>
                  <div className="text-xl font-bold text-slate-900">
                    Riverside Dam
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    65% Complete • On Schedule
                  </div>
                </div>
                <div className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-semibold">
                  +11% Margin
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-white rounded-lg p-3 border border-slate-200">
                  <div className="text-xs text-slate-500 mb-1">
                    Budget (BAC)
                  </div>
                  <div className="text-lg font-bold text-slate-900">
                    KSh 45M
                  </div>
                  <div className="text-xs text-slate-500">Contract value</div>
                </div>

                <div className="rounded-lg p-3 border border-blue-200 bg-blue-50">
                  <div className="text-xs text-blue-700 mb-1">
                    Actual Cost (AC)
                  </div>
                  <div className="text-lg font-bold text-blue-700">KSh 29M</div>
                  <div className="text-xs text-blue-600">Spent to date</div>
                </div>

                <div className="rounded-lg p-3 border border-emerald-200 bg-emerald-50">
                  <div className="text-xs text-emerald-700 mb-1">
                    Earned Value (EV)
                  </div>
                  <div className="text-lg font-bold text-emerald-700">
                    KSh 32.5M
                  </div>
                  <div className="text-xs text-emerald-600">Work completed</div>
                </div>
              </div>

              {/* EVM Chart */}
              <div className="bg-white rounded-lg p-4 border border-slate-200 mb-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-semibold text-slate-700">
                    Earned Value Analysis
                  </div>
                  <div className="text-xs text-emerald-600 font-semibold">
                    CPI: 1.12 • SPI: 1.05
                  </div>
                </div>

                <div className="relative h-32">
                  <svg viewBox="0 0 400 120" className="w-full h-full">
                    {/* Grid */}
                    <line
                      x1="30"
                      y1="10"
                      x2="30"
                      y2="100"
                      stroke="#cbd5e1"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="30"
                      y1="100"
                      x2="380"
                      y2="100"
                      stroke="#cbd5e1"
                      strokeWidth="1.5"
                    />

                    {/* Horizontal grid */}
                    <line
                      x1="30"
                      y1="25"
                      x2="380"
                      y2="25"
                      stroke="#e2e8f0"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                    <line
                      x1="30"
                      y1="50"
                      x2="380"
                      y2="50"
                      stroke="#e2e8f0"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                    <line
                      x1="30"
                      y1="75"
                      x2="380"
                      y2="75"
                      stroke="#e2e8f0"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />

                    {/* Planned Value - Blue dashed */}
                    <path
                      d="M 30 100 L 100 75 L 170 55 L 240 40 L 310 25 L 360 15"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="4,3"
                    />

                    {/* Actual Cost - Red solid */}
                    <path
                      d="M 30 100 L 100 72 L 170 50 L 240 35 L 310 23 L 360 15"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="2.5"
                    />

                    {/* Earned Value - Green solid */}
                    <path
                      d="M 30 100 L 100 68 L 170 45 L 240 30 L 310 20 L 360 12"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2.5"
                    />

                    {/* Current marker */}
                    <circle
                      cx="310"
                      cy="23"
                      r="3"
                      fill="#ef4444"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="310"
                      cy="20"
                      r="3"
                      fill="#10b981"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="310"
                      y1="5"
                      x2="310"
                      y2="100"
                      stroke="#94a3b8"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                    <text
                      x="295"
                      y="8"
                      className="text-xs fill-slate-700 font-semibold"
                    >
                      65%
                    </text>
                  </svg>
                </div>

                {/* Legend */}
                <div className="flex gap-4 mt-2 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-0.5 bg-blue-600 border-dashed"></div>
                    <span className="text-slate-600">Planned Value (PV)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-0.5 bg-emerald-600"></div>
                    <span className="text-slate-600">Earned Value (EV)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-0.5 bg-red-600"></div>
                    <span className="text-slate-600">Actual Cost (AC)</span>
                  </div>
                </div>
              </div>

              {/* Performance Indicators */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-white rounded-lg p-3 border border-emerald-200">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-xs text-slate-600">
                      Cost Performance
                    </div>
                    <div className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded text-xs font-semibold">
                      Excellent
                    </div>
                  </div>
                  <div className="text-xl font-bold text-emerald-700">
                    +KSh 3.5M
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Cost Variance (CV)
                  </div>
                  <div className="text-xs text-emerald-600 mt-1">
                    CPI: 1.12 (Under budget)
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 border border-blue-200">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-xs text-slate-600">
                      Schedule Performance
                    </div>
                    <div className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                      On Track
                    </div>
                  </div>
                  <div className="text-xl font-bold text-blue-700">
                    +KSh 1.5M
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Schedule Variance (SV)
                  </div>
                  <div className="text-xs text-blue-600 mt-1">
                    SPI: 1.05 (Ahead of plan)
                  </div>
                </div>
              </div>

              {/* Forecast at Completion */}
              <div className="bg-white rounded-lg p-3 border border-slate-200">
                <div className="text-xs font-semibold text-slate-700 mb-2">
                  Forecast at Completion
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600">
                      Estimate at Completion (EAC)
                    </span>
                    <span className="font-bold text-slate-900">KSh 40M</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600">
                      Variance at Completion (VAC)
                    </span>
                    <span className="font-bold text-emerald-600">+KSh 5M</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                    <span className="text-xs font-semibold text-slate-700">
                      Expected Profit Margin
                    </span>
                    <span className="text-lg font-bold text-emerald-700">
                      11.1%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
