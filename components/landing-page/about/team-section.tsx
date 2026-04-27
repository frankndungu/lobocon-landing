export default function TeamSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
          The People Behind Lobocon
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Maxwell Makosi */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <div className="aspect-4/3 rounded-lg mb-6 overflow-hidden">
              <img
                src="/makosi.jpeg"
                alt="Maxwell Makosi"
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>

            <h3 className="text-2xl font-bold mb-2 text-slate-900">
              Maxwell Makosi
            </h3>
            <p className="text-slate-600 mb-6">
              Founder, Chief Executive Officer
            </p>

            <p className="text-slate-700 mb-6 leading-relaxed">
              Licensed PM with 5+ years managing construction projects. Knows
              exactly what project managers need.
            </p>

            <div className="border-l-4 border-slate-900 pl-4 italic text-slate-600">
              "I lived the Excel nightmare. Every feature in Lobocon solves a
              real problem I faced."
            </div>
          </div>

          {/* Francis Ndungu */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <div className="aspect-4/3 rounded-lg mb-6 overflow-hidden">
              <img
                src="/frank.jpg"
                alt="Francis Ndungu"
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>

            <h3 className="text-2xl font-bold mb-2 text-slate-900">
              Francis Ndungu
            </h3>
            <p className="text-slate-600 mb-6">
              Founder, Chief Technology Officer
            </p>

            <p className="text-slate-700 mb-6 leading-relaxed">
              Developer who has shipped products to thousands of users globally.
              Built Lobocon from scratch.
            </p>

            <div className="border-l-4 border-slate-900 pl-4 italic text-slate-600">
              "Good software is simple. Construction needs simple software.
              Lobocon is both."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
