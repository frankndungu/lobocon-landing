import {
  Building2,
  Home,
  UserCheck,
  Boxes,
  TrendingUp,
  FileCheck,
  Users,
  Package,
  DollarSign,
  Camera,
} from "lucide-react";

export default function EarlyTraction() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-slate-900">
          Early Traction
        </h2>
        <p className="text-xl text-slate-600 text-center mb-16">
          Real projects. Real customers.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Infrastructure Projects */}
          <div className="border-2 border-slate-900 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Infrastructure Projects
                </h3>
                <p className="text-slate-600">Dams, irrigation, civil works</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-lg">
                <UserCheck className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Labor verification and ghost worker detection
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg">
                <Boxes className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Multi-site resource allocation
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg">
                <TrendingUp className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Real-time financial tracking per site
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg">
                <FileCheck className="w-5 h-5 text-slate-900  shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Automated progress and compliance reporting
                </span>
              </div>
            </div>
          </div>

          {/* Residential Construction */}
          <div className="border-2 border-slate-900 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center">
                <Home className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Residential Construction
                </h3>
                <p className="text-slate-600">Homes and renovations</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-lg">
                <Users className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Labor tracking and cost control
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg">
                <Package className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Material and budget management
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg">
                <DollarSign className="w-5 h-5 text-slate-900  shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Profitability visibility per project
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg">
                <Camera className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Site documentation and progress photos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
