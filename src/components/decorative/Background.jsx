import { useEffect, useRef } from "react";
import CircuitGrid from "../../assets/svg/circuit-grid.svg?react";
import CircuitPaths from "../../assets/svg/circuit-paths-only.svg?react";

const PULSE_COLORS = [
  "var(--color-pink-100)",
  "var(--color-pink-200)",
  "var(--color-pink-300)",
];

function Background() {
  const pulseRef = useRef(null);

  useEffect(() => {
    const strokePaths = pulseRef.current.querySelectorAll("path[stroke]");
    const fillPaths = pulseRef.current.querySelectorAll("path[fill]");

    // Defining pulse properties on path[stroke]
    strokePaths.forEach((path) => {
      path.setAttribute("pathLength", "100");
      const activePulse = Math.random() < 0.35;
      path.style.display = activePulse ? "" : "none";
      path.style.setProperty("--duration", `${3 + Math.random() * 6}s`);
      path.style.setProperty("--delay", `${-Math.random() * 8}s`);
      path.style.stroke =
        PULSE_COLORS[Math.floor(Math.random() * PULSE_COLORS.length)];
    });

    // Defining animation properties for fill paths
    fillPaths.forEach((path) => {
      const activeFlicker = Math.random() < 0.35;
      path.style.display = activeFlicker ? "" : "none";
      path.style.setProperty("--duration", `${3 + Math.random() * 10}s`);
      path.style.setProperty("--delay", `${-Math.random() * 4}s`);
    });
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <CircuitGrid
        className="absolute inset-0 h-full w-full opacity-70"
        preserveAspectRatio="xMidYMid slice"
      />
      <div ref={pulseRef} className="absolute inset-0">
        <CircuitPaths
          className="circuit-pulse h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        />
      </div>
    </div>
  );
}

export default Background;
