"use client";

type CubeColor = "emerald" | "amber" | "violet";
type AnimClass = "cube-a" | "cube-b" | "cube-c";

interface CubeConfig {
  color: CubeColor;
  anim: AnimClass;
  left: string;
  top: string;
  size: number;
  opacity: number;
  ghost?: boolean;
}

const CUBES: CubeConfig[] = [
  {
    color: "emerald",
    anim: "cube-b",
    left: "8%",
    top: "10%",
    size: 52,
    opacity: 0.7,
  },
  {
    color: "amber",
    anim: "cube-a",
    left: "19%",
    top: "18%",
    size: 36,
    opacity: 0.5,
  },
  {
    color: "violet",
    anim: "cube-c",
    left: "31%",
    top: "6%",
    size: 44,
    opacity: 0.6,
  },
  {
    color: "emerald",
    anim: "cube-b",
    left: "43%",
    top: "2%",
    size: 60,
    opacity: 1,
    ghost: true,
  },
  {
    color: "amber",
    anim: "cube-b",
    left: "57%",
    top: "12%",
    size: 40,
    opacity: 0.55,
  },
  {
    color: "emerald",
    anim: "cube-a",
    left: "68%",
    top: "8%",
    size: 32,
    opacity: 0.5,
  },
  {
    color: "violet",
    anim: "cube-c",
    left: "78%",
    top: "14%",
    size: 38,
    opacity: 0.6,
  },
  {
    color: "emerald",
    anim: "cube-a",
    left: "88%",
    top: "4%",
    size: 48,
    opacity: 1,
    ghost: true,
  },
];

const COLORS: Record<
  CubeColor,
  { top: string; left: string; right: string; stroke: string }
> = {
  emerald: {
    top: "#ecfdf5",
    left: "#d1fae5",
    right: "#6ee7b7",
    stroke: "#059669",
  },
  amber: {
    top: "#fef9c3",
    left: "#fef08a",
    right: "#fde047",
    stroke: "#ca8a04",
  },
  violet: {
    top: "#ede9fe",
    left: "#ddd6fe",
    right: "#c4b5fd",
    stroke: "#7c3aed",
  },
};

const IsoCube = ({ cfg }: { cfg: CubeConfig }) => {
  if (cfg.ghost) {
    return (
      <svg
        className={`absolute ghost-cube`}
        style={{ left: cfg.left, top: cfg.top, width: `${cfg.size}px` }}
        viewBox="0 0 130 110"
        fill="none"
      >
        <polygon
          points="65,8 118,36 65,64 12,36"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.2"
          strokeDasharray="5 4"
          strokeLinejoin="round"
        />
        <polygon
          points="12,36 12,84 65,112 65,64"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.2"
          strokeDasharray="5 4"
          strokeLinejoin="round"
        />
        <polygon
          points="118,36 118,84 65,112 65,64"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.2"
          strokeDasharray="5 4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  const c = COLORS[cfg.color];
  return (
    <svg
      className={`absolute ${cfg.anim}`}
      style={{
        left: cfg.left,
        top: cfg.top,
        width: `${cfg.size}px`,
        opacity: cfg.opacity,
      }}
      viewBox="0 0 100 84"
      fill="none"
    >
      <polygon
        points="50,6 92,28 50,50 8,28"
        fill={c.top}
        stroke={c.stroke}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <polygon
        points="8,28 8,66 50,88 50,50"
        fill={c.left}
        stroke={c.stroke}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <polygon
        points="92,28 92,66 50,88 50,50"
        fill={c.right}
        stroke={c.stroke}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default function IsoShapes() {
  return (
    <div
      className="w-full bg-white relative overflow-hidden"
      style={{ height: "164px" }}
    >
      {/* Dot grid background */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="iso-dots"
          x="0"
          y="0"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="12" cy="12" r="0.8" fill="#cbd5e1" opacity="0.4" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#iso-dots)" />
      </svg>

      {/* Cubes */}
      {CUBES.map((cfg, i) => (
        <IsoCube key={i} cfg={cfg} />
      ))}
    </div>
  );
}
