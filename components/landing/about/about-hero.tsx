import { ChevronDown, ChevronRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-semibold mb-6">
              Construction Project Management Simplified
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900">
              Built for Construction Leaders
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
              A licensed project manager and a developer built this. One knew
              construction's problems. The other knew how to fix them with
              software.
            </p>
          </div>

          {/* Right: Realistic Gantt Chart */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            {/* Browser Header */}
            <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <div className="flex-1 text-center text-sm text-slate-600 font-mono">
                https://app.lobocon.co/scheduling
              </div>
            </div>

            {/* Gantt Chart Content */}
            <div className="bg-white">
              {/* Header */}
              <div className="flex border-b border-slate-200">
                {/* Left: Task List Header */}
                <div className="w-72 p-3 bg-slate-50 border-r border-slate-200">
                  <div className="text-xs font-semibold text-slate-700 uppercase">
                    Preconstruction
                  </div>
                </div>

                {/* Right: Timeline Header */}
                <div className="flex-1 flex">
                  <div className="px-3 py-3 border-r border-slate-200 text-xs text-center text-slate-600 w-20">
                    Jan 15
                  </div>
                  <div className="px-3 py-3 border-r border-slate-200 text-xs text-center text-slate-600 w-20">
                    Jan 22
                  </div>
                  <div className="px-3 py-3 border-r border-slate-200 text-xs text-center text-slate-600 w-20">
                    Jan 29
                  </div>
                  <div className="px-3 py-3 border-r border-slate-200 text-xs text-center text-slate-600 w-20">
                    Feb 5
                  </div>
                  <div className="px-3 py-3 text-xs text-center text-slate-600 w-20">
                    Feb 12
                  </div>
                </div>
              </div>

              {/* Phase 1: Initial Planning */}
              <div className="border-b border-slate-200">
                <div className="flex hover:bg-slate-50">
                  <div className="w-72 p-3 border-r border-slate-200 flex items-center gap-2">
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                    <span className="text-sm font-semibold text-slate-900">
                      Phase I: Initial Planning
                    </span>
                  </div>
                  <div className="flex-1 relative flex items-center px-2">
                    <div
                      className="absolute left-2 top-1/2 -translate-y-1/2 h-6 bg-red-400/20 rounded"
                      style={{ width: "380px" }}
                    ></div>
                  </div>
                </div>

                {/* Subtask 1 */}
                <div className="flex hover:bg-slate-50">
                  <div className="w-72 p-3 border-r border-slate-200 flex items-center gap-2 pl-8">
                    <span className="text-sm text-slate-700">
                      Site Assessment
                    </span>
                  </div>
                  <div className="flex-1 relative flex items-center px-2">
                    <div
                      className="absolute left-2 top-1/2 -translate-y-1/2 h-6 bg-cyan-400 rounded border border-cyan-500"
                      style={{ width: "70px" }}
                    >
                      <div className="text-xs text-white px-2 leading-6 truncate">
                        Jan 15-18
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtask 2 */}
                <div className="flex hover:bg-slate-50">
                  <div className="w-72 p-3 border-r border-slate-200 flex items-center gap-2 pl-8">
                    <span className="text-sm text-slate-700">
                      BOQ Preparation
                    </span>
                  </div>
                  <div className="flex-1 relative flex items-center px-2">
                    <div
                      className="absolute left-16 top-1/2 -translate-y-1/2 h-6 bg-cyan-400 rounded border border-cyan-500"
                      style={{ width: "90px", left: "72px" }}
                    >
                      <div className="text-xs text-white px-2 leading-6 truncate">
                        Jan 19-24
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtask 3 */}
                <div className="flex hover:bg-slate-50 border-b border-slate-100">
                  <div className="w-72 p-3 border-r border-slate-200 flex items-center gap-2 pl-8">
                    <span className="text-sm text-slate-700">
                      Budget Approval
                    </span>
                  </div>
                  <div className="flex-1 relative flex items-center px-2">
                    <div
                      className="absolute top-1/2 -translate-y-1/2 h-6 bg-cyan-400 rounded border border-cyan-500"
                      style={{ width: "50px", left: "162px" }}
                    >
                      <div className="text-xs text-white px-2 leading-6 truncate">
                        Jan 25-27
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2: Foundation Work */}
              <div className="border-b border-slate-200">
                <div className="flex hover:bg-slate-50">
                  <div className="w-72 p-3 border-r border-slate-200 flex items-center gap-2">
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                    <span className="text-sm font-semibold text-slate-900">
                      Phase II: Foundation Work
                    </span>
                  </div>
                  <div className="flex-1 relative flex items-center px-2">
                    <div
                      className="absolute top-1/2 -translate-y-1/2 h-6 bg-slate-200 rounded"
                      style={{ width: "260px", left: "212px" }}
                    ></div>
                  </div>
                </div>

                {/* Subtask 1 */}
                <div className="flex hover:bg-slate-50">
                  <div className="w-72 p-3 border-r border-slate-200 flex items-center gap-2 pl-8">
                    <span className="text-sm text-slate-700">Excavation</span>
                  </div>
                  <div className="flex-1 relative flex items-center px-2">
                    <div
                      className="absolute top-1/2 -translate-y-1/2 h-6 bg-cyan-400 rounded border border-cyan-500"
                      style={{ width: "80px", left: "212px" }}
                    >
                      <div className="text-xs text-white px-2 leading-6 truncate">
                        Jan 28-Feb 2
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtask 2 */}
                <div className="flex hover:bg-slate-50 border-b border-slate-100">
                  <div className="w-72 p-3 border-r border-slate-200 flex items-center gap-2 pl-8">
                    <span className="text-sm text-slate-700">
                      Concrete Pouring
                    </span>
                  </div>
                  <div className="flex-1 relative flex items-center px-2">
                    <div
                      className="absolute top-1/2 -translate-y-1/2 h-6 bg-cyan-400 rounded border border-cyan-500"
                      style={{ width: "100px", left: "292px" }}
                    >
                      <div className="text-xs text-white px-2 leading-6 truncate">
                        Feb 3-9
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3: Structural */}
              <div className="border-b border-slate-200">
                <div className="flex hover:bg-slate-50">
                  <div className="w-72 p-3 border-r border-slate-200 flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                    <span className="text-sm font-semibold text-slate-900">
                      Phase III: Structural Work
                    </span>
                  </div>
                  <div className="flex-1 relative flex items-center px-2">
                    <div
                      className="absolute top-1/2 -translate-y-1/2 h-6 bg-slate-200 rounded"
                      style={{ width: "120px", left: "392px" }}
                    ></div>
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
