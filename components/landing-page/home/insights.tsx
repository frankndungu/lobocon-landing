"use client";

import { useRef } from "react";

const CARDS = [
  {
    img: "https://tensix.com/wp-content/uploads/2018/07/Displaying-Task-Path-In-Microsoft-Project-Fig-1.jpg",
    alt: "MS Project import",
    title: "How to Import Your Schedule from MS Project into Lobocon",
    tags: ["Tutorial", "Scheduling"],
  },
  {
    img: "https://images.unsplash.com/photo-1711606815631-38d32cdaec3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Variation orders",
    title: "How to Track Variation Orders and Protect Your Margin",
    tags: ["Blog", "Commercial"],
  },
  {
    img: "https://pmproguide.com/wp-content/uploads/2023/08/2.png",
    alt: "BOQ Excel",
    title: "Migrating Your BOQ from Excel to Lobocon in Under an Hour",
    tags: ["Tutorial", "BOQ"],
  },
  {
    img: "https://www-cdn.usemotion.com/webflow-export/blog/earned-value-management/64c2a345ee449ae7c2c89b7b_key_earned_value_management_metrics_visualized_58hx.png",
    alt: "Earned value",
    title: "Earned Value Management for Construction PMs — A Practical Guide",
    tags: ["Blog", "EVM"],
  },
  {
    img: "https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Client reporting webinar",
    title:
      "Webinar: How to Give Clients Live Project Access Without Losing Control",
    tags: ["Webinar", "Reporting"],
  },
  {
    img: "https://images.unsplash.com/photo-1534951009808-766178b47a4f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Cash flow",
    title:
      "Why Cash Flow Forecasting Is the Most Overlooked Tool in Construction",
    tags: ["Blog", "Finance"],
  },
];

const TAG_COLORS: Record<string, string> = {
  Tutorial: "bg-blue-50 text-blue-700 border border-blue-100",
  Blog: "bg-cyan-50 text-cyan-700 border border-cyan-100",
  Webinar: "bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-100",
  Scheduling: "bg-emerald-50 text-emerald-700 border border-emerald-100",
  Commercial: "bg-amber-50 text-amber-700 border border-amber-100",
  BOQ: "bg-amber-50 text-amber-700 border border-amber-100",
  EVM: "bg-indigo-50 text-indigo-700 border border-indigo-100",
  Reporting: "bg-violet-50 text-violet-700 border border-violet-100",
  Finance: "bg-emerald-50 text-emerald-700 border border-emerald-100",
};

export default function Insights() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
  };
  const onMouseLeave = () => {
    isDown.current = false;
  };
  const onMouseUp = () => {
    isDown.current = false;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft =
      scrollLeft.current - (x - startX.current) * 1.5;
  };

  return (
    <>
      <section className="w-full max-w-345 mx-auto px-6 lg:px-14 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          {/* Left: heading */}
          <div className="shrink-0 lg:w-55 mb-10 lg:mb-0 lg:pt-1">
            <p className="text-[11px] font-bold tracking-[0.2em] text-slate-900 uppercase mb-4">
              Inside Lobocon
            </p>
            <h2 className="text-[28px] sm:text-[32px] font-black text-slate-800 leading-tight tracking-[-0.02em] mb-6">
              Insights
              <br />
              &amp; Resources
            </h2>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-700 hover:text-slate-900 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 10 5 5-5 5" />
                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
              </svg>
              View all
            </a>
          </div>

          {/* Right: drag-scroll cards */}
          <div className="flex-1 min-w-0">
            <div
              ref={scrollRef}
              className="cards-scroll"
              onMouseDown={onMouseDown}
              onMouseLeave={onMouseLeave}
              onMouseUp={onMouseUp}
              onMouseMove={onMouseMove}
            >
              {CARDS.map((card, i) => (
                <article key={i} className="blog-card">
                  <img className="card-img" src={card.img} alt={card.alt} />
                  <div className="mt-5">
                    <h3 className="text-[18px] font-black text-slate-900 leading-snug tracking-tight mb-3">
                      {card.title}
                    </h3>
                    <div className="flex gap-2 flex-wrap">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`inline-block px-3 py-1 rounded text-[11px] font-semibold ${TAG_COLORS[tag] ?? "bg-slate-100 text-slate-600 border border-slate-200"}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="border-none border-t border-slate-200 m-0" />
    </>
  );
}
