import {
  ChevronRight,
  FileText,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

export default function ProblemStatement() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4 text-balance">
          Still Managing Projects the Old Way?
        </h2>
        <p className="text-center text-sm sm:text-base text-slate-600 mb-6 sm:mb-8 md:mb-12 max-w-xl mx-auto">
          These common challenges are costing you time, money, and peace of
          mind.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              title: "Excel Chaos",
              desc: "Scattered spreadsheets, lost files, and version confusion leading to costly mistakes.",
              icon: FileText,
            },
            {
              title: "No Visibility",
              desc: "Owners constantly asking for updates while you struggle to gather real-time data.",
              icon: AlertTriangle,
            },
            {
              title: "Profit Uncertainty",
              desc: "You don't know if the project is actually profitable until the final accounts are done.",
              icon: TrendingUp,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 sm:p-6 md:p-8 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4 sm:mb-5 text-slate-900">
                <item.icon
                  size={24}
                  className="sm:w-7 sm:h-7"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-slate-900">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 md:mt-12 text-center">
          <a
            href="#solution"
            className="inline-flex items-center text-slate-900 font-medium hover:text-slate-700 transition-colors group text-sm sm:text-base"
          >
            There's a better way
            <ChevronRight
              size={20}
              className="ml-1 group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
