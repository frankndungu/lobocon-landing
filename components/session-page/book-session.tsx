"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT } from "@/components/contact/contact";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL!;

const Logo = () => (
  <svg
    viewBox="0 0 32 34"
    fill="none"
    style={{ height: "26px", width: "auto" }}
  >
    <polygon
      points="16,2 28,8 16,14 4,8"
      fill="none"
      stroke="rgba(255,255,255,0.9)"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <line
      x1="4"
      y1="8"
      x2="4"
      y2="22"
      stroke="rgba(255,255,255,0.9)"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <line
      x1="16"
      y1="14"
      x2="16"
      y2="28"
      stroke="rgba(255,255,255,0.9)"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <line
      x1="28"
      y1="8"
      x2="28"
      y2="22"
      stroke="rgba(255,255,255,0.9)"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <polygon
      points="16,16 28,22 16,28 4,22"
      fill="none"
      stroke="rgba(255,255,255,0.9)"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const SHAPES = [
  { cx: 0.6, cy: 0.15, s: 88, col: "#059669", spd: 0.7, ph: 0 },
  { cx: 0.85, cy: 0.2, s: 56, col: "#10b981", spd: 1.0, ph: 1.4 },
  { cx: 0.15, cy: 0.55, s: 68, col: "#047857", spd: 0.6, ph: 0.7 },
  { cx: 0.75, cy: 0.45, s: 46, col: "#34d399", spd: 1.2, ph: 2.1 },
  { cx: 0.45, cy: 0.8, s: 78, col: "#065f46", spd: 0.85, ph: 1.0 },
  { cx: 0.85, cy: 0.75, s: 40, col: "#6ee7b7", spd: 1.15, ph: 3.0 },
  { cx: 0.55, cy: 0.3, s: 108, col: null, spd: 0.45, ph: 0.2 },
  { cx: 0.25, cy: 0.7, s: 62, col: null, spd: 0.65, ph: 1.7 },
  { cx: 0.9, cy: 0.4, s: 50, col: null, spd: 0.9, ph: 2.8 },
];

function dk(hex: string, a: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${Math.max(0, r - a)},${Math.max(0, g - a)},${Math.max(0, b - a)})`;
}

const ChevronDown = () => (
  <svg
    className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
  >
    <path
      d="M1 1l5 5 5-5"
      stroke="#94a3b8"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function BookASession() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companySize: "",
    companyName: "",
    website: "",
    source: "",
    challenge: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/crm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("CRM submission failed");
      window.location.href = CALENDLY_URL;
    } catch {
      setError(
        `Something went wrong. Please try again or WhatsApp us on ${CONTACT.phoneDisplay}.`,
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const context = ctx;
    let W = 0;
    let H = 0;

    function resize() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    function drawPyramid(
      cx: number,
      cy: number,
      s: number,
      col: string | null,
      t: number,
      spd: number,
      ph: number,
    ) {
      const x = cx * W;
      const y = cy * H + Math.sin(t * spd + ph) * 9;
      const dx = s * 0.866;
      const dy = s * 0.5;
      const hBase = s * 0.4;
      const hRoof = s * 0.55;
      context.save();
      if (!col) {
        context.globalAlpha = 0.22;
        context.setLineDash([5, 4]);
        context.strokeStyle = "rgba(52,211,153,0.6)";
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(x, y - dy + hBase);
        context.lineTo(x + dx, y + hBase);
        context.lineTo(x, y + dy + hBase);
        context.lineTo(x - dx, y + hBase);
        context.closePath();
        context.stroke();
        context.beginPath();
        context.moveTo(x, y - dy);
        context.lineTo(x + dx, y);
        context.lineTo(x, y + dy);
        context.lineTo(x - dx, y);
        context.closePath();
        context.stroke();
        context.beginPath();
        context.moveTo(x - dx, y);
        context.lineTo(x - dx, y + hBase);
        context.stroke();
        context.beginPath();
        context.moveTo(x + dx, y);
        context.lineTo(x + dx, y + hBase);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y + dy);
        context.lineTo(x, y + dy + hBase);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y - dy);
        context.lineTo(x, y - dy + hBase);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y - hRoof);
        context.lineTo(x - dx, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y - hRoof);
        context.lineTo(x + dx, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y - hRoof);
        context.lineTo(x, y + dy);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y - hRoof);
        context.lineTo(x, y - dy);
        context.stroke();
      } else {
        context.globalAlpha = 0.88;
        context.setLineDash([]);
        context.strokeStyle = "rgba(255,255,255,0.12)";
        context.lineWidth = 0.7;
        context.fillStyle = dk(col, 35);
        context.beginPath();
        context.moveTo(x - dx, y);
        context.lineTo(x, y + dy);
        context.lineTo(x, y + dy + hBase);
        context.lineTo(x - dx, y + hBase);
        context.closePath();
        context.fill();
        context.stroke();
        context.fillStyle = dk(col, 18);
        context.beginPath();
        context.moveTo(x + dx, y);
        context.lineTo(x, y + dy);
        context.lineTo(x, y + dy + hBase);
        context.lineTo(x + dx, y + hBase);
        context.closePath();
        context.fill();
        context.stroke();
        context.fillStyle = dk(col, 10);
        context.beginPath();
        context.moveTo(x, y - hRoof);
        context.lineTo(x + dx, y);
        context.lineTo(x, y + dy);
        context.closePath();
        context.fill();
        context.stroke();
        context.fillStyle = col;
        context.beginPath();
        context.moveTo(x, y - hRoof);
        context.lineTo(x - dx, y);
        context.lineTo(x, y + dy);
        context.closePath();
        context.fill();
        context.stroke();
      }
      context.restore();
    }

    let t0: number | null = null;
    function animate(ts: number) {
      if (!t0) t0 = ts;
      const t = (ts - t0) / 1000;
      context.clearRect(0, 0, W, H);
      context.fillStyle = "rgba(52,211,153,0.1)";
      for (let gx = 0; gx < W; gx += 24) {
        for (let gy = 0; gy < H; gy += 24) {
          context.beginPath();
          context.arc(gx, gy, 0.9, 0, Math.PI * 2);
          context.fill();
        }
      }
      const vg = context.createRadialGradient(
        W * 0.5,
        H * 0.5,
        H * 0.2,
        W * 0.5,
        H * 0.5,
        H * 0.85,
      );
      vg.addColorStop(0, "rgba(6,78,59,0)");
      vg.addColorStop(1, "rgba(2,44,34,0.5)");
      context.fillStyle = vg;
      context.fillRect(0, 0, W, H);
      SHAPES.forEach((c) =>
        drawPyramid(c.cx, c.cy, c.s, c.col, t, c.spd, c.ph),
      );
      const topMask = context.createLinearGradient(0, 0, 0, H * 0.32);
      topMask.addColorStop(0, "rgba(6,78,59,0.82)");
      topMask.addColorStop(1, "rgba(6,78,59,0)");
      context.fillStyle = topMask;
      context.fillRect(0, 0, W, H * 0.32);
      const botMask = context.createLinearGradient(0, H * 0.82, 0, H);
      botMask.addColorStop(0, "rgba(6,78,59,0)");
      botMask.addColorStop(1, "rgba(6,78,59,0.85)");
      context.fillStyle = botMask;
      context.fillRect(0, H * 0.82, W, H * 0.18);
      rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const inputCls =
    "w-full border border-slate-200 rounded-lg px-4 py-3 text-[14px] text-slate-900 placeholder-slate-400 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 transition-all bg-white";

  return (
    <div className="flex h-screen overflow-hidden">
      {/* ── Left panel ── */}
      <div
        className="hidden md:block relative overflow-hidden shrink-0"
        style={{ width: "45%", background: "#064e3b" }}
      >
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute top-10 left-10 right-10 z-10">
          <h2
            className="font-black text-white leading-[1.05] tracking-[-0.025em]"
            style={{ fontSize: "clamp(32px, 3.2vw, 48px)" }}
          >
            Build with
            <br />
            confidence.
          </h2>
        </div>
        <div className="absolute bottom-10 left-10 z-10 flex items-center gap-2.5">
          <Logo />
          <span
            style={{
              fontSize: "17px",
              fontWeight: 800,
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "-0.3px",
            }}
          >
            lobocon
          </span>
        </div>
      </div>

      {/* ── Right panel ── */}
      <div
        className="flex-1 overflow-y-auto flex items-start justify-center"
        style={{ padding: "48px 48px 40px" }}
      >
        <div style={{ width: "100%", maxWidth: "460px" }}>
          <div style={{ marginBottom: "32px" }}>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: 800,
                color: "#0f172a",
                letterSpacing: "-0.02em",
              }}
            >
              Request a demo
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <div className="grid grid-cols-2 gap-3">
              <input
                className={inputCls}
                type="text"
                name="firstName"
                placeholder="First name*"
                required
                value={form.firstName}
                onChange={handleChange}
              />
              <input
                className={inputCls}
                type="text"
                name="lastName"
                placeholder="Last name*"
                required
                value={form.lastName}
                onChange={handleChange}
              />
            </div>

            <input
              className={inputCls}
              type="email"
              name="email"
              placeholder="Work email*"
              required
              value={form.email}
              onChange={handleChange}
            />
            <input
              className={inputCls}
              type="tel"
              name="phone"
              placeholder="Mobile phone number*"
              value={form.phone}
              onChange={handleChange}
            />

            <div className="relative">
              <select
                className={`${inputCls} appearance-none cursor-pointer pr-10`}
                name="companySize"
                required
                value={form.companySize}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Company size*
                </option>
                <option>1–10 employees</option>
                <option>11–50 employees</option>
                <option>51–200 employees</option>
                <option>201–500 employees</option>
                <option>500+ employees</option>
              </select>
              <ChevronDown />
            </div>

            <input
              className={inputCls}
              type="text"
              name="companyName"
              placeholder="Company name*"
              required
              value={form.companyName}
              onChange={handleChange}
            />
            <input
              className={inputCls}
              type="url"
              name="website"
              placeholder="Company website (e.g. https://company.com)"
              value={form.website}
              onChange={handleChange}
            />

            <div className="relative">
              <select
                className={`${inputCls} appearance-none cursor-pointer pr-10`}
                name="source"
                required
                value={form.source}
                onChange={handleChange}
              >
                <option value="" disabled>
                  How did you hear about us?*
                </option>
                <option>LinkedIn</option>
                <option>Google Search</option>
                <option>Instagram</option>
                <option>Facebook</option>
                <option>Twitter / X</option>
                <option>WhatsApp</option>
                <option>Referral from a colleague</option>
                <option>Industry event</option>
                <option>Blog / Article</option>
                <option>Other</option>
              </select>
              <ChevronDown />
            </div>

            <textarea
              className={inputCls}
              name="challenge"
              style={{ resize: "vertical", minHeight: "80px" }}
              placeholder="What's your biggest project management challenge right now?*"
              value={form.challenge}
              onChange={handleChange}
            />

            {error && (
              <p
                style={{
                  fontSize: "13px",
                  color: "#ef4444",
                  background: "#fef2f2",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                {error}
              </p>
            )}

            <p style={{ fontSize: "13px", color: "#64748b" }}>
              By clicking this button, you agree to our{" "}
              <a
                href="#"
                style={{ color: "#7c3aed", textDecoration: "underline" }}
              >
                Privacy Policy.
              </a>
            </p>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                background: loading ? "#475569" : "#0f172a",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "14px",
                fontSize: "15px",
                fontWeight: 700,
                cursor: loading ? "not-allowed" : "pointer",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => {
                if (!loading) e.currentTarget.style.background = "#1e293b";
              }}
              onMouseLeave={(e) => {
                if (!loading)
                  e.currentTarget.style.background = loading
                    ? "#475569"
                    : "#0f172a";
              }}
            >
              {loading ? "Booking your session..." : "Get a demo"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
