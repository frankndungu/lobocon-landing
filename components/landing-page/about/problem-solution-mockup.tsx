import { FileSpreadsheet, UserX, AlertTriangle, Lightbulb } from "lucide-react";

export default function ProblemSolutionMockup() {
  return (
    <section className="py-24 px-6 bg-linear-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-slate-900">
          The Problem We Saw
        </h2>
        <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">
          Construction companies lose money they don't have to lose.
        </p>

        {/* Split: Problem vs Solution */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Problem Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                  <FileSpreadsheet className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">
                    Excel Chaos
                  </h3>
                  <p className="text-slate-600">
                    Nobody knows which version is correct. Budgets blow up
                    because everyone works from different files.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                  <UserX className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">
                    Ghost Workers
                  </h3>
                  <p className="text-slate-600">
                    Paying for workers who never showed up. Thousands lost every
                    month with no verification.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-slate-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">
                    Profit Mystery
                  </h3>
                  <p className="text-slate-600">
                    You find out the project lost money 6 months later. Too late
                    to fix anything.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Budget Dashboard Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
              {/* Browser Header */}
              <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="flex-1 text-center text-sm text-slate-600 font-mono">
                  app.lobocon.co/dashboard
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 bg-slate-50">
                {/* Alert Banner */}
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-6 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-red-900 mb-1">
                      Budget Alert: Project Over Budget
                    </div>
                    <div className="text-sm text-red-700">
                      Riverside Dam is KSh 500K over projected spend at 85%
                      completion
                    </div>
                  </div>
                </div>

                {/* Project Card */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Project</div>
                      <div className="text-xl font-bold text-slate-900">
                        Riverside Dam Project
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                      At Risk
                    </div>
                  </div>

                  {/* Budget Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Budget</div>
                      <div className="text-lg font-bold text-slate-900">
                        KSh 45M
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">
                        Current Spend
                      </div>
                      <div className="text-lg font-bold text-red-600">
                        KSh 45.5M
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">
                        Variance
                      </div>
                      <div className="text-lg font-bold text-red-600">
                        -KSh 500K
                      </div>
                    </div>
                  </div>

                  {/* Earned Value Chart */}
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="text-sm font-semibold text-slate-700 mb-3">
                      Earned Value Analysis
                    </div>
                    <svg viewBox="0 0 400 200" className="w-full">
                      {/* Grid lines */}
                      <line
                        x1="40"
                        y1="20"
                        x2="40"
                        y2="180"
                        stroke="#cbd5e1"
                        strokeWidth="2"
                      />
                      <line
                        x1="40"
                        y1="180"
                        x2="380"
                        y2="180"
                        stroke="#cbd5e1"
                        strokeWidth="2"
                      />

                      {/* Planned Value (PV) - Blue dashed */}
                      <path
                        d="M 40 160 Q 120 140, 200 100 T 360 40"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        strokeDasharray="5,5"
                      />

                      {/* Actual Cost (AC) - Red solid */}
                      <path
                        d="M 40 160 Q 120 135, 200 85 T 360 20"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="3"
                      />

                      {/* Earned Value (EV) - Green solid */}
                      <path
                        d="M 40 160 Q 120 145, 200 110 T 360 55"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="3"
                      />

                      {/* Labels */}
                      <text
                        x="365"
                        y="25"
                        className="text-xs fill-red-600 font-semibold"
                      >
                        AC (Over)
                      </text>
                      <text
                        x="365"
                        y="60"
                        className="text-xs fill-emerald-600 font-semibold"
                      >
                        EV
                      </text>
                      <text
                        x="365"
                        y="45"
                        className="text-xs fill-blue-600 font-semibold"
                      >
                        PV
                      </text>

                      {/* Current point indicator */}
                      <circle cx="280" cy="70" r="5" fill="#ef4444" />
                      <text
                        x="290"
                        y="75"
                        className="text-xs fill-slate-700 font-semibold"
                      >
                        85% Complete
                      </text>
                    </svg>

                    {/* Legend */}
                    <div className="flex gap-4 mt-3 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-0.5 bg-blue-600 border-dashed"></div>
                        <span className="text-slate-600">Planned Value</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-0.5 bg-emerald-600"></div>
                        <span className="text-slate-600">Earned Value</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-0.5 bg-red-600"></div>
                        <span className="text-slate-600">Actual Cost</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Insight Tooltip */}
            <div className="absolute -right-4 top-1/2 bg-slate-900 text-white px-4 py-3 rounded-lg shadow-lg max-w-xs hidden lg:block">
              <div className="flex items-start gap-2">
                <Lightbulb className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-sm mb-1">Early Warning</div>
                  <div className="text-xs">
                    Caught 3 months early. Still time to adjust and save the
                    margin.
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
