"use client";

import { useEffect, useRef } from "react";

const ArrowRight = () => (
  <svg
    className="w-3.5 h-3.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

const ArrowTopRight = () => (
  <svg
    className="w-2.5 h-2.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      d="M4 4h16v16m0-16L4 20"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    className="w-4 h-4 text-slate-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

export default function SocialProof() {
  const openCaseRef = useRef<number | null>(null);

  useEffect(() => {
    const cellsToHideMap: Record<number, number[]> = {
      1: [4, 5, 10, 11],
      2: [3, 4, 9, 10],
      3: [3, 4, 9, 10],
    };
    const triggerCellMap: Record<number, number> = { 1: 3, 2: 8, 3: 11 };

    function closeCase(n: number) {
      const caseEl = document.getElementById("case-" + n);
      if (caseEl) caseEl.style.display = "none";
      for (let i = 1; i <= 12; i++) {
        const cell = document.getElementById("cell-" + i);
        if (cell) cell.style.display = "flex";
      }
      const trigger = triggerCellMap[n];
      document.getElementById("arrow-" + n)?.classList.remove("hidden");
      document.getElementById("label-" + n)?.classList.add("hidden");
      document
        .getElementById("cell-" + trigger)
        ?.classList.remove("bg-slate-50");
    }

    function toggleCase(n: number) {
      if (openCaseRef.current === n) {
        closeCase(n);
        openCaseRef.current = null;
        return;
      }
      if (openCaseRef.current !== null) closeCase(openCaseRef.current);
      for (let i = 1; i <= 12; i++) {
        const cell = document.getElementById("cell-" + i);
        if (cell) cell.style.display = "flex";
      }
      cellsToHideMap[n].forEach((id) => {
        const cell = document.getElementById("cell-" + id);
        if (cell) cell.style.display = "none";
      });
      const caseEl = document.getElementById("case-" + n);
      if (caseEl) caseEl.style.display = "flex";
      const trigger = triggerCellMap[n];
      document.getElementById("arrow-" + n)?.classList.add("hidden");
      document.getElementById("label-" + n)?.classList.remove("hidden");
      document.getElementById("cell-" + trigger)?.classList.add("bg-slate-50");
      openCaseRef.current = n;
    }

    const h1 = () => toggleCase(1);
    const h2 = () => toggleCase(2);
    const h3 = () => toggleCase(3);

    document.getElementById("cell-3")?.addEventListener("click", h1);
    document.getElementById("cell-8")?.addEventListener("click", h2);
    document.getElementById("cell-11")?.addEventListener("click", h3);

    return () => {
      document.getElementById("cell-3")?.removeEventListener("click", h1);
      document.getElementById("cell-8")?.removeEventListener("click", h2);
      document.getElementById("cell-11")?.removeEventListener("click", h3);
    };
  }, []);

  return (
    <section className="w-full mt-16 lg:mt-20">
      <h2 className="text-center text-[11px] font-bold tracking-[0.2em] text-slate-900 mb-8 uppercase px-6">
        Trusted by leading construction firms
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-slate-200">
        {/* Cell 1: Stanbuild */}
        <div
          id="cell-1"
          className="h-36 flex items-center justify-center border-b border-r border-slate-200 group cursor-default"
        >
          <span className="text-xl font-black tracking-tighter text-slate-900 opacity-80 group-hover:opacity-100 transition-all">
            STAN<span className="font-light text-slate-500">BUILD</span>
          </span>
        </div>

        {/* Cell 2: Buildscape */}
        <div
          id="cell-2"
          className="h-36 flex items-center justify-center border-b border-r border-slate-200 group cursor-default"
        >
          <span className="font-light text-lg tracking-[0.15em] text-blue-700 uppercase opacity-70 group-hover:opacity-100 transition-all">
            Buildscape
          </span>
        </div>

        {/* Cell 3: Skyline — TRIGGER 1 */}
        <div
          id="cell-3"
          className="h-36 flex items-center justify-center border-b border-r border-slate-200 relative group cursor-pointer hover:bg-slate-50 transition-colors"
        >
          <div className="flex flex-col items-center gap-1 opacity-75 group-hover:opacity-100 transition-all">
            <span className="text-[13px] font-black tracking-widest text-emerald-700 uppercase">
              Skyline
            </span>
            <span className="text-[8px] font-bold tracking-[0.2em] text-slate-400 uppercase">
              Kenya
            </span>
          </div>
          <span
            id="arrow-1"
            className="absolute bottom-3 right-3 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <ArrowRight />
          </span>
          <span
            id="label-1"
            className="hidden absolute bottom-3 right-3 text-[9px] font-bold text-slate-500 uppercase tracking-widest items-center gap-1"
          >
            Case Study <ArrowTopRight />
          </span>
        </div>

        {/* Cell 4: Optima */}
        <div
          id="cell-4"
          className="h-36 flex items-center justify-center border-b border-r border-slate-200 group cursor-default"
        >
          <div className="flex flex-col items-center gap-1 opacity-75 group-hover:opacity-100 transition-all">
            <span className="text-lg font-black tracking-tight text-amber-700 uppercase">
              Optima
            </span>
            <span className="text-[8px] font-bold tracking-[0.2em] text-slate-400 uppercase">
              Civil Works
            </span>
          </div>
        </div>

        {/* Cell 5: Rimpa */}
        <div
          id="cell-5"
          className="h-36 flex items-center justify-center border-b border-r border-slate-200 group cursor-default"
        >
          <span className="text-2xl font-black tracking-tighter text-slate-900 opacity-75 group-hover:opacity-100 transition-all">
            rimpa<span className="font-light text-slate-400">.</span>
          </span>
        </div>

        {/* Cell 6: Kensetsu */}
        <div
          id="cell-6"
          className="h-36 flex items-center justify-center border-b border-r border-slate-200 group cursor-default"
        >
          <div className="flex flex-col items-center gap-1 opacity-75 group-hover:opacity-100 transition-all">
            <span className="text-[13px] font-black tracking-[0.15em] text-indigo-700 uppercase">
              Kensetsu
            </span>
            <span className="text-[8px] font-semibold tracking-widest text-slate-400 uppercase">
              Ltd
            </span>
          </div>
        </div>

        {/* Cell 7: Vertex */}
        <div
          id="cell-7"
          className="h-36 flex items-center justify-center border-b border-r border-slate-200 group cursor-default"
        >
          <span className="text-2xl font-black tracking-tighter text-slate-900 opacity-75 group-hover:opacity-100 transition-all">
            V<span className="font-light text-xl text-slate-500">ERTEX</span>
          </span>
        </div>

        {/* Cell 8: Maisha — TRIGGER 2 */}
        <div
          id="cell-8"
          className="h-36 flex items-center justify-center border-b border-r border-slate-200 relative group cursor-pointer hover:bg-slate-50 transition-colors"
        >
          <div className="flex flex-col items-center gap-1 opacity-75 group-hover:opacity-100 transition-all">
            <span className="text-[13px] font-black tracking-[0.15em] text-rose-700 uppercase">
              Maisha
            </span>
            <span className="text-[8px] font-bold tracking-[0.2em] text-slate-400 uppercase">
              Construct
            </span>
          </div>
          <span
            id="arrow-2"
            className="absolute bottom-3 right-3 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <ArrowRight />
          </span>
          <span
            id="label-2"
            className="hidden absolute bottom-3 right-3 text-[9px] font-bold text-slate-500 uppercase tracking-widest items-center gap-1"
          >
            Case Study <ArrowTopRight />
          </span>
        </div>

        {/* Cell 9: Meridian */}
        <div
          id="cell-9"
          className="h-36 flex items-center justify-center border-b border-r border-slate-200 group cursor-default"
        >
          <span className="text-[13px] font-black tracking-[0.2em] text-slate-700 uppercase opacity-75 group-hover:opacity-100 transition-all">
            Meridian
          </span>
        </div>

        {/* Cell 10: Protek */}
        <div
          id="cell-10"
          className="h-36 flex items-center justify-center border-b border-r border-slate-200 group cursor-default"
        >
          <span className="text-xl font-black tracking-tight text-blue-800 opacity-75 group-hover:opacity-100 transition-all">
            PRO<span className="font-thin text-slate-400">TEK</span>
          </span>
        </div>

        {/* Cell 11: Harbourage — TRIGGER 3 */}
        <div
          id="cell-11"
          className="h-36 flex items-center justify-center border-b border-r border-slate-200 relative group cursor-pointer hover:bg-slate-50 transition-colors"
        >
          <div className="flex flex-col items-center gap-1 opacity-75 group-hover:opacity-100 transition-all">
            <span className="text-[12px] font-black tracking-[0.15em] text-teal-700 uppercase">
              Harbourage
            </span>
            <span className="text-[8px] font-bold tracking-widest text-slate-400 uppercase">
              EA
            </span>
          </div>
          <span
            id="arrow-3"
            className="absolute bottom-3 right-3 text-slate-300 group-hover:text-slate-500 transition-colors"
          >
            <ArrowRight />
          </span>
          <span
            id="label-3"
            className="hidden absolute bottom-3 right-3 text-[9px] font-bold text-slate-500 uppercase tracking-widest items-center gap-1"
          >
            Case Study <ArrowTopRight />
          </span>
        </div>

        {/* Cell 12: Trident */}
        <div
          id="cell-12"
          className="h-36 flex items-center justify-center border-b border-r border-slate-200 group cursor-default"
        >
          <span className="text-xl font-black tracking-tight text-slate-900 opacity-75 group-hover:opacity-100 transition-all">
            T<span className="font-thin text-slate-400">RIDENT</span>
          </span>
        </div>

        {/* Case 1 */}
        <div
          id="case-1"
          className="hidden order-last lg:order-0 col-span-2 lg:col-start-4 lg:row-start-1 lg:row-span-2 border-b border-r border-slate-200 p-8 lg:p-10 flex-col justify-center bg-white"
        >
          <p className="text-base lg:text-lg font-semibold text-slate-900 leading-snug tracking-tight mb-6">
            "BOQ alone saved 3 weeks per project. Our QS team finally does
            analysis, not spreadsheets."
          </p>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
              <UserIcon />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-900 uppercase tracking-wide">
                Amina Osei
              </p>
              <p className="text-xs text-slate-600">QS Lead, Skyline Kenya</p>
            </div>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-slate-900 transition-colors"
          >
            Read case study <ArrowTopRight />
          </a>
        </div>

        {/* Case 2 */}
        <div
          id="case-2"
          className="hidden order-last lg:order-0 col-span-2 lg:col-start-3 lg:row-start-1 lg:row-span-2 border-b border-r border-slate-200 p-8 lg:p-10 flex-col justify-center bg-white"
        >
          <p className="text-base lg:text-lg font-semibold text-slate-900 leading-snug tracking-tight mb-6">
            "12 spreadsheets down to one platform. Time saved goes straight into
            winning more work."
          </p>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
              <UserIcon />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-900 uppercase tracking-wide">
                Fatuma Hassan
              </p>
              <p className="text-xs text-slate-600">CEO, Maisha Construct</p>
            </div>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-slate-900 transition-colors"
          >
            Read case study <ArrowTopRight />
          </a>
        </div>

        {/* Case 3 */}
        <div
          id="case-3"
          className="hidden order-last lg:order-0 col-span-2 lg:col-start-3 lg:row-start-1 lg:row-span-2 border-b border-r border-slate-200 p-8 lg:p-10 flex-col justify-center bg-white"
        >
          <p className="text-base lg:text-lg font-semibold text-slate-900 leading-snug tracking-tight mb-6">
            "Board used to get a monthly PDF. Now they have a live dashboard.
            Decisions changed overnight."
          </p>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
              <UserIcon />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-900 uppercase tracking-wide">
                Sarah Njoroge
              </p>
              <p className="text-xs text-slate-600">
                Operations Lead, Harbourage EA
              </p>
            </div>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-slate-900 transition-colors"
          >
            Read case study <ArrowTopRight />
          </a>
        </div>
      </div>
    </section>
  );
}
