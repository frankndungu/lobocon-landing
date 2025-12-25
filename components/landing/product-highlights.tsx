"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function ProductHighlights() {
  const [activeFeature, setActiveFeature] = useState<
    "scheduling" | "resource" | "labor" | "reports" | "documentation"
  >("scheduling");

  return (
    <section
      id="product-highlights"
      className="py-12 sm:py-16 lg:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-12">
          Product highlight:
        </h2>

        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
          {/* Left Sidebar - Feature List */}
          <div className="lg:col-span-3 flex lg:flex-col gap-2 sm:gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
            {[
              {
                key: "scheduling",
                title: "Scheduling",
                desc: "Create dynamic schedules with dependencies and milestones",
              },
              {
                key: "resource",
                title: "Resource Allocation",
                desc: "Optimize equipment and material usage across projects",
              },
              {
                key: "labor",
                title: "Labor Management",
                desc: "Track attendance, productivity, and eliminate ghost workers",
              },
              {
                key: "reports",
                title: "Reports",
                desc: "Generate comprehensive project analytics and insights",
              },
              {
                key: "documentation",
                title: "Site Documentation",
                desc: "Capture progress photos and site reports from the field",
              },
            ].map((feature) => (
              <button
                key={feature.key}
                onClick={() =>
                  setActiveFeature(feature.key as typeof activeFeature)
                }
                className={`shrink-0 lg:shrink text-left p-4 sm:p-5 md:p-6 rounded-lg transition-all min-w-50 lg:min-w-0 lg:w-full ${
                  activeFeature === feature.key
                    ? "bg-slate-900 text-white"
                    : "border border-slate-200 hover:border-slate-300 bg-white"
                }`}
              >
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">
                  {feature.title}
                </h3>
                <p
                  className={`text-xs sm:text-sm ${
                    activeFeature === feature.key
                      ? "text-slate-300"
                      : "text-slate-600"
                  }`}
                >
                  {feature.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Center - Dynamic Dashboard */}
          <div className="lg:col-span-5 bg-slate-50 rounded-lg p-4 sm:p-5 md:p-6 border border-slate-200">
            {activeFeature === "scheduling" && (
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 sm:pb-4">
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                    Project Schedule
                  </h3>
                  <span className="text-xs sm:text-sm text-slate-600">
                    Mar 2024
                  </span>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  {[
                    {
                      task: "Foundation Work",
                      start: "Mar 1",
                      end: "Mar 15",
                      progress: 100,
                      color: "bg-green-500",
                    },
                    {
                      task: "Structural Steel",
                      start: "Mar 10",
                      end: "Mar 28",
                      progress: 65,
                      color: "bg-blue-500",
                    },
                    {
                      task: "MEP Installation",
                      start: "Mar 20",
                      end: "Apr 10",
                      progress: 30,
                      color: "bg-yellow-500",
                    },
                    {
                      task: "Interior Finishes",
                      start: "Apr 1",
                      end: "Apr 25",
                      progress: 0,
                      color: "bg-slate-300",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-3 sm:p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-xs sm:text-sm">
                          {item.task}
                        </span>
                        <span className="text-[10px] sm:text-xs text-slate-600">
                          {item.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 sm:h-2 rounded-full overflow-hidden mb-2">
                        <div
                          className={`h-full ${item.color}`}
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-[10px] sm:text-xs text-slate-500">
                        <span>{item.start}</span>
                        <span>{item.end}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 sm:pt-4">
                  <div className="bg-white p-2 sm:p-3 rounded text-center">
                    <div className="text-base sm:text-lg font-bold text-slate-900">
                      24
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-600">
                      Active Tasks
                    </div>
                  </div>
                  <div className="bg-white p-2 sm:p-3 rounded text-center">
                    <div className="text-base sm:text-lg font-bold text-green-600">
                      18
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-600">
                      On Track
                    </div>
                  </div>
                  <div className="bg-white p-2 sm:p-3 rounded text-center">
                    <div className="text-base sm:text-lg font-bold text-orange-600">
                      6
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-600">
                      At Risk
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeFeature === "resource" && (
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 sm:pb-4">
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                    Resource Distribution
                  </h3>
                  <span className="text-xs sm:text-sm text-slate-600">
                    This Week
                  </span>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {[
                    {
                      resource: "Excavators",
                      allocated: 3,
                      available: 5,
                      utilization: 60,
                    },
                    {
                      resource: "Concrete Trucks",
                      allocated: 4,
                      available: 4,
                      utilization: 100,
                    },
                    {
                      resource: "Scaffolding (m²)",
                      allocated: 450,
                      available: 600,
                      utilization: 75,
                    },
                    {
                      resource: "Power Tools",
                      allocated: 18,
                      available: 25,
                      utilization: 72,
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-3 sm:p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <span className="font-medium text-xs sm:text-sm">
                          {item.resource}
                        </span>
                        <span
                          className={`text-[10px] sm:text-xs font-semibold ${
                            item.utilization >= 90
                              ? "text-red-600"
                              : item.utilization >= 70
                              ? "text-yellow-600"
                              : "text-green-600"
                          }`}
                        >
                          {item.utilization}%
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] sm:text-xs text-slate-600 mb-2">
                        <span>
                          Allocated: <strong>{item.allocated}</strong>
                        </span>
                        <span>•</span>
                        <span>
                          Available: <strong>{item.available}</strong>
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 sm:h-2 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            item.utilization >= 90
                              ? "bg-red-500"
                              : item.utilization >= 70
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                          style={{ width: `${item.utilization}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-900 text-white p-3 sm:p-4 rounded-lg">
                  <div className="text-xs sm:text-sm font-medium mb-1">
                    Material Inventory
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-2 sm:mt-3">
                    <div>
                      <div className="text-[10px] sm:text-xs text-slate-400">
                        Cement (bags)
                      </div>
                      <div className="text-base sm:text-lg font-bold">
                        2,400
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs text-slate-400">
                        Steel (tonnes)
                      </div>
                      <div className="text-base sm:text-lg font-bold">18.5</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeFeature === "labor" && (
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 sm:pb-4">
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                    Labor Tracking
                  </h3>
                  <span className="text-xs sm:text-sm text-slate-600">
                    Today
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-200">
                    <div className="text-xl sm:text-2xl font-bold text-green-700">
                      142
                    </div>
                    <div className="text-[10px] sm:text-xs text-green-600">
                      Checked In
                    </div>
                  </div>
                  <div className="bg-red-50 p-3 sm:p-4 rounded-lg border border-red-200">
                    <div className="text-xl sm:text-2xl font-bold text-red-700">
                      8
                    </div>
                    <div className="text-[10px] sm:text-xs text-red-600">
                      Absent
                    </div>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="text-xs sm:text-sm font-medium text-slate-700">
                    Crew Status
                  </div>
                  {[
                    {
                      crew: "Masonry Team A",
                      workers: 12,
                      status: "active",
                      verified: true,
                      pay: "KSh 48,000",
                    },
                    {
                      crew: "Carpentry Team B",
                      workers: 8,
                      status: "active",
                      verified: true,
                      pay: "KSh 36,000",
                    },
                    {
                      crew: "Electrical Team",
                      workers: 6,
                      status: "active",
                      verified: true,
                      pay: "KSh 32,000",
                    },
                    {
                      crew: "Plumbing Team",
                      workers: 5,
                      status: "break",
                      verified: true,
                      pay: "KSh 28,000",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-2 sm:p-3 rounded-lg border border-slate-200"
                    >
                      <div className="flex items-start justify-between mb-1 sm:mb-2">
                        <div className="flex-1">
                          <div className="font-medium text-xs sm:text-sm flex items-center gap-1 sm:gap-2 flex-wrap">
                            <span className="truncate">{item.crew}</span>
                            {item.verified && (
                              <span className="px-1.5 sm:px-2 py-0.5 bg-green-100 text-green-700 text-[10px] sm:text-xs rounded-full whitespace-nowrap">
                                ✓ Verified
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] sm:text-xs text-slate-600 mt-0.5 sm:mt-1">
                            {item.workers} workers
                          </div>
                        </div>
                        <span
                          className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded ${
                            item.status === "active"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <div className="text-[10px] sm:text-xs text-slate-500 flex items-center justify-between pt-1.5 sm:pt-2 border-t border-slate-100">
                        <span>Weekly pay:</span>
                        <span className="font-semibold text-slate-900">
                          {item.pay}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                  <div className="text-[10px] sm:text-xs font-medium text-blue-900 mb-1">
                    Ghost Worker Detection
                  </div>
                  <div className="text-xs sm:text-sm text-blue-700">
                    0 anomalies detected this week. All workers verified.
                  </div>
                </div>
              </div>
            )}

            {activeFeature === "reports" && (
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 sm:pb-4">
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                    Project Reports
                  </h3>
                  <span className="text-xs sm:text-sm text-slate-600">
                    March 2024
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="bg-white p-3 sm:p-4 rounded-lg border border-slate-200">
                    <div className="text-[10px] sm:text-xs text-slate-600 mb-1">
                      Budget Variance
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-green-600">
                      -2.3%
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-500">
                      Under budget
                    </div>
                  </div>
                  <div className="bg-white p-3 sm:p-4 rounded-lg border border-slate-200">
                    <div className="text-[10px] sm:text-xs text-slate-600 mb-1">
                      Schedule Variance
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-yellow-600">
                      +4.2%
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-500">
                      Behind schedule
                    </div>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="text-xs sm:text-sm font-medium text-slate-700">
                    Available Reports
                  </div>
                  {[
                    {
                      name: "Daily Progress Report",
                      date: "Mar 22, 2024",
                      type: "PDF",
                      size: "2.4 MB",
                    },
                    {
                      name: "Cash Flow Analysis",
                      date: "Mar 20, 2024",
                      type: "Excel",
                      size: "1.8 MB",
                    },
                    {
                      name: "Labor Cost Summary",
                      date: "Mar 18, 2024",
                      type: "PDF",
                      size: "890 KB",
                    },
                    {
                      name: "Material Consumption",
                      date: "Mar 15, 2024",
                      type: "Excel",
                      size: "1.2 MB",
                    },
                  ].map((report, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-2 sm:p-3 rounded-lg border border-slate-200 hover:border-slate-300"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-xs sm:text-sm truncate">
                            {report.name}
                          </div>
                          <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1">
                            {report.date} • {report.size}
                          </div>
                        </div>
                        <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-slate-100 text-slate-700 rounded ml-2">
                          {report.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full py-2.5 sm:py-3 bg-slate-900 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-slate-800">
                  Generate Custom Report
                </button>
              </div>
            )}

            {activeFeature === "documentation" && (
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 sm:pb-4">
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                    Site Documentation
                  </h3>
                  <span className="text-xs sm:text-sm text-slate-600">
                    Latest Updates
                  </span>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {[
                    {
                      title: "Foundation Inspection - Block A",
                      author: "John Kamau (Clerk of Works)",
                      time: "2 hours ago",
                      photos: 8,
                      status: "Approved",
                    },
                    {
                      title: "Steel Erection Progress",
                      author: "Peter Ochieng (Site Foreman)",
                      time: "5 hours ago",
                      photos: 12,
                      status: "Under Review",
                    },
                    {
                      title: "Concrete Pour - Level 3",
                      author: "Mary Wanjiku (QA Inspector)",
                      time: "1 day ago",
                      photos: 6,
                      status: "Approved",
                    },
                  ].map((doc, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-3 sm:p-4 rounded-lg border border-slate-200"
                    >
                      <div className="flex items-start justify-between mb-2 sm:mb-3">
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-xs sm:text-sm mb-0.5 sm:mb-1 truncate">
                            {doc.title}
                          </div>
                          <div className="text-[10px] sm:text-xs text-slate-600 truncate">
                            {doc.author}
                          </div>
                        </div>
                        <span
                          className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded whitespace-nowrap ml-2 ${
                            doc.status === "Approved"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {doc.status}
                        </span>
                      </div>

                      <div className="flex gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                        {[...Array(Math.min(doc.photos, 3))].map(
                          (_, photoIdx) => (
                            <div
                              key={photoIdx}
                              className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-200 rounded flex items-center justify-center"
                            >
                              <svg
                                className="w-4 h-4 sm:w-6 sm:h-6 text-slate-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                            </div>
                          )
                        )}
                        {doc.photos > 3 && (
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-100 rounded flex items-center justify-center">
                            <span className="text-[10px] sm:text-xs font-medium text-slate-600">
                              +{doc.photos - 3}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="text-[10px] sm:text-xs text-slate-500">
                        {doc.time}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full py-2.5 sm:py-3 bg-slate-900 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-slate-800">
                  + New Site Report
                </button>
              </div>
            )}
          </div>

          {/* Right - Dynamic Description */}
          <div className="lg:col-span-4 space-y-6">
            {activeFeature === "scheduling" && (
              <>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Plan activities in real time
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        Auto-update timelines
                      </h4>
                      <p className="text-sm text-slate-600">
                        Dependencies adjust automatically when tasks shift
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        Critical path tracking
                      </h4>
                      <p className="text-sm text-slate-600">
                        See which tasks directly impact your deadline
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        Real-time updates
                      </h4>
                      <p className="text-sm text-slate-600">
                        Everyone sees changes instantly
                      </p>
                    </div>
                  </div>
                </div>

                <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2">
                  Find out more
                  <ChevronRight size={18} className="sm:w-5 sm:h-5" />
                </button>
              </>
            )}

            {activeFeature === "resource" && (
              <>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Optimize resource distribution
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-orange-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        Live utilization rates
                      </h4>
                      <p className="text-sm text-slate-600">
                        See which equipment is idle vs overbooked
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        Low stock alerts
                      </h4>
                      <p className="text-sm text-slate-600">
                        Never run out of critical materials mid-project
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        Cross-project allocation
                      </h4>
                      <p className="text-sm text-slate-600">
                        Share resources between sites efficiently
                      </p>
                    </div>
                  </div>
                </div>

                <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2">
                  Find out more
                  <ChevronRight size={18} className="sm:w-5 sm:h-5" />
                </button>
              </>
            )}

            {activeFeature === "labor" && (
              <>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Track every worker, eliminate ghost workers
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        Digital sign-in/sign-out
                      </h4>
                      <p className="text-sm text-slate-600">
                        Workers clock in on tablets or phones with timestamps
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        Ghost worker detection
                      </h4>
                      <p className="text-sm text-slate-600">
                        Flag workers who are paid but never sign in
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        Attendance-based payroll
                      </h4>
                      <p className="text-sm text-slate-600">
                        Pay only for verified days worked
                      </p>
                    </div>
                  </div>
                </div>

                <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2">
                  Find out more
                  <ChevronRight size={18} className="sm:w-5 sm:h-5" />
                </button>
              </>
            )}

            {activeFeature === "reports" && (
              <>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Generate comprehensive insights
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        Budget variance analysis
                      </h4>
                      <p className="text-sm text-slate-600">
                        Track where you're over or under budget
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        Earned value metrics
                      </h4>
                      <p className="text-sm text-slate-600">
                        PMI-standard CPI, SPI, and forecast calculations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        One-click exports
                      </h4>
                      <p className="text-sm text-slate-600">
                        PDF and Excel reports ready for stakeholders
                      </p>
                    </div>
                  </div>
                </div>

                <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2">
                  Find out more
                  <ChevronRight size={18} className="sm:w-5 sm:h-5" />
                </button>
              </>
            )}

            {activeFeature === "documentation" && (
              <>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Capture site progress from the field
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        Photo documentation
                      </h4>
                      <p className="text-sm text-slate-600">
                        Timestamped photos with GPS location
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-orange-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        Daily site reports
                      </h4>
                      <p className="text-sm text-slate-600">
                        Quick forms for progress, issues, and safety
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        Quality inspections
                      </h4>
                      <p className="text-sm text-slate-600">
                        Checklists with approval workflows
                      </p>
                    </div>
                  </div>
                </div>

                <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2">
                  Find out more
                  <ChevronRight size={18} className="sm:w-5 sm:h-5" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
