import { CheckCircle2 } from "lucide-react";

export default function CashFlowDeepDive() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white text-slate-900 overflow-hidden relative">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100 blur-3xl rounded-full translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-slate-900 text-white rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6">
              Financial Intelligence
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-slate-900">
              Don't Hope and Pray Your Project Makes Money
            </h2>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
              Our cash flow projection engine uses PMI-standard formulas to
              predict your project's profitability throughout its lifecycle.
              Know your "Cash In" vs "Cash Out" before you break ground.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  label: "Predict Cash In",
                  desc: "Based on payment milestones",
                  color: "text-emerald-600",
                },
                {
                  label: "Track Cash Out",
                  desc: "Labor, materials, and overheads",
                  color: "text-red-600",
                },
                {
                  label: "See Net Position",
                  desc: "Real-time profitability gap",
                  color: "text-blue-600",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 sm:gap-4">
                  <div className={`mt-0.5 sm:mt-1 font-bold ${item.color}`}>
                    <CheckCircle2 size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg text-slate-900">
                      {item.label}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Graph Representation */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-slate-200">
            <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900">
                Cash Flow Projection
              </h3>
              <span className="text-[10px] sm:text-xs text-slate-500 font-medium">
                Next 12 Months
              </span>
            </div>

            {/* Graph */}
            <div className="relative h-40 sm:h-52 md:h-64 border-l-2 border-b-2 border-slate-300">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between opacity-50">
                <div className="w-full h-px bg-slate-300"></div>
                <div className="w-full h-px bg-slate-300"></div>
                <div className="w-full h-px bg-slate-300"></div>
                <div className="w-full h-px bg-slate-300"></div>
              </div>

              {/* S-Curve Green (Income) */}
              <svg
                className="absolute inset-0 h-full w-full overflow-visible"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,256 C80,250 150,200 250,100 S400,20 500,10"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="3"
                />
                {/* Area under curve */}
                <path
                  d="M0,256 C80,250 150,200 250,100 S400,20 500,10 V256 H0"
                  fill="url(#greenGradient)"
                  opacity="0.2"
                />
                <defs>
                  <linearGradient
                    id="greenGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* S-Curve Red (Expenses) */}
              <svg
                className="absolute inset-0 h-full w-full overflow-visible"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,256 C80,240 120,220 200,180 S350,150 500,140"
                  fill="none"
                  stroke="#EF4444"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                />
              </svg>

              {/* Floating Tooltip */}
              <div className="absolute top-1/4 sm:top-1/3 left-1/2 bg-white text-slate-900 p-2 sm:p-3 rounded shadow-lg transform -translate-x-1/2">
                <div className="text-[10px] sm:text-xs text-slate-500 uppercase font-bold">
                  Projected Margin
                </div>
                <div className="text-base sm:text-lg font-bold text-emerald-600">
                  +18.5%
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-3 sm:mt-4 text-[10px] sm:text-xs text-slate-500 font-medium">
              <span>Start</span>
              <span className="hidden sm:inline">Month 1</span>
              <span>Month 2</span>
              <span className="hidden sm:inline">Month 3</span>
              <span>Completion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
