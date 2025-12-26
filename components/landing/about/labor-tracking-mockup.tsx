import {
  Smartphone,
  UserX,
  Wallet,
  User,
  AlertCircle,
  PiggyBank,
} from "lucide-react";

export default function LaborTrackingMockup() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Labor Dashboard Mockup */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
              {/* Browser Header */}
              <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="flex-1 text-center text-sm text-slate-600 font-mono">
                  https://app.lobocon.co/labor
                </div>
              </div>

              {/* Labor Dashboard */}
              <div className="p-6 bg-slate-50">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Riverside Dam Project
                </h3>

                {/* Labor Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 border border-slate-200">
                    <div className="text-sm text-slate-500 mb-1">
                      On Payroll
                    </div>
                    <div className="text-3xl font-bold text-slate-900">150</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-slate-200">
                    <div className="text-sm text-slate-500 mb-1">
                      Signed In Today
                    </div>
                    <div className="text-3xl font-bold text-emerald-600">
                      127
                    </div>
                  </div>
                </div>

                {/* Ghost Workers Alert */}
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-orange-600 shrink-0" />
                    <div>
                      <div className="font-bold text-orange-900 text-sm mb-1">
                        23 Ghost Workers Detected
                      </div>
                      <div className="text-xs text-orange-700">
                        Workers on payroll who haven't signed in for 7+ days
                      </div>
                    </div>
                  </div>
                </div>

                {/* Worker List */}
                <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                  <div className="px-4 py-3 bg-slate-100 border-b border-slate-200">
                    <div className="text-sm font-semibold text-slate-700">
                      Recent Sign-ins
                    </div>
                  </div>

                  <div className="divide-y divide-slate-200">
                    {/* Worker 1 - Signed in */}
                    <div className="px-4 py-3 flex items-center justify-between hover:bg-slate-50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900 text-sm">
                            John Mwangi
                          </div>
                          <div className="text-xs text-slate-500">Mason</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-500">Signed in</div>
                        <div className="text-sm font-semibold text-emerald-600">
                          07:45 AM
                        </div>
                      </div>
                    </div>

                    {/* Worker 2 - Signed in */}
                    <div className="px-4 py-3 flex items-center justify-between hover:bg-slate-50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900 text-sm">
                            Peter Kamau
                          </div>
                          <div className="text-xs text-slate-500">Mason</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-500">Signed in</div>
                        <div className="text-sm font-semibold text-emerald-600">
                          08:02 AM
                        </div>
                      </div>
                    </div>

                    {/* Worker 3 - Ghost worker */}
                    <div className="px-4 py-3 flex items-center justify-between hover:bg-slate-50 bg-red-50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <UserX className="w-4 h-4 text-red-600" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900 text-sm">
                            David Omondi
                          </div>
                          <div className="text-xs text-slate-500">Laborer</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-red-600">Last seen</div>
                        <div className="text-sm font-semibold text-red-600">
                          12 days ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Monthly Savings */}
                <div className="mt-4 bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-emerald-700 mb-1">
                        Potential Monthly Savings
                      </div>
                      <div className="text-2xl font-bold text-emerald-900">
                        KSh 345,000
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                      <PiggyBank className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Benefits */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Catch Ghost Workers Early
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Digital sign-in verification. Real-time attendance tracking. Stop
              paying for workers who don't show up.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">
                    Digital Sign-in
                  </div>
                  <div className="text-slate-600">
                    Workers sign in via tablet or phone with timestamp
                    verification
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <UserX className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">
                    Ghost Detection
                  </div>
                  <div className="text-slate-600">
                    Auto-flag workers on payroll who haven't signed in for 7+
                    days
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                  <Wallet className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">
                    Attendance Payroll
                  </div>
                  <div className="text-slate-600">
                    Pay only for verified attendance days. Save thousands
                    monthly.
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
