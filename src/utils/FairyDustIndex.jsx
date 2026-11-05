"use client";
import FairyDustCursor from "./FairyDustCursor";
function FairyDustIndex() {
  return (
    <>
      <FairyDustCursor
        colors={["#FF0000", "#00FF00", "#0000FF"]}
        characterSet={["🟪", "🟪", "🟪"]}
        particleSize={5}
        particleCount={2}
        gravity={0.017}
        fadeSpeed={0.97}
        initialVelocity={{ min: 0.7, max: 2.0 }}
      />
    </>
  );
}
export default FairyDustIndex;
