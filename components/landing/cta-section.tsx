import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-slate-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-slate-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 mb-4 sm:mb-6 text-balance leading-tight">
          Ready to Take Control of Your Projects?
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
          Join construction companies delivering profitable projects with
          Lobocon.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <button className="bg-slate-900 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg lg:text-xl font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 sm:gap-3 group">
            Start Your Free Trial
            <ArrowRight
              size={20}
              className="sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button className="bg-white text-slate-900 border-2 border-slate-900 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg lg:text-xl font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
            <span className="bg-slate-900/10 rounded-full p-1 sm:p-1.5">
              <ChevronRight size={16} className="sm:w-5 sm:h-5" />
            </span>
            Schedule a Demo
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-slate-700 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="sm:w-5 sm:h-5" />
            <span className="font-medium">2 months free</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="sm:w-5 sm:h-5" />
            <span className="font-medium">No credit card</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="sm:w-5 sm:h-5" />
            <span className="font-medium">Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
