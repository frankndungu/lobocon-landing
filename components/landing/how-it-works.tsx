import { Target, Calendar, Search, TrendingUp } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16 md:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            From Planning to Profit in 4 Simple Steps
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Set Up Project",
                icon: Target,
                details: ["Import BOQ", "Define Budget", "Set Baseline"],
              },
              {
                step: "02",
                title: "Plan & Schedule",
                icon: Calendar,
                details: [
                  "Create Gantt Chart",
                  "Assign Teams",
                  "Resource Plan",
                ],
              },
              {
                step: "03",
                title: "Execute & Monitor",
                icon: Search,
                details: [
                  "Daily Site Logs",
                  "Track Expenses",
                  "Real-time Updates",
                ],
              },
              {
                step: "04",
                title: "Track Profitability",
                icon: TrendingUp,
                details: [
                  "Variance Analysis",
                  "Cash Flow Reports",
                  "Earned Value",
                ],
              },
            ].map((phase, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-sm border border-slate-200"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto bg-white border-4 border-slate-50 rounded-full flex items-center justify-center text-blue-600 mb-4 sm:mb-6 shadow-sm relative z-10">
                  <phase.icon
                    size={24}
                    className="sm:w-8 sm:h-8 md:w-9 md:h-9"
                  />
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-black text-white rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold">
                    {phase.step}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-center">
                  {phase.title}
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 sm:space-y-2">
                  {phase.details.map((detail, dIdx) => (
                    <li
                      key={dIdx}
                      className="flex items-center justify-center gap-2"
                    >
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
