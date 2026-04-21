import { useState } from "react";

export function HoverCard({ children, style }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...style,
        transform: hovered
          ? "translateY(-4px) scale(1.01)"
          : "translateY(0px) scale(1)",
        background: hovered ? "rgba(255,255,255,0.12)" : style.background,
        transition:
          "transform 0.35s cubic-bezier(.2,.8,.2,1), background 0.35s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}
