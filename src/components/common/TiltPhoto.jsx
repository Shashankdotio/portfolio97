import { useRef } from "react";
import { tiltWrapper, tiltImage } from "../../styles/styles";

export function TiltPhoto({ src, alt }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 12;
    const rotateY = (x - centerX) / 12;

    el.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
    el.style.boxShadow = "0 25px 60px rgba(0,0,0,0.45)";
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;

    el.style.transform = `
      perspective(900px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
    el.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={tiltWrapper}
    >
      <img src={src} alt={alt} style={tiltImage} />
    </div>
  );
}
