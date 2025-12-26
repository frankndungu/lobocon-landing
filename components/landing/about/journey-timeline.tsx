export default function JourneyTimeline() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
          How Lobocon Was Born
        </h2>

        <div className="space-y-12">
          {/* Step 1 */}
          <div className="border-l-4 border-slate-900 pl-8">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              The Problem Became Personal
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              One founder spent five years managing construction projects in
              Kenya. He watched Excel files become the source of truth and the
              source of chaos. Labor costs spiraled unexpectedly. Profit margins
              vanished. There had to be a better way.
            </p>
          </div>

          {/* Step 2 */}
          <div className="border-l-4 border-slate-900 pl-8">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Meeting the Builder and the Builder
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              At ALX The Piano in Nairobi, a full-stack developer heard these
              frustrations. He'd shipped products globally and knew how to build
              software that actually solves problems. Together, they decided to
              fix construction management.
            </p>
          </div>

          {/* Step 3 */}
          <div className="border-l-4 border-slate-900 pl-8">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Built by Construction, for Construction
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              We didn't build Lobocon in isolation. We built it with
              construction professionals. Every feature was tested on real
              projects. Every UI decision was validated on construction sites.
              The result: software that actually works.
            </p>
          </div>

          {/* Step 4 */}
          <div className="border-l-4 border-slate-900 pl-8">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Starting with Kenya and Africa
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              We're starting in Kenya and scaling across Africa because we
              understand the unique challenges of construction in emerging
              markets. Local knowledge isn't optional, it's essential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
