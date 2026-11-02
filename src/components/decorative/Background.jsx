import CircuitGrid from "../../assets/svg/circuit-grid.svg?react";

export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <CircuitGrid
        className="absolute inset-0 h-full w-full opacity-50"
        preserveAspectRatio="xMidYMid slice"
      />
    </div>
  );
}
