import { useFrame } from "@react-three/fiber";
import { TorusKnot } from "@react-three/drei";
import { useRef } from "react";
import { isMobile } from "../../constants/config";

export function HeroObject({ scrollY, smoothScroll }) {
  const mesh = useRef(null);

  useFrame(() => {
    if (!mesh.current) return;
    // Apple-style smoothing
    const ease = isMobile ? 0.14 : 0.1;
    smoothScroll.current += (scrollY - smoothScroll.current) * ease;

    const speed = isMobile ? 0.00032 : 0.0005;
    const t = smoothScroll.current * speed;

    mesh.current.rotation.y +=
      (t * Math.PI * 1.1 - mesh.current.rotation.y) * 0.042;

    mesh.current.rotation.x +=
      (t * Math.PI * 0.28 - mesh.current.rotation.x) * 0.042;

    const idle = Math.sin(performance.now() * 0.00099) * 0.03;
    mesh.current.rotation.z = idle;

    const maxDrop = isMobile ? -0.85 : -1.35;
    const targetY = Math.max(-t * 1.4, maxDrop);
    mesh.current.position.y += (targetY - mesh.current.position.y) * 0.042;
  });

  return (
    <TorusKnot ref={mesh} args={[1.4, 0.45, 120, 16]}>
      <meshStandardMaterial
        color={isMobile ? "#6b7280" : "#d1d1d6"}
        roughness={isMobile ? 0.3 : 0.3}
        metalness={isMobile ? 0.9 : 0.9}
      />
    </TorusKnot>
  );
}
