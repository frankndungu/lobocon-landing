import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Mission */}
          <div className="border-l-4 border-slate-900 pl-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Give construction companies full visibility into their projects.
              Track costs, labor, and timelines. Make better decisions. Build
              profitable projects.
            </p>
          </div>

          {/* Vision */}
          <div className="border-l-4 border-slate-900 pl-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Our Vision</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Construction management should be transparent and simple. Every
              project manager should have the tools they need. Every project
              should be built with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
