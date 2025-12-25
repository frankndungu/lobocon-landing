import { TrendingUp, BarChart3, Users } from "lucide-react";

export default function SolutionOverview() {
  return (
    <section id="solution" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-balance">
            One Platform. Complete Control. Real Profitability.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Everything you need to manage construction projects successfully,
            all in one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[
            {
              icon: TrendingUp,
              title: "Financial Intelligence",
              desc: "Track every cent. Know your margins in real-time.",
            },
            {
              icon: BarChart3,
              title: "Complete Visibility",
              desc: "See site progress, labor, and materials from anywhere.",
            },
            {
              icon: Users,
              title: "Seamless Collaboration",
              desc: "Invite contractors, consultants, and stakeholders.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-slate-50 p-5 sm:p-6 md:p-10 rounded-lg text-center hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <div className="mb-4 sm:mb-5 flex justify-center text-slate-900">
                <card.icon
                  size={28}
                  className="sm:w-8 sm:h-8"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-slate-900">
                {card.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
