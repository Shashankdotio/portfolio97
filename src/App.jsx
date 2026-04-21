import { Canvas } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { HeroObject } from "./components/hero/HeroObject";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { FocusAreasSection } from "./components/sections/FocusAreasSection";
import { EducationSection } from "./components/sections/EducationSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { blurWrapper } from "./styles/styles";
import { isMobile } from "./constants/config";

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const smoothScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* GLOBAL CANVAS */}
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          opacity: 1,
        }}
      >
        <ambientLight intensity={isMobile ? 0.9 : 0.45} />
        <directionalLight
          position={[6, 4, 4]}
          intensity={isMobile ? 1.2 : 1.1}
        />
        <directionalLight
          position={[-4, -2, -6]}
          intensity={isMobile ? 0.6 : 0.5}
        />
        <HeroObject scrollY={scrollY} smoothScroll={smoothScroll} />
      </Canvas>

      {/* CONTENT */}
      <div style={{ position: "relative", zIndex: 1, color: "white" }}>
        <HeroSection />

        <div style={blurWrapper}>
          <AboutSection />
          <FocusAreasSection />
          <EducationSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </>
  );
}
